const express = require('express');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/users', SessionController.store);


// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição

/*routes.get('/', (req, res) => {
    return res.json({ message: 'Hello ihaa' });
});

routes.get('/users', (req, res) => {
    return res.json({ idade: req.query.idade });
});

routes.put('/users/:id', (req, res) => {
    return res.json({ idade: req.params.id });
});*/

module.exports = routes;