const CafeController = require('../controllers/cafe.controller');

module.exports = (app) => {

    app.get('/api/test', CafeController.apiTest);

    
}