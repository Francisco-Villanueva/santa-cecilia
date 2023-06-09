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
        className="carousel-container"
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
        Surcando las civilizaciones, sobrevive el ritual. El ritual que
        trasciende fronteras, campos, pañuelos, portones, rincones… Construyendo
        humanidades, amistades, hermandades… Celebrando el encuentro. Habitante
        permanente en este hogar de tela y de cierre, de madera y alambre, de
        tuco y fideos, de tierra y agua, de largas noches y largos días.
        Manifestación de vida, lenguaje fundante. Lenguaje escrito en hojas
        borroneadas, tachadas y manchadas por mate y por barro. Manifestación de
        comunidad. Sobrevive el ritual a través de la temporalidad; a través de
        las guias y de los scouts; a través del canto amigo y del canto de mis
        amigos y de mis amigas, de mis hermandades. Vive el ritual a través de
        la madera y de las cuerdas; a través de la voz y de las manos. Manos
        entrelazadas. Manos generadoras de una página más que, año tras año,
        será anotada en el gran cuaderno. Manos que abren la oportunidad, se
        despojan de lo secundario y crean, en conjunto, aquello que nos acompaña
        hasta el fogón. La verdad primera: sobrevive el ritual o, mejor dicho,
        hacemos vivir al ritual. Hacemos sonar al ritual en común - unidad.
      </article>
    </div>
  );
}
