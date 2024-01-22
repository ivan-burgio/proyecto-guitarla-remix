export async function getCurso() {
    const respuesta = await fetch(`${process.env.API_URL}/curso?populate=imagen`);
    const resultado = await respuesta.json();
    return resultado;
}

/* export async function getCurso(url) {
    const respuesta = await fetch(`${process.env.API_URL}/cursos?filters[url]=${url}&populate=imagen`);
    const resultado = await respuesta.json();
    return resultado;
} */