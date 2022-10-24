const Router = require("express");
const getFibo = require("../controllers/controllersFibo");
const { fibonacciRules, validate } = require("../middlewares/validator");


const fibonacciRoutes = Router();

fibonacciRoutes.get("/", fibonacciRules(), validate, getFibo);

module.exports = fibonacciRoutes;