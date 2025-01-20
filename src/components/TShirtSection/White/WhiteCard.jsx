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

  borderRadius: '0',
  border: 'none',
  boxShadow: 0,
};

const cardStyle2 = {
  width: '100%',
  textAlign: 'center',
  fontFamily: 'arial',
  borderRadius: '12px',
  boxShadow: '0',
  transition: 'transform 0.6s ease',
  position: 'relative',
  margin: 0, // Eliminar márgenes
};

const mediaStyle = {
  height: '100%',
  width: '100%',
  boxShadow: 'none',
  objectFit: 'cover',
};

const smallMediaStyle = {
  height: '100%',
  width: '100%',
  objectFit: 'cover',
};

const priceStyle = {
  color: '#111', // Blanco para que resalte sobre la imagen
  fontSize: '12px',
  fontWeight: '500',
  fontFamily: 'Helvetica, sans-serif',
};

const NombreProducto = {
  fontSize: '12px',
  color: '#111', // Blanco para que resalte sobre la imagen
  fontFamily: 'Helvetica, sans-serif',
};

const productContainerStyle = {
  position: 'relative', // Asegura que los elementos dentro puedan ser posicionados sobre la imagen
  display: 'inline-block', // Muestra los elementos en línea, sin espacio entre ellos
  padding: 0, // Eliminar padding
  margin: 0, // Eliminar margin
};

const overlayStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  padding: '10px', // Espaciado para que los elementos no se toquen
  display: 'flex', // Alineación horizontal
  justifyContent: 'flex-start', // Alinear a la izquierda
  alignItems: 'center', // Alinear verticalmente en el centro
  backgroundColor: '#e6e6e6',
};

const itemContentStyle = {
  margin: '0px 0px -6px',
  padding: '12px',
  width: '100%',
  display: 'flex', // Alineación horizontal
  justifyContent: 'space-between', // Espacio entre el nombre y el precio
  alignItems: 'center', // Alineación vertical al centro
};

const descriptionStyle = {
  fontSize: '14px',
  color: '#fff',
};

export default function WhiteCard(props) {
  const isSmallScreen = useMediaQuery('(max-width:800px)');

  return (
    <Box style={productContainerStyle}>
      {/* Tarjeta principal */}
      <Card sx={isSmallScreen ? cardStyle2 : cardStyle}>
        <Box style={{ position: 'relative' }}>
          {/* Imagen del producto */}
          <CardMedia
            component="img"
            image={props.item.img} // Usar img en lugar de imageurl
            alt="product image"
            sx={isSmallScreen ? smallMediaStyle : mediaStyle}
          />

          {/* Contenido (precio y nombre) sobre la imagen */}
          <CardContent sx={{ backgroundColor: '#f7f7f7' }}>
            <Box style={overlayStyle}>
              <Box style={itemContentStyle}>
                {/* Nombre del producto */}
                <Typography sx={NombreProducto}>{props.item.name}</Typography>
                {/* Precio */}
                <Typography sx={priceStyle}>${props.item.price}</Typography>
              </Box>
            </Box>
          </CardContent>
          {/* Contenido para pantallas pequeñas */}
          {isSmallScreen && (
            <CardContent>
              <Typography
                sx={descriptionStyle}
                variant="body2"
                color="text.secondary"
              >
                {props.item.description}
              </Typography>
            </CardContent>
          )}
        </Box>
      </Card>
    </Box>
  );
}
