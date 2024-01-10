export async function loader() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
    const resultado = await respuesta.json();
    return {};
}

export default function Tienda() {
  return (
    <div>tienda</div>
  )
}
