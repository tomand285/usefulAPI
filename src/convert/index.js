"use strict";
const multipart = require('./multipart.js');
const helper = require('../helper.js');

module.exports.handler = async (event, context, callback) => {
  console.log(event);
    
  let body = event.body;
  let decodedImage = Buffer.from(body, 'base64');
  event.body = decodedImage.toString('latin1');
  
  let data = multipart.parse(event, true);
  data.image.base64 = data.image.content.toString("base64");
  delete data.image.type;
  delete data.image.content;
  helper.done(200, data,callback);
};

