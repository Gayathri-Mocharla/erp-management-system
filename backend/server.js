const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

// MONGODB CONNECTION

mongoose.connect(process.env.MONGO_URI, {

    serverSelectionTimeoutMS: 5000

})

.then(() => {

    console.log("MongoDB Connected Successfully");

})

.catch((error) => {

    console.log("FULL ERROR BELOW");

    console.log(error.message);

});

// HOME ROUTE

app.get("/", (req, res) => {

    res.send("ERP Backend Running");

});

// SERVER

app.listen(5000, () => {

    console.log("Server running on port 5000");

});