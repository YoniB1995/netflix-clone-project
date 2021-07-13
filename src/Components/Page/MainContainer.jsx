import React , {useContext, useState} from 'react'
import SideNavComp from '../Features/SideNav/SideNavComp';
import Container from '../Features/Container/Container';
import UserContext, { UserProvider } from '../Features/Context';


function MainContainer() {

  
  const [IsContainer,setIsContainer ]= useState(true);


  
    return (
        <>
      {/* <UserProvider value={value} /> */}
      <SideNavComp value={setIsContainer}/>
      {IsContainer&& <Container/>}
      {/* <UserProvider/> */}
        </>
    )
}

export default MainContainer
