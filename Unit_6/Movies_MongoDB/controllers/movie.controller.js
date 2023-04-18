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
// http://localhost:4000/movies/643c6559cb1e3eca71d9a1de
router.get("/:id", async (req, res) => {
  try {
    // grab parameters from url
    const { id } = req.params;

    // Find the document(movie JSON obj) with in the DB collection
    const getMovie = await Movie.findOne({ _id: id });

    // Response message: use a ternary to make a fancy response
    getMovie
      ? res.status(200).json({
          msg: `${getMovie.title} was found!`,
          getMovie,
        })
      : res.status(404).json({
          message: "No movie found.",
        });
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
// http://localhost:4000/movies/
router.get("/", async (req, res) => {
  try {
    // This endpoint will only return all movies, no req or params needed
    // Await all documents from the Movie collection
    const getAllMovies = await Movie.find();

    getAllMovies
      ? res.status(200).json({
          message: "All movies from movie collection:",
          getAllMovies,
        })
      : res.status(404).json({
          message: `No movies found.`,
        });
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
    // Grab genre value from parameters
    const { genre } = req.params;
    //let buildWord;

    // Trying to spell genres the same way...
    // if (genre) {
    //   for (let i = 0; i < genre.length; i++) {
    //     i === 0
    //       ? (buildWord = genre[i].toUpperCase())
    //       : (buildWord += genre[i].toLowerCase());
    //   }
    // }

    // Finding all movies in DB whose genre matches the params ({db genre key : req.params.genre })
    // { genre: buildWord }
    const getMovies = await Movie.find({ genre: genre });

    getMovies.length > 0
      ? res.status(200).json({
          getMovies,
        })
      : res.status(404).json({
          message: `No movies found.`,
        });
  } catch (err) {
    errorResponse(res, err);
  }
});

// TODO PATCH One
router.patch("/:id", async (req, res) => {
  try {
    //1. Pull value from parameter
    //2. Pull data from the body.
    //3. Use method to locate document based off ID and pass in new information.
    //4. Respond to client.
  } catch (err) {
    errorResponse(res, err);
  }
});

// TODO Delete One

module.exports = router;
