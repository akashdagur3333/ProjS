const db = require("../manageQuery");

const addDropdown = (req, res) => {
  var list_name = req.body.list_name;
  var data = req.body.data;
  data = JSON.stringify(data);
  //   formdata = "'" + formdata + "'";
  var query = `INSERT INTO dlistoptions(list_name,data) VALUES('${list_name}','${data}')`;
  db(query)
    .then((result) => {
      res.status(200).json({
        message: "dlistoptions Added Sucessfully",
      });
    })
    .catch((err) => console.log(err));
};

const addDynamicForm = (req, res) => {
  var formname = req.body.FormName;
  var formdata = req.body.fields;
  formdata = JSON.stringify(formdata);
  var query = `INSERT INTO dynamicform(FormName,FormData) VALUES('${formname}','${formdata}')`;
  db(query)
    .then((result) => {
      res.status(200).json({
        message: "DynamicForm Added Sucessfully",
      });
    })
    .catch((err) => console.log(err));
};
const addtl = (req, res) => {
  var tl_name = req.body.tl_name;
  var tl_email = req.body.tl_email;
  var tl_description = req.body.tl_description;
  var tl_password = req.body.tl_password;
  var query = `INSERT INTO tl(tl_name,tl_email,tl_description,tl_password) VALUES('${tl_name}','${tl_email}','${tl_description}','${tl_password}')`;
  db(query)
    .then((result) => {
      res.status(200).json({
        message: "TL Added Sucessfully",
      });
    })
    .catch((err) => console.log(err));
};
const addmanager = (req, res) => {
  var m_name = req.body.m_name;
  var m_email = req.body.m_email;
  var m_description = req.body.m_description;
  var m_password = req.body.m_password;
  var query = `INSERT INTO tl(tl_name,tl_email,tl_description,tl_password) VALUES('${m_name}','${m_email}','${m_description}','${m_password}')`;

  db(query)
    .then((result) => {
      res.status(200).json({
        message: "Manager Added Sucessfully",
      });
    })
    .catch((err) => console.log(err));
};

const addcampaign = (req, res) => {
  var c_status = req.body.c_status;
  var camp_name = req.body.camp_name;
  var camp_ids = req.body.camp_ids;
  var create_date = req.body.create_date;
  var ivr_status = req.body.ivr_status;
  var moh_file = req.body.moh_file;
  var welcome_prompt = req.body.welcome_prompt;
  var camp_did = req.body.camp_did;
  var camp_type = req.body.camp_type;
  var camp_status = req.body.camp_status;
  var hold = req.body.hold;
  var moh_file_id = req.body.moh_file_id;
  var welcome_prompt_id = req.body.welcome_prompt_id;
  var convert_status = req.body.convert_status;
  var moh_desc = req.body.moh_desc;
  var welcome_desc = req.body.welcome_desc;
  var waraptime = req.body.waraptime;
  var PacingSet = req.body.PacingSet;
  var prigroups = req.body.prigroups;
  var TrunkType = req.body.TrunkType;
  var CRMURL = req.body.CRMURL;
  var FormID = req.body.FormID;
  var prefix = req.body.prefix;
  var sticky = req.body.sticky;
  var api = req.body.api;
  var CallType = req.body.CallType;

  // c_status=JSON.stringify(c_status)
  camp_name = JSON.stringify(camp_name);
  camp_ids = JSON.stringify(camp_ids);
  create_date = JSON.stringify(create_date);
  // ivr_status=JSON.stringify(ivr_status)
  moh_file = JSON.stringify(moh_file);
  welcome_prompt = JSON.stringify(welcome_prompt);
  camp_did = JSON.stringify(camp_did);
  camp_type = JSON.stringify(camp_type);
  // camp_status=JSON.stringify(camp_status)
  // hold=JSON.stringify(hold)
  moh_file_id = JSON.stringify(moh_file_id);
  welcome_prompt_id = JSON.stringify(welcome_prompt_id);
  // convert_status=JSON.stringify(convert_status)
  moh_desc = JSON.stringify(moh_desc);
  welcome_desc = JSON.stringify(welcome_desc);
  // waraptime=JSON.stringify(waraptime)
  PacingSet = JSON.stringify(PacingSet);
  prigroups = JSON.stringify(prigroups);
  // TrunkType=JSON.stringify(TrunkType)
  CRMURL = JSON.stringify(CRMURL);
  // FormID=JSON.stringify(FormID)
  prefix = JSON.stringify(prefix);
  // sticky = JSON.stringify(sticky)
  api = JSON.stringify(api);
  // CallType=JSON.stringify(CallType)
  var query =
    "INSERT INTO campaign(c_status,camp_name,camp_ids,create_date,ivr_status,moh_file,welcome_prompt,camp_did,camp_type,camp_status,hold,moh_file_id,welcome_prompt_id,convert_status,moh_desc,welcome_desc,waraptime,PacingSet,prigroups,TrunkType,CRMURL,FormID,prefix,sticky,api,CallType) VALUES(" +
    c_status +
    "," +
    camp_name +
    "," +
    camp_ids +
    "," +
    create_date +
    "," +
    ivr_status +
    "," +
    moh_file +
    "," +
    welcome_prompt +
    "," +
    camp_did +
    "," +
    camp_type +
    "," +
    camp_status +
    "," +
    hold +
    "," +
    moh_file_id +
    "," +
    welcome_prompt_id +
    "," +
    convert_status +
    "," +
    moh_desc +
    "," +
    welcome_desc +
    "," +
    waraptime +
    "," +
    PacingSet +
    "," +
    prigroups +
    "," +
    TrunkType +
    "," +
    CRMURL +
    "," +
    FormID +
    "," +
    prefix +
    "," +
    sticky +
    "," +
    api +
    "," +
    CallType +
    ")";
  db(query)
    .then((result) => {
      res.status(200).json({
        message: "Campaign Added Sucessfully",
      });
    })
    .catch((err) => console.log(err));
};

const adddid = (req, res) => {
  var did = req.body.did;
  var status = req.body.status;
  var uploaddate = req.body.uploaddate;
  var campaign_name = req.body.campaign_name;
  did = JSON.stringify(did);
  uploaddate = JSON.stringify(uploaddate);
  campaign_name = JSON.stringify(campaign_name);
  var query =
    "INSERT INTO did_allocation(did,status,uploaddate,campaign_name) VALUES(" +
    did +
    "," +
    status +
    "," +
    uploaddate +
    "," +
    campaign_name +
    ")";
  db(query)
    .then((result) => {
      res.status(200).json({
        message: "DiD Allocated Added Sucessfully",
      });
    })
    .catch((err) => console.log(err));
};

const addagent = (req, res) => {
  var employee_code = req.body.employee_code;
  var agent_name = req.body.agent_name;
  var media = req.body.media;
  var timer_status = req.body.timer_status;
  var agent_num = req.body.agent_num;
  var sip_id = req.body.sip_id;
  var calls_taken = req.body.calls_taken;
  var curr_status = req.body.curr_status;
  var last_call_ringer = req.body.last_call_ringer;
  var last_call_taken = req.body.last_call_taken;
  var missed_calls = req.body.missed_calls;
  var seq_no = req.body.seq_no;
  var status = req.body.status;
  var logged_in = req.body.logged_in;
  var logged_in_sip = req.body.logged_in_sip;
  var agent_pwd = req.body.agent_pwd;
  var c_call = req.body.c_call;
  var w_call = req.body.w_call;
  var on_call = req.body.on_call;
  var last_login = req.body.last_login;
  var last_activity = req.body.last_activity;
  var on_call_time = req.body.on_call_time;
  var live_status = req.body.live_status;
  var busy_status = req.body.busy_status;
  var desk_ip = req.body.desk_ip;
  var calling_num = req.body.calling_num;

  var agent_channel_id = req.body.agent_channel_id;
  var pause_status = req.body.pause_status;
  var pause_status_time = req.body.pause_status_time;
  var pause_status_disposition = req.body.pause_status_disposition;
  var xlite_status = req.body.xlite_status;
  var hold_time = req.body.hold_time;
  var camp_name = req.body.camp_name;
  var camp_id = req.body.camp_id;
  var camp_type = req.body.camp_type;
  var login_type = req.body.login_type;
  var mob_no = req.body.mob_no;
  var ring_time = req.body.ring_time;
  var hard_sip_id = req.body.hard_sip_id;
  var assign_camp = req.body.assign_camp;
  var popup_status = req.body.popup_status;
  var account_code = req.body.account_code;
  var agent_priorty = req.body.agent_priorty;
  var c_call_two = req.body.c_call_two;
  var CallType = req.body.CallType;
  var pre_status = req.body.pre_status;
  var mdial_status = req.body.mdial_status;
  var CdrUniqueID = req.body.CdrUniqueID;
  var group_id = req.body.group_id;
  var LeadID = req.body.LeadID;
  var Reporting1 = req.body.Reporting1;
  var Reporting2 = req.body.Reporting2;

  var tl_id = req.body.tl_id;
  var manager_id = req.body.manager_id;
  var headset = req.body.headset;
  var AutoCall = req.body.AutoCall;
  var AutoCallStatus = req.body.AutoCallStatus;
  var agent_unique_id = req.body.agent_unique_id;
  var is_popup_open = req.body.is_popup_open;
  var session_id = req.body.session_id;
  var session_ip = req.body.session_ip;
  var customer_channel_id = req.body.customer_channel_id;
  var follow_me = req.body.follow_me;
  var mobile_no = req.body.mobile_no;
  var pri_status = req.body.pri_status;
  var agentType = req.body.agentType;

  employee_code = JSON.stringify(employee_code);
  agent_name = JSON.stringify(agent_name);
  media = JSON.stringify(media);
  agent_num = JSON.stringify(agent_num);
  sip_id = JSON.stringify(sip_id);
  curr_status = JSON.stringify(curr_status);
  last_call_ringer = JSON.stringify(last_call_ringer);
  last_call_taken = JSON.stringify(last_call_taken);
  seq_no = JSON.stringify(seq_no);
  agent_pwd = JSON.stringify(agent_pwd);
  c_call = JSON.stringify(c_call);
  w_call = JSON.stringify(w_call);
  last_login = JSON.stringify(last_login);
  last_activity = JSON.stringify(last_activity);
  on_call_time = JSON.stringify(on_call_time);
  desk_ip = JSON.stringify(desk_ip);
  calling_num = JSON.stringify(calling_num);
  agent_channel_id = JSON.stringify(agent_channel_id);
  pause_status_time = JSON.stringify(pause_status_time);

  pause_status_disposition = JSON.stringify(pause_status_disposition);
  camp_name = JSON.stringify(camp_name);
  camp_id = JSON.stringify(camp_id);
  camp_type = JSON.stringify(camp_type);
  login_type = JSON.stringify(login_type);
  ring_time = JSON.stringify(ring_time);
  mob_no = JSON.stringify(mob_no);
  hard_sip_id = JSON.stringify(hard_sip_id);
  assign_camp = JSON.stringify(assign_camp);
  account_code = JSON.stringify(account_code);
  c_call_two = JSON.stringify(c_call_two);
  CallType = JSON.stringify(CallType);
  Reporting1 = JSON.stringify(Reporting1);
  Reporting2 = JSON.stringify(Reporting2);
  headset = JSON.stringify(headset);
  agent_unique_id = JSON.stringify(agent_unique_id);
  session_id = JSON.stringify(session_id);
  session_ip = JSON.stringify(session_ip);
  customer_channel_id = JSON.stringify(customer_channel_id);
  mobile_no = JSON.stringify(mobile_no);

  var query =
    "INSERT INTO agent_info(employee_code,agent_name,media,timer_status,agent_num,sip_id,calls_taken,curr_status,last_call_ringer,last_call_taken,missed_calls,seq_no,status,logged_in,logged_in_sip,agent_pwd,c_call,w_call,on_call,last_login,last_activity,on_call_time,live_status,busy_status,desk_ip,calling_num,agent_channel_id,pause_status,pause_status_time,pause_status_disposition,xlite_status,hold_time,camp_name,camp_id,camp_type,login_type,mob_no,ring_time,hard_sip_id,assign_camp,popup_status,account_code,agent_priorty,c_call_two,CallType,pre_status,mdial_status,CdrUniqueID,group_id,LeadID,Reporting1,Reporting2,tl_id,manager_id,headset,AutoCall,AutoCallStatus,agent_unique_id,is_popup_open,session_id,session_ip,customer_channel_id,follow_me,mobile_no,pri_status,agentType) VALUES(" +
    employee_code +
    "," +
    agent_name +
    "," +
    media +
    "," +
    timer_status +
    "," +
    agent_num +
    "," +
    sip_id +
    "," +
    calls_taken +
    "," +
    curr_status +
    "," +
    last_call_ringer +
    "," +
    last_call_taken +
    "," +
    missed_calls +
    "," +
    seq_no +
    "," +
    status +
    "," +
    logged_in +
    "," +
    logged_in_sip +
    "," +
    agent_pwd +
    "," +
    c_call +
    "," +
    w_call +
    "," +
    on_call +
    "," +
    last_login +
    "," +
    last_activity +
    "," +
    on_call_time +
    "," +
    live_status +
    "," +
    busy_status +
    "," +
    desk_ip +
    "," +
    calling_num +
    "," +
    agent_channel_id +
    "," +
    pause_status +
    "," +
    pause_status_time +
    "," +
    pause_status_disposition +
    "," +
    xlite_status +
    "," +
    hold_time +
    "," +
    camp_name +
    "," +
    camp_id +
    "," +
    camp_type +
    "," +
    login_type +
    "," +
    mob_no +
    "," +
    ring_time +
    "," +
    hard_sip_id +
    "," +
    assign_camp +
    "," +
    popup_status +
    "," +
    account_code +
    "," +
    agent_priorty +
    "," +
    c_call_two +
    "," +
    CallType +
    "," +
    pre_status +
    "," +
    mdial_status +
    "," +
    CdrUniqueID +
    "," +
    group_id +
    "," +
    LeadID +
    "," +
    Reporting1 +
    "," +
    Reporting2 +
    "," +
    +tl_id +
    "," +
    manager_id +
    "," +
    headset +
    "," +
    AutoCall +
    "," +
    AutoCallStatus +
    "," +
    agent_unique_id +
    "," +
    is_popup_open +
    "," +
    session_id +
    "," +
    session_ip +
    "," +
    customer_channel_id +
    "," +
    follow_me +
    "," +
    mobile_no +
    "," +
    pri_status +
    "," +
    agentType +
    ")";
  db(query)
    .then((result) => {
      res.status(200).json({
        message: "Agent Added Sucessfully",
      });
    })
    .catch((err) => console.log(err));
};

const addreport = (req, res) => {
  var dnid = req.body.dnid;
  var user_name = req.body.user_name;
  var usermailid = req.body.usermailid;
  var userpassword = req.body.userpassword;
  var user_logo = req.body.user_logo;
  var company_name = req.body.company_name;
  var usernumber = req.body.usernumber;
  var last_login = req.body.last_login;
  var curr_service = req.body.curr_service;

  user_name = JSON.stringify(user_name);
  usermailid = JSON.stringify(usermailid);
  userpassword = JSON.stringify(userpassword);
  user_logo = JSON.stringify(user_logo);
  company_name = JSON.stringify(company_name);
  last_login = JSON.stringify(last_login);
  curr_service = JSON.stringify(curr_service);

  var query =
    "INSERT INTO reports(dnid,user_name,usermailid,userpassword,user_logo,company_name,usernumber,last_login,curr_service) VALUES(" +
    dnid +
    "," +
    user_name +
    "," +
    usermailid +
    "," +
    userpassword +
    "," +
    user_logo +
    "," +
    company_name +
    "," +
    usernumber +
    "," +
    last_login +
    "," +
    curr_service +
    ")";
  db(query)
    .then((result) => {
      res.status(200).json({
        message: "Report Added Sucessfully",
      });
    })
    .catch((err) => console.log(err));
};

const addService = (req, res) => {
  try {
    var camp_name = req.body.camp_name;
    var camp_type = req.body.camp_type;
    var camp_did = req.body.camp_did;
    var PacingSet = req.body.PacingSet;
    var hold = req.body.hold;
    var waraptime = req.body.waraptime;
    var trunkType = req.body.trunkType;
    var sticky = req.body.sticky;
    var ivr_status = req.body.ivr_status;
    var CRMURL = req.body.CRMURL;

    var query = `INSERT INTO campaign(camp_name,camp_type,camp_did,PacingSet,hold,waraptime,trunkType,sticky,ivr_status,CRMURL) VALUES('${camp_name}','${camp_type}','${camp_did}','${PacingSet}',${hold},${waraptime},${trunkType},${sticky},${ivr_status},'${CRMURL}')`;
    db(query)
      .then((result) => {
        res.status(200).json({
          message: "Service Added Sucessfully",
        });
      })
      .catch((err) => console.log(err));

    var didStatus = `UPDATE did_allocation
    SET status = 1,campaign_name='${camp_name}'
    WHERE did_id=${camp_did}`;
    db(didStatus)
      .then((result) => {
        console.log("did update done");
      })
      .catch((err) => console.log(err));

    var musiconhold = `INSERT INTO musiconhold(name,mode,directory) VALUES('${camp_name}','files','/uploads')`;
    db(musiconhold)
      .then((result) => {
        console.log("musiconhold done");
      })
      .catch((err) => console.log(err));

    var svrTime = `INSERT INTO srvtime(ServiceName,CampaignName,DiD,camptype,StartTime,EndTime,waraptime,PacingSet) VALUES('${camp_name}','${camp_name}','${camp_did}','${camp_type}','00:00:01','23:59:59',${waraptime},'${PacingSet}')`;
    db(svrTime)
      .then((result) => {
        console.log("svrtime done");
      })
      .catch((err) => console.log(err));

    var queue = `INSERT INTO queues(name,musiconhold,monitor_format,strategy,ringinuse) VALUES('${camp_name}','${camp_name}','wav','rrmemory','no')`;
    db(queue)
      .then((result) => {
        console.log("queue done");
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  addDynamicForm,
  addtl,
  addmanager,
  addcampaign,
  adddid,
  addagent,
  addreport,
  addDropdown,
  addService,
};
