export function UserRow({id,username,email,handlerRemoveUser}) {
    //se recibe por prop  el id,nombre de usuario, y correo
    const onRemoveUser = (id) => {
        handlerRemoveUser(id)
    }
    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td><button className="btn btn-warning" type="button">Editar</button></td>
            <td><button className="btn btn-danger" type="button" onClick={() => onRemoveUser(id)}>Eliminar</button></td>
        </tr>
    )
}