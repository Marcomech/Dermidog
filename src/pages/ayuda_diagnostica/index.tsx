import React, { useState } from 'react';
import { Typography } from '@mui/material';
import GlobalLayout from "@/layouts";
import FormDialog from '@/DiagnosticoComponents/formDialog';

export default function AyudaDiagnostica() {
  return (
    <GlobalLayout>
      <Typography align='left' variant='h4' marginTop={1}>
        Ayuda Diagnostica
      </Typography>
      <FormDialog />
    </GlobalLayout >
  );
}
