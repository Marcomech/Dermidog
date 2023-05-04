import React from 'react';
import { Box, Typography } from '@mui/material';
import GlobalLayout from "@/layouts";
import DataGrid from '@/components/dataGrid';
import { Charapters } from '../../public/data/Capitulos';

export default function Home() {
  return (
    <GlobalLayout>
      <Typography align='center' variant='h1' marginTop={1} >Dermidog</Typography>
      < Box sx={{ flexGrow: 1 }} marginX={2}>
        {
          Charapters.map((capitulos) => (
            <>
              <Typography variant='h4' marginBottom={1} marginTop={4}>
                {capitulos.TITULO}
              </Typography>
              <DataGrid capitulos={capitulos} />
            </>
          ))}
      </Box>
    </GlobalLayout>
  )
}

//import { Charapters } from '../../public/data/Capitulos'
//import { FullDataBase } from '../../public/data/newData';
//
//
//export default function Home() {
//  return (
//    <GlobalLayout>
//      {
//        FullDataBase.map((enfermedades) => (
//          <Typography variant='body2' >
//            {enfermedades.name}
//          </Typography>)
//        )}
//    </GlobalLayout>
//  )
//}