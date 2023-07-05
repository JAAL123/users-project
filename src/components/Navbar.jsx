import { NavLink } from "react-router-dom";

export function Navbar({ login, handlerLogout }) {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to={'/users'}>
                        <span className="text">App de Usuarios</span>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink className="nav-link" to={'/users'}>
                                    <span className="text">Usuarios</span>
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to={'/users/register'}>
                                    <span className="text">Registrar Usuarios</span>
                                </NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button
                                className="btn btn-outline-danger"
                                type="button"
                                onClick={handlerLogout}
                            >
                                Cerrar Sesión
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}