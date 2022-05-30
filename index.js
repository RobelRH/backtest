import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import sequelize from './config/database.js'

dotenv.config({ path: './config/.env' })

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("server running from port 6000")
})

sequelize.sync()

const PORT = process.env.PORT || 7000

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))