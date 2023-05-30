import { useState, useEffect } from "react";
import { FormContext } from "@/context/FormContext";
import { useContext } from "react";
import { Codigos } from "../../public/data/index"
import { Prurito, Seborrea, Area } from "../../public/Diagnostico/index";
import { Typography } from "@mui/material";
import { gif1 } from "@/assets";
import Image from "next/image";

export default function EncontrarDiagnostico() {

  const { formData } = useContext(FormContext);
  var enfermedadesPosibles: string[] = Object.keys(Codigos);

  const [loading, setLoading] = useState(true);

  //useEffect(() => {
  //  const timer = setTimeout(() => {
  //    setShowImage(false);
  //  }, 2000);
  //  return () => {
  //    clearTimeout(timer);
  //  };
  //}, []);

  //console.log('Total:' + enfermedadesPosibles)

  const filterEnfermedades = (formData: string, datos: any, propiedad: string) => {
    if (formData !== undefined) {
      datos.map((enfermedad: any) => {
        if (!enfermedad[propiedad].includes(formData)) {
          enfermedadesPosibles = enfermedadesPosibles.filter((value) => value !== enfermedad.ID);
        }
      });
    }
  };

  filterEnfermedades(formData.AreaInvolucrada, Area, 'Area');
  filterEnfermedades(formData.Prurito, Prurito, 'Prurito');
  filterEnfermedades(formData.Seborrea, Seborrea, 'Seborrea');

  return (
    <>
      <Typography >
        Enfermedades posibles
      </Typography>

      {
        loading ?
          (
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
            />)
          : (
            enfermedadesPosibles.map((item, index) => (
              <Typography variant="body2" key={index}>
                {Codigos[enfermedadesPosibles[index]]}
              </Typography>
            ))
          )

      }


    </>
  )
}
