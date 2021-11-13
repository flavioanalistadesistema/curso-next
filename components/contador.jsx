import { Component } from "react"

export default class Contador extends Component {

    state = {
        val: this.props.val ?? 0,
        pass: this.props.pass ?? 1
    }

    inc = () => {
        this.setState({
            val: this.state.val + this.state.pass
        })
    }

    desc = () => {
        this.setState({
            val: this.state.val - this.state.pass
        })
    }

    exchangeValue = (ev) => {
        this.setState({
            pass: +ev.target.value
        })
    }

    renderForm() {
        return (
            <>
                <input type="number"
                    min={1}
                    max={1000}
                    value={this.state.pass}
                    onChange={this.exchangeValue}
                />
                <button onClick={this.inc}>+</button>
                <button onClick={this.desc}>-</button>
            </>
        )
    }

    render() {
        return (
            <div>
                <h1>Contador usando CLASS</h1>
                <h2>{this.state.val}</h2>
                {this.renderForm()}
            </div>
        )
    }
}