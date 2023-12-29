const db = require("../manageQuery");
const jwt = require("jsonwebtoken");
const tokenPrivacy = require("../tok");

const login = (req, res) => {
  const query = `SELECT * FROM supervisor_login WHERE usermailid="${req.body.email}"`;
  db(query)
    .then((result) => {
      if (result) {
        if (result.length > 1) {
          res.json({
            message: "Admin have multiple account with same email id",
          });
        } else {
          result = result[0];
          if (result.userpassword == req.body.password) {
            let token = jwt.sign(
              { email: result.usermailid, username: result.user_name },
              process.env.SECRET_KEY,
              { expiresIn: "9h" }
            );
            res.json({
              message: "login Successfully",
              token,
            });
          } else {
            res.json({ message: "Password not Match" });
          }
        }
      }
    })
    .catch((err) => res.json({ message: "Admin not found" }));
};

module.exports = { login };
