import React, { useState, useEffect } from "react";
import styled from "styled-components";
import requests from "../../../apiRequests";
import Rating from "@material-ui/lab/Rating";
import Banner from "../../Features/Banner/Banner";
import Footer from "../../Features/Footer/Footer";
import { Button, Input } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import {
  InputBackground,
  InputSection,
  BannerFade,
  CloseSpan,
  ModelContent,
  ModelBody,
  Posters,
  Header,
  Body,
} from "../RoutePageCSS";

function Action({ isLargeRow }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [currentMovies, setCurrentMovies] = useState({});
  const [newStyle, setNewStyle] = useState({ display: "none" });
  const moviesUrl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const showMovieDesc = () => {
    setButtonPopup(true);
  };
  useEffect(() => {
    fetch(requests.fetchActionMovies)
      .then((response) => response.json())
      .then((movies) => setMovies(movies.results));
  }, [requests.fetchActionMovies]);

  return (
    <>
      <Banner />
      <Body>
        <Header>ACTION MOVIES</Header>
        <InputSection>
          <InputBackground>
            <Input
              type="text"
              color="primary"
              background="primary"
              placeholder="Search Movies"
            />
          </InputBackground>
        </InputSection>
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
                  className={`row_poster_route ${
                    isLargeRow && "row_poster_routeLarge"
                  } `}
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
              {currentMovies.title}{" "}
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
      </Body>
      <Footer />
    </>
  );
}

export default Action;
