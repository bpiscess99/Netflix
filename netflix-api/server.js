const dotenv = require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routes/userRoutes");
 

const app = express();

// Middleware
app.use(cors())
app.use(express.json())

// Routes Middleware

app.use("/api/users", userRoute);

// Routes
app.get("/", (req, res) => {
    res.send("hello world")
})

const PORT = process.env.PORT || 5000

mongoose.
         connect(process.env.MONGO_URI)
         .then(() => {
            app.listen(PORT, () => {
                console.log(`Server running on Port ${PORT}`)
            })
         })
         .catch((err) => console.log(err))