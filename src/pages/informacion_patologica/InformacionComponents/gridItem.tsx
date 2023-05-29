import React, { useState } from 'react';
import { Button, Dialog, Card, CardActions } from '@mui/material';
import DetailInfo from './detailInfo';

interface DialogProps {
    id: string
    name: string
    data: Data
}

export default function GridItem(props: DialogProps) {
    const { id, name, data } = props;

    const [open, setOpen] = useState(false)
    const handleClick = () => { setOpen(true) };
    const handleClose = () => { setOpen(false) };

    return (
        <Card>
            <CardActions sx={{ backgroundColor: "black" }}>
                <Button
                    sx={{ height: 110 }}
                    variant="contained" onClick={handleClick} fullWidth>
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
                        data={data}
                        id={id}
                        title={name} />
                </Dialog>
            </CardActions>
        </Card >
    );
}