import { UserRow } from "./UserRow";

export function UsersList({users = [], handlerRemoveUser}) { 
    //se recibe por prop el arreglo de usuarios iniciales y se muestra en la tabla
    //se manda por prop el listado de usuarios recibidos para renderizar UserRow  
    
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
                            <UserRow 
                                key={user.id} 
                                id={user.id} 
                                username={user.username} 
                                email={user.email} 
                                handlerRemoveUser={handlerRemoveUser}
                            />        
                        ))
                    }
                
                </tbody>
            </table>
        </>
    )
}