const express = require('express')
require('dotenv').config()

const connect = require('./config/db')
const cors = require('cors')
const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use(cors())


// file import here

const Product = require('./book/book.router')


// again define manage file
app.use('/book',Product)

app.get("/", (req, res) => {
	res.send("Welcome to new server ");
});

app.listen(PORT,async()=>{

	await connect()
	console.log(`listen at http://localhost:${PORT}`);
})