import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faInstagram , faFacebook , faLinkedin , faGithub  } from '@fortawesome/free-brands-svg-icons'

const FooterBody = styled.div` 
display:flex;
justify-content: space-around;
align-items: center;
width:100vw;
height:20vh;
background: linear-gradient(0deg, rgba(52,50,50,1) 70%, rgba(106,106,106,0) 92%, rgba(0,0,0,0) 100%);

.iconThree:hover ,.iconTwo:hover ,.iconOne:hover , .iconFour:hover {
   opacity:0.5;
   cursor:pointer;
   border-radius: 50%;
   background:grey;
}
`

export const IconsAlign = styled.span` 
display:inline;
`

const FooterBottom = styled.div` 
display:flex;
justify-content: center;
`
 export  const IconStyle = {fontSize:"30px",margin:"10px",color:"white"}

export default function Footer() {
   
   
    return (
        <>
        <FooterBody>
            <div className="leftSide">Contact Me
            </div>
            <div className="Center">
                
                <IconsAlign><FontAwesomeIcon icon={faInstagram} style={IconStyle} className="iconOne"/>
                <FontAwesomeIcon icon={faLinkedin} style={IconStyle} className="iconTwo"/></IconsAlign>
                <IconsAlign><FontAwesomeIcon icon={faFacebook} style={IconStyle} className="iconThree"/>
                <FontAwesomeIcon icon={faGithub} style={IconStyle} className="iconFour"/></IconsAlign>
            </div>
            <div className="RightSide">Contact Me</div>
        </FooterBody>
        <FooterBottom>
            © 2021 by Yoni_B, Inc.
        </FooterBottom>
        </>
    )
}