import { useReducer, useState } from "react"
import { usersReducer } from "../reducers/usersReducer"
import Swal from "sweetalert2"
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

export const useUsers = () => {
  //variables para el useReducer
  const [users, dispatch] = useReducer(usersReducer, initialUsers)
  //estado para manejar usuarios seleccionados
  const [userSelected, setUserSelected] = useState(initialUserForm)
  //estado para visibilidad del form
  const [formIsVisible, setFormIsVisible] = useState(false)

  //funcion que se manda al reducer y recibe como parametro el objeto usuario
  const handlerAddUser = (user) => {
    dispatch({
      type: (user.id === 0) ? 'addUser' : 'updateUser' ,
      payload: user,
    })
    Swal.fire(
      (user.id === 0) ? 'Usuario Creado' : 'Usuario Actualizado',
      (user.id === 0) ? 'EL usuario a sido creado con exito' : 'EL usuario a sido actualizado con exito',
      'success'
    )
    setFormIsVisible(false)
    setUserSelected(initialUserForm)
  }

  //funcion que se manda al reducer y recibe como parametro un id
  const handlerRemoveUser = (id) => {

    Swal.fire({
      title: '¿Deseas eliminar este Usuario?',
      text: "No se podra recuperar este usuario",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText:'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: 'removeUser',
          payload: id,
        })
        Swal.fire(
          'Usuario Eliminado',
          'El usuario ha sido eliminado',
          'success'
        )
      }
    })
  }

  //funcion para selecionar un usuario y recuperar los datos para hacer un update
  const handlerSelectedUser = (user) => {
    setFormIsVisible(true)
    setUserSelected({ ...user })
  }

  //funcion para abrir form
  const handlerOpenForm = () =>{
    setFormIsVisible(true)
  }
  //funcion para cerrar form
  const handlerCloseForm = () => {
    setFormIsVisible(false)
    setUserSelected(initialUserForm)
  }


  return {
    users,
    userSelected,
    initialUserForm,
    formIsVisible,

    handlerAddUser,
    handlerRemoveUser,
    handlerSelectedUser,
    handlerOpenForm,
    handlerCloseForm,
  }
}