import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/posts.server";
import ListadoGuitarras from "../components/listado-guitarras";
import ListadoPost from "../components/listado-posts";
import stylesGuitarras from "~/styles/guitarras.css";
import stylesPosts from "~/styles/blog.css";

export function links() {
    return [
        {
            rel: "stylesheet",
            href: stylesGuitarras,
        },
        {
            rel: "stylesheet",
            href: stylesPosts,
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
                    guitarras={guitarras}
                />
            </main>

            <section className="contenedor">
                <ListadoPost
                    posts={posts}
                />
            </section>
        </>
    );
}
