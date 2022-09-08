import { useEffect, useState } from "react";
import JsonData from "../data/categoriasEsp.json";

const useGeneros = () => {
  const { navigation } = JsonData;

  const contenidoHombre = navigation[0].children.filter(
    (obj) => obj.content.title == "Home" || obj.content.title == "Categories"
  );
  const contenidoMujer = navigation[1].children.filter(
    (obj) => obj.content.title == "Home" || obj.content.title == "Categories"
  );

  /* console.log(contenidoH);

  const botones = navigation.map((genero) => {
    return <button key={genero.id}>{genero.content.title}</button>;
  });

  const homeMovileHombre = navigation[0].children[0].children.map((child) => {
    return (
      <Item
        className="btn-home"
        key={child.id}
        background={child.content.mobileImageUrl}
      >
        <Link to="/mujer">
          <Titulo>{child.content.title}</Titulo>
        </Link>
      </Item>
    );
  });

  const contenidoM = navigation[1].children[4].children.map((categoria) => {
    return (
      <Item key={categoria.id} background={categoria.content.mobileImageUrl}>
        <Link to="/mujer">
          {categoria.content.subTitle ? (
            <>
              <Titulo className="compartido">{categoria.content.title}</Titulo>
              <Titulo className="compartido">
                {categoria.content.subTitle}
              </Titulo>
            </>
          ) : (
            <Titulo>{categoria.content.title}</Titulo>
          )}
        </Link>
      </Item>
    );
  });
/*   useEffect(() => {
    setContenidoHombre(filterHombre);
       setBotonesGenero(botones);
    setHomeHombre(homeMovileHombre);
    setContenidoMujer(contenidoM);
  }, [setContenidoHombre]); */
  return { contenidoHombre, contenidoMujer };
};

export default useGeneros;
