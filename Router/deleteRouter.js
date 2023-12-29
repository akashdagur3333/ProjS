const express = require("express");
const route = express.Router();
const deleteController = require("../Controller/deleteController.js");

route.delete("/dynamicForm/:id", deleteController.deleteDynamicForm);
route.delete("/dropdown/:id", deleteController.deleteDropdown);
route.delete("/tl/:id", deleteController.deletetl);
route.delete("/manager/:id", deleteController.deletemanager);
route.delete("/campaign/:id", deleteController.deletecampaign);
route.delete("/did/:id", deleteController.deletedid);
route.delete("/agent/:id", deleteController.deleteagent);
route.delete("/report/:id", deleteController.deletereport);
route.delete("/disposition/:id", deleteController.deleteDisposition);
route.delete("/service/:id", deleteController.deleteService);

module.exports = route;
