import { FormContext } from "@/context/FormContext";
import { useContext } from "react";
import { AreaDetail, PruritoDetail, SeborreaDetail } from "../../public/Listas/index"
import {
  Prurito,
  Seborrea,
  Simetria,
  Area,
  Codigos
} from "../../public/Tablas/Diagnostico/index";

interface filterProps {
  condicion: string;
  enfermedadesPosibles: string[];
}

function filter({ condicion, enfermedadesPosibles }: filterProps) {
  if (condicion != undefined) {
    Prurito.map(enfermedad => {
      if (!enfermedad.Prurito.includes(condicion as typeof PruritoDetail[number])) {
        enfermedadesPosibles = enfermedadesPosibles.filter((value) => value !== enfermedad.ID)
      }
    });
  }
  return enfermedadesPosibles;
}

export default function EncontrarDiagnostico() {
  const { formData } = useContext(FormContext);

  var enfermedadesPosibles: string[] = Object.keys(Codigos);

  const conditions = [
    formData.Prurito,
    formData.Seborrea,
    formData.Simetria,
    formData.Area,
  ];

  for (var condition of conditions) {
    enfermedadesPosibles = filter({
      condicion: condition,
      enfermedadesPosibles: enfermedadesPosibles,
    })
  }

  console.log("     Posibles:" + enfermedadesPosibles.length)
  for (var key in enfermedadesPosibles) {
    console.log(Codigos[enfermedadesPosibles[key]])
  };


  return (<a></a>)
}

