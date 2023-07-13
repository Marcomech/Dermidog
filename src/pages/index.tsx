import GlobalLayout from '@/layouts';
import { Typography, Box, Grid, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Home() {
  const router = useRouter();
  function handleClick(page: string) {
    router.push(page);
  }

  return (
    <GlobalLayout>
      <Typography variant='body1' >
        Sistema de apoyo al diagnostico y aprendizaje de las enfermedades mas frecuentes de la piel de los caninos
      </Typography>
      <Grid container direction="row" justifyContent="space-evenly" justifyItems="center"
        style={{ marginTop: '10vh', marginBottom: '15vh', paddingBottom: '20vh' }}
      >
        <Grid >
          <Button variant='contained'
            style={{ margin: '3vh', width: '30vh', height: '20vh', minWidth: '150px', minHeight: '80px' }}
            onClick={() => handleClick('/informacion_patologica')}>
            Información Patológica
          </Button>
        </Grid>
        <Grid >
          <Button variant='contained'
            style={{ margin: '3vh', width: '30vh', height: '20vh', minWidth: '150px', minHeight: '80px' }}
            onClick={() => handleClick('/ayuda_diagnostica')}>
            Ayuda Diagnóstica
          </Button>
        </Grid>
      </Grid>
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
        position="fixed"
        bottom={0}
        right={0}
        margin={2}
      >
        <Typography variant="body2">
          Creado por F. Fogel y E. Hutter, 1997
        </Typography>
      </Box>
    </GlobalLayout >
  );
}
