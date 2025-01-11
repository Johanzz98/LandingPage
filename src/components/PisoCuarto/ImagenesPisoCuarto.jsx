// components/Imagenes.js
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid2, Box } from '@mui/material';

const ImagenesPisoCuarto = () => {
  const cards = [
    { src: "/PisoCuarto/Carta.png", text: "Imagen 1" },
    { src: "/PisoCuarto/CartaDorada.png", text: "Imagen 2" },
    { src: "/PisoCuarto/Poster.png", text: "Imagen 3" },
    { src: "/PisoCuarto/Sticker.png", text: "Imagen 4" },
    { src: "/PisoCuarto/Papel.png", text: "Imagen 5" },
  
    { src: "/PisoCuarto/Taza.png", text: "Imagen 7" },
    { src: "/PisoCuarto/TShirt.png", text: "Imagen 8" },
  ];

  const cardMediaStyle = {
    width: "260px",
    height:'100%',
    boxShadow:'none',   
    border:'none',

  };

  const cardStyle = {
    width: "100%",
    margin: "0 auto 24px",
    border:'none',
    boxShadow:0,
    textAlign: "center",
    fontFamily: "arial",
    transition: "transform 0.6s ease",
  };


  const Titulo = {
    fontSize: '24px',
    display: 'flex',  // Make the container a flexbox
    justifyContent: 'flex-start',  // Align the title to the start
    width: '100%',  // Ensure it takes full width of the container
    marginTop:'54px',
  };
  return (
    <Grid2 
      container 
      spacing={2}
      justifyContent="center"
      alignItems="stretch"
      sx={{ 
        height: '100%', 
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box>
        <Typography sx={Titulo}> Productos para todos tus momentos</Typography>
      </Box>

      <Grid2 container xs={12} spacing={2} justifyContent="center">
        {cards.slice(0, 4).map((card, index) => (
          <Grid2 key={index} xs={6}>
            <Card sx={cardStyle}>
              <CardMedia
                component="img"
                alt={card.text}
                image={card.src}
                
                sx={cardMediaStyle}
              />
              <CardContent>
                <Typography variant="h6">{card.text}</Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      <Grid2 container xs={12} spacing={2} justifyContent="center">
        {cards.slice(3).map((card, index) => (
          <Grid2 key={index} xs={4}>
            <Card sx={cardStyle}>
              <CardMedia
                component="img"
                alt={card.text}
                image={card.src}
                sx={cardMediaStyle}
              />
              <CardContent>
                <Typography variant="h6">{card.text}</Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Grid2>
  );
};

export default ImagenesPisoCuarto;
