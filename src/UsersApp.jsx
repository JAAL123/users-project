import { useReducer } from 'react';
import './App.css'
import { UserForm } from './components/UserForm';
import { UsersList } from './components/UsersList';
import { usersReducer } from './reducers/usersReducer';
  //arreglo de usuarios inicial que se pasa a componente UserList
  const initialUsers = [
    {
      id:1,
      username:'pepe',
      password: '12345',
      email: 'pepe@correo.com'
    },
  ]



function UsersApp() {

  const [users, dispatch] = useReducer(usersReducer, initialUsers)

  const handlerAddUser = (user) => {
   
    dispatch({
      type: 'addUser',
      payload: user,
    })
  }

  const handlerRemoveUser = (id) => {
    dispatch({
      type:'removeUser',
      payload: id, 
    })
  }


//vista de la tabla de ususarios y formulario de usuarios
  return (
    <>
      <div className="container my-4">
        <h1>App de ususarios</h1>
        <div className='row mt-2'>
        <div className='col'>
          <UserForm
            handlerAddUser={handlerAddUser}            
          />
        </div>
        <div className='col'>
          <UsersList 
            users={users}
            handlerRemoveUser={handlerRemoveUser}
          />
        </div>
        </div>
      </div>
    </>
  )
}

export default UsersApp;
