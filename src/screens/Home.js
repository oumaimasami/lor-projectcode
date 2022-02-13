import React from "react";
import Navbar from "../components/navbar/Navbar";
import ReactPlayer from "react-player";
import video from "../images/vd.mp4";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="vd">
        <ReactPlayer
          url={video}
          width="100%"
          height="100%"
          playing={true}
          loop={true}
        />
      </div>
    </div>
  );
}
