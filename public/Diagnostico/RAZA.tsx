export const RazaValues = [
  /*TODO*/
  'Akita',
  'Alaskan malamute',
  'Basset',
  'Basset hound',
  'Beagles',
  'Beauceron',
  'Belga Tervueren',
  'Boston terrier',
  'Boxer',
  'Bull terriers',
  'Bulldog',
  'Caniche',
  'Caniche miniatura',
  'Chihuahua',
  'Chow-Chow',
  'Cocker',
  'Cocker spaniel',
  'Collie',
  'Collie shetiand',
  'Dachshund de pelo corto',
  'Dachshund',
  'Dálmata',
  'Doberman',
  'Doberman azules',
  'Doberman miniatura',
  'Dogo de Burdeos',
  'Galgo italianos',
  'Golden',
  'Golden retriever',
  'Gran Danés',
  'Greyhoun italiano',
  'Kuvasz',
  'Labrador retriever',
  'Labrador',
  'Malamute',
  'Ovejero Alemán',
  'Pekines',
  'Pit bull',
  'Poinscher miniatura',
  'Pointer',
  'Pomeranias',
  'Pug',
  'Rotweiler',
  'San Bernardo',
  'Schnauzer',
  'Schnauzer miniatura',
  'Setter',
  'Setter irlandés',
  'Shar-Pei',
  'Shetland',
  'Siberian husky',
  'Springer',
  'Terrier',
  'Terrier de Boston',
  'Terrier de Lakeland',
  'Weimaraner',
  'Welsh corgi',
  'Westy',
  'Whippet',
  'Yorkshire terrier',

  'Y sus cruzas',

  'Razas con pliegues',
  'Razas de pelo corto',
  'Razas de pelo largo',
  'Razas de tamaño pequeño',
  'Razas grandes',
  'Todas',
  'Mas incidencia en',
] as const;

type RazaDetail = typeof RazaValues[number];

export type RazaType = {
  Raza: RazaDetail[];
  NAME: string;
};

export const Raza: RazaType[] = [

  {
    Raza: [
      'Razas con pliegues',
      'Bulldog',
      'Pekines',
      'Pug',
      'Boston terrier',
      'Shar-Pei',
      'San Bernardo',
      'Cocker spaniel',
      'Basset hound'
    ],
    NAME: 'DERMATITIS DE LOS PLIEGUES'
  },
  {
    Raza: [/*Ver */
      'Todas',
      'Mas incidencia en',
      'Razas de pelo largo'
    ],
    NAME: 'DERMATITIS HÚMEDA AGUDA'
  },
  {
    Raza: [
    ],
    NAME: 'IMPÉTIGO'
  },
  {
    Raza: [
      'Todas',
      'Mas incidencia en',
      'Razas de pelo corto',
    ],
    NAME: 'FOLICULITIS BACTERIANA SUPERFICIAL'
  },
  {
    Raza: [/*VEr */
      //'similar a la foliculitis bacteriana'
    ],
    NAME: 'PIODERMIA SUPERFICIAL DISEMINADA'
  },
  {
    Raza: [/*VEr */
      'Todas',
      'Mas incidencia en',
      'Ovejero Alemán',
      //'pero puede presentarse en cualquier raza principalmente dolicocéfala'
    ],
    NAME: 'PIODERMIA MUCOCUTÁNEA'
  },
  {
    Raza: [
      'Ovejero Alemán',
      'Y sus cruzas'
    ],
    NAME: 'PIODERMIA PROFUNDA DEL OVEJERO ALEMÁN'
  },
  {
    Raza: [
      'Mas incidencia en',
      'Labrador',
      'Golden',
      'San Bernardo'
    ],
    NAME: 'FOLICULITIS-FORUNCULOSIS PIOTRAUMATICA'
  },
  {
    Raza: [
      'Todas',
      'Mas incidencia en',
      'Ovejero Alemán'
    ],
    NAME: 'FOLICULITIS Y FORUNCULOSIS NASAL'
  },
  {
    Raza: [/*Ver */
      'Todas',
      'Mas incidencia en',
      'Razas de pelo corto',
      'Doberman',
      'Bulldog',
      'Gran Danés',
      'Weimaraner',
      'Rotweiler',
      'Pointer',
    ],
    NAME: 'FOLICULITIS FORUNCULOSIS DEL MENTÓN Y LABIOS'
  },
  {
    Raza: [
      'Razas de pelo corto'
    ],
    NAME: 'FOLICULITIS Y FORUNCULOSIS PODAL'
  },
  {
    Raza: [
      'Razas grandes',
      'Gran Danés',
      'San Bernardo',
      'Dachshund',
      'Setter',
      'Boxer',
      'Doberman'
    ],
    NAME: 'FOLICULITIS FORUNCULOSIS DE LOS CALLOS'
  },
  {
    Raza: [

    ],
    NAME: 'DERMATITIS ALÉRGICA POR PULGAS EST. I'
  },
  {
    Raza: [

    ],
    NAME: 'DERMATITIS ALÉRGICA POR PULGAS EST. II'
  },
  {
    Raza: [

    ],
    NAME: 'DERMATITIS ALÉRGICA POR PULGAS EST. III'
  },
  {
    Raza: [
      'Todas',
      'Mas incidencia en',
      'Terrier',
      'Setter irlandés',
      'Caniche',
      'Dálmata',
      'Schnauzer',
      'Ovejero Alemán'
    ],
    NAME: 'DERMATITIS ATÓPICA CANINA EST. I'
  },
  {
    Raza: [
      'Todas',
      'Mas incidencia en',
      'Terrier',
      'Setter irlandés',
      'Caniche',
      'Dálmata',
      'Schnauzer',
      'Ovejero Alemán'
    ],
    NAME: 'DERMATITIS ATÓPICA CANINA EST. II'
  },
  {
    Raza: [
      'Todas',
      'Mas incidencia en',
      'Terrier',
      'Setter irlandés',
      'Caniche',
      'Dálmata',
      'Schnauzer',
      'Ovejero Alemán'
    ],
    NAME: 'DERMATITIS ATÓPICA CANINA EST. III'
  },
  {
    Raza: [

    ],
    NAME: 'REACCIÓN ADVERSA A LOS ALIMENTOS'
  },
  {
    Raza: [
      'Mas incidencia en',
      'Dachshund de pelo corto',
      'Doberman',
      'Akita',
      'Chow-Chow'
    ],
    NAME: 'PÉNFIGO FOLIÁCEO'
  },
  {
    Raza: [
      'Mas incidencia en',
      'Mas incidencia en',
      'Dachshund de pelo corto',
      'Doberman',
      'Akita',
      'Chow-Chow'
    ],
    NAME: 'PÉNFIGO VULGAR'
  },
  {
    Raza: [
      'Mas incidencia en'
      ,
      'Collie'
    ],
    NAME: 'PÉNFIGO ERITEMATOSO'
  },
  {
    Raza: [
      'Todas',
      'Mas incidencia en',
      'Collie',
      'Shetland',
    ],
    NAME: 'PENFIGOIDE BULLOSO'
  },
  {
    Raza: [
      'Mas incidencia en',
      'Collie',
      'Ovejero Alemán'
    ],
    NAME: 'LUPUS ERITEMATOSO SISTÉMICO'
  },
  {
    Raza: [
      'Mas incidencia en',
      'Collie',
      'Ovejero Alemán',
      'Siberian husky'
    ],
    NAME: 'LUPUS ERITEMATOSO DISCOIDE'
  },
  {
    Raza: [
      'Mas incidencia en',
      'Ovejero Alemán'
    ],
    NAME: 'LUPUS MUCOCUTÁNEO'
  },
  {
    Raza: [
      'Mas incidencia en',
      'Collie',
      'Shetland'
    ],
    NAME: 'LUPUS CUTÁNEO VESICULAR'
  },
  {
    Raza: [
      'Todas',
      'Mas incidencia en',
      'Mas incidencia en',
      'Collie',
      'Collie shetiand',
      'Y sus cruzas',
      'Welsh corgi',
      'Ovejero Alemán',
      'Chow-Chow',
      'Belga Tervueren',
      'Beauceron',
      'Terrier de Lakeland',
      'Kuvasz',
    ],
    NAME: 'DERMATOMIOSITIS'
  },
  {
    Raza: [],
    NAME: 'DEMODICOSIS LOCALIZADA'
  },
  {
    Raza: [/*Ver */
      'Todas',
      'Mas incidencia en',
      'Pit bull',
      'Doberman',
      'Boxer',
      'Collie',
      'Gran Danés',
    ],
    NAME: 'DEMODICOSIS GENERALIZADA'
  },
  {
    Raza: [
    ],
    NAME: 'SARNA SARCÓPTICA'
  },
  {
    Raza: [
    ],
    NAME: 'SARNA OTODÉCTICA'
  },
  {
    Raza: [
    ],
    NAME: 'CHEILETIELOSIS'
  },
  {
    Raza: [
      'Todas',
      'Mas incidencia en',
      'Dachshund',
      'Caniche',
      'Beagles'
    ],
    NAME: 'DERMATOSIS POR HIPERADRENOCORTISISMO'
  },
  {
    Raza: [
      'Todas',
      'Mas incidencia en',
      'Cocker spaniel',
      'Dachshund',
      'Doberman',
      'Setter irlandés'
    ],
    NAME: 'DERMATOSIS POR HIPOTIROIDISMO'
  },
  {
    Raza: [
      'Todas',
      'Mas incidencia en',
      'Malamute',
      'Chow-Chow',
      'Caniche miniatura',
      'Pomeranias'
    ],
    NAME: 'ALOPECÍA X'
  },
  {
    Raza: [
    ],
    NAME: 'DERMATOSIS POR NEOPLASIA TESTICULAR'
  },
  {
    Raza: [

    ],
    NAME: 'DERMATOSIS POR HIPERESTROGENISMO EN'
  },
  {
    Raza: [

    ],
    NAME: 'DERMATOSIS QUE RESPONDE A LOS ESTRÓGENOS'
  },
  {
    Raza: [
    ],
    NAME: 'DERMATOFITOSIS POR MICROSPORUM'
  },
  {
    Raza: [

    ],
    NAME: 'DERMATOFITOSIS POR TRICOPHYTON'
  },
  {
    Raza: [
    ],
    NAME: 'DERMATITIS POR MALASSEZIA'
  },
  {
    Raza: [/*Ver */
      //'Son todas de etiología hereditaria.Las razas redispuestas son',
      'Cocker',
      'Springer',
      'Westy',
      'Basset',
      'Setter',
      'Doberman',
      'Dachshund',
      'Labrador',
      'Ovejero Alemán'
    ],
    NAME: 'SEBORREA PRIMARIA'
  },
  {
    Raza: [/*Ver */
      //'Dependen de la etiología'
    ],
    NAME: 'SEBORREA SECUNDARIA'
  },
  {
    Raza: [
      'Todas',
      'Mas incidencia en',
      'Dachshund'
    ],
    NAME: 'SEBORREA DEL BORDE DE LAS OREJAS'
  },
  {
    Raza: [

    ],
    NAME: 'HIPERPLASIA DE LA GLÁNDULA DE LA COLA'
  },
  {
    Raza: [
      'Todas',
      'Mas incidencia en',
      'Boxer',
      'Terrier de Boston',
      'Bulldog',
      'Dogo de Burdeos'
    ],
    NAME: 'HIPERQUERATOSIS NASO DIGITAL IDIOPÁTICA'
  },
  {
    Raza: [/*Ver */
      'Todas',
      'Mas incidencia en',
      'Cocker spaniel',
      //'Aunque también fue descripto en',
      'Schnauzer miniatura',
      'Labrador retriever'
    ],
    NAME: 'DERMATOSIS QUE RESPONDE A LA VITAMINA A'
  },
  {
    Raza: [/*Ver */
      'Todas',
      'Mas incidencia en',
      'Siberian husky',
      'Alaskan malamute',
      'Bull terriers',
      'Siberian husky',
      'Alaskan malamute'
    ],
    NAME: 'DERMATOSIS QUE RESPONDE AL ZINC'
  },
  {
    Raza: [/*Ver */
      'Todas',
      'Mas incidencia en',
      'Doberman azules',
      'Doberman',
      'Dachshund',
      'Gran Danés',
      'Whippet',
      'Galgo italianos',
      'Doberman miniatura',
      'Yorkshire terrier',
      'Chihuahua',
    ],
    NAME: 'ALOPECÍA POR MUTACION DE COLOR'
  },
  {
    Raza: [
      'Razas grandes',
      'Doberman',
      'Ovejero Alemán',
      'Gran Danés',
      'Golden retriever',
      'Setter irlandés',
    ],
    NAME: 'DERMATITIS ACRAL POR LAMIDO'
  },
  {
    Raza: [/*Ver */
      //      'las mismas que para cada etiología desencadenante'
    ],
    NAME: 'OTITIS EXTERNA'
  },
  {
    Raza: [
      'Razas de tamaño pequeño'
    ],
    NAME: 'ENFERMEDAD DE LOS SACOS ANALES'
  },
  {
    Raza: [
      'Todas',
      'Mas incidencia en',
      'Ovejero Alemán',
      'Y sus cruzas',
      'Gran Danés',
      'Setter irlandés',
    ],
    NAME: 'FÍSTULAS PERIANALES'
  },
  {
    Raza: [
      'Todas',
      'Mas incidencia en',
      'Dachshund',
      'Golden retriever'
    ],
    NAME: 'CELULITIS JUVENIL'
  },
  {
    Raza: [/* Ver */
      //'tiene predilección por razas de mando corto',
      'Terrier de Boston',
      'Boxer',
      'Chihuahua',
      'Dachshund',
      'Greyhoun italiano',
      'Poinscher miniatura',
      'Weimaraner',
      'Whippet'
    ],
    NAME: 'ALOPECÍA O CALVICIE PATRÓN'
  },
  {
    Raza: [
      /*Ver */
      'Mas incidencia en',
      'Ovejero Alemán',
      //'raza dolicocéfala está predispuesta'
    ],
    NAME: 'FORUNCULOSIS EOSINOFÍLICA'
  },
  {
    Raza: [
      'Todas',
      'Mas incidencia en',
      'Dachshund',
    ],
    NAME: 'VASCULITIS DEL BORDE DE LAS OREJAS'
  }



]