import { useState, useEffect } from "react";
import { FormContext } from "@/context/FormContext";
import { useContext } from "react";
import { Codigos } from "../../public/data/index"
import { Prurito, Seborrea, Area } from "../../public/Diagnostico/index";
import { Typography } from "@mui/material";
import { gif1 } from "@/assets";
import Image from "next/image";
import ListItem from "@/pages/informacion_patologica/InformacionComponents/ListItem";

export default function EncontrarDiagnostico() {

  const { formData } = useContext(FormContext);
  var enfermedadesPosibles: string[] = Object.keys(Codigos);

  const [loading, setLoading] = useState(true);
  const [Diagnostico, setDiagnostico] = useState(enfermedadesPosibles);
  let filteredDiagnostico = Diagnostico;

  console.log(formData)

  const filterEnfermedades = (formDataFilter: string, datos: any, propiedad: string) => {
    if (formDataFilter !== undefined && formDataFilter !== '') {
      datos.forEach((enfermedad: any) => {
        if (!enfermedad[propiedad].includes(formDataFilter)) {
          filteredDiagnostico = filteredDiagnostico.filter((value) =>
            value !== enfermedad.ID)
        }
      });
      console.log(filteredDiagnostico + propiedad);
    }
    return filteredDiagnostico;
  };

  useEffect(() => {
    let filteredDiagnostico = filterEnfermedades(formData.AreaInvolucrada, Area, 'Area');
    filteredDiagnostico = filterEnfermedades(formData.Prurito, Prurito, 'Prurito');
    filteredDiagnostico = filterEnfermedades(formData.Seborrea, Seborrea, 'Seborrea');
    setDiagnostico(filteredDiagnostico);
    setLoading(false);
  }, [formData]);


  return (
    <>
      <Typography >
        Enfermedades posibles
      </Typography>

      {
        loading ?
          (
            <Image
              src={gif1}
              alt=''
              width="0"
              height="0"
              sizes="100vw"
              style={{
                width: '36%',
                height: 'auto',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
          )
          : (
            Diagnostico.map((item, index) => (
              <ListItem
                key={index}
                name={Codigos[item]}
              />
            ))
          )
      }
    </>
  )
}
