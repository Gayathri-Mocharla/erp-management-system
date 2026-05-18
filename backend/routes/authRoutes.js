const express = require("express");

const router = express.Router();

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User = require("../models/User");


// SIGNUP

router.post("/signup", async (req, res) => {

    try {

        const { username, email, password } = req.body;

        console.log(req.body);

        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({

                message: "User already exists"

            });

        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({

            username,
            email,
            password: hashedPassword

        });

        await newUser.save();

        res.status(201).json({

            message: "Signup Successful"

        });

    }

    catch (error) {

    console.log("FULL ERROR:");

    console.log(error);

    res.status(500).json({

        message: error.message

    });

}

});


// LOGIN

router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(400).json({

                message: "User not found"

            });

        }

        const isMatch = await bcrypt.compare(

            password,
            user.password
        );

        if (!isMatch) {

            return res.status(400).json({

                message: "Invalid password"

            });

        }

        const token = jwt.sign(

            { id: user._id },

            "secretkey"
        );

        res.status(200).json({

            token

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Login Failed"

        });

    }

});

module.exports = router;