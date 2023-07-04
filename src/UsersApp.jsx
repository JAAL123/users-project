import './Styles.css'
import { LoginPage } from './auth/pages/LoginPage';
import { UserPage } from './pages/UserPage';
import { Navbar } from './components/Navbar';
import { useAuth } from './auth/hooks/useAuth';



function UsersApp() {

const {login, handlerLogin, handlerLogout} = useAuth()

  return (
    <>
      {
        login.isAuth ? (
          <>
            <Navbar handlerLogout={handlerLogout} login={login}/>
            <UserPage />
          </>
        )
          : <LoginPage handlerLogin={handlerLogin} />
      }
    </>
  )
}

export default UsersApp;
