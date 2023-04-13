const User = require("../models/userModels");
const asyncHandler = require("express-async-handler");


// Verifying email
const addToLikeMovies = asyncHandler( async(req, res) => {
     const {email , data } = req.body;
     const user = await User.findOne({ email });
     if (user){
        const {likedMovies} = user;
        const movieAlreadyLiked = likedMovies.find(({id}) => (id === data.id));
        if(!movieAlreadyLiked){
            await User.findByIdAndUpdate(
                user._id, 
                {
                likedMovies: [...user.likedMovies, data],
            },
            { new: true }
            );
        } else {
            res.status(400)
            throw new Error("Movie already added to the liked list.")
        } 
     } else await User.create({ email, likedMovies: [data]});
     return res.json({ msg: "Movie added succesfully" })
});

const getLikedMovies = asyncHandler (async (req, res) => {
    const {email} = req.params;
    const user = await User.findOne({ email });
    if(user) {
        res.status(200).json({msg: "success", movies: user.likedMovies})
    } else {
        res.status(400)
        throw new Error("User with this email not found")        
    }
});

const removeFromLikedMovies = asyncHandler (async(req, res) => {
        const { email, movieId } = req.body;
        const user = await User.findOne({ email });
        if (user) {
          const movies = user.likedMovies;
          const movieIndex = movies.findIndex(({ id }) => id === movieId);
          if (!movieIndex) {
            res.status(400).send("Movie not found.");
          }
          movies.splice(movieIndex, 1);
          await User.findByIdAndUpdate(
            user._id,
            {
              likedMovies: movies,
            },
            { new: true }
          );
          return res.json({ msg: "Movie successfully removed.", movies });
        } else return res.json({ msg: "User with given email not found." });
      })
     


module.exports = {
    addToLikeMovies,
    getLikedMovies,
    removeFromLikedMovies,
}