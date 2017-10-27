'use strict';

exports.getLoginDetails = function(args, res, next) {
  /**
   * Your login information
   *
   * username String 
   * password String 
   * returns Object
   **/
  var examples = {};
  examples['application/json'] = `{
    username: abc,
    password: pass
  }`;
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

