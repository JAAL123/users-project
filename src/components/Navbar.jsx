export function Navbar({ login, handlerLogout }) {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">App de Usuario</a>
                    <div className="row">
                        <div className="col mx-2 my-3">
                            <span className="text-primary text-capitalize fs-5 fw-semibold">{login.user?.username}</span>
                        </div>
                        <div className="col mx-2 ">
                            <button
                                className="btn btn-outline-danger"
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