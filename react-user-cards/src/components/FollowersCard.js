import React from 'react'

function FollowersCard (props){
    return(
        <div>
            <img src={props.data.avatar_url}/>
            <h2>{props.data.login}</h2>
            <p>Profile: <a href={props.data.html_url}>{props.data.html_url}</a></p>
        </div>
    )
}

export default FollowersCard