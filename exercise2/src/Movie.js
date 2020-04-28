import React, { Component } from 'react'


class Movie extends Component {
    render() {
        const { movie, profiles, users, likedMovies } = this.props;

        return (
            <div>
                <h2>{movie.name}</h2>
                <p>Liked by: </p>
                <ul>
                    {likedMovies.includes(movie.id.toString()) ?
                        profiles.map(profile => {
                            if(profile.favoriteMovieID === movie.id.toString()){
                                const user = profile.userID
                                return (<li key={movie.id}>{users[user].name}</li>)
                            }
                        }) : <li key={movie.id}>Noone has liked this movie so far</li>
                    }
                </ul>
            </div>
        )
    }
}

export default Movie