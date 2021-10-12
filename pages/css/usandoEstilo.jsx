import Estilo from "../../components/Estilo";

export default function usandoEstilo() {
    return (
        <div>
            <Estilo numero={3} color="#d20" direita/>
            <Estilo numero={-3} color="#2d2" direita/>
        </div>
    )
}