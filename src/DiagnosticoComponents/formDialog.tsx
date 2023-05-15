import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PageStepper from '@/DiagnosticoComponents/pageStepper';
import theme from '@/constants/themes';
import { Page1, Page2, Page3, Page4 } from './formPages';

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const steps = ['Edad, sexo y raza', 'Area dermograma', 'Prurito', 'Descamacion'];
  const pages = [
    <Page1 />,
    <Page2 />,
    <Page3 />,
    <Page4 />]

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Comenzar Diagnostico
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: theme.palette.background.default,
            boxShadow: 'none',
          },
        }}
      >
        <DialogTitle >Ayuda Diagnostica</DialogTitle>
        <DialogContent>
          {pages[activePage]}

        </DialogContent>
        <DialogActions>
          <PageStepper
            steps={steps}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </DialogActions>
      </Dialog>
    </div >
  );
}

