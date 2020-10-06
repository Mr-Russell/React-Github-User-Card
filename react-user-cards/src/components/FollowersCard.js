import React from 'react'
import styled from 'styled-components'

const FollowersStyle = styled.div`
    background-color: goldenrod;
    border: 5px solid yellow;
    border-radius: 5px;
    padding: 10px;
    margin: 5px 5px 20px 5px;

    h2{
        font-weight: bold;
        font-size: 1.5rem;
    }

    span{
        font-weight: bold;
        border-bottom: 2px solid black;
    }
`

function FollowersCard (props){
    return(
        <FollowersStyle>
            <h2>{props.data.login}</h2>
            <img src={props.data.avatar_url}/>
            <p><span>Profile:</span> <a href={props.data.html_url}>{props.data.html_url}</a></p>
        </FollowersStyle>
    )
}

export default FollowersCard