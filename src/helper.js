module.exports.done = (code, body, callback) => {
    let response = {
        statusCode: code,
        headers: {
          "Access-Control-Allow-Origin": "*", // Required for CORS support to work
          "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
        },
        body: JSON.stringify(body),
    };
    
    callback(null, response);
};