function click1() {
    console.log('Click 01')
}

export default function button() {
    function click2() {
        console.log('Click2');
    }

    function click5(e) {
        console.log(e)
    }
    return (
        <div>
            <button onClick={click1}>Click #01</button>
            <button onClick={click2}>Click #02</button>
            <button onClick={function () {console.log('click3')}}>Click #03</button>
            <button onClick={() => console.log('click4')}>Click #04</button>
            <button onClick={click5}>Click #05</button>
            <button onClick={e => click5(e.altKey)}>Click $5 v2</button>
            <div>
                <input type="text" onChange={e => console.log(e.target.value)}/>
            </div>

        </div>
    )
}