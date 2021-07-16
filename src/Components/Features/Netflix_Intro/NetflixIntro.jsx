import React from 'react'
import styled from 'styled-components'

const LoaderBody = styled.div` 
height:100vh;
width:100vw;
display:flex;
background:black;
justify-content: center;
align-items: center;
`

export default function NetflixIntro() {
    return (
        <LoaderBody>
            <img src="images/netflix_loader_gif.gif" alt="netflix"  className="animate__animated animate__slideInDown"></img>
        </LoaderBody>
    )
}
