const mongoose = require("mongoose");

//Obtengo los schemas de mongoose
const Schema = mongoose.Schema;


const cinemaSchema = new Schema(
    {
        name: {type: String, required: true}, 
        location: {type: String, required: true},
        movies: [{type: mongoose.Types.ObjectId, ref: "movie"}] //relaciono
    },{
        timestamps: true
    }
)

// Movie --> modelo de moongose, movie seria el nombre de mi coleccion y son elementos del tipo movieSchema 
const Cinema = mongoose.model("cinema", cinemaSchema);

module.exports = Cinema;