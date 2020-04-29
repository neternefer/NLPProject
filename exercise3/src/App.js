import React from 'react';
import Game from './Game';
import Score from './Score';

class App extends React.Component {
  state = {
    numCorrect = 0,
    numQuestions = 0
  };

  inputHandle = (userAnswer) => {
    if(userAnswer) {
      this.setState((currState) => ({
        numCorrect : currState.numCorrect + 1
      }));
    }
    this.setState((currState) => ({
      numQuestions: currState.numQuestions + 1
    }));
  };

  render() {
    return (
      <div className="dashboard">
        <h2>Mental Math</h2>
        <Game inputHandle={this.inputHandle} />
        <Score numCorrect={this.numCorrect} numQuestions={this.numQuestions} />
      </div>
    )
  }
};

export default App;