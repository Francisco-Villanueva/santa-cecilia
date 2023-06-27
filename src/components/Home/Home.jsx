import { faRankingStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useRama } from "../../hooks/useRama";
import { useSantas } from "../../hooks/useSantas";
import { useSearch } from "../../hooks/useSearch";
import { useSongs } from "../../hooks/useSongs";
import { useSongPlaying } from "../../hooks/useSongPlaying";
import Carousele from "../carousel/Carousel";
import Ranking from "../ranking/Ranking";
import HomeSection from "./Section/HomeSection";
import { santacecilia } from "../../mocks/santacecilia.json";

import "./Home.css";
import SongPlayer from "../SongPlayer/SongPlayer";

export default function Home() {
  const { getRamaData } = useRama();
  const { song, reproductionStatus, setPlayPause } = useSongPlaying();
  const { search, setSearch } = useSearch();
  const [sort, setSort] = useState("Z-A");
  const { santas, getSantas, getAllSantas } = useSantas({ search, sort });
  const { songs, getSongs, getAlSongs } = useSongs({ search, sort });
  const [rankingShow, setRankingShow] = useState(false);
  const handleShowRanking = () => {
    setRankingShow(!rankingShow);
  };
  useEffect(() => {
    getAllSantas();
    getAlSongs();
  }, []);

  return (
    <div className="home_main-container">
      {song && (
        <div style={{ display: "none" }}>
          <SongPlayer
            isPlaying={reproductionStatus}
            setIsPlaying={setPlayPause}
            songUrl={song.sound}
          />
        </div>
      )}
      <div className="home_header">
        <h1>Santa cecilia</h1>
        <button className="ranking-btn_home" onClick={handleShowRanking}>
          <FontAwesomeIcon icon={faRankingStar} />
        </button>
      </div>
      <Carousele />
      {rankingShow && (
        <section className="section_ranking-container">
          {/* <button onClick={handleShowRanking}></button> */}
          <Ranking santas={santacecilia} closeRanking={handleShowRanking} />
        </section>
      )}

      <div className="home_body">
        <HomeSection
          title="Santa Cecilias"
          type="santas"
          getRamaData={getRamaData}
          array={santas}
          getSantas={getSantas}
          search={search}
          setSearch={setSearch}
          sort={sort}
          setSort={setSort}
        />
        <HomeSection
          title="Canciones"
          type="canciones"
          getRamaData={getRamaData}
          array={songs}
          getSongs={getSongs}
          search={search}
          setSearch={setSearch}
          sort={sort}
          setSort={setSort}
        />
      </div>
    </div>
  );
}
