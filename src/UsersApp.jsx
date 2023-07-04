import './Styles.css'
import { UserForm } from './components/UserForm';
import { UsersList } from './components/UsersList';
import { useUsers } from './hooks/useUsers';


function UsersApp() {

  const {
    users,
    userSelected,
    initialUserForm,
    formIsVisible,
    handlerAddUser,
    handlerRemoveUser,
    handlerSelectedUser,
    handlerOpenForm,
    handlerCloseForm,
  } = useUsers()

  //vista de la tabla de ususarios y formulario de usuarios
  return (
    <>
      {
        !formIsVisible ||
        <div className="abrir-modal animacion fadeIn">
          <div className="modal" tabIndex="-1" style={{display: "block"}}>
            <div className="modal-dialog" role='document'>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{userSelected > 0 ? 'Editar' : 'Agregar'} Usuarios</h5>
                </div>
                <div className="modal-body">
                  <UserForm
                    handlerAddUser={handlerAddUser}
                    userSelected={userSelected}
                    initialUserForm={initialUserForm}
                    handlerCloseForm={handlerCloseForm}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      <div className="container-fluid my-4">
        <h1>App de Usuarios</h1>
        <div className='row mt-2'>
          <div className='col-lg'>
            {
              formIsVisible || <button
                className='btn btn-primary my-2'
                onClick={handlerOpenForm}
              >
                Nuevo usuario
              </button>
            }
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
