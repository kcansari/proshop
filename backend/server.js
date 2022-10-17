import express from 'express'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()
const app = express()
connectDB()

// Allow us to accept JSON data in the body.
app.use(express.json())

app.get('/', (req, res) => {
  res.send('ProShop Backend Server')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(
    `Sever running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
})
