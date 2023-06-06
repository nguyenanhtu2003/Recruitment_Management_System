const express = require("express");
const app = express();
const bodyParser = require("body-parser");


const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(` Connect Success Port http://localhost:${port}`);
  });