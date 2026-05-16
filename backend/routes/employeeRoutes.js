const express = require("express");

const router = express.Router();

const Employee = require("../models/Employee");


// ADD EMPLOYEE

router.post("/add", async (req, res) => {

    try {

        const { name, email, position } = req.body;

        const newEmployee = new Employee({

            name,
            email,
            position

        });

        await newEmployee.save();

        res.status(201).json({

            message: "Employee Added Successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

});


// GET ALL EMPLOYEES

router.get("/", async (req, res) => {

    try {

        const employees = await Employee.find();

        res.status(200).json(employees);

    }

    catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

});


// DELETE EMPLOYEE

router.delete("/:id", async (req, res) => {

    try {

        await Employee.findByIdAndDelete(req.params.id);

        res.status(200).json({

            message: "Employee Deleted"

        });

    }

    catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

});

module.exports = router;