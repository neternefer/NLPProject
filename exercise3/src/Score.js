import React from 'react';

function Score = (props) => {
    return (
    <p>Your Score: {this.props.numCorrect}/{this.props.numQuestions}</p>
    )
}

export default Score;