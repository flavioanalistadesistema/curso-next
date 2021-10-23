export default function SomentePar(props) {
    
    const numerPar = props.numbers % 2 === 0;

    return (
        <div>
            {numerPar ? 
                <span>{props.numbers}</span> :
                null
            } 
        </div>
    )

    // return numerPar ? <h1>{props.numbers}</h1> : null
    
    // if (props.numbers % 2 === 0) {
    //     return <h1>{props.numbers}</h1>
    // }else {
    //     return null
    // }
}