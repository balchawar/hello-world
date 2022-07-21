var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

var _CONFIG = require("../config");

const connect = () => {
  mongoose.connect(_CONFIG.MONGODB_URL,{useNewUrlParser : true, useUnifiedTopology: true, useFindAndModify: false })
    .then(()=> console.log('Connection To DB Made'))
    .catch((err) => console.log(err, 'Connection To DB ERROR'))
};

const disconnect = () => {
  if (!mongoose.connection) {
    return;
  }

  mongoose.disconnect();
};

module.exports = {
  connect,
  disconnect,
};
