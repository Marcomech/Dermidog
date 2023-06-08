import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { TreeView, TreeItem } from '@mui/lab';
import { ExpandMore, ChevronRight } from '@mui/icons-material';
import { FullData } from '../../../../public/data';
import { Data } from '../../../../public/data/FullData';
import Image from 'next/image';

interface detailInfoProps {
    title: string
}

export default function DetailInfo({ title }: detailInfoProps) {
    let data = FullData.find((data) => data.NAME === title)?.DATA

    if (!data) {
        return <p>No hay informacion disponible</p>;
    }

    return (<Box padding={2}>
        <Typography variant='h4' align='center' padding={1}>
            {title}
        </Typography>
        <TreeView
            aria-label="controlled"
            defaultCollapseIcon={<ExpandMore />}
            defaultExpandIcon={<ChevronRight />}
            sx={{ flexGrow: 1, }}
        >
            {DataToTree(data)}
        </TreeView>
    </Box>
    );
}


function DataToTree(data: Data) {
    let TreeItems: JSX.Element[] = [];

    Object.entries(data).forEach(([key, value]) => {
        if (key === 'CODIGO') {
            TreeItems.push(StyleImage(key, value));
        } else {
            TreeItems.push(
                <TreeItem key={key} nodeId={key} label=
                    {
                        <Typography variant='h6'>
                            {key.replaceAll("_", " ")}
                        </Typography>
                    }>
                    <TreeItem nodeId="2" label={
                        <Box padding={1}>
                            {StileContent(value)}
                        </Box>
                    } />
                </TreeItem>
            );
        }
    })
    return TreeItems
}

function StileContent(value: string[] | string) {
    let contenido: JSX.Element[] = []
    if (typeof value === 'string') {
        return value
    }
    value.forEach((item, index) => {
        contenido.push(
            <Typography variant='body1' key={index}>
                {item}
                <br />
            </Typography>
        )
    });
    return contenido
}

function StyleImage(key: string, value: string | string[]) {
    return <TreeItem
        key={key} nodeId={key}
        label={
            <Typography variant='h6'>
                DERMOGRAMA
            </Typography>
        }>
        <TreeItem nodeId="2" label={
            <Box padding={1}>
                <Image
                    src={`/Dermogramas/${value}.JPG`}
                    alt={'Dermograma'}
                    width={200}
                    height={200}
                    style={{
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }} />
            </Box>
        } />
    </TreeItem>
}