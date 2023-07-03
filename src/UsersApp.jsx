import './App.css'
import { UserForm } from './components/UserForm';
import { UsersList } from './components/UsersList';
import { useUsers } from './hooks/useUsers';


function UsersApp() { 

  const {
    users,
    userSelected,
    initialUserForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerSelectedUser,
} = useUsers()

  //vista de la tabla de ususarios y formulario de usuarios
  return (
    <>
      <div className="container-fluid my-4">
        <h1>App de ususarios</h1>
        <div className='row mt-2'>
          <div className='col-lg'>
            <UserForm
              handlerAddUser={handlerAddUser}
              userSelected={userSelected}
              initialUserForm={initialUserForm}
            />
          </div>
          <div className='col-lg'>
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
