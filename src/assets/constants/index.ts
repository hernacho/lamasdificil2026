import adidas from "../images/sponsors/adidas.png";
import cocaCola from "../images/sponsors/coca-cola.png";
import visa from "../images/sponsors/visa.png";
import qatar from "../images/sponsors/qatar.png";
import aramco from "../images/sponsors/aramco.png";
import hyundai from "../images/sponsors/hyundai.png";
import kia from "../images/sponsors/kia.png";
import lenovo from "../images/sponsors/lenovo.png";
import bankOfAmerica from "../images/sponsors/bank-of-america.png";
import hisense from "../images/sponsors/hisense.png";
import abInBev from "../images/sponsors/ab-in-bev.png";
import mcDonalds from "../images/sponsors/mc-donalds.png";
import mengniu from "../images/sponsors/mengniu.png";
import verizon from "../images/sponsors/verizon.png";
import unilever from "../images/sponsors/unilever.png";
import lays from "../images/sponsors/lays.png";

export const sponsors = [
  {
    id: 1,
    name: "Adidas",
    image: adidas,
  },
  {
    id: 2,
    name: "Coca-Cola",
    image: cocaCola,
  },
  {
    id: 3,
    name: "Visa",
    image: visa,
  },
  {
    id: 4,
    name: "Qatar Airways",
    image: qatar,
  },
  {
    id: 5,
    name: "Aramco",
    image: aramco,
  },
  {
    id: 6,
    name: "Hyundai",
    image: hyundai,
  },
  {
    id: 7,
    name: "Kia",
    image: kia,
  },
  {
    id: 8,
    name: "Lenovo",
    image: lenovo,
  },
  {
    id: 9,
    name: "Bank of America",
    image: bankOfAmerica,
  },
  {
    id: 10,
    name: "Hisense",
    image: hisense,
  },
  {
    id: 11,
    name: "AB InBev",
    image: abInBev,
  },
  {
    id: 12,
    name: "McDonald's",
    image: mcDonalds,
  },
  {
    id: 13,
    name: "Mengniu",
    image: mengniu,
  },
  {
    id: 14,
    name: "Verizon",
    image: verizon,
  },
  {
    id: 15,
    name: "Unilever",
    image: unilever,
  },
  {
    id: 16,
    name: "Lay's",
    image: lays,
  },
];

export const links = [
  { name: "Home", href: "/" },
  { name: "Más buscadas", href: "/#mas-buscadas" },
  { name: "Viví el mundial", href: "/#mundial" },
  { name: "Productos", href: "/#productos" },
  { name: "Sobre nosotros", href: "/nosotros#mision" },
  { name: "Contactanos", href: "/#contact" },
];

export const slidesHome = [
  {
    image: "slide-buscadas.jpg",
    text: "Pedí la que te falta",
    href: "/#mas-buscadas",
  },
  {
    image: "slide-elijo-creer.jpg",
    text: "Volvete a ilusionar",
    href: "/#elijo",
  },
  {
    image: "slide-historias.jpg",
    text: "Compartí con nosotros",
    href: "/#historias",
  },
  {
    image: "slide-whatsapp.jpg",
    text: "Te conseguimos la más difícil",
    href: "https://wa.me/5491112345678?text=Hola!%20Quiero%20hacer%20un%20pedido%20",
  },
];

export const steps = [
  {
    id: 1,
    name: "album",
    title: "Encontrá la figurita que te falta",
    desc: "¿Te falta la última figurita? ¡Acá podés conseguirla y completar tu álbum!",
  },
  {
    id: 2,
    name: "shipping",
    title: "Envío gratis",
    desc: "Realizamos envíos gratis en todo el país si tu compra es mayor a $50000",
  },
  {
    id: 3,
    name: "payment",
    title: "Elegí cómo pagar",
    desc: "Podés pagar con tarjeta, débito o transferencia en hasta 12 cuotas sin interés",
  },
];

type FooterLink = {
  label: string;
  url: string;
  name?: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

export const footerLinks: FooterSection[] = [
  {
    title: "Productos",
    links: [
      { label: "Más buscadas", url: "/#mas-buscadas" },
      { label: "Otros productos", url: "/#productos" },
    ],
  },
  {
    title: "Sobre Nosotros",
    links: [
      { label: "Nuestra misión", url: "/nosotros#mision" },
      {
        label: "Terminos y condiciones",
        url: "/nosotros#terminos-y-condiciones",
      },
      {
        label: "Preguntas frecuentes",
        url: "/nosotros#faqs",
      },
    ],
  },
  {
    title: "Contactanos",
    links: [
      {
        label: "Mandá tu Elijo creer ¡o anulá mufa!",
        url: "/contacto/opinion",
      },
      {
        label: "Enviá tu CV",
        url: "mailto:contacto@lamasdificil.com?subject=CV - Postulación",
      },
    ],
  },
  {
    title: "Redes Sociales",
    links: [
      {
        label: "Facebook",
        name: "facebook",
        url: "https://www.facebook.com",
      },
      { label: "X", name: "x", url: "https://www.x.com" },
      {
        label: "Instagram",
        name: "instagram",
        url: "https://www.instagram.com",
      },
    ],
  },
];

export const faqs = [
  {
    question: "¿Cómo sé que las figuritas son originales?",
    answer:
      "Todas nuestras figuritas son 100% originales. Trabajamos únicamente con material de primera mano y garantizamos la autenticidad de cada figurita que vendemos.",
  },
  {
    question: "¿Hacen envíos a todo el país?",
    answer:
      "Sí, enviamos a todo el territorio argentino. Los plazos y costos de envío varían según la localidad. Consultanos por WhatsApp para más información.",
  },
  {
    question: "¿Puedo devolver una figurita si ya la tengo?",
    answer:
      "No aceptamos devoluciones por duplicados. Te recomendamos revisar bien tu álbum antes de realizar la compra. Sí aceptamos cambios si la figurita llega en mal estado.",
  },
  {
    question: "¿Cómo publican las figuritas disponibles?",
    answer:
      "El stock se actualiza constantemente en nuestra web y en nuestras redes sociales. También podés consultarnos directamente si estás buscando una figurita en particular.",
  },
  {
    question: "¿Aceptan figuritas en parte de pago?",
    answer:
      "Sí, dependiendo de la figurita podemos aceptar canjes o parte de pago. Consultanos por WhatsApp con fotos de las figuritas que querés ofrecer.",
  },
  {
    question: "¿Cómo se determina el precio de una figurita difícil?",
    answer:
      "El precio depende de la rareza, la demanda y el estado de conservación de la figurita. Nos manejamos con precios de mercado y siempre buscamos ser justos con nuestros clientes.",
  },
];

export const terms = [
  {
    title: "Compras y pagos",
    content:
      "Las compras se confirman una vez acreditado el pago. Aceptamos transferencia bancaria, MercadoPago y efectivo en caso de retiro en persona.",
  },
  {
    title: "Envíos",
    content:
      "Realizamos envíos a todo el país por correo o Andreani. El costo y plazo dependen del destino. No nos hacemos responsables por demoras del servicio de correo una vez despachado el paquete.",
  },
  {
    title: "Estado de las figuritas",
    content:
      "Todas las figuritas se describen con su estado real (impecable, muy bueno, bueno). Las fotos del producto son reales.",
  },
  {
    title: "Devoluciones",
    content:
      "Aceptamos devoluciones solo si la figurita llega en un estado diferente al descripto. El reclamo debe hacerse dentro de las 48hs de recibido el pedido.",
  },
  {
    title: "Precios",
    content:
      "Los precios pueden variar según disponibilidad y demanda del mercado. El precio válido es el publicado al momento de confirmar la compra.",
  },
  {
    title: "Reservas",
    content:
      "Podés reservar una figurita por hasta 24hs. Pasado ese tiempo sin confirmación de pago, la reserva se cancela.",
  },
];
