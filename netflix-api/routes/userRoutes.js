const express = require("express");
const { addToLikeMovies, getLikedMovies, removeFromLikedMovies } = require("../controllers/userController");
const router = express.Router()

router.post("/add", addToLikeMovies)
router.get("/liked/:email", getLikedMovies)
router.put("/remove/", removeFromLikedMovies)


module.exports = router;
