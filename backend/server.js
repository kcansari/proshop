const express = require('express')
const app = express()
const port = 5000

const products = require('./data/products')

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

app.listen(port, () => {
    console.log(`Sever listening on port ${port}`)
})