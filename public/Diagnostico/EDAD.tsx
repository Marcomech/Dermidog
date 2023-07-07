export const EdadValues = [ /*TODO*/
  "A cualquier edad",

  "Cachorros (más frecuentemente y más intensidad)",
  "Cachorros (3 semanas a 4 meses de edad)",
  "Cachorros (Raro)",
  "Cachorros y jóvenes (preferentemente)",
  "Cachorros y jóvenes antes de alcanzar la madurez sexual (Generalmente)",
  "Cachorros, hasta la pubertad (Preferentemente)",

  "Jóvenes",
  "Jóvenes (mas incidencia)",
  "Jóvenes (hasta el año de edad)",

  "Adultos",
  "Adultos (mas freq)",
  "Adultos (mas incidencia)",
  "Adultos (menos frecuente)",

  "Adultos jóvenes",
  "Adultos jóvenes (preferentemente)",
  "Adultos jóvenes (1 a 3 años de edad)",

  "Adultos y viejos (más frecuente)",

  "Viejos",

  "Menos de los 6 meses de edad",
  "Comienza entre los 6 meses y el año de edad",
  "Menores a 3 años",
  "a partir de los 5-6 meses de edad",
  "Mayores de 2 años",

  "Comienza en los animales jóvenes",

  "La presencia de demodicosis en los animales Adultos hace necesario investigar aquellas patologías que alteran la inmunidad como determinado tipo de tumores",
  "las mismas que para cada etiología desencadenante",
  "Son todas de etiología hereditaria",

  "Mediana edad",
  "Edad mediana a viejos",
  "Temprana edad",
] as const;

type EdadDetail = typeof EdadValues[number];

export type EdadType = {
  Edad: EdadDetail[];
  NAME: string;
};

export const Edad: EdadType[] = [
  {
    Edad: [/*Ver*/],
    NAME: "DERMATITIS DE LOS PLIEGUES"
  },
  {
    Edad: ["Adultos (mas incidencia)"],
    NAME: "DERMATITIS HÚMEDA AGUDA"
  },
  {
    Edad: ["Cachorros, hasta la pubertad (Preferentemente)"],
    NAME: "IMPÉTIGO"
  },
  {
    Edad: ["Jóvenes (mas incidencia)"],
    NAME: "FOLICULITIS BACTERIANA SUPERFICIAL"
  },
  {
    Edad: ["Jóvenes (mas incidencia)"],
    NAME: "PIODERMIA SUPERFICIAL DISEMINADA"
  },
  {
    Edad: [/*Ver*/],
    NAME: "PIODERMIA MUCOCUTÁNEA"
  },
  {
    Edad: ["Adultos"],
    NAME: "PIODERMIA PROFUNDA DEL OVEJERO ALEMÁN"
  },
  {
    Edad: [/*Ver*/],
    NAME: "FOLICULITIS-FORUNCULOSIS PIOTRAUMATICA"
  },
  {
    Edad: [/*Ver*/],
    NAME: "FOLICULITIS Y FORUNCULOSIS NASAL"
  },
  {
    Edad: ["Jóvenes (hasta el año de edad)"],
    NAME: "FOLICULITIS FORUNCULOSIS DEL MENTÓN Y LABIOS"
  },
  {
    Edad: ["A cualquier edad"],
    NAME: "FOLICULITIS Y FORUNCULOSIS PODAL"
  },
  {
    Edad: ["Comienza en los animales jóvenes"],
    NAME: "FOLICULITIS FORUNCULOSIS DE LOS CALLOS"
  },
  {
    Edad: [/*Ver */],
    NAME: "DERMATITIS ALÉRGICA POR PULGAS EST. I"
  },
  {
    Edad: [/*Ver */],
    NAME: "DERMATITIS ALÉRGICA POR PULGAS EST. II"
  },
  {
    Edad: [/*Ver */],
    NAME: "DERMATITIS ALÉRGICA POR PULGAS EST. III"
  },
  {
    Edad: ["Menores a 3 años"],
    NAME: "DERMATITIS ATÓPICA CANINA EST. I"
  },
  {
    Edad: ["Menores a 3 años"],
    NAME: "DERMATITIS ATÓPICA CANINA EST. II"
  },
  {
    Edad: ["Menores a 3 años"],
    NAME: "DERMATITIS ATÓPICA CANINA EST. III"
  },
  {
    Edad: ["A cualquier edad"],
    NAME: "REACCIÓN ADVERSA A LOS ALIMENTOS"
  },
  {
    Edad: ["Adultos jóvenes"],
    NAME: "PÉNFIGO FOLIÁCEO"
  },
  {
    Edad: ["Adultos jóvenes (preferentemente)"],
    NAME: "PÉNFIGO VULGAR"
  },
  {
    Edad: ["Adultos jóvenes"],
    NAME: "PÉNFIGO ERITEMATOSO"
  },
  {
    Edad: ["Edad mediana a viejos"],
    NAME: "PENFIGOIDE BULLOSO"
  },
  {
    Edad: ["Adultos jóvenes"],
    NAME: "LUPUS ERITEMATOSO SISTÉMICO"
  },
  {
    Edad: ["A cualquier edad",
      "Cachorros (Raro)"],
    NAME: "LUPUS ERITEMATOSO DISCOIDE"
  },
  {
    Edad: ["A cualquier edad",
      "Cachorros (Raro)"],
    NAME: "LUPUS MUCOCUTÁNEO"
  },
  {
    Edad: ["A cualquier edad",
      "Cachorros (Raro)"],
    NAME: "LUPUS CUTÁNEO VESICULAR"
  },
  {
    Edad: ["Menos de los 6 meses de edad"],
    NAME: "DERMATOMIOSITIS"
  },
  {
    Edad: ["Cachorros y jóvenes antes de alcanzar la madurez sexual (Generalmente)"],
    NAME: "DEMODICOSIS LOCALIZADA"
  },
  {
    Edad: ["Cachorros y jóvenes (preferentemente)", "La presencia de demodicosis en los animales Adultos hace necesario investigar aquellas patologías que alteran la inmunidad como determinado tipo de tumores"],
    NAME: "DEMODICOSIS GENERALIZADA"
  },
  {
    Edad: ["A cualquier edad"],
    NAME: "SARNA SARCÓPTICA"
  },
  {
    Edad: ["Cachorros (más frecuentemente y más intensidad)"],
    NAME: "SARNA OTODÉCTICA"
  },
  {
    Edad: [/*Ver*/],
    NAME: "CHEILETIELOSIS"
  },
  {
    Edad: ["Adultos",
      "Viejos"],
    NAME: "DERMATOSIS POR HIPERADRENOCORTISISMO"
  },
  {
    Edad: ["Jóvenes", "Adultos"],
    NAME: "DERMATOSIS POR HIPOTIROIDISMO"
  },
  {
    Edad: ["A cualquier edad"],
    NAME: "ALOPECÍA X"
  },
  {
    Edad: ["Adultos",
      "Viejos"],
    NAME: "DERMATOSIS POR NEOPLASIA TESTICULAR"
  },
  {
    Edad: ["Mediana edad", "Adultos"],
    NAME: "DERMATOSIS POR HIPERESTROGENISMO EN HEMBRAS"
  },
  {
    Edad: ["Adultos (mas freq)", "Temprana edad"],
    NAME: "DERMATOSIS QUE RESPONDE A LOS ESTRÓGENOS"
  },
  {
    Edad: ["Jóvenes"],
    NAME: "DERMATOFITOSIS POR MICROSPORUM"
  },
  {
    Edad: ["Adultos (mas freq)"],
    NAME: "DERMATOFITOSIS POR TRICOPHYTON"
  },
  {
    Edad: ["Adultos"],
    NAME: "DERMATITIS POR MALASSEZIA"
  },
  {
    Edad: ["Son todas de etiología hereditaria"],
    NAME: "SEBORREA PRIMARIA"
  },
  {
    Edad: [/*Ver*/],
    NAME: "SEBORREA SECUNDARIA"
  },
  {
    Edad: [/*Ver*/],
    NAME: "SEBORREA DEL BORDE DE LAS OREJAS"
  },
  {
    Edad: ["Adultos"],
    NAME: "HIPERPLASIA DE LA GLÁNDULA DE LA COLA"
  },
  {
    Edad: ["Adultos y viejos (más frecuente)"],
    NAME: "HIPERQUERATOSIS NASO - DIGITAL IDIOPÁTICA"
  },
  {
    Edad: [/*Ver*/],
    NAME: "DERMATOSIS QUE RESPONDE A LA VITAMINA A"
  },
  {
    Edad: ["Adultos jóvenes (1 a 3 años de edad)",
      "Adultos (menos frecuente)"],
    NAME: "DERMATOSIS QUE RESPONDE AL ZINC"
  },
  {
    Edad: ["a partir de los 5-6 meses de edad",
      "Mayores de 2 años",/*Cuando el manto tiene otros colores*/],
    NAME: "ALOPECÍA POR MUTACION DE COLOR"
  },
  {
    Edad: ["Adultos"],
    NAME: "DERMATITIS ACRAL POR LAMIDO"
  },
  {
    Edad: ["las mismas que para cada etiología desencadenante"],
    NAME: "OTITIS EXTERNA"
  },
  {
    Edad: ["Adultos (mas freq)"],
    NAME: "ENFERMEDAD DE LOS SACOS ANALES"
  },
  {
    Edad: ["Adultos"],
    NAME: "FÍSTULAS PERIANALES"
  },
  {
    Edad: ["Cachorros (3 semanas a 4 meses de edad)"],
    NAME: "CELULITIS JUVENIL"
  },
  {
    Edad: ["Comienza entre los 6 meses y el año de edad"],
    NAME: "ALOPECÍA O CALVICIE PATRÓN"
  },
  {
    Edad: [/*Ver*/],
    NAME: "FORUNCULOSIS EOSINOFÍLICA"
  },
  {
    Edad: [/*Ver*/],
    NAME: "VASCULITIS DEL BORDE DE LAS OREJAS"
  },
]