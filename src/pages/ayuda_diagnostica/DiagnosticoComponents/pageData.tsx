import * as React from 'react';
import Grid from "@mui/material/Unstable_Grid2"
import DropDown from './CustomFormFields/DropDown';
import Text from './CustomFormFields/Text';
import { FormFields } from '../../../../public/data/index';
import { gif2, gif3 } from "../../../assets/index"

import Image from 'next/image';

interface PageContProps {
    actualPage: number
}

export default function GridData(data: PageContProps) {
    const univen = (FormFields[data.actualPage].fields.length) % 2 === 0;

    return <div >
        <Image
            alt=''
            src={data.actualPage < 2 ? gif3 : gif2}
            style={{
                'display': 'block',
                'marginLeft': 'auto',
                'marginRight': 'auto',
                'height': '190px',
                'objectFit': 'contain'
            }}
            width={200} height={200} />
        <Grid
            container
            direction="row"
            justifyContent={univen ? 'space-evenly' : 'flex-start'}
            alignItems='flex-end'
            paddingX={3}
            spacing={2}
            paddingTop={3}
            key={data.actualPage}
        >
            {FormFields[data.actualPage].fields.map((field) => {
                return (
                    <Grid key={data.actualPage + field.id}>
                        {field.type === 'Text'
                            ? <Text id={field.id} />
                            : field.type === 'DropDown' && field.id
                                ? <DropDown
                                    id={field.id}
                                    options={field.options} />
                                : null}
                    </Grid>
                )
            })}
        </ Grid >
    </div>
}
