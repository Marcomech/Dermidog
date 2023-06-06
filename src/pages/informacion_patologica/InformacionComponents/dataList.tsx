import React from 'react';
import { Codigos, FullDataBase } from '../../../../public/data/index'
import ListItem from './ListItem';
import { List } from '@mui/material';

interface DataListProps {
    enfermedades: {
        ID: string,
        NroItem: number,
    }[],

}

export default function DataList({ enfermedades }: DataListProps) {

    if (!enfermedades) {
        return <div>No hay enfermedades disponibles para este capitulo</div>
    }



    console.log(enfermedades.map((enfermedadCap) => (Codigos[enfermedadCap.ID])))

    return (
        <List
            sx={{ textAlign: 'center' }}>
            {enfermedades.map((enfermedadCap) => (
                FullDataBase.map((enfermedadData: FullData, index: number) => {
                    return (
                        compareNames(
                            Codigos[enfermedadCap.ID],
                            enfermedadData,
                            index)
                    );
                })
            ))}
        </List>
    )
}

function compareNames(enfermedadCap: string, enfermedadData: FullData, index: number) {
    if (enfermedadCap === enfermedadData.NAME) {
        return (
            <ListItem
                id={enfermedadData.ID}
                name={enfermedadData.NAME}
            />
        );
    }
    return null
}