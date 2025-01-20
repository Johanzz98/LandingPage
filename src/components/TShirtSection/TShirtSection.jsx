import { Box, Grid } from '@mui/material';
import LouisVuittonLvTrainerSneaker from './louisVuittonLvTrainerSneaker/LouisVuittonLvTrainerSneaker';
import LouisVuittonLvTrainer from './louis-vuitton-lv-trainer/LouisVuittonLvTrainer';
import White from './White/White';
import Black from './Black/Black';
import { useEffect, useRef, useState } from 'react';

export default function TShirtBanner() {
  const gridItemsRef = useRef([]); // Usamos una referencia para manejar los elementos
  const [visibleItems, setVisibleItems] = useState(new Set()); // Estado para manejar los elementos visibles

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Solo añadimos a visibleItems si el elemento no ha sido añadido antes
          if (entry.isIntersecting && !visibleItems.has(entry.target)) {
            setVisibleItems((prev) => new Set(prev).add(entry.target)); // Añadir el item visible
          }
        });
      },
      { threshold: 0.1 }, // El umbral para que el item sea considerado visible
    );

    // Conectar el observer a cada item
    gridItemsRef.current.forEach((item) => observer.observe(item));

    return () => {
      // Limpiar los observadores cuando el componente se desmonta
      gridItemsRef.current.forEach((item) => observer.unobserve(item));
    };
  }, [visibleItems]); // Solo se ejecutará cuando visibleItems cambie

  return (
    <Box sx={{ backgroundColor: '#f7f6f5' }}>
      <Grid container spacing={0.1}>
        {/* Primer fila */}
        <Grid item xs={3} sm={3} md={3} sx={{ padding: 0, margin: 0 }}>
          <Box
            ref={(el) => (gridItemsRef.current[0] = el)} // Referencia para el primer elemento
            sx={{
              opacity: visibleItems.has(gridItemsRef.current[0]) ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              padding: 0,
              margin: 0,
            }}
          >
            <White />
          </Box>
        </Grid>
        <Grid item xs={3} sm={3} md={3} sx={{ padding: 0, margin: 0 }}>
          <Box
            ref={(el) => (gridItemsRef.current[1] = el)} // Referencia para el segundo elemento
            sx={{
              opacity: visibleItems.has(gridItemsRef.current[1]) ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              padding: 0,
              margin: 0,
            }}
          >
            <Black />
          </Box>
        </Grid>
        <Grid item xs={3} sm={3} md={3} sx={{ padding: 0, margin: 0 }}>
          <Box
            ref={(el) => (gridItemsRef.current[2] = el)} // Referencia para el tercer elemento
            sx={{
              opacity: visibleItems.has(gridItemsRef.current[2]) ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              padding: 0,
              margin: 0,
            }}
          >
            <LouisVuittonLvTrainerSneaker />
          </Box>
        </Grid>
        <Grid item xs={3} sm={3} md={3} sx={{ padding: 0, margin: 0 }}>
          <Box
            ref={(el) => (gridItemsRef.current[3] = el)} // Referencia para el cuarto elemento
            sx={{
              opacity: visibleItems.has(gridItemsRef.current[3]) ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              padding: 0,
              margin: 0,
            }}
          >
            <LouisVuittonLvTrainer />
          </Box>
        </Grid>

        {/* Segunda fila */}
        <Grid item xs={3} sm={3} md={3} sx={{ padding: 0, margin: 0 }}>
          <Box
            ref={(el) => (gridItemsRef.current[4] = el)} // Referencia para el quinto elemento
            sx={{
              opacity: visibleItems.has(gridItemsRef.current[4]) ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              padding: 0,
              margin: 0,
            }}
          >
            <White />
          </Box>
        </Grid>
        <Grid item xs={3} sm={3} md={3} sx={{ padding: 0, margin: 0 }}>
          <Box
            ref={(el) => (gridItemsRef.current[5] = el)} // Referencia para el sexto elemento
            sx={{
              opacity: visibleItems.has(gridItemsRef.current[5]) ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              padding: 0,
              margin: 0,
            }}
          >
            <Black />
          </Box>
        </Grid>
        <Grid item xs={3} sm={3} md={3} sx={{ padding: 0, margin: 0 }}>
          <Box
            ref={(el) => (gridItemsRef.current[6] = el)} // Referencia para el séptimo elemento
            sx={{
              opacity: visibleItems.has(gridItemsRef.current[6]) ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              padding: 0,
              margin: 0,
            }}
          >
            <LouisVuittonLvTrainerSneaker />
          </Box>
        </Grid>
        <Grid item xs={3} sm={3} md={3} sx={{ padding: 0, margin: 0 }}>
          <Box
            ref={(el) => (gridItemsRef.current[7] = el)} // Referencia para el octavo elemento
            sx={{
              opacity: visibleItems.has(gridItemsRef.current[7]) ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              padding: 0,
              margin: 0,
            }}
          >
            <LouisVuittonLvTrainer />
          </Box>
        </Grid>

        {/* Tercera fila */}
        <Grid item xs={3} sm={3} md={3} sx={{ padding: 0, margin: 0 }}>
          <Box
            ref={(el) => (gridItemsRef.current[8] = el)} // Referencia para el noveno elemento
            sx={{
              opacity: visibleItems.has(gridItemsRef.current[8]) ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              padding: 0,
              margin: 0,
            }}
          >
            <White />
          </Box>
        </Grid>
        <Grid item xs={3} sm={3} md={3} sx={{ padding: 0, margin: 0 }}>
          <Box
            ref={(el) => (gridItemsRef.current[9] = el)} // Referencia para el décimo elemento
            sx={{
              opacity: visibleItems.has(gridItemsRef.current[9]) ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              padding: 0,
              margin: 0,
            }}
          >
            <Black />
          </Box>
        </Grid>
        <Grid item xs={3} sm={3} md={3} sx={{ padding: 0, margin: 0 }}>
          <Box
            ref={(el) => (gridItemsRef.current[10] = el)} // Referencia para el undécimo elemento
            sx={{
              opacity: visibleItems.has(gridItemsRef.current[10]) ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              padding: 0,
              margin: 0,
            }}
          >
            <LouisVuittonLvTrainerSneaker />
          </Box>
        </Grid>
        <Grid item xs={3} sm={3} md={3} sx={{ padding: 0, margin: 0 }}>
          <Box
            ref={(el) => (gridItemsRef.current[11] = el)} // Referencia para el duodécimo elemento
            sx={{
              opacity: visibleItems.has(gridItemsRef.current[11]) ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              padding: 0,
              margin: 0,
            }}
          >
            <LouisVuittonLvTrainer />
          </Box>
        </Grid>

        {/* Cuarta fila */}
        <Grid item xs={3} sm={3} md={3} sx={{ padding: 0, margin: 0 }}>
          <Box
            ref={(el) => (gridItemsRef.current[12] = el)} // Referencia para el decimotercer elemento
            sx={{
              opacity: visibleItems.has(gridItemsRef.current[12]) ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              padding: 0,
              margin: 0,
            }}
          >
            <White />
          </Box>
        </Grid>
        <Grid item xs={3} sm={3} md={3} sx={{ padding: 0, margin: 0 }}>
          <Box
            ref={(el) => (gridItemsRef.current[13] = el)} // Referencia para el decimocuarto elemento
            sx={{
              opacity: visibleItems.has(gridItemsRef.current[13]) ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              padding: 0,
              margin: 0,
            }}
          >
            <Black />
          </Box>
        </Grid>
        <Grid item xs={3} sm={3} md={3} sx={{ padding: 0, margin: 0 }}>
          <Box
            ref={(el) => (gridItemsRef.current[14] = el)} // Referencia para el decimoquinto elemento
            sx={{
              opacity: visibleItems.has(gridItemsRef.current[14]) ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              padding: 0,
              margin: 0,
            }}
          >
            <LouisVuittonLvTrainerSneaker />
          </Box>
        </Grid>
        <Grid item xs={3} sm={3} md={3} sx={{ padding: 0, margin: 0 }}>
          <Box
            ref={(el) => (gridItemsRef.current[15] = el)} // Referencia para el decimosexto elemento
            sx={{
              opacity: visibleItems.has(gridItemsRef.current[15]) ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              padding: 0,
              margin: 0,
            }}
          >
            <LouisVuittonLvTrainer />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
