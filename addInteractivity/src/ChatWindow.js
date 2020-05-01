import React, { Component } from 'react'
import MessageList from './MessageList'
import InputGroup from './InputGroup'

class ChatWindow extends Component{
    state = {
        message: {
            text: ''
        }
    }

    createMessage = (text) => {
        this.setState(() => ({
            message: {username: this.props.user,text: text}
        }))
    }

    isDisabled = () => {
        return this.state.message.text === '';
    };

    render() {
        return (
            <div className="chat-window">
                <h2>Super Awesome Chat</h2>
                <div className="name sender">{this.props.user}</div>
                <MessageList user={this.props.user} messages={this.props.messages} message={this.state.message}/>
                <InputGroup messages={this.props.messages} message={this.state.message}
                handleChange={(e) => this.createMessage(e.target.value)} isDisabled={this.isDisabled} addMessage={this.props.addMessage}/>
            </div>
        )
    }

};

export default ChatWindow