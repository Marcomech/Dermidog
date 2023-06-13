export const EdadValues = [
  "", ,
  "Perros menores a 3 añ1os",
  "A cualquier edad",
  "Adultos jóvenes",
  "Adultos",
  ,
  "mayor incidencia en animales adultos"
  ,
  "Preferentemente cachorros ,hasta la pubertad"
  ,
  "Más frecuentemente en animales jóvenes, aunque también puede afectar a animales de cualquier edad."
  ,
  "En animales jóvenes hasta el añ1o de edad"
  ,
  "No existe predisposición por edad, "
  ,
  "Comienza en los animales jóvenes"
  ,
  "Afecta preferentemente adultos jóvenes"
  ,
  "Afecta a animales de edad mediana a viejos, sin predisposición por alguno de los sexos.Los Collies y Shetland son las razas más predispuestas"
  ,
  "En los adultos jóvenes.NO tiene predilección por sexo ni razas.Es más frecuente en los Collies y Ovejeros alemanes"
  ,
  "Aunque no hay predisposición por edad o sexo, es raro en los cachorros"
  ,
  "Aunque no hay predisposición por edad o sexo, es raro en los cachorros"
  ,
  "Aunque no hay predisposición por edad o sexo, es raro en los cachorros"
  ,
  "antes de los 6 meses de edad, es mas frecuente en Collie y Collie shetiand y sus cruzas, aunque otras razas pueden estar afectadas como Welsh corgi, Ovejero aleman, Chow-Chow, Belga Tervueren, Beauceron, Terrier de Lakeland y Kuvasz de cualquier sexo"
  ,
  "Generalmente en cachorros y jóvenes antes de alcanzar la madurez sexual"
  ,
  "Preferentemente en cachorros y jóvenes, de todas las razas aunque hay algunas en que tiene mayor incidencia, como en Pit bull, Doberman, Boxer, Collies, Gran danés, etc"
  ,
  "La presencia de demodicosis en los animales adultos hace necesario investigar aquellas patologías que alteran la inmunidad como determinado tipo de tumores"
  ,
  "No tiene predilección por edad, raza o sexo"
  ,
  "más frecuentemente y los signos se manifiestan con más intensidad en los cachorros"
  ,
  "Adultos y viejos, sin predisposición por un sexo y más frecuente en Dachshund, Caniches, Beagles, aunque cualquier otra raza puede estar afectada"
  ,
  "Adultos-jóvenes.En todas las razas aunque más frecuentemente en Cocker spaniel, Dachshund.Doberman, Setter irlandés.Sin predilección por sexo"
  ,
  "en cualquier raza, aunque particularmente en Malamute, Chow-chow, Caniche miniatura, Pomeranias, de cualquier edad, preferentemente del sexo masculino"
  ,
  "en los machos de cualquier raza, adultos y viejos"
  ,
  "Se presentan en hembras adultas de edad mediana y sin predisposición racial"
  ,
  ,
  "Con mayor frecuencia en adultas"
  ,
  "temprana edad"
  ,
  "Jovenes"
  ,
  "Adultos (mas freq)"
  ,
  "Adultos"
  ,
  "Son todas de etiología hereditaria.Las razas redispuestas son Cocker, Springer, Westy, Bassett, Setter, Doberman, Dachshund, Labrador, Ovejero alemán"

  ,
  "más frecuente en adultos-viejos"
  ,
  "Adultos jóvenes de 1 a 3 añ1os de edad",
  "aunque puede comenzar en edad adulta"
  ,
  "a partir de los 5-6 meses de edad"
  ,
  "Cuando el manto tiene otros colores recién se manifiesta después de los 2 añ1os de edad.Afecta pincipalmente a "
  ,
  "Adultos"
  ,
  "las mismas que para cada etiología desencadenante"
  ,
  "Adultos (mas freq)"
  ,
  "Cachorros de 3 semanas a 4 meses de edad"
  ,
  "Comienza entre los 6 meses y el añ1o de edad"
  ,
] as const;

type EdadDetail = typeof EdadValues[number];

export type EdadType = {
  Edad: EdadDetail[];
  NAME: string;
};

export const Edad: EdadType[] = [
  {
    Edad: [
    ],
    NAME: "DERMATITIS DE LOS PLIEGUES"
  },
  {
    Edad: [
      "mayor incidencia en animales adultos"
    ],
    NAME: "DERMATITIS HÚMEDA AGUDA"
  },
  {
    Edad: [
      "Preferentemente cachorros ,hasta la pubertad"
    ],
    NAME: "IMPÉTIGO"
  },
  {
    Edad: [
      "Más frecuentemente en animales jóvenes, aunque también puede afectar a animales de cualquier edad."
    ],
    NAME: "FOLICULITIS BACTERIANA SUPERFICIAL"
  },
  {
    Edad: [
      "Más frecuentemente en animales jóvenes, aunque también puede afectar a animales de cualquier edad."
    ],
    NAME: "PIODERMIA SUPERFICIAL DISEMINADA"
  },
  {
    Edad: [
    ],
    NAME: "PIODERMIA MUCOCUTÁNEA"
  },
  {
    Edad: [
      "Adultos"],
    NAME: "PIODERMIA PROFUNDA DEL OVEJERO ALEMÁN"
  },
  {
    Edad: [
    ],
    NAME: "FOLICULITIS-FORUNCULOSIS PIOTRAUMATICA"
  },
  {
    Edad: [
    ],
    NAME: "FOLICULITIS Y FORUNCULOSIS NASAL"
  },
  {
    Edad: [
      "En animales jóvenes hasta el añ1o de edad"
    ],
    NAME: "FOLICULITIS FORUNCULOSIS DEL MENTÓN Y LABIOS"
  },
  {
    Edad: [
      "No existe predisposición por edad, "
    ],
    NAME: "FOLICULITIS Y FORUNCULOSIS PODAL"
  },
  {
    Edad: [
      "Comienza en los animales jóvenes"
    ],
    NAME: "FOLICULITIS FORUNCULOSIS DE LOS CALLOS"
  },
  {
    Edad: [
      ""
    ],
    NAME: "DERMATITIS ALÉRGICA POR PULGAS EST. I"
  },
  {
    Edad: [
      ""
    ],
    NAME: "DERMATITIS ALÉRGICA POR PULGAS EST. II"
  },
  {
    Edad: [
      ""
    ],
    NAME: "DERMATITIS ALÉRGICA POR PULGAS EST. III"
  },
  {
    Edad: [
      "Perros menores a 3 añ1os"
    ],
    NAME: "DERMATITIS ATÓPICA CANINA EST. I"
  },
  {
    Edad: [
      "Perros menores a 3 añ1os"
      ,
    ],
    NAME: "DERMATITIS ATÓPICA CANINA EST. II"
  },
  {
    Edad: [
      "Perros menores a 3 añ1os"
      ,
    ],
    NAME: "DERMATITIS ATÓPICA CANINA EST. III"
  },
  {
    Edad: [
      "A cualquier edad",
    ],
    NAME: "REACCIÓN ADVERSA A LOS ALIMENTOS"
  },
  {
    Edad: [
      "Adultos jóvenes",
      ,
    ],
    NAME: "PÉNFIGO FOLIÁCEO"
  },
  {
    Edad: [
      "Afecta preferentemente adultos jóvenes"
      ,
    ],
    NAME: "PÉNFIGO VULGAR"
  },
  {
    Edad: [
      "Adultos jóvenes",
      ,
    ],
    NAME: "PÉNFIGO ERITEMATOSO"
  },
  {
    Edad: [
      "Afecta a animales de edad mediana a viejos, sin predisposición por alguno de los sexos.Los Collies y Shetland son las razas más predispuestas"
    ],
    NAME: "PENFIGOIDE BULLOSO"
  },
  {
    Edad: [
      "En los adultos jóvenes.NO tiene predilección por sexo ni razas.Es más frecuente en los Collies y Ovejeros alemanes"
    ],
    NAME: "LUPUS ERITEMATOSO SISTÉMICO"
  },
  {
    Edad: [
      "Aunque no hay predisposición por edad o sexo, es raro en los cachorros"
    ],
    NAME: "LUPUS ERITEMATOSO DISCOIDE"
  },
  {
    Edad: [
      "Aunque no hay predisposición por edad o sexo, es raro en los cachorros"
      ,
    ],
    NAME: "LUPUS MUCOCUTÁNEO"
  },
  {
    Edad: [
      "Aunque no hay predisposición por edad o sexo, es raro en los cachorros"
      ,
    ],
    NAME: "LUPUS CUTÁNEO VESICULAR"
  },
  {
    Edad: [
      "antes de los 6 meses de edad, es mas frecuente en Collie y Collie shetiand y sus cruzas, aunque otras razas pueden estar afectadas como Welsh corgi, Ovejero aleman, Chow-Chow, Belga Tervueren, Beauceron, Terrier de Lakeland y Kuvasz de cualquier sexo"
    ],
    NAME: "DERMATOMIOSITIS"
  },
  {
    Edad: [
      "Generalmente en cachorros y jóvenes antes de alcanzar la madurez sexual"
    ],
    NAME: "DEMODICOSIS LOCALIZADA"
  },
  {
    Edad: [
      "Preferentemente en cachorros y jóvenes, de todas las razas aunque hay algunas en que tiene mayor incidencia, como en Pit bull, Doberman, Boxer, Collies, Gran danés, etc"
      , "La presencia de demodicosis en los animales adultos hace necesario investigar aquellas patologías que alteran la inmunidad como determinado tipo de tumores"
    ],
    NAME: "DEMODICOSIS GENERALIZADA"
  },
  {
    Edad: [
      "No tiene predilección por edad, raza o sexo"
    ],
    NAME: "SARNA SARCÓPTICA"
  },
  {
    Edad: [
      "más frecuentemente y los signos se manifiestan con más intensidad en los cachorros"
    ],
    NAME: "SARNA OTODÉCTICA"
  },
  {
    Edad: [
    ],
    NAME: "CHEILETIELOSIS"
  },
  {
    Edad: [
      "Adultos y viejos, sin predisposición por un sexo y más frecuente en Dachshund, Caniches, Beagles, aunque cualquier otra raza puede estar afectada"
    ],
    NAME: "DERMATOSIS POR HIPERADRENOCORTISISMO"
  },
  {
    Edad: [
      "Adultos-jóvenes.En todas las razas aunque más frecuentemente en Cocker spaniel, Dachshund.Doberman, Setter irlandés.Sin predilección por sexo"
    ],
    NAME: "DERMATOSIS POR HIPOTIROIDISMO"
  },
  {
    Edad: [
      "en cualquier raza, aunque particularmente en Malamute, Chow-chow, Caniche miniatura, Pomeranias, de cualquier edad, preferentemente del sexo masculino"
    ],
    NAME: "ALOPECÍA X"
  },
  {
    Edad: [
      "en los machos de cualquier raza, adultos y viejos"
    ],
    NAME: "DERMATOSIS POR NEOPLASIA TESTICULAR"
  },
  {
    Edad: [
      "Se presentan en hembras adultas de edad mediana y sin predisposición racial"
    ],
    NAME: "DERMATOSIS POR HIPERESTROGENISMO EN HEMBRAS"
  },
  {
    Edad: [
      , "Con mayor frecuencia en adultas"
      , "temprana edad"
    ],
    NAME: "DERMATOSIS QUE RESPONDE A LOS ESTRÓGENOS"
  },
  {
    Edad: [
      "Jovenes"
      ,
    ],
    NAME: "DERMATOFITOSIS POR MICROSPORUM"
  },
  {
    Edad: [
      "Adultos (mas freq)"
    ],
    NAME: "DERMATOFITOSIS POR TRICOPHYTON"
  },
  {
    Edad: [
      "Adultos"
    ],
    NAME: "DERMATITIS POR MALASSEZIA"
  },
  {
    Edad: [
      "Son todas de etiología hereditaria.Las razas redispuestas son Cocker, Springer, Westy, Bassett, Setter, Doberman, Dachshund, Labrador, Ovejero alemán"
    ],
    NAME: "SEBORREA PRIMARIA"
  },
  {
    Edad: [
    ],
    NAME: "SEBORREA SECUNDARIA"
  },
  {
    Edad: [
    ],
    NAME: "SEBORREA DEL BORDE DE LAS OREJAS"
  },
  {
    Edad: [
      "Adultos"
    ],
    NAME: "HIPERPLASIA DE LA GLÁNDULA DE LA COLA"
  },
  {
    Edad: [
      "más frecuente en adultos-viejos"
    ],
    NAME: "HIPERQUERATOSIS NASO - DIGITAL IDIOPÁTICA"
  },
  {
    Edad: [
    ],
    NAME: "DERMATOSIS QUE RESPONDE A LA VITAMINA A"
  },
  {
    Edad: [
      , "Adultos jóvenes de 1 a 3 añ1os de edad", "aunque puede comenzar en edad adulta"
    ],
    NAME: "DERMATOSIS QUE RESPONDE AL ZINC"
  },
  {
    Edad: [
      "a partir de los 5-6 meses de edad"
      , "Cuando el manto tiene otros colores recién se manifiesta después de los 2 añ1os de edad.Afecta pincipalmente a "
    ],
    NAME: "ALOPECÍA POR MUTACION DE COLOR"
  },
  {
    Edad: [
      "Adultos"
      ,
    ],
    NAME: "DERMATITIS ACRAL POR LAMIDO"
  },
  {
    Edad: [
      "las mismas que para cada etiología desencadenante"
    ],
    NAME: "OTITIS EXTERNA"
  },
  {
    Edad: [
      "Adultos (mas freq)"
    ],
    NAME: "ENFERMEDAD DE LOS SACOS ANALES"
  },
  {
    Edad: [
      "Adultos"
    ],
    NAME: "FÍSTULAS PERIANALES"
  },
  {
    Edad: [
      "Cachorros de 3 semanas a 4 meses de edad"
    ],
    NAME: "CELULITIS JUVENIL"
  },
  {
    Edad: [
      "Comienza entre los 6 meses y el añ1o de edad"
    ],
    NAME: "ALOPECÍA O CALVICIE PATRÓN"
  },
  {
    Edad: [
    ],
    NAME: "FORUNCULOSIS EOSINOFÍLICA"
  },
  {
    Edad: [
    ],
    NAME: "VASCULITIS DEL BORDE DE LAS OREJAS"
  },
]