'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/', ({ request }) => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.get('accounts', 'AccountController.index')
  Route.post('accounts', 'AccountController.store')
  Route.get('accounts/:id', 'AccountController.show')
  Route.patch('accounts/:id', 'AccountController.update')
  Route.delete('accounts/:id', 'AccountController.destroy')
}).prefix('api/v1')

Route.group(() => {
  Route.get('transaction-groups', 'TransactionGroupController.index')
  Route.post('transaction-groups', 'TransactionGroupController.store')
  Route.get('transaction-groups/:id', 'TransactionGroupController.show')
  Route.patch('transaction-groups/:id', 'TransactionGroupController.update')
  Route.delete('transaction-groups/:id', 'TransactionGroupController.destroy')
}).prefix('api/v1')

Route.group(() => {
  Route.get('transactions', 'TransactionController.index')
  Route.post('transactions', 'TransactionController.store')
  Route.get('transactions/:id', 'TransactionController.show')
  Route.patch('transactions/:id', 'TransactionController.update')
  Route.delete('transactions/:id', 'TransactionController.destroy')
}).prefix('api/v1')
