import express from 'express'
const app = express()


import products from './data/products.js'

import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

import connectDB from './config/db.js'
import colors from 'colors'


connectDB()


app.get('/', (req, res) => {
    res.send('ProShop Backend Server')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product  = products.find((p) => p._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Sever running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
})