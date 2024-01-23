import styles from "~/styles/carrito.css";

export function meta() {
    return [
        {
            title: "GuitarLA - Carrito",
            description: "Guitarras, venta de guitarras, carrito de compras.",
        },
    ]
}

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styles,
        },
    ];
}

export default function Carrito() {
    return (
        <main className="contenedor">
            <h1 className="heading">Carrito de Compras</h1>

            <div className="contenido">
                <div className="carrito">
                    <h2>Articulos</h2>
                </div>

                <aside className="resumen">
                    <h3>Resumen del Pedido</h3>
                    <p>Total a pagar: $</p>
                </aside>
            </div>
        </main>
    )
}
