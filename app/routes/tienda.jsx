import { useLoaderData } from '@remix-run/react';
import { getGuitarras } from '~/models/guitarras.server';
import Guitarra from '~/components/guitarra';

export async function loader() {
    const guitarras = await getGuitarras();
    return guitarras.data;
}

export default function Tienda() {
    const guitarras = useLoaderData();

    return (
        <main className='contenedor'>
            <h2 className='heading'>Nuestra Coleccion</h2>

            {guitarras?.length && (
                <div className='guitarras-grid'>
                    {guitarras.map(guitarra => (
                        <Guitarra
                            key={guitarra?.id}
                            guitarra={guitarra?.attributes}
                        />
                    ))}
                </div>
            )}
        </main>
    )
}
