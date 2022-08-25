const router = require('express').Router();
const db = require('../models/db.config');
const Airport = require('../models/Airports')


router.get('/', async(req, res) => {
    
    try {
        const d = await Airport.findAll();
        const x = d[0].dataValues
        // console.log(d[0].dataValues)
        res.status(200).json({data:x})
    } catch (error) {
        console.log(error)
        res.status(404)
    }

});

module.exports = router;    