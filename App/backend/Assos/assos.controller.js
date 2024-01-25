const assosController = require('express').Router();
const assosService = require('./assos.service')

assosController.get('/',async(req, res) => {
    try {
        const data = await assosService.getBuffer();
        res.status(200).send(data)
    } catch(err) {
        res.status(400).send(err);
    }

})


module.exports = {
    assosController,
}