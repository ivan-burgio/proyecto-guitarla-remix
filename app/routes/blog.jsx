import { useLoaderData } from "@remix-run/react";
import { getPosts } from "../models/post.server";
import Post from "../components/post";
import styles from '~/styles/blog.css';

export function links() {
    return [
        {
            rel: "stylesheet", 
            href: styles, 
        }
    ];
}

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
        <main className="contenedor">
            <h2 className="heading">Blog</h2>

            <div className="blog">
                {posts.map(post => (
                    <Post 
                        key={post.id}
                        post={post.attributes}
                    />
                ))}
            </div>
        </main>
    )
}
