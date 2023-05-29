import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { FormContext } from '@/context/FormContext';


interface PageStepperProps {
  steps: string[];
  activePage: number,
  onClose: () => void,
  setActivePage: React.Dispatch<React.SetStateAction<number>>
}

export default function PageStepper({ steps, activePage, onClose, setActivePage }: PageStepperProps) {

  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activePage)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activePage);
    }
    setActivePage((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActivePage((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    setActivePage((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activePage);
      return newSkipped;
    });
  };

  return <Box sx={{ width: '100%' }}>
    {/*
    <Stepper activeStep={activePage}>

      {
        steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel>
                {(activePage == index) ? label : ""}
              </StepLabel>
            </Step>
          );
        })
      }
    </Stepper>
    {activePage === steps.length
      ? (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={onClose}>Cerrar</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button color="inherit" disabled={activePage === 0} onClick={handleBack}>
              Previo
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button color="inherit" onClick={handleSkip}>
              Saltear
            </Button>
            <Button onClick={handleNext}>
              {activePage === steps.length - 1 ?
                'Terminar' :
                'Proximo'}
            </Button>
          </Box>
        </React.Fragment>
      )}
     */}
  </Box>


}

