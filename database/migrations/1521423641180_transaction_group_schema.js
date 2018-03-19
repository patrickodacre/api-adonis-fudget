'use strict'

const Schema = use('Schema')

class TransactionGroupSchema extends Schema {
  up() {
    this.create('transaction_groups', table => {
      table.increments()
      table.timestamps()
      table.date('start_date')
      table.date('end_date')
      table.decimal('opening_balance', 10, 2)
      table.decimal('closing_balance', 10, 2)
      table.integer('account_id').unsigned()
      table
        .foreign('account_id')
        .references('accounts.id')
        .onDelete('cascade')
    })
  }

  down() {
    this.drop('transaction_groups')
  }
}

module.exports = TransactionGroupSchema
