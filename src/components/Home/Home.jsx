import React from "react";
import styled from "styled-components";
import useWindowSize from "../../hooks/useWindowSize";
import useContentHome from "../../hooks/useContentHome";

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
  background: var(--gradiente-secundario);
  .subtitulo {
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    font-style: italic;
  }
  h2 {
    text-transform: uppercase;
    font-weight: 800;
    margin: 20px 0px;
    text-align: center;
    line-height: 1.4;
    max-width: 350px;
    text-shadow: 0px 1px 0px #000000;
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
    position: relative;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    span {
      padding-top: 5px;
      position: relative;
      z-index: 22;
    }
    .animated {
      position: absolute;
      left: auto;
      top: 30px;
      visibility: hidden;
      opacity: 0;
      transition: all 0.2s ease;
    }
  }
  button:hover {
    background: white;
    .animated {
      visibility: visible;
      opacity: 1;
      color: black;
      top: 30%;
    }
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

const Hero = styled.div`
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
    background: black;
    color: white;
    font-size: 32px;
    text-transform: uppercase;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
    span {
      position: relative;
      z-index: 22;
    }
    .animated {
      position: absolute;
      left: auto;
      top: 40px;
      visibility: hidden;
      opacity: 0;
      transition: all 0.2s ease;
    }
  }
  .btn {
    margin-top: 20px;
    font-size: 18px;
    span {
      padding-top: 5px;
    }
  }
  .categoria:hover,
  .btn:hover {
    background: white;
    .animated {
      visibility: visible;
      opacity: 1;
      color: black;
      top: 23%;
    }
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

const Descuento = styled.div`
  background: var(--color-promo);
  padding: 20px 35px 5px;
  margin: 20px 0px;
  h2 {
    font-weight: 900;
    font-style: italic;
    font-size: 26px;
    text-align: center;
    text-transform: uppercase;
    line-height: 1.5;
    text-shadow: 0px 1px 0px #000000;
  }
  p {
    text-align: center;
    margin-top: 20px;
    font-size: 12px;
    line-height: 1.3;
  }
  @media (min-width: 768px) {
    h2 {
      font-size: 32px;
    }
  }
`;

const Promocion = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  grid-gap: 20px;
  .img-contenedor {
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
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
    padding: 15px 0px 10px;
    border: 2px solid black;
    margin: 25px auto 0px;
    text-transform: uppercase;
    line-height: 2;
    display: block;
    font-weight: 600;
    text-align: center;
    letter-spacing: 1px;
    max-width: 250px;
    transition: all 0.2s ease-in-out;
  }
  span:hover {
    background: black;
    color: white;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 500px));
    grid-template-rows: auto;
    grid-gap: 30px;
    justify-content: center;
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

const Home = ({ genero }) => {
  const size = useWindowSize();

  const { gridHome, heroHome, promocionHome, descuentoHome, marcasHome } =
    useContentHome({ genero });

  return (
    <Contenedor>
      {size.width < 768 ? (
        <>
          <Registro>
            <p className="subtitulo">asos premier party</p>
            <h2>hazte miembro por el -25% en todo mañana!</h2>
            <button>
              <span>registrarme</span>
              <span className="animated">registrarme</span>
            </button>
            <p className="footer">
              Se aplican terminos y condiciones. Solo por tiempo limitado
            </p>
          </Registro>
          <Contenido className="no-padding">
            <Hero>
              <img
                src={
                  size.width < 768
                    ? heroHome.imagenMovile
                    : heroHome.imagenDesktop
                }
                alt=""
              />

              <div className="hero-info">
                <div className="categoria">
                  <span>topman</span>
                  <span className="animated">topman</span>
                </div>
                <div className="btn">
                  <span>comprar ahora</span>
                </div>
              </div>
            </Hero>
          </Contenido>
        </>
      ) : (
        <>
          <Contenido className="no-padding">
            <Hero>
              <img
                src={
                  size.width < 768
                    ? heroHome.imagenMovile
                    : heroHome.imagenDesktop
                }
                alt=""
              />

              <div className="hero-info">
                <div className="categoria">
                  <span>topman</span>
                  <span className="animated">topman</span>
                </div>
                <div className="btn">
                  <span>comprar ahora</span>
                  <span className="animated">comprar ahora</span>
                </div>
              </div>
            </Hero>
          </Contenido>
          <Registro>
            <p className="subtitulo">asos premier party</p>
            <h2>hazte miembro por el -25% en todo mañana!</h2>
            <button>
              <span>registrarme</span>
              <span className="animated">registrarme</span>
            </button>
            <p className="footer">
              Se aplican terminos y condiciones. Solo por tiempo limitado
            </p>
          </Registro>
        </>
      )}
      <Contenido>
        <GridHome>
          {gridHome.map((item) => {
            return (
              <div key={item.id}>
                <div className="img-contenedor">
                  <img src={item.imagen} alt="" />
                </div>
                <p className="titulo">{item.titulo}</p>
                <p className="descripcion">{item.subtitulo}</p>
              </div>
            );
          })}
        </GridHome>
      </Contenido>
      <Descuento>
        <h2>{descuentoHome.descripcion}</h2>
        <p>{descuentoHome.footer}</p>
      </Descuento>
      <Contenido>
        <Promocion>
          {promocionHome.map((item) => {
            return (
              <div key={item.id}>
                <div className="img-contenedor">
                  <img src={item.imagen} alt="" />
                </div>
                <h2>{item.titulo}</h2>
                <p>{item.subtitulo}</p>
                <span>{item.boton}</span>
              </div>
            );
          })}
        </Promocion>
      </Contenido>
      <Contenido>
        <Marcas>
          <header>
            <h2>marcas que son tendencia</h2>
          </header>
          <GridMarcas>
            {marcasHome.map((marca) => {
              return (
                <div key={marca.id}>
                  <img src={marca.imagen} alt="" />
                </div>
              );
            })}
          </GridMarcas>
        </Marcas>
      </Contenido>
    </Contenedor>
  );
};

export default Home;
