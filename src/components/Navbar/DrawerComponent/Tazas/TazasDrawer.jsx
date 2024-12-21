import React from 'react';
import { List, ListItem, Box, IconButton, Divider, Typography } from '@mui/material';
import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';
import LogoSVG from '../../../../../public/SVG/DolceGabanna/dolce';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const contact = {
  textAlign: 'center',
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: 1.5,
  letterSpacing: "0.00938em",
  cursor: 'pointer',
};

const escritura = {
  display: 'flex',
   justifyContent: 'space-between', 
  alignItems: 'center' ,
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

function TazasDrawer({ handleClose }) {
  return (
    <Box sx={{ width: '100vw', height: '100vh' }}>
    <Box
      sx={{
        display: { xs: 'flex', sm: 'none' },
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '28px 3px 14px',
        width: '100%',
      }}
    >
      <Box sx={{marginLeft:'12px'}}>
      <LogoSVG 
      color={'#111'}
       size={'80%'} />
      </Box>  
      <IconButton
        color="inherit"
        size="large"
        onClick={handleClose}
        sx={{
          display: { xs: 'flex', sm: 'none' },
          '&:hover': {
            boxShadow: 'none',
          },
        }}
      >
        <CloseIcon />
      </IconButton>
    </Box>
    <Divider sx={{marginBottom:'16px', marginTop:'4px', height:'1.5px',backgroundColor:'#111'}}/>
    <Box >
      <List>
        <Link href="/regalos-personalizados" passHref style={{ textDecoration: 'none' }}>
          <ListItem sx={escritura}>
            Tazas de café
            <KeyboardArrowRightIcon />
          </ListItem>
        </Link>

        <Link href="/decoracion-de-hogar" passHref style={{ textDecoration: 'none' }}>
          <ListItem sx={escritura}>
            Tazas de viajes y termos
            <KeyboardArrowRightIcon />
          </ListItem>
        </Link>

        <Link href="/regalos-para-el" passHref style={{ textDecoration: 'none' }}>
          <ListItem sx={escritura}>
            Tazas para parejas
            <KeyboardArrowRightIcon />
          </ListItem>
        </Link>

        <Link href="/regalos-personalizados" passHref style={{ textDecoration: 'none' }}>
          <ListItem sx={escritura}>
            Taza para Medicos
            <KeyboardArrowRightIcon />
          </ListItem>
        </Link>

        <Link href="/decoracion-de-hogar" passHref style={{ textDecoration: 'none' }}>
          <ListItem sx={escritura}>
            Feministas
            <KeyboardArrowRightIcon />
          </ListItem>
        </Link>

        <Link href="/regalos-para-el" passHref style={{ textDecoration: 'none' }}>
          <ListItem sx={escritura}>
            Iniciales
            <KeyboardArrowRightIcon />
          </ListItem>
        </Link>
      </List>
      </Box>
      <Box sx={{
          width: '100%', 
          height: '40px', 
          backgroundColor: '#f0f0f0',
          position: 'fixed',
          bottom: 0, 
          left: 0,
          zIndex: 1100,
          display: 'flex',
          justifyContent: 'center', 
          alignItems: 'center',
          padding: '10px 0', 
        }}>
          <Typography sx={contact}>Contactanos</Typography>
        </Box>
    </Box>
  );
}

export default TazasDrawer;
