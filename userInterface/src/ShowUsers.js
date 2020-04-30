import React, { Component } from 'react'
import User from './User'
import ToggleGames from './ToggleGames'

class ShowUsers extends Component {
    render() {
        const handleToggle = (e) => {
            e.target.value === "Hide games" ?
            e.target.value = "Show games" :
            e.target.value = "Hide games"
        }
        return (
            <div className="show-users">
                <User />
                <ToggleGames handleToggle={handleToggle} />
            </div>
        )
    }
}

export default ShowUsers