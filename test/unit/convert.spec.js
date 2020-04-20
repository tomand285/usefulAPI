var assert = require('assert');
const fs = require('fs');
const chai = require('chai');
  
chai.use(require('chai-http'));
let app = require('../../app.js');

describe('Convert', function () {
  describe('convert image to base64', function () {
    it('should return status 200 ok', async function () {
      chai.request(app)
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