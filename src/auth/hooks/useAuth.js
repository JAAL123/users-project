import { useReducer } from "react"
import { loginReducer } from "../reducers/LoginReducer"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined,
  }
export const useAuth = () =>{

    const [login, dispatch] = useReducer(loginReducer, initialLogin)
    const navigate = useNavigate()

    const handlerLogin = ({ username, password }) => {
      //implementacion de login
      if (username === 'admin' && password === '1234') {
        const user = { username: 'admin' }
        dispatch({
          type: 'login',
          payload: user,
        })
        sessionStorage.setItem('login', JSON.stringify({
          isAuth: true,
          user,
        }))
        navigate('/users')
      }
      else {
        Swal.fire(
          'Error de Login',
          'Usuario o Contraseña invalidos',
          'error'
        )
      }
    }
  
    const handlerLogout = () => {
      dispatch({
        type:'logout',      
      })
      sessionStorage.removeItem('login');
    }

    return{
        login,
        handlerLogin,
        handlerLogout,
    }
}