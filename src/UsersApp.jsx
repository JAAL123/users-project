import { useReducer, useState } from 'react';
import './App.css'
import { UserForm } from './components/UserForm';
import { UsersList } from './components/UsersList';
import { usersReducer } from './reducers/usersReducer';
//arreglo de usuarios inicial que se pasa a componente UserList
const initialUsers = [
  {
    id: 1,
    username: 'pepe',
    password: '12345',
    email: 'pepe@correo.com'
  },
]
const initialUserForm = {
  id: 0,
  username: '',
  password: '',
  email: '',
}



function UsersApp() {

  const [users, dispatch] = useReducer(usersReducer, initialUsers)
  //estado para manejar usuarios seleccionados
  const [userSelected, setUserSelected] = useState(initialUserForm)


  //funcion que se manda al reducer y recibe como parametro el objeto usuario
  const handlerAddUser = (user) => {
    let type;
    if(user.id === 0 ){
      type = 'addUser'
    }else{
      type= 'updateUser'
    }
    dispatch({
      type,
      payload: user,
    })
  }

  //funcion que se manda al reducer y recibe como parametro un id
  const handlerRemoveUser = (id) => {
    dispatch({
      type: 'removeUser',
      payload: id,
    })
  }

  //funcion para selecionar un usuario y recuperar los datos para hacer un update
  const handlerSelectedUser = (user) => {
    setUserSelected({...user})    
  }


  //vista de la tabla de ususarios y formulario de usuarios
  return (
    <>
      <div className="container-fluid my-4">
        <h1>App de ususarios</h1>
        <div className='row mt-2'>
          <div className='col'>
            <UserForm
              handlerAddUser={handlerAddUser}
              userSelected={userSelected}
              initialUserForm={initialUserForm}
            />
          </div>
          <div className='col'>
            {
              users.length === 0 ?
                <div className='alert alert-warning my-3 text-center'>No hay usuarios en el sistema</div>
                :
                <UsersList
                  users={users}
                  handlerRemoveUser={handlerRemoveUser}
                  handlerSelectedUser={handlerSelectedUser}
                />
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default UsersApp;
