var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url == '/'){
        res.write("<h1>MicroBlog</h1>");
    }else if(req.url == '/artigo/'){
        res.write("<h1>Página dos artigos do blog</h1>");   
    }else{
        res.writeHead(404, {'Content-Type': 'text/heml'});
        res.write("Erro: Página não econtrada");
    }

    res.end();
});

server.listen(3000);