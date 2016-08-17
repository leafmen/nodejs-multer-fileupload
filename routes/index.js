var express = require('express');
var router = express.Router();
var muilter = require('../utils/multerUtil');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/dataInpute',function (req, res){

  var upload=muilter.single('file');
  upload(req, res, function (err) {
    //添加错误处理
    if (err) {
      return console.log(err);
    }
    //文件信息在req.file或者req.files中显示。
    //console.log(req);
    console.log('originalname='+req.file.originalname);
    console.log('fieldname='+req.file.fieldname);
    console.log('mimetype ='+req.file.mimetype );
    console.log('destination='+req.file.destination);
    console.log('path ='+req.file.path );
    console.log('filename ='+req.file.filename );

    console.log('username ='+req.body.username );
    console.log('username ='+req.body.password );
  });

});


module.exports = router;

