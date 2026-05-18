const express = require("express");

const router = express.Router();

const Sale = require("../models/Sale");


// ADD SALE

router.post("/add", async (req, res) => {

    try {

        const {

            customerName,
            productName,
            quantity,
            totalAmount

        } = req.body;

        const newSale = new Sale({

            customerName,
            productName,
            quantity,
            totalAmount

        });

        await newSale.save();

        res.status(201).json({

            message: "Sale Added Successfully"

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            error: error.message

        });

    }

});


// GET SALES

router.get("/", async (req, res) => {

    try {

        const sales = await Sale.find();

        res.status(200).json(sales);

    }

    catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

});


// DELETE SALE

router.delete("/:id", async (req, res) => {

    try {

        await Sale.findByIdAndDelete(req.params.id);

        res.status(200).json({

            message: "Sale Deleted"

        });

    }

    catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

});

module.exports = router;