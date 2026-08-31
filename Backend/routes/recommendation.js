const express= require('express');
const router= express.Router();
const axios= require('axios');
const Product = require('../models/Product');

router.post('/', async (req, res) =>{
    const { user_id, user_session, current_product_id} = req.body;

    try{
        const mlresponse = await axios.post(
            process.env.PYTHON_ML_SERVICE_URL || 'http://localhost:8000/predict',
            { user_id, user_session, current_product_id },
            {timeout: 1500}
        );
        const recommendationProductIds = mlResponse.data.recommendations || [];

        const products = await Products.find({ product_id: { $in: recommendationProductIds }});

        res.json({
            sucess: true,
            source: 'ml-model',
            purchase_intent_score: mlResponse.data.purchase_probability || 0,
            data: products
        });
    }catch (err){
        console.warn('[ML Bridge Fallback] Falling back to default ctaloge items:', err.message);

        const fallbackProducts = await Product.find().limit(4);
        res.json({
            success: true,
            source: 'fallback',
            purchase_intent_score: null,
            data: fallbackProducts
        });
    }
});

module.exports = router;