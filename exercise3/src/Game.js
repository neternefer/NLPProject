import React from 'react';

class Game extends React.Component {
    constructor(props) {
        super(props);
        const initialValues = this.randomValues();
        this.state = {
            value1: initialValues[0],
            value2: initialValues[1],
            value3: initialValues[2],
            proposedAnswer: initialValues[3]
        };
    };

    randomValues = () => {
        const values = Array.from({length: 3}, () => Math.floor(Math.random() * 100));
        const answer = Math.floor(Math.random() *3) + values.reduce((total, curr) => total + curr);
        return [...values, answer];
    };
}

export default Game;