import type { NextApiRequest, NextApiResponse } from 'next';
import { neon } from '@neondatabase/serverless';

// Connect to NeonDB using the connection string from the environment
const sql = neon(process.env.NEON_DATABASE_URL!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { timestamp } = req.body;
    if (!timestamp) {
      return res.status(400).json({ error: 'Missing timestamp in request body' });
    }
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
    if (Array.isArray(ip)) ip = ip[0];
    const userAgent = req.headers['user-agent'] || '';
    const language = req.headers['accept-language'] || '';
    // Simple platform extraction from user-agent
    let platform = '';
    if (userAgent) {
      const match = userAgent.match(/\(([^)]+)\)/);
      platform = match ? match[1] : '';
    }
    console.log(`Visitor logged: ${timestamp}, IP: ${ip}, User-Agent: ${userAgent}, Language: ${language}, Platform: ${platform}`);
    await sql`
      INSERT INTO visitors (timestamp, ip, user_agent, language, platform)
      VALUES (${timestamp}, ${ip}, ${userAgent}, ${language}, ${platform})
    `;
    res.status(200).json({ success: true });
  } catch (error: any) {
    // Log the error for debugging
    console.error('Failed to log visitor:', error);
    // Return a clear error message
    res.status(500).json({ error: error.message || 'Failed to log visitor' });
  }
}
