import React from 'react';
import { FullDataBase } from '../../../../public/data/index'
import ListItem from './ListItem';
import { List } from '@mui/material';

interface DataListProps {
    capitulos: FullCharapters
}

export default function DataList({ capitulos }: DataListProps) {

    if (!capitulos) {
        return <div>No hay enfermedades disponibles para este capitulo</div>
    }

    return (
        <List
            sx={{ textAlign: 'center' }}>
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
        return (
            <ListItem
                id={enfermedadData.ID}
                name={enfermedadData.NAME} />
        );
    }
    return null
}