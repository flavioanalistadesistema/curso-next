import { useState } from "react"
import ContadorDisplay from "../../../components/ContadorDisplay"

export default function Contador() {
    const [val, setstate] = useState(0)

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>Contador</h1>
            <ContadorDisplay val={val} />
            <div>
                <button onClick={() => setstate(val - 1)}>-</button>
                <button onClick={() => setstate(val + 1)}>+</button>
            </div>
        </div>
    )
}