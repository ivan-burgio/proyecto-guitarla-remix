import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
    return [
        {
            title: "GuitarLA - Sobre Nosotros",
            description: "Venta de gruitarras, blog de música.",
        },
    ];
}

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styles,
        },
        {
            rel: "preload",
            href: imagen,
            as: "image",
        },
    ];
}

export default function Nosotros() {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>

            <div className="contenido">
                <img src={imagen} alt="imagen sobre nosotros" />

                <div>
                    <p>
                        Ut consectetur porttitor velit, eu consequat nibh varius
                        et. Morbi suscipit ullamcorper consectetur. Maecenas
                        auctor turpis pretium lacus rutrum efficitur. Morbi a
                        purus semper, suscipit lectus in, dictum purus. Aenean
                        non erat eu justo eleifend tincidunt. Sed lobortis
                        consequat nulla, quis facilisis lectus cursus nec. Nam
                        orci est, gravida nec maximus at, finibus vitae mauris.
                    </p>
                    <p>
                        Vestibulum placerat iaculis ante volutpat sodales. Donec
                        tristique varius dapibus. Donec dignissim dictum
                        finibus. Quisque dignissim, est non consectetur egestas,
                        orci odio rhoncus dui, a mollis mi nisi non nibh.
                        Praesent at dolor fermentum, bibendum neque aliquam,
                        pellentesque arcu. Etiam sit amet aliquet dolor,
                        bibendum dignissim lacus. Mauris aliquet dolor convallis
                        dignissim rhoncus. Suspendisse ultricies, purus eu
                        pellentesque tincidunt, augue dui dictum turpis, at
                        bibendum risus elit nec velit.
                    </p>
                </div>
            </div>
        </main>
    );
}
