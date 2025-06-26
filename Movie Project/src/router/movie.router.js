import express from "express";
import {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../controller/movie.controller.js";

const router = express.Router();

router.route("/")
  .post(createMovie)
  .get(getAllMovies);

router.route("/:id")
  .put(updateMovie)
  .delete(deleteMovie);

export default router;
