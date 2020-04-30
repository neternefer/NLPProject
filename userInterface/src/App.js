import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateUser from './CreateUser'
import ShowUsers from './ShowUsers'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

const users = [
  {
    firstName: 'Max', lastName: 'Mad', username: 'MM', gamesPlayed: 0, players: ['MM', 'JJ', 'Franca'],
    firstName: 'Jody', lastName: 'James', username: 'JJ', gamesPlayed: 0, players: ['MM', 'JJ', 'Franca'],
    firstName: 'Ciapulek', lastName: 'Janicki', username: 'Franca', gamesPlayed: 0, players: ['MM', 'JJ', 'Franca']
  }
]

class App extends Component {
  state = {
    players: []
  }

  newPlayer = (player) => {
    thihs.gamesPlayed = 0;
    this.setState((oldState) => ({
      players: [...oldState.players, player]
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <CreateUser players={this.state.players} onNewPlayer={this.newPlayer}/>
        <ShowUsers players={this.state.players}/>
      </div>
    );
  }
}

export default App;
