import express from 'express'
import "./model/index.js"
import bodyParser from 'body-parser'
import router from './router/router.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(router)

app.listen(process.env.PORT, () => {
    console.log(`server is running in http://localhost:${process.env.PORT}`)
})
