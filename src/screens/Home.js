import React from "react";
import Navbar from "../components/navbar/Navbar";
import video from "../images/vd.mp4";
export default function Home() {
  return (
    <div>
      <Navbar />
      <video
        playsinline="playsinline"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
        className="embed-responsive video embed-responsive-21by9"
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
