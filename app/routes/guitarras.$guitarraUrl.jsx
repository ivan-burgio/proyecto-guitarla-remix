import { getGuitarra } from "../models/guitarras.server";
import { useLoaderData } from "@remix-run/react";
import styles from '~/styles/guitarras.css';

export async function loader({request, params}) {
    const { guitarraUrl } = params;
    const guitarra = await getGuitarra(guitarraUrl);

    if(guitarra.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra no encontrada.',
        })
    }

    return guitarra;
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles,
        }
    ]
}

export function meta({ data }) {
    if(!data) {
        return [
            { title: 'GuitarLA - Guitarra no encontrada' },
            { descripcion: 'Guitarras, venta de guitarras, guitarra no encontrada' },
        ];
    }

    return [
        { title: `GuitarLA - ${data.data[0].attributes.nombre}` },
        { descripcion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}` },
    ];
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
