import { useState, useEffect } from "react"
import { mega } from "../../../function/mega"
import ContadorDisplay from "../../../components/ContadorDisplay"

export default function megasena() {
    const [qtd, setQtd] = useState(6)
    const [numeros, setNumeros] = useState([])

    useEffect(() => {
        setNumeros(mega(qtd))
    }, [])

    function render() {
        return numeros.map(
            numeros => <ContadorDisplay key={numeros} val={numeros} />
        )
    }

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
        }}>
            <h1>Mega Sena</h1>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
            }}>
                {render()}
            </div>
            <div>
                <input type="number" min="6" max="60" value={qtd} onChange={ev => setQtd(ev.target.value)} />
                <button onClick={() => setNumeros(mega(qtd))}>Sorteio</button>
            </div>
        </div>
    )
}