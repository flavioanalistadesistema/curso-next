import { useState } from "react"

export default function formulario() {

    let initialState = "teste"
    const [state, setstate] = useState(initialState)

    function alterarState() {
        setstate(state + " testeNew")
    }

    return (
        <div>
            <input type="text" value={state} onChange={e => setstate(e.target.value)} />
            <button onClick={alterarState}>Alterar</button>
        </div>
    )
}