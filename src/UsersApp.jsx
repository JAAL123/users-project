import './Styles.css'
import { LoginPage } from './auth/pages/LoginPage';
import { UserPage } from './pages/UserPage';
import { Navbar } from './components/Navbar';
import { useAuth } from './auth/hooks/useAuth';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserRoutes } from './routes/UserRoutes';



function UsersApp() {

  const { login, handlerLogin, handlerLogout } = useAuth()

  return (
    <Routes>
      {
        login.isAuth
          ? (
            <>
              <Route path='/*' element={<UserRoutes login={login} handlerLogout={handlerLogout}/>} />
            </>
          )
          : <>
              <Route path='/login' element={<LoginPage handlerLogin={handlerLogin} />}/>
              <Route path='/*' element={<Navigate to={'/login'}/>}/>
            </>
          
      }
    </Routes>
  )
}

export default UsersApp;
