const superCinema = require("../models/cinema.model");

const getAllCinemas = async (req,res)=> {
    try {
        const allCinemas = await superCinema.find().populate("movies");
        return res.status(200).json(allCinemas);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const getCinemaName = async (req,res)=> {
    try {
        const {name} = req.params
        const allMovies = await superCinema.find({name});
        return res.status(200).json(allMovies)
    } catch (error) {
        return res.status(500).json(error)
    }
};

const getCinemaLocation = async (req,res)=> {
    try {
        const {location} = req.params
        const allMovies = await superCinema.find({location});
        return res.status(200).json(allMovies)
    } catch (error) {
        return res.status(500).json(error)
    }

};
const getMovies = async (req,res)=> {
    try {
        const {year} = req.params
        const allMovies = await superCinema.find().populate("movies");
        return res.status(200).json(allMovies)
    } catch (error) {
        return res.status(500).json(error)
    }
};

const postNewCinema = async (req,res)=> {
    try{
        const {name, location, movies} = req.body
        const newCinema = new superCinema({name, location, movies});
        const createdCinema = await newCinema.save();
        return res.status(201).json(createdCinema);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const putCinemas = async (req,res)=> {
    try{
    const{id} = req.params;
    const putCinemas = new superCinema(req.body);
    putCinemas._id = id;

    const cinemasDb = await superCinema.findByIdAndUpdate(id, putCinemas, {new: true});
    if(cinemasDb){
        return res.status(404).json({"message": "Cinema not found"});
    }
    return res.status(200).json(cinemasDb);
} catch (error){
    return res.status(500).json(error)
}
};

const deleteCinemas = async (req,res)=> {
    try{
        const{id} = req.params;
        const cinemasDb = await superCinema.findByIdAndDelete(id);
        if(!cinemasDb){
            return res.status(404).json({"message": "Cinema not found"});
        }
        return res.status(200).json(cinemasDb);
    } catch (error){
        return res.status(500).json(error)
    }
    };

module.exports = {getAllCinemas, getCinemaName, getCinemaLocation, getMovies, postNewCinema, putCinemas, deleteCinemas};