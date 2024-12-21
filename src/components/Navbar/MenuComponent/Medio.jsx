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

function Medio() {
  return (
    <Box sx={{padding: '14px 32px 24px',  }}>
      <List>
        <Link href="/regalos-personalizados" passHref style={{ textDecoration: 'none' }}>
          <ListItem sx={escritura}>
            Regalos Personalizados1
          </ListItem>
        </Link>

        <Link href="/decoracion-de-hogar" passHref style={{ textDecoration: 'none' }}>
          <ListItem sx={escritura}>
            Decoración de hogar
          </ListItem>
        </Link>

        <Link href="/regalos-para-el" passHref style={{ textDecoration: 'none' }}>
          <ListItem sx={escritura}>
            Regalos para él
          </ListItem>
        </Link>

        <Link href="/regalos-personalizados" passHref style={{ textDecoration: 'none' }}>
          <ListItem sx={escritura}>
            Regalos para ella
          </ListItem>
        </Link>

        <Link href="/decoracion-de-hogar" passHref style={{ textDecoration: 'none' }}>
          <ListItem sx={escritura}>
            Regalo para padres
          </ListItem>
        </Link>

        <Link href="/regalos-para-el" passHref style={{ textDecoration: 'none' }}>
          <ListItem sx={escritura}>
            Regalos para madre
          </ListItem>
        </Link>
      </List>
    </Box>
  );
}

export default Medio;
