import { useContext, useState } from "react"
import Swal from "sweetalert2"
import { AuthContext } from "../Context/AuthContext"

const initialLoginForm= {
    user: "",
    password: "",
}

export function LoginPage() {
    
    const {handlerLogin} = useContext(AuthContext)
    const [loginForm, setLoginForm] = useState(initialLoginForm)

    const {username, password} = loginForm

    const onInputChange = ({target}) => {
        const {name,value} = target
        setLoginForm({
            ...loginForm,
            [name]:value
        })
    }

    const onFormSubmit = (event) => {
        event.preventDefault()
        //validacion de campos
        if(username === '' || password === ''){
            Swal.fire(
                'Error de validacion',
                'Usuario y Contraseña requeridos',
                'error'
            )
        }
        handlerLogin({username,password}) 

        setLoginForm(initialLoginForm)
    }

    return (
        <>
            <div className="modal" style={{display:"block"}} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Login de Usuarios</h5>
                        </div>
                        <form onSubmit={onFormSubmit}>
                            <div className="modal-body">
                                <input
                                    type="text"
                                    className="form-control my-3 w-75"
                                    placeholder="Usuario"
                                    name="username"
                                    value={username}
                                    onChange={onInputChange}
                                />
                                <input
                                    type="password"
                                    className="form-control my-3 w-75"
                                    placeholder="Contraseña"
                                    name="password"
                                    value={password}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="modal-footer">
                                <button 
                                    type="submit" 
                                    className="btn btn-primary" 
                                    data-bs-dismiss="modal"
                                >
                                    Iniciar Sesión
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}