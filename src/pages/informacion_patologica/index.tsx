import React from 'react';
import { Box, Typography } from '@mui/material';
import GlobalLayout from "@/layouts";
import DataGrid from '@/InformacionComponents/dataGrid';
import { Charapters } from '../../../public/data/Capitulos';


export default function InformacionPatologica() {
  return (
    <GlobalLayout>
      <Typography align='left' variant='h4' marginTop={1}>
        Atlas computado de dermatologia canina
      </Typography>

      < Box sx={{ flexGrow: 1 }} marginX={2}>
        {
          Charapters.map((capitulos) => (
            <>
              <Typography variant='h4' marginBottom={1} marginTop={4} key={capitulos.ID}>
                {capitulos.TITULO}
              </Typography>
              <DataGrid capitulos={capitulos} />
            </>
          ))}
      </Box>

    </GlobalLayout >
  );
}

