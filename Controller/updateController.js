const db = require("../manageQuery");

const updateManager = (req, res) => {
  try {
    const id = req.params.id;
    let body = req.body;
    var query = `UPDATE manager
        SET m_name = '${body.m_name}', m_email = '${body.m_email}',m_description = '${body.m_description}', m_password = '${body.m_password}'
        WHERE m_id=${id}`;
    db(query)
      .then((result) => {
        res.status(200).json({
          message: "Manager Updated Sucessfully",
        });
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

const updateTl = (req, res) => {
  try {
    const id = req.params.id;
    let body = req.body;
    var query = `UPDATE tl
    SET tl_name = '${body.tl_name}', tl_email = '${body.tl_email}',tl_description = '${body.tl_description}', tl_password = '${body.tl_password}'
    WHERE tl_id=${id}`;
    db(query)
      .then((result) => {
        res.status(200).json({
          message: "Tl Updated Sucessfully",
        });
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  updateManager,
  updateTl,
};
