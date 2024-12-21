"use client";
import React from "react";

import { Box } from "@mui/material";

import "./App.css";
import Navbar from "@/Components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
import MidSection from "@/components/MidSection/MidSection";

export default function Page() {
  return (

          <Box>
               <Navbar />
             <Banner/>
             <MidSection/>
         
           
          </Box>

  );
}