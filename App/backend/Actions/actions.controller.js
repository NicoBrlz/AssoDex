const actionsController = require('express').Router();
const actionsService = require('./actions.service')

actionsController.get('/',async(req, res) => {
    try {
        const data = await actionsService.getBuffer();
        res.status(200).send(data)
    } catch (err) {
        res.status(400).send(err);
    }

})

module.exports = {
    actionsController,
}