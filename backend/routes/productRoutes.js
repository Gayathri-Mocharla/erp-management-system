const express = require("express");

const router = express.Router();

const Product = require("../models/Product");


// ADD PRODUCT

router.post("/add", async (req, res) => {

    try {

        const { name, quantity, price } = req.body;

        const newProduct = new Product({

            name,
            quantity,
            price

        });

        await newProduct.save();

        res.status(201).json({

            message: "Product Added Successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

});


// GET PRODUCTS

router.get("/", async (req, res) => {

    try {

        const products = await Product.find();

        res.status(200).json(products);

    }

    catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

});


// DELETE PRODUCT

router.delete("/:id", async (req, res) => {

    try {

        await Product.findByIdAndDelete(req.params.id);

        res.status(200).json({

            message: "Product Deleted"

        });

    }

    catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

});

module.exports = router;