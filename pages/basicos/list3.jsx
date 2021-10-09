function genetaror(final = 10) {
    const lista = [];

     for (let i = 1; i <= final; i++ ) {
         lista.push(<span>{i},</span>)
     }
     return lista
}

export default function lista() {
    return (
        <div>
            <div>
                {genetaror()}
            </div>
            <div>
                {genetaror(20)}
            </div>
        </div>
    )
}

// exercicio - criando uma lista dinamica integrando javaScript em tsx