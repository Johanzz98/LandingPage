import React from 'react';
import { List, ListItem, Box, Typography } from '@mui/material';
import Link from 'next/link';

const escritura = {
  textAlign: 'center',
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  fontWeight: 400,
  fontSize: '1rem',
  color: '#111',
  lineHeight: 1.5,
  letterSpacing: '0.00938em',
  textDecoration: 'none', // Sin subrayado por defecto
  '&:hover': {
    textDecoration: 'underline', // Subrayado al hacer hover
  },
};

function PolerasMedio() {
  return (
    <Box sx={{ padding: '14px 32px 24px', marginLeft: '-34px' }}>
      <List>
        <Link
          href="/regalos-personalizados"
          passHref
          style={{ textDecoration: 'none' }}
        >
          <ListItem sx={escritura}>Poleras para Hombre</ListItem>
        </Link>

        <Link
          href="/decoracion-de-hogar"
          passHref
          style={{ textDecoration: 'none' }}
        >
          <ListItem sx={escritura}>Poleras para Mujer</ListItem>
        </Link>

        <Link
          href="/regalos-para-el"
          passHref
          style={{ textDecoration: 'none' }}
        >
          <ListItem sx={escritura}>Poleras para Parejas</ListItem>
        </Link>

        <Link
          href="/regalos-personalizados"
          passHref
          style={{ textDecoration: 'none' }}
        >
          <ListItem sx={escritura}>Poleras Memes</ListItem>
        </Link>

        <Link
          href="/decoracion-de-hogar"
          passHref
          style={{ textDecoration: 'none' }}
        >
          <ListItem sx={escritura}>Poleras GYM</ListItem>
        </Link>

        <Link
          href="/regalos-para-el"
          passHref
          style={{ textDecoration: 'none' }}
        >
          <ListItem sx={escritura}>Poleras Randoms</ListItem>
        </Link>
      </List>
    </Box>
  );
}

export default PolerasMedio;
