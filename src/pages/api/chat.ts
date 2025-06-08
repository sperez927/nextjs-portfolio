// pages/api/chat.ts
import { Chroma } from '@langchain/community/vectorstores/chroma'
import { Document } from '@langchain/core/documents'
import { StringOutputParser } from '@langchain/core/output_parsers'
import { ChatPromptTemplate } from '@langchain/core/prompts'
import { RunnableSequence } from '@langchain/core/runnables'
import { ChatOpenAI, OpenAIEmbeddings } from '@langchain/openai'
import { formatDocumentsAsString } from 'langchain/util/document'
import type { NextApiRequest, NextApiResponse } from 'next'

let chain: RunnableSequence<{ question: string }, string> | null = null

const resumeText = `
Salvador Perez is a Senior Full Stack Engineer with 10+ years of experience in React, Node.js, AWS, Java, Python, Django, and more. He has built logistics dashboards, AI-assisted HR tools, and scalable e-learning platforms across companies like BairesDev, WoahStork, CyberNova, and others.
` // Replace this with your real resume text

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const { question } = req.body
  if (!question || typeof question !== 'string') {
    return res.status(400).json({ error: 'Missing question' })
  }

  try {
    if (!chain) {
      const docs = [new Document({ pageContent: resumeText })]
      console.log("hei", process.env.OPENAI_API_KEY)

      const vectorstore = await Chroma.fromDocuments(
        docs,
        new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_API_KEY }),
        {
          collectionName: 'resume-collection',
          collectionMetadata: { source: 'resume' }
        }
      )

      const retriever = vectorstore.asRetriever()

      const prompt = ChatPromptTemplate.fromTemplate(`
You are an assistant that answers questions about Salvador Perez based on his resume.

Context:
{context}

Question: {question}`)

      const model = new ChatOpenAI({
        openAIApiKey: process.env.OPENAI_API_KEY,
        temperature: 0,
      })

      chain = RunnableSequence.from([
        {
          question: (input: { question: string }) => input.question,
          context: async (input: { question: string }) => {
            const retrieved = await retriever.invoke(input.question)
            return formatDocumentsAsString(retrieved)
          }
        },
        prompt,
        model,
        new StringOutputParser()
      ])
    }

    const result = await chain.invoke({ question })
    return res.status(200).json({ answer: result })
  } catch (err) {
    console.error('[API ERROR]', err)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
