import React, { useState } from 'react';
import { Box, CardContent, Grid, Hidden, Typography } from '@mui/material';
import Link from 'next/link'; // Importa el componente Link de Next.js

const setMidIz = {
  fontFamily: 'Nunito Sans, sans-serif',
  fontOpticalSizing: 'auto',
  fontWeight: 600,
  textAlign: 'center',
  fontSize: '24px',
  fontStyle: 'normal',
  fontVariationSettings: '"wdth" 125, "YTLC" 540',
  marginTop: '8px',
};

export default function LastPhoto() {
  // Cambié el estado a tres, uno para cada texto
  const [hoveredContactanos, setHoveredContactanos] = useState(false);
  const [hoveredRegalos, setHoveredRegalos] = useState(false);
  const [hoveredExplore, setHoveredExplore] = useState(false);

  const titulo = {
    fontFamily: 'Nunito Sans, sans-serif',
    fontWeight: 600,
    textAlign: 'center',
    fontSize: '32px',
    color: '#111',
    padding: '0 0 16px',
  };

  const subtitle = {
    fontFamily: 'Nunito Sans, sans-serif',
    fontWeight: 500,
    textAlign: 'center',
    fontSize: '16px',
    color: '#767676;',
    width: '38%',
    marginBottom: '24px',
  };

  const boxStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  const tituloDown = {
    fontFamily: 'Nunito Sans, sans-serif',
    fontWeight: 600,
    textAlign: 'center',
    fontSize: '16px',
    color: '#000;',

    marginBottom: '24px',
  };

  const contactos = {
    position: 'relative',
    zIndex: 1, // Aseguramos que el texto esté encima
    color: hoveredContactanos ? 'white' : '#111', // Cambiar color de texto al pasar el mouse
    display: 'flex',
    alignItems: 'center', // Asegura que el texto esté centrado verticalmente
    justifyContent: 'center', // Asegura que el texto esté centrado horizontalmente
    marginTop: '6px',
    fontFamily: 'Nunito Sans, sans-serif',
    fontWeight: '500',
    cursor: 'pointer', // Cursor pointer
    textDecoration: 'underline',
  };
  const regalos = {
    position: 'relative',
    zIndex: 1, // Aseguramos que el texto esté encima
    color: hoveredRegalos ? 'white' : '#111', // Cambiar color de texto al pasar el mouse
    display: 'flex',
    alignItems: 'center', // Asegura que el texto esté centrado verticalmente
    justifyContent: 'center', // Asegura que el texto esté centrado horizontalmente
    marginTop: '6px',
    fontFamily: 'Nunito Sans, sans-serif',
    fontWeight: '500',
    cursor: 'pointer', // Cursor pointer
    textDecoration: 'underline',
  };

  const explore = {
    fontFamily: 'Nunito Sans, sans-serif',
    fontWeight: '500',
    position: 'relative',
    zIndex: 1, // Aseguramos que el texto esté encima
    color: hoveredExplore ? 'white' : '#111', // Cambiar color de texto al pasar el mouse
    display: 'flex',
    alignItems: 'center', // Asegura que el texto esté centrado verticalmente
    justifyContent: 'center', // Asegura que el texto esté centrado horizontalmente
    marginTop: '6px',
    cursor: 'pointer', // Cursor pointer
    textDecoration: 'underline',
  };
  return (
    <Box sx={{ marginBottom: '100px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginTop: '64px',
        }}
      >
        <Typography sx={titulo}>Louise Vuitton Services</Typography>
        <Typography sx={subtitle}>
          Louis Vuitton offers complementary wrapping on all orders, carefully
          packaged in the Maison's iconic boxes.
        </Typography>
      </Box>

      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {/* Pantallas grandes */}
        <Hidden mdDown>
          <Grid item xs={12} sm={4}>
            <Box sx={{ position: 'relative' }}>
              <CardContent>
                <img
                  srcSet="https://cdn.media.amplience.net/i/spreadshirt/2024-12_NA_categories_caps-NY?fmt=auto"
                  loading="lazy"
                  alt="Image 1"
                  style={{
                    width: '100%',
                    maxHeight: '600px',
                    objectFit: 'contain',
                  }}
                />
              </CardContent>
              <Box sx={boxStyles}>
                <Typography sx={tituloDown}>Servicios</Typography>
              </Box>
              {/* Contactanos */}
              <Box
                sx={{
                  ...boxStyles,
                  transition: 'all 0.3s ease', // Transición suave
                }}
                onMouseEnter={() => setHoveredContactanos(true)}
                onMouseLeave={() => setHoveredContactanos(false)}
              >
                <Link href="/contactus" passHref>
                  <Typography sx={contactos}>Contactanos</Typography>

                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: '123px', // Cambia esta propiedad según lo necesites
                      width: '50%',
                      height: '4%',
                      backgroundColor: 'black',
                      transform: hoveredContactanos ? 'scaleY(1)' : 'scaleY(0)', // Controlamos el tamaño del fondo
                      transformOrigin: 'bottom',
                      transition: 'transform 0.3s ease', // Animación del fondo
                      zIndex: 0, // Fondo debajo del texto
                    }}
                  />
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Segunda imagen */}
          <Grid item xs={12} sm={4}>
            <CardContent>
              <img
                src="https://cdn.media.amplience.net/i/spreadshirt/new-2025-Vday-EU-CYOFocus-Tile2?fmt=auto"
                loading="lazy"
                alt="Image 2"
                style={{
                  width: '100%',
                  maxHeight: '600px',
                  objectFit: 'contain',
                }}
              />
            </CardContent>
            <Box sx={boxStyles}>
              <Typography sx={tituloDown}>El arte del regalo</Typography>
              <Box
                sx={{
                  ...boxStyles,
                  transition: 'all 0.3s ease', // Transición suave
                  position: 'relative',
                }}
                onMouseEnter={() => setHoveredRegalos(true)}
                onMouseLeave={() => setHoveredRegalos(false)}
              >
                <Link href="/gifts" passHref>
                  <Typography sx={regalos}>Regalos</Typography>

                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: -105, // Fondo cubre todo el ancho
                      width: '450%',
                      height: '100%', // Ajusta la altura si es necesario
                      backgroundColor: 'black',
                      transform: hoveredRegalos ? 'scaleY(1)' : 'scaleY(0)', // Controlamos el tamaño del fondo
                      transformOrigin: 'bottom',
                      transition: 'transform 0.3s ease',
                      zIndex: 0, // Fondo debajo del texto
                    }}
                  />
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Tercera imagen */}
          <Grid item xs={12} sm={4}>
            <CardContent>
              <img
                srcSet="https://cdn.media.amplience.net/i/spreadshirt/new-2025-Vday-NA-MPFocus-Tile5_1?fmt=auto"
                loading="lazy"
                alt="Image 3"
                style={{ width: '100%', maxHeight: '600px', objectFit: 'fill' }}
              />
            </CardContent>
            <Box sx={boxStyles}>
              <Typography sx={tituloDown}>Personalizacion</Typography>
              {/* Explore */}
              <Box
                sx={{
                  ...boxStyles,
                  transition: 'all 0.3s ease', // Transición suave
                  position: 'relative',
                }}
                onMouseEnter={() => setHoveredExplore(true)}
                onMouseLeave={() => setHoveredExplore(false)}
              >
                <Link href="/explore" passHref>
                  <Typography sx={explore}>Explore</Typography>

                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: -95.5, // Fondo cubre todo el ancho
                      width: '450%',
                      height: '100%', // Ajusta la altura si es necesario
                      backgroundColor: 'black',
                      transform: hoveredExplore ? 'scaleY(1)' : 'scaleY(0)', // Controlamos el tamaño del fondo
                      transformOrigin: 'bottom',
                      transition: 'transform 0.3s ease',
                      zIndex: 0, // Fondo debajo del texto
                    }}
                  />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Hidden>

        {/* Pantallas pequeñas */}
        <Hidden smUp>
          <Grid item xs={12} sm={6}>
            <Box>
              <CardContent>
                <img
                  srcSet="https://cdn.media.amplience.net/i/spreadshirt/2024-12_NA_categories_caps-NY?fmt=auto"
                  loading="lazy"
                  alt="Image 1"
                  style={{
                    width: '100%',
                    maxHeight: '600px',
                    objectFit: 'contain',
                  }}
                />
              </CardContent>
            </Box>
            <Box>
              <CardContent>
                <img
                  srcSet="https://i.pinimg.com/564x/9c/45/9b/9c459b4e11dee487885c2ae182fb8f4b.jpg"
                  loading="lazy"
                  alt="Image 2"
                  style={{
                    width: '100%',
                    maxHeight: '600px',
                    objectFit: 'contain',
                  }}
                />
              </CardContent>
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  );
}
