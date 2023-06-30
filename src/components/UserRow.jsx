export function UserRow({id,username,email}) {
    //se recibe por prop  el id,nombre de usuario, y correo
    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td><button className="btn btn-warning" type="button">Editar</button></td>
            <td><button className="btn btn-danger" type="button">Eliminar</button></td>
        </tr>
    )
}