export default function ContadorDisplay(props) {

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
            width: "50px",
            borderRadius: "25px",
            background: "#222",
            color: "#fff",
            margin: "10px",
            fontSize: "2rem"
        }}>
            {props.val}
        </div>
    )
}