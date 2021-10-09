//js

export default function jsx3() {

    const subtitulo = "Estou no JavaScript";
    const trechoH3 = <h3>{3 * 3}</h3>;

    return (
        <div>
            <h1>Integração com JS</h1>
            <h2>{subtitulo}</h2>
            {trechoH3}
            <h4>{Math.max(13, 39)}</h4>
            <h5>{entre(10, 2, 13)}</h5>
        </div>
    )
}

function entre(valor, min, max) {
    if (valor >= min && valor <= max) {
        return "SIM";
    } else {
        return "NÃO";
    }
}

// usamos apenas um par de chaves "{}" para ler variaveis do javascript dentro jsx
// sempre que eu quiser fazer uma integração entre o JavaScript e jsx posso colocar um par de chave {}
// posso tambem armazenar código jsx em uma constante javaScript
