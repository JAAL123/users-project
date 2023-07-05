import { useContext } from "react";
import { UserRow } from "./UserRow";
import { UserContext } from "../context/UserContext";

export function UsersList() { 

    const {users = []} = useContext(UserContext)
    //se recibe por prop el arreglo de usuarios iniciales y se muestra en la tabla
    //se manda por prop el listado de usuarios recibidos para renderizar UserRow  

    //se recibe por prop la funcion handlerRemoveUser la cual se pasa hacia el componente
    //UserRow
    
    return (
        <>           
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Usuario</th>
                        <th>Correo</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                        <th>Editar por ruta</th>
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
                            />        
                        ))
                    }
                
                </tbody>
            </table>
        </>
    )
}