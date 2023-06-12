export const LesionesGralValues = [
  'Adelgazamiento',
  'Algunos animales tienen al mismo tiempo vómitos, diarreas y cólicos',
  'Anemia',
  'Anestro o atrofia testicular',
  'Anorexia',
  'Atracción sexual sobre otros machos',
  'Ausentes',
  'Todas las manifestaciones clínicas, bioquímicas y electromiográficos',
  'Conjuntivitis',
  'Criptorquidea',
  'Debilidad muscular generalizada, abdomen péndulo',
  'Dependen de la intensidad de la piodermia',
  'Dependen de la variada etiología que le da origen',
  'Dependen del compromiso sistémico',
  'Depresión',
  'Diabetes mellitus con insulinoresistencia',
  'Disminución de olfato',
  'Disminución del gusto',
  'Dolor',
  'Dolor localizado',
  'Dolor localizado (en los espacios interdigitales)',
  'Dolor variable (manifiestado por lamido)',
  'Dificultad para caminar',
  'El estrés y el estro precipitan los signos clínicos dérmicos',
  'Apetito irregular',
  'Endometrosis',
  'Piometra',
  'Enfermedad sistémica',
  'Estros irregulares',
  'Adenoma de glándulas circumanales',
  'Falsa preñez',
  'Fiebre',
  'Glomerulonefropatía',
  'Gran deterioro del estado general',
  'Halitosis',
  'Salivación excesiva',
  'Hipertermia',
  'Infecciones urinarias',
  'Lamido compulsivo',
  'Lamido constante',
  'Linfoadenopatía',
  'Miositis y dolor',
  'No hay',
  'Conjuntivitis',
  'Olor desagradable (particularmente en los pliegues labiales)',
  'Larga lista de signos clínicos, ninguno patognomónico ni correlacionados a las lesiones dérmicas',
  'Pérdida de peso',
  'Poliartritis',
  'Poliuria-polidipsia', 'Polifagia',
  'Prurito generalizado',
  'Prostatomegalia ocasionando hematuria, disuria',
  'Prurito constante',
  'Rara vez cursa junto con incontinencia urinaria NO neurogénica',
  'Rascado de las orejas',
  'Rinitis',
  'Sacuden la cabeza y golpean las orejas contra los temporales contrarios',
  'Sólo si existe una enfermedad sistémica como el moquillo',
  'Un testículo agrandado',
  'Un testículo ectópico(cualquiera de las dos posibilidades)'
] as const;

type LesionesGralDetail = typeof LesionesGralValues[number];

export type LesionesGralType = {
  LesionesGral: LesionesGralDetail[];
  NAME: string;
};

