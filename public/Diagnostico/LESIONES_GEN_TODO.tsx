export const LesionesGeneralesValues = [
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
  'Disminución del olfato',
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
  'Miositis',
  'No hay',
  'Conjuntivitis',
  'Olor desagradable (particularmente en los pliegues labiales)',
  'Larga lista de signos clínicos, ninguno patognomónico ni correlacionados a las lesiones dérmicas',
  'Pérdida de peso',
  'Poliartritis',
  'Poliuria-polidipsia',
  'Polifagia',
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

type LesionesGeneralesDetail = typeof LesionesGeneralesValues[number];

export type LesionesGeneralesType = {
  LesionesGenerales: LesionesGeneralesDetail[];
  NAME: string;
};

export const LesionesGenerales: LesionesGeneralesType[] = [
  {
    NAME: 'DERMATITIS DE LOS PLIEGUES',
    LesionesGenerales: [
      'Olor desagradable (particularmente en los pliegues labiales)'
    ]
  },
  {
    NAME: 'DERMATITIS HÚMEDA AGUDA',
    LesionesGenerales: [
      'No hay'
    ]
  },
  {
    NAME: 'IMPÉTIGO',
    LesionesGenerales: [
      'Sólo si existe una enfermedad sistémica como el moquillo'
    ]
  },
  {
    NAME: 'FOLICULITIS BACTERIANA SUPERFICIAL',
    LesionesGenerales: [
      'No hay'
    ]
  },
  {
    NAME: 'PIODERMIA SUPERFICIAL DISEMINADA',
    LesionesGenerales: [
      'No hay'
    ]
  },
  {
    NAME: 'PIODERMIA MUCOCUTÁNEA',
    LesionesGenerales: [
      'No hay'
    ]
  },
  {
    NAME: 'PIODERMIA PROFUNDA DEL OVEJERO ALEMÁN',
    LesionesGenerales: [
      'Pérdida de peso', 'Apetito irregular',
      'Dolor localizado (en los espacios interdigitales)'
    ]
  },
  {
    NAME: 'FOLICULITIS-FORUNCULOSIS PIOTRAUMATICA',
    LesionesGenerales: [
      'No hay'
    ]
  },
  {
    NAME: 'FOLICULITIS Y FORUNCULOSIS NASAL',
    LesionesGenerales: [
      'Dolor',

    ]
  },
  {
    NAME: 'FOLICULITIS FORUNCULOSIS DEL MENTÓN Y LABIOS',
    LesionesGenerales: [
      'No hay',
      'Dolor'
    ]
  },
  {
    NAME: 'FOLICULITIS Y FORUNCULOSIS PODAL',
    LesionesGenerales: [
      'Lamido compulsivo',
      'Dolor',
      'Dificultad para caminar'
    ]
  },
  {
    NAME: 'FOLICULITIS FORUNCULOSIS DE LOS CALLOS',
    LesionesGenerales: [
      'No hay'
    ]
  },
  {
    NAME: 'DERMATITIS ALÉRGICA POR PULGAS EST. I',
    LesionesGenerales: [
      'No hay'
    ]
  },
  {
    NAME: 'DERMATITIS ALÉRGICA POR PULGAS EST. II',
    LesionesGenerales: [
      'Adelgazamiento'
    ]
  },
  {
    NAME: 'DERMATITIS ALÉRGICA POR PULGAS EST. III',
    LesionesGenerales: [
      'Adelgazamiento'
    ]
  },
  {
    NAME: 'DERMATITIS ATÓPICA CANINA EST. I',
    LesionesGenerales: [
      'Conjuntivitis', 'Rinitis'
    ]
  },
  {
    NAME: 'DERMATITIS ATÓPICA CANINA EST. II',
    LesionesGenerales: [
      'Conjuntivitis',
      'Rinitis',
      'Adelgazamiento'
    ]
  },
  {
    NAME: 'DERMATITIS ATÓPICA CANINA EST. III',
    LesionesGenerales: [
      'Conjuntivitis',
      'Rinitis',
      'Adelgazamiento'
    ]
  },
  {
    NAME: 'REACCIÓN ADVERSA A LOS ALIMENTOS',
    LesionesGenerales: [
      'Algunos animales tienen al mismo tiempo vómitos, diarreas y cólicos'
    ]
  },
  {
    NAME: 'PÉNFIGO FOLIÁCEO',
    LesionesGenerales: [
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
    LesionesGenerales: [
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
    LesionesGenerales: [
      'No hay'
    ]
  },
  {
    NAME: 'PENFIGOIDE BULLOSO',
    LesionesGenerales: [
      'Depresión',
      'Fiebre',
      'Anorexia',
      'Pérdida de peso',
      'Dolor variable (manifiestado por lamido)'
    ]
  },
  {
    NAME: 'LUPUS ERITEMATOSO SISTÉMICO',
    LesionesGenerales: [
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
    LesionesGenerales: [
    ]
  },
  {
    NAME: 'LUPUS MUCOCUTÁNEO',
    LesionesGenerales: [
    ]
  },
  {
    NAME: 'LUPUS CUTÁNEO VESICULAR',
    LesionesGenerales: [
    ]
  },
  {
    NAME: 'DERMATOMIOSITIS',
    LesionesGenerales: [
      'Miositis', 'Dolor',
      'Todas las manifestaciones clínicas, bioquímicas y electromiográficos'
    ]
  },
  {
    NAME: 'DEMODICOSIS LOCALIZADA',
    LesionesGenerales: [
      'No hay'
    ]
  },
  {
    NAME: 'DEMODICOSIS GENERALIZADA',
    LesionesGenerales: [
      'Dependen del compromiso sistémico',
      'Dependen de la intensidad de la piodermia',
      'Linfoadenopatía'
    ]
  },
  {
    NAME: 'SARNA SARCÓPTICA',
    LesionesGenerales: [
      'Prurito constante',
      'Gran deterioro del estado general'
    ]
  },
  {
    NAME: 'SARNA OTODÉCTICA',
    LesionesGenerales: [
      'Rascado de las orejas',
      'Prurito generalizado'
    ]
  },
  {
    NAME: 'CHEILETIELOSIS',
    LesionesGenerales: [
    ]
  },
  {
    NAME: 'DERMATOSIS POR HIPERADRENOCORTISISMO',
    LesionesGenerales: [
      'Poliuria-polidipsia', 'Polifagia',
      'Debilidad muscular generalizada, abdomen péndulo',
      'Infecciones urinarias',
      'Anestro o atrofia testicular',
      'Diabetes mellitus con insulinoresistencia'
    ]
  },
  {
    NAME: 'DERMATOSIS POR HIPOTIROIDISMO',
    LesionesGenerales: [
      'Larga lista de signos clínicos, ninguno patognomónico ni correlacionados a las lesiones dérmicas'
    ]
  },
  {
    NAME: 'ALOPECÍA X',
    LesionesGenerales: [
    ]
  },
  {
    NAME: 'DERMATOSIS POR NEOPLASIA TESTICULAR',
    LesionesGenerales: [
      'Un testículo agrandado', 'Un testículo ectópico(cualquiera de las dos posibilidades)',
      'Criptorquidea',
      'Atracción sexual sobre otros machos',
      'Prostatomegalia ocasionando hematuria, disuria'
    ]
  },
  {
    NAME: 'DERMATOSIS POR HIPERESTROGENISMO EN HEMBRAS',
    LesionesGenerales: [
      'Estros irregulares',
      'Falsa preñez',
      'Endometrosis',
      'Piometra'
    ]
  },
  {
    NAME: 'DERMATOSIS QUE RESPONDE A LOS ESTRÓGENOS',
    LesionesGenerales: [
      'Rara vez cursa junto con incontinencia urinaria NO neurogénica'
    ]
  },
  {
    NAME: 'DERMATOFITOSIS POR MICROSPORUM',
    LesionesGenerales: [
      'Ausentes'
    ]
  },
  {
    NAME: 'DERMATOFITOSIS POR TRICOPHYTON',
    LesionesGenerales: [
      'Ausentes'
    ]
  },
  {
    NAME: 'DERMATITIS POR MALASSEZIA',
    LesionesGenerales: [
      'Prurito constante'
    ]
  },
  {
    NAME: 'SEBORREA PRIMARIA',
    LesionesGenerales: [
    ]
  },
  {
    NAME: 'SEBORREA SECUNDARIA',
    LesionesGenerales: [
      'Dependen de la variada etiología que le da origen'
    ]
  },
  {
    NAME: 'SEBORREA DEL BORDE DE LAS OREJAS',
    LesionesGenerales: [
      'Sacuden la cabeza y golpean las orejas contra los temporales contrarios',
      'Rascado de las orejas'
    ]
  },
  {
    NAME: 'HIPERPLASIA DE LA GLÁNDULA DE LA COLA',
    LesionesGenerales: [
      'Adenoma de glándulas circumanales'
    ]
  },
  {
    NAME: 'HIPERQUERATOSIS NASO - DIGITAL IDIOPÁTICA',
    LesionesGenerales: [
      'Dificultad para caminar'
    ]
  },
  {
    NAME: 'DERMATOSIS QUE RESPONDE A LA VITAMINA A',
    LesionesGenerales: [
      'No hay'
    ]
  },
  {
    NAME: 'DERMATOSIS QUE RESPONDE AL ZINC',
    LesionesGenerales: [
      'Disminución del olfato', 'Disminución del gusto',
      'El estrés y el estro precipitan los signos clínicos dérmicos'
    ]
  },
  {
    NAME: 'ALOPECÍA POR MUTACION DE COLOR',
    LesionesGenerales: [
    ]
  },
  {
    NAME: 'DERMATITIS ACRAL POR LAMIDO',
    LesionesGenerales: [
    ]
  },
  {
    NAME: 'OTITIS EXTERNA',
    LesionesGenerales: [
      'Ausentes'
    ]
  },
  {
    NAME: 'ENFERMEDAD DE LOS SACOS ANALES',
    LesionesGenerales: [
      'No hay'
    ]
  },
  {
    NAME: 'FÍSTULAS PERIANALES',
    LesionesGenerales: [
      'Dolor localizado',
      'Lamido constante'
    ]
  },
  {
    NAME: 'CELULITIS JUVENIL',
    LesionesGenerales: [
      'Linfoadenopatía',
      'Dolor'
    ]
  },
  {
    NAME: 'ALOPECÍA O CALVICIE PATRÓN',
    LesionesGenerales: [
    ]
  },
  {
    NAME: 'FORUNCULOSIS EOSINOFÍLICA',
    LesionesGenerales: [
      'Dolor',
    ]
  },
  {
    NAME: 'VASCULITIS DEL BORDE DE LAS OREJAS',
    LesionesGenerales: [
      'No hay',
      'Dolor localizado'
    ]
  }
]

