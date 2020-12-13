import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
dotenv.config()

const app=express();

connectDB();

app.get('/',(req, res)=>{
    res.send('Api is running')
})
app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT=process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mod on port ${PORT}`.yellow.bold))