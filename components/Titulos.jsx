export default function Titulos(props) {
    console.log(props);

    return props.extra ? (
        <>
            <p>{props.primario}</p>
            <p>{props.secundario}</p>
        </>
    ) : (
        <>
            <h1>{props.primario}</h1>
            <h2>{props.secundario}</h2>
        </>
    )
}

// recebendo props via parametro (obj)