const express = require('express');
const router = express.Router();
const database = require("../database/db.js");

// GET ITEMS
router.get('/products', (req,res) => {
    res.json(database.products)
})



// POST ORDER

let orderVariable = [];

router.post('/place-order', (req,res) => {
   console.log(req.body)
    const basketItems = req.body.basketItems;

    console.log("you have ordered the following items", basketItems)

    res.status(201).json({message: 'Order stored successfully!', placedOrder: basketItems})


    

})

module.exports = router;