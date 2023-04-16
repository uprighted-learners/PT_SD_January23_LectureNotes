const router = require("express").Router();
const Movie = require("../models/movie.model");

// Error Response Function
const errorResponse = (res, error) => {
  return res.status(500).json({
    Error: error.message,
  });
};

// TODO POST
// http://localhost:4000/movies/
router.post("/", async (req, res) => {
  try {
    //1. Pull data from client (body)
    const { title, genre, rating, length, releaseYear } = req.body;

    //2. Create a new object using the Model
    const movie = new Movie({
      title,
      genre,
      rating,
      length,
      releaseYear,
    });

    //3. Use mongoose method to save to MongoDB
    const newMovie = await movie.save();

    //4. client response
    res.status(200).json({
      message: `${newMovie.title} was added to the collection!`,
      newMovie,
    });
  } catch (err) {
    errorResponse(res, err);
  }
});

// TODO GET One
/* 
   Challenge
        - By ID
        - Response should consider
            - If found
            - If no document found
        
        Hint: Consider login within user.controller.js

*/

router.get("/:id", async (req, res) => {
  try {
  } catch (err) {
    errorResponse(res, err);
  }
});

// TODO Get All
/* 
   Challenge
        - No special endpoint necessary
        - Response should consider
            - If found
            - not found
        
        
        Hint: parameters within method are optional
*/

router.get("/", async (req, res) => {
  try {
  } catch (err) {
    errorResponse(res, err);
  }
});

// TODO Get All by Genre
/* 
  Challenge
        - No special endpoint necessary
        - Response should consider
            - If found
            - not found
        - Consider parameter casing within the endpoint.
            - hint: conditional w/ looping
*/

router.get("/genre/:genre", async (req, res) => {
  try {
  } catch (err) {
    errorResponse(res, err);
  }
});

// TODO PATCH One

// TODO Delete One

module.exports = router;
