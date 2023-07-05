import './Styles.css'
import { LoginPage } from './auth/pages/LoginPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserRoutes } from './routes/UserRoutes';
import { useContext } from 'react';
import { AuthContext } from './auth/Context/AuthContext';



function UsersApp() {

  const {login} = useContext(AuthContext)

  return (
    <Routes>
      {
        login.isAuth
          ? (
            <>
              <Route path='/*' element={<UserRoutes/>} />
            </>
          )
          : <>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/*' element={<Navigate to={'/login'}/>}/>
            </>
          
      }
    </Routes>
  )
}

export default UsersApp;
