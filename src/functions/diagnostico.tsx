import { useState, useEffect } from "react";
import { FormContext } from "@/context/FormContext";
import { useContext } from "react";
import { Codigos } from "../../public/data/index"
import { Prurito, Area } from "../../public/Diagnostico/index";
import { gif1 } from "../../public/Assets/Gifs";
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
            value !== enfermedad.NAME)
        }
      });
    }
    return filteredDiagnostico;
  };

  useEffect(() => {
    console.log(filteredDiagnostico)
    filteredDiagnostico = filterEnfermedades(formData.AreaInvolucrada, Area, 'Area');
    console.log(filteredDiagnostico)
    filteredDiagnostico = filterEnfermedades(formData.Prurito, Prurito, 'Prurito');
    console.log(filteredDiagnostico)
    //filteredDiagnostico = filterEnfermedades(formData.Seborrea, Seborrea, 'Seborrea');
    //console.log(filteredDiagnostico)
    //filteredDiagnostico = filterEnfermedades(formData.Raza, Raza, 'Raza');
    //console.log(filteredDiagnostico)
    //filteredDiagnostico = filterEnfermedades(formData.Sexo, Sexo, 'Sexo');
    //console.log(filteredDiagnostico)
    //filteredDiagnostico = filterEnfermedades(formData.Edad, Edad, 'Edad');
    //console.log(filteredDiagnostico)
    //filteredDiagnostico = filterEnfermedades(formData.Simetria, Simetria, 'Simetria');
    //console.log(filteredDiagnostico)
    //filteredDiagnostico = filterEnfermedades(formData.LesionesGenerales, LesionesGenerales, 'LesionesGenerales');
    //console.log(filteredDiagnostico)
    //filteredDiagnostico = filterEnfermedades(formData.LesionesDermicas, LesionesDermicas, 'LesionesDermicas');

    //console.log(filteredDiagnostico)
    setDiagnostico(filteredDiagnostico);
    setLoading(false);
  }, [formData]);


  return (<>
    {
      loading ?
        (<a>Cargando...</a>
          //TODO: Ver imagenes
          // <Image
          //   src={gif1}
          //   alt=''
          //   width="0"
          //   height="0"
          //   sizes="100vw"
          //   style={{
          //     width: '36%',
          //     height: 'auto',
          //     display: 'block',
          //     marginLeft: 'auto',
          //     marginRight: 'auto',
          //   }}
          // />
        )
        : (
          Diagnostico.map((item, index) => (
            < ListItem
              key={index}
              name={item}
            />
          ))
        )
    }
  </>)
}
