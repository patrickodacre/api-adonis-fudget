'use strict'

const Schema = use('Schema')

class TransactionSchema extends Schema {
  up() {
    this.create('transactions', table => {
      table.increments()
      table.timestamps()
      table.date('date')
      table.decimal('actual_in', 10, 2).defaultTo(0)
      table.decimal('expected_in', 10, 2).defaultTo(0)
      table.decimal('actual_out', 10, 2).defaultTo(0)
      table.decimal('expected_out', 10, 2).defaultTo(0)
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
