import React from 'react'

function MyCard (props){
    return(
        <div>
            <img src={props.data.avatar_url}/>
            <div className='text'>
                <h4>{props.data.login}</h4>
                <p>Profile: <a href={props.data.html_url}>{props.data.html_url}</a></p>
                <p>Followers: {props.data.followers}</p>
                <p>Following: {props.data.following}</p>
                <p>Repositories: {props.data.public_repos}</p>
            </div>
        </div>
    )
}

export default MyCard