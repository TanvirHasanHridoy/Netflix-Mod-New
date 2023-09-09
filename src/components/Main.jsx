import React, { useEffect, useState } from "react";
import requests from "../Requests";
import axios from "axios";
const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    // console.log(process.env.REACT_APP_FRONTEND_API_KEY);
    // console.log("THE LINK IS CURRENTLY");
    // console.log(requests.requestPopularMovies);
    axios.get(requests.requestPopularMovies).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  // console.log("The movies are   ");
  // console.log(movie);

  function TruncatedString(str, len) {
    // console.log("current window is :" + window.innerWidth);
    // console.log("current length is :" + len);
    if (str?.length > len) {
      return str.slice(0, len) + "...";
    } else {
      return str;
    }
  }

  return (
    <div className="w-full h-[550px] text-white overflow-x-hidden">
      <div className="w-full  flex flex-col text-white">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black">
          <div>
            <div className="absolute top-[40%] pl-4 sm:pl-6 md:pl-10 max-h-[60%] md:max-h-[100%]">
              <div className="space-y-3 relative flex flex-col">
                {/* title */}
                <div>
                  <h1 className="text-4xl">{movie?.title}</h1>
                </div>
                {/* Release date */}
                <div>
                  <p className="text2xl font-bold">
                    Release date: {movie?.release_date}
                  </p>
                </div>
                {/* Rating */}
                <div className="my-2 text-2xl flex">
                  <h1>
                    <pre>Rating: </pre>
                  </h1>
                  <h1
                    className={`h-6  ${
                      movie?.vote_average > 9
                        ? "text-red-600"
                        : movie?.vote_average > 6
                        ? "text-blue-500"
                        : "text-green-500"
                    }`}
                  >
                    {movie?.vote_average}
                  </h1>
                </div>
                {/* Details */}
                <div>
                  <p>
                    {TruncatedString(
                      movie?.overview,
                      window.innerWidth > 450 ? 200 : 100
                    )}
                  </p>
                  {/* <p>{window.innerWidth}</p> */}
                </div>
                {/* BUTTONS play & trailer */}
                <div className="pt-12   left-5 ">
                  <button className="hover:bg-red-600 hover:text-white duration-200 border bg-gray-300 text-black border-gray-300 py-2 px-5">
                    Play
                  </button>
                  <button className="hover:bg-gray-400 duration-200 hover:text-black border text-white border-gray-300 py-2 px-5 ml-4">
                    Watch Later
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* banner/Hero image */}
        <img
          className="w-full h-[550px] object-cover "
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
    </div>
  );
};
export default Main;
