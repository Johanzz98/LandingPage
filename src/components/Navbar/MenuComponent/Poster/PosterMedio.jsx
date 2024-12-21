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

function PosterMedio() {
  return (
    <Box sx={{padding: '14px 32px 24px', marginLeft:'-46px'  }}>
      <List>
        <Link href="/regalos-personalizados" passHref style={{ textDecoration: 'none' }}>
          <ListItem sx={escritura}>
            Póster de viajes
          </ListItem>
        </Link>

        <Link href="/decoracion-de-hogar" passHref style={{ textDecoration: 'none' }}>
          <ListItem sx={escritura}>
            Póster de boda
          </ListItem>
        </Link>

        <Link href="/regalos-para-el" passHref style={{ textDecoration: 'none' }}>
          <ListItem sx={escritura}>
            Póster geométricos
          </ListItem>
        </Link>

        <Link href="/regalos-personalizados" passHref style={{ textDecoration: 'none' }}>
          <ListItem sx={escritura}>
            Póster fotográficas
          </ListItem>
        </Link>

        <Link href="/decoracion-de-hogar" passHref style={{ textDecoration: 'none' }}>
          <ListItem sx={escritura}>
            Póster Art Dog
          </ListItem>
        </Link>

        <Link href="/regalos-para-el" passHref style={{ textDecoration: 'none' }}>
          <ListItem sx={escritura}>
            Poster para familia
          </ListItem>
        </Link>
      </List>
    </Box>
  );
}

export default PosterMedio;
