import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface PageContProps {
  page: number
}
export function Page1() {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1 }, }}>
      <div>
        <TextField />
        <TextField />
      </div>
      <div>
        <TextField />
        <TextField />
      </div>
    </Box>
  );
}

export function Page2() {
  return (
    <a>PAGE 2</a>
  );
}

export function Page3() {
  return (
    <a>PAGE 3</a>
  );
}

export function Page4() {
  return (
    <a>PAGE 4</a>
  );
}


