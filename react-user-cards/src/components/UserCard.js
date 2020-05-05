import React from 'react'

function UserCard (props){
    return(
        <div>
            <img src={props.data.avatar_url}/>
            <div className='text'>
                <h2>{props.data.name}</h2>
                <h4>{props.data.login}</h4>
                <p>Location: {props.data.location}</p>
                <p>Profile: {props.data.html_url}</p>
                <p>Followers: {props.data.followers}</p>
                <p>Following: {props.data.following}</p>
                <p>Bio: {props.data.bio}</p>
            </div>
        </div>
    )
}

export default UserCard