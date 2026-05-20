const express = require("express");

const websiteController = require("../controllers/website.controller");

const middleware = require("../middlewares/isAuth");

const websiteRouter = express.Router();

websiteRouter.post(
  "/gen",
  middleware.isAuth,
  websiteController.generateWebsite
);

module.exports = websiteRouter;