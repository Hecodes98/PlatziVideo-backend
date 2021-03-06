const express = require("express");
const { moviesMock } = require("../utils/mocks/movies");

function moviesApi(app) {
  const router = express.Router();
  app.use("/api/movies", router);

  router.get("/", async (req, res, next) => {
    try {
      const movies = await Promise.resolve(moviesMock);
      res.status(200).json({
        data: movies,
        message: "movies listed"
      });
    } catch (err) {
      next(err);
    }
  });

  router.get("/:moveId", async (req, res, next) => {
    try {
      const movie = await Promise.resolve(moviesMock[0]);
      res.status(200).json({
        data: movie,
        message: "movie found"
      });
    } catch (err) {
      next(err);
    }
  });

  router.post("/", async (req, res, next) => {
    try {
      const createMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(201).json({
        data: createMovieId,
        message: "movies created"
      });
    } catch (err) {
      next(err);
    }
  });

  router.put("/:modeId", async (req, res, next) => {
    try {
      const updatedMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(200).json({
        data: updatedMovieId,
        message: "movies updated"
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:movieId", async (req, res, next) => {
    try {
      const deletedMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(200).json({
        data: deletedMovieId,
        message: "movies deleted"
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = moviesApi;
