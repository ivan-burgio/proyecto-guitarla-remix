import { getGuitarra } from "../models/guitarras.server";
import { useLoaderData } from "@remix-run/react";
import styles from '~/styles/guitarras.css';

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles,
        }
    ]
}

export async function loader({params}) {
    const { guitarraUrl } = params;
    const guitarra = await getGuitarra(guitarraUrl);

    return guitarra;
}

export default function Guitarra() {
    const guitarra = useLoaderData();
    const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;

    return (
        <main className="contenedor guitarra">
            <img className="imagen" src={imagen.data.attributes.url} alt={`imagen de la guitarra ${nombre}`} />

            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="texto">{descripcion[0].children[0].text}</p>
                <p className="precio">{precio}</p>
            </div>
        </main>
    )
}
