const express = require("express");
const webRouters = require("./routes/web");
const path = require("path");

const app = express();
const portNumber = 3001;

const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "public")));

// essential middlewares
app.use(bodyParser.urlencoded({ extended: false }));

app.use(webRouters);

app.listen(3001, () => {
  console.log(`app listening in PORT ${portNumber}`);
});
