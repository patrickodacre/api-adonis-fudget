'use strict'

const Transaction = use('App/Models/Transaction')

class TransactionController {
  async index() {}

  async store({ request, response }) {
    const {
      date,
      actual_in,
      expected_in,
      actual_out,
      expected_out,
      description,
      transaction_group_id
    } = request.post()

    const transaction = await Transaction.create({
      date,
      actual_in,
      expected_in,
      actual_out,
      expected_out,
      description,
      transaction_group_id
    })

    return response.status(201).json({
      data: transaction
    })
  }

  async show() {}

  async update() {}

  async destroy({ response, params: { id } }) {
    const transaction = await Transaction.find(id)

    const deleted = await transaction.delete()

    if (deleted) {
      return response.status(200).json({
        deleted: true
      })
    }
  }
}

module.exports = TransactionController
