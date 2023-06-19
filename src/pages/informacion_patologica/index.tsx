import GlobalLayout from "@/layouts";
import DataList from '@/pages/informacion_patologica/InformacionComponents/dataList';
import { Box, Typography } from '@mui/material';
import { Capitulos } from '../../../public/data/index';
export default function InformacionPatologica() {
  return (
    <GlobalLayout>
      <Typography align='left' variant='h2' marginTop={1}>
        Atlas computado de dermatologia canina
      </Typography>

      < Box sx={{ flexGrow: 1 }} marginX={2}>
        {
          Capitulos.map((capitulos) => (
            <div key={capitulos.Titulo + "Container"}>
              <Typography variant='h3' marginBottom={1} marginTop={4} key={capitulos.Titulo}>
                {capitulos.Titulo}
              </Typography>
              <DataList key={capitulos.Titulo + "DataList"} enfermedades={capitulos.Items} />
            </div>
          ))
        }
      </Box>
    </GlobalLayout >
  );
}

