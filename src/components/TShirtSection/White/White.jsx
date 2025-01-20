import React, { useState, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { itemData, responsive } from './WhiteMedia';
import { useTheme } from '@emotion/react';
import { useMediaQuery, Box, IconButton, Fade } from '@mui/material';
import WhiteCard from './WhiteCard';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import './carousel.css';

function White() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [showArrows, setShowArrows] = useState(false);
  const [fadeTimeout, setFadeTimeout] = useState(null);

  const carouselRef = useRef(null);

  const handleMouseEnter = () => {
    if (fadeTimeout) {
      clearTimeout(fadeTimeout);
    }
    setShowArrows(true);
  };

  const handleMouseLeave = () => {
    setFadeTimeout(
      setTimeout(() => {
        setShowArrows(false);
      }, 500),
    );
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: 'relative',
        display: 'flex',
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
      }}
    >
      <Box sx={{ position: 'relative', width: '100%', margin: 0, padding: 0 }}>
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          infinite
          pauseOnHover={true}
          arrows={false} // Las flechas las gestionamos manualmente
        >
          {itemData.map((item, index) => (
            <WhiteCard item={item} key={index} />
          ))}
        </Carousel>

        <Fade in={showArrows} timeout={500}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              zIndex: 10,
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <IconButton
              sx={{
                left: '10px',
                transform: 'translateY(-50%)',
              }}
              onClick={() => carouselRef.current.previous()}
            >
              <ArrowLeft />
            </IconButton>
            <IconButton
              sx={{
                right: '10px',
                transform: 'translateY(-50%)',
              }}
              onClick={() => carouselRef.current.next()}
            >
              <ArrowRight />
            </IconButton>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}

export default White;
