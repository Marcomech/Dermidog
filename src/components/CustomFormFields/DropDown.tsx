import React, { useContext } from 'react';
import theme from '@/constants/themes';
import { FormContext } from '@/context/FormContext';
import { SelectChangeEvent, MenuItem, InputLabel, Select, OutlinedInput } from '@mui/material';
import { FieldProps } from '.';

export default function DropDown(data: FieldProps) {
  const { id, options, disabled } = data;
  const { formData, setFormData } = useContext(FormContext);

  if (!id) {
    return <div>No id</div>;
  }

  const handleChange = (event: SelectChangeEvent<string>, fieldId: string) => {
    const newValue = event.target.value;
    setFormData({ ...formData, [fieldId]: newValue });
  };

  let menuOptions = [
    <MenuItem key='default' value=''>
      <em>No Definido</em>
    </MenuItem>,
  ];

  if (options && Array.isArray(options)) {
    options.map((option) => (
      menuOptions = menuOptions.concat(
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      )
    ));
  }


  return (
    <>
      <InputLabel id="DropDown">
        {id.replace(/([a-z])([A-Z])/g, '$1 $2')}
      </InputLabel>
      <Select
        MenuProps={{
          PaperProps: { sx: { bgcolor: theme.palette.primary.light, } },
        }}
        id={id}
        value={(typeof formData[id] == 'undefined'
          ? '' : formData[id])}
        input={
          <OutlinedInput label={id} />
        }
        disabled={disabled}
        onChange={(event: SelectChangeEvent<string>) =>
          handleChange(event, id)}
      >
        {menuOptions}
      </Select>
    </ >


  );
}