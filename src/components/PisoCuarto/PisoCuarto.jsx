import { Box, Typography } from '@mui/material';
import React from 'react';
import ImagenesPisoCuarto from './ImagenesPisoCuarto';

const PisoCuarto = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '64px',
        textAlign: 'center',
      }}
    >
      <Typography sx={{ fontSize: '32px', marginBottom: '12px' }}>
        ¡Te damos la bienvenida a Publicidad Sucre Creativa!
      </Typography>
      <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>
        Contactanos para personalizar tu experiencia{' '}
        <a
          href="https://wa.me/11234567890"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'green', textDecoration: 'none' }}
        >
          Aquí
        </a>
      </Typography>
      <Box>
        <ImagenesPisoCuarto />
      </Box>
      <Box
        sx={{
          backgroundColor: '#ffffff33',
          padding: '12px 24px',
          cursor: 'pointer',
          marginBottom: '64px',
          position: 'relative', // Necesario para el pseudo-elemento

          '&:before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            border: '1px solid #000',
            borderRadius: '24px', // Asegura que el borde tenga bordes redondeados
            transform: 'scale(1)', // El borde comienza en su tamaño normal
            transition: 'transform 0.5s cubic-bezier(.39,.575,.565,1)', // Animación del borde hacia adentro
          },
          '&:hover': {
            backgroundColor: '#ffffff66', // Cambio de color de fondo al pasar el mouse
            color: '#000', // Cambio de color del texto
          },
          '&:hover:before': {
            transform: 'scale(0.95)', // El borde parece crecer hacia adentro
          },
        }}
      >
        <Typography>Discover the Selection</Typography>
      </Box>
    </Box>
  );
};

export default PisoCuarto;
