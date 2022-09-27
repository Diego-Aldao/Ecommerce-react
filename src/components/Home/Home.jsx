import React from "react";
import styled from "styled-components";
import heroMovil from "../../assets/Images/topman_hp-hero_mobile.avif";
import heroDesk from "../../assets/Images/topman_hp-hero_desktop.avif";
import useWindowSize from "../../hooks/useWindowSize";

const Contenedor = styled.div`
  width: 100%;
`;

const Contenido = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0px 10px;
  @media (min-width: 768px) {
    padding: 0px 24px;
  }
  @media (min-width: 992px) {
    padding: 0px 32px;
    margin: 60px auto;
  }
  &.no-padding {
    padding: 0;
  }
`;

const Registro = styled.div`
  width: 100%;
  padding: 35px 40px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: red;
  .subtitulo {
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
  }
  h2 {
    text-transform: uppercase;
    font-weight: 800;
    margin: 20px 0px;
    text-align: center;
    line-height: 1.4;
    max-width: 350px;
  }
  button {
    width: 190px;
    margin: 15px 0px 40px;
    padding: 15px;
    text-transform: uppercase;
    font-weight: 600;
    color: white;
    background: black;
    border: none;
    letter-spacing: 1px;
    font-size: 15px;
  }
  .footer {
    font-size: 12px;
    text-align: center;
    line-height: 1.2;
    padding: 5px;
  }
  @media (min-width: 768px) {
    .subtitulo {
      font-size: 24px;
    }
    h2 {
      max-width: 750px;
      font-size: 32px;
    }
    button {
      margin: 15px 0px;
    }
  }
`;
const Descuento = styled.div`
  background: var(--gradiente2);
  padding: 20px 35px;
  margin: 20px 0px;
  h2 {
    font-weight: 900;
    font-style: italic;
    font-size: 26px;
    text-align: center;
    text-transform: uppercase;
    line-height: 1.5;
  }
  @media (min-width: 768px) {
    h2 {
      font-size: 32px;
    }
  }
`;

const Hero = styled.div`
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  position: relative;
  .hero-info {
    position: absolute;
    width: 100%;
    height: 50%;
    bottom: 0px;
    left: 0px;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
  }
  .categoria,
  .btn {
    padding: 10px;
    background: white;
    color: black;
    font-size: 32px;
    text-transform: uppercase;
    font-weight: 700;
    display: block;
  }
  .btn {
    margin-top: 20px;
    font-size: 18px;
  }
  @media (min-width: 992px) {
    .categoria {
      padding-top: 20px;
      font-size: 62px;
    }
  }
`;

const GridHome = styled.section`
  display: grid;
  width: 100%;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;
  .img-contenedor {
    min-height: 180px;
    img {
      width: 100%;
      object-fit: fill;
    }
  }
  .titulo {
    padding: 15px 0px;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    font-size: 14px;
    line-height: 1.5;
  }
  .descripcion {
    text-align: center;
  }
  .descripcion::first-letter {
    text-transform: uppercase;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FlexHome = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  grid-gap: 20px;
  .img-contenedor {
    max-height: 630px;
    overflow: hidden;
    img {
      height: 100%;
    }
  }
  h2 {
    padding: 20px 0px 10px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1.5;
  }
  p {
    text-align: center;
    font-size: 18px;
  }
  p::first-letter {
    text-transform: uppercase;
  }
  span {
    height: 100px;
    padding: 15px 45px 10px;
    border: 2px solid black;
    margin: 25px auto 0px;
    text-transform: uppercase;
    line-height: 2;
    display: flex;
    font-weight: 600;
    align-items: center;
    text-align: center;
    letter-spacing: 1px;
    max-width: 250px;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 30px;
    img {
      height: 55vw;
    }
  }
`;

const Marcas = styled.section`
  padding: 20px 0px;
  header {
    margin-bottom: 35px;
    h2 {
      text-transform: uppercase;
      line-height: 1.5;
      text-align: center;
      font-size: 20px;
    }
  }
  @media (min-width: 768px) {
    header {
      h2 {
        font-size: 24px;
      }
    }
  }
`;

const GridMarcas = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    div:nth-of-type(5n + 0) {
      grid-column: 2 / 3;
    }
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(6, 1fr);
    div:nth-of-type(5n + 0) {
      grid-column: 5 / 6;
    }
  }
`;

const Home = () => {
  const size = useWindowSize();
  return (
    <Contenedor>
      <Registro>
        <p className="subtitulo">asos premier party</p>
        <h2>hazte miembro por el -25% en todo mañana!</h2>
        <button>registrarme</button>
        <p className="footer">
          Se aplican terminos y condiciones. Solo por tiempo limitado
        </p>
      </Registro>
      <Contenido className={size.width < 992 && "no-padding"}>
        <Hero>
          <img src={size.width < 768 ? heroMovil : heroDesk} alt="" />
          <div className="hero-info">
            <div className="categoria">
              <span>topman</span>
            </div>
            <div className="btn">
              <span>comprar ahora</span>
            </div>
          </div>
        </Hero>
      </Contenido>
      <Contenido>
        <GridHome>
          <div>
            <div className="img-contenedor">
              <img src={heroMovil} alt="" />
            </div>
            <p className="titulo">confort de asos design</p>
            <p className="descripcion"> ponle buena cara al frio</p>
          </div>
          <div>
            <div className="img-contenedor">
              <img src={heroMovil} alt="" />
            </div>
            <p className="titulo">confort de asos design</p>
            <p className="descripcion"> ponle buena cara al frio</p>
          </div>
          <div>
            <div className="img-contenedor">
              <img src={heroMovil} alt="" />
            </div>
            <p className="titulo">confort de asos design</p>
            <p className="descripcion"> ponle buena cara al frio</p>
          </div>
          <div>
            <div className="img-contenedor">
              <img src={heroMovil} alt="" />
            </div>
            <p className="titulo">confort de asos design</p>
            <p className="descripcion"> ponle buena cara al frio</p>
          </div>
        </GridHome>
      </Contenido>
      <Descuento>
        <h2>hasta un -50% en diseños comodos</h2>
      </Descuento>
      <Contenido>
        <FlexHome>
          <div>
            <div className="img-contenedor">
              <img src={heroMovil} alt="" />
            </div>
            <h2>estilosamente terrorifico</h2>
            <p>llega el estilo gotico</p>
            <span>comprar asos design</span>
          </div>
          <div>
            <div className="img-contenedor">
              <img src={heroMovil} alt="" />
            </div>
            <h2>estilosamente terrorifico</h2>
            <p>llega el estilo gotico</p>
            <span>comprar asos design</span>
          </div>
        </FlexHome>
      </Contenido>
      <Contenido>
        <Marcas>
          <header>
            <h2>marcas que son tendencia</h2>
          </header>
          <GridMarcas>
            <div>
              <img src={heroMovil} alt="" />
            </div>
            <div>
              <img src={heroMovil} alt="" />
            </div>
            <div>
              <img src={heroMovil} alt="" />
            </div>
            <div>
              <img src={heroMovil} alt="" />
            </div>
            <div>
              <img src={heroMovil} alt="" />
            </div>
            <div>
              <img src={heroMovil} alt="" />
            </div>
          </GridMarcas>
        </Marcas>
      </Contenido>
    </Contenedor>
  );
};

export default Home;
