import React, { Component } from 'react'
import ToggleGames from './ToggleGames'

class User extends Component {
    state = {
        hidden: false
    }

    handleToggle = (e) => {
        if(e.target.value === "Hide games") {
            e.target.value = "Show games"
            this.setState(() => ({
                hidden: true
            }))
        } else {
            e.target.value = "Hide games"
            this.setState(() => ({
                hidden: false
            }))
        }
    };

    render() {
        console.log(this.props)
        return (
            <div className="user">
                {this.state.hidden === true
                ? <p>{this.props.username} played /* games</p>
                : <p>{this.props.username} played {this.props.games} games</p>
                }
                <ToggleGames value="Hide games" onClick={this.handleToggle}/>
            </div>
        )
    };
};

export default User