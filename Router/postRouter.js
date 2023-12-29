const express = require("express");
const route = express.Router();
const postController = require("../Controller/postController");

route.post("/dynamicForm", postController.addDynamicForm);
route.post("/tl", postController.addtl);
route.post("/manager", postController.addmanager);
route.post("/campaign", postController.addcampaign);
route.post("/did", postController.adddid);
route.post("/agent", postController.addagent);
route.post("/report", postController.addreport);
route.post("/dropdown", postController.addDropdown);
route.post("/service", postController.addService);

module.exports = route;
