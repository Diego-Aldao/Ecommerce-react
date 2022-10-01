import { useEffect } from "react";
import { useContext } from "react";
import LinksContext from "../context/LinksContext";

const useLink = ({
  categorias,
  top1 = "Topshop",
  top2 = "Topman",
  novedad = "VER POR PRODUCTO",
}) => {
  const { links, setLinks } = useContext(LinksContext);

  useEffect(() => {
    if (categorias) {
      const linkTopshop = categorias
        .filter(
          (categoria) =>
            categoria.content.title === top1 || categoria.content.title === top2
        )[0]
        .children.filter((child) => child.content.title === novedad)[0]
        .children[0].link.webUrl;

      setLinks(linkTopshop);
    }
  }, [categorias]);

  return { links };
};

export default useLink;
