import {
  RazaValues,
  AreaValues,
  LesionesDermicasValues,
  LesionesGeneralesValues,
  PruritoValues,
  SeborreaValues,
} from "../Diagnostico/index";

type formType = {
  page: number,
  fields: {
    type: "Text" | "DropDown" | "AutoComplete",
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
        type: "AutoComplete",
        id: "Raza",
        options: RazaValues as unknown as string[],
        disabled: true,
      },
      {
        type: "AutoComplete",
        id: "Sexo",
        options: ['Macho', 'Hembra'],
        disabled: true,
      },
      {
        type: "AutoComplete",
        id: "Edad",
        options: ['Cachorro', 'Joven', 'Adulto'],
        disabled: true,
      }]
  },
  {
    page: 1,
    fields: [
      {
        type: "AutoComplete",
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
        type: "AutoComplete",
        id: 'Seborrea',
        options: SeborreaValues as unknown as string[],
        disabled: true,
      }]
  },
  {
    page: 3,
    fields: [
      {
        type: "AutoComplete",
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
        type: "AutoComplete",
        id: 'LesionesGenerales',
        options: LesionesGeneralesValues as unknown as string[],
        disabled: true,
      },
      {
        type: "AutoComplete",
        id: 'LesionesDermicas',
        options: LesionesDermicasValues as unknown as string[],
        disabled: true,
      },
    ]
  }
]