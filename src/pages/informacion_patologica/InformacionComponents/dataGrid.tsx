import React from 'react';
import Grid from "@mui/material/Unstable_Grid2"
import { FullDataBase } from '../../../../public/data/index'
import GridItem from './gridItem';
import { List } from '@mui/material';

interface DataGridProps {
    capitulos: FullCharapters
}

export default function DataGrid({ capitulos }: DataGridProps) {

    if (!capitulos) {
        return <div>No hay enfermedades disponibles para este capitulo</div>
    }

    return (
        <List>
            {
                capitulos.ENFERMEDADES.map((enfermedadCap: string) => (
                    FullDataBase.map((enfermedadData: FullData, index: number) => {
                        //const string_1 = enfermedadData.NAME.normalize('NFD').replace(/\p{Diacritic}/gu, '').toUpperCase();
                        //const string_2 = enfermedadCap.normalize('NFKD').replace(/\p{Diacritic}/gu, '').toUpperCase();
                        //if (string_1 === string_2) {
                        //    return (
                        //        <Grid xs={12} sm={6} md={4} lg={3} key={index} >
                        //            <GridItem
                        //                id={enfermedadData.ID}
                        //                data={enfermedadData.DATA}
                        //                name={enfermedadData.NAME} />
                        //        </Grid>
                        //    );
                        //}
                        return (compareNames(
                            enfermedadCap,
                            enfermedadData,
                            index
                        ));
                    })
                ))
            }
        </List>
    )
}
function compareNames(enfermedadCap: string, enfermedadData: FullData, index: number) {
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
        );
    }
    return null
}