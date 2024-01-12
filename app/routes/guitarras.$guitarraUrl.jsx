import { getGuitarra } from "../models/guitarras.server";
import { useLoaderData } from "@remix-run/react";

export async function loader({request, params}) {
    const { guitarraUrl } = params;
    const guitarra = await getGuitarra(guitarraUrl);

    return guitarra;
}

export default function Guitarra() {
    const guitarra = useLoaderData();

    return (
        <div>
            {guitarra.data[0].attributes.nombre}
        </div>
    )
}
