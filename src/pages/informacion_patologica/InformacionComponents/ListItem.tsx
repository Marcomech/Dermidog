import React, { useState } from 'react';
import { Button, Dialog, Card, CardActions } from '@mui/material';
import DetailInfo from './detailInfo';

interface ListItemProps {
    id: string
    name: string
    //data: Data
}

export default function ListItem(props: ListItemProps) {
    const { id, name
        // , data 
    } = props;

    const [open, setOpen] = useState(false)
    const handleOpen = () => { setOpen(true) };
    const handleClose = () => { setOpen(false) };

    return (<>
        <Button
            key={id}
            sx={{
                marginBottom: 2,
                padding: 1,
                maxWidth: '800px',
                border: '4px solid black'
            }}
            variant="contained" onClick={handleOpen} fullWidth>
            {name}
        </Button>
        <Dialog
            maxWidth='sm'
            scroll='body'
            id={id}
            open={open}
            onClose={handleClose}
            PaperProps={{
                style: { backgroundColor: '#282c34' }
            }}
        >
            <DetailInfo
                //data={data}
                id={id}
                title={name} />
        </Dialog>
    </>
    );
}