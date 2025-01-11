import { Box, Typography, IconButton, Grid, Divider } from '@mui/material';
import Link from 'next/link';  // Importar Link de Next.js
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaTiktok } from 'react-icons/fa'; // Importar los iconos de react-icons/fa
import LogoSVG from '../../../public/SVG/DolceGabanna/dolce';

const Footer = () => {
  return (
    <Box
      sx={{
        
        backgroundColor: '#ffffff',
        color: '#fff',
        borderTop: '1px solid #e4e4e4',
       
        marginTop: '100px',
      }}
    >
      <Box sx={{ padding: '40px 60px',}}>
      {/* Container for the footer content */}
     
      <Grid container spacing={2} justifyContent="center">
        {/* Columna 1: Sección de Redes Sociales */}
        <Grid item xs={12} sm={2.5} textAlign="center" sx={{padding:0}}>
          {/* Iconos de Redes Sociales */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginLeft:'-160px' }}>
            <IconButton color="inherit" href="https://www.facebook.com" target="_blank">
              <FaFacebook size={24} color="#111" />
            </IconButton>
            <IconButton color="inherit" href="https://www.twitter.com" target="_blank">
              <FaTwitter size={24} color="#111" />
            </IconButton>
            <IconButton color="inherit" href="https://www.instagram.com" target="_blank">
              <FaInstagram size={24} color="#111" />
            </IconButton>
            <IconButton color="inherit" href="https://www.tiktok.com" target="_blank">
              <FaTiktok size={24} color="#111" />
            </IconButton>
          </Box>
        </Grid>
  {/* Columna 1: Sección de Help */}
  <Grid item xs={12} sm={3} textAlign="center">
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            <Link href="/help" style={{ textDecoration: 'none', color: '#000' }}>Help</Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/faq" style={{ textDecoration: 'none', color: '#000' }}>Cómo personalizar tu producto</Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/contact" style={{ textDecoration: 'none', color: '#000' }}>Contact Us</Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/support" style={{ textDecoration: 'none', color: '#000' }}>About Us</Link>
          </Typography>
        </Grid>

        {/* Columna 2: Sección de Services */}
        <Grid item xs={12} sm={3} textAlign="center">
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            <Link href="/services" style={{ textDecoration: 'none', color: '#000' }}>Services</Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/consulting" style={{ textDecoration: 'none', color: '#000' }}>Regalos corporativos personalizados</Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/design" style={{ textDecoration: 'none', color: '#000' }}>Diseños personalizados a medida</Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/development" style={{ textDecoration: 'none', color: '#000' }}>Compra al por mayor</Link>
          </Typography>
        </Grid>

        {/* Columna 3: Sección de About */}
        <Grid item xs={12} sm={3} textAlign="center">
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            <Link href="/about" style={{ textDecoration: 'none', color: '#000' }}>Productos</Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/our-story" style={{ textDecoration: 'none', color: '#000' }}>Devoluciones y cambios</Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/careers" style={{ textDecoration: 'none', color: '#000' }}>Preguntas Frecuentes</Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/privacy-policy" style={{ textDecoration: 'none', color: '#000' }}>Envíos y entregas</Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/privacy-policy" style={{ textDecoration: 'none', color: '#000' }}>Privacy Policy</Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/privacy-policy" style={{ textDecoration: 'none', color: '#000' }}>Sostenibilidad</Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/privacy-policy" style={{ textDecoration: 'none', color: '#000' }}>Novedades</Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/privacy-policy" style={{ textDecoration: 'none', color: '#000' }}>Mayoristas</Link>
          </Typography>
        </Grid>

    
      </Grid>
      </Box>
      {/* Footer Bottom Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px',  
        backgroundColor: '#ffffff',
        color: '#fff',
        borderTop: '1px solid #e4e4e4',
        padding: '40px 60px',
        marginTop: '24px', }}>
 
 <LogoSVG 
        color={'#111'}
         size={'20%'} />
  
</Box>
    </Box>
  );
};

export default Footer;
