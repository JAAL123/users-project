import { useState } from "react";
import { UserForm } from "../components/UserForm";

export function RegisterPage({ handlerAddUser, initialUserForm }) {
    const [userSelected, isUserSelected] = useState(initialUserForm)
    return (
        <>
            <div className="container my-4">
                <h4>Registro de Usuarios</h4>
                <div className="row">
                    <div className="col">
                        <UserForm
                            userSelected={userSelected}
                            handlerAddUser={handlerAddUser}
                            initialUserForm={initialUserForm}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}