type FullData = {
    id: string,
    name: string,
    data: Data,
}
type FullCharapters = {
    ID: string,
    TITULO: string,
    ENFERMEDADES: string[],
}
type Data = {
    SINÓNIMO?: string,
    ETIOLOGÍA?: string,
    AREA_INVOLUCRADA_DERMOGRAMA?: {
        GENERAL?: string,
        EN_GENERAL?: string,
        DE_DORSAL?: string,
        DE_VENTRAL?: string,
    },
    PRURITO?: string,
    SEBORREA_O_DESCAMACIÓN?: string,
    SIGNOS_CLINICOS_DERMICOS?: string,
    SIGNOS_CLINICOS_GENERALES?: string,
    EDAD_RAZA_Y_SEXO_DE_PRESENTACION?: string,
    DIAGNÓSTICO?: string,
    METODOS_DE_DIAGNÓSTICO?: string,
    DIAGNOSTICO_DIFERENCIAL?: string,
    PRONÓSTICO?: string,
    TRATAMIENTO?: string,
    OBSERVACION_HISTOPATOLOGICA?: string,
    OTRAS_OBSERVACIONES?: string,
    LECTURA_SUGERIDA?: string,
    CLASIFICACION_PATOLOGICA_O_GRUPO_PATOLOGICO?: string,
    SIMETRÍA?: string,
}