import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';

const itemData = [
  {
    img: '1.jpg',
    title: 'Breakfast',
    link: '/breakfast'
  },
  {
    img: '2.jpg',
    title: 'Burger',
    link: '/burger'
  },
  {
    img: '3.jpg',
    title: 'Camera',
    link: '/camera'
  },
  {
    img: '4.jpg',
    title: 'Camera',
    link: '/camera'
  },
  {
    img: '5.jpg',
    title: 'Camera',
    link: '/camera'
  },
  {
    img: '6.jpg',
    title: 'Camera',
    link: '/camera'
  },
  
  
];

const card = {
  border: 'none',
  width: '100%', 
  boxShadow:'none',
  borderRadius:'0',
};

const cardMedia = {
  height: 220,
};
const escritura = {
  textAlign: 'center',
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  fontWeight: 400,
  fontSize: "1rem",
  color: '#111',
  lineHeight: 1.5,

  letterSpacing: "0.00938em",
  textDecoration: 'none',  // Sin subrayado por defecto
  '&:hover': {
    textDecoration: 'underline',  // Subrayado al hacer hover
  },
};

const cardContent={
  padding:0,
  cursor:'pointer',
  '&:hover': {
    textDecoration: 'underline',  // Subrayado al hacer hover
  },
}
export default function TazasMedia() {
  return (
    <Grid container spacing={0.2}> {/* Espaciado entre las columnas */}
      {itemData.map((item) => (
        <Grid item xs={12} sm={4} md={4} key={item.img}> {/* 4 columnas en pantallas más grandes */}
          <Card sx={card}>
            <Link href={item.link} passHref>
              <CardMedia
                component="img"
                src={`/cup/${item.img}`}
                alt={item.title}
                loading="lazy"
                sx={cardMedia}
              />
            </Link>
            <CardContent sx={cardContent}>
              <Typography sx={escritura}>
                {item.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
