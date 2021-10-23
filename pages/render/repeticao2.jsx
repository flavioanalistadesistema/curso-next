import listProduct from "../../data/listProduct"

export default function repeticao2() {
    const border = {border: "1px solid #000"}

    function renderizarProduct() {
        return listProduct.map(produto => {
            return (
                <tr key={produto.id}>
                    <td style={border}>{produto.id}</td>
                    <td style={border}>{produto.name}</td>
                    <td style={border}>{produto.price}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table style={border}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarProduct()}
                </tbody>
            </table>
        </div>
    )
}