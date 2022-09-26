import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import { FiPlay } from "react-icons/fi";
import { IoMdImages } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
import { useRef } from "react";

const Media = styled.div`
  width: 100%;
  @media (min-width: 720px) {
    flex: 1 1 65%;
    padding: 20px 30px 0px 10px;
    position: relative;
  }
`;

const BotonMedia = styled.div`
  width: 100%;
  padding: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  background: #eee;
  svg {
    font-size: 22px;
    margin-right: 5px;
  }
  span {
    padding-top: 5px;
    border-bottom: 2px solid black;
  }
  @media (min-width: 720px) {
    display: none;
    &.video-thumbnail {
      display: flex;
      background: none;
      padding: 0px;
      flex-direction: column;
      svg {
        margin-right: 0;
      }
      span {
        margin: 10px 0px 0px;
        padding: 0px;
        font-size: 10px;
      }
    }
  }
`;

const Thumbnails = styled.div`
  flex: 1 1 20%;
  display: none;
  @media (min-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      width: 55px;
      height: 70px;
      margin-bottom: 20px;
    }
  }
`;

const ContenedorMedia = styled.div`
  position: relative;
  width: 100%;
  @media (min-width: 720px) {
    display: flex;
    position: sticky;
    left: 0;
    top: 0px;
  }

  .likes {
    content: "";
    width: 80px;
    height: 28px;
    border-radius: 20px 0px 0px 20px;
    background: black;
    position: absolute;
    top: 20px;
    right: 0px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin-left: 5px;
      margin-top: -2px;
    }
  }
  .contenedor-video {
    width: 100%;
    min-height: 400px;
    height: 100%;
    video {
      width: 100%;
      height: 100%;
    }
  }
  .slide {
    width: 100%;
    height: 100%;
    min-height: 410px;
    img {
      object-fit: fill;
      max-height: 100% !important;
    }
  }
`;

const Galeria = ({ media }) => {
  const ref = useRef();
  const [videoVisible, setVideoVisible] = useState(false);
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const tempImagenes = [];
    media.images.map((imagen) =>
      tempImagenes.push({
        original: `https://${imagen.url}`,
      })
    );
    setImagenes(tempImagenes);
  }, []);

  const handleClick = () => {
    setVideoVisible(!videoVisible);
  };

  const handleIndex = (index) => {
    ref.current.slideToIndex(index);
  };

  const thumbnails = imagenes.map((imagen, index) => {
    return (
      <div
        key={imagen.original}
        onClick={() => {
          handleIndex(index);
        }}
      >
        <img src={imagen.original} alt="" />
      </div>
    );
  });

  const video = media.catwalk.map((video) => {
    return (
      <video autoPlay muted controls loop key={video.url}>
        {/*Cambiar src al video url con el fetch */}
        <source
          src="https://video.asos-media.com/products/ASOS/_media_/b9a/b9afe1d7-13d5-4077-bd71-e9c30d881e5f.mp4"
          type="video/mp4"
        />
      </video>
    );
  });
  return (
    <Media>
      <ContenedorMedia>
        <Thumbnails>
          {thumbnails}
          <BotonMedia className="video-thumbnail" onClick={handleClick}>
            {videoVisible ? (
              <>
                <IoMdImages></IoMdImages>
                <span>imagenes</span>
              </>
            ) : (
              <>
                <FiPlay></FiPlay>
                <span>video</span>
              </>
            )}
          </BotonMedia>
        </Thumbnails>
        {videoVisible ? (
          <div className="contenedor-video">{video}</div>
        ) : (
          <div className="slide">
            <ImageGallery
              items={imagenes}
              showThumbnails={false}
              showNav={false}
              showBullets={true}
              slideDuration={250}
              showFullscreenButton={false}
              ref={ref}
            />
          </div>
        )}
        <span className="likes">
          950 <AiFillHeart></AiFillHeart>
        </span>
        {media.catwalk.length >= 1 && (
          <BotonMedia onClick={handleClick}>
            {videoVisible ? (
              <>
                <IoMdImages></IoMdImages>
                <span>imagenes</span>
              </>
            ) : (
              <>
                <FiPlay></FiPlay>
                <span>video</span>
              </>
            )}
          </BotonMedia>
        )}
      </ContenedorMedia>
    </Media>
  );
};

export default Galeria;
