export function LoginPage() {

    return (
        <>
            <div className="modal" style={{display:"block"}} tabindex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Login de Usuarios</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form>
                            <div className="modal-body">
                                <input
                                    type="text"
                                    className="form-control my-3 w-75"
                                    placeholder="Usuario"
                                    name="user"
                                />
                                <input
                                    type="password"
                                    className="form-control my-3 w-75"
                                    placeholder="Contraseña"
                                    name="password"
                                />
                            </div>
                            <div className="modal-footer">
                                <button 
                                    type="submit" 
                                    className="btn btn-primary" 
                                    data-bs-dismiss="modal"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}