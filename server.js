import { GoogleGenAI } from '@google/genai'
import http from 'node:http'
import path from 'node:path'
import fs from 'node:fs/promises'
import url from 'node:url'
const PORT = 8000

const __dirname = import.meta.dirname
const server = http.createServer(async (req, res) => {
    if (req.url === '/api') {
        let body = ''
        for await (const chunk of req) {
            body += chunk
        }
        await getTranslation(JSON.parse(body), res)
    } else {
        await serveStatic(req, res, __dirname)
    }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))


async function getTranslation(req, res) {

    const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `translate from English to ${req.lan}: ${req.input}`,
        config: {
            systemInstruction: "You are a professional translator, return just one best translation",
        }           
    })

    const returnObj = {
        result: response.text
    }

    sendResponse(res, 200, 'application/json', returnObj)

} 



 async function serveStatic(req, res, baseDir) {

  const filePath = path.join(
    baseDir,
    req.url === '/' ? 'index.html' : req.url
  )

  const ext = path.extname(filePath)

  const contentType = getContentType(ext)

    const content = await fs.readFile(filePath)
    sendResponse(res, 200, contentType, content)


}

function sendResponse(res, statusCode, contentType, payload) {

  res.statusCode = statusCode
  res.setHeader('Content-Type', contentType)
  res.end(payload)
  
}

function getContentType(ext) {

  const types = {
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml"
  }
  
  return types[ext.toLowerCase()] || "text/html"
}