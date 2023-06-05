import React from "react";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";
import img6 from "../../images/img6.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
export default function Carousele() {
  return (
    <div className="carousel-main-container">
      <Carousel
        ariaLabel=""
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
        width={"40vw"}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src={img1} alt="Imagen 1" />
        </div>
        <div>
          <img src={img2} alt="Imagen 1" />
        </div>
        <div>
          <img src={img3} alt="Imagen 1" />
        </div>
        <div>
          <img src={img4} alt="Imagen 1" />
        </div>
        <div>
          <img src={img5} alt="Imagen 1" />
        </div>
        <div>
          <img src={img6} alt="Imagen 1" />
        </div>
      </Carousel>
      <article>
        <h1> Santa Cecilia</h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque harum,
        maxime quibusdam minima porro cupiditate sed sapiente asperiores sint
        esse provident, autem illum odit error deleniti ullam culpa eius
        praesentium aperiam tenetur mollitia ut repellendus distinctio. Nulla
        explicabo, dignissimos, nesciunt dolor reiciendis id voluptatem
        accusantium porro minima nihil magni tempora!
      </article>
    </div>
  );
}
