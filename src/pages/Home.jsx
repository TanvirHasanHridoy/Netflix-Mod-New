import React from "react";
import Main from "../components/Main";
import Series from "../components/Series";
import requests from "../Requests";

const Home = () => {
  return (
    <div className="">
      <Main className="" />
      {/* <Series
        title="Popular Movies: "
        fetchingURL={requests.requestPopularMovies}
      /> */}
      <Series
        serial={1}
        title="Popular TV: "
        fetchingURL={requests.requestPopularTV}
      />
      <Series
        serial={2}
        title="Trending Movies: "
        fetchingURL={requests.requestTrending}
      />
      <Series
        serial={3}
        title="Top Rated Movies: "
        fetchingURL={requests.requestTopRated}
      />
      <Series
        serial={4}
        title="Upcoming Movies: "
        fetchingURL={requests.requestUpcoming}
      />
    </div>
  );
};

export default Home;
