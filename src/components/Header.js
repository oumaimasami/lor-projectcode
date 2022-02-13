import React from "react";
import "./Header.css";
import video from "../images/vd.mp4";
export default function Header() {
  return (
    <video
      playsinline="playsinline"
      autoplay="autoplay"
      muted="muted"
      loop="loop"
      className="embed-responsive video embed-responsive-21by9"
    >
      <source src={video} type="video/mp4" />
    </video>
  );
}
