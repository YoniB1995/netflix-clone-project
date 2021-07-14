import React , {useState,useContext} from 'react'
import { UserProvider } from './Context'
import styled from 'styled-components'
import Popup from '../Popup/Popup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram , faFacebook , faLinkedin , faGithub  } from '@fortawesome/free-brands-svg-icons'
import {IconStyle,IconsAlign} from './Footer/Footer'

const BodyHome = styled.div` 
color:black;
position:absolute;
height:10vh;;
width:100vw;
display:flex;
justify-content:center;
align-items: center;
flex-direction:column;
`
export const iconStyle = {fontSize:"40px",marginRight:"5px"}
export const profileStyle ={height:"150px",borderRadius:"30px",position:"relative",left:"35%",boxShadow:"2px 3px 6px #0000006c"}


export default function Home(props) {
    const [buttonPopup,setButtonPopup] = useState(false);
    const profileImg = <img src="images/fixedProfile.jpg" alt="profileImg" style={profileStyle} />
    
    return (
        <BodyHome>
            <button onClick={()=> setButtonPopup(true)}>About Me :)</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}> 
            <h3>About Me</h3> 
            <h1>Yoni Bitew</h1>
            <p>Born and raised in Hadera. Earned a Matriculation Certificate with degrees in Geography and Oral LAW.
Joined the Army in 2014. Joined the "Kfir" Battle Brigade. Became an Officer Commander managing over 120 Soldiers and 20 commanders.
In December 2020 , started a Web Develepor Program to earn a degree as a Fullstack Web Developer</p>
<br /><p>My Website : </p>
                <FontAwesomeIcon icon={faInstagram}  className="iconOne" style={iconStyle}/>
                <FontAwesomeIcon icon={faLinkedin}  className="iconTwo" style={iconStyle}/>
                <FontAwesomeIcon icon={faFacebook}  className="iconThree" style={iconStyle}/>
                <FontAwesomeIcon icon={faGithub}  className="iconFour" style={iconStyle}/>
            {profileImg}
            </Popup>
            
        </BodyHome>
    )
}
