export default function Filho(props) {
    return (
        <div>
            <button onClick={props.falar}>Falar com PAI #01</button>
            <button onClick={() => props.falar('Passei no ENEM!!')}>Falar com PAI #02</button>
        </div>
    )
}