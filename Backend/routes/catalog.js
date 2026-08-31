const express= require('express');
const router= express.Router();
const Product= require('../models/Product');

router.get('/', async (req, res) =>{
    try{
        const products = await Product.find().limit(50);
        res.json({ success: true, count: products.lenght, data: products });
    }catch (err) {
        res.status(500).json({ success: false, error: err.messgae});
    }
});

router.get('/:id', async (req, res) => {
    try{
        const product = await Product.findOne ({ product_id: req.params.id});
        if (!product) return res.status(404).json ({ success:false, message: 'Product not found'});
        res.json({ success: true, data: product});
    }catch (err) {
        res.status(500).json({ success: false, error: err.message});
    }
});

module.exports= router;