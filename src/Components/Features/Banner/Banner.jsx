import React ,{useState, useEffect , useContext} from 'react'
import styled from 'styled-components'
import requests from '../../../apiRequests'
import { Button } from '@material-ui/core';
import UserContext from '../Context';

const Header = styled.header`
background-size:cover; 
display:flex;
justify-content:flex-end;
align-items:center;
flex-direction:column;
text-align:center;
object-fit:contain;
height:448px;
`

const BannerContent = styled.div` 
font-size:40px;
font-weight:800;
padding-bottom:0.3rem;
`


const BannerDesc = styled.h1` 
width:45rem;
line-height:1.3;
padding-top: 1rem;
font-size: 0.8rem;
max-width:360px;
height:80px;
`
const BannerFade = styled.div` 
height:7.4rem;
background-image:linear-gradient(180deg,transparent,rgba(37,37,37,0.61),#111);
width:100%;

`



function Banner({}) {
    const [movie, setMovie] = useState([]);

    const setDisplayWeb = useContext(UserContext);

    useEffect(()=>{
      fetch(requests.fetchNetflixOriginals)
      .then(response => response.json())
      .then(movies => setMovie(movies.results[
                Math.floor(Math.random()* 20 - 1)]))
    }, [])

    function truncate(str , n) {
        return str?.length> n ? str.substr(0, n-1) + "..." : str;
    }

    return (
        <>
        <Header style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
        }}>
            <BannerContent>{movie?.title || movie?.name || movie?.original_name}</BannerContent>
            <span><Button variant="contained" color="primary" style={{margin:"5px"}}>Play</Button>
            <Button variant="contained" color="primary">My List</Button>
            </span>
            <BannerDesc>{truncate(movie?.overview,150)}</BannerDesc>
            <BannerFade></BannerFade>
        </Header>
        </>
    )
}

export default Banner

