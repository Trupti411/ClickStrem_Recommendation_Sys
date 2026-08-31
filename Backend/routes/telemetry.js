const express= require('express');
const router = express.Router();
const Event= require('../models/Event');
const {sendClickstreamEvent} = require('../config/kafka');

router.post('/', async (req, res) => {
    // 
    const eventPayload = req.body;

    res.status(202).json({ success: true, message: 'Event accepted'});

    setImmediate(async () =>{
        try {
            await sendClickstreamEvent(eventPayload);

            const event = new Event(eventPayload);
            await event.save();
        }catch(err) {
            console.log('[Telementry Error] Background handling error:', err.messge);
        }
    });
});

module.exports = router;