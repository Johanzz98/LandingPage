'use client';
import React, { useState, useEffect } from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import Banner from '@/components/TShirtSection/Banner';
import NavbarPages from '@/components/NavbarPages/NavbarPages';
import TShirtBanner from '@/components/TShirtSection/TShirtSection';

const theme = createTheme();
const page = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <NavbarPages />
        <TShirtBanner />
      </Box>
    </ThemeProvider>
  );
};

export default page;
