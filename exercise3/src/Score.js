import React from 'react'

class Score extends React.Component {
    render() {
        return (
            <p className="text">
                Your Score: {this.props.numCorrect}/{this.props.numQuestions}
            </p>
        )
    }
}

export default Score

