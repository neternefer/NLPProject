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

    }
}

export default Game;