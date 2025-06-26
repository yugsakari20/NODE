import { Movie } from "../models/movie.models.js";

// Get all movies
export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({
      success: true,
      data: movies,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

// Create a new movie
export const createMovie = async (req, res) => {
  try {
    const {
      title,
      description,
      releaseDate,
      genre,
      director,
      cast,
      rating,
      posterUrl,
      trailerUrl,
    } = req.body;

    if (
      !title ||
      !description ||
      !releaseDate ||
      !genre ||
      !director ||
      !cast ||
      !rating ||
      !posterUrl ||
      !trailerUrl
    ) {
      return res.status(400).json({
        success: false,
        error: "All fields are required",
      });
    }

    const newMovie = new Movie({
      title,
      description,
      releaseDate,
      genre,
      director,
      cast: cast.split(",").map((item) => item.trim()),
      rating,
      posterUrl,
      trailerUrl,
    });

    await newMovie.save();

    res.status(201).json({
      success: true,
      data: newMovie,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

// Update a movie
export const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      releaseDate,
      genre,
      director,
      cast,
      rating,
      posterUrl,
      trailerUrl,
    } = req.body;

    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({
        success: false,
        error: "Movie not found",
      });
    }

    movie.title = title || movie.title;
    movie.description = description || movie.description;
    movie.releaseDate = releaseDate || movie.releaseDate;
    movie.genre = genre || movie.genre;
    movie.director = director || movie.director;
    movie.cast = cast ? cast.split(",").map((item) => item.trim()) : movie.cast;
    movie.rating = rating || movie.rating;
    movie.posterUrl = posterUrl || movie.posterUrl;
    movie.trailerUrl = trailerUrl || movie.trailerUrl;

    await movie.save();

    res.status(200).json({
      success: true,
      data: movie,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

// Delete a movie
export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findByIdAndDelete(id);
    if (!movie) {
      return res.status(404).json({
        success: false,
        error: "Movie not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Movie deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};
