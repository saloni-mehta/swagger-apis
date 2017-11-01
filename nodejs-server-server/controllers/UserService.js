'use strict';

var User = require('../model/user');
var request = require('request');

exports.deleteUser = function (args, res, next) {
  User.findOneAndRemove({ name: args.name.value }, (err, doc) => {
    if (err) {
      res.json({ message: "Error in deleting user", error: err })
    } else {
      console.log("deleted")
      res.json({ message: "User deleted successfully", task: doc })
    }
  });
}

exports.editUserDetails = function (args, res, next) {
  var user = new User(args.user.value);
  user.id = args.user.value._id;
  var userObj = user.toObject();
  delete userObj._id
  User.findOneAndUpdate({ name: args.name.value }, userObj, (err, doc) => {
    if (err) {
      res.status(500).json({ message: "Error in updating user details", error: err })
    } else {
      res.status(200).json({ message: "User details updated successfully", location: `/user/${userObj.name}` })
    }
  });
}

exports.getAllUsers = function (args, res, next) {

  var examples = {};
  examples['application/json'] = [`{
    name: Saloni,
    email: saloni@email.com,
    username: sal,
    password: pass
  }`];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    User.find((err, docs) => {
      if (err) {
        console.log(err);
        res.json({ message: 'Unable to retrieve users data', error: err })
      }
      else {

        res.json(docs);
      }
    });
  } else {
    res.end();
  }

  // request({
  //   uri: "https://jsonplaceholder.typicode.com/posts",
  //   method: "GET",
  //   // agent: agent,
  //   timeout: 10000,
  //   followRedirect: true,
  //   maxRedirects: 10,

  // }, function (error, response, body) {
  //   if (body) {
  //     res.json(JSON.parse(body))
  //   }
  // });
}

exports.getUserByName = function (args, res, next) {

  var examples = {};
  examples['application/json'] = `{
    name: Saloni,
    email: saloni@email.com,
    username: sal,
    password: pass
  }`;
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    User.findOne({ name: args.name.value }, (err, doc) => {
      if (err) {
        console.log(err);
        res.json({ message: 'Unable to retrieve user object', error: err });
      } else {
        res.json(doc);
      }
    });
  } else {
    res.end();
  }
}

exports.newUser = function (args, res, next) {
  // console.log(args)
  var user = new User(args.user.value);

  user.save((err, doc) => {
    if (err) {
      res.json({ message: "Error in adding user details", error: err });
    }
    else {
      res.json({ message: 'User details added successfully', user: doc, location: `/user/${doc.name}` });
    }
  });

  // request({
  //   uri: "https://jsonplaceholder.typicode.com/posts",
  //   method: "POST",
  //   // agent: agent,
  //   timeout: 10000,
  //   followRedirect: true,
  //   maxRedirects: 10,

  // }, function (error, response, body) {
  //   if (body) {
  //     res.json(JSON.parse(body))
  //   }
  // });

}

