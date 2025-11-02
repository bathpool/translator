import { GoogleGenAI } from '@google/genai'
import http from 'node:http'
import path from 'node:path'
import fs from 'node:fs/promises'
import url from 'node:url'
import { fileURLToPath } from 'url'
import express from 'express'
import { apiRoutes } from './routes/apiRoutes.js'
const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json());
app.use('/api', apiRoutes)
app.use(express.static('public'))


app.listen(PORT, ()=> console.log(`server connected on port ${PORT}`))


// const server = http.createServer(async (req, res) => {
//     if (req.url === '/api') {
//         let body = ''
//         for await (const chunk of req) {
//             body += chunk
//         }
//         console.log('input received')
//         await getTranslation(JSON.parse(body), res)
//     } else {
//         await serveStatic(req, res, wwwroot)
//     }
// })





