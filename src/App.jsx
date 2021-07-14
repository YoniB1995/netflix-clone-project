import React , {useState,useEffect} from 'react'
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
            return (Object.values(movie).join(" ").toLowerCase().includes(searchTerm));
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
      <Banner term={search} searchHandler={searchHandler} movies={movies}/>
      {simulateTrue? <Row title="NETFLIX ORIGINALS" term={search} fetchUrl={requests.fetchNetflixOriginals} isLargeRow movies={search.length < 1 ? movies : searchResults} searchHandler={searchHandler} simulateTrue={simulateTrue}/> :
      <MainContainer/> }
      <Footer/>
      </>
      }
      </UserProvider>
    </MainBody>
  );
}

export default App;
