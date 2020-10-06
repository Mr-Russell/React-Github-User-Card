import React from 'react'
import styled from 'styled-components'

const CardStyle =styled.div`
    box-sizing: border-box;
    width: 650px;
    display: flex;
    justify-content: space-between;
    border: 5px solid dodgerblue;
    border-radius: 5px;
    padding: 13px;
    margin:10px;
    background-color: navy;

        h4, p{
            color: white;
        }

        h4 {
            font-size: 1.7rem;
        }

        img{
            margin: 10px;
            height: 275px;
            width: auto;
        }

        .text{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;

            span{
                font-weight: bold;
                border-bottom: 2px solid white;
            }

            a{
                color: aqua;
            }
        }
`

function MyCard (props){
    return(
        <CardStyle>
            <img src={props.data.avatar_url}/>
            <div className='text'>
                <h4>{props.data.login}</h4>
                <p><span>Profile:</span> <a href={props.data.html_url}>{props.data.html_url}</a></p>
                <p><span>Followers:</span> {props.data.followers}</p>
                <p><span>Following:</span> {props.data.following}</p>
                <p><span>Repositories:</span> {props.data.public_repos}</p>
            </div>
        </CardStyle>
    )
}

export default MyCard