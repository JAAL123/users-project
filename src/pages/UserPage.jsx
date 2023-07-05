import { useContext } from 'react'
import '../Styles.css'
import { USerModalForm } from "../components/UserModalForm"
import { UsersList } from "../components/UsersList"
import { UserContext } from '../context/UserContext'

export function UserPage() {

  const {
    users,
    formIsVisible,
    handlerOpenForm,
   } = useContext(UserContext)

  //vista de la tabla de ususarios y formulario de usuarios
  return (
    <>
      {
        !formIsVisible ||
        <USerModalForm/>
      }
      <div className="container-fluid my-4">
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
                <UsersList/>
            }
          </div>
        </div>
      </div>
    </>
  )
}