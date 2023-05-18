const express = require("express");
const bodyParser = require("body-parser");
const shopRoutes = require("./routes/shop");
const app = express();
const path = require("path");
const rootDir = require("./util/path");
const contact = require("./routes/contact");
const adminRoutes = require("./routes/admin");
const success = require("./routes/success")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", contact);
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(success)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
