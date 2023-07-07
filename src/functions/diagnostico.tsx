import React, { useState, useEffect, useContext } from 'react';
import { FormContext } from '@/context/FormContext';
import { Codigos } from '../../public/data';
import { Prurito, Area } from '../../public/Diagnostico';
import ListItem from '@/pages/informacion_patologica/InformacionComponents/ListItem';

export default function EncontrarDiagnostico() {

  const { formData } = useContext(FormContext);
  const enfermedadesPosibles: string[] = Object.keys(Codigos);

  const [loading, setLoading] = useState(true);
  const [Diagnostico, setDiagnostico] = useState(enfermedadesPosibles);


  useEffect(() => {
    let filteredDiagnostico = Diagnostico;

    const filterEnfermedades = (formDataFilter: string, datos: any, propiedad: string) => {
      if (formDataFilter == undefined || formDataFilter == '') {
        console.log(propiedad);
      }
      else {
        datos.forEach((enfermedad: any) => {
          if (!enfermedad[propiedad].includes(formDataFilter)) {
            filteredDiagnostico = filteredDiagnostico.filter((value) =>
              value !== enfermedad.NAME);
          }
        });
      }
      return filteredDiagnostico;
    };

    console.log(formData);

    //console.log(filteredDiagnostico);

    filteredDiagnostico = filterEnfermedades(formData.AreaInvolucrada, Area, 'Area');
    //console.log(filteredDiagnostico);
    filteredDiagnostico = filterEnfermedades(formData.Prurito, Prurito, 'Prurito');
    //console.log(filteredDiagnostico);

    //filteredDiagnostico = filterEnfermedades(formData.Seborrea, Seborrea, 'Seborrea');
    //console.log(filteredDiagnostico);
    //filteredDiagnostico = filterEnfermedades(formData.Raza, Raza, 'Raza');
    //console.log(filteredDiagnostico);
    //filteredDiagnostico = filterEnfermedades(formData.Sexo, Sexo, 'Sexo');
    //console.log(filteredDiagnostico);
    //filteredDiagnostico = filterEnfermedades(formData.Edad, Edad, 'Edad');
    //console.log(filteredDiagnostico);
    //filteredDiagnostico = filterEnfermedades(formData.Simetria, Simetria, 'Simetria');
    //console.log(filteredDiagnostico);
    //filteredDiagnostico = filterEnfermedades(formData.LesionesGenerales, LesionesGenerales, 'LesionesGenerales');
    //console.log(filteredDiagnostico);
    //filteredDiagnostico = filterEnfermedades(formData.LesionesDermicas, LesionesDermicas, 'LesionesDermicas');

    setDiagnostico(filteredDiagnostico);
    setLoading(false);

  }, [formData]);

  if (loading) {
    return <a>Cargando...</a>;
  }
  return (<>
    {
      Diagnostico.map((item, index) => (
        < ListItem
          key={index}
          name={item}
        />
      ))
    }
  </>);
}
