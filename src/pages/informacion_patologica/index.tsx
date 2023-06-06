import React from 'react';
import { Box, Typography } from '@mui/material';
import GlobalLayout from "@/layouts";
import DataList from '@/pages/informacion_patologica/InformacionComponents/dataList';
import { Capitulos } from '../../../public/data/index';

export default function InformacionPatologica() {
  return (
    <GlobalLayout>
      <Typography align='left' variant='h4' marginTop={1}>
        Atlas computado de dermatologia canina
      </Typography>

      < Box sx={{ flexGrow: 1 }} marginX={2}>
        {
          Capitulos.map((capitulos) => (
            <>
              <Typography variant='h4' marginBottom={1} marginTop={4} key={capitulos.Titulo}>
                {capitulos.Titulo}
              </Typography>
              <DataList enfermedades={capitulos.Items} />
            </>
          ))
        }
      </Box>
    </GlobalLayout >
  );
}

