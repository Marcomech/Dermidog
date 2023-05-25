import { AreaDetail, PruritoDetail, SeborreaDetail } from "../../public/Listas/index";

export const FormFields = [
  {
    page: 1,
    fields: [
      {
        type: "Text",
        id: "Nombre"
      }, {
        type: "DropDown",
        id: "Raza",
        options: ['Pittbull', 'Doberman', 'Rotweiller', 'BullDog']
      },
      {
        type: "DropDown",
        id: "Sexo",
        options: ['Macho', 'Hembra']
      },
      {
        type: "DropDown",
        id: "Edad",
        options: ['Cachorro', 'Adulto', 'Joven']
      }]
  },
  {
    page: 2,
    fields: [
      {
        type: "DropDown",
        id: 'AreaInvolucrada',
        options: AreaDetail
      }]
  },
  {
    page: 3,
    fields: [
      {
        type: "DropDown",
        id: 'Prurito',
        options: PruritoDetail
      },
      {
        type: "DropDown",
        id: 'Seborrea',
        options: SeborreaDetail
      }]
  },
  {
    page: 4,
    fields: [
      {
        type: "DropDown",
        id: 'Simetria',
        options: [
          'No resulta claro o concluytente',
          'Mas bien, diria que esta "al medio"',
          'No, son asimetricas y/o unilaterales',
          'Si, son simetricas y/o bilaterales',
        ]
      }]
  },
  {
    page: 5,
    fields: [
      {
        type: "DropDown",
        id: 'LesionesElementales',
        options: ['1', '2', '3', '4',]
      }]
  },
]