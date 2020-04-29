import React from 'react'

const Button = (props) =>  {
   return (
        <button disabled={props.disabled}
        onClick={props.onClick}
        value={props.value}></button>
        )

}

export default Button