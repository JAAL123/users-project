import { UserForm } from "./UserForm";

export function USerModalForm({handlerAddUser, userSelected,initialUserForm,handlerCloseForm}) {
    return (
        <>
            <div className="abrir-modal animacion fadeIn">
                <div className="modal" tabIndex="-1" style={{ display: "block" }}>
                    <div className="modal-dialog" role='document'>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{userSelected > 0 ? 'Editar' : 'Agregar'} Usuarios</h5>
                            </div>
                            <div className="modal-body">
                                <UserForm
                                    handlerAddUser={handlerAddUser}
                                    userSelected={userSelected}
                                    initialUserForm={initialUserForm}
                                    handlerCloseForm={handlerCloseForm}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}