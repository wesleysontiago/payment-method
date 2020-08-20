const axios = require('axios')
const mercadopago = require('mercadopago')
mercadopago.configurations.setAccessToken("ENV_ACCESS_TOKEN");

module.exports = {
  async store(req, res) {
    const payment_data = {
      transaction_amount: 110,
      token: 'ff8080814c11e237014c1ff593b57b4d',
      description: 'Synergistic Aluminum Table',
      installments: 1,
      payment_method_id: 'visa',
      payer: {
        email: 'test@test.com'
      }
    }
    mercadopago.payment.save(payment_data).then((data) => {
      console.log(data)
      res.send(data)
    })
      .catch((error) => {
        console.log(error)
      })

    return res.json(data)
  }
}