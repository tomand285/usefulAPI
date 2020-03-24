var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var fs = require("fs");

router.post('/convert', upload.single('image'), async function (req, res) {
  if(!req.file){
    res.status(401).json({error: 'Please provide an image'});
  }else{
    let size = req.file.size;
    if(size > 2147483600){
      res.status(413).json({error: 'File too big'});
      fs.unlinkSync(req.file.path);
    }
    var bitmap = fs.readFileSync(req.file.path);
	  res.status(200).json({
        "image": {
            "filename": req.file.originalname,
            "contentType": req.file.mimetype,
            "base64": new Buffer.from(bitmap).toString('base64')
        }
    });
    fs.unlinkSync(req.file.path);
  }
});

module.exports = router;
