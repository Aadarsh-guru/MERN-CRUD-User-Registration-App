import express from "express";
import cors from 'cors'
import route from "./routes/routes.js";
import Connection from "./database/db.js";
const app = express()
const port = process.env.PORT || 80;
app.use(cors())
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use('/',route)
Connection()

app.listen(port,()=>{console.log(`server is running on port ${port}`);}) 