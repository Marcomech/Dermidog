import React, { useContext, useState } from 'react';
import { Button, Dialog } from '@mui/material';
import { DialogActions, DialogContent, DialogTitle } from '@mui/material';
import theme from '@/constants/themes';
import PageFooter from './pageFooter';
import { FormContext } from '@/context/FormContext';
import BodyForm from './bodyForm';
import EncontrarDiagnostico from '@/functions/diagnostico';

export default function FormDialog() {

  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const { setFormData } = useContext(FormContext);

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
        PaperProps={{
          style: {
            height: '80%',
            width: '80%',
            maxHeight: '100%',
            maxWidth: '100%',
            backgroundColor: theme.palette.background.default,
          },
        }}
      >
        {
          activePage < 5
            ? <>
              <DialogTitle variant='h3'>
                Ayuda Diagnostica
              </DialogTitle>
              <DialogContent>
                <BodyForm actualPage={activePage} />
              </DialogContent>
            </>

            : <>
              <DialogTitle variant='h3'>
                Enfermedades posibles
              </DialogTitle>
              <DialogContent>
                <EncontrarDiagnostico />
              </DialogContent>
            </>
        }

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

