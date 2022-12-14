const express = require('express');
const app = express();
var multer = require('multer')
var cors = require('cors');
var mess = ""
app.use(cors())
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, './public/xmlS')
  },
  filename: function (req, file, cb) {
    cb(null, 'FLMmodel.xml' )//file.originalname *.flm
  }
})
var upload = multer({ storage: storage }).single('file')
app.post('/upload',function(req, res) {
     
    upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)

    })

});

app.listen(8000, function() {

    console.log('server running on port 8000');

});
