import React from 'react';
import { List, ListItem, Box, Typography } from '@mui/material';
import Link from 'next/link';

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

function TazasMedio() {
  return (
    <Box sx={{padding: '14px 32px 24px', marginLeft:'-12px'  }}>
      <List>
        <Link href="/regalos-personalizados" passHref style={{ textDecoration: 'none' }}>
          <ListItem sx={escritura}>
            Tazas de café
          </ListItem>
        </Link>

        <Link href="/decoracion-de-hogar" passHref style={{ textDecoration: 'none' }}>
          <ListItem sx={escritura}>
            Tazas de viajes y termos
          </ListItem>
        </Link>

        <Link href="/regalos-para-el" passHref style={{ textDecoration: 'none' }}>
          <ListItem sx={escritura}>
            Tazas para parejas
          </ListItem>
        </Link>

        <Link href="/regalos-personalizados" passHref style={{ textDecoration: 'none' }}>
          <ListItem sx={escritura}>
            Taza para Medicos
          </ListItem>
        </Link>

        <Link href="/decoracion-de-hogar" passHref style={{ textDecoration: 'none' }}>
          <ListItem sx={escritura}>
            Feministas
          </ListItem>
        </Link>

        <Link href="/regalos-para-el" passHref style={{ textDecoration: 'none' }}>
          <ListItem sx={escritura}>
            Iniciales
          </ListItem>
        </Link>
      </List>
    </Box>
  );
}

export default TazasMedio;
