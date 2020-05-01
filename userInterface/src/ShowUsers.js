import React, { Component } from 'react'
import User from './User'


class ShowUsers extends Component {
    render() {
        return (
            <div className="show-users">
                {console.log(this.props)}
                {this.props.players.map((p) => {
                    console.log(p)
                    return <User key={p.username} username={p.username} games={p.gamesPlayed}/>
                })}
            </div>
        )
    }
}

export default ShowUsers