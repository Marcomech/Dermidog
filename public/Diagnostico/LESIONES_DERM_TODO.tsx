export const LesionesDermicasValues = [
  '"Escamas" grisaceas cubriendo el manto piloso',
  /*'Dependen de la etiología pero En General son: ',*/
  /*'Van a incluir los de la enfermedad primaria pero En General son:',*/
  'Abscedación',
  'Alisamiento de la trufa',
  'Alopecia cara externa pabellón auricular',
  'Alopecia central por erosión',
  'Alopecia circular y ausencia total de pelo',
  'Alopecia de formas circulares y de tamaño variable',
  'Alopecia de tamaño variable',
  'Alopecia e hiperpigmentación',
  'Alopecia irregular, expansivo no circular, expansiva',
  'Alopecia parcial sin inflamación',
  'Alopecia parcial',
  'Alopecia sin inflamación',
  'Alopecia',
  'Area alopécica circular a ovoide',
  'Borde periférico fibrosos y oscuro',
  'Calcinosis cutis',
  'Cambio de coloración del pelaje por el lamido frecuente',
  'Celulitis',
  'Cicatrices',
  'Cicatriz',
  'Collarete epidérmico',
  'Collaretes muy grandes',
  'Collaretes',
  'Comedones',
  'Costras amarillentas',
  'Costras',
  'Cualquier manifestación cutánea puedes ser dada por L.E.S., el LED puede ser una manifestación del LES',
  'Descamación con cerumen seco color marrón',
  'Descamación',
  'Descamaciones seborreicas',
  'Despigmentación de planum nasal',
  'Edema y exudado sero, hemo, purulento',
  'Edema',
  'El pelo se mantiene en la cabeza, y en las extremidades',
  'El tamaño va desde unos 3 cm de diámetro, hasta tomar grandes extensiones y perder su contorno circular, a medida que continúa el autotrauma',
  'En los casos crónicos, cuando las pápulas, Pústulas y sus costras se desprenden junto con los pelos, le dan a la piel un aspecto de tela apolillada',
  'Eritema de la cara interna de pabellón auricular, del conducto vertical y horizontal',
  'Eritema e hiperpigmentación del rafe prepucial medial',
  'Eritema',
  'Erosión amarillenta, roja y húmeda',
  'Erosión amarillenta, roja y húmeda (evolución aguda)',
  'Erosión',
  'Erosiones',
  'Erosiones mucocutaneas',
  'Escamas',
  'Excoriaciones',
  'Exudado serosanguinolento',
  'Exudado seroso',
  'Exudado seropurulento',
  'Fístulas',
  'Fisuras',
  'Foliculitis bacteriana secundaria',
  'Foliculitis por contaminación bacteriana',
  'Foliculitis secundarias',
  'Foliculitis',
  'Forunculosis',
  'Fractura de los pelos, alguno de ellos vuelven a crecer',
  'Hemorragias',
  'Hiperpigmentación uniforme',
  'Hiperpigmentación',
  'Hiperqueratosis',
  'Hiperqueratosis de las almohadillas plantares',
  'Hipertrofia de los pezones',
  'Hipopigmentada',
  'Inflamación y engrosamiento',
  'Lesiones dermicas oleosas',
  'Lesiones dermicas rodeadas por collarete epidérmico',
  'Leve hiperpigmentación e hiperqueratosis',
  'Liquenificación',
  'Líquido seroso o serosanguinolento o seropurulento',
  'Mal olor',
  'Melanosis macular perineal',
  'Nódulos únicos o múltiples',
  'Ojos de buey',
  'Olor seborreico intenso',
  'Olor seborreico',
  'Onicomadesis y onicorrexia',
  'Onicomicosis',
  'Otitis poco frecuente',
  'Otitis',
  'Pápulas satélites',
  'Pápulas',
  'Parches seborreicos en áreas circunscriptas',
  'Parches seborreicos',
  'Pelo miniaturizado',
  'Pelo opaco y decolorado',
  'Pelo sin brillo y se enreda fácilmente',
  'Pelos periféricos húmedos y pegoteados',
  'Pequeñas protuberancias que elevan los pelos en dorso y lateral de tronco, dando una imagen de dermatitis miliar',
  'Pérdida de tejido(lesiones en sacabocados)',
  'Pezones infantiles',
  'Piel engrosada',
  'Piel eritematosa',
  'Piel alopécica',
  'Piel fina e hipotónica',
  'Piel muy delgada',
  'Piodermia secundaria',
  'Prepucio péndulo',
  'Proliferación de tejidos con fisuras',
  'Prurito dolor manifestado por sentarse y arrastrar el ano contra el piso o por lamido de la región',
  'Prurito en cabeza y cuello',
  'Pústulas rotas',
  'Pústulas y pápulas foliculares (con pelos en su interior)',
  'Pústulas',
  'Reflejo otopruriginoso positivo',
  'Responsable de algunas de las dermatitis erosivas húmedas agudas de la región',
  'Secreciones sero, hemorragicas, purulentas',
  'Signo de Nikolsky positivo',
  'Supuración hemopurulenta',
  'Sobrecrecimiento de Malassezias y bacterias',
  'Collarete epidérmico hiperpigmentado en su centro, que le da a la lesión el aspecto de ojo de buey',
  'Ulceraciónes',
  'Ulceraciónes en piel',
  'Úlceras bucales',
  'Úlceras e hiperqueratosis de las almohadillas plantaras',
  'Úlceras',
  'Venas mamarias visibles',
  'Vesículas',
  'Vulva hiperpigmentada y grande',
  'Vulva infantil',

] as const;

