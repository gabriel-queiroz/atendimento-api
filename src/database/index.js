const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://admin:phoebus123@ds155674.mlab.com:55674/atendimento-crud"
);
mongoose.Promise = global.Promise;

module.exports = mongoose;
