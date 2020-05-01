import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/


class App extends Component {
  state= {
    messages: []
  }

  users = [{ username: 'Amy' }, { username: 'John' }]

  addMessage = (message) => {
    this.setState((oldState) => ({
        messages: [...oldState.messages, message]
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <ChatWindow addMessage={this.addMessage} user={this.users[0].username} messages={this.state.messages}/>
          <ChatWindow addMessage={this.addMessage} user={this.users[1].username} messages={this.state.messages}/>
        </div>
      </div>
    );
  }
}

export default App;
