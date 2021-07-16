import React,{useState,useContext} from 'react'
import UserContext from '../Context'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components'


const PageBody = styled.div` 
display:flex;
justify-content: center;
align-items: center;
height:100vh;
width:100vw;

`



function Register(){ 
  
  const loader = <img src="./images/loaderImg.gif" alt="loaderimg" height="150px" />
  const style={color:"white",background:"linear-gradient(270deg, rgba(22,22,22,1) 23%, rgba(226,18,18,0.9444152661064426) 48%)"
,width:"30%",padding:"20px",border:"2px solid black",borderRadius:"25px",opacity:0.9}


  const [load,setLoad] = useState(loader);
  const [useStyle,setUseStyle] = useState({display:"none"})
  const setShowPage = useContext(UserContext)

    setTimeout(()=>{
      setLoad("");
      setUseStyle(style);
    },2000)
  

  

    return(
      <PageBody >
        {load}
  <Form style={useStyle}>
    <h1 style={{textAlign:"center" , color:"black"}}>Register</h1>
    <Form.Field >
      <label>Full Name</label>
      <input placeholder='Full Name' required />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' type="password" required/>
    </Form.Field>
    <Form.Field>
      <label>Confirm Password</label>
      <input placeholder='Confirm Password' type="password" required />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' type="email" required/>
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions'/>
    </Form.Field>
    <Form.Field>
      <Checkbox label='Send me Updates about the new Movies.' />
    </Form.Field>
    <Button type='submit' onClick={()=>setShowPage(true)} >Submit</Button>
  </Form>
  </PageBody>
    )
}

export default Register