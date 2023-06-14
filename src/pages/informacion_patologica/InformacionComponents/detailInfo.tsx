import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { TreeView, TreeItem } from '@mui/lab';
import { ExpandMore, ChevronRight, RateReviewRounded } from '@mui/icons-material';
import { FullData } from '../../../../public/data';
import { Data } from '../../../../public/data/FullData';
import type { ImageLoaderProps } from 'next/image';
import Image from 'next/image';

interface detailInfoProps {
    title: string
}

const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
    console.log(`https://marcomech.github.io/Dermidog/Assets/Dermogramas/${src}.jpg`)
    //return `http://localhost:3000/Assets/Dermogramas/${src}.jpg`
    return `https://marcomech.github.io/Dermidog/Assets/Dermogramas/${src}.jpg?w=${width}&q=${quality || 75}`
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
            TreeItems.push(StyleImage(key, value.toString()));
        } else {
            TreeItems.push(
                <TreeItem key={key} nodeId={key} label=
                    {
                        <Typography variant='h6' key={key + "Title"}>
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

function StyleImage(key: string, value: string) {
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
                    loading='lazy'
                    loader={myLoader}
                    src={`/Dermidog/Assets/Dermogramas/${value}.jpg`}
                    alt={'Dermograma_' + value}
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