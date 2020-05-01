import React from 'react'
import Message from './Message'

const MessageList = (props) => {
    return (
        <ul className="message-list">
            {props.messages.map((message, index) => (
            <Message key={index}
            className={
                message.username === props.user ? 'message sender' : 'message recipient'
            }
            username={message.username}
            text={message.text}/>
            ))}
        </ul>
    )
}

export default MessageList