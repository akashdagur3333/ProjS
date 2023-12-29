const express = require("express");
const route = express.Router();
const getController = require("../Controller/getController.js");

route.get("/dynamicForm", getController.getDynamicForm);
route.get("/dropdown", getController.getDropdown);
route.get("/tl", getController.gettl);
route.get("/manager", getController.getmanager);
route.get("/campaign", getController.getcampaign);
route.get("/did", getController.getdid);
route.get("/agent", getController.getagent);
route.get("/report", getController.getreport);
route.get("/disposition", getController.getdisposition);
route.get("/liveagent", getController.getLiveAgent);
route.get("/service", getController.getService);
module.exports = route;
