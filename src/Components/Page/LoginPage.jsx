import React,{useState} from 'react'
import styled from 'styled-components'
import Register from '../Features/Register/Register'

const LoginBody = styled.div` 
background-image:url('images/netflix_first_Background.jpg');
background-size: cover;
background-attachment: fixed;
opacity:0.9;
height:100vh;

`

export default function LoginPage() {
    
    return (
        <LoginBody>
            <Register/>
        </LoginBody>
    )
}

