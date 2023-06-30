export function UserRow({id,username,email}) {
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