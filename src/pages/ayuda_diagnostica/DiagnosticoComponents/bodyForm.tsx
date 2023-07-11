import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { AutoComplete, DropDown, Text } from '../../../components/CustomFormFields';
import { FormFields } from '../../../../public/data';
import { FormControl } from '@mui/material';
import theme from '@/constants/themes';


interface BodyFormProps {
  actualPage: number
}
export default function BodyForm({ actualPage }: BodyFormProps) {

  const pageFields = FormFields.find((formField) => formField.page === actualPage);
  if (!pageFields) {
    return <div>No fields found for page {actualPage}</div>;
  }

  const Fields = pageFields.fields ?? [];
  const par = Fields.length % 2 === 0;

  return (
    <Grid
      container
      direction="row"
      justifyContent={par ? 'space-evenly' : 'flex-start'}
      alignItems='flex-end'
      spacing={2}
      paddingTop={3}
      key={actualPage}
      columns={{ xs: 4, md: 8 }}
    >
      {Fields.map((field) => {
        return (
          <Grid
            key={actualPage + field.id}
            xs={par ? 4 : 4}
            md={par ? 4 : 8}
          >
            <FormControl
              focused={true}
              sx={{
                width: '100%', height: '100%',
                '.MuiSvgIcon-root': {
                  color: theme.palette.primary.main,
                },
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderRadius: 2,
                    borderWidth: 4,
                    borderColor: theme.palette.primary.main,
                  },
                  '&:hover fieldset': {
                    borderWidth: 5,
                  },
                },
              }}
            >
              {
                field.type === 'Text'
                  ? <Text
                    id={field.id}
                    disabled={field.disabled}
                  />
                  : field.type === 'DropDown' && field.id
                    ? <DropDown
                      id={field.id}
                      options={field.options}
                      disabled={field.disabled}
                    />
                    : field.type === 'AutoComplete' && field.id
                      ?
                      <AutoComplete
                        id={field.id}
                        options={field.options}
                        disabled={field.disabled}
                      />
                      : null
              }
            </FormControl>
          </Grid>
        );
      })}
    </ Grid >
  );
}
