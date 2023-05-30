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
  const [Diagnostico, setDiagnostico] = useState(enfermedadesPosibles);

  //console.log('Total:' + enfermedadesPosibles)

  const filterEnfermedades = (formDataFilter: string, datos: any, propiedad: string) => {
    if (formDataFilter !== undefined) {
      datos.map((enfermedad: any) => {
        if (!enfermedad[propiedad].includes(formDataFilter)) {
          enfermedadesPosibles = enfermedadesPosibles.filter((value) => value !== enfermedad.ID);
        }
      });
    }
    return (enfermedadesPosibles)
  };

  useEffect(() => {

    setDiagnostico(filterEnfermedades(formData.AreaInvolucrada, Area, 'Area'));
    setDiagnostico(filterEnfermedades(formData.Prurito, Prurito, 'Prurito'));
    setDiagnostico(filterEnfermedades(formData.Seborrea, Seborrea, 'Seborrea'));

    setLoading(false);
  }, []);


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
            />
          )
          : (
            Diagnostico.map((item, index) => (
              <Typography variant="body2" key={index}>
                {Codigos[item]}
              </Typography>
            ))
          )
      }
    </>
  )
}
