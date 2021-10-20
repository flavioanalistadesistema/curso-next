export default function Render01() {

    const aprovados = [
        'Flávio',
        'Luciana',
        'Gabriel',
        'Anna'
    ];

    // ** resolvendo com FOR
    // function ListaAprovados() {
    //     const itens = [];

    //     for (let index = 0; index < aprovados.length; index++) {
    //         itens.push(<li key={index}>{aprovados[index]}</li>) 
            
    //     }
    //      return itens
    // }


    // ** resolvendo com MAP
    function ListaAprovados() {
        return aprovados.map((name, i) => <li key={i}>{name}</li>)
    }

    return (
        <ul>
            {ListaAprovados()}
        </ul>
    )
}