import { useReducer } from 'react';
import './Styles.css'
import { LoginPage } from './auth/pages/LoginPage';
import { UserPage } from './pages/UserPage';
import { loginReducer } from './auth/reducers/LoginReducer';
import Swal from 'sweetalert2';

const initialLogin = {
  isAuth: false,
  user: undefined,
}

function UsersApp() {

  const [login, dispatch] = useReducer(loginReducer, initialLogin)
  
  const handlerLogin = ({username, password}) => {
            //implementacion de login
            if(username === 'admin' && password === '1234')
            {
                const user = {username: 'admin'}     
                dispatch({
                  type: 'login',
                  payload: user,
                })      
            }
            else{
                Swal.fire(
                    'Error de Login',
                    'Usuario o Contraseña invalidos',
                    'error'
                )
            }
  }

  return(
    <>
      {
        login.isAuth ? <UserPage/>
        : <LoginPage handlerLogin={handlerLogin}/> 
      }
    </>
  )
}

export default UsersApp;
