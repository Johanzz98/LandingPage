import React from 'react';
import { List, ListItem, Box } from '@mui/material';

const escritura = {
  textAlign: 'center',
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  fontWeight: 400,
  fontSize: "1rem",
  color: '#111',
  lineHeight: 1.5,
  letterSpacing: "0.00938em",
  textDecoration: 'none',
  cursor:'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
  padding: '12px 0',
  whiteSpace: 'nowrap',  // Evita que el texto se divida en dos líneas
};

const MenuComponent = ({ onSelectMenu }) => {
  return (
    <Box sx={{ padding: '16px 2px 24px', width: '50%' }}>
      <List>
        {/* Menú con todas las opciones disponibles */}
        <ListItem sx={escritura} onClick={() => onSelectMenu('regalos')}>Regalos</ListItem>
        <ListItem sx={escritura} onClick={() => onSelectMenu('tazas')}>Tazas</ListItem>
        <ListItem sx={escritura} onClick={() => onSelectMenu('poster')}>Poster</ListItem>
        <ListItem sx={escritura} onClick={() => onSelectMenu('stickers')}>Stickers</ListItem>
        
        <ListItem sx={escritura} onClick={() => onSelectMenu('tarjetas')}>Tarjetas de visita</ListItem>
        <ListItem sx={escritura} onClick={() => onSelectMenu('poleras')}>Poleras</ListItem>
        {/* Puedes seguir agregando más elementos al menú según sea necesario */}
      </List>
    </Box>
  );
};

export default MenuComponent;
