import { AreaDetail, PruritoDetail, SeborreaDetail } from "../Diagnostico/Listas/index";

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
        options: ['Pittbull', 'Doberman', 'Rotweiller', 'BullDog'],
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
        options: ['Cachorro', 'Adulto', 'Joven'],
        disabled: true,
      }]
  },
  {
    page: 1,
    fields: [
      {
        type: "DropDown",
        id: 'AreaInvolucrada',
        options: AreaDetail,
        disabled: false,
      }]
  },
  {
    page: 2,
    fields: [
      {
        type: "DropDown",
        id: 'Prurito',
        options: PruritoDetail,
        disabled: false,
      },
      {
        type: "DropDown",
        id: 'Seborrea',
        options: SeborreaDetail,
        disabled: false,
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
        id: 'LesionesElementales',
        options: ['1', '2', '3', '4',],
        disabled: true,
      }]
  }
]