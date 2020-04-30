import React, { Component } from 'react'
import AddUser from './AddUser';
import UserInputs from './UserInputs'

class CreateUser extends Component {
    state = {
        player: {
            firstName: '',
            lastName: '',
            username: '',
            gamesPlayed: 0,
        },
        players: []
    };

    addNewPlayer = (username) => {
        if(!this.state.players.includes(username)) {
            this.setState((oldState) => ({
                players: oldState.players.push(username)
            }))
        }
    }

    handleInput = (e) => {

    }

    checkInput = (e) => {
        if(!e.target.value) {
            alert('This field can\'t be empty)
        }
    }


    render() {
        return (
            <div className="create-user">
                <form className="user-input">
                    {Object.keys(this.state.player).map((k, id) => {
                        <input type="text" id={id}
                        value={this.state.player[k]}
                        onChange={this.handleInput}>Enter your {k}</input>
                    })}
                    <AddUser fields={this.state.player} click={this.addNewPlayer}/>
                </form>
            </div>

        )
    }
}

export default CreateUser