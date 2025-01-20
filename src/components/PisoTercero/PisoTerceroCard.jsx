import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

// Estilos
const cardStyle = {
  width: '100%',
  margin: '0 auto 24px',
  border: 'none',
  boxShadow: 0,
  textAlign: 'center',
  fontFamily: 'arial',
  transition: 'transform 0.6s ease',
};

const cardStyle2 = {
  width: '100%',
  margin: '0 auto 12px',
  textAlign: 'center',
  fontFamily: 'arial',
  borderRadius: '12px',
  boxShadow: '0',
  transition: 'transform 0.6s ease',
  position: 'relative',
};

const mediaStyle = {
  height: '500px',
  width: '100%',
  boxShadow: 'none',
  marginTop: '-6px',
  objectFit: 'contain',
};

const smallMediaStyle = {
  height: '100%',
  width: '100%',
  objectFit: 'cover',
};

const priceStyle = {
  color: '#111',
  fontSize: '16px',
  fontWeight: '500',
  display: 'flex',
  justifyContent: 'center', // Centrado del precio
  fontFamily: 'Helvetica, sans-serif',
};

const NombreProducto = {
  fontSize: '16px',

  color: '#111',
  marginBottom: '6px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Helvetica, sans-serif',
  fontOpticalSizing: 'auto',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  cursor: 'pointer', // Para hacer el texto interactivo
  transition: 'text-decoration 0.3s ease', // Para un suave efecto de transición
  '&:hover': {
    textDecoration: 'underline', // Subraya el texto cuando el mouse pasa por encima
  },
};

const productContainerStyle = {
  margin: '0 10px',
};

// Componente principal
export default function PisoTerceroCard(props) {
  const isSmallScreen = useMediaQuery('(max-width:800px)');

  return (
    <Box style={productContainerStyle}>
      {/* Tarjeta principal */}
      <Card sx={isSmallScreen ? cardStyle2 : cardStyle}>
        <div style={{ position: 'relative' }}>
          {/* Imagen del producto */}
          <CardMedia
            component="img"
            image={props.item.img} // Usar img en lugar de imageurl
            alt="product image"
            sx={isSmallScreen ? smallMediaStyle : mediaStyle}
          />

          {/* Contenido para pantallas pequeñas */}
          {isSmallScreen ? (
            <CardContent>
              <Typography variant="h5" component="h2">
                {props.item.name}
              </Typography>
              {/* Precio debajo del nombre */}
              <Typography sx={priceStyle}>${props.item.price}</Typography>
              <Typography
                sx={{ ...descriptionStyle, color: 'orange' }}
                variant="body2"
                color="text.secondary"
              >
                {props.item.description}
              </Typography>
            </CardContent>
          ) : (
            // Contenido para pantallas grandes
            <>
              <CardContent>
                <Typography sx={NombreProducto}>{props.item.name}</Typography>
                {/* Precio debajo del nombre */}
                <Typography sx={priceStyle}>${props.item.price}</Typography>
              </CardContent>
            </>
          )}

          {/* Icono de favorito */}
          <Box
            style={{
              position: 'absolute',
              top: 12,
              right: 46,
            }}
          >
            <FavoriteBorderOutlinedIcon
              sx={{ color: '#f73378', fontSize: '20px' }}
            />
          </Box>
        </div>
      </Card>
    </Box>
  );
}
