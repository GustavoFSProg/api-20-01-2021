import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
import routes from './routes'

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS)

const { PORT } = process.env

const app = express()
app.use(express.json())
app.use(cors())
app.use(routes)

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(PORT, () => console.log(`Entrou API Teste on PORT: ${PORT}`))

export default PORT
