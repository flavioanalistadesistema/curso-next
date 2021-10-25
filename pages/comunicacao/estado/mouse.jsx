import { useState } from "react"

export default function Mouse() {
    
    // Modo correto - mais simplificado
    const [x, setX] = useState(0) 

    // prolixa
    const arrayY = useState(0)
    let y = arrayY[0]
    const alterarY = arrayY[1]

    const estilo = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    }
    function quandoMover(e) {
        setX(e.clientX)
        alterarY(e.clientY)
    }
    return (
        <div style={estilo}>
            <div onMouseMove={quandoMover}>
                <div>Eixo X: {x}</div>
                <div>Eixo Y: {y}</div>
            </div>
        </div>
    )
}