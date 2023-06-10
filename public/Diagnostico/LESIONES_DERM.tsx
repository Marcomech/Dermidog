const LesionesDermValues = [
  "a) Exudado seroso o serosanguinolento", "b) Erosión amarillenta-roja y hñameda",
  "a) Exudado seroso o serosanguinolento", "b) Erosión amarillenta-roja, hñameda de evolución aguda", "c) Alopecia de formas circulares y de tamañ1o variable", "d) Pelos periféricos hñamedos y pegoteados", "El tamañ1o va desde unos 3 cm de diámetro, hasta tomar grandes extensiones y perder su contorno circular, a medida que continñaa el autotrauma",
  "a) Pápulas", "b) Pñastulas", "c) Collarete epidérmico",
  "a) Pñastulas y pápulas foliculares.Caracterizado por la presencia de pelos en su interior", "b) Pequeñ1as protuberancias que elevan los pelos en dorso y lateral de tronco, dando una imagen de dermatitis miliar", "e) En los casos crónicos, cuando las pápulas, pñastulas y sus costras se desprenden junto con los pelos, le dan a la piel un aspecto de tela apolillada", "d) También es posible observar el collarete epidérmico hiperpigmentado en su centro, que le da a la lesión el aspecto de ojo de buey,",
  "a) Pñastulas rotas", "b) collaretes muy grandes", "c) Ojos de buey",
  "a) Pñastulas rotas", "b) erosión", "c) alopecia", "d) costras", "e) fisuras",
  "a) Forunculosis, celulitis, ulceras y fistulas", "b) Edema y exudados sero-hemo-purulento", "e) costras, alopecia e hiperpigmentación",
  "a) Exudado seroso o serosanguinolento", "b) Erosión amarillenta-roja, hñameda de evolución aguda", "c) Alopecia de tamañ1o variable", "d) Pelos periféricos hñamedos y pegoteados", "e) Pápulas satélites", "f) erosiones, excoriaciones, ulceras y costras",
  "a) Forunculosis", "b) Edema y exudado sero-hemo-purulento",
  "a) Foliculitis, forunculosis, pñastulas", "b) Exudado serosanguinoliento o seropurulento",
  "a) Edema", "b) Fístulas", "c) Exudados seroso, serosanguinolientoo seropurulento", "b) nódulos ñanicos o mñaltiples",
  "a) Exudado serosanguinolento o seropurulento", "b) Fístulas", "e) Proliferación de tejidos con fisuras",
  "Foliculitis, pápulas, eritema, alopecia, cambio de coloración del pelaje por el lamido frecuente",
  "a) Foliculitis, alopecia, pápulas, eritema, costras", "b) Leve hiperpigmentación e hiperqueratosis",
  "a) Foliculitis, alopecia, pápulas, eritema, costras", "b) Hiperpigmentación, liquenificación",
  "a) Eritema, alopecia, foliculitis, erosiones",
  "a) Eritema, alopecia, foliculitis, hiperpigmentacion", "b) Pápulas, costras, pñastulas", "c) Otitis", "d) Erosiones, excoriaciones",
  "a) Eritema, alopecia, foliculitis, hiperpigmentacion, liquenificacion", "b) Pápulas, costras, pñastulas", "c) Otitis", "d) Erosiones, excoriaciones",
  "a) Eritema, vesículas, pñastulas", "b) Costras, descamaciones", "e) hiperqueratosis de las almohadillas plantares", "d) Signo de Nikolsky positivo",
  "a) Erosiones mucocutaneas, alopecia", "b) Eritema, costras, descamaciones", "c) LesionesDerm rodeadas por collarete epidérmico", "d) Ulceras bucales", "e) Signo de Nikolsky positivo",
  "a) Eritema, alopecia, vesículas, pñastulas", "b) Costras, descamaciones",
  "Eritema, alopecia, erosiones, ulceraciones en piel y ulceras bucales",
  "a) Cualquier manifestación cutánea puedes ser dada por L.E.S., el LED puede ser una manifestación del LES", "b) Eritema, alopecia, costras, descamaciones", "e) Ulceras e hiperqueratosis de las almohadillas plantaras",
  "a) Eritema, alopecia, ulceración y costras", "b) Despigmentación de planum nasal", "c) alisamiento de la trufa",
  "a) Eritema, alopecia, erosión, ulceración y costras",
  "a) Eritema, alopecia, collaretes, vesículas, ulceración y costras",
  "a) Alopecia parcial", "b) Eritema, escamas, costras", "e) Erosiones, ulceraciones", "d) Onicomadesis y onicorrexia",
  "a) Alopecia parcial, eritema", "b) Foliculitis", "c) descamación, costras",
  "a) Alopecia, foliculitis", "b) Eritema, secreciones sero-hemorragicas-purulentas", "e) Costras, descamaciones",
  "a) Pápulas, costras", "b) Alopecia parcial", "e) Hiperpigmentación, hiperqueratosis", "d) Reflejo otopruriginoso positivo",
  "a) Otitis y alopecia cara externa pabellón auricular", "b) Descamación con cerumen seco color marrón", "e) Prurito en cabeza y cuello",
  "'Escamas' grisaceas cubriendo el manto piloso",
  "a) Alopecia sin inflamación,", "b) piel fina e hipotónica", "c) Venas mamarias visibles,", "d) calcinosis cutis", "e) Pelo opaco y decolorado", "f) Piodermia secundaria, parches seborreicos, comedones",
  "a) Alopecia parcial sin inflamación", "b) Hiperpigmentación uniforme", "e) El pelo se mantiene en la cabeza, y en las extremidades", "d) Otitis poco frecuente", "e) sobrecrecimiento de Malassezias y bacterias",
  "a) Alopecia sin inflamación,", "b) piel fina e hipotónica", "c) Hiperpigmentación", "d) Otitis, foliculitis secundarias",
  "a) Alopecia sin inflamación", "b) Hiperpigmentación", "c) Hipertrofia de los pezones", "d) Prepucio péndulo", "e) Otitis", "f) piel engrosada", "g) melanosis macular perineal", "h) eritema e hiperpigmentación del rafe prepucial medial",
  "a) Piel engrosada y alopécica", "b) Hiperpigmentación", "c) Vulva hiperpigmentada y grande", "d) Otitis",
  "a) alopecia sin inflamación", "b) Hipopigmentada", "e) Vulva infantil", "d) Pezones infantiles", "e) piel muy delgada",
  "a) Alopecia circular y ausencia total de pelo", "b) Descamaciones seborreicas", "e) Foliculitis por contaminación bacteriana",
  "a) Alopecia irregular, expansivo no circular, expansiva", "b) Foliculitis", "e) hiperpigmentación", "d ) Onicomicosis",
  "a) Piel eritematosa y alopécica", "b) LesionesDerm oleosa", "e) Olor seborreico", "d) Otitis", "e) costras amarillentas",
  "dependen de la etiología pero En General son:", "a) Descamación", "b) Parches seborreicos en areas circunscriptas", "c) Olor seborreico", "d) Otitis", "e) alopecia",
  "van a incluir los de la enfermedad primaria pero En General son:", "a) Descamación y alopecia", "b) Parches seborreicos en áreas circunscriptas", "c) Olor seborreico intenso", "d) Otitis",
  "a) Descamación y alopecia", "b) Fisuras, Ulceras", "c) Hemorragias", "d) costras",
  "a) Area alopécica circular a ovoide", "b) Descamaciones",
  "a) Hiperqueratosis y alopecia", "b) Fisuras y erosiones",
  "a) Hiperqueratosis, descamación, alopecia", "b) Olor seborreico", "e) Pelo sin brillo y se enreda fácilmente", "d) Otitis",
  "a) Eritema, alopecia, costras, descamaciones", "b) Exudados serosos", "e) Hiperpigmentación, hiperqueratosis",
  "a) Fractura de los pelos, alguno de ellos vuelven a crecer", "y esta tendencia decrece con el tiempo", "b) Alopecia parcial", "e) Descamaciones", "d) Foliculitis bacteriana secundaria",
  "a) Alopecia central por erosión, ulceras", "b) Borde periférico fibrosos y oscuro",
  "a) Eritema de la cara interna de pabellón auricular, del conducto vertical y horizontal", "b) Descamaciones", "e) Mal olor", "d) Otitis",
  "a) Edema y alopecia", "b) prurito dolor manifestado por sentarse y arrastrar el ano contra el piso o por lamido de la región", "c) Abscedación, fístulas", "Responsable de algunas de las dermatitis erosivas hñamedas agudas de la región",
  "Líquido seroso o serosanguinolento o seropurulento", "Alopecia", "Fístulas", "Ulceras", "cicatrices",
  "a) Edema y alopecia", "b) Pápulas y pñastulas", "e) Fístulas, supuración hemopurulenta", "d) Costras amarillentas",
  "a) alopecia parcial", "b) pelo miniaturizado",
  "a) Forunculosis", "b) Edema y exudado sero-hemo-purulento",
  "a) inflamación y engrosamiento", "b) ñalceras y costras", "c) pérdida de tejido(lesiones en sacabocados)", "d) cicatriz"
] as const;
export type LesionesDermDetail = typeof LesionesDermValues[number];
export type LesionesDermType = {
  LesionesDerm: LesionesDermDetail[];
  NAME: string;
};
export const LesionesDerm: LesionesDermType[] = [
  {
    NAME: "DERMATITIS DE LOS PLIEGUES",
    LesionesDerm: [
      "a) Exudado seroso o serosanguinolento", "b) Erosión amarillenta-roja y hñameda"
    ]
  }, {
    NAME: "DERMATITIS HÚMEDA AGUDA",
    LesionesDerm: [
      "a) Exudado seroso o serosanguinolento", "b) Erosión amarillenta-roja, hñameda de evolución aguda", "c) Alopecia de formas circulares y de tamañ1o variable", "d) Pelos periféricos hñamedos y pegoteados", "El tamañ1o va desde unos 3 cm de diámetro, hasta tomar grandes extensiones y perder su contorno circular, a medida que continñaa el autotrauma"
    ]
  }, {
    NAME: "IMPÉTIGO",
    LesionesDerm: [
      "a) Pápulas", "b) Pñastulas", "c) Collarete epidérmico"
    ]
  }, {
    NAME: "FOLICULITIS BACTERIANA SUPERFICIAL",
    LesionesDerm: [
      "a) Pñastulas y pápulas foliculares.Caracterizado por la presencia de pelos en su interior", "b) Pequeñ1as protuberancias que elevan los pelos en dorso y lateral de tronco, dando una imagen de dermatitis miliar", "e) En los casos crónicos, cuando las pápulas, pñastulas y sus costras se desprenden junto con los pelos, le dan a la piel un aspecto de tela apolillada", "d) También es posible observar el collarete epidérmico hiperpigmentado en su centro, que le da a la lesión el aspecto de ojo de buey,"
    ]
  }, {
    NAME: "PIODERMIA SUPERFICIAL DISEMINADA",
    LesionesDerm: [
      "a) Pñastulas rotas", "b) collaretes muy grandes", "c) Ojos de buey"
    ]
  }, {
    NAME: "PIODERMIA MUCOCUTÁNEA",
    LesionesDerm: [
      "a) Pñastulas rotas", "b) erosión", "c) alopecia", "d) costras", "e) fisuras"
    ]
  }, {
    NAME: "PIODERMIA PROFUNDA DEL OVEJERO ALEMÁN",
    LesionesDerm: [
      "a) Forunculosis, celulitis, ulceras y fistulas", "b) Edema y exudados sero-hemo-purulento", "e) costras, alopecia e hiperpigmentación"
    ]
  }, {
    NAME: "FOLICULITIS-FORUNCULOSIS PIOTRAUMATICA",
    LesionesDerm: [
      "a) Exudado seroso o serosanguinolento", "b) Erosión amarillenta-roja, hñameda de evolución aguda", "c) Alopecia de tamañ1o variable", "d) Pelos periféricos hñamedos y pegoteados", "e) Pápulas satélites", "f) erosiones, excoriaciones, ulceras y costras"
    ]
  }, {
    NAME: "FOLICULITIS Y FORUNCULOSIS NASAL",
    LesionesDerm: [
      "a) Forunculosis", "b) Edema y exudado sero-hemo-purulento"
    ]
  }, {
    NAME: "FOLICULITIS FORUNCULOSIS DEL MENTÓN Y LABIOS",
    LesionesDerm: [
      "a) Foliculitis, forunculosis, pñastulas", "b) Exudado serosanguinoliento o seropurulento"
    ]
  }, {
    NAME: "FOLICULITIS Y FORUNCULOSIS PODAL",
    LesionesDerm: [
      "a) Edema", "b) Fístulas", "c) Exudados seroso, serosanguinolientoo seropurulento", "b) nódulos ñanicos o mñaltiples"
    ]
  }, {
    NAME: "FOLICULITIS FORUNCULOSIS DE LOS CALLOS",
    LesionesDerm: [
      "a) Exudado serosanguinolento o seropurulento", "b) Fístulas", "e) Proliferación de tejidos con fisuras"
    ]
  }, {
    NAME: "DERMATITIS ALÉRGICA POR PULGAS EST. I",
    LesionesDerm: [
      "Foliculitis, pápulas, eritema, alopecia, cambio de coloración del pelaje por el lamido frecuente"
    ]
  }, {
    NAME: "DERMATITIS ALÉRGICA POR PULGAS EST. II",
    LesionesDerm: [
      "a) Foliculitis, alopecia, pápulas, eritema, costras", "b) Leve hiperpigmentación e hiperqueratosis"
    ]
  }, {
    NAME: "DERMATITIS ALÉRGICA POR PULGAS EST. III",
    LesionesDerm: [
      "a) Foliculitis, alopecia, pápulas, eritema, costras", "b) Hiperpigmentación, liquenificación"
    ]
  }, {
    NAME: "DERMATITIS ATÓPICA CANINA EST. I",
    LesionesDerm: [
      "a) Eritema, alopecia, foliculitis, erosiones"
    ]
  }, {
    NAME: "DERMATITIS ATÓPICA CANINA EST. II",
    LesionesDerm: [
      "a) Eritema, alopecia, foliculitis, hiperpigmentacion", "b) Pápulas, costras, pñastulas", "c) Otitis", "d) Erosiones, excoriaciones"
    ]
  }, {
    NAME: "DERMATITIS ATÓPICA CANINA EST. III",
    LesionesDerm: [
      "a) Eritema, alopecia, foliculitis, hiperpigmentacion, liquenificacion", "b) Pápulas, costras, pñastulas", "c) Otitis", "d) Erosiones, excoriaciones"
    ]
  }, {
    NAME: "REACCIÓN ADVERSA A LOS ALIMENTOS",
    LesionesDerm: []
  }, {
    NAME: "PÉNFIGO FOLIÁCEO",
    LesionesDerm: [
      "a) Eritema, vesículas, pñastulas", "b) Costras, descamaciones", "e) hiperqueratosis de las almohadillas plantares", "d) Signo de Nikolsky positivo"
    ]
  }, {
    NAME: "PÉNFIGO VULGAR",
    LesionesDerm: [
      "a) Erosiones mucocutaneas, alopecia", "b) Eritema, costras, descamaciones", "c) LesionesDerm rodeadas por collarete epidérmico", "d) Ulceras bucales", "e) Signo de Nikolsky positivo"
    ]
  }, {
    NAME: "PÉNFIGO ERITEMATOSO",
    LesionesDerm: [
      "a) Eritema, alopecia, vesículas, pñastulas", "b) Costras, descamaciones"
    ]
  }, {
    NAME: "PENFIGOIDE BULLOSO",
    LesionesDerm: [
      "Eritema, alopecia, erosiones, ulceraciones en piel y ulceras bucales"
    ]
  }, {
    NAME: "LUPUS ERITEMATOSO SISTÉMICO",
    LesionesDerm: [
      "a) Cualquier manifestación cutánea puedes ser dada por L.E.S., el LED puede ser una manifestación del LES", "b) Eritema, alopecia, costras, descamaciones", "e) Ulceras e hiperqueratosis de las almohadillas plantaras"
    ]
  }, {
    NAME: "LUPUS ERITEMATOSO DISCOIDE",
    LesionesDerm: [
      "a) Eritema, alopecia, ulceración y costras", "b) Despigmentación de planum nasal", "c) alisamiento de la trufa"
    ]
  }, {
    NAME: "LUPUS MUCOCUTÁNEO",
    LesionesDerm: [
      "a) Eritema, alopecia, erosión, ulceración y costras"
    ]
  }, {
    NAME: "LUPUS CUTÁNEO VESICULAR",
    LesionesDerm: [
      "a) Eritema, alopecia, collaretes, vesículas, ulceración y costras"
    ]
  }, {
    NAME: "DERMATOMIOSITIS",
    LesionesDerm: [
      "a) Alopecia parcial", "b) Eritema, escamas, costras", "e) Erosiones, ulceraciones", "d) Onicomadesis y onicorrexia"
    ]
  }, {
    NAME: "DEMODICOSIS LOCALIZADA",
    LesionesDerm: [
      "a) Alopecia parcial, eritema", "b) Foliculitis", "c) descamación, costras"
    ]
  }, {
    NAME: "DEMODICOSIS GENERALIZADA",
    LesionesDerm: [
      "a) Alopecia, foliculitis", "b) Eritema, secreciones sero-hemorragicas-purulentas", "e) Costras, descamaciones"
    ]
  }, {
    NAME: "SARNA SARCÓPTICA",
    LesionesDerm: [
      "a) Pápulas, costras", "b) Alopecia parcial", "e) Hiperpigmentación, hiperqueratosis", "d) Reflejo otopruriginoso positivo"
    ]
  }, {
    NAME: "SARNA OTODÉCTICA",
    LesionesDerm: [
      "a) Otitis y alopecia cara externa pabellón auricular", "b) Descamación con cerumen seco color marrón", "e) Prurito en cabeza y cuello"
    ]
  }, {
    NAME: "CHEILETIELOSIS",
    LesionesDerm: [
      "'Escamas' grisaceas cubriendo el manto piloso"
    ]
  }, {
    NAME: "DERMATOSIS POR HIPERADRENOCORTISISMO",
    LesionesDerm: [
      "a) Alopecia sin inflamación,", "b) piel fina e hipotónica", "c) Venas mamarias visibles,", "d) calcinosis cutis", "e) Pelo opaco y decolorado", "f) Piodermia secundaria, parches seborreicos, comedones"
    ]
  }, {
    NAME: "DERMATOSIS POR HIPOTIROIDISMO",
    LesionesDerm: [
      "a) Alopecia parcial sin inflamación", "b) Hiperpigmentación uniforme", "e) El pelo se mantiene en la cabeza, y en las extremidades", "d) Otitis poco frecuente", "e) sobrecrecimiento de Malassezias y bacterias"
    ]
  }, {
    NAME: "ALOPECÍA X",
    LesionesDerm: [
      "a) Alopecia sin inflamación,", "b) piel fina e hipotónica", "c) Hiperpigmentación", "d) Otitis, foliculitis secundarias"
    ]
  }, {
    NAME: "DERMATOSIS POR NEOPLASIA TESTICULAR",
    LesionesDerm: [
      "a) Alopecia sin inflamación", "b) Hiperpigmentación", "c) Hipertrofia de los pezones", "d) Prepucio péndulo", "e) Otitis", "f) piel engrosada", "g) melanosis macular perineal", "h) eritema e hiperpigmentación del rafe prepucial medial"
    ]
  }, {
    NAME: "DERMATOSIS POR HIPERESTROGENISMO EN HEMBRAS",
    LesionesDerm: [
      "a) Piel engrosada y alopécica", "b) Hiperpigmentación", "c) Vulva hiperpigmentada y grande", "d) Otitis"
    ]
  }, {
    NAME: "DERMATOSIS QUE RESPONDE A LOS ESTRÓGENOS",
    LesionesDerm: [
      "a) alopecia sin inflamación", "b) Hipopigmentada", "e) Vulva infantil", "d) Pezones infantiles", "e) piel muy delgada"
    ]
  }, {
    NAME: "DERMATOFITOSIS POR MICROSPORUM",
    LesionesDerm: [
      "a) Alopecia circular y ausencia total de pelo", "b) Descamaciones seborreicas", "e) Foliculitis por contaminación bacteriana"
    ]
  }, {
    NAME: "DERMATOFITOSIS POR TRICOPHYTON",
    LesionesDerm: [
      "a) Alopecia irregular, expansivo no circular, expansiva", "b) Foliculitis", "e) hiperpigmentación", "d ) Onicomicosis"
    ]
  }, {
    NAME: "DERMATITIS POR MALASSEZIA",
    LesionesDerm: [
      "a) Piel eritematosa y alopécica", "b) LesionesDerm oleosa", "e) Olor seborreico", "d) Otitis", "e) costras amarillentas"
    ]
  }, {
    NAME: "SEBORREA PRIMARIA",
    LesionesDerm: [
      "dependen de la etiología pero En General son:", "a) Descamación", "b) Parches seborreicos en areas circunscriptas", "c) Olor seborreico", "d) Otitis", "e) alopecia"
    ]
  }, {
    NAME: "SEBORREA SECUNDARIA",
    LesionesDerm: [
      "van a incluir los de la enfermedad primaria pero En General son:", "a) Descamación y alopecia", "b) Parches seborreicos en áreas circunscriptas", "c) Olor seborreico intenso", "d) Otitis"
    ]
  }, {
    NAME: "SEBORREA DEL BORDE DE LAS OREJAS",
    LesionesDerm: [
      "a) Descamación y alopecia", "b) Fisuras, Ulceras", "c) Hemorragias", "d) costras"
    ]
  }, {
    NAME: "HIPERPLASIA DE LA GLÁNDULA DE LA COLA",
    LesionesDerm: [
      "a) Area alopécica circular a ovoide", "b) Descamaciones"
    ]
  }, {
    NAME: "HIPERQUERATOSIS NASO - DIGITAL IDIOPÁTICA",
    LesionesDerm: [
      "a) Hiperqueratosis y alopecia", "b) Fisuras y erosiones"
    ]
  }, {
    NAME: "DERMATOSIS QUE RESPONDE A LA VITAMINA A",
    LesionesDerm: [
      "a) Hiperqueratosis, descamación, alopecia", "b) Olor seborreico", "e) Pelo sin brillo y se enreda fácilmente", "d) Otitis"
    ]
  }, {
    NAME: "DERMATOSIS QUE RESPONDE AL ZINC",
    LesionesDerm: [
      "a) Eritema, alopecia, costras, descamaciones", "b) Exudados serosos", "e) Hiperpigmentación, hiperqueratosis"
    ]
  }, {
    NAME: "ALOPECÍA POR MUTACION DE COLOR",
    LesionesDerm: [
      "a) Fractura de los pelos, alguno de ellos vuelven a crecer", "y esta tendencia decrece con el tiempo", "b) Alopecia parcial", "e) Descamaciones", "d) Foliculitis bacteriana secundaria"
    ]
  }, {
    NAME: "DERMATITIS ACRAL POR LAMIDO",
    LesionesDerm: [
      "a) Alopecia central por erosión, ulceras", "b) Borde periférico fibrosos y oscuro"
    ]
  }, {
    NAME: "OTITIS EXTERNA",
    LesionesDerm: [
      "a) Eritema de la cara interna de pabellón auricular, del conducto vertical y horizontal", "b) Descamaciones", "e) Mal olor", "d) Otitis"
    ]
  }, {
    NAME: "ENFERMEDAD DE LOS SACOS ANALES",
    LesionesDerm: [
      "a) Edema y alopecia", "b) prurito dolor manifestado por sentarse y arrastrar el ano contra el piso o por lamido de la región", "c) Abscedación, fístulas", "Responsable de algunas de las dermatitis erosivas hñamedas agudas de la región"
    ]
  }, {
    NAME: "FÍSTULAS PERIANALES",
    LesionesDerm: [
      "Líquido seroso o serosanguinolento o seropurulento", "Alopecia", "Fístulas", "Ulceras", "cicatrices"
    ]
  }, {
    NAME: "CELULITIS JUVENIL",
    LesionesDerm: [
      "a) Edema y alopecia", "b) Pápulas y pñastulas", "e) Fístulas, supuración hemopurulenta", "d) Costras amarillentas"
    ]
  }, {
    NAME: "ALOPECÍA O CALVICIE PATRÓN",
    LesionesDerm: [
      "a) alopecia parcial", "b) pelo miniaturizado"
    ]
  }, {
    NAME: "FORUNCULOSIS EOSINOFÍLICA",
    LesionesDerm: [
      "a) Forunculosis", "b) Edema y exudado sero-hemo-purulento"
    ]
  }, {
    NAME: "VASCULITIS DEL BORDE DE LAS OREJAS",
    LesionesDerm: [
      "a) inflamación y engrosamiento", "b) ñalceras y costras", "c) pérdida de tejido(lesiones en sacabocados)", "d) cicatriz"
    ]
  }
]
