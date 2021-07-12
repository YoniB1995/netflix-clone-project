import React from 'react'
import styled from 'styled-components'

const Body = styled.div` 
color:green;
height:100vh;
width:100vw;
display:flex;
justify-content:center;
align-items: center;
flex-direction:column;
`



export default function Devices() {
    return (
        <Body>
            <h1>Devices</h1>
        </Body>
    )
}
