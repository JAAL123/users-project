import { Navigate, Route, Routes, } from "react-router-dom";
import { UserPage } from "../pages/UserPage"
import { Navbar } from "../components/Navbar";
import { RegisterPage } from "../pages/RegisterPage";
import { useUsers } from "../hooks/useUsers";

export function UserRoutes({ login, handlerLogout }) {
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
    return (
        <>
            <Navbar handlerLogout={handlerLogout} login={login} />

            <Routes>
                <Route path="users" element={<UserPage 
                    users={users}
                    userSelected={userSelected}
                    initialUserForm={initialUserForm}
                    formIsVisible={formIsVisible}
                    handlerAddUser={handlerAddUser}
                    handlerRemoveUser={handlerRemoveUser}
                    handlerSelectedUser={handlerSelectedUser}
                    handlerOpenForm={handlerOpenForm}
                    handlerCloseForm={handlerCloseForm}
                />} />
                <Route
                    path="users/register"
                    element={
                        <RegisterPage
                            handlerAddUser={handlerAddUser}
                            initialUserForm={initialUserForm} />
                    }
                />
                <Route path="/" element={<Navigate to="/users" />} />
            </Routes>
        </>
    )
}