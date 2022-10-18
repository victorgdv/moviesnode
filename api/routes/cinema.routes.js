const express = require("express"); 

const router = express.Router ();

const {getAllCinemas, getCinemaName, getCinemaLocation, getMovies, postNewCinema, putCinemas, deleteCinemas} = require ("../controllers/cinema.controllers");

router.get("/", getAllCinemas);
router.get("/:id", getAllCinemas);
router.get("/name/:name", getCinemaName);
router.get("/location/:location", getCinemaLocation);
router.get("/movies", getMovies);
router.post("/", postNewCinema);
router.put("/:id", putCinemas);
router.delete("/:id", deleteCinemas);

module.exports = router;