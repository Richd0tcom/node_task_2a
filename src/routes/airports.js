const router = require('express').Router();
const db = require('../models/db.config');
const Airport = require('../models/Airports')


router.get('/', async(req, res) => {
    
    try {
        const d = await Airport.findAll();
        console.log(d[0].dataValues)
        res.send({status: 'success'})
    } catch (error) {
        console.log(error)
    }

});

module.exports = router;    