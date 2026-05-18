require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const employeeRoutes = require("./routes/employeeRoutes");

const productRoutes = require("./routes/productRoutes");

const saleRoutes = require("./routes/saleRoutes");

const app = express();


// MIDDLEWARE

app.use(cors());

app.use(express.json());


// ROUTES

app.use("/api/auth", authRoutes);

app.use("/api/employees", employeeRoutes);

app.use("/api/products", productRoutes);

app.use("/api/sales", saleRoutes);


// DATABASE

mongoose.connect(process.env.MONGO_URI)

.then(() => {

    console.log("MongoDB Connected Successfully");

})

.catch((error) => {

    console.log(error);

});


// SERVER

app.listen(5000, () => {

    console.log("Server running on port 5000");

});