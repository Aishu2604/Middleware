const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/admin/chat", (req, res, next) => {
    fs.readFile('username.txt', (err,data)=>{
        if(err){
            console.log(err);
            data = 'No Chat Exists'
        }
        res.send(
           `${data}<form action="/admin/chat" onSubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST"><input id="message" type="text" name="message" placeHolder="Your Message"><input type="hidden" name="username" id="username"><button type="submit">Send</button></form>`
          );
    })
  
});
router.post("/admin/chat", (req, res, next) => {
    console.log(req.body.username, 'nnnnnnn');
  fs.writeFile(
    "username.txt",
    `${req.body.username}:${req.body.message}`,
    { flag: "a" },
    (err) => {
      err ? console.log(err) : res.redirect("/admin/chat");
    }
  );
//   res.redirect("/chat");
});

module.exports = router;
