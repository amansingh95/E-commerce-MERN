
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

// fetch all product
const getProducts = asyncHandler(async (req, res)=>{
    const products = await Product.find({})
    res.json(products)
})

//fetch product by id
const getProductById = asyncHandler(async (req,res)=>{
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
    
})

//fetch product by id
const deleteProduct = asyncHandler(async (req,res)=>{
    const product = await Product.findById(req.params.id)
    if(product){
        await product.remove()
        res.json({message: 'Product Removed'})
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
    
})

// create product 
const createProduct = asyncHandler(async (req,res)=>{
    const product = new Product({
        name:'Sample name',
        price:0,
        user:req.user._id,
        image:'/images/sample.jpg',
        brand:'sample brand',
        category:'sample category',
        countInStock:0,
        numReviews:0,
        description:'sample description'
    })
    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
    
})


// update product 
const updateProduct = asyncHandler(async (req,res)=>{
    const {
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        description,
    }=req.body
    const product = await Product.findById(req.params.id)
    if(product){
        product.name=name
        product.price=price
        product.description=description
        product.image=image
        product.brand=brand
        product.category=category
        product.countInStock=countInStock

        const updatedProduct = await product.save()
        res.json(updatedProduct)
    }else{
        res.status(404)
        throw new Error('Product Not Found')
    }
    
    
})

export {
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct
}