import React from 'react'
import Button from './Button'

class Game extends React.Component {
    constructor(props) {
        super(props);
        const setValues = this.randomValues();
        this.state = {
            value1: setValues[0],
            value2: setValues[1],
            value3: setValues[2],
            proposedAnswer: setValues[3]
        }
    }

    randomValues = () => {
        const values = Array.from({length: 3}, () => Math.floor(Math.random() * 100));
        const answer = Math.floor(Math.random() *3) + values.reduce((total, curr) => total + curr);
        return [...values, answer]
    }

    resetGame = (newValues) => {
        this.setState(() => ({
            value1: newValues[0],
            value2: newValues[1],
            value3: newValues[2],
            proposedAnswer: newValues[3]
        }))
    }

    gameLogic = (event) => {
        const newValues = this.randomValues();
        this.resetGame(newValues);
        const answer = this.clickResult(event.target.value);
        this.props.updateScore(answer);
    }

    clickResult = (clicked) => {
        const { value1, value2, value3, proposedAnswer } = this.state;
        const correct = value1 + value2 + value3;
        return (
            (correct === proposedAnswer && clicked === 'true') ||
            (correct !== proposedAnswer && clicked === 'false')
        )
    }



    render() {
        return (
            <div className="game">
                <h2>Mental Math</h2>
                <div className="equation">
                    <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
                </div>
                <button value="true" onClick={this.gameLogic}>TRUE</button>
                <button value="false" onClick={this.gameLogic}>FALSE</button>
            </div>
        )
    }
}

export default Game