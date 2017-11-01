'use strict';

var url = require('url');

var Login = require('./LoginService');

module.exports.getLoginDetails = function getLoginDetails (req, res, next) {
  Login.getLoginDetails(req.swagger.params, res, next);
};
