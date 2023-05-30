import React, { useState, useEffect } from 'react';
import EncontrarDiagnostico from '@/functions/diagnostico';
import { Box } from '@mui/material';
import BodyForm from './bodyForm';

interface PageBodyProps {
  actualPage: number
}

export default function PageBody(data: PageBodyProps) {
  const { actualPage } = data;
  return (
    <Box height={250}>
      {actualPage < 5
        ? <BodyForm actualPage={actualPage} />
        : <EncontrarDiagnostico />}
    </Box>
  )
}



