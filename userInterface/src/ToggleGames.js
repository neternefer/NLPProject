import React from 'react'


const ToggleGames = (props) => {
    return (
        <button onClick={props.handleToggle} value="Hide games"></button>
    )
};

export default ToggleGames