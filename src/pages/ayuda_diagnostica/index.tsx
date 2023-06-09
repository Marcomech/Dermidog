import React from 'react';
import { Box, Typography } from '@mui/material';
import GlobalLayout from '@/layouts';
import FormDialog from '@/pages/ayuda_diagnostica/DiagnosticoComponents/formDialog';
import { FormContextProvider } from '@/context/FormContext';

export default function AyudaDiagnostica() {
  return (
    <GlobalLayout>
      <Typography align='left' variant='h2' marginTop={1}>
        Ayuda Diagnostica
      </Typography>
      <Box textAlign='center'>
        <FormContextProvider>
          <FormDialog />
        </FormContextProvider>
      </Box>
    </GlobalLayout >
  );
}
