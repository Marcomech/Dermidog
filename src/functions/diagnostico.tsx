import { FormContext } from "@/context/FormContext";
import { useContext } from "react";
import { AreaDetail, PruritoDetail, SeborreaDetail } from "../../public/Listas/index"
import { Codigos } from "../../public/data/index"
import { Prurito, Seborrea, Simetria, Area } from "../../public/Diagnostico/index";
import { Typography } from "@mui/material";

export default function EncontrarDiagnostico() {
  const { formData } = useContext(FormContext);

  var enfermedadesPosibles: string[] = Object.keys(Codigos);

  console.log('Total:' + enfermedadesPosibles)

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


  //console.log("     Posibles:" + enfermedadesPosibles.length)
  //for (var key in enfermedadesPosibles) {
  //  (Codigos[enfermedadesPosibles[key]])
  //};

  return (
    <>
      <Typography >
        Enfermedades posibles
      </Typography>
      {enfermedadesPosibles.map((item, index) => (
        <Typography variant="body2" key={index}>
          {Codigos[enfermedadesPosibles[index]]}
        </Typography>
      ))}
    </>
  )
}




/*
    if (formData.AreaInvolucrada != undefined) {
      Area.map((enfermedad) => {
        if (!enfermedad.Area.includes(formData.AreaInvolucrada)) {
          enfermedadesPosibles = enfermedadesPosibles.filter((value) => value !== enfermedad.ID)
        }
      });
    }
  
    if (formData.Prurito != undefined) {
      Prurito.map((enfermedad) => {
        if (!enfermedad.Prurito.includes(formData.Prurito)) {
          enfermedadesPosibles = enfermedadesPosibles.filter((value) => value !== enfermedad.ID)
        }
      });
    }
  
  
    if (formData.Seborrea != undefined) {
      Seborrea.map((enfermedad) => {
        if (!enfermedad.Seborrea.includes(formData.Seborrea)) {
          enfermedadesPosibles = enfermedadesPosibles.filter((value) => value !== enfermedad.ID)
        }
      });
    }
    */
