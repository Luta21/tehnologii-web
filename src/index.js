var http = require("http")

http
.createServer(function(req,res){
    res.write("Salut")
    res.end()
}).listen(8080)