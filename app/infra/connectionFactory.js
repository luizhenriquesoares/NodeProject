 /**
 * Created By Luiz Henrique Soares 13/06/2016
 */

var mysql = require('mysql');

var connectMYSQL = function() {
    console.log('estou conectando no mysql');
     return  mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'nodejs',
      }); 
};

 module.exports = function() {
     console.log('express load me chamando');
     return connectMYSQL;
 }

