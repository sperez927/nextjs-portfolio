import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { Chroma } from 'langchain/vectorstores/chroma'
import { ConversationalRetrievalQAChain, OpenAI } from 'langchain/chat_models'

let chain
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { question } = req.body

  if (!chain) {
    const embeddings = new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_API_KEY })
    const vectordb = await Chroma.fromTexts(
      [/* Insert text blob of your combined resume/project content here */],
      [{ id: 'resume' }],
      embeddings,
      { persistDirectory: process.env.VECTOR_PERSIST_DIR }
    )
    chain = ConversationalRetrievalQAChain.fromLLM(
      new OpenAI({ temperature: 0 }),
      vectordb.asRetriever()
    )
  }

  const { text } = await chain.call({ question })
  res.status(200).json({ answer: text })
}
