import React , {useState,useEffect,useRef} from 'react'
import styled from 'styled-components'
import Banner from './Components/Features/Banner/Banner'
import './App.css'
import MainContainer from './Components/Page/MainContainer'
import 'semantic-ui-css/semantic.min.css'
import Footer from './Components/Features/Footer/Footer'
import NetflixIntro from './Components/Features/Netflix_Intro/NetflixIntro'
import NetflixWelcome from './Components/Features/Netflix_Intro/NetflixWelcome'
import { UserProvider } from './Components/Features/Context'
import {requests,baseURL,moviesTrending} from './apiRequests'
import Row from './Components/Features/Row/Row'


const MainBody = styled.div` 
background-color: #111;
  color: white;
`


function App() {
  const [intro,setIntro] = useState(true);
  const [isWelcome,setIsWelcome] = useState(true);
  const [displayWeb,setDisplayWeb] = useState(false);
  const [simulateTrue,setSimulateTrue] = useState(false);
  const [search,setSearch] = useState("");
  const [searchResults,setSearchResults] = useState([]);
  const [movies,setMovies] = useState({})
  const InputEl = useRef();
    const getSearchTerm = () => {
        searchHandler(InputEl.current.value)
    }

  useEffect(()=>{
    fetch(moviesTrending)
    .then(response => response.json())
    .then(object => setMovies(object.results))
  },[moviesTrending])

  // console.log(movies)
  const searchHandler = (searchTerm) =>{
    setSimulateTrue(true);
        setSearch(searchTerm)
        if (searchTerm !== "") {
          const newMoviesList = movies.filter((movie)=>{
            movie.title.startsWith(searchTerm)
        });
        setSearchResults(newMoviesList)
      } else {
        setSearchResults(movies)
      }
        
    }
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
      <Banner term={search} InputEl={InputEl} searchHandler={searchHandler} movies={movies} term={search} fetchUrl={requests.fetchNetflixOriginals} movies={searchResults} searchHandler={searchHandler} simulateTrue={simulateTrue} isLargeRow/>
      {simulateTrue ?
      <Row title="NETFLIX ORIGINALS" term={search} fetchUrl={requests.fetchNetflixOriginals} movies={searchResults} searchHandler={searchHandler} simulateTrue={simulateTrue} isLargeRow /> :
      <MainContainer/> }
      <Footer/>
      </>
      }
      </UserProvider>
    </MainBody>
  );
}

export default App;
