import React from "react";
import Navbar from "../components/navbar/Navbar";
import ReactPlayer from "react-player";
export default function Home() {
  return (
    <div>
      <Navbar />
      <header>
        <div class="video">
          <video autoplay>
            <source src="https://fb.watch/b8CJS0T_Me/" type="video/mp4" />
          </video>
        </div>
      </header>
    </div>
  );
}
