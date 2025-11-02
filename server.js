import express from 'express'
import { apiRoutes } from './routes/apiRoutes.js'
const PORT = process.env.PORT || 8000

const app = express()

app.use(express.static('public'))
app.use(express.json());
app.use('/api', apiRoutes)

app.get('/', (req, res) => {
    // If index.html exists in public/, Vercel serves that instead
    res.send('Welcome to the API server'); 
});

// app.listen(PORT, ()=> console.log(`server connected on port ${PORT}`))

export default app