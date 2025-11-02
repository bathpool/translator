import express from 'express'
import { apiRoutes } from '../routes/apiRoutes.js'
const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json());
app.use('/api', apiRoutes)



// app.listen(PORT, ()=> console.log(`server connected on port ${PORT}`))

export default function handler(req, res) {
  return app(req, res)
}

