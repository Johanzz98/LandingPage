"use client";
import React from "react";

import { Box, ThemeProvider,createTheme  } from "@mui/material";

import "./App.css";
import Navbar from "@/Components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
import MidSection from "@/components/MidSection/MidSection";
import PisoTercero from "@/components/PisoTercero/PisoTercero";
import SegundoBanner from "@/components/SegundoBanner/SegundoBanner";
const theme = createTheme();

export default function Page() {
  return (
    <ThemeProvider theme={theme}>
          <Box>
               <Navbar />
             <Banner/>
             <MidSection/>
             <PisoTercero/>
            <SegundoBanner/>
           
          </Box>
          </ThemeProvider>
  );
}