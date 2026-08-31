const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    event_time: {type: Date, default:Date.now },
    event_type:{
        type: String,
        enum: ['view', 'cart', 'purchase', 'hover', 'scroll', 'click'],
        required: true
    },
    product_id: {type: Number},
    category_id: {type: String},
    brand: {type: String, default: 'empty'},
    price: {type: Number, default: 0.0},
    user_id: {type: String, required: true},
    user_session: {type: String, required: true},
    metadata: {
        scroll_speed: Number,
        hover_duration: Number,
        dwell_time: Number
    }
});


module.exports= mongoose.model('Event', eventSchema);