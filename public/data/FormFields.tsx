import { RazaValuesEx } from "../Diagnostico/Listas/Razas";
import {
  AreaValues,
  LesionesDermicasValues,
  LesionesGeneralesValues,
  PruritoValues,
  SeborreaValues,
} from "../Diagnostico/index";

type formType = {
  page: number,
  fields: {
    type: "Text" | "DropDown",
    id: string,
    options: string[]
    disabled: boolean
  }[]
}

export const FormFields: formType[] = [
  {
    page: 0,
    fields: [
      {
        type: "Text",
        id: "Nombre",
        options: [],
        disabled: false,
      }, {
        type: "DropDown",
        id: "Raza",
        options: RazaValuesEx,
        disabled: true,
      },
      {
        type: "DropDown",
        id: "Sexo",
        options: ['Macho', 'Hembra'],
        disabled: true,
      },
      {
        type: "DropDown",
        id: "Edad",
        options: ['Cachorro', 'Joven', 'Adulto'],
        disabled: true,
      }]
  },
  {
    page: 1,
    fields: [
      {
        type: "DropDown",
        id: 'AreaInvolucrada',
        options: AreaValues as unknown as string[],
        disabled: false,
      }]
  },
  {
    page: 2,
    fields: [
      {
        type: "DropDown",
        id: 'Prurito',
        options: PruritoValues as unknown as string[],
        disabled: false,
      },
      {
        type: "DropDown",
        id: 'Seborrea',
        options: SeborreaValues as unknown as string[],
        disabled: true,
      }]
  },
  {
    page: 3,
    fields: [
      {
        type: "DropDown",
        id: 'Simetria',
        options: [
          'No resulta claro o concluytente',
          'Mas bien, diria que esta "al medio"',
          'No, son asimetricas y/o unilaterales',
          'Si, son simetricas y/o bilaterales',
        ],
        disabled: true,
      }]
  },
  {
    page: 4,
    fields: [
      {
        type: "DropDown",
        id: 'LesionesGenerales',
        options: LesionesGeneralesValues as unknown as string[],
        disabled: true,
      },
      {
        type: "DropDown",
        id: 'LesionesDermicas',
        options: LesionesDermicasValues as unknown as string[],
        disabled: true,
      },
    ]
  }
]