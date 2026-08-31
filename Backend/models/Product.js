const mongoose= require('mongoose');

const productSchema= new mongoose.Schema({
    product_id: {type: Number, require:true, unique: true},
    category_id: {type: String, required: true},
    category_code: {type: String, default: 'Unknown'},
    brand: {type: String, default: 'empty'},
    price: {type: Number, required: true},
    name: {type: String, required: true},
    image_url: {type: String},
    stcok: {type: Number, default: 100}
}, {timestamps: true });

module.exports = mongoose.model('Product', productSchema);