export function UserForm() {
    return (
        <>
            <form className="my-3 border border-1 border-secondary-subtle rounded">
                <div className="row g-3 m-3 align-items-center">
                    <div className="col-auto w-25">
                        <label htmlFor="" className="col-form-label">Usuario: </label>
                    </div>
                    <div className="col-auto w-75 ">
                        <input name="username" type="text" className="form-control" placeholder="Nombre de usuario"/>
                    </div>
                </div>
                <div className="row g-3 m-3 align-items-center">
                    <div className="col-auto w-25">
                        <label htmlFor="" className="col-form-label">Email: </label>
                    </div>
                    <div className="col-auto w-75 ">
                        <input name="email" type="text" className="form-control" placeholder="Correo" />
                    </div>
                </div>
                <div className="row g-3 m-3 align-items-center ">
                    <div className="col-auto w-25">
                        <label htmlFor="" className="col-form-label">Contraseña: </label>
                    </div>
                    <div className="col-auto w-75 input-group" >
                        <input name="password" type="Password" className="form-control" placeholder="Contraseña"/>
                        <button className="btn btn-outline-secondary" type="button">Mostrar</button>
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