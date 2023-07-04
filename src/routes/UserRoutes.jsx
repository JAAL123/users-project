import { Navigate, Route, Routes, } from "react-router-dom";
import {UserPage} from "../pages/UserPage"
import { Navbar } from "../components/Navbar";
 
export function UserRoutes({login,handlerLogout}){
    return(
        <>
            <Navbar handlerLogout={handlerLogout} login={login}/>

            <Routes>
                <Route path="users" element={<UserPage />}/>
                <Route path="/" element={<Navigate to="/users" />}/>

            </Routes>
        </>
    )
}