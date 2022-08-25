const router = require('express').Router();
const db = require('../models/db.config');
const Airport = require('../models/Airports');
const dotenv = require('dotenv');
dotenv.config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
router.get('/', async(req, res) => {
    
    try {
        const d = await Airport.findAll();
        const x = d.map(a=>a.dataValues)
        // console.log(d[0].dataValues)
        res.status(200).json({data:x, pk:process.env.STRIPE_PUBLIC_KEY})
    } catch (error) {
        console.log(error)
        res.status(404)
    }

});

router.post("/", async (req, res) => {
    const item = req.body
    console.log(parseInt(item.dt))
  
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseInt(item.dt),
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  });

module.exports = router;    