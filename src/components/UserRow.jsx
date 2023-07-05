import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../context/UserContext"

export function UserRow({ id, username, email }) {
    //se recibe por prop  el id,nombre de usuario, y correo
    //se recibe por prop la funcion handlerRemoveUser

    const {handlerRemoveUser, handlerSelectedUser} = useContext(UserContext)


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
            <td>
                <NavLink 
                    className={'btn btn-secondary btn-sm my-1'}
                    to={'/users/edit/'+ id}
                >
                    Actualizar Ruta
                </NavLink>
            </td>
        </tr>
    )
}