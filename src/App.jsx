import React , {useState} from 'react'
import styled from 'styled-components'
import Banner from './Components/Features/Banner/Banner'
import './App.css'
import MainContainer from './Components/Page/MainContainer'
import 'semantic-ui-css/semantic.min.css'
import Footer from './Components/Features/Footer/Footer'
import NetflixIntro from './Components/Features/Netflix_Intro/NetflixIntro'
import NetflixWelcome from './Components/Features/Netflix_Intro/NetflixWelcome'
import { UserProvider } from './Components/Features/Context'

const MainBody = styled.div` 
background-color: #111;
  color: white;
`


function App() {
  const [intro,setIntro] = useState(true)
  const [isWelcome,setIsWelcome] = useState(true)
  const [displayWeb,setDisplayWeb] = useState(false)


  setTimeout(()=>{
    setIsWelcome(false)
  },3000)

  setTimeout(()=>{
    setIntro(false)
    setDisplayWeb(true)
  },6000)

  return (
    <MainBody>
      <UserProvider value={setDisplayWeb}>
      {isWelcome && <NetflixIntro/>}
      {intro && <NetflixWelcome/> }
      { displayWeb &&
      <>
      <Banner/>
      <MainContainer/>
      <Footer/>
      </>
      }
      </UserProvider>
    </MainBody>
  );
}

export default App;
