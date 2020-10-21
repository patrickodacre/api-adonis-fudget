'use strict'

const Group = use('App/Models/TransactionGroup')

class TransactionGroupController {
  async index({ response }) {
    const groups = await Group.all()

    return response.json({
      data: groups
    })
  }

  async store({ request, response }) {
    const {
      account_id,
      opening_balance,
      closing_balance = 0,
      start_date,
      end_date = null
    } = request.post()

    const group = await Group.create({
      account_id,
      opening_balance,
      closing_balance,
      start_date,
      end_date
    })

    if (group.$persisted) {
      return response.status(201).json({
        data: group
      })
    }
  }

  async show({ response, params: { id } }) {
    const group = await Group.query()
      .where('id', id)
      .with('transactions', query => {
        query.key
      })
      .first()

    return response.json({
      data: group
    })
  }

  async update({ request, response, params: { id } }) {
    const group = await Group.find(id)

    const {
      account_id,
      opening_balance,
      closing_balance,
      start_date,
      end_date
    } = request.post()

    group.account_id = account_id || group.account_id
    group.opening_balance = opening_balance || group.opening_balance
    group.closing_balance = closing_balance || group.closing_balance
    group.start_date = start_date || group.start_date
    group.end_date = end_date || group.end_date

    const saved = await group.save()

    if (saved) {
      return response.status(200).json({
        data: group
      })
    }
  }

  async destroy({ response, params: { id } }) {
    const group = await Group.find(id)

    const deleted = await group.delete()

    return response.json({
      deleted: true
    })
  }
}

module.exports = TransactionGroupController
