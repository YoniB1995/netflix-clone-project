import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Banner from "../Features/Banner/Banner";
import "../../App.css";
import MainContainer from "./MainContainer";
import "semantic-ui-css/semantic.min.css";
import Footer from "../Features/Footer/Footer";
import NetflixIntro from "../Features/Netflix_Intro/NetflixIntro";
import NetflixWelcome from "../Features/Netflix_Intro/NetflixWelcome";
import { UserProvider } from "../Features/Context";
import { requests, baseURL, moviesTrending } from "../../apiRequests";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SideNavComp from "../Features/SideNav/SideNavComp";
import Original from "./OriginalNetflix/Original";
import TrendingNow from "./TrendingNow/TrendingNow";
import TopRated from "./TopRated/TopRated";
import Action from "./Action/Action";
import Comedy from "./Comedy/Comedy";

const MainBody = styled.div`
  background-color: #111;
  color: white;
`;

function BodyFullPage() {
  const [intro, setIntro] = useState(true);
  const [isWelcome, setIsWelcome] = useState(true);
  const [displayWeb, setDisplayWeb] = useState(false);
  const [simulateTrue, setSimulateTrue] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [movies, setMovies] = useState({});
  const [IsContainer, setIsContainer] = useState(true);

  const InputEl = useRef();
  const getSearchTerm = () => {
    searchHandler(InputEl.current.value);
  };

  useEffect(() => {
    fetch(moviesTrending)
      .then((response) => response.json())
      .then((object) => setMovies(object.results));
  }, [moviesTrending]);

  const searchHandler = (searchTerm) => {
    setSimulateTrue(true);
    setSearch(searchTerm);
    if (searchTerm !== "") {
      const newMoviesList = movies.filter((movie) => {
        movie.title.startsWith(searchTerm);
      });
      setSearchResults(newMoviesList);
    } else {
      setSearchResults(movies);
    }
  };
  setTimeout(() => {
    setIsWelcome(false);
  }, 3000);

  setTimeout(() => {
    setIntro(false);
    setDisplayWeb(true);
  }, 6000);

  return (
    <MainBody>
      {isWelcome && <NetflixIntro />}
      {intro && <NetflixWelcome />}
      <BrowserRouter>
        <SideNavComp value={setIsContainer} />
        <Switch>
          <Route exact path="/" />
          <Route path="/home" component={BodyFullPage} />
          <Route path="/netflixoriginal" component={Original} />
          <Route path="/trendingnow" component={TrendingNow} />
          <Route path="/toprated" component={TopRated} />
          <Route path="/actionmovies" component={Action} />
          <Route path="/comedymovies" component={Comedy} />

          <UserProvider value={setDisplayWeb}>
            {displayWeb && (
              <>
                <Banner
                  term={search}
                  InputEl={InputEl}
                  searchHandler={searchHandler}
                  movies={movies}
                  term={search}
                  fetchUrl={requests.fetchNetflixOriginals}
                  movies={searchResults}
                  searchHandler={searchHandler}
                  simulateTrue={simulateTrue}
                  isLargeRow
                />
                <MainContainer setIsContainer={setIsContainer} />
                <Footer />
              </>
            )}
          </UserProvider>
        </Switch>
      </BrowserRouter>
    </MainBody>
  );
}

export default BodyFullPage;
