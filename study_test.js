


   var index= require("./index");
   var router= require("./router");
   var requestHandler = require("./requestHandler");

   var handle={}
   //没有括号
   handle["/"] = requestHandler.start;
   handle["/start"]=requestHandler.start;
   handle["/upload"]=requestHandler.upload;
   handle["/show"] = requestHandler.show;

   index.start(router.router,handle);