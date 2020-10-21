'use strict'

const Model = use('Model')

class TransactionGroup extends Model {
  transactions() {
    return this.hasMany('App/Models/Transaction')
  }
}

module.exports = TransactionGroup
