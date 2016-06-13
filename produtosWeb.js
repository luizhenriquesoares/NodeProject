/**
 * Created by Luiz Henrique Soares on 10/06/2016.
 */

var http = require('http');

var server = http.createServer(function (request, response) {
    if(request.url == "/produtos") {
        response.end("<html><body>Ola Mundo</body></html>");
    } else {
        response.end("<html><body>Voltou</body></html>");
    }

});
server.listen(3000);

console.log('Servidor Rodando');
