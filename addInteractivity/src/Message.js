import React from 'react'

const Message = (props) =>  {
    return (
        <li
        key={props.key}
        className={props.className}
        >
        <p>{`${props.username}: ${props.text}`}</p>
        </li>
    )
}

export default Message