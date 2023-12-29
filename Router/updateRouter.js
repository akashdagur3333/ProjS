const express = require("express");
const route = express.Router();
const updateController = require("../Controller/updateController");

route.put("/tl/:id", updateController.updateTl);
route.put("/manager/:id", updateController.updateManager);

module.exports = route;
