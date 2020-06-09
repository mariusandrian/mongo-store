const shopController = require('./controllers/shopController');

module.exports = app => {
    app.get('/', shopController.getAll);

    app.post('/shop', shopController.create);
    app.get('/shop/:name/edit', shopController.showEdit);
    app.get('/shop/new', shopController.new);
    app.put('/shop/:name', shopController.update);
    app.delete('/shop/:name', shopController.delete);
    // Min Shan's show route
    // app.get('/:name', shopController.getOneByName);
    // Yinsheng's show route
    app.get('/shop/:name', shopController.show);
};