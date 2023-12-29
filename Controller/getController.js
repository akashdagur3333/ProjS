const db = require("../manageQuery");

const getDynamicForm = (req, res) => {
  var query = "SELECT * FROM dynamicform";
  db(query)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
};

const getDropdown = (req, res) => {
  var query = "SELECT * FROM dlistoptions";
  db(query)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
};
const gettl = (req, res) => {
  var query = "SELECT * FROM tl";
  db(query)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
};
const getmanager = (req, res) => {
  var query = "SELECT * FROM manager";
  db(query)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
};

const getcampaign = (req, res) => {
  var query = "SELECT * FROM campaign";
  db(query)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
};

const getdid = (req, res) => {
  var query = "SELECT * FROM did_allocation";
  db(query)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
};

const getagent = (req, res) => {
  var query = "SELECT * FROM agent_info";
  db(query)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
};

const getreport = (req, res) => {
  var query = "SELECT * FROM reports";
  db(query)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
};

const getdisposition = (req, res) => {
  var query = "SELECT * FROM campaigndispositions";
  db(query)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
};

const getLiveAgent = (req, res) => {
  var query = `SELECT
  agent_info.employee_code AS EmployeeCode,
  agent_id,
  agent_info.camp_name,
  agent_name,
  CASE
    WHEN on_call = 1 THEN "ON Call"
    WHEN on_call = 0 AND logged_in = 1 AND pause_status = 0 AND popup_status = 0 THEN "Wrap Up"
    WHEN on_call = 0 AND logged_in = 1 AND pause_status = 0 THEN "Free"
    WHEN logged_in = 1 AND pause_status = 1 THEN "Paused"
    WHEN on_call = 0 AND logged_in = 0 THEN "Logout"
  END AS AgentStatus,
  CASE
    WHEN on_call = 1 THEN TIMEDIFF(NOW(), on_call_time)
    WHEN on_call = 0 AND popup_status = 0 THEN TIMEDIFF(NOW(), last_call_taken)
    WHEN on_call = 0 AND logged_in = 1 AND pause_status = 0 THEN
      CASE WHEN DATE(on_call_time) != DATE(agent_info.last_login) THEN TIMEDIFF(NOW(), agent_info.last_login)
      ELSE TIMEDIFF(NOW(), on_call_time) END
    WHEN logged_in = 1 AND pause_status = 1 THEN TIMEDIFF(NOW(), pause_status_time)
  END AS Duration,
  CASE
    WHEN on_call = 1 THEN CallType
    WHEN pause_status = 1 THEN pause_status_disposition
    WHEN on_call = 0 AND logged_in = 1 AND pause_status = 0 AND agent_priorty = 1 THEN "Waiting 4 CallBack"
    ELSE "NA"
  END AS Disposition,
  CASE
    WHEN on_call = 1 THEN c_call
    ELSE "NA"
  END AS CustomerNumber,
  CASE
    WHEN on_call = 1 THEN "red"
    WHEN on_call = 0 AND popup_status = 0 AND logged_in = 1 AND pause_status = 0 THEN "maroon"
    WHEN on_call = 0 AND logged_in = 1 AND pause_status = 0 THEN "green"
    WHEN logged_in = 1 AND pause_status = 1 THEN "orange"
    WHEN on_call = 0 AND logged_in = 0 THEN "blue"
  END AS AgentStatusStyle,
  media AS sip_id,
  desk_ip,
  CASE
    WHEN 1 = 1 THEN ""
    ELSE "red"
  END AS SipStyle,
  "OK" AS status_msg,
  on_call AS oncalldds
  FROM
  agent_info
  LEFT JOIN
  SIP_HOST_INFO ON SIP_HOST_INFO.SipID = agent_info.media
  WHERE
  logged_in = 1
  ORDER BY
  AgentStatus ASC, Duration DESC
  LIMIT
  500;
  `;
  db(query)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getDynamicForm,
  gettl,
  getmanager,
  getcampaign,
  getdid,
  getagent,
  getreport,
  getDropdown,
  getdisposition,
  getLiveAgent,
};
