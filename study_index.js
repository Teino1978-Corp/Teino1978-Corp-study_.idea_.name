

var http = require("http");
var url = require("url");

function index(route,handle){
    function onRequest (request, response)
    {

        var pathname = url.parse(request.url).pathname;

        route(handle, pathname, response,request);


    }
      http.createServer(onRequest).listen(3000);
 }
exports.start =index;