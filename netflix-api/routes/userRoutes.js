const express = require("express");
const { addToLikeMovies, getLikedMovies, removeFromLikedMovies } = require("../controllers/userController");
const router = express.Router()

app.post("/add", addToLikeMovies)
app.get("/liked/:email", getLikedMovies)
app.put("/remove/", removeFromLikedMovies)


module.exports = router;