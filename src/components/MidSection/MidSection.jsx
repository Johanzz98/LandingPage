import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

function MidSection() {
  const [hoveredRegaloEl, setHoveredRegaloEl] = useState(false);
  const [hoveredRegaloElla, setHoveredRegaloElla] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100vh',
        padding: 2,
      }}
    >
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          NUEVO AÑO 2025
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1" sx={{ maxWidth: '600px', margin: '0 auto' }}>
          Si puedes imaginarlo, podemos personalizarlo, perfectos para iluminar las fiestas. Descubra el regalo perfecto en nuestra seleccionada selección.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: '0 20px',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '600px',
            display: 'inline-block',
            overflow: 'hidden',
            transition: 'all 0.3s ease', // Transición suave
          }}
          onMouseEnter={() => setHoveredRegaloElla(true)}
          onMouseLeave={() => setHoveredRegaloElla(false)}
        >
          <Typography
            variant="body1"
            sx={{
              position: 'relative',
              zIndex: 1, // Aseguramos que el texto esté encima
              color: hoveredRegaloElla ? 'white' : 'inherit', // Cambiar color de texto al pasar el mouse
            }}
          >
            Regalo para ella
          </Typography>

          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'black',
              transform: hoveredRegaloElla ? 'scaleY(1)' : 'scaleY(0)', // Controlamos el tamaño del fondo
              transformOrigin: 'bottom',
              transition: 'transform 0.3s ease', // Animación del fondo
              zIndex: 0, // Fondo debajo del texto
            }}
          />
        </Box>

        <Box
          sx={{
            position: 'relative',
            maxWidth: '600px',
            display: 'inline-block',
            overflow: 'hidden',
            transition: 'all 0.3s ease', // Transición suave
            marginLeft: '24px', // Separación entre los textos
          }}
          onMouseEnter={() => setHoveredRegaloEl(true)}
          onMouseLeave={() => setHoveredRegaloEl(false)}
        >
          <Typography
            variant="body1"
            sx={{
              position: 'relative',
              zIndex: 1, // Aseguramos que el texto esté encima
              color: hoveredRegaloEl ? 'white' : 'inherit', // Cambiar color de texto al pasar el mouse
            }}
          >
            Regalo para él
          </Typography>

          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'black',
              transform: hoveredRegaloEl ? 'scaleY(1)' : 'scaleY(0)', // Controlamos el tamaño del fondo
              transformOrigin: 'bottom',
              transition: 'transform 0.3s ease', // Animación del fondo
              zIndex: 0, // Fondo debajo del texto
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default MidSection;