export const LesionesGral: LesionesGralType[] = [
  {
    NAME: 'DERMATITIS DE LOS PLIEGUES',
    LesionesGral: [
      'Olor desagradable (particularmente en los pliegues labiales)'
    ]
  },
  {
    NAME: 'DERMATITIS HÚMEDA AGUDA',
    LesionesGral: [
      'No hay'
    ]
  },
  {
    NAME: 'IMPÉTIGO',
    LesionesGral: [
      'Sólo si existe una enfermedad sistémica como el moquillo'
    ]
  },
  {
    NAME: 'FOLICULITIS BACTERIANA SUPERFICIAL',
    LesionesGral: [
      'No hay'
    ]
  },
  {
    NAME: 'PIODERMIA SUPERFICIAL DISEMINADA',
    LesionesGral: [
      'No hay'
    ]
  },
  {
    NAME: 'PIODERMIA MUCOCUTÁNEA',
    LesionesGral: [
      'No hay'
    ]
  },
  {
    NAME: 'PIODERMIA PROFUNDA DEL OVEJERO ALEMÁN',
    LesionesGral: [
      'Pérdida de peso', 'Apetito irregular',
      'Dolor localizado (en los espacios interdigitales)'
    ]
  },
  {
    NAME: 'FOLICULITIS-FORUNCULOSIS PIOTRAUMATICA',
    LesionesGral: [
      'No hay'
    ]
  },
  {
    NAME: 'FOLICULITIS Y FORUNCULOSIS NASAL',
    LesionesGral: [
      'Dolor',

    ]
  },
  {
    NAME: 'FOLICULITIS FORUNCULOSIS DEL MENTÓN Y LABIOS',
    LesionesGral: [
      'No hay',
      'Dolor'
    ]
  },
  {
    NAME: 'FOLICULITIS Y FORUNCULOSIS PODAL',
    LesionesGral: [
      'Lamido compulsivo',
      'Dolor',
      'Dificultad para caminar'
    ]
  },
  {
    NAME: 'FOLICULITIS FORUNCULOSIS DE LOS CALLOS',
    LesionesGral: [
      'No hay'
    ]
  },
  {
    NAME: 'DERMATITIS ALÉRGICA POR PULGAS EST. I',
    LesionesGral: [
      'No hay'
    ]
  },
  {
    NAME: 'DERMATITIS ALÉRGICA POR PULGAS EST. II',
    LesionesGral: [
      'Adelgazamiento'
    ]
  },
  {
    NAME: 'DERMATITIS ALÉRGICA POR PULGAS EST. III',
    LesionesGral: [
      'Adelgazamiento'
    ]
  },
  {
    NAME: 'DERMATITIS ATÓPICA CANINA EST. I',
    LesionesGral: [
      'Conjuntivitis', 'Rinitis'
    ]
  },
  {
    NAME: 'DERMATITIS ATÓPICA CANINA EST. II',
    LesionesGral: [
      'Conjuntivitis',
      'Rinitis',
      'Adelgazamiento'
    ]
  },
  {
    NAME: 'DERMATITIS ATÓPICA CANINA EST. III',
    LesionesGral: [
      'Conjuntivitis',
      'Rinitis',
      'Adelgazamiento'
    ]
  },
  {
    NAME: 'REACCIÓN ADVERSA A LOS ALIMENTOS',
    LesionesGral: [
      'Algunos animales tienen al mismo tiempo vómitos, diarreas y cólicos'
    ]
  },
  {
    NAME: 'PÉNFIGO FOLIÁCEO',
    LesionesGral: [
      'Depresión',
      'Fiebre',
      'Anorexia',
      'Pérdida de peso',
      'Linfoadenopatía',
      'Dolor variable (manifiestado por lamido)'
    ]
  },
  {
    NAME: 'PÉNFIGO VULGAR',
    LesionesGral: [
      'Depresión',
      'Fiebre',
      'Anorexia',
      'Pérdida de peso',
      'Halitosis', 'Salivación excesiva',
      'Linfoadenopatía',
      'Dolor variable (manifiestado por lamido)'
    ]
  },
  {
    NAME: 'PÉNFIGO ERITEMATOSO',
    LesionesGral: [
      'No hay'
    ]
  },
  {
    NAME: 'PENFIGOIDE BULLOSO',
    LesionesGral: [
      'Depresión',
      'Fiebre',
      'Anorexia',
      'Pérdida de peso',
      'Dolor variable (manifiestado por lamido)'
    ]
  },
  {
    NAME: 'LUPUS ERITEMATOSO SISTÉMICO',
    LesionesGral: [
      'Enfermedad sistémica',
      'Glomerulonefropatía',
      'Poliartritis',
      'Anemia',
      'Linfoadenopatía',
      'Hipertermia'
    ]
  },
  {
    NAME: 'LUPUS ERITEMATOSO DISCOIDE',
    LesionesGral: [
    ]
  },
  {
    NAME: 'LUPUS MUCOCUTÁNEO',
    LesionesGral: [
    ]
  },
  {
    NAME: 'LUPUS CUTÁNEO VESICULAR',
    LesionesGral: [
    ]
  },
  {
    NAME: 'DERMATOMIOSITIS',
    LesionesGral: [
      'Miositis y dolor',
      'Todas las manifestaciones clínicas, bioquímicas y electromiográficos'
    ]
  },
  {
    NAME: 'DEMODICOSIS LOCALIZADA',
    LesionesGral: [
      'No hay'
    ]
  },
  {
    NAME: 'DEMODICOSIS GENERALIZADA',
    LesionesGral: [
      'Dependen del compromiso sistémico',
      'Dependen de la intensidad de la piodermia',
      'Linfoadenopatía'
    ]
  },
  {
    NAME: 'SARNA SARCÓPTICA',
    LesionesGral: [
      'Prurito constante',
      'Gran deterioro del estado general'
    ]
  },
  {
    NAME: 'SARNA OTODÉCTICA',
    LesionesGral: [
      'Rascado de las orejas',
      'Prurito generalizado'
    ]
  },
  {
    NAME: 'CHEILETIELOSIS',
    LesionesGral: [
    ]
  },
  {
    NAME: 'DERMATOSIS POR HIPERADRENOCORTISISMO',
    LesionesGral: [
      'Poliuria-polidipsia', 'Polifagia',
      'Debilidad muscular generalizada, abdomen péndulo',
      'Infecciones urinarias',
      'Anestro o atrofia testicular',
      'Diabetes mellitus con insulinoresistencia'
    ]
  },
  {
    NAME: 'DERMATOSIS POR HIPOTIROIDISMO',
    LesionesGral: [
      'Larga lista de signos clínicos, ninguno patognomónico ni correlacionados a las lesiones dérmicas'
    ]
  },
  {
    NAME: 'ALOPECÍA X',
    LesionesGral: [
    ]
  },
  {
    NAME: 'DERMATOSIS POR NEOPLASIA TESTICULAR',
    LesionesGral: [
      'Un testículo agrandado', 'Un testículo ectópico(cualquiera de las dos posibilidades)',
      'Criptorquidea',
      'Atracción sexual sobre otros machos',
      'Prostatomegalia ocasionando hematuria, disuria'
    ]
  },
  {
    NAME: 'DERMATOSIS POR HIPERESTROGENISMO EN HEMBRAS',
    LesionesGral: [
      'Estros irregulares',
      'Falsa preñez',
      'Endometrosis',
      'Piometra'
    ]
  },
  {
    NAME: 'DERMATOSIS QUE RESPONDE A LOS ESTRÓGENOS',
    LesionesGral: [
      'Rara vez cursa junto con incontinencia urinaria NO neurogénica'
    ]
  },
  {
    NAME: 'DERMATOFITOSIS POR MICROSPORUM',
    LesionesGral: [
      'Ausentes'
    ]
  },
  {
    NAME: 'DERMATOFITOSIS POR TRICOPHYTON',
    LesionesGral: [
      'Ausentes'
    ]
  },
  {
    NAME: 'DERMATITIS POR MALASSEZIA',
    LesionesGral: [
      'Prurito constante'
    ]
  },
  {
    NAME: 'SEBORREA PRIMARIA',
    LesionesGral: [
    ]
  },
  {
    NAME: 'SEBORREA SECUNDARIA',
    LesionesGral: [
      'Dependen de la variada etiología que le da origen'
    ]
  },
  {
    NAME: 'SEBORREA DEL BORDE DE LAS OREJAS',
    LesionesGral: [
      'Sacuden la cabeza y golpean las orejas contra los temporales contrarios',
      'Rascado de las orejas'
    ]
  },
  {
    NAME: 'HIPERPLASIA DE LA GLÁNDULA DE LA COLA',
    LesionesGral: [
      'Adenoma de glándulas circumanales'
    ]
  },
  {
    NAME: 'HIPERQUERATOSIS NASO - DIGITAL IDIOPÁTICA',
    LesionesGral: [
      'Dificultad para caminar'
    ]
  },
  {
    NAME: 'DERMATOSIS QUE RESPONDE A LA VITAMINA A',
    LesionesGral: [
      'No hay'
    ]
  },
  {
    NAME: 'DERMATOSIS QUE RESPONDE AL ZINC',
    LesionesGral: [
      'Disminución de olfato', 'Disminución del gusto',
      'El estrés y el estro precipitan los signos clínicos dérmicos'
    ]
  },
  {
    NAME: 'ALOPECÍA POR MUTACION DE COLOR',
    LesionesGral: [
    ]
  },
  {
    NAME: 'DERMATITIS ACRAL POR LAMIDO',
    LesionesGral: [
    ]
  },
  {
    NAME: 'OTITIS EXTERNA',
    LesionesGral: [
      'Ausentes'
    ]
  },
  {
    NAME: 'ENFERMEDAD DE LOS SACOS ANALES',
    LesionesGral: [
      'No hay'
    ]
  },
  {
    NAME: 'FÍSTULAS PERIANALES',
    LesionesGral: [
      'Dolor localizado',
      'Lamido constante'
    ]
  },
  {
    NAME: 'CELULITIS JUVENIL',
    LesionesGral: [
      'Linfoadenopatía',
      'Dolor'
    ]
  },
  {
    NAME: 'ALOPECÍA O CALVICIE PATRÓN',
    LesionesGral: [
    ]
  },
  {
    NAME: 'FORUNCULOSIS EOSINOFÍLICA',
    LesionesGral: [
      'Dolor',
    ]
  },
  {
    NAME: 'VASCULITIS DEL BORDE DE LAS OREJAS',
    LesionesGral: [
      'No hay',
      'Dolor localizado'
    ]
  }
]

