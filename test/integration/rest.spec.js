var assert = require('assert');
const fs = require('fs');
const FormData = require('form-data');
const axios = require('axios');


const init = {
  baseURL: 'http://usefulapi-instance-zq8eve4su3ax-692985434.us-east-1.elb.amazonaws.com/'
};
const instance = axios.create(init);

console.log("Started using env: " + JSON.stringify(init));

describe('Convert', function () {
  describe('convert image to base64', function () {
    let data = new FormData();
    let image = fs.createReadStream(__dirname + '/yoda.jpeg');
    data.append('image', image, image.path);
    const headers = {
      ...data.getHeaders()
    };
    let request = instance.post('convert', data, { headers }).catch(error => { return error.response });
    it('should return status 200 ok', async function () {
      let req = await request;
      assert.equal(req.status, 200, "Status");
    });
  });
});