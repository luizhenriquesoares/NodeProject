/**
 * Created By Luiz Henrique Soares 13/06/2016
 */

function ProdutosDAO(connection) {
    this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback) {
        this._connection.query('select * from livros', callback);
}


ProdutosDAO.prototype.salva = function(produto,callback) {
        this._connection.query('insert into livros set ?' , produto, callback);
        console.log(produto);
}

module.exports = function() {
  return ProdutosDAO;
}