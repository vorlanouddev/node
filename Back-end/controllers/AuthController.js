const Models = require("./../models/user");

module.exports.Register = async (req, res) => {
  //const data = req.body;
  let result = await Models.Register(req.body);
};

module.exports.Login = async (req, res) => {
  let result = await Models.Login(req.body);
};
