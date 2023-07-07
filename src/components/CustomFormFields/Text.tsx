import React from 'react';
import { FormContext } from '@/context/FormContext';
import { FormControl, TextField } from '@mui/material';
import { useContext } from 'react';

type FieldProps = {
  id: string;
  options?: string[];
}

export default function Text(data: FieldProps) {
  const { id } = data;

  const { formData, setFormData } = useContext(FormContext);

  const handleChange = (event: React.FocusEvent<HTMLInputElement>, fieldId: string) => {
    const newValue = event.target.value;
    setFormData({ ...formData, [fieldId]: newValue });
  };

  return (
    <FormControl
      sx={{ width: '100%', height: '100%' }}
      focused={true}>

      <TextField

        id={id}
        focused={true}
        label='Nombre'
        onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
          handleChange(event, id)
        } />
    </FormControl >);
}