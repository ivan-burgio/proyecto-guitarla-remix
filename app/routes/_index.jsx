import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/posts.server";
import ListadoGuitarras from "../components/listado-guitarras";
import stylesGuitarras from "~/styles/guitarras.css";

export function links() {
    return [
        {
            rel: "stylesheet",
            href: stylesGuitarras,
        },
    ];
}

export function meta() {
    return [
        {
            title: "GuitarLA - Nuestro Blog",
            description: "Guitarras, venta de guitarras, nuestro blog.",
        },
    ];
}

export async function loader() {
    const [guitarras, posts] = await Promise.all([getGuitarras(), getPosts()]);

    return {
        guitarras: guitarras.data,
        posts: posts.data
    };
}

export default function Index() {
    const { guitarras, posts } = useLoaderData();

    return (
        <>
            <main className="contenedor">
                <ListadoGuitarras
                guitarras={guitarras}/>
            </main>
        </>
    );
}
