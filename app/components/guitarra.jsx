import { Link } from "@remix-run/react";

export default function Guitarra({guitarra}) {
    const { descripcion, imagen, precio, url, nombre } = guitarra;

    return (
        <div className='guitarra'>
            <img src={imagen.data.attributes.formats.medium.url} alt={`Imagen guitarra ${nombre}`} />

            <div className='contenido'>
                <h3>{nombre}</h3>
                <p className='descripcion'>{descripcion[0].children[0].text}</p>
                <p className='precio'>${precio}</p>
            </div>

            <Link className="enlace" to={`/guitarras/${url}`}>Ver Producto</Link>
        </div>
    )
}
