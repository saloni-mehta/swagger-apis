'use strict';

var url = require('url');

var User = require('./UserService');

module.exports.deleteUser = function deleteUser (req, res, next) {
  User.deleteUser(req.swagger.params, res, next);
};

module.exports.editUserDetails = function editUserDetails (req, res, next) {
  User.editUserDetails(req.swagger.params, res, next);
};

module.exports.getAllUsers = function getAllUsers (req, res, next) {
  User.getAllUsers(req.swagger.params, res, next);
};

module.exports.getUserByName = function getUserByName (req, res, next) {
  User.getUserByName(req.swagger.params, res, next);
};

module.exports.newUser = function newUser (req, res, next) {
  User.newUser(req.swagger.params, res, next);
};
