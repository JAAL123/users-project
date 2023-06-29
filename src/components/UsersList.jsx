export function UsersList({users = []}) {    
    
    return (
        <>
            {users.id}
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Usuario</th>
                        <th>Correo</th>
                        <th>Eliminar</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map( user => {
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button className="btn btn-warning" type="button">Editar</button></td>
                                <td><button className="btn btn-danger" type="button"></button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}