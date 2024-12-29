export const itemData = [
  {
    img: '/PisoTercero/Camisa.jpg',
    title: 'Breakfast',
    link: '/breakfast',
    name: "Poleras Personalizadas 100% Algodon",
    price: 9.999,
    description: "Some text about the product..",
    talla: ["M", "L", "XL", "XXL"],
  },
  {
    img: '/PisoTercero/Carcasa.jpg',
    title: 'Burger',
    link: '/burger'
  },
  {
    img: '/PisoTercero/Cartuchera.jpg',
    title: 'Camera',
    link: '/camera'
  },
  {
    img: '/PisoTercero/Chapas.jpg',
    title: 'Camera',
    link: '/camera'
  },
  {
    img: '/PisoTercero/Metalico.jpg',
    title: 'Camera',
    link: '/camera'
  },
 
  {
    img: '/PisoTercero/Spotify.jpg',
    title: 'Camera',
    link: '/camera'
  },
  {
    img: '/PisoTercero/Tazas.jpg',
    title: 'Camera',
    link: '/camera'
  },
];


export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    paritialVisibilityGutter: 60, // Used only for partial visibility of items
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
