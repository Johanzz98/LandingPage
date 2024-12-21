import React, { useState } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, Drawer, IconButton, Divider, Typography } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import RegalosDrawer from './DrawerComponent/Regalos/RegalosDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import LogoSVG from "../../../public/SVG/DolceGabanna/dolce";
import CloseIcon from '@mui/icons-material/Close';
import PolerasDrawer from './DrawerComponent/Poleras/polerasDrawer';
import PosterDrawer from './DrawerComponent/Poster/PosterDrawer';
import StickerDrawer from './DrawerComponent/Stickers/stickerDrawer';
import TarjetasDrawer from './DrawerComponent/Tarjetas/tarjetasDrawer';
import TazasDrawer from './DrawerComponent/Tazas/TazasDrawer';
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

export default function NavListDrawer({ setOpen }) {
  const [isRegalosOpen, setIsRegalosOpen] = useState(false);
  const [isPolerasOpen, setIsPolerasOpen] = useState(false);
  const [isPosterOpen, setIsPosterOpen] = useState(false);
  const [isStickerOpen, setIsStickerOpen] = useState(false);
  const [isTarjetasOpen, setIsTarjetasOpen] = useState(false);
  const [isTazasOpen, setIsTazasOpen] = useState(false);

  const toggleRegalosDrawer = () => setIsRegalosOpen(prevState => !prevState);
  const togglePolerasDrawer = () => setIsPolerasOpen(prevState => !prevState);
  const togglePosterDrawer = () => setIsPosterOpen(prevState => !prevState);
  const toggleStickerDrawer = () => setIsStickerOpen(prevState => !prevState);
  const toggleTarjetasDrawer = () => setIsTarjetasOpen(prevState => !prevState);
  const toggleTazasDrawer = () => setIsTazasOpen(prevState => !prevState);
  
  const handleClose = () => setOpen(false);

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
        
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={toggleRegalosDrawer}>
              <ListItemText primary="Regalos" />
              <KeyboardArrowRightIcon />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={togglePolerasDrawer}>
              <ListItemText primary="Poleras" />
              <KeyboardArrowRightIcon />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={togglePosterDrawer}>
              <ListItemText primary="Posters" />
              <KeyboardArrowRightIcon />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={toggleStickerDrawer}>
              <ListItemText primary="Stickers" />
              <KeyboardArrowRightIcon />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={toggleTarjetasDrawer}>
              <ListItemText primary="Tarjetas" />
              <KeyboardArrowRightIcon />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={toggleTazasDrawer}>
              <ListItemText primary="Tazas" />
              <KeyboardArrowRightIcon />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>

      {/* Drawer para cada categoría */}
      <Drawer
        anchor="right"
        open={isRegalosOpen}
        onClose={toggleRegalosDrawer}
        sx={{ width: '100vw', height: '100vh' }}
      >
        <RegalosDrawer handleClose={toggleRegalosDrawer} />
      </Drawer>

      <Drawer
  anchor="right"
  open={isPolerasOpen}
  onClose={togglePolerasDrawer}
  sx={{ width: '100vw', height: '100vh' }}
>
  <PolerasDrawer handleClose={togglePolerasDrawer} />
</Drawer>

      <Drawer
        anchor="right"
        open={isPosterOpen}
        onClose={togglePosterDrawer}
        sx={{ width: '100vw', height: '100vh' }}
      >
        <PosterDrawer handleClose={togglePosterDrawer} />
      </Drawer>

      <Drawer
        anchor="right"
        open={isStickerOpen}
        onClose={toggleStickerDrawer}
        sx={{ width: '100vw', height: '100vh' }}
      >
        <StickerDrawer handleClose={toggleStickerDrawer} />
      </Drawer>

      <Drawer
        anchor="right"
        open={isTarjetasOpen}
        onClose={toggleTarjetasDrawer}
        sx={{ width: '100vw', height: '100vh' }}
      >
        <TarjetasDrawer handleClose={toggleTarjetasDrawer} />
      </Drawer>

      <Drawer
        anchor="right"
        open={isTazasOpen}
        onClose={toggleTazasDrawer}
        sx={{ width: '100vw', height: '100vh' }}
      >
        <TazasDrawer handleClose={toggleTazasDrawer} />
      </Drawer>
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
