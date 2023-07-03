export function UserRow({ id, username, email,handlerRemoveUser, handlerSelectedUser }) {
    //se recibe por prop  el id,nombre de usuario, y correo
    //se recibe por prop la funcion handlerRemoveUser


    //funcion que se ejecuta al darle click en el boton eliminar, recibe por parametro el id del registro,
    //ejecuta la funcion handlerRemoveUser con el id seleccionado
    const onRemoveUser = (id) => {
        handlerRemoveUser(id)
    }
    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <button
                    className="btn btn-warning"
                    type="button"
                    onClick={() => handlerSelectedUser({
                        id,
                        username,
                        email,                        
                    })}
                >
                    Editar
                </button>
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    type="button" 
                    onClick={() => onRemoveUser(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}