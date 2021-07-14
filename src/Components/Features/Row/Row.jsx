import React , { useState , useEffect , useRef } from 'react'
import styled from 'styled-components'
import Popup from '../../Popup/Popup'
import MoviePopup from '../../Popup/MoviePopup'

const Body = styled.div` 
display:flex;
justify-content:left;
align-items: left;
flex-direction:column;
`
const Header = styled.h2` 
margin-left:80px;
`

const Posters = styled.div` 
display:flex;
flex-direction: row;
overflow-y:hidden;
overflow-x:scroll;
padding:20px;
margin-left:80px;

::-webkit-scrollbar{
  width: 15px;
}
::-webkit-scrollbar-track{
  -webkit-box-shadow: inset 0 0 6px #5f5f5f4c;
  border-radius: 25px;
  border-top-left-radius:25px;
}

::-webkit-scrollbar-thumb{
  border-radius: 25px;
  border-top-left-radius:25px;
  -webkit-box-shadow: inset 0 0 6px #2c2b2b7f; 
}
`
//  const MovieDescBody = styled.div` 
//  display:flex;
//  flex-direction: column-reverse;
//  `

 const ModelBody = styled.div` 
  display: none; 
  position: fixed; 
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
 `
 const ModelContent = styled.div` 
 background-color: #fefefe;
 color:black;
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
const MovieDesc = styled.p` 
border:1px solid white;
position:relative;
`

function Row({title, fetchUrl, isLargeRow}) {
  const [buttonPopup,setButtonPopup] = useState(false);

  const [newStyle,setNewStyle] = useState({display:"none"})
    const moviesUrl = "https://image.tmdb.org/t/p/original/"
    const [movies,setMovies] = useState([]);
    const showMovieDesc = () => {setButtonPopup(true) }

    useEffect(()=>{
      fetch(fetchUrl)
      .then(response => response.json())
      .then(movies => setMovies(movies.results))
    }, [fetchUrl])
    
    return (
        <Body>
           <Header>{title}</Header>
           <Posters>{movies.map((movie,array)=>{
               return (
              <>
              <button  onClick={()=>setNewStyle({display:"block"})}>Show OverView</button>
               <img key={movie.id} onClick={showMovieDesc} onClick={()=>setNewStyle({display:"block"})} className={`row_poster ${isLargeRow && "row_posterLarge"} ` } src={`${moviesUrl}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
               
              <ModelBody style={newStyle} >
              <ModelContent>
                <CloseSpan onClick={()=> setNewStyle({display:"none"})}>exit</CloseSpan>
                {movie.overview}
              </ModelContent>
              </ModelBody>
              
              </>
              )
           })}</Posters>

        </Body>
    )
}

export default Row
