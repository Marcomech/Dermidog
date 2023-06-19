import React, { useState } from 'react';
import { useRouter } from "next/router";
import { Box } from '@mui/material';
import SpeedDial from '@mui/material/SpeedDial';

import { SpeedDialIcon, SpeedDialAction } from '@mui/material';
import {
  HomeOutlined, MenuBookOutlined,
  LocalHospitalOutlined, HealingOutlined, Menu, MenuOpen, CropSharp, Close
} from '@mui/icons-material';

const actions = [
  { icon: <HomeOutlined />, path: "/", name: 'Inicio' },
  { icon: <MenuBookOutlined />, path: "/informacion_patologica", name: 'Información Patológica' },
  { icon: <HealingOutlined />, path: "/ayuda_diagnostica", name: 'Ayuda Diagnóstica' },
];

export default function GlobalMenu() {
  const router = useRouter()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOnClick = (page: string) => {
    router.push(page);
    handleClose();
  };
  return (
    <SpeedDial
      ariaLabel="SpeedDial"
      sx={{
        marginTop: 2,
        marginRight: 1,
        position: 'absolute', top: 0, right: 0,
        '& .MuiFab-primary': {
          '& .MuiSpeedDialIcon-icon': { fontSize: 30, paddingBottom: 0.7 },
          '& .MuiSpeedDialIcon-openIcon': { fontSize: 30, paddingBottom: 0.7 }
        }
      }}
      icon={<SpeedDialIcon
        icon={<Menu />}
        openIcon={<Close />}
      />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction='down'
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => handleOnClick(action.path)}
        />
      ))}
    </SpeedDial>
  );
}
