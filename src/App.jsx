import React from 'react'
import styled from 'styled-components'
import Banner from './Components/Features/Banner/Banner'
import './App.css'
import MainContainer from './Components/Page/MainContainer'
import 'semantic-ui-css/semantic.min.css'
import Footer from './Components/Features/Footer/Footer'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'


const MainBody = styled.div` 
background-color: #111;
  color: white;
`

function App() {

  return (
    <MainBody>
      <Banner/>
      <MainContainer/>
      <Footer/>
    </MainBody>
  );
}

export default App;
