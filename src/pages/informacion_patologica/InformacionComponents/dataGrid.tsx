import React from 'react';
import Grid from "@mui/material/Unstable_Grid2"
import { FullDataBase } from '../../../../public/data/index'
import GridItem from './gridItem';

interface DataGridProps {
    capitulos: FullCharapters
}

export default function DataGrid({ capitulos }: DataGridProps) {
    return <Grid
        container
        spacing={2}>
        {capitulos.ENFERMEDADES.map((enfermedadCap) => (
            FullDataBase.map((enfermedadData, index) => {
                const string_1 = enfermedadData.NAME.normalize('NFD').replace(/\p{Diacritic}/gu, '').toUpperCase();
                const string_2 = enfermedadCap.normalize('NFKD').replace(/\p{Diacritic}/gu, '').toUpperCase();
                if (string_1 === string_2) {
                    return (
                        <Grid xs={12} sm={6} md={4} lg={3} key={index} >
                            <GridItem
                                id={enfermedadData.ID}
                                data={enfermedadData.DATA}
                                name={enfermedadData.NAME} />
                        </Grid>
                    )
                }
            })
        ))}
    </Grid>
}