export const SexoValues = [
  "Macho", "Hembra"
] as const;

type SexoDetail = typeof SexoValues[number];

export type SexoType = {
  Sexo: SexoDetail[];
  NAME: string;
};

export const Sexo: SexoType[] = [

  {
    Sexo: ["Macho", "Hembra"],
    NAME: "DERMATITIS DE LOS PLIEGUES"
  },
  {
    Sexo: ["Macho", "Hembra",],
    NAME: "DERMATITIS HÚMEDA AGUDA"
  },
  {
    Sexo: ["Macho", "Hembra",],
    NAME: "IMPÉTIGO"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "FOLICULITIS BACTERIANA SUPERFICIAL"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "PIODERMIA SUPERFICIAL DISEMINADA"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "PIODERMIA MUCOCUTÁNEA"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "PIODERMIA PROFUNDA DEL OVEJERO ALEMÁN"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "FOLICULITIS-FORUNCULOSIS PIOTRAUMATICA"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "FOLICULITIS Y FORUNCULOSIS NASAL"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "FOLICULITIS FORUNCULOSIS DEL MENTÓN Y LABIOS"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "FOLICULITIS Y FORUNCULOSIS PODAL"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "FOLICULITIS FORUNCULOSIS DE LOS CALLOS"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "DERMATITIS ALÉRGICA POR PULGAS EST. I"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "DERMATITIS ALÉRGICA POR PULGAS EST. II"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "DERMATITIS ALÉRGICA POR PULGAS EST. III"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "DERMATITIS ATÓPICA CANINA EST. I"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "DERMATITIS ATÓPICA CANINA EST. II"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "DERMATITIS ATÓPICA CANINA EST. III"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "REACCIÓN ADVERSA A LOS ALIMENTOS"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "PÉNFIGO FOLIÁCEO"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "PÉNFIGO VULGAR"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "PÉNFIGO ERITEMATOSO"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "PENFIGOIDE BULLOSO"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "LUPUS ERITEMATOSO SISTÉMICO"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "LUPUS ERITEMATOSO DISCOIDE"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "LUPUS MUCOCUTÁNEO"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "LUPUS CUTÁNEO VESICULAR"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "DERMATOMIOSITIS"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "DEMODICOSIS LOCALIZADA"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "DEMODICOSIS GENERALIZADA"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "SARNA SARCÓPTICA"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "SARNA OTODÉCTICA"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "CHEILETIELOSIS"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "DERMATOSIS POR HIPERADRENOCORTISISMO"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "DERMATOSIS POR HIPOTIROIDISMO"
  },
  {
    Sexo: ["Macho"],//preferentemente     
    NAME: "ALOPECÍA X"
  },
  {
    Sexo: ["Macho"],
    NAME: "DERMATOSIS POR NEOPLASIA TESTICULAR"
  },
  {
    Sexo: ["Hembra"],
    NAME: "DERMATOSIS POR HIPERESTROGENISMO EN HEMBRAS"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "DERMATOSIS QUE RESPONDE A LOS ESTRÓGENOS"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "DERMATOFITOSIS POR MICROSPORUM"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "DERMATOFITOSIS POR TRICOPHYTON"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "DERMATITIS POR MALASSEZIA"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "SEBORREA PRIMARIA"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "SEBORREA SECUNDARIA"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "SEBORREA DEL BORDE DE LAS OREJAS"
  },
  {
    Sexo: ["Macho"],
    NAME: "HIPERPLASIA DE LA GLÁNDULA DE LA COLA"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "HIPERQUERATOSIS NASO - DIGITAL IDIOPÁTICA"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "DERMATOSIS QUE RESPONDE A LA VITAMINA A"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "DERMATOSIS QUE RESPONDE AL ZINC"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "ALOPECÍA POR MUTACION DE COLOR"
  },
  {
    Sexo: ["Macho"],//2 veces más que en hambras    
    NAME: "DERMATITIS ACRAL POR LAMIDO"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "OTITIS EXTERNA"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "ENFERMEDAD DE LOS SACOS ANALES"
  },
  {
    Sexo: ["Macho"],
    NAME: "FÍSTULAS PERIANALES"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "CELULITIS JUVENIL"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "ALOPECÍA O CALVICIE PATRÓN"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "FORUNCULOSIS EOSINOFÍLICA"
  },
  {
    Sexo: ["Macho", "Hembra"],
    NAME: "VASCULITIS DEL BORDE DE LAS OREJAS"
  }
]