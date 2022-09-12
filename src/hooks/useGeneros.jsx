import JsonData from "../data/categoriasEsp.json";

const useGeneros = () => {
  const { navigation } = JsonData;

  const contenidoHombre = navigation[0].children.filter(
    (obj) => obj.content.title == "Home" || obj.content.title == "Categories"
  );
  const contenidoMujer = navigation[1].children.filter(
    (obj) => obj.content.title == "Home" || obj.content.title == "Categories"
  );
  return { contenidoHombre, contenidoMujer };
};

export default useGeneros;
