/**
 * Created by Luiz Henrique Soares on 10/06/2016.
 */

module.exports = function (app) {
        var listProdutos = function (req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista(function (err, results) {
            res.format({
                html: function() {
                    res.render('produtos/lista', {lista: results});         
                },
                json: function() {
                    res.json(results);
                }
            });
           
        });
        connection.end();
    }; 

    app.get('/produtos', listProdutos,{errosValidacao: {},produto:{}
    });

    app.get('/produtos/form', function (req, res) {
        res.render('produtos/form');
    });

    app.post('/produtos', function (req, res) {
        var produto = req.body;

        req.assert('titulo', 'Titulo é obrigatorio').notEmpty();
        req.assert('preco', 'Formato invalido').isFloat();

        var err = req.validationErrors();

        if(err) {
            res.render('produtos/form',{errosValidacao: err, produto:produto});
            console.log(err);
              return;
        }

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.salva(produto, function(err, results) {
            res.redirect('/produtos');
          
        });
    });
}


 