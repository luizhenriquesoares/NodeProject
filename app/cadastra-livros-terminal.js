/**
 * Created by Luiz Henrique Soares 14/06/2016 
 */

var http = require('http');

var config = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
};

var client = http.request(config, function(res) {
    console.log(res.statusCode);
    res.on('data', function(body) {
        console.log('Corpo:'+body);
    });
});

var produto = {
    titulo: 'mais sobre node',
    descricao: 'node além do javascript',
    preco: 200
};

client.end(JSON.stringfy(produto));