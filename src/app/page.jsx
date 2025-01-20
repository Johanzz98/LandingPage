'use client';
import React, { useState, useEffect } from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import Navbar from '@/Components/Navbar/Navbar';
import Banner from '@/components/Banner/Banner';
import MidSection from '@/components/MidSection/MidSection';
import PisoTercero from '@/components/PisoTercero/PisoTercero';
import SegundoBanner from '@/components/SegundoBanner/SegundoBanner';
import PisoCuarto from '@/components/PisoCuarto/PisoCuarto';
import LastPhoto from '@/components/LastPhoto/LastPhoto';
import Footer from '@/components/Footer/Footer';

const theme = createTheme();

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  // Simular un retraso de carga (por ejemplo, 500ms)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Cambiar a "false" después de 500ms para ocultar la pantalla blanca
    }, 100); // Aquí puedes ajustar el tiempo según tu preferencia
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        {isLoading ? (
          <Box
            sx={{
              width: '100vw',
              height: '100vh',
              backgroundColor: 'white',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        ) : (
          <>
            <Navbar />
            <Banner />
            <MidSection />
            <PisoTercero />
            <SegundoBanner />
            <PisoCuarto />
            <LastPhoto />

            <Footer />
          </>
        )}
      </Box>
    </ThemeProvider>
  );
}
