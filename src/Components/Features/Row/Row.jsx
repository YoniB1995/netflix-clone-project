import React , { useState , useEffect } from 'react'
import styled from 'styled-components'


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
function Row({title, fetchUrl, isLargeRow}) {
  
    const moviesUrl = "https://image.tmdb.org/t/p/original/"
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
      fetch(fetchUrl)
      .then(response => response.json())
      .then(movies => setMovies(movies.results))
    }, [fetchUrl])
    
    return (
        <Body>
           <Header>{title}</Header>
           <Posters>{movies.map((movie)=>{
               return (<img key={movie.id} className={`row_poster ${isLargeRow && "row_posterLarge"} ` } src={`${moviesUrl}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>)
           })}</Posters>
        </Body>
    )
}

export default Row
