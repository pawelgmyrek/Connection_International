var path = require("path");

module.exports = function(app) {

  app.get("/connection_international", function(req, res) {
    res.sendFile(path.join(__dirname, "../html/connection_international.html"));
  });

  app.get("/sign_in", function(req, res) {
    res.sendFile(path.join(__dirname, "../html/signinpage.html"));
  });

  app.get("/register", function(req, res) {
    res.sendFile(path.join(_dirname, "../html/registerpage.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../html/homepage.html"));
  });
};
