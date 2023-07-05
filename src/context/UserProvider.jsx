import { useUsers } from "../hooks/useUsers";
import { UserContext } from "./UserContext";

export function UserProvider({children}){
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
    return(
        <>
            <UserContext.Provider value={
                {
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
            }>
                {children}
            </UserContext.Provider>
        </>
    )
}