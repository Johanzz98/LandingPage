import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { itemData, responsive } from "./PisoTerceroMedia";
import { useTheme } from "@emotion/react";
import { useMediaQuery, CardMedia, Box, Typography } from "@mui/material";
import PisoTerceroCard from "./PisoTerceroCard";

function Last() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [hoveredVerMas, setHoveredVerMas] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const carouselSpeed = 3000; // Duración del cambio de imagen (3 segundos)
  const progressSpeed = 50; // Incremento de la barra de progreso cada 50ms (ajustable)
  const intervalRef = useRef(null); // Ref para almacenar el intervalo
  const isAnimating = useRef(false); // Ref para controlar si la animación está activa

  // Iniciar la animación de la barra de progreso
  useEffect(() => {
    const startProgressBar = () => {
      setIsLoading(true); // Comienza la animación
      clearInterval(intervalRef.current); // Limpiar cualquier intervalo anterior

      intervalRef.current = setInterval(() => {
        if (!isAnimating.current) return; // Solo continuar si la animación está permitida

        setAnimationProgress((prevProgress) => {
          if (prevProgress >= 100) {
            // Cuando la barra llega al 100%, actualizamos el índice de la imagen
            setCurrentIndex((prevIndex) => (prevIndex + 1) % itemData.length);
            return 0; // Reiniciamos la barra de progreso
          }
          return prevProgress + (100 / (carouselSpeed / progressSpeed)); // Avanzamos la barra
        });
      }, progressSpeed);
    };

    startProgressBar(); // Comienza la animación de la barra

    return () => {
      clearInterval(intervalRef.current); // Limpiar cuando el componente se desmonte
    };
  }, [currentIndex]); // Solo depende de `currentIndex` para reiniciar la animación al llegar al 100%

  // Función que maneja el cambio de imagen (antes de que la imagen cambie)
  const handleBeforeChange = (nextSlide, prevSlide) => {
    if (nextSlide !== prevSlide) {
      // Solo reiniciar la barra cuando la imagen cambie de verdad
      isAnimating.current = false; // Detener la animación temporalmente
      setAnimationProgress(0); // Reinicia la barra de progreso
    }
  };

  // Función que maneja el cambio de imagen (después de que la imagen haya cambiado)
  const handleAfterChange = () => {
    isAnimating.current = true; // Reactivar la animación después de que la imagen cambie
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Imagen Lateral */}
        <Box sx={{ width: "50%", display: "flex", justifyContent: "center" }}>
          <CardMedia
            component="img"
            image="https://dolcegabbana-cdn.thron.com/delivery/public/image/dolcegabbana/06380a24-a75e-4e43-98e5-cb18b9cc973d/s6slzw/std/1100x1300/hp-refresh-desk_4?format=auto"
            alt="Side Image"
            sx={{
              height: "760px",
              width: "720px",
              objectFit: "cover",
              border: "none",
            }}
          />
        </Box>

        {/* Texto y Carrusel */}
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "24px 0",
              marginBottom: "36px",
              position: "relative",
              maxWidth: "600px",
              width: "100%",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: "16px",
                color: "#000",
              }}
            >
              Imagina Y Personaliza
            </Typography>

            {/* Hover Effect on "Ver Más" */}
            <Box
              sx={{ position: "relative", zIndex: 1 }}
              onMouseEnter={() => setHoveredVerMas(true)}
              onMouseLeave={() => setHoveredVerMas(false)}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Nunito Sans, sans-serif",
                  marginRight: "15px",
                  fontSize: "16px",
                  cursor: "pointer",
                  color: hoveredVerMas ? "white" : "inherit",
                  position: "relative",
                  zIndex: 1,
                  paddingBottom: "8px",
                }}
              >
                Ver más
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "122%",
                  height: "100%",
                  backgroundColor: "black",
                  transform: hoveredVerMas ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: "bottom",
                  transition: "transform 0.3s ease",
                  zIndex: 0,
                }}
              />
            </Box>

            <Box
              sx={{
                position: "absolute",
                bottom: 24,
                right: 10,
                width: "12%",
                borderBottom: "2px solid black",
              }}
            />
          </Box>

          {/* Carrusel */}
          <Box sx={{ width: "60%" }}>
            <Carousel
              responsive={responsive}
              infinite
              autoPlay={true}
              autoPlaySpeed={carouselSpeed}
              pauseOnHover={true}
              beforeChange={handleBeforeChange}
              afterChange={handleAfterChange}
            >
              {itemData.map((item, index) => (
                <PisoTerceroCard item={item} key={index} />
              ))}
            </Carousel>
          </Box>

          {/* Barra de Progreso */}
          <Box sx={{ marginTop: "-32px", display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                height: "4px",
                width: "420px",
                backgroundColor: "lightgray",
                position: "relative",
                margin: "0 10px",
              }}
            >
              {isLoading && (
                <div
                  style={{
                    width: `${animationProgress}%`,
                    height: "100%",
                    backgroundColor: "black",
                    transition: "width 0.1s ease",
                    position: "absolute",
                    left: 0,
                  }}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Last;
