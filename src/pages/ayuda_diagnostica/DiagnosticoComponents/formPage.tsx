import React, { useState, useEffect } from 'react';
import { gif1 } from "../../../assets/index"
import Image from 'next/image';
import EncontrarDiagnostico from '@/functions/diagnostico';
import GridData from './pageData';
import { Box } from '@mui/material';

interface PageContProps {
  actualPage: number
}

export default function Page(data: PageContProps) {
  const { actualPage } = data;
  return (
    <Box height={250}>
      {actualPage < 5
        ? <GridData actualPage={actualPage} />
        : <ImgData />
      }
    </Box>
  )
}

const ImgData = () => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {showImage
        ?
        <Image
          alt=''
          src={gif1}
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            height: '190px',
            objectFit: 'contain',
          }}
          width={200}
          height={200}
        />

        : <EncontrarDiagnostico />}
    </>
  )
}

