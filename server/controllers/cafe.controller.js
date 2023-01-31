const Cafe = require('../models/cafe.model');

module.exports.apiTest = (req, res) => {
    res.json({Status: 'Connection test to Aywaah server'})
}