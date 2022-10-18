const express = require("express"); 

const router = express.Router ();

const {getAllMovies, getTitle, getMovieYear, getGenre, postNewMovies, putMovies, deleteMovies} = require ("../controllers/movie.controllers");

router.get("/", getAllMovies);
router.get("/:id", getAllMovies);
router.get("/title/:title", getTitle);
router.get("/getyear/:year", getMovieYear);
router.get("/genre/:genre", getGenre);
router.post("/", postNewMovies);
router.put("/:id", putMovies);
router.delete("/:id", deleteMovies);

module.exports = router;