const express = require("express"); 
const dotenv = require("dotenv");
const {connect} = require("./utils/db")
const movieRouter = require ("./api/routes/movie.routes")
const cinemRouter = require ("./api/routes/cinema.routes")
const PORT = process.env.PORT || 8000;
dotenv.config();

const app = express();
connect ();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const Movie = require('./api/models/movie.model'); // me traigo las semillas de las peliculas


app.use("/movies" , movieRouter);
app.use("/cinemas", cinemRouter);
app.listen(PORT, () => console.log(`listening on port: http://localhost:${PORT}`));