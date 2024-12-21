import React, { useEffect, useState } from "react";
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography, Menu, Divider, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuComponent from "./MenuComponent/MenuComponent";
import Medio from "./MenuComponent/Medio";
import CupMedia from "./MenuComponent/CupMedia";
import LogoSVG from "../../../public/SVG/DolceGabanna/dolce";
import NavListDrawer from "./NavListDrawer";
import TazasMedia from "./MenuComponent/Tazas/TazasMedia";
import TazasMedio from "./MenuComponent/Tazas/TazasMedio";
import PosterMedia from "./MenuComponent/Poster/PosterMedia";
import PosterMedio from "./MenuComponent/Poster/PosterMedio";
import PolerasMedio from "./MenuComponent/Poleras/polerasMedio";
import PolerasMedia from "./MenuComponent/Poleras/polerasMedia";
import TarjetasMedio from "./MenuComponent/Tarjetas/tarjetasMedio";
import TarjetasMedia from "./MenuComponent/Tarjetas/tarjetasMedia";



export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [anchorElRopa, setAnchorElRopa] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState(false);
  const [hover, setHover] = useState(false);
  const [logoSize, setLogoSize] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("medio"); // Estado para el menú derecho
  const [selectedLeftMenu, setSelectedLeftMenu] = useState("medio"); // Estado para el menú izquierdo
  const isSmallScreen = useMediaQuery('(max-width:800px)');
  const [scrollPosition, setScrollPosition] = useState(0);

  const titleTop = {
    textAlign: 'center',
    marginLeft: 6,
    color: hover || isOpen || scrollPosition > 50 ? 'black' : 'white',
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 1.5,
    letterSpacing: "0.00938em",
    cursor: 'pointer',
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavbarStyle = () => {
    if (hover || scrollPosition > 25) {
      return {
        backgroundColor: 'white',
        color: 'black',
      };
    } else {
      return {
        backgroundColor: 'transparent',
        color: 'white',
      };
    }
  };

  const handleClickRopa = (event) => {
    setAnchorElRopa(event.currentTarget);
    setIsOpen(prevIsOpen => !prevIsOpen);
    setNavbarColor(prevNavbarColor => !prevNavbarColor);
    setLogoSize(prevLogoSize => !prevLogoSize); 
  };

  const handleCloseRopa = () => {
    setAnchorElRopa(null);
    setIsOpen(false);
    setNavbarColor(false);
  };

  const handleSelectMenu = (menu) => {
    setSelectedMenu(menu);
    setSelectedLeftMenu(menu);
  };

  useEffect(() => {
    if (isSmallScreen) {
      setIsOpen(false);
      setNavbarColor(false);
      setHover(false);
      setLogoSize(true);
    } else {
      setNavbarColor(false);
      setHover(false);
      setLogoSize(false);
    }
  }, [isSmallScreen]);

  const handleMouseEnter = () => {
    // Solo activar hover si el menú no está abierto
    if (!isOpen) {
      setHover(true);
    }
  };

  const handleMouseLeave = () => {
    // Solo desactivar hover si el menú no está abierto
    if (!isOpen) {
      setHover(false);
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: isSmallScreen ? 'auto' : 1300,
          boxShadow: 0,
          backgroundColor: handleNavbarStyle().backgroundColor,
          color: handleNavbarStyle().color,
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Toolbar sx={{ display: 'flex', flexDirection: 'column', width: '100%', padding: '0 32px 14px' }}>
          <Box
            sx={{
              display: { xs: 'flex', sm: 'none' },
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 0',
              margin: isSmallScreen ? 0 : '24px 0 -12px',
              marginLeft: isSmallScreen ? 0 : '-26px',
              width: '100%',
            }}
          >
            <LogoSVG color={'white'} size={logoSize ? '50%' : '60%'} />
            <IconButton
              color="inherit"
              size="large"
              onClick={() => setOpen(true)}
              sx={{ display: { xs: 'flex', sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'space-between', width: '100%', margin: '28px 0px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Typography sx={titleTop}>Fashion</Typography>
              <Typography sx={titleTop}>Beauty</Typography>
              <Typography sx={titleTop}>Casa</Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '12px 0',
              margin: '24px 0 -12px',
              marginLeft:'-26px',
              width: '100%',
              marginBottom: isOpen ? '-32px' : '-18px',
            }}>
            <LogoSVG
  color={navbarColor || hover || scrollPosition > 25 ? '#111' : '#ffffff'} // #111 para negro
  size={logoSize ? '50%' : '80%'}
/>
            </Box>

            <Box  sx={{ display: { xs: 'none', sm: 'flex' },justifyContent: 'flex-end' }}>
              <Typography sx={titleTop}>Contactanos</Typography>
              <Typography sx={titleTop}>Cotiza</Typography>
            </Box>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', width: '100%' }}>
            <Typography sx={titleTop}>Home</Typography>

            <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center'}}>
              <Button
                onClick={handleClickRopa}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: 0,
                  backgroundColor: 'transparent',
                  color: isOpen ? 'grey' : (hover ? 'black' : 'white'),
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                  '&:focus': {
                    outline: 'none',
                  },
                  transition: 'color 0.3s ease, background-color 0.3s ease',
                  minWidth: '120px',
                  textTransform: 'none',
                }}
              >
                <Typography sx={titleTop}>Lessons</Typography>
              {/* 
  {isOpen ? (
    <KeyboardArrowUpIcon sx={{ ml: 1, color: hover || isOpen ? 'black' : 'white' }} />
  ) : (
    <KeyboardArrowDownIcon sx={{ ml: 1, color: hover || isOpen ? 'black' : 'white' }} />
  )}
*/}
              </Button>
            </Box>

            <Typography sx={titleTop}>Ownerships</Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorElRopa}
        open={isOpen}
        onClose={handleCloseRopa}
        TransitionProps={{
          timeout: 0,
        }}
        sx={{
          zIndex: 1200,
          backgroundColor: '#ffffff',
          padding: 0,
          height: '100%',
          marginTop: isOpen ? '12px' : '24px',
          '& .MuiMenu-paper': {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            maxWidth: '100%',
            width: '100%',
          },
        }}
      >
        <Divider sx={{ backgroundColor: '#d0cccc', height: '1px', width: '100%', zIndex: 1000 }} />

        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'row', 
          width: '100%', 
          padding: 0,
        }}>
          <Box sx={{ 
            width: '12.33%',  
            padding: '24px 0px 2px 30px', 
            display: 'flex',
            justifyContent: 'flex-start', 
          }}>
            <MenuComponent onSelectMenu={handleSelectMenu} />
          </Box>

          <Box sx={{
            width: '43.33%',
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
          }}>
            <Divider
        orientation="vertical"
        sx={{
          backgroundColor: '#d0cccc',
          height: '95%',  
          width: '1px',
          position: 'absolute', 
          left: '22%', 
          transform: 'translateX(-50%)', 
        }}
      />

            <Box sx={{ padding: '24px 0px 0 0px' }}>
              {/* Mostrar el componente izquierdo según la selección */}
              {selectedLeftMenu === 'tazas' ? <TazasMedio /> : 
               selectedLeftMenu === 'poster' ? <PosterMedio /> : 
               selectedLeftMenu === 'tarjetas' ? <TarjetasMedio /> : 
               selectedLeftMenu === 'poleras' ? <PolerasMedio /> : <Medio />}
            </Box>
          </Box>

          <Box sx={{
            width: '53.33%',
            padding: '0px 0px 20px 30px',
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
            {/* Mostrar el componente derecho según la selección */}
            {selectedMenu === 'playeras' ? <TazasMedia /> : 
             selectedMenu === 'poster' ? <PosterMedia /> : 
             selectedMenu === 'tarjetas' ? <TarjetasMedia /> : 
             selectedMenu === 'poleras' ? <PolerasMedia /> : <CupMedia />}
          </Box>
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
          <Typography sx={titleTop}>Contactanos</Typography>
        </Box>
      </Menu>

    
      {/* Drawer for Mobile */}


<Drawer
  open={open}
  anchor="right"
  onClose={() => setOpen(false)}
  sx={{ display: { xs: "flex", sm: 'none' } }}
>
<NavListDrawer setOpen={setOpen} />
</Drawer>

    </>
  );
}
