import express from 'express'
import { apiRoutes } from './routes/apiRoutes.js'
const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json());
app.use('/api', apiRoutes)
app.use(express.static('public'))

app.listen(PORT, ()=> console.log(`server connected on port ${PORT}`))





