import { getGuitarras } from '~/models/guitarras.server';

export async function loader() {
    const guitarras = await getGuitarras();
    return guitarras;
}

export default function Tienda() {
    return (
        <div>tienda</div>
    )
}
