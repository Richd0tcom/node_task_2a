const router = require('express').Router();

router.get('/', function (req, res) {
    res.send('orders');
});

module.exports = router;    