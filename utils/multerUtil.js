/*https://github.com/expressjs/multer*/
/*http://cnodejs.org/topic/564f32631986c7df7e92b0db*/
var  _config=require('../common/_config');
var  multer=require('multer');
 var storage = multer.diskStorage({
     //设置上传后文件路径，uploads文件夹会自动创建。
        destination: function (req, file, cb) {
            cb(null, _config.fileuploadpath.wechat_picurl)
       }, 
     //给上传文件重命名，获取添加后缀名
      filename: function (req, file, cb) {
          var fileFormat = (file.originalname).split(".");
          cb(null, file.originalname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);

      }
 });  
     //添加配置文件到muler对象。
     var upload = multer({
          storage: storage
    });
    
	//如需其他设置，请参考multer的limits,使用方法如下。
   //var upload = multer({
  //    storage: storage,
  //    limits:{}
  // });
  
 //导出对象
module.exports = upload;