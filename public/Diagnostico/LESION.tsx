import { LesionDetail } from "../../public/Listas/index"

export type LesionType = {
    Lesion: typeof LesionDetail[number][]
    ID: string
}
//TODO: check

export const Lesiones: LesionType[] = [
    {
        Lesion: [
            "Alopecía parcial",
            "Eritema leve",
            "Pápulas",
            "Pústulas"
        ],
        ID: "DEMODECIA GENERALIZADA CON FOLICULITIS"
    },
    {
        Lesion: [
            "Alopecía parcial",
            "Eritema leve"
        ],
        ID: "DEMODECIA LOCALIZADA"
    },
    {
        Lesion: [
            "Cerúmen seco y oscuro"
        ],
        ID: "SARNA OTODECTICA"
    },
    {
        Lesion: [
            "Costras",
            "Pápulas"
        ],
        ID: "SARNA SARCOPTICA"
    },
    {
        Lesion: [
            "Eritema",
            "Pápulas"
        ],
        ID: "ATOPIA CANINA EST I"
    },
    {
        Lesion: [
            "Eritema",
            "Pápulas"
        ],
        ID: "ATOPIA CANINA EST II"
    },
    {
        Lesion: [
            "Eritema",
            "Pápulas"
        ],
        ID: "ATOPIA CANINA EST III"
    },
    {
        Lesion: [
            "Costras",
            "Pápulas"
        ],
        ID: "DERMATITIS ALERGICA POR PULGAS EST I"
    },
    {
        Lesion: [
            "Costras",
            "Pápulas"
        ],
        ID: "DERMATITIS ALERGICA POR PULGAS EST II"
    },
    {
        Lesion: [
            "Eritema"
        ],
        ID: "DERMATITIS ALERGICA POR CONTACTO"
    },
    {
        Lesion: [
            "Edema",
            "Pústulas estériles"
        ],
        ID: "DERMATITIS JUVENIL FACIAL"
    },
    {
        Lesion: [
            "Bullas acantolíticas"
        ],
        ID: "LUPUS DISCOIDEO"
    },
    {
        Lesion: [
            "Bullas acantolíticas"
        ],
        ID: "PENFIGO BULLOSO"
    },
    {
        Lesion: [
            "Bullas acantolíticas"
        ],
        ID: "PENFIGO ERITEMATOSO"
    },
    {
        Lesion: [
            "Bullas acantolíticas"
        ],
        ID: "PENFIGO FOLIACIO"
    },
    {
        Lesion: [
            "Bullas acantolíticas"
        ],
        ID: "PENFIGO VULGAR"
    },
    {
        Lesion: [
            "Alopecía",
            "Piel delgada"
        ],
        ID: "DERMATOSIS HIPOESTROGENICA"
    },
    {
        Lesion: [
            "Alopecía",
            "Hiperpigmentación"
        ],
        ID: "DESBALANCE OVARICO HIPERESTROGENICO"
    },
    {
        Lesion: [
            "Hiperqueratosis"
        ],
        ID: "DESBALANCE OVARICO HIPERESTROGENICO"
    },
    {
        Lesion: [
            "Alopecía",
            "Calcinosis",
            "Hiperpigmentación",
            "Hiperqueratosis"
        ],
        ID: "HIPERADRENOCORTICISMO"
    },
    {
        Lesion: [
            "Alopecía",
            "Hiperpigmentación",
            "Hiperqueratosis"
        ],
        ID: "HIPOTIROIDISMO"
    },
    {
        Lesion: [
            "Alopecía",
            "Hiperpigmentación",
            "Hiperqueratosis"
        ],
        ID: "SINDROME DE HIPOANDROGENISMO"
    },
    {
        Lesion: [
            "Alopecía",
            "Hiperpigmentación",
            "Hiperqueratosis"
        ],
        ID: "TUMOR DE LAS CELULAS DE SERTOLI"
    },
    {
        Lesion: [
            "Pápulas"
        ],
        ID: "FOLICULITIS DEL MANTO PILOSO CORTO"
    },
    {
        Lesion: [
            "Collaretes epidErmicos"
        ],
        ID: "HIPERSENSIBILIDAD BACTERIANA EST I"
    },
    {
        Lesion: [
            "Collaretes epidErmicos pigmentados"
        ],
        ID: "HIPERSENSIBILIDAD BACTERIANA EST II"
    },
    {
        Lesion: [
            "Pústulas"
        ],
        ID: "IMPETIGO"
    },
    {
        Lesion: [
            "Forunculosis",
            "Hiperqueratosis"
        ],
        ID: "PIODERMIAS DE LOS CALLOS"
    },
    {
        Lesion: [
            "Forunculosis"
        ],
        ID: "PIODERMIAS PROFUNDAS"
    },
    {
        Lesion: [
            "Alopecía",
            "Descamación"
        ],
        ID: "MICROSPORUM CANIS"
    },
    {
        Lesion: [
            "Hiperpigmentación",
            "Hiperqueratosis"
        ],
        ID: "SEBORREA INESPECIFICA"
    },
    {
        Lesion: [
            "Alopecía",
            "Descamación"
        ],
        ID: "TRICHOPHYTUM MENTAGROPHYTES"
    },
]
