import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import theme from '@/constants/themes';
import PageBody from './pageBody';
import PageFooter from './pageFooter';
import { FormContext } from '@/context/FormContext';

export default function FormDialog() {

  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const { formData, setFormData } = useContext(FormContext);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setFormData({});
    setActivePage(0);
  };

  const steps = [
    'Edad, sexo y raza',
    'Area Involucrada',
    'Prurito y descamacion',
    'Simetria',
    'Lesiones elementales'
  ];

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}
        style={{
          margin: '60px',
          height: '15vh', minWidth: '150px', minHeight: '80px'
        }}
      >
        Comenzar Diagnostico
      </Button>

      <Dialog
        open={open}
        fullWidth={true}
        onClose={handleClose}
        style={{
          height: '100vh'
        }}
        PaperProps={{
          style: {
            backgroundColor: theme.palette.background.default,
          },
        }}
      >
        {activePage === 5
          ? <DialogTitle variant='h3' >Enfermedades posibles</DialogTitle>
          : <DialogTitle variant='h3' >Ayuda Diagnostica</DialogTitle>
        }

        <DialogContent>
          <PageBody actualPage={activePage} />
        </DialogContent>

        <DialogActions>
          <PageFooter
            steps={steps}
            activePage={activePage}
            setActivePage={setActivePage}
            onClose={handleClose}
          />
        </DialogActions>

      </Dialog>
    </div >
  );
}

