'use strict'

const Schema = use('Schema')

class AccountSchema extends Schema {
  up() {
    this.create('accounts', table => {
      table.increments()
      table.timestamps()
      table.string('name').notNullable()
      table.string('description')
    })
  }

  down() {
    this.drop('accounts')
  }
}

module.exports = AccountSchema
