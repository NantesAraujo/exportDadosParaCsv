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
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const SpreadSheet = use('SpreadSheet')
const User = use('App/Models/User')

Route.on('/').render('welcome')

/*Users*/
Route.get('/users', 'UserController.index')
Route.post('/users', 'UserController.create')

Route.get('/users/export/:format', async ({ response, params }) => {
    const ss = new SpreadSheet(response, params.format)
    
/*    const users =  [
        {
            'id': 1,
            'first_name': 'Carlos',
            'last_name': 'Souza'
        }
    ]*/
                            
    //const users =  [{"id":1,"username":"carlos","email":"carlos@gmail.com","password":"123","created_at":null,"updated_at":null},{"id":2,"username":"ramos","email":"ramos@gmail.com","password":"123","created_at":null,"updated_at":null}]
    const users2 = await User.all()
    const users = users2.rows
    //console.log(users2.rows)
    const data = []
    
    data.push([
      'id' + ';' +
      'username' + ';' +
      'email' + ';' +
      'password' + ';' +
      'created_at' + ';' +
      'updated_at' + ';'
    ])

    //const dados = JSON.stringify(users)
    //console.log(dados)
  
    users.forEach(user => {
      data.push([
        user.id + ';' +
        user.username + ';' +
        user.email + ';' +
        user.password + ';' +
        user.created_at + ';' +
        user.updated_at + ';'
      ])
    })
  
    ss.addSheet('Users', data)
    ss.download('users-export')
  })