import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PageStepper from '@/pages/ayuda_diagnostica/DiagnosticoComponents/pageStepper';
import theme from '@/constants/themes';
import { Page } from './formPage';
import { FormContext } from '@/context/FormContext';
import EncontrarDiagnostico from '@/functions/diagnostico';

export default function FormDialog() {

  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const { formData, setFormData } = useContext(FormContext);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    //console.log(formData);
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
      <Button variant="outlined" onClick={handleClickOpen}>
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
        <DialogTitle >Ayuda Diagnostica</DialogTitle>

        <DialogContent>
          <Page actualPage={activePage} />
        </DialogContent>

        <DialogActions>
          <PageStepper
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

