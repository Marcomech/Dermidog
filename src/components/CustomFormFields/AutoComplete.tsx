import React, { useContext } from 'react';
import theme from '@/constants/themes';
import { FormContext } from '@/context/FormContext';
import { TextField, Autocomplete } from '@mui/material';
import { FieldProps } from '.';

export default function AutoComplete(data: FieldProps) {
  const { id, options, disabled } = data;
  const { formData, setFormData } = useContext(FormContext);

  if (!id) {
    return <div>No id</div>;
  }

  const handleChange = (fieldId: string, newValue: string) => {
    setFormData({ ...formData, [fieldId]: newValue });
  };

  let menuOptions = [
    { label: 'No Definido', value: '' },
  ];

  if (options && Array.isArray(options)) {
    options.map((option) => (
      menuOptions = menuOptions.concat(
        { label: option, value: option }
      )
    ));
  }

  return (
    <Autocomplete
      componentsProps={{
        paper: { sx: { bgcolor: theme.palette.primary.light, } },
      }}
      autoHighlight
      openOnFocus
      autoComplete
      noOptionsText={'No se encontro ningún área'}
      isOptionEqualToValue={(option, value) => option.value === value.value}

      options={menuOptions}
      id={id}
      renderInput={(params) =>
        <TextField
          {...params}
          focused={true}

          label={id.replace(/([a-z])([A-Z])/g, '$1 $2')} />
      }
      disabled={disabled}
      onChange={(_event, newValue) => {
        const value = newValue?.value ?? '';
        handleChange(id, value);
      }}
    />
  );
}