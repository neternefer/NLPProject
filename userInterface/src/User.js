import React, { Component } from 'react'
import ToggleGames from './ToggleGames'

class User extends Component {
    state = {
        hidden: false
    }

    handleToggle = (e) => {
        this.setState((oldState) => ({
            hidden: !oldState.hidden
        }));
    };

    render() {
        console.log(this.props)
        return (
            <div className="user">
                {this.state.hidden === true
                ? (<p>{this.props.username} played /* games</p>)
                : (<p>{this.props.username} played {this.props.games} games</p>)
                }
                <ToggleGames toggle={this.handleToggle}/>
            </div>
        )
    };
};

export default User