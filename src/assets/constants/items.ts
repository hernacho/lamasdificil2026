import albumBall from "../images/products/album-ball.jpg";
import albumGold from "../images/products/album-gold.webp";
import albumHardcover from "../images/products/album-hardcover.webp";
import albumSilver from "../images/products/album-silver.webp";
import albumSoftcover from "../images/products/album-softcover.webp";
import stickers10 from "../images/products/stickers-10.webp";
import stickers25 from "../images/products/stickers-25.webp";
import stickersBox from "../images/products/stickers-box.webp";
import stickersRares from "../images/products/stickers-rares.webp";

export const items = [
  {
    id: 1,
    name: "Álbum + Pelota",
    desc: "Con la compra del álbum llevate la pelota oficial del torneo.",
    price: 7000.0,
    image: albumBall,
  },
  {
    id: 2,
    name: "Álbum Edición Oro",
    desc: "Pieza de colección exclusiva con detalles dorados en relieve en la portada.",
    price: 15000.0,
    image: albumGold,
  },
  {
    id: 3,
    name: "Álbum Tapa Dura",
    desc: "Álbum oficial en versión Hardcover para máxima durabilidad y conservación.",
    price: 12000.0,
    image: albumHardcover,
  },
  {
    id: 4,
    name: "Álbum Edición Plata",
    desc: "Variante alternativa de colección con acabados plateados brillantes.",
    price: 6500.0,
    image: albumSilver,
  },
  {
    id: 5,
    name: "Álbum Tapa Blanda",
    desc: "El clásico álbum oficial en su formato tradicional de revista flexible.",
    price: 4000.0,
    image: albumSoftcover,
  },
  {
    id: 6,
    name: "Pack de 10 Sobres",
    desc: "Combo inicial con 10 sobres oficiales que contienen 7 figuritas cada uno.",
    price: 10000.0,
    image: stickers10,
  },
  {
    id: 7,
    name: "Pack de 25 Sobres",
    desc: "Set de ahorro con 25 sobres cerrados para avanzar rápido en tu colección.",
    price: 24000.0,
    image: stickers25,
  },
  {
    id: 8,
    name: "Caja Completa de Sobres",
    desc: "Display Box sellado de fábrica con 100 sobres oficiales de Panini.",
    price: 95000.0,
    image: stickersBox,
  },
  {
    id: 9,
    name: "Las más buscadas",
    desc: "Conseguí la figurita que te falta. Incluye jugadores difíciles y escudos brillantes.",
    image: stickersRares,
    link: "/#mas-buscadas",
  },
];
