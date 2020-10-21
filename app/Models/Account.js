'use strict'

const Model = use('Model')

class Account extends Model {
  groups() {
    return this.hasMany('App/Models/TransactionGroup')
  }
}

module.exports = Account
