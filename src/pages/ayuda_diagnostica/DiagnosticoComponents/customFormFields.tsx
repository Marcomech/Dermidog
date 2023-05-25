import theme from "@/constants/themes";
import { FormContext } from "@/context/FormContext";
import { SelectChangeEvent, MenuItem, FormControl, InputLabel, Select, OutlinedInput, TextField } from "@mui/material";
import { useContext } from "react";

type FieldProps = {
  id: string;
  options?: string[];
}

export function Text(data: FieldProps) {
  const { id } = data;

  const { formData, setFormData } = useContext(FormContext);

  const handleChange = (event: React.FocusEvent<HTMLInputElement>, fieldId: string) => {
    const newValue = event.target.value;
    setFormData({ ...formData, [fieldId]: newValue });
  };

  return (
    <FormControl
      focused={true}>

      <TextField
        id={id}
        focused={true}
        label='Nombre'
        onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
          handleChange(event, id)
        } />
    </FormControl >)
}

export function DropDown(data: FieldProps) {
  const { id, options } = data;
  const { formData, setFormData } = useContext(FormContext);

  const handleChange = (event: SelectChangeEvent<string>, fieldId: string) => {
    const newValue = event.target.value;
    setFormData({ ...formData, [fieldId]: newValue });
  };

  const menuOptions = [
    <MenuItem key='default' value="">
      <em>No Definido</em>
    </MenuItem>,
    options!.map((option) => (
      <MenuItem key={option} value={option}>
        {option}
      </MenuItem>
    ))]

  return (
    <FormControl
      sx={{ width: '225px' }}
      focused={true}>
      <InputLabel id="DropDown">{id.replace(/([a-z])([A-Z])/g, "$1 $2")}</InputLabel>
      <Select
        MenuProps={{ PaperProps: { sx: { bgcolor: theme.palette.primary.light, } } }}
        labelId="SelectLabelId"
        id={id}
        value={(typeof formData[id] == 'undefined'
          ? '' : formData[id])}
        onChange={(event: SelectChangeEvent<string>) =>
          handleChange(event, id)}
        input={<OutlinedInput label={id} />}>
        {menuOptions}
      </Select>
    </FormControl >
  );
}