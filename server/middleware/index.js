const jwt = require("jwt-simple");
const apSecrets = require("../config/secrets");
const User = require("../models/user");

module.exports = {
	authenticate (req, res, next) {
		next();
	}
};