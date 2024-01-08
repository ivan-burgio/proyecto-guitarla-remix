import { Link } from '@remix-run/react'

export default function Header() {
    return (
        <header className="header">
            <div className="contenedor barra">
                <div className="logo">

                </div>

                <nav className="navegacion">
                    <Link
                        to="/"
                    >Inicio</Link>
                    
                    <Link
                        to="/nosotros"
                    >Nosotros</Link>

                    <Link
                        to="/tienda"
                    >Tienda</Link>

                    <Link
                        to="/blog"
                    >Blog</Link>
                </nav>
            </div>
        </header>
    )
}
