//const { Result } = require("express-validator");
const db = require("../Config/Connect");

const saltRounds = 10;

exports.Register = async (data) => {
  const { username, password } = data;

  console.log(username);
};
exports.Login = async (data) => {
  const { username, password } = data;
  console.log(username);
};
