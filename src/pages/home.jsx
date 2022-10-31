import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row
        rowID="1"
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.requestNetflixOriginals}
      />
      <Row rowID="2" title="Trending Now" fetchUrl={requests.requestTrending} />
      <Row rowID="3" title="Top Rated" fetchUrl={requests.requestTopRated} />
      <Row
        rowID="4"
        title="Popular Movies"
        fetchUrl={requests.requestPopular}
      />
      <Row
        rowID="5"
        title="Action Movies"
        fetchUrl={requests.requestActionMovies}
      />
      <Row
        rowID="6"
        title="Comedy Movies"
        fetchUrl={requests.requestComedyMovies}
      />
      <Row
        rowID="7"
        title="Upcoming Movies"
        fetchUrl={requests.requestUpcomingMovies}
      />
      <Row
        rowID="8"
        title="Romance Movies"
        fetchUrl={requests.requestRomanceMovies}
      />
    </>
  );
};

export default Home;
