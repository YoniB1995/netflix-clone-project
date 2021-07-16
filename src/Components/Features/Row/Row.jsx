import React , { useState , useEffect , useRef } from 'react'
import styled from 'styled-components'
import Rating from '@material-ui/lab/Rating';

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
        height:50vh;
  }
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

@media only screen and (min-width: 414px) and (max-width: 767px),
    (min-width: 412px) and (max-width: 767px),
    (min-width: 390px) and (max-width: 767px),
    (min-width: 428px) and (max-width: 767px),
    (min-width: 384px) and (max-width: 767px),
    (min-width: 360px) and (max-width: 767px) {
        height:100%;
        img{
         
         
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

function Row({title, fetchUrl, isLargeRow,searchHandler,simulateTrue,searchResults}) {
  const [buttonPopup,setButtonPopup] = useState(false);
  const [currentMovies,setCurrentMovies] = useState({});
  const [newStyle,setNewStyle] = useState({display:"none"})
    const moviesUrl = "https://image.tmdb.org/t/p/original/"
    const [movies,setMovies] = useState([]);
    const showMovieDesc = () => {setButtonPopup(true) }
    console.log(currentMovies)
    useEffect(()=>{
      fetch(fetchUrl)
      .then(response => response.json())
      .then(movies => setMovies(movies.results))
    }, [fetchUrl])
    
    return (
        <Body>
           <Header>{title}</Header>
           <Posters>
             {movies.map((movie,array)=>{
               return (
              <>
               <img key={movie.id} onClick={showMovieDesc} 
               onClick={()=>{
                 setCurrentMovies(movie);
                setNewStyle({display:"block"})}}
                className={`row_poster ${isLargeRow && "row_posterLarge"} ` } src={`${moviesUrl}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>

              </>
              )
           })}</Posters>
           <ModelBody style={newStyle} >
              <ModelContent>
                <CloseSpan onClick={()=> setNewStyle({display:"none"})}>X</CloseSpan>
                 <img src={`${moviesUrl}${currentMovies.backdrop_path}`} alt="poster" height="300px" width="100%" />
                 <BannerFade></BannerFade>
                <h1>{currentMovies.name} <Rating name="customized-10" value={Math.round(currentMovies.vote_average)} max={10} /></h1>
                
                <h3>Rating :{currentMovies.vote_average}</h3>
                <p>{currentMovies.overview}</p>
               
              </ModelContent>
              </ModelBody>
            <div>{searchResults}</div>
        </Body>
    )
}

export default Row
