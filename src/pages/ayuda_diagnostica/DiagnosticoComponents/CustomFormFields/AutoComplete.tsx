import theme from "@/constants/themes";
import { FormContext } from "@/context/FormContext";
import { FormControl, TextField, Autocomplete } from "@mui/material";
import { SyntheticEvent, useContext } from "react";

type FieldProps = {
  id: string;
  options?: string[];
  disabled: boolean,
}

export default function AutoComplete(data: FieldProps) {
  const { id, options, disabled } = data;
  const { formData, setFormData } = useContext(FormContext);

  if (!id) {
    return <div>No id</div>;
  }

  const handleChange = (event: SyntheticEvent<Element, Event>, fieldId: string, newValue: string) => {

    setFormData({ ...formData, [fieldId]: newValue });
    console.log(formData)
  };

  var menuOptions = [
    { label: "No Definido", value: "" },
  ]

  if (options && Array.isArray(options)) {
    options.map((option) => (
      menuOptions = menuOptions.concat(
        { label: option, value: option }
      )
    ))
  }

  return (
    <FormControl
      sx={{ width: '225px' }}
      focused={true}>
      <Autocomplete
        autoHighlight
        openOnFocus
        autoComplete
        noOptionsText={'Busque un area diferente'}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        componentsProps={{
          paper: { sx: { bgcolor: theme.palette.primary.light, } },
        }}
        options={menuOptions}
        id={id}
        renderInput={(params) =>
          <TextField {...params} focused={true}
            label={id.replace(/([a-z])([A-Z])/g, "$1 $2")} />
        }
        disabled={disabled}
        onChange={(event, newValue) => {
          var value = newValue?.value ?? ""
          handleChange(event, id, value)
        }}
      />
    </FormControl >
  );
}