'use strict'

const Account = use('App/Models/Account')

class AccountController {
  async index({ response }) {
    const accounts = await Account.all()

    return response.json({
      data: accounts
    })
  }

  async store({ request, response }) {
    const { name, description } = request.post()

    const account = await Account.create({ name, description })

    if (account.$persisted) {
      return response.status(201).json({
        data: account
      })
    }
  }

  async show({ request, response, params: { id } }) {
    const account = await Account.query()
      .where('id', id)
      .with('groups')
      .first()

    if (account) {
      return response.status(200).json({
        data: account
      })
    }
  }

  async update({ request, response, params: { id } }) {
    const account = await Account.find(id)

    const { name, description } = request.post()

    account.name = name || account.name
    account.description = description || account.description

    const saved = await account.save()

    if (saved) {
      return response.status(200).json({
        data: account
      })
    }
  }

  async destroy({ request, response, params: { id } }) {
    const account = await Account.find(id)

    const deleted = await account.delete()

    if (deleted) {
      return response.status(200).json({
        deleted: true
      })
    }
  }
}

module.exports = AccountController
