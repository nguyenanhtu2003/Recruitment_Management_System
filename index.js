const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const web = require("./routes/web.router");

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));


app.use("/", web);

app.listen(port, () => {
  console.log(` Connect Success Port http://localhost:${port}`);
});
