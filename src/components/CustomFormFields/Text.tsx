import React, { useContext } from 'react';
import { FormContext } from '@/context/FormContext';
import { TextField, Input, makeStyles } from '@mui/material';
import { FieldProps } from '.';
import theme from '@/constants/themes';


export default function Text(data: FieldProps) {
  const { id } = data;
  const { formData, setFormData } = useContext(FormContext);

  if (!id) {
    return <div>No id</div>;
  }

  const handleChange = (event: React.FocusEvent<HTMLInputElement>, fieldId: string) => {
    const newValue = event.target.value;
    setFormData({ ...formData, [fieldId]: newValue });
  };

  return (
    <TextField

      id={id}
      focused={true}
      label='Nombre'
      onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
        handleChange(event, id)
      } />
  );
}