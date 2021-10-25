import Filho from "./Filho";

export default function Pai() {

    function aviso(e) {
        console.log(e);
    }

    return (
        <Filho falar={aviso} />
    )
}