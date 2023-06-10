const LesionesGralValues = [
  "Olor desagradable, particularmente en los pliegues labiales",
  "NO hay",
  "Sólo si existe una enfermedad sistémica como el moquillo",
  "NOhay",
  "En los casos crónicos puede haber pérdida de peso, apetito irregular", "Dolor localizado, particularmente en los espacios interdigitales",

  "Dolor",
  "NO hay, en algunos casos puede haber dolor",
  "Lamido compulsivo", "Dolor y dificultad para caminar",

  "NO presenta",
  "Adelgazamiento",
  "Adelgazamiento",
  "Ocasionalmente conjuntivitis, rinitis",
  "Conjuntivitis, rinitis", "Adelgazamiento",
  "Conjuntivitis, rinitis", "Adelgazamiento",
  "Algunos animales tienen al mismo tiempo vómitos, diarreas y cólicos",
  "En los casos avanzados hay depresión, fiebre, anorexia,", "pérdida de peso", "Linfoadenopatía", "Dolor variable que se manifiesta por lamido",
  "En los casos avanzados hay depresión, fiebre, anorexia,", "pérdida de peso", "Halitosis y salivación excesiva", "Linfoadenopatía", "Dolor variable manifestado por medio del lamido",
  "En los casos avanzados hay depresión, fiebre, anorexia,", "pérdida de peso", "Dolor variable que se manifiesta a través del lamido",
  "Enfermedad sistémica", "glomerulonefropatía", "poliartritis", "anemia", "linfoadenopatia", "hipertermia",
  "NO tiene",
  "NO tiene",
  "NO tiene",
  "Miositis y dolor en casos severos y avanzados, con todas las manifestaciones clínicas, bioquímicas y electromiográficos",
  "NO llene",
  "Dependen del compromiso sistémico", "Dependen de la intensidad de la piodermia", "Linfoadenopatía localizada o generalizada",
  "Prurito constante", "En el Estadio III gran deterioro del estado general",
  "Rascado constante de las orejas", "Posible prurito generalizado",
  "NO tiene",
  "Poliuria-polidipsia y posible polifagia", "Debilidad muscular generalizada, abdomen péndulo", "Infecciones urinarias", "Anestro o atrofia testicular", "Diabetes mellitus con insulinoresistencia",
  "Para el hipotiroidismo hay una larga lista de signos clínicos, ninguno patognomónico ni correlacionados a las lesiones dérmicas",
  "No tiene",
  "Un testículo agrandado o bien uno ectópico(cualquiera de las dos posibilidades)", "Criptorquidea", "Atracción sexual sobre otros machos", "Prostatomegalia ocasionando hematuria, disuria",
  "Estros irregulares", "Falsa preñ1ez", "Endometrosis y piometra",
  "Rara vez cursa junto con incontinencia urinaria NO neurogénica",
  "Ausentes",
  "Ausentes",
  "Prurito constante",
  "No tiene",
  "Dependen de la variada etiología que le da origen",
  "Sacuden la cabeza y golpean las orejas contra los temporales contrarios, dejándolos manchados con sangre", "Rascado de las orejas con las patas",
  "Eventualmente cursa con adenoma de glándulas circumanales",
  "En los casos avanzados dificultad para caminar",
  "NO hay",
  "Disminución de olfato y del gusto", "El estrés y el estro precipitan los signos clínicos dérmicos",
  "NO tiene",
  "NO tiene",
  "Ausentes",
  "No hay",
  "Dolor local", "Lamido constante",
  "Linfoadenopatía", "Dolor",
  "NO tiene",
  "Dolor",
  "No hay.Sólo dolor localizado"

] as const;
export type LesionesGralDetail = typeof LesionesGralValues[number];
export type LesionesGralType = {
  LesionesGral: LesionesGralDetail[];
  NAME: string;
};
export const LesionesGral: LesionesGralType[] = [
  {
    NAME: "DERMATITIS DE LOS PLIEGUES",
    LesionesGral: [
      "Olor desagradable, particularmente en los pliegues labiales"
    ]
  },
  {
    NAME: "DERMATITIS HÚMEDA AGUDA",
    LesionesGral: [
      "NO hay"
    ]
  },
  {
    NAME: "IMPÉTIGO",
    LesionesGral: [
      "Sólo si existe una enfermedad sistémica como el moquillo"
    ]
  },
  {
    NAME: "FOLICULITIS BACTERIANA SUPERFICIAL",
    LesionesGral: [
      "NOhay"
    ]
  },
  {
    NAME: "PIODERMIA SUPERFICIAL DISEMINADA",
    LesionesGral: [
      "NO hay"
    ]
  },
  {
    NAME: "PIODERMIA MUCOCUTÁNEA",
    LesionesGral: [
      "NO hay"
    ]
  },
  {
    NAME: "PIODERMIA PROFUNDA DEL OVEJERO ALEMÁN",
    LesionesGral: [
      "En los casos crónicos puede haber pérdida de peso, apetito irregular", "Dolor localizado, particularmente en los espacios interdigitales"
    ]
  },
  {
    NAME: "FOLICULITIS-FORUNCULOSIS PIOTRAUMATICA",
    LesionesGral: [
      "NO hay"
    ]
  },
  {
    NAME: "FOLICULITIS Y FORUNCULOSIS NASAL",
    LesionesGral: [
      "Dolor",

    ]
  },
  {
    NAME: "FOLICULITIS FORUNCULOSIS DEL MENTÓN Y LABIOS",
    LesionesGral: [
      "NO hay, en algunos casos puede haber dolor"
    ]
  },
  {
    NAME: "FOLICULITIS Y FORUNCULOSIS PODAL",
    LesionesGral: [
      "Lamido compulsivo", "Dolor y dificultad para caminar"
    ]
  },
  {
    NAME: "FOLICULITIS FORUNCULOSIS DE LOS CALLOS",
    LesionesGral: [
      "NO hay"
    ]
  },
  {
    NAME: "DERMATITIS ALÉRGICA POR PULGAS EST. I",
    LesionesGral: [
      "NO presenta"
    ]
  },
  {
    NAME: "DERMATITIS ALÉRGICA POR PULGAS EST. II",
    LesionesGral: [
      "Adelgazamiento"
    ]
  },
  {
    NAME: "DERMATITIS ALÉRGICA POR PULGAS EST. III",
    LesionesGral: [
      "Adelgazamiento"
    ]
  },
  {
    NAME: "DERMATITIS ATÓPICA CANINA EST. I",
    LesionesGral: [
      "Ocasionalmente conjuntivitis, rinitis"
    ]
  },
  {
    NAME: "DERMATITIS ATÓPICA CANINA EST. II",
    LesionesGral: [
      "Conjuntivitis, rinitis", "Adelgazamiento"
    ]
  },
  {
    NAME: "DERMATITIS ATÓPICA CANINA EST. III",
    LesionesGral: [
      "Conjuntivitis, rinitis", "Adelgazamiento"
    ]
  },
  {
    NAME: "REACCIÓN ADVERSA A LOS ALIMENTOS",
    LesionesGral: [
      "Algunos animales tienen al mismo tiempo vómitos, diarreas y cólicos"
    ]
  },
  {
    NAME: "PÉNFIGO FOLIÁCEO",
    LesionesGral: [
      "En los casos avanzados hay depresión, fiebre, anorexia,", "pérdida de peso", "Linfoadenopatía", "Dolor variable que se manifiesta por lamido"
    ]
  },
  {
    NAME: "PÉNFIGO VULGAR",
    LesionesGral: [
      "En los casos avanzados hay depresión, fiebre, anorexia,", "pérdida de peso", "Halitosis y salivación excesiva", "Linfoadenopatía", "Dolor variable manifestado por medio del lamido"
    ]
  },
  {
    NAME: "PÉNFIGO ERITEMATOSO",
    LesionesGral: [
      "No hay"
    ]
  },
  {
    NAME: "PENFIGOIDE BULLOSO",
    LesionesGral: [
      "En los casos avanzados hay depresión, fiebre, anorexia,", "pérdida de peso", "Dolor variable que se manifiesta a través del lamido"
    ]
  },
  {
    NAME: "LUPUS ERITEMATOSO SISTÉMICO",
    LesionesGral: [
      "Enfermedad sistémica", "glomerulonefropatía", "poliartritis", "anemia", "linfoadenopatia", "hipertermia"
    ]
  },
  {
    NAME: "LUPUS ERITEMATOSO DISCOIDE",
    LesionesGral: [
      "NO tiene"
    ]
  },
  {
    NAME: "LUPUS MUCOCUTÁNEO",
    LesionesGral: [
      "NO tiene"
    ]
  },
  {
    NAME: "LUPUS CUTÁNEO VESICULAR",
    LesionesGral: [
      "NO tiene"
    ]
  },
  {
    NAME: "DERMATOMIOSITIS",
    LesionesGral: [
      "Miositis y dolor en casos severos y avanzados, con todas las manifestaciones clínicas, bioquímicas y electromiográficos"
    ]
  },
  {
    NAME: "DEMODICOSIS LOCALIZADA",
    LesionesGral: [
      "NO llene"
    ]
  },
  {
    NAME: "DEMODICOSIS GENERALIZADA",
    LesionesGral: [
      "Dependen del compromiso sistémico", "Dependen de la intensidad de la piodermia", "Linfoadenopatía localizada o generalizada"
    ]
  },
  {
    NAME: "SARNA SARCÓPTICA",
    LesionesGral: [
      "Prurito constante", "En el Estadio III gran deterioro del estado general"
    ]
  },
  {
    NAME: "SARNA OTODÉCTICA",
    LesionesGral: [
      "Rascado constante de las orejas", "Posible prurito generalizado"
    ]
  },
  {
    NAME: "CHEILETIELOSIS",
    LesionesGral: [
      "NO tiene"
    ]
  },
  {
    NAME: "DERMATOSIS POR HIPERADRENOCORTISISMO",
    LesionesGral: [
      "Poliuria-polidipsia y posible polifagia", "Debilidad muscular generalizada, abdomen péndulo", "Infecciones urinarias", "Anestro o atrofia testicular", "Diabetes mellitus con insulinoresistencia"
    ]
  },
  {
    NAME: "DERMATOSIS POR HIPOTIROIDISMO",
    LesionesGral: [
      "Para el hipotiroidismo hay una larga lista de signos clínicos, ninguno patognomónico ni correlacionados a las lesiones dérmicas"
    ]
  },
  {
    NAME: "ALOPECÍA X",
    LesionesGral: [
      "No tiene"
    ]
  },
  {
    NAME: "DERMATOSIS POR NEOPLASIA TESTICULAR",
    LesionesGral: [
      "Un testículo agrandado o bien uno ectópico(cualquiera de las dos posibilidades)", "Criptorquidea", "Atracción sexual sobre otros machos", "Prostatomegalia ocasionando hematuria, disuria"
    ]
  },
  {
    NAME: "DERMATOSIS POR HIPERESTROGENISMO EN HEMBRAS",
    LesionesGral: [
      "Estros irregulares", "Falsa preñ1ez", "Endometrosis y piometra"
    ]
  },
  {
    NAME: "DERMATOSIS QUE RESPONDE A LOS ESTRÓGENOS",
    LesionesGral: [
      "Rara vez cursa junto con incontinencia urinaria NO neurogénica"
    ]
  },
  {
    NAME: "DERMATOFITOSIS POR MICROSPORUM",
    LesionesGral: [
      "Ausentes"
    ]
  },
  {
    NAME: "DERMATOFITOSIS POR TRICOPHYTON",
    LesionesGral: [
      "Ausentes"
    ]
  },
  {
    NAME: "DERMATITIS POR MALASSEZIA",
    LesionesGral: [
      "Prurito constante"
    ]
  },
  {
    NAME: "SEBORREA PRIMARIA",
    LesionesGral: [
      "No tiene"
    ]
  },
  {
    NAME: "SEBORREA SECUNDARIA",
    LesionesGral: [
      "Dependen de la variada etiología que le da origen"
    ]
  },
  {
    NAME: "SEBORREA DEL BORDE DE LAS OREJAS",
    LesionesGral: [
      "Sacuden la cabeza y golpean las orejas contra los temporales contrarios, dejándolos manchados con sangre", "Rascado de las orejas con las patas"
    ]
  },
  {
    NAME: "HIPERPLASIA DE LA GLÁNDULA DE LA COLA",
    LesionesGral: [
      "Eventualmente cursa con adenoma de glándulas circumanales"
    ]
  },
  {
    NAME: "HIPERQUERATOSIS NASO - DIGITAL IDIOPÁTICA",
    LesionesGral: [
      "En los casos avanzados dificultad para caminar"
    ]
  },
  {
    NAME: "DERMATOSIS QUE RESPONDE A LA VITAMINA A",
    LesionesGral: [
      "NO hay"
    ]
  },
  {
    NAME: "DERMATOSIS QUE RESPONDE AL ZINC",
    LesionesGral: [
      "Disminución de olfato y del gusto", "El estrés y el estro precipitan los signos clínicos dérmicos"
    ]
  },
  {
    NAME: "ALOPECÍA POR MUTACION DE COLOR",
    LesionesGral: [
      "NO tiene"
    ]
  },
  {
    NAME: "DERMATITIS ACRAL POR LAMIDO",
    LesionesGral: [
      "NO tiene"
    ]
  },
  {
    NAME: "OTITIS EXTERNA",
    LesionesGral: [
      "Ausentes"
    ]
  },
  {
    NAME: "ENFERMEDAD DE LOS SACOS ANALES",
    LesionesGral: [
      "No hay"
    ]
  },
  {
    NAME: "FÍSTULAS PERIANALES",
    LesionesGral: [
      "Dolor local", "Lamido constante"
    ]
  },
  {
    NAME: "CELULITIS JUVENIL",
    LesionesGral: [
      "Linfoadenopatía", "Dolor"
    ]
  },
  {
    NAME: "ALOPECÍA O CALVICIE PATRÓN",
    LesionesGral: [
      "NO tiene"
    ]
  },
  {
    NAME: "FORUNCULOSIS EOSINOFÍLICA",
    LesionesGral: [
      "Dolor",
    ]
  },
  {
    NAME: "VASCULITIS DEL BORDE DE LAS OREJAS",
    LesionesGral: [
      "No hay.Sólo dolor localizado"
    ]
  }
]

