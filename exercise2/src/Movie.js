import React, { Component } from 'react'


class Movie extends Component {
    render() {
        const {movieData, users, likedUsers } = this.props;

        return (
            <li key={movieData.id}>
                <h2>{movieData.name}</h2>
                <p>Liked by: </p>
                {!likedUsers || likedUsers.length === 0 ?
                    (<p>Noone has liked this movie so far</p>) :
                    (<ul>
                        {likedUsers.map(id => {
                            return(<li key={id}>{users[id].name}</li>);
                        })}
                    </ul>)
                }
            </li>
        )
    }
}

export default Movie