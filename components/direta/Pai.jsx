import Filho from "./Filho";

export default function Pai(props) {
    
    return (
        <div>
        <h1>Familia {props.familia}</h1>
            <Filho name="Gabriel" familia={props.familia} />
            <Filho name="Anna" familia={props.familia} />
            <Filho name="Rubens" familia={props.familia} />
            <Filho name="Katia" {...props} />
        </div>
    )
}