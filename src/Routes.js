const express = require('express')
const paymentController = require('./controllers/paymentController')
const routes = express.Router()

routes.post('/payment', paymentController.store)

module.exports = routes