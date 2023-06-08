import React, { useState } from 'react';
import { Button, Dialog, Card, CardActions } from '@mui/material';
import DetailInfo from './detailInfo';

interface ListItemProps {
    name: string
}

export default function ListItem({ name }: ListItemProps) {


    console.log(name)
    const [open, setOpen] = useState(false)
    const handleOpen = () => { setOpen(true) };
    const handleClose = () => { setOpen(false) };

    return (<>
        <Button
            key={name}
            sx={{ marginBottom: 2, }}
            variant="contained" onClick={handleOpen} fullWidth>
            {name}
        </Button>
        <Dialog
            fullWidth={true}
            style={{ paddingRight: "10vw", paddingLeft: "10vw" }}
            open={open}
            onClose={handleClose}
            PaperProps={{
                style: { backgroundColor: '#282c34' }
            }}
        >
            <DetailInfo
                title={name} />
        </Dialog>
    </>
    );
}