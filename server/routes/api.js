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

if (Array.isArray(req.body)) {
    orderVariable.push(...req.body) // spreading the items into ordervariable
} else {
    orderVariable.push(req.body)
}

    console.log("you have ordered the following items", orderVariable)

    res.status(201).json({message: 'Order stored successfully!', orderVariable: orderVariable})


    

})

module.exports = router;