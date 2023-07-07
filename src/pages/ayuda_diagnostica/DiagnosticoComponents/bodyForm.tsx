import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import DropDown from '../../../components/CustomFormFields/DropDown';
import Text from '../../../components/CustomFormFields/Text';
import { FormFields } from '../../../../public/data';
import AutoComplete from '../../../components/CustomFormFields/AutoComplete';


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
            {
              field.type === 'Text'
                ? <Text id={field.id} />
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
          </Grid>
        );
      })}
    </ Grid >
  );
}
