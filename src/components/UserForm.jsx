import { useState } from "react"


export function UserForm() {

    const [shown, setShown] = useState(false)

    const switchShown = () => {
        setShown(!shown)
    }

    const onInputChange = ({target}) =>{
        console.log(target.value)
    }   
    return (
        <>
            <form className="my-3 border border-1 border-secondary-subtle rounded">
                <div className="row g-3 m-3 align-items-center">
                    <div className="col-auto w-25">
                        <label htmlFor="" className="col-form-label">Usuario: </label>
                    </div>
                    <div className="col-auto w-75 ">
                        <input 
                            name="username" 
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
                            type="text" 
                            className="form-control" 
                            placeholder="Correo"
                            onChange={onInputChange} 
                        />
                    </div>
                </div>
                <div className="row g-3 m-3 align-items-center ">
                    <div className="col-auto w-25">
                        <label htmlFor="" className="col-form-label">Contraseña: </label>
                    </div>
                    <div className="col-auto w-75 input-group" >
                        <input 
                            name="password"                             
                            type={shown ? 'text' : 'password'} 
                            className="form-control" 
                            placeholder="Contraseña"
                            onChange={onInputChange}
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
                <div className="row g-3 m-3" >
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary" >Enviar</button>
                    </div>
                </div>
            </form>
        </>
    )
}