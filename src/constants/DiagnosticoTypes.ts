import { AreaDetail, PruritoDetail, SeborreaDetail } from "../../public/Listas/index"

export type SeborreaType = {
  CodigoSeborrea: number
  Seborrea: typeof SeborreaDetail[number]
  ID: string
}
export type PruritoType = {
  CodigoPrurito: number
  Prurito: typeof PruritoDetail[number][]
  ID: string
}
export type AreaType = {
  Area: typeof AreaDetail[number][]
  ID: string
}

export type SimetriaType = {
  Simetria: string
  ID: string
}

export type CodigosType =
  Record<string, string>;





