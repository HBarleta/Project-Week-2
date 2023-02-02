const CafeController = require('../controllers/cafe.controller');

module.exports = (app) => {
    // server connection test
    app.get('/api/test', CafeController.apiTest);
    // add one menu item
    app.post('/api/cafe/add', CafeController.addOne);
    // get all menu items
    app.get('/api/cafe/getall', CafeController.getAll);
    // get one menu item
    app.get('/api/cafe/getone/:id', CafeController.getOne)
    // update one menu item
    app.put('/api/cafe/updateone/:id', CafeController.updateOne);
    // delete one menu item
    app.delete('/api/cafe/deleteone/:id', CafeController.deleteOne);
    
}