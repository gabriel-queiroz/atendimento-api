const express = require("express");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.listen(3001);

require("./controllers/atendimento")(app);
