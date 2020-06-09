const shopRepository = require('../repositories/shopRepository');

module.exports = {
    async getAll (req, res) {
        const items = await shopRepository.getAll();
        res.render('shop/index', { items });
    },
    async show (req, res) {
        try {
            const item = await shopRepository.show(req.params.name);
            return res.render(`shop/show`, { item });
        } catch(err) {
            return res.send(err.message);
        }
    },
    async new (req, res) {
        res.render('shop/new');
    },
    async create (req, res) {
        req.body.price = parseInt(req.body.price);
        req.body.qty = parseInt(req.body.qty);

        try {
            await shopRepository.create(req.body);
            res.redirect('shop/new');
        } catch(err) {
            return res.send(err.message);
        }
    },
    async showEdit (req, res) {
        const item = await shopRepository.show(req.params.name);
        res.render('shop/edit', { item })
    },
    async getOneByName (req, res) {
        try {
            const item = await shopRepository.getOneByName(req.params.name);
            res.render('shop/show', { item });
        } catch (err) {
            res.render('errors/404', { err });
        }
    },
    async update (req, res) {
        try {
            const updateResponse = await shopRepository.update(req.params.name, req.body);
            return res.redirect('/');
        } catch(err) {
            res.render('errors/404', { err });
        }
    },
    async delete (req, res) {
        try {
            const deleteResponse = await shopRepository.delete(req.params.name);
            res.redirect('/');
        } catch (err) {
            res.render('errors/404', {err});
        }
    }
};