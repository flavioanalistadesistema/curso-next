export default function Estilo(props) {
    return (
        <div>
            <h1 style={{
                backgroundColor: props.numero >= 0 ? "#2d2" : "#d22",
                color: props.color,
                textAlign: props.direita ? "right" : "left"}}>
                Texto #1
            </h1>
            <h1 className= {props.numero >= 0 ? "azul" : "vermelho"}>
                Texto #2
            </h1>
        </div>
    )
}

/*
/ aplicando style de forma condicional com o uso de chaves duplas {{}}
*/