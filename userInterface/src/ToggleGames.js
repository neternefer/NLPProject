import React from 'react'


const ToggleGames = (props) => {
    return (
        <div className="show-games">
        {props.hide
        ? (<button onClick={props.toggle}>Show Games</button>)
        : (<button onClick={props.toggle}>Hide Games</button>)
        }
        </div>
    )
};

export default ToggleGames