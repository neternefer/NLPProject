import React from 'react'

class Game extends React.Component {
    state = {
        value1: Math.floor(Math.random() * 100),
        value2: Math.floor(Math.random() * 100),
        value3: Math.floor(Math.random() * 100),
        proposedAnswer: Math.floor(Math.random() * 3) + value1 + value2 + value3
    };

    resetGame = () => {
        this.setState({
            value1: Math.floor(Math.random() * 100),
            value2: Math.floor(Math.random() * 100),
            value3: Math.floor(Math.random() * 100),
            proposedAnswer: Math.floor(Math.random() * 3) + value1 + value2 + value3
        });
    };

    render() {
        return (
            <div className="game">
                <div className="equation">
                    <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
                </div>
                <Button onChoice={this.resetGame}/>
                <Button onChoice={this.resetGame}/>
            </div>
        )
    }
}

export default Game