import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game'
import Score from './Score'

class App extends Component {
  state = {
    numQuestions: 0,
    numCorrect: 0
  }

  updateScore = (answer) => {
    if(answer) {
      this.setState((prevState) => ({
        numCorrect: prevState.numCorrect + 1
      }))
    }
    this.setState((prevState) => ({
      numQuestions: prevState.numQuestions + 1,
    }))
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
          <Game updateScore={this.updateScore}/>

          <Score numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions}/>
      </div>
    );
  }
}

export default App;
