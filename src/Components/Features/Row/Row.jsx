import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Rating from "@material-ui/lab/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import {
  BannerFade,
  CloseSpan,
  ModelContent,
  ModelBody,
  Posters,
  Header,
  Body,
} from "./RowCSS";

function Row({
  title,
  fetchUrl,
  isLargeRow,
  searchHandler,
  simulateTrue,
  searchResults,
}) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [currentMovies, setCurrentMovies] = useState({});
  const [newStyle, setNewStyle] = useState({ display: "none" });
  const moviesUrl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const showMovieDesc = () => {
    setButtonPopup(true);
  };
  console.log(currentMovies);
  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((movies) => setMovies(movies.results));
  }, [fetchUrl]);

  return (
    <Body>
      <Header>{title}</Header>
      <Posters>
        {movies.map((movie, array) => {
          return (
            <>
              <img
                key={movie.id}
                onClick={showMovieDesc}
                onClick={() => {
                  setCurrentMovies(movie);
                  setNewStyle({ display: "block" });
                }}
                className={`row_poster ${isLargeRow && "row_posterLarge"} `}
                src={`${moviesUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            </>
          );
        })}
      </Posters>
      <ModelBody style={newStyle}>
        <ModelContent>
          <CloseSpan onClick={() => setNewStyle({ display: "none" })}>
            X
          </CloseSpan>
          <img
            src={`${moviesUrl}${currentMovies.backdrop_path}`}
            alt="poster"
            height="300px"
            width="100%"
          />
          <BannerFade></BannerFade>
          <h1>
            {currentMovies.name}{" "}
            <Rating
              name="customized-10"
              value={Math.round(currentMovies.vote_average)}
              max={10}
            />
          </h1>
          <span>
            <FontAwesomeIcon icon={faPlayCircle} className="iconCardPlay" />
          </span>
          <h3>Rating :{currentMovies.vote_average}</h3>
          <p>{currentMovies.overview}</p>
        </ModelContent>
      </ModelBody>
      <div>{searchResults}</div>
    </Body>
  );
}

export default Row;
