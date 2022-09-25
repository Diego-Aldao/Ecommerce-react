import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import { FiPlay } from "react-icons/fi";
import { IoMdImages } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";

const Video = styled.div`
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
  }
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
`;

const Media = styled.div`
  width: 100%;
  position: relative;
  min-height: 400px;
  span {
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
  video {
    width: 100%;
    height: 100%;
  }
`;

const Galeria = ({ media }) => {
  const [videoVisible, setVideoVisible] = useState(false);
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const tempImagenes = [];
    media.images.map((imagen) =>
      tempImagenes.push({ original: `https://${imagen.url}` })
    );
    setImagenes(tempImagenes);
  }, []);

  const handleClick = () => {
    setVideoVisible(!videoVisible);
  };

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
    <>
      <Media>
        {videoVisible ? (
          <>{video}</>
        ) : (
          <Slide>
            <ImageGallery
              items={imagenes}
              showThumbnails={false}
              showNav={false}
              showBullets={true}
              slideDuration={250}
              showFullscreenButton={false}
            />
          </Slide>
        )}
        <span>
          950 <AiFillHeart></AiFillHeart>
        </span>
      </Media>
      {media.catwalk.length >= 1 && (
        <Video onClick={handleClick}>
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
        </Video>
      )}
    </>
  );
};

export default Galeria;
