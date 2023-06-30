import { UserRow } from "./UserRow";

export function UsersList({users = []}) {    
    
    return (
        <>           
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
                        users.map(user => (
                            <UserRow key={user.id} id={user.id} username={user.username} email={user.email}/>        
                        ))
                    }
                
                </tbody>
            </table>
        </>
    )
}