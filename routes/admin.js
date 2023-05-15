const express = require("express");

const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(
    '<form onSubmit = localStorage.setItem(`username`,document.getElementById(`username`).value) action="/admin/login" method="POST"><input id="username" type="text" name="title"><button type="submit">Login</button></form>'
  );
});

router.post("/login", (req, res, next) => {
  console.log(req.body, "22222");
//   res.write(req.body);
  res.redirect("/admin/chat");
});

module.exports = router;
