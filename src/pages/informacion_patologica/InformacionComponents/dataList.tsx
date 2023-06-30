import { List } from '@mui/material';
import { FullDataType } from '../../../../public/data/FullData';
import { FullData } from '../../../../public/data/index';
import ListItem from './ListItem';

interface DataListProps {
    enfermedades: string[],
}

export default function DataList({ enfermedades }: DataListProps) {

    if (!enfermedades) {
        return <p>No hay enfermedades disponibles para este capitulo</p>
    }
    return (
        <List
            sx={{ textAlign: 'center' }}>
            {enfermedades.map((enfermedadCap) => (
                FullData.map((enfermedadData: FullDataType, index: number) => {
                    return (
                        compareNames(enfermedadCap, enfermedadData.NAME, index)
                    );
                })
            ))}
        </List>
    )
}

function compareNames(enfermedadCap: string, enfermedad: string, index: number) {
    if (enfermedadCap === enfermedad) {
        return (<ListItem name={enfermedad} key={'ListItem' + { enfermedad }} />);
    }
    return null
}