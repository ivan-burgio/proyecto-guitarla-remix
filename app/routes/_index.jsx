import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/posts.server";
import { getCurso } from "~/models/curso.server";
import ListadoGuitarras from "../components/listado-guitarras";
import ListadoPost from "../components/listado-posts";
import Curso from "../components/curso";
import stylesGuitarras from "~/styles/guitarras.css";
import stylesPosts from "~/styles/blog.css";
import stylesCurso from "~/styles/curso.css";

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
        {
            rel: "stylesheet",
            href: stylesCurso,
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
    const [guitarras, posts, curso] = await Promise.all([
        getGuitarras(),
        getPosts(),
        getCurso()
    ]);

    return {
        guitarras: guitarras.data,
        posts: posts.data,
        curso: curso.data
    };
}

export default function Index() {
    const { guitarras, posts, curso } = useLoaderData();

    return (
        <>
            <main className="contenedor">
                <ListadoGuitarras
                    guitarras={guitarras}
                />
            </main>

            <Curso
                curso={curso.attributes}
            />

            <section className="contenedor">
                <ListadoPost
                    posts={posts}
                />
            </section>
        </>
    );
}
