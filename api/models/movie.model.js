const mongoose = require("mongoose");

//Obtengo los schemas de mongoose
const Schema = mongoose.Schema;


const movieSchema = new Schema(
    {
        title: {type: String, required: true}, //title es objeto con un tipo string y es requerido
        year: {type: Number, required: true},
        director: {type: String, required: true}, // solo requiero título y poster.
        genre: {type: String, required: false} //array con nombres
    },{
        timestamps: true
    }
)

// Movie --> modelo de moongose, movie seria el nombre de mi coleccion y son elementos del tipo movieSchema 
const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;