import { useEffect, useState } from "react"
import Swal from "sweetalert2"

export function UserForm({ handlerAddUser, initialUserForm, userSelected, handlerCloseForm }) {

    //estado para controlar visibilidad de contraseña
    const [shown, setShown] = useState(false)
    //estado para controlar inputs del form
    const [userForm, setUserForm] = useState(initialUserForm)
    //datos desestructurados del arreglo para el form 
    const { id, username, email, password } = userForm

    //useEffect para verificar si se selecciona un usuario
    useEffect(() => {
        setUserForm({
            ...userSelected,
        })
    }, [userSelected])
    //funcion que controla visibilidad de contraseña
    const switchShown = () => {
        setShown(!shown)
    }

    //captura de datos en evento onChange, setea los valores computados de los inputs
    const onInputChange = ({ target }) => {
        const { name, value } = target
        setUserForm({
            ...userForm,
            [name]: value,
        })
    }
    //manejo del submit
    const onFormSubmit = (event) => {
        event.preventDefault()
        if (!username || (!password && id === 0) || !email) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Los campos deben estar completos',
            })
            return
        }
        handlerAddUser(userForm)
        setUserForm(initialUserForm)
    }
    return (
        <>
            <form className="my-3 border border-1 border-secondary-subtle rounded" onSubmit={onFormSubmit}>
                <div className="row g-3 m-3 align-items-center">
                    <div className="col-auto w-25">
                        <label htmlFor="" className="col-form-label">Usuario: </label>
                    </div>
                    <div className="col-auto w-75 ">
                        <input
                            name="username"
                            value={username}
                            type="text"
                            className="form-control"
                            placeholder="Nombre de usuario"
                            onChange={onInputChange}
                        />
                    </div>
                </div>
                <div className="row g-3 m-3 align-items-center">
                    <div className="col-auto w-25">
                        <label htmlFor="" className="col-form-label">Email: </label>
                    </div>
                    <div className="col-auto w-75 ">
                        <input
                            name="email"
                            value={email}
                            type="text"
                            className="form-control"
                            placeholder="Correo"
                            onChange={onInputChange}
                        />
                    </div>
                </div>
                {
                    id > 0 ? ''
                        : <div className="row g-3 m-3 align-items-center ">
                            <div className="col-auto w-25">
                                <label htmlFor="" className="col-form-label ">Contraseña: </label>
                            </div>
                            <div className="col-auto w-75 input-group" >
                                <input
                                    name="password"
                                    value={password}
                                    type={shown ? 'text' : 'password'}
                                    className="form-control"
                                    placeholder="Contraseña"
                                    onChange={onInputChange}
                                />
                                <input
                                    type="hidden"
                                    name="id"
                                    value={id}
                                />
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={switchShown}
                                >
                                    {shown ? 'Ocultar' : 'Mostrar'}
                                </button>
                            </div>
                        </div>
                }
                <div className="row g-3 m-3" >
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary" >
                            {
                                id > 0 ? 'Actualizar'
                                    : 'Crear'
                            }
                        </button>
                    </div>
                    {
                        handlerCloseForm && <div className="col-auto">
                            <button
                                className='btn btn-primary mx-2'
                                type="button"
                                onClick={handlerCloseForm}
                            >
                                Cerrar
                            </button>
                        </div>
                    }
                </div>

            </form>
        </>
    )
}