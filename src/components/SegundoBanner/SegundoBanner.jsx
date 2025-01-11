import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link'; // Importar Link de Next.js
import React from 'react';

export default function SegundoBanner() {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '400px' }}> {/* Ajusta el height aquí */}
      <Link href="/pagina-destino" passHref> {/* Envolvemos todo el contenido en el Link */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute', // Asegúrate de que el contenedor de la imagen esté posicionado
            width: '100%',
            height: '100%',
            cursor: 'pointer', // Cambia el cursor para indicar que es clickeable
          }}
        >
          <img
            src="/SecondBanner/SecondBanner.png"
            alt="Fondo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Cambié 'contain' a 'cover' para asegurarte que cubra todo el área
            }}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '20%', // Centrado horizontal
            transform: 'translate(-50%, -50%)',
            color: 'red',
            fontSize: '2rem',
            fontWeight: 'bold',
            zIndex: 1, // Añadir un z-index para asegurarse de que se vea por encima de la imagen
          }}
        >
          <Typography>
            Momentos para Recordar
          </Typography>
          <Typography>
            Los mejores recuerdos crean los mejores regalos
          </Typography>
          <Box sx={{marginTop:'12px'}}>
          <Button
            sx={{
              backgroundColor: '#111',
              padding: '8px 16px',
              '&:hover': {
                backgroundColor: '#ffffff', // Color de fondo al pasar el mouse
              },
            }}
          >
            <Typography>Comprar</Typography>
          </Button>
          </Box>
        </Box>
      </Link>
    </Box>
  );
}
