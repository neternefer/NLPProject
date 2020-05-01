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


class App extends Component {
  state = {
    players: []
  }

  newPlayer = (player) => {
    player.gamesPlayed = 0;
    this.setState((oldState) => ({
      players: [...oldState.players, player]//oldState.players.push(player)
    }))
    console.log(this.state.players)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <CreateUser players={this.state.players} newPlayer={this.newPlayer}/>
        <ShowUsers players={this.state.players}/>
      </div>
    );
  }
}

export default App;
