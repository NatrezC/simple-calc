import React, { Component } from 'react'

class Calculator extends Component {

    state = {
        total: 0,
        num1: 0,
        num2: 0
    }
    
    setNum = (e, num) => {
        console.log(e.target.value)
        this.setState({
            [num]:e.target.value
        })
    }
    getAdd = () => {
        console.log('clicked')
        const grandTotal = parseInt(this.state.num1)+parseInt(this.state.num2)
        this.setState({
            num1: 0,
            num2: 0,
            atotal: grandTotal
        })
    }
    getSub = () => {
        console.log('clicked')
        const grandTotal = parseInt(this.state.num1) - parseInt(this.state.num2)
        this.setState({
            num1: 0,
            num2: 0,
            stotal: grandTotal
        })
    }
    getMult = () => {
        console.log('clicked')
        const grandTotal = parseInt(this.state.num1) * parseInt(this.state.num2)
        this.setState({
            num1: 0,
            num2: 0,
            mtotal: grandTotal
        })
    }
    getDiv = () => {
        console.log('clicked')
        const grandTotal = parseInt(this.state.num1) / parseInt(this.state.num2)
        this.setState({
            num1: 0,
            num2: 0,
            dtotal: grandTotal
        })
    }


    render() {
        return (
            <div className="container">
                <div className="container">
                    <h1>Add with React!</h1>
                    <div className="add">
                        <input type="number"
                            name="num1"
                            placeholder="Enter your first number"
                            value={this.state.num1}
                            onChange={(e) => this.setNum(e, 'num1')}
                        />
                        <span>+</span>
                        <input type="number"
                            name="num2"
                            placeholder="Enter your second number"
                            value={this.state.num2}
                            onChange={(e) => this.setNum(e, 'num2')}
                        />
                        <button onClick={this.getAdd}>=</button>
                        <h3>Addition results go here!</h3>
                        <p>{this.state.atotal}</p>
                    </div>
                </div>
                <div className="container">
                    <h1>Subtract with React!</h1>
                    <div className="subtract">
                        <input type="number"
                            name="num1"
                            placeholder="Enter your first number"
                            value={this.state.num1}
                            onChange={(e) => this.setNum(e, 'num1')}
                        />
                        <span>-</span>
                        <input type="number"
                            name="num2"
                            placeholder="Enter your second number"
                            value={this.state.num2}
                            onChange={(e) => this.setNum(e, 'num2')}
                        />
                        <button onClick={this.getSub}>=</button>
                        <h3>Subtract results go here!</h3>
                        <p>{this.state.stotal}</p>
                    </div>
                </div>
                <div className="container">
                    <h1>Multiply with React!</h1>
                    <div className="multiply">
                        <input type="number"
                            name="num1"
                            placeholder="Enter your first number"
                            value={this.state.num1}
                            onChange={(e) => this.setNum(e, 'num1')}
                        />
                        <span>*</span>
                        <input type="number"
                            name="num2"
                            placeholder="Enter your second number"
                            value={this.state.num2}
                            onChange={(e) => this.setNum(e, 'num2')}
                        />
                        <button onClick={this.getMult}>=</button>
                        <h3>Multiply results go here!</h3>
                        <p>{this.state.mtotal}</p>
                    </div>
                </div>
                <div className="container">
                    <h1>Divide with React!</h1>
                    <div className="divide">
                        <input type="number"
                            name="num1"
                            placeholder="Enter your first number"
                            value={this.state.num1}
                            onChange={(e) => this.setNum(e, 'num1')}
                        />
                        <span>/</span>
                        <input type="number"
                            name="num2"
                            placeholder="Enter your second number"
                            value={this.state.num2}
                            onChange={(e) => this.setNum(e, 'num2')}
                        />
                        <button onClick={this.getDiv}>=</button>
                        <h3>Divide results go here!</h3>
                        <p>{this.state.dtotal}</p>
                    </div>
                </div>
            </div>
            

            

        )
    }

}

export default Calculator
