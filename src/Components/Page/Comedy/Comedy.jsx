import React , { useState , useEffect  } from 'react'
import styled from 'styled-components'
import requests from '../../../apiRequests'
import Rating from '@material-ui/lab/Rating';
import Banner from '../../Features/Banner/Banner';
import Footer from '../../Features/Footer/Footer'
import { Button ,Input} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlayCircle } from '@fortawesome/free-solid-svg-icons'

const Body = styled.div` 
display:flex;
justify-content:left;
align-items: left;
flex-direction:column;
@media only screen and (min-width: 414px) and (max-width: 767px),
    (min-width: 412px) and (max-width: 767px),
    (min-width: 390px) and (max-width: 767px),
    (min-width: 428px) and (max-width: 767px),
    (min-width: 384px) and (max-width: 767px),
    (min-width: 360px) and (max-width: 767px) {
        height:100%;
  }
`
const Header = styled.h2` 
margin-left:80px;
`

const Posters = styled.div` 
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
flex-wrap: wrap;
padding:20px;
margin-left:80px;

@media only screen and (min-width: 414px) and (max-width: 767px),
    (min-width: 412px) and (max-width: 767px),
    (min-width: 390px) and (max-width: 767px),
    (min-width: 428px) and (max-width: 767px),
    (min-width: 384px) and (max-width: 767px),
    (min-width: 360px) and (max-width: 767px) {
        height:100%;
        img{
          width:100%;
        }
  }

`

const ModelBody = styled.div` 
  display: flex; 
  position: fixed; 
  justify-content: center;
  align-items: center;
  
  left: 0%;
  top: 0%;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
  
`

 const ModelContent = styled.div`
 background-color: #111;
 display:flex; 
 border-radius:25px;
 flex-direction:column;
 justify-content: center;
 align-items: center;
 color:white;
 height:80vh;
 width:30vw;
  margin: 15% auto; 
  border: 1px solid #888;
  img{
    
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
  }
  p{
    padding:20px;
    padding-bottom: 50px;
  }


  @media only screen and (min-width: 414px) and (max-width: 767px),
    (min-width: 412px) and (max-width: 767px),
    (min-width: 390px) and (max-width: 767px),
    (min-width: 428px) and (max-width: 767px),
    (min-width: 384px) and (max-width: 767px),
    (min-width: 360px) and (max-width: 767px) {
        width:80vw;
        border-radius:25px;
        box-shadow:2px 4px 2px black;
        img{
          left:50px;
        }
  }
  `

 const CloseSpan = styled.span` 
 color: #aaa;
  top:30px;
  border-radius: 50%;
  position:relative;
  font-size: 30px;
  font-weight: bold;
  :hover , :focus {
    color: black;
  text-decoration: none;
  cursor: pointer;
  }

  @media only screen and (min-width: 414px) and (max-width: 767px),
    (min-width: 412px) and (max-width: 767px),
    (min-width: 390px) and (max-width: 767px),
    (min-width: 428px) and (max-width: 767px),
    (min-width: 384px) and (max-width: 767px),
    (min-width: 360px) and (max-width: 767px) {
      background:black;
      color:white;
      box-shadow:2px 3px 2px grey;
      font-size: 20px;
      width:fit-content;
        img{
          left:50px;
        }
  }
 `
const BannerFade = styled.div` 
height:2rem;
background-image:linear-gradient(180deg,transparent,rgba(37,37,37,0.61),#111);
width:100%;
`

const InputSection = styled.div` 
display:flex;
align-items: center;
justify-content: center;
`

const InputBackground = styled.div` 
background:white;
width:10%;
@media only screen and (min-width: 414px) and (max-width: 767px),
    (min-width: 412px) and (max-width: 767px),
    (min-width: 390px) and (max-width: 767px),
    (min-width: 428px) and (max-width: 767px),
    (min-width: 384px) and (max-width: 767px),
    (min-width: 360px) and (max-width: 767px) {
        width:50%;
    }
`

function Comedy({ isLargeRow}) {
  const [buttonPopup,setButtonPopup] = useState(false);
  const [currentMovies,setCurrentMovies] = useState({});
  const [newStyle,setNewStyle] = useState({display:"none"})
    const moviesUrl = "https://image.tmdb.org/t/p/original/"
    const [movies,setMovies] = useState([]);
    const showMovieDesc = () => {setButtonPopup(true) }
    useEffect(()=>{
      fetch(requests.fetchComedyMovies)
      .then(response => response.json())
      .then(movies => setMovies(movies.results))
    }, [requests.fetchComedyMovies])
    

    return (
        <>
        <Banner/>
        <Body>
           <Header>COMEDY MOVIES</Header>
           <InputSection>
             <InputBackground><Input type="text" color="primary" background="primary" placeholder="Search Movies" /></InputBackground></InputSection>
           <Posters>
             {movies.map((movie,array)=>{
               return (
              <>
               <img key={movie.id} onClick={showMovieDesc} 
               onClick={()=>{
                 setCurrentMovies(movie);
                setNewStyle({display:"block"})}}
                className={`row_poster_route ${isLargeRow && "row_poster_routeLarge"} ` } src={`${moviesUrl}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                
              </>
              )
           })}</Posters>
           <ModelBody style={newStyle} >
              <ModelContent>
                <CloseSpan onClick={()=> setNewStyle({display:"none"})}>X</CloseSpan>
                 <img src={`${moviesUrl}${currentMovies.backdrop_path}`} alt="poster" height="300px" width="100%" />
                 <BannerFade></BannerFade>
                <h1>{currentMovies.name} <Rating name="customized-10" value={Math.round(currentMovies.vote_average)} max={10} /></h1>
                <span><FontAwesomeIcon icon={faPlayCircle}  className="iconCardPlay" /></span>
                <h3>Rating :{currentMovies.vote_average}</h3>
                <p>{currentMovies.overview}</p>
              </ModelContent>
              </ModelBody>
            
        </Body>
        <Footer/>
        </>
    )
}

export default Comedy
