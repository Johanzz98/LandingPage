export const itemData = [
  {
    img: '/PageTshirt/Shoes/black/black1.png', // Ruta corregida
    title: 'Breakfast',
    link: '/breakfast',
    name: 'Lv Trainer Sneakers',
    price: 9.999,
    description: 'Some text about the product..',
    talla: ['M', 'L', 'XL', 'XXL'],
  },
  {
    img: '/PageTshirt/Shoes/black/black2.png', // Ruta corregida
    title: 'Camera',
    link: '/camera',
    name: 'Nike Air Jordan',
    price: 150,
    description: 'Some text about the product..',
  },
  {
    img: '/PageTshirt/Shoes/black/black3.png', // Ruta corregida
    title: 'Camera',
    link: '/camera',
    name: 'Nike Air Jordan',
    price: 150,
    description: 'Some text about the product..',
  },
  {
    img: '/PageTshirt/Shoes/black/black.png', // Ruta corregida
    title: 'Breakfast',
    link: '/breakfast',
    name: 'Lv Trainer Sneakers',
    price: 9.999,
    description: 'Some text about the product..',
    talla: ['M', 'L', 'XL', 'XXL'],
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
