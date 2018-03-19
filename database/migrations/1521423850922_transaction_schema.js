'use strict'

const Schema = use('Schema')

class TransactionSchema extends Schema {
  up() {
    this.create('transactions', table => {
      table.increments()
      table.timestamps()
      table.date('date')
      table.decimal('amount', 10, 2)
      table.boolean('expense').defaultTo(true)
      table.boolean('actual').defaultTo(true)
      table.string('description')
      table.integer('transaction_group_id').unsigned()
      table
        .foreign('transaction_group_id')
        .references('transaction_groups.id')
        .onDelete('cascade')
    })
  }

  down() {
    this.drop('transactions')
  }
}

module.exports = TransactionSchema
