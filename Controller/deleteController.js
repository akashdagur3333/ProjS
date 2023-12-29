const db = require("../manageQuery");

const deleteDropdown = (req, res) => {
  const id = req.params.id;
  var query = `DELETE FROM dlistoptions WHERE id=${id}`;
  db(query)
    .then((result) => {
      res.status(200).json({
        message: "Dropdown Deleted Sucessfully",
      });
    })
    .catch((err) => console.log(err));
};

const deleteDynamicForm = (req, res) => {
  const id = req.params.id;
  var query = "DELETE FROM dynamicform WHERE ID=" + id + "";
  db(query)
    .then((result) => {
      res.status(200).json({
        message: "DynamicForm Deleted Sucessfully",
      });
    })
    .catch((err) => console.log(err));
};
const deletetl = (req, res) => {
  const id = req.params.id;
  var query = "DELETE FROM tl WHERE tl_id=" + id + "";
  db(query)
    .then((result) => {
      res.status(200).json({
        message: "TL Deleted Sucessfully",
      });
    })
    .catch((err) => console.log(err));
};
const deletemanager = (req, res) => {
  const id = req.params.id;
  var query = "DELETE FROM manager WHERE m_id=" + id + "";
  db(query)
    .then((result) => {
      res.status(200).json({
        message: "Manager Deleted Sucessfully",
      });
    })
    .catch((err) => console.log(err));
};

const deletecampaign = (req, res) => {
  const id = req.params.id;
  var query = "DELETE FROM campaign WHERE c_id=" + id + "";
  db(query)
    .then((result) => {
      res.status(200).json({
        message: "Campaign Deleted Sucessfully",
      });
    })
    .catch((err) => console.log(err));
};

const deletedid = (req, res) => {
  const id = req.params.id;
  var query = "DELETE FROM did_allocation WHERE did_id=" + id + "";
  db(query)
    .then((result) => {
      res.status(200).json({
        message: "DiD Deleted Sucessfully",
      });
    })
    .catch((err) => console.log(err));
};

const deleteagent = (req, res) => {
  const id = req.params.id;
  var query = "DELETE FROM agent_info WHERE agent_id=" + id + "";
  db(query)
    .then((result) => {
      res.status(200).json({
        message: "Agent Deleted Sucessfully",
      });
    })
    .catch((err) => console.log(err));
};

const deletereport = (req, res) => {
  const id = req.params.id;
  var query = "DELETE FROM reports WHERE id=" + id + "";
  db(query)
    .then((result) => {
      res.status(200).json({
        message: "Reports Deleted Sucessfully",
      });
    })
    .catch((err) => console.log(err));
};

const deleteDisposition = (req, res) => {
  const id = req.params.id;
  var query = `DELETE FROM campaigndispositions WHERE ID=${id}`;
  db(query)
    .then((result) => {
      res.status(200).json({
        message: "Reports Deleted Sucessfully",
      });
    })
    .catch((err) => console.log(err));
};

const deleteService = (req, res) => {
  try {
    const id = req.params.id;
    var query = `DELETE FROM campaign WHERE c_id=${id}`;
    db(query)
      .then((result) => {
        res.status(200).json({
          message: "Campaign Deleted Sucessfully",
        });
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  deleteDynamicForm,
  deletetl,
  deletemanager,
  deletecampaign,
  deletedid,
  deleteagent,
  deletereport,
  deleteDropdown,
  deleteDisposition,
  deleteService,
};
