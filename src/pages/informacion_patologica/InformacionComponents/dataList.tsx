import React from 'react';
import { FullDataBase } from '../../../../public/data/index'
import ListItem from './ListItem';
import { Box, List } from '@mui/material';

interface DataListProps {
    capitulos: FullCharapters
}

export default function DataList({ capitulos }: DataListProps) {

    if (!capitulos) {
        return <div>No hay enfermedades disponibles para este capitulo</div>
    }

    return (
        <List>
            {capitulos.ENFERMEDADES.map((enfermedadCap: string) => (
                FullDataBase.map((enfermedadData: FullData, index: number) => {
                    return (
                        compareNames(enfermedadCap, enfermedadData, index));
                })
            ))}
        </List>
    )
}

function compareNames(enfermedadCap: string, enfermedadData: FullData, index: number) {
    const string_1 = enfermedadData.NAME.normalize('NFD').replace(/\p{Diacritic}/gu, '').toUpperCase();
    const string_2 = enfermedadCap.normalize('NFKD').replace(/\p{Diacritic}/gu, '').toUpperCase();
    if (string_1 === string_2) {
        return (<Box marginBottom={2}>
            <ListItem
                id={enfermedadData.ID}
                data={enfermedadData.DATA}
                name={enfermedadData.NAME} />
        </Box>);
    }
    return null
}