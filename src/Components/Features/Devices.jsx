import React , {useState,useRef} from 'react'
import styled from 'styled-components'
import MoviePopup from '../Popup/MoviePopup';

const Body = styled.div` 
color:green;
height:100vh;
width:100vw;
display:flex;
justify-content:center;
align-items: center;
flex-direction:column;
`
const CheckVideo = styled.button` 

 `

 const ModelBody = styled.div` 
  display: none; 
  position: fixed; 
  z-index: 1;
  left: 30%;
  top: 30%;
  width: 50%; 
  height: 50%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
 `
 const ModelContent = styled.div` 
 background-color: #fefefe;
  margin: 15% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 80%; 
`
const CloseSpan = styled.span` 
 color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  :hover , :focus {
    color: black;
  text-decoration: none;
  cursor: pointer;
  }
 `

export default function Devices() {
    const [buttonPopup,setButtonPopup] = useState(false);
    const [newStyle,setNewStyle] = useState({display:"none"})
 
  
    return (
        <Body>
            {/* <MoviePopup trigger={buttonPopup} setTrigger={setButtonPopup}  > */}
            <CheckVideo  onClick={()=>setNewStyle({display:"block"})}>Open Here</CheckVideo>
              <ModelBody style={newStyle} >
              <ModelContent>
                <CloseSpan onClick={()=> setNewStyle({display:"none"})}>exit</CloseSpan>
                <p>Some text in the modal</p>
              </ModelContent>
              </ModelBody>
            
          {/* </MoviePopup> */}
        </Body>
    )
}
