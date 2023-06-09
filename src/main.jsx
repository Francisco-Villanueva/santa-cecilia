import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RamaProvider } from "./context/rama.jsx";
import { SantaProvider } from "./context/santacecilia.jsx";
import { SongPlayingProvider } from "./context/songPlaying.jsx";
// import { CancionesProvider } from "./context/canciones.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <SantaProvider>
    <RamaProvider>
      <SongPlayingProvider>
        <App />
      </SongPlayingProvider>
    </RamaProvider>
  </SantaProvider>
);
