/**
 * Created by Luiz Henrique Soares on 10/06/2016.
 */

var app = require('./config/express')();

app.listen(3000, function () {
    console.log('Servidor Rodando');
});

