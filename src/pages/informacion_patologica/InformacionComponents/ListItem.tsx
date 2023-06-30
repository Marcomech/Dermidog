import { Button, Dialog } from '@mui/material';
import { useState } from 'react';
import DetailInfo from './detailInfo';

interface ListItemProps {
    name: string
}

export default function ListItem({ name }: ListItemProps) {

    const [open, setOpen] = useState(false)
    const handleOpen = () => { setOpen(true) };
    const handleClose = () => { setOpen(false) };

    return (<>
        <Button
            key={name + "Button"}
            sx={{ marginBottom: 2, }}
            variant="contained" onClick={handleOpen} fullWidth>
            {name}
        </Button>
        <Dialog
            key={name + "Dialog"}
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