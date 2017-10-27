'use strict';

exports.deleteUser = function(args, res, next) {
  /**
   * Remove user
   * Delete user object
   *
   * userId Integer User's ID to be deleted
   * no response value expected for this operation
   **/
  res.end();
}

exports.editUserDetails = function(args, res, next) {
  /**
   * Edit user details
   * Sends revised user details
   *
   * name String Name of user to edit
   * user Object Edited user details
   * no response value expected for this operation
   **/
  res.end();
}

exports.getAllUsers = function(args, res, next) {
  /**
   * All users
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ "{}" ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getUserByName = function(args, res, next) {
  /**
   * Find user by name
   * Returns a single user
   *
   * name String Name of user to return
   * returns Object
   **/
  var examples = {};
  examples['application/json'] = "{}";
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.newUser = function(args, res, next) {
  /**
   * Add a new user
   *
   * user Object User object that needs to be added to the store
   * no response value expected for this operation
   **/
  res.end();
}

