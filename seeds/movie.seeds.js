//guardar una series de datos previos y cargarlos en una semilla.
//guardar contenido previo en la api para no estar metiendo datos en la api.

const mongoose = require('mongoose');

const Movie = require('../api/models/movie.model');

const movies = [{
    title: 'The Matrix',
    director: 'Hermanas Wachowski',
    year: 1999,
    genre: 'Acción',
  },
  {
    title: 'The Matrix Reloaded',
    director: 'Hermanas Wachowski',
    year: 2003,
    genre: 'Acción',
  },
  {
    title: 'Buscando a Nemo',
    director: 'Andrew Stanton',
    year: 2003,
    genre: 'Animación',
  },
  {
    title: 'Buscando a Dory',
    director: 'Andrew Stanton',
    year: 2016,
    genre: 'Animación',
  },
  {
    title: 'Interestelar',
    director: 'Christopher Nolan',
    year: 2014,
    genre: 'Ciencia ficción',
  },
  {
    title: '50 primeras citas',
    director: 'Peter Segal',
    year: 2004,
    genre: 'Comedia romántica',
  }];

//para cada película devuelvo un objeto del tipo movie

const movieMap = movies.map((movie) => new Movie(movie));

mongoose.connect("mongodb+srv://root:root@cluster0.u9mxac1.mongodb.net/movies?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    const allMovies = await Movie.find();
    if(allMovies.length){
        await Movie.collection.drop();
        console.log("pelis eliminadas")
    }
}).catch((error) => console.log("error borrando pelis", error))
.then(async () => {
    await Movie.insertMany(movieMap)
    console.log("pelis creadas")
}).catch((error) => console.log("error insertando ", error))
.finally(() => {mongoose.disconnect()});

// necesitas esto "movies": "node ./seeds/movie.seeds.js" en package json para conectar con base de datos.