import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Divider,
  useMediaQuery,
  MenuList,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoSVG from '../../../public/SVG/DolceGabanna/dolce';
import NavListDrawer from '../Navbar/NavListDrawer';

import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Link from 'next/link';

import CheckIcon from '@mui/icons-material/Check';

export default function NavbarPages() {
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú desplegable
  const isSmallScreen = useMediaQuery('(max-width:800px)');

  const titleTop = {
    textAlign: 'center',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 400,
    fontSize: '1rem',
    color: '#111',
    letterSpacing: '0.00938em',
    cursor: 'pointer',
  };

  const handleTShirtClick = () => {
    setIsMenuOpen(!isMenuOpen); // Cambia el estado para abrir/cerrar el menú
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          zIndex: isSmallScreen ? 'auto' : 1300,
          boxShadow: 0,
          backgroundColor: '#FFFFFF',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            padding: '0 32px 14px',
          }}
        >
          <Box
            sx={{
              display: { xs: 'flex', sm: 'none' },
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 0',
            }}
          >
            <LogoSVG color={'#111'} size="60%" />
            <IconButton
              color="inherit"
              size="large"
              onClick={() => setOpen(true)}
              sx={{ display: { xs: 'flex', sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              justifyContent: 'space-between',
              width: '100%',
              margin: '28px 0px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 1.5,
              }}
            >
              <IconButton
                color="inherit"
                size="large"
                onClick={() => setOpen(true)}
                sx={{ display: { xs: 'none', sm: 'flex' } }}
              >
                <MenuIcon sx={{ color: '#111' }} />
              </IconButton>
              <Typography sx={titleTop}>Menu</Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  position: 'relative',
                }}
              >
                <LogoSVG size="30%" />
              </Box>
            </Box>

            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                justifyContent: 'flex-end',
              }}
            >
              <Typography sx={titleTop}>Contactanos</Typography>
              <PhoneEnabledIcon sx={{ color: '#111', margin: '0 12px' }} />
              <Typography sx={titleTop}>Cotiza</Typography>
              <LocalMallIcon sx={{ color: '#111', margin: '0 12px' }} />
            </Box>
          </Box>

          <Divider
            sx={{
              height: 2,
              backgroundColor: '#f4f4f4',
              width: '103%',
              marginBottom: '24px',
            }}
          />

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Button
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '0px 16px',
                backgroundColor: 'transparent',
                color: 'black',
                '&:hover': { backgroundColor: 'transparent' },
                '&:focus': { outline: 'none' },

                textTransform: 'none',
              }}
              onClick={handleTShirtClick} // Abre o cierra el menú desplegable
            >
              <Typography sx={titleTop}>TShirt</Typography>
              {isMenuOpen ? (
                <ExpandLessIcon sx={{ color: '#111', marginLeft: '8px' }} />
              ) : (
                <ExpandMoreIcon sx={{ color: '#111', marginLeft: '8px' }} />
              )}
            </Button>

            {/* Menú desplegable con animación hacia abajo */}
            <Box
              sx={{
                position: 'absolute',
                top: '100%', // Asegura que el menú se despliegue hacia abajo desde el botón
                left: 25,
                backgroundColor: 'white',
                boxShadow: 0,
                zIndex: 1200, // Asegura que el menú se muestre por encima de otros elementos
                maxHeight: isMenuOpen ? '500px' : '0', // Cambia la altura máxima para el despliegue
                overflow: 'hidden', // Oculta los elementos cuando el menú está cerrado
                transition: 'max-height 0.3s ease-out', // Añade transición suave
                width: '380px',
              }}
            >
              {/* Lista de opciones con MenuList y MenuItem */}
              <MenuList>
                <MenuItem>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '8px 16px',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}
                  >
                    <Typography sx={{ ...titleTop, marginRight: '8px' }}>
                      TShirt Option 1
                    </Typography>
                    <CheckIcon sx={{ color: '#111' }} />
                  </Box>
                </MenuItem>
                <MenuItem>
                  <Link href="/tshirt2" passHref>
                    <Typography
                      sx={{
                        ...titleTop,
                        padding: '8px 16px',
                        display: 'block',
                      }}
                    >
                      TShirt Option 2
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/tshirt3" passHref>
                    <Typography
                      sx={{
                        ...titleTop,
                        padding: '8px 16px',
                        display: 'block',
                      }}
                    >
                      TShirt Option 3
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/tshirt4" passHref>
                    <Typography
                      sx={{
                        ...titleTop,
                        padding: '8px 16px',
                        display: 'block',
                      }}
                    >
                      TShirt Option 4
                    </Typography>
                  </Link>
                </MenuItem>
              </MenuList>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="right"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: 'flex', sm: 'none' } }}
      >
        <NavListDrawer setOpen={setOpen} />
      </Drawer>
    </>
  );
}
