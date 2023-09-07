import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "./Cardd";

const Series = ({ title, fetchingURL, serial }) => {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    axios.get(fetchingURL).then((response) => {
      setSeries(response.data.results);
    });
  }, [fetchingURL]);

  // function shuffleArray(array) {
  //   const shuffledArray = [...array];
  //   for (let i = shuffledArray.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [shuffledArray[i], shuffledArray[j]] = [
  //       shuffledArray[j],
  //       shuffledArray[i],
  //     ];
  //   }
  //   return shuffledArray;
  // }

  // useEffect(() => {
  //   setSeries(shuffleArray(series));
  // }, []);

  // console.log("  NAme of series");
  // console.log(series);
  const goRight = () => {
    var scrollable_area = document.getElementById("scrollable-area" + serial);
    scrollable_area.scrollLeft = scrollable_area.scrollLeft + 400;
  };
  const goLeft = () => {
    var scrollable_area = document.getElementById("scrollable-area" + serial);
    scrollable_area.scrollLeft = scrollable_area.scrollLeft - 400;
  };
  return (
    <div className="scroll-smooth m-2 ">
      <div className="h-[240px] w-full p-4 relative flex flex-col ">
        <div className="text-2xl text-white mb-4">{title} </div>
        <FaChevronLeft
          onClick={goLeft}
          className="hover:bg-gray-200 opacity-70  p-2 h-10 w-10 rounded-full absolute top-1/2 -translate-y-1/2 left-[2%] duration-150 hover:scale-110 text-white hover:text-black bg-gray-900 z-40"
          size={30}
        ></FaChevronLeft>
        <FaChevronRight
          onClick={goRight}
          className="hover:bg-gray-200 opacity-70 p-2 h-10 w-10 rounded-full absolute top-1/2 right-[2%] duration-150 hover:scale-110 hover:text-black text-white bg-gray-900 z-40"
          size={30}
        ></FaChevronRight>
        {/* div for storing the images and cards */}
        {/* <div
          id={"scrollable-area" + serial}
          className="relative scroll-smooth h-full w-full flex overflow-x-scroll overflow-y-hidden space-x-4 scrollbar-hide whitespace-nowrap"
        >
          {series.map((item) => (
            // <img
            //   // key={item?.name + `${serial}`}
            //   className="hover:scale-105 duration-75 object-cover"
            //   src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}
            //   alt={item?.name}
            // />
            // <Card serial={serial} item={item} />
            <Card item={item} serial={serial} />
          ))}
        </div> */}

        <div
          id={"scrollable_area" + serial}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative overflow-y-hidden"
        >
          {series.map((item, id) => (
            <Card key={id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Series;