type LesionesDermicasDetail = typeof LesionesDermicasValues[number];

export type LesionesDermicasType = {
  LesionesDermicas: LesionesDermicasDetail[];
  NAME: string;
};

export const LesionesDermicas: LesionesDermicasType[] = [
  {
    NAME: 'DERMATITIS DE LOS PLIEGUES',
    LesionesDermicas: [
      'Exudado seroso',
      'Exudado serosanguinolento',
      'Erosión amarillenta, roja y húmeda'
    ]
  }, {
    NAME: 'DERMATITIS HÚMEDA AGUDA',
    LesionesDermicas: [
      'Exudado seroso',
      'Exudado serosanguinolento',
      'Erosión amarillenta, roja y húmeda (evolución aguda)',
      'Alopecia de formas circulares y de tamaño variable',
      'Pelos periféricos húmedos y pegoteados',
      'El tamaño va desde unos 3 cm de diámetro, hasta tomar grandes extensiones y perder su contorno circular, a medida que continúa el autotrauma'
    ]
  }, {
    NAME: 'IMPÉTIGO',
    LesionesDermicas: [
      'Pápulas',
      'Pústulas',
      'Collarete epidérmico'
    ]
  }, {
    NAME: 'FOLICULITIS BACTERIANA SUPERFICIAL',
    LesionesDermicas: [
      'Pústulas y pápulas foliculares (con pelos en su interior)',
      'Pequeñas protuberancias que elevan los pelos en dorso y lateral de tronco, dando una imagen de dermatitis miliar',
      'En los casos crónicos, cuando las pápulas, Pústulas y sus costras se desprenden junto con los pelos, le dan a la piel un aspecto de tela apolillada',
      'Collarete epidérmico hiperpigmentado en su centro, que le da a la lesión el aspecto de ojo de buey'
    ]
  }, {
    NAME: 'PIODERMIA SUPERFICIAL DISEMINADA',
    LesionesDermicas: [
      'Pústulas rotas',
      'Collaretes muy grandes',
      'Ojos de buey'
    ]
  }, {
    NAME: 'PIODERMIA MUCOCUTÁNEA',
    LesionesDermicas: [
      'Pústulas rotas',
      'Erosión',
      'Alopecia',
      'Costras',
      'Fisuras'
    ]
  }, {
    NAME: 'PIODERMIA PROFUNDA DEL OVEJERO ALEMÁN',
    LesionesDermicas: [
      'Forunculosis',
      'Celulitis',
      'Úlceras',
      'Fístulas',
      'Edema y exudado sero, hemo, purulento',
      'Costras',
      'Alopecia e hiperpigmentación'
    ]
  }, {
    NAME: 'FOLICULITIS, FORUNCULOSIS PIOTRAUMATICA',
    LesionesDermicas: [
      'Exudado seroso',
      'Exudado serosanguinolento',
      'Erosión amarillenta, roja y húmeda (evolución aguda)',
      'Alopecia de tamaño variable',
      'Pelos periféricos húmedos y pegoteados',
      'Pápulas satélites',
      'Erosiones',
      'Excoriaciones',
      'Úlceras',
      'Costras'
    ]
  }, {
    NAME: 'FOLICULITIS Y FORUNCULOSIS NASAL',
    LesionesDermicas: [
      'Forunculosis',
      'Edema y exudado sero, hemo, purulento'
    ]
  }, {
    NAME: 'FOLICULITIS FORUNCULOSIS DEL MENTÓN Y LABIOS',
    LesionesDermicas: [
      'Foliculitis',
      'Forunculosis',
      'Pústulas',
      'Exudado serosanguinolento',
      'Exudado seropurulento'
    ]
  }, {
    NAME: 'FOLICULITIS Y FORUNCULOSIS PODAL',
    LesionesDermicas: [
      'Edema',
      'Fístulas',
      'Exudado seroso',
      'Exudado serosanguinolento',
      'Exudado seropurulento',
      'Nódulos únicos o múltiples'
    ]
  }, {
    NAME: 'FOLICULITIS FORUNCULOSIS DE LOS CALLOS',
    LesionesDermicas: [
      'Exudado serosanguinolento',
      'Exudado seropurulento',
      'Fístulas',
      'Proliferación de tejidos con fisuras'
    ]
  }, {
    NAME: 'DERMATITIS ALÉRGICA POR PULGAS EST. I',
    LesionesDermicas: [
      'Foliculitis',
      'Pápulas',
      'Eritema',
      'Alopecia',
      'Cambio de coloración del pelaje por el lamido frecuente'
    ]
  }, {
    NAME: 'DERMATITIS ALÉRGICA POR PULGAS EST. II',
    LesionesDermicas: [
      'Foliculitis',
      'Alopecia',
      'Pápulas',
      'Eritema',
      'Costras',
      'Leve hiperpigmentación e hiperqueratosis'
    ]
  }, {
    NAME: 'DERMATITIS ALÉRGICA POR PULGAS EST. III',
    LesionesDermicas: [
      'Foliculitis',
      'Alopecia',
      'Pápulas',
      'Eritema',
      'Costras',
      'Hiperpigmentación',
      'Liquenificación'
    ]
  }, {
    NAME: 'DERMATITIS ATÓPICA CANINA EST. I',
    LesionesDermicas: [
      'Eritema',
      'Alopecia',
      'Foliculitis',
      'Erosiones'
    ]
  }, {
    NAME: 'DERMATITIS ATÓPICA CANINA EST. II',
    LesionesDermicas: [
      'Eritema',
      'Alopecia',
      'Foliculitis',
      'Hiperpigmentación',
      'Pápulas',
      'Costras',
      'Pústulas',
      'Otitis',
      'Erosiones',
      'Excoriaciones'
    ]
  }, {
    NAME: 'DERMATITIS ATÓPICA CANINA EST. III',
    LesionesDermicas: [
      'Eritema',
      'Alopecia',
      'Foliculitis',
      'Hiperpigmentación',
      'Liquenificación',
      'Pápulas',
      'Costras',
      'Pústulas',
      'Otitis',
      'Erosiones',
      'Excoriaciones'
    ]
  }, {
    NAME: 'REACCIÓN ADVERSA A LOS ALIMENTOS',
    LesionesDermicas: []
  }, {
    NAME: 'PÉNFIGO FOLIÁCEO',
    LesionesDermicas: [
      'Eritema',
      'Vesículas',
      'Pústulas',
      'Costras',
      'Descamación',
      'Hiperqueratosis de las almohadillas plantares',
      'Signo de Nikolsky positivo'
    ]
  }, {
    NAME: 'PÉNFIGO VULGAR',
    LesionesDermicas: [
      'Erosiones mucocutaneas',
      'Alopecia',
      'Eritema',
      'Costras',
      'Descamación',
      'Lesiones dermicas rodeadas por collarete epidérmico',
      'Úlceras bucales',
      'Signo de Nikolsky positivo'
    ]
  }, {
    NAME: 'PÉNFIGO ERITEMATOSO',
    LesionesDermicas: [
      'Eritema',
      'Alopecia',
      'Vesículas',
      'Pústulas',
      'Costras',
      'Descamación',
    ]
  }, {
    NAME: 'PENFIGOIDE BULLOSO',
    LesionesDermicas: [
      'Eritema',
      'Alopecia',
      'Erosiones',
      'Ulceraciónes en piel',
      'Úlceras bucales'
    ]
  }, {
    NAME: 'LUPUS ERITEMATOSO SISTÉMICO',
    LesionesDermicas: [
      'Cualquier manifestación cutánea puedes ser dada por L.E.S., el LED puede ser una manifestación del LES',
      'Eritema',
      'Alopecia',
      'Costras',
      'Descamación',
      'Úlceras e hiperqueratosis de las almohadillas plantaras'
    ]
  }, {
    NAME: 'LUPUS ERITEMATOSO DISCOIDE',
    LesionesDermicas: [
      'Eritema',
      'Alopecia',
      'Ulceraciónes',
      'Costras',
      'Despigmentación de planum nasal',
      'Alisamiento de la trufa'
    ]
  }, {
    NAME: 'LUPUS MUCOCUTÁNEO',
    LesionesDermicas: [
      'Eritema',
      'Alopecia',
      'Erosión',
      'Ulceraciónes',
      'Costras',
    ]
  }, {
    NAME: 'LUPUS CUTÁNEO VESICULAR',
    LesionesDermicas: [
      'Eritema',
      'Alopecia',
      'Collaretes',
      'Vesículas',
      'Ulceraciónes',
      'Costras'
    ]
  }, {
    NAME: 'DERMATOMIOSITIS',
    LesionesDermicas: [
      'Alopecia parcial',
      'Eritema',
      'Escamas',
      'Costras',
      'Erosiones',
      'Ulceraciónes',
      'Onicomadesis y onicorrexia'
    ]
  }, {
    NAME: 'DEMODICOSIS LOCALIZADA',
    LesionesDermicas: [
      'Alopecia parcial',
      'Eritema',
      'Foliculitis',
      'Descamación',
      'Costras'
    ]
  }, {
    NAME: 'DEMODICOSIS GENERALIZADA',
    LesionesDermicas: [
      'Alopecia',
      'Foliculitis',
      'Eritema',
      'Secreciones sero, hemorragicas, purulentas',
      'Costras',
      'Descamación',
    ]
  }, {
    NAME: 'SARNA SARCÓPTICA',
    LesionesDermicas: [
      'Pápulas',
      'Costras',
      'Alopecia parcial',
      'Hiperpigmentación',
      'Hiperqueratosis',
      'Reflejo otopruriginoso positivo'
    ]
  }, {
    NAME: 'SARNA OTODÉCTICA',
    LesionesDermicas: [
      'Otitis',
      'Alopecia cara externa pabellón auricular',
      'Descamación con cerumen seco color marrón',
      'Prurito en cabeza y cuello'
    ]
  }, {
    NAME: 'CHEILETIELOSIS',
    LesionesDermicas: [
      '"Escamas" grisaceas cubriendo el manto piloso'
    ]
  }, {
    NAME: 'DERMATOSIS POR HIPERADRENOCORTISISMO',
    LesionesDermicas: [
      'Alopecia sin inflamación',
      'Piel fina e hipotónica',
      'Venas mamarias visibles',
      'Calcinosis cutis',
      'Pelo opaco y decolorado',
      'Piodermia secundaria',
      'Parches seborreicos',
      'Comedones'
    ]
  }, {
    NAME: 'DERMATOSIS POR HIPOTIROIDISMO',
    LesionesDermicas: [
      'Alopecia parcial sin inflamación',
      'Hiperpigmentación uniforme',
      'El pelo se mantiene en la cabeza, y en las extremidades',
      'Otitis poco frecuente',
      'Sobrecrecimiento de Malassezias y bacterias'
    ]
  }, {
    NAME: 'ALOPECÍA X',
    LesionesDermicas: [
      'Alopecia sin inflamación',
      'Piel fina e hipotónica',
      'Hiperpigmentación',
      'Otitis',
      'Foliculitis secundarias'
    ]
  }, {
    NAME: 'DERMATOSIS POR NEOPLASIA TESTICULAR',
    LesionesDermicas: [
      'Alopecia sin inflamación',
      'Hiperpigmentación',
      'Hipertrofia de los pezones',
      'Prepucio péndulo',
      'Otitis',
      'Piel engrosada',
      'Melanosis macular perineal',
      'Eritema e hiperpigmentación del rafe prepucial medial'
    ]
  }, {
    NAME: 'DERMATOSIS POR HIPERESTROGENISMO EN HEMBRAS',
    LesionesDermicas: [
      'Piel engrosada',
      'Piel alopécica',
      'Hiperpigmentación',
      'Vulva hiperpigmentada y grande',
      'Otitis'
    ]
  }, {
    NAME: 'DERMATOSIS QUE RESPONDE A LOS ESTRÓGENOS',
    LesionesDermicas: [
      'Alopecia sin inflamación',
      'Hipopigmentada',
      'Vulva infantil',
      'Pezones infantiles',
      'Piel muy delgada'
    ]
  }, {
    NAME: 'DERMATOFITOSIS POR MICROSPORUM',
    LesionesDermicas: [
      'Alopecia circular y ausencia total de pelo',
      'Descamaciones seborreicas',
      'Foliculitis por contaminación bacteriana'
    ]
  }, {
    NAME: 'DERMATOFITOSIS POR TRICOPHYTON',
    LesionesDermicas: [
      'Alopecia irregular, expansivo no circular, expansiva',
      'Foliculitis',
      'Hiperpigmentación',
      'Onicomicosis'
    ]
  }, {
    NAME: 'DERMATITIS POR MALASSEZIA',
    LesionesDermicas: [
      'Piel eritematosa',
      'Piel alopécica',
      'Lesiones dermicas oleosas',
      'Olor seborreico',
      'Otitis',
      'Costras amarillentas'
    ]
  }, {
    NAME: 'SEBORREA PRIMARIA',
    LesionesDermicas: [
      /*'Dependen de la etiología pero En General son:',*/
      'Descamación',
      'Parches seborreicos en áreas circunscriptas',
      'Olor seborreico',
      'Otitis',
      'Alopecia'
    ]
  }, {
    NAME: 'SEBORREA SECUNDARIA',
    LesionesDermicas: [
      /*'Van a incluir los de la enfermedad primaria pero En General son:',*/
      'Descamación',
      'Alopecia',
      'Parches seborreicos en áreas circunscriptas',
      'Olor seborreico intenso',
      'Otitis'
    ]
  }, {
    NAME: 'SEBORREA DEL BORDE DE LAS OREJAS',
    LesionesDermicas: [
      'Descamación',
      'Alopecia',
      'Fisuras',
      'Úlceras',
      'Hemorragias',
      'Costras'
    ]
  }, {
    NAME: 'HIPERPLASIA DE LA GLÁNDULA DE LA COLA',
    LesionesDermicas: [
      'Area alopécica circular a ovoide',
      'Descamación',
    ]
  }, {
    NAME: 'HIPERQUERATOSIS NASO, DIGITAL IDIOPÁTICA',
    LesionesDermicas: [
      'Hiperqueratosis',
      'Alopecia',
      'Fisuras',
      'Erosiones'
    ]
  }, {
    NAME: 'DERMATOSIS QUE RESPONDE A LA VITAMINA A',
    LesionesDermicas: [
      'Hiperqueratosis',
      'Descamación',
      'Alopecia',
      'Olor seborreico',
      'Pelo sin brillo y se enreda fácilmente',
      'Otitis'
    ]
  }, {
    NAME: 'DERMATOSIS QUE RESPONDE AL ZINC',
    LesionesDermicas: [
      'Eritema',
      'Alopecia',
      'Costras',
      'Descamación',
      'Exudado seroso',
      'Hiperpigmentación',
      'Hiperqueratosis'
    ]
  }, {
    NAME: 'ALOPECÍA POR MUTACION DE COLOR',
    LesionesDermicas: [
      'Fractura de los pelos, alguno de ellos vuelven a crecer',

      'Alopecia parcial',
      'Descamación',
      'Foliculitis bacteriana secundaria'
    ]
  }, {
    NAME: 'DERMATITIS ACRAL POR LAMIDO',
    LesionesDermicas: [
      'Alopecia central por erosión',
      'Úlceras',
      'Borde periférico fibrosos y oscuro'
    ]
  }, {
    NAME: 'OTITIS EXTERNA',
    LesionesDermicas: [
      'Eritema de la cara interna de pabellón auricular, del conducto vertical y horizontal',
      'Descamación',
      'Mal olor',
      'Otitis'
    ]
  }, {
    NAME: 'ENFERMEDAD DE LOS SACOS ANALES',
    LesionesDermicas: [
      'Edema',
      'Alopecia',
      'Prurito dolor manifestado por sentarse y arrastrar el ano contra el piso o por lamido de la región',
      'Abscedación',
      'Fístulas',
      'Responsable de algunas de las dermatitis erosivas húmedas agudas de la región'
    ]
  }, {
    NAME: 'FÍSTULAS PERIANALES',
    LesionesDermicas: [
      'Líquido seroso o serosanguinolento o seropurulento',
      'Alopecia',
      'Fístulas',
      'Úlceras',
      'Cicatrices'
    ]
  }, {
    NAME: 'CELULITIS JUVENIL',
    LesionesDermicas: [
      'Edema',
      'Alopecia',
      'Pápulas',
      'Pústulas',
      'Fístulas',
      'Supuración hemopurulenta',
      'Costras amarillentas'
    ]
  }, {
    NAME: 'ALOPECÍA O CALVICIE PATRÓN',
    LesionesDermicas: [
      'Alopecia parcial',
      'Pelo miniaturizado'
    ]
  }, {
    NAME: 'FORUNCULOSIS EOSINOFÍLICA',
    LesionesDermicas: [
      'Forunculosis',
      'Edema y exudado sero, hemo, purulento'
    ]
  }, {
    NAME: 'VASCULITIS DEL BORDE DE LAS OREJAS',
    LesionesDermicas: [
      'Inflamación y engrosamiento',
      'Úlceras',
      'Costras',
      'Pérdida de tejido(lesiones en sacabocados)',
      'Cicatriz'
    ]
  }
]
