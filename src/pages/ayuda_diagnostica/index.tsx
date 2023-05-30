import React, { useState } from 'react';
import { Typography } from '@mui/material';
import GlobalLayout from "@/layouts";
import FormDialog from '@/pages/ayuda_diagnostica/DiagnosticoComponents/formDialog';
import { FormContextProvider } from '@/context/FormContext';

export default function AyudaDiagnostica() {
  return (
    <GlobalLayout>
      <Typography align='left' variant='h4' marginTop={1}>
        Ayuda Diagnostica
      </Typography>
      <FormContextProvider>
        <FormDialog />
      </FormContextProvider>
    </GlobalLayout >
  );
}
