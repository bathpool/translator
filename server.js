import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { apiRoutes } from './routes/apiRoutes.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(express.json())
app.use('/api', apiRoutes)

// Serve /public if requests hit Express
app.use(express.static(path.join(__dirname, 'public')))

// Fallback: send index.html for "/", SPA routes, etc.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

export default app