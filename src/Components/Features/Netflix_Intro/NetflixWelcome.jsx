import React from 'react'
import styled from 'styled-components'

const NetflixBody = styled.div` 
height:100vh;
width:100vw;
display:flex;
background:black;
justify-content: center;
align-items: center;
`
// const ImageNetflix = styled.img` 
// height:100vh;
// width:100vw;
// `

export default function NetflixWelcome() {
    const NetflixWelcome = <img src="images/netflix_intro_gif.gif" alt="Netflix" />
    return (
        <NetflixBody>
            {NetflixWelcome}
        </NetflixBody>
    )
}
