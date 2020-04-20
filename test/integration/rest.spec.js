var assert = require('assert');
const fs = require('fs');
const chai = require('chai');
  
chai.use(require('chai-http'));


const init = {
  baseURL: 'http://UsefulAPI-Instance-16INGOG725HYN-1316259238.us-east-1.elb.amazonaws.com/'
};

console.log("Started using env: " + JSON.stringify(init));

describe('Convert', function () {
  describe('convert image to base64', function () {
    it('should return status 200 ok', async function () {
      chai.request(init.baseURL)
        .post('/convert')
        .attach('image', fs.readFileSync(__dirname + '/../../img/yoda.jpeg'), 'yoda.jpeg')
        .then(function (res) {
           assert.equal(res.status, 200, "Status");
        })
        .catch(function (err) {
           throw err;
        });
    });
  });
});