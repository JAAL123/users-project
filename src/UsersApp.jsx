import './App.css'
import { UserForm } from './components/UserForm';
import { UsersList } from './components/UsersList';



function UsersApp() {
  //arreglo de usuarios inicial que se pasa a componente UserList
  const initialUsers = [
    {
      id:1,
      username:'pepe',
      password: '12345',
      email: 'pepe@correo.com'
    },
  ]

//vista de la tabla de ususarios y formulario de usuarios

  return (
    <>
      <div className="container my-4">
        <h1>App de ususarios</h1>
        <div className='row mt-2'>
        <div className='col'>
          <UserForm/>
        </div>
        <div className='col'>
          <UsersList users={initialUsers}/>
        </div>
        </div>
      </div>
    </>
  )
}

export default UsersApp;
