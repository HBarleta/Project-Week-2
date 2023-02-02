const Cafe = require('../models/cafe.model');

module.exports.apiTest = (req, res) => {
    res.json({Status: 'Connection test to Aywaah server'})
}

module.exports.addOne = (req, res) => {
    const newMenu = req.body;
    Cafe.create(newMenu)
    .then(menu => res.json(menu))
    .catch(error => res.status(400).json(error))
}

module.exports.getAll = (req,res) => {
    Cafe.find()
    .then(cafes => res.json(cafes))
    .catch(err => res.json(err))
}

module.exports.getOne = (req, res) => {
    const menuId = req.params.id;
    Cafe.findOne({_id: menuId})
    .then(one => res.json(one))
    .catch(err => res.json(err))
}

module.exports.updateOne = (req, res) => {
    const menuId = req.params.id;
    const newValue = req.body;
    Cafe.findOneAndUpdate({_id: menuId}, newValue, {new: true})
    .then((updatedValue => res.json(updatedValue)))
    .catch((err) => res.json(err))
}

module.exports.deleteOne = (req, res) => {
    Cafe.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch(err => res.json(err))
}