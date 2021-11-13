import { Component } from "react";
import Contador from "../../components/contador";

export default class ContadorPage extends Component {

    render() {
        return (
            <Contador val={50} passo={10} />
        )
    }
}