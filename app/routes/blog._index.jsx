import { useLoaderData } from "@remix-run/react";
import { getPosts } from "../models/posts.server";
import ListadoPost from "../components/listado-posts";

export function meta() {
    return [
        {
            title: "GuitarLA - Nuestro Blog",
            description: 'Guitarras, venta de guitarras, nuestro blog.'
        },
    ];
}

export async function loader() {
    const posts = await getPosts();
    return posts.data;
}

export default function Blog() {
    const posts = useLoaderData();

    return (
        <ListadoPost
            posts={posts}
        />
    )
}
