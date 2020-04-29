import React from 'react';

class Game extends React.Component {
    constructor(props) {
        super(props);
        const initialValues = this.randomValues();
        this.state = {
            value1: initialValues[0],
            value2: initialValues[1],
            value3: initialValues[2],
            propsedAnswer: initialValues[3]
        };
    };

}

export default Game;