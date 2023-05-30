import theme from "@/constants/themes";
import { FormContext } from "@/context/FormContext";
import { SelectChangeEvent, MenuItem, FormControl, InputLabel, Select, OutlinedInput, TextField } from "@mui/material";
import { useContext } from "react";

type FieldProps = {
  id: string;
  options?: string[];
}

export default function DropDown(data: FieldProps) {
  const { id, options } = data;
  const { formData, setFormData } = useContext(FormContext);

  const handleChange = (event: SelectChangeEvent<string>, fieldId: string) => {
    const newValue = event.target.value;
    setFormData({ ...formData, [fieldId]: newValue });
  };

  var menuOptions = [
    <MenuItem key='default' value="">
      <em>No Definido</em>
    </MenuItem>,
  ]

  if (options && Array.isArray(options)) {
    options.map((option) => (
      menuOptions = menuOptions.concat(
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      )
    ))
  }

  return (
    <a>a</a>
    //<FormControl
    //  sx={{ width: '225px' }}
    //  focused={true}>
    //  <InputLabel id="DropDown">{id.replace(/([a-z])([A-Z])/g, "$1 $2")}</InputLabel>
    //  <Select
    //    MenuProps={{ PaperProps: { sx: { bgcolor: theme.palette.primary.light, } } }}
    //    labelId="SelectLabelId"
    //    id={id}
    //    value={(typeof formData[id] == 'undefined'
    //      ? '' : formData[id])}
    //    onChange={(event: SelectChangeEvent<string>) =>
    //      handleChange(event, id)}
    //    input={<OutlinedInput label={id} />}>
    //    {menuOptions}
    //  </Select>
    //</FormControl >
  );
}