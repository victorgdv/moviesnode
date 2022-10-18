const superMovie = require("../models/movie.model");

const getAllMovies = async (req,res)=> {
    try {
        const allMovies = await superMovie.find();
        return res.status(200).json(allMovies);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const getTitle = async (req,res)=> {
    try {
        const {title} = req.params
        const allMovies = await superMovie.find({title});
        return res.status(200).json(allMovies)
    } catch (error) {
        return res.status(500).json(error)
    }
};

const getGenre = async (req,res)=> {
    try {
        const {genre} = req.params
        const allMovies = await superMovie.find({genre});
        return res.status(200).json(allMovies)
    } catch (error) {
        return res.status(500).json(error)
    }

};
const getMovieYear = async (req,res)=> {
    try {
        const {year} = req.params
        const allMovies = await superMovie.find({year: {$gt:year} });
        return res.status(200).json(allMovies)
    } catch (error) {
        return res.status(500).json(error)
    }
};

const postNewMovies = async (req,res)=> {
    try{
        const {title, year, director, genre} = req.body
        const newMovies = new superMovie({title, year, director, genre});
        const createdMovie = await newMovies.save();
        return res.status(201).json(createdMovie);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const putMovies = async (req,res)=> {
    try{
    const{id} = req.params;
    const putMovies = new superMovie(req.body);
    putMovies._id = id;

    const moviesDb = await superMovie.findByIdAndUpdate(id, putMovies, {new: true});
    if(moviesDb){
        return res.status(404).json({"message": "Movie not found"});
    }
    return res.status(200).json(moviesDb);
} catch (error){
    return res.status(500).json(error)
}
};

const deleteMovies = async (req,res)=> {
    try{
        const{id} = req.params;
        const moviesDb = await superMovie.findByIdAndDelete(id);
        if(!moviesDb){
            return res.status(404).json({"message": "Movie not found"});
        }
        return res.status(200).json(moviesDb);
    } catch (error){
        return res.status(500).json(error)
    }
    };

module.exports = {getAllMovies, getTitle, getGenre, getMovieYear, postNewMovies, putMovies, deleteMovies};