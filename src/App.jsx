import React , {useState,useEffect,useRef,useContext} from 'react'
import styled from 'styled-components'
import { UserProvider } from './Components/Features/Context'
import Row from './Components/Features/Row/Row'
import BodyFullPage from './Components/Page/BodyFullPage'
import LoginPage from './Components/Page/LoginPage'


function App() {
  const [showPage,setShowPage] = useState(false)

  return (
    <>
    <UserProvider value={setShowPage}>
    {showPage? <BodyFullPage/> : <LoginPage/>}
    </UserProvider>

    </>
  );
}

export default App;
