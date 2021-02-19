import React from "react";
import ReactDOM from "react-dom";
import songs from "../pages/api/songs";
import AudioPlayer from "./AudioPlayer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <AudioPlayer songs={songs} />
  </React.StrictMode>,
  rootElement
);
