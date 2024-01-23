import { useState } from "react";
import { getGuitarra } from "../models/guitarras.server";
import { useLoaderData } from "@remix-run/react";

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
    const [ cantidad, setCantidad ] = useState(0);

    const guitarra = useLoaderData();
    const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;

    return (
        <div className="guitarra">
            <img className="imagen" src={imagen.data.attributes.url} alt={`imagen de la guitarra ${nombre}`} />

            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="texto">{descripcion[0].children[0].text}</p>
                <p className="precio">${precio}</p>

                <form className="formulario">
                    <label htmlFor="cantidad">Cantidad</label>

                    <select
                        onChange={ e => setCantidad(+e.target.value)}
                        id="cantidad"
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <input
                        type="submit"
                        value="Agregar al carrito"
                    />
                </form>
            </div>
        </div>
    )
}
