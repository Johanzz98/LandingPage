import { Box } from '@mui/material';
import React from 'react';

export default function Banner() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh', // Hace que el contenedor tenga el tamaño completo de la ventana
        backgroundImage:
          'url("https://images.pexels.com/photos/9594428/pexels-photo-9594428.jpeg")', // URL de la imagen de fondo
        backgroundSize: 'cover', // Asegura que la imagen cubra todo el contenedor
        backgroundPosition: 'center', // Centra la imagen en el contenedor
        display: 'flex',
        justifyContent: 'center', // Centra el contenido horizontalmente
        alignItems: 'center', // Centra el contenido verticalmente
        color: 'white', // Color del texto sobre la imagen
        textAlign: 'center', // Alineación del texto en el centro
      }}
    >
      {/* Aquí puedes agregar el contenido que desees sobre la imagen */}
      <h1>Bienvenido a nuestra página</h1>
    </Box>
  );
}
