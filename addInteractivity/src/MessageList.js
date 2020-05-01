import React, { Component } from 'react'
import Message from './Message'

class MessageList extends Component {
    render() {
        return (
            <ul className="message-list">
              {this.props.messages.map((message, index) => (
                <Message key={index}
                className={
                  message.username === this.props.user ? 'message sender' : 'message recipient'
                }
                username={message.username}
                text={message.text}/>
              ))}
            </ul>
        )
    }
}

export default MessageList