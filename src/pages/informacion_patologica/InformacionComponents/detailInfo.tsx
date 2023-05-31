import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { TreeView, TreeItem } from '@mui/lab';
import { ExpandMore, ChevronRight } from '@mui/icons-material';
import { FullDataBase } from '../../../../public/data';
interface detailInfoProps {
    title: string
    id: string
}

export default function DetailInfo(props: detailInfoProps) {
    const { title, id } = props;

    let TreeItems = null;
    let data = FullDataBase.find((data) => data.ID === id)?.DATA
    console.log(data)

    if (!data) {
        return <p>No data available</p>;
    }
    else {
        TreeItems = Object.entries(data).map(([key, value]) => {
            if (value != "") {
                return (
                    <TreeItem key={key} nodeId={key} label=
                        {<Typography variant='h6'>
                            {filterEmpty([key, value])}
                        </Typography>}>
                        <TreeItem nodeId="2" label={
                            <Box padding={1}>
                                <Typography variant='body1' >
                                    {filterContent([key, value])}
                                </Typography>
                            </Box>
                        } />
                    </TreeItem>
                )
            }
        })
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
            {TreeItems}
        </TreeView>
    </Box>
    );
}

function filterContent([key, value]: any) {
    if (key === "AREA_INVOLUCRADA_DERMOGRAMA") {
        return ""
    } else {
        value = value.replaceAll(" - ", "\n")
        value = value.replaceAll(".- ", ".\n ")
        return value
    }
}
function filterEmpty([key, value]: any) {
    if (value === "") {
        return ""
    } else {
        return key.replaceAll("_", " ")
    }
}
