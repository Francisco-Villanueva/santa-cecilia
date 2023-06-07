import { faRankingStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useRama } from "../../hooks/useRama";
import { useSantas } from "../../hooks/useSantas";
import { useSearch } from "../../hooks/useSearch";
import { useSongs } from "../../hooks/useSongs";
import Carousele from "../carousel/Carousel";
import Ranking from "../ranking/Ranking";
import HomeSection from "./Section/HomeSection";
import { santacecilia } from "../../mocks/santacecilia.json";
import "./Home.css";

export default function Home() {
  const { getRamaData } = useRama();
  const { search, setSearch } = useSearch();
  const [sort, setSort] = useState("Z-A");
  const { santas, getSantas, getAllSantas } = useSantas({ search, sort });
  const { songs, getSongs, getAlSongs } = useSongs({ search });
  const [rankingShow, setRankingShow] = useState(false);
  const handleShowRanking = () => {
    setRankingShow(!rankingShow);
  };
  useEffect(() => {
    getAllSantas();
    getAlSongs();
  }, []);

  return (
    <div>
      <h1>Santa cecilia</h1>
      <Carousele />
      <button className="ranking-btn_home" onClick={handleShowRanking}>
        <FontAwesomeIcon icon={faRankingStar} />
      </button>
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
        />
        <HomeSection
          title="Canciones"
          type="canciones"
          getRamaData={getRamaData}
          array={songs}
          getSongs={getSongs}
          search={search}
          setSearch={setSearch}
        />
      </div>
    </div>
  );
}
