import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Card = ({ item, serial }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const newItem = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      let val = "";
      item?.title ? (val = item.title) : (val = item?.name);
      await updateDoc(newItem, {
        savedShows: arrayUnion({
          id: item.id,
          // {(item.title)}
          title: val,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("LOG IN TO ADD FAVORITES");
    }
  };

  return (
    // <div className="">
    // <div className="w-40">
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        key={item?.name + `${serial}`}
        className="hover:scale-110  duration-75 object-cover"
        src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}
        alt={item?.name}
      />{" "}
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full max-w-full text-center">
          {item?.title ? item.title : item?.name}
          {/* {console.log(item?.name)} */}
        </p>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>

    // </div>
  );
};

export default Card;
