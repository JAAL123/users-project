export function Navbar({ login, handlerLogout }) {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">App de Usuario</a>
                    <div className="row">
                        <div className="col mx-2 my-3">
                            <span className="text-primary text-capitalize fs-5 fw-semibold mx-2">{login.user?.username}</span>
                            <button
                                className="btn btn-outline-danger mx-2"
                                type="btn"
                                onClick={handlerLogout}                                
                            >
                                Cerrar Sesión
                            </button>
                        </div>
                       
                    </div>
                </div>
            </nav>
        </>
    )
}