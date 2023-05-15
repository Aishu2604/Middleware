const express = require("express");
const bodyParser = require("body-parser");
const shopRoutes = require("./routes/shop");
const app = express();

const adminRoutes = require("./routes/admin");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found....Please Go back</h1>");
});

app.listen(3000);
