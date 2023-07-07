export const AreaValues = [
    'Abdomen',
    'Almohadillas plantares',
    'Alopecia (Parcial)',
    'Alopecia (Total)',
    'Alopecia (Difusa)',
    'Alopecia (Ovoidea)',
    'Alrededor de los ojos',
    'Ano',
    'Área de los pliegues',
    'Área interdigital',
    'Área perianal',
    'Área periauricular',
    'Área perilabial',
    'Área periocular',
    'Área poplítea',
    'Área umbilical',
    'Áreas alopécicas en cualquier parte de la superficie dérmica',
    'Axilas',
    'Bordes mucocutáneos',
    'Bordes palpebrales',
    'Cabeza',
    'Callos en puntos de apoyo',
    'Cara',
    'Carpos',
    'Codos',
    'Cola',
    'Cola (Punta)',
    'Cola (Base)',
    'Cola (Inserción)',
    'Cola (Dorsal)',
    'Columna dorsal',
    'Conductos auditivos (externos)',
    'Conductos auditivos (no constante)',
    'Cualquier área',
    'Cuello',
    'Dedos',
    'Dentro de la cavidad bucal y en las uniones muco-cutaneas',
    'Desde la región lumbosacra se extiende en forma de triángulo con vértice hacia craneal',
    'Desde las axilas hasta las ingles',
    'Dorso',
    'Craneal (Carpos)',
    'Craneal (Radios)',
    'En el tercio superior',
    'Tronco llegando hasta los codos',
    'Escroto',
    'Espacios interdigitales y tejidos vecinos',
    'Espacios interdigitales',
    'Esternón',
    'Flancos (alopecias)',
    'Flancos',
    'Fosas nasales',
    'Ginecomastia con pezones hiperpigmentados y agrandados',
    'Ginecomastia',
    'Hocico',
    'Ingles hasta las axilas',
    'Ingles',
    'Involucra superficies relativamente grandes',
    'Labios inferiores',
    'Labios superiores',
    'Labios (Alrededores)',
    'Labios',
    'Lateral de miembros',
    'Lesiones únicas',
    'Los pelos se mantienen a lo largo de la columna vertebral',
    'Manos',
    'Mentón',
    'Metacarpos',
    'Metatarsos',
    'Miembros',
    'Muslo (Cara externa)',
    'Muslo (Cara interna)',
    'Muslos (Posterior)',
    'Nariz',
    'Orejas (Cara interna)',
    'Orejas (Puntas)',
    'Orejas (Bordes)',
    'Orejas',
    'Pabellones auriculares (Bordes)',
    'Pabellones auriculares (Borde interno)',
    'Pabellones auriculares (Cara externa)',
    'Pabellones auriculares (Cara interna)',
    'Pabellones auriculares (Área convexa)',
    'Pabellones auriculares',
    'Parches seborreicos',
    'Parpados',
    'Patas',
    'Pecho',
    'Perinasal',
    'Periné',
    'Piel sin pelo',
    'Piel',
    'Pies',
    'Plano nasal',
    'Pliegue vulvar',
    'Prepucio',
    'Región costal',
    'Región esternal y axilar',
    'Región inguinal y umbilical',
    'Región lateral de la Nariz',
    'Región lumbosacra',
    'Región torácica en forma de silla de montar',
    'Seborrea',
    'Sin lesion dermica',
    'Tarsos',
    'Tibias',
    'Regiones con pelos cortos',
    'Tórax (Dorsal)',
    'Tórax (Lateral)',
    'Tórax',
    'Union mucocutanea del ano',
    'Uñas',
    'Venas mamarias visibles',
    'Vulva',

    'NO tiene área definida',

    'Variable de acuerdo a la causa desencadenante',
    'Sigue el patrón de la enfermedad que le dió origen',

    'Toda la superficie cutánea',
    'Puede afectar todo el cuerpo de manera explosiva',
    'Todo el cuerpo',
    //'Respetando la cabeza y lo miembros', //ALOPECIA POR MUTACION DE COLOR
] as const;

type AreaDetail = typeof AreaValues[number];

export type AreaType = {
    Area: AreaDetail[];
    NAME: string;
};

export const Area: AreaType[] = [
    {
        Area: [
            'Área de los pliegues',
            'Nariz',
            'Cola',
            'Vulva',
            'Labios inferiores',
            'Área de los pliegues'
        ],
        NAME: 'DERMATITIS DE LOS PLIEGUES'
    },
    {
        Area: [
            'Cualquier área',
            'Muslo (Cara externa)',
            'Cola (Base)',
            'Cabeza',
            'Cuello'
        ],
        NAME: 'DERMATITIS HÚMEDA AGUDA'
    },
    {
        Area: [
            'Ingles',
            'Axilas',
            'Muslo (Cara interna)',
        ],
        NAME: 'IMPÉTIGO'
    },
    {
        Area: [
            'NO tiene área definida',
            'Tórax (Lateral)',
            'Cuello',
            'Cabeza',
            'Lateral de miembros',
            'Abdomen',
            'Muslo (Cara interna)',
        ],
        NAME: 'FOLICULITIS BACTERIANA SUPERFICIAL'
    },
    {
        Area: [
            'Áreas alopécicas en cualquier parte de la superficie dérmica',
            'Ingles',
            'Axilas',
            'Abdomen'
        ],
        NAME: 'PIODERMIA SUPERFICIAL DISEMINADA'
    },
    {
        Area: [
            'Bordes mucocutáneos'
        ],
        NAME: 'PIODERMIA MUCOCUTÁNEA'
    },
    {
        Area: [
            'Muslo (Cara interna)',
            'Muslo (Cara externa)',
            'Cola (Base)',
            'Tórax',
            'Espacios interdigitales',
            'Cuello',
            'Abdomen',
            'Tórax',
            'Espacios interdigitales'
        ],
        NAME: 'PIODERMIA PROFUNDA DEL OVEJERO ALEMÁN'
    },
    {
        Area: [
            'Cuello',
            'Cabeza',
            'Cola (Base)',
            'Cabeza',
            'Cuello'
        ],
        NAME: 'FOLICULITIS-FORUNCULOSIS PIOTRAUMATICA'
    },
    {
        Area: [
            'Región lateral de la Nariz',
            'Plano nasal',
            'Alrededor de los ojos',
            'Pabellones auriculares (Borde interno)',
            'Pabellones auriculares (Cara interna)',
        ],
        NAME: 'FOLICULITIS Y FORUNCULOSIS NASAL'
    },
    {
        Area: [
            'Mentón',
            'Labios (Alrededores)'
        ],
        NAME: 'FOLICULITIS FORUNCULOSIS DEL MENTÓN Y LABIOS'
    },
    {
        Area: [
            'Espacios interdigitales y tejidos vecinos',
            'Manos',
            'Pies'
        ],
        NAME: 'FOLICULITIS Y FORUNCULOSIS PODAL'
    },
    {
        Area: [
            'Codos',
            'Tarsos',
            'Codos',
            'Tarsos',
            'Esternón'
        ],
        NAME: 'FOLICULITIS FORUNCULOSIS DE LOS CALLOS'
    },
    {
        Area: [
            'Cola (Base)',
            'Región lumbosacra',
            'Muslo (Cara interna)',
            'Área umbilical',
        ],
        NAME: 'DERMATITIS ALÉRGICA POR PULGAS EST I'
    },
    {
        Area: [
            'Cola (Base)',
            'Región lumbosacra',
            'Muslo (Cara interna)',
            'Área umbilical',
            'Desde la región lumbosacra se extiende en forma de triángulo con vértice hacia craneal',
            'Cola (Inserción)',
            'Periné',
            'Área poplítea',
            'Abdomen',
            'Región inguinal y umbilical',
            'Cuello',
            'Pabellones auriculares (Cara interna)'
        ],
        NAME: 'DERMATITIS ALÉRGICA POR PULGAS EST II'
    },
    {
        Area: [
            'Cola (Base)',
            'Región lumbosacra',
            'Muslo (Cara interna)',
            'Área umbilical',
            'Desde la región lumbosacra se extiende en forma de triángulo con vértice hacia craneal',
            'Cola (Inserción)',
            'Periné',
            'Área poplítea',
            'Abdomen',
            'Región inguinal y umbilical',
            'Cuello',
            'Pabellones auriculares (Cara interna)',
            'Área periocular',
            'Tórax (Dorsal)',
            'Tórax (Lateral)',
            'Pabellones auriculares (Cara externa)',
            'Abdomen',
            'Región esternal y axilar'
        ],
        NAME: 'DERMATITIS ALÉRGICA POR PULGAS EST III'
    },
    {
        Area: [
            'Sin lesion dermica',
            'Área periocular',
            'Área interdigital',
            'Área perilabial'
        ],
        NAME: 'DERMATITIS ATÓPICA CANINA EST I'
    },
    {
        Area: [
            'Sin lesion dermica',
            'Área periocular',
            'Área interdigital',
            'Área perilabial',
            'Área periocular',
            'Área interdigital',
            'Área perilabial',
            'Pabellones auriculares (Cara interna)',
            'Axilas',
            'Abdomen',
            'Ingles',
            'Periné',
            'Área interdigital'
        ],
        NAME: 'DERMATITIS ATÓPICA CANINA EST II'
    },
    {
        Area: ['Sin lesion dermica',
            'Área periocular',
            'Área interdigital',
            'Área perilabial',
            'Área periocular',
            'Área interdigital',
            'Área perilabial',
            'Pabellones auriculares (Cara interna)',
            'Axilas',
            'Abdomen',
            'Ingles',
            'Periné',
            'Área interdigital',
            'Área periocular',
            'Área interdigital',
            'Tórax (Dorsal)',
            'Tórax (Lateral)',
            'Área perilabial',
            'Pabellones auriculares (Cara interna)',
            'Axilas',
            'Abdomen',
            'Ingles',
            'Periné',
            'Área interdigital'
        ],
        NAME: 'DERMATITIS ATÓPICA CANINA EST III'
    },
    {
        Area: [],
        NAME: 'REACCIÓN ADVERSA A LOS ALIMENTOS'
    },
    {
        Area: [
            'Puede afectar todo el cuerpo de manera explosiva',
            'Nariz',
            'Área periocular',

            'Pabellones auriculares (Borde interno)',
            'Pabellones auriculares (Cara externa)',
            'Pabellones auriculares (Cara interna)',
            'Almohadillas plantares',
            'Uñas',
            'Ingles',
            'Almohadillas plantares'
        ],
        NAME: 'PÉNFIGO FOLIÁCEO'
    },
    {
        Area: [
            'Dentro de la cavidad bucal y en las uniones muco-cutaneas',
            'Bordes palpebrales',
            'Almohadillas plantares',
            'Labios',
            'Piel',
            'Fosas nasales',
            'Prepucio',
            'Vulva',
            'Ano',
            'Ingles',
            'Axilas',
            'Almohadillas plantares'
        ],
        NAME: 'PÉNFIGO VULGAR'
    },
    {
        Area: [
            'Nariz',
            'Área periocular',
            'Pabellones auriculares (Borde interno)',
            'Pabellones auriculares (Cara externa)',
            'Pabellones auriculares (Cara interna)',
        ],
        NAME: 'PÉNFIGO ERITEMATOSO'
    },
    {
        Area: [
            'Piel sin pelo',
            'Abdomen',
            'Muslo (Cara interna)',
            'Bordes mucocutáneos'
        ],
        NAME: 'PENFIGOIDE BULLOSO'
    },
    {
        Area: [
            'Todo el cuerpo',
            'NO tiene área definida',
            'Nariz',
            'Área periocular',
            'Almohadillas plantares',
            'Pabellones auriculares'
        ],
        NAME: 'LUPUS ERITEMATOSO SISTÉMICO'
    },
    {
        Area: [
            'Nariz',
            'Plano nasal',
            'Área periocular'
        ],
        NAME: 'LUPUS ERITEMATOSO DISCOIDE'
    },
    {
        Area: [
            'Perinasal',
            'Área perilabial',
            'Área periocular',
            'Union mucocutanea del ano',
            'Vulva',
            'Prepucio'
        ],
        NAME: 'LUPUS MUCOCUTÁNEO'
    },
    {
        Area: [
            'Abdomen',
            'Muslo (Cara interna)',
            'Axilas'
        ],
        NAME: 'LUPUS CUTÁNEO VESICULAR'
    },
    {
        Area: [
            'Nariz',
            'Área periocular',
            'Orejas (Puntas)',
            'Plano nasal',
            'Carpos',
            'Tarsos',
            'Codos',
            'Dedos',
            'Cola (Punta)',
        ],
        NAME: 'DERMATOMIOSITIS'
    },
    {
        Area: [
            'Alopecia (Parcial)',
            'Cabeza',
            'Miembros',
            'Región costal',
        ],
        NAME: 'DEMODICOSIS LOCALIZADA'
    },
    {
        Area: [
            'Cualquier área',
            'Cabeza',
            'Dorso',
            'Miembros',
            'Cuello',
            'Espacios interdigitales'
        ],
        NAME: 'DEMODICOSIS GENERALIZADA'
    },
    {
        Area: [
            'Orejas (Bordes)',
            'Codos',
            'Tarsos',
            'Tórax',
            'Abdomen',
        ],
        NAME: 'SARNA SARCÓPTICA'
    },
    {
        Area: [
            'Conductos auditivos (externos)'
        ],
        NAME: 'SARNA OTODÉCTICA'
    },
    {
        Area: [
            'NO tiene área definida',
            'Cabeza',
            'Cuello',
            'Columna dorsal'
        ],
        NAME: 'CHEILETIELOSIS'
    },
    {
        Area: [
            'Alopecia (Difusa)',
            'Alopecia (Parcial)',
            'Alopecia (Total)',
            'Tronco llegando hasta los codos',
            'Tarsos',
            'Cuello',
            'Ingles hasta las axilas',
            'Cola',
            'Cuello',
            'Venas mamarias visibles'
        ],
        NAME: 'DERMATOSIS POR HIPERADRENOCORTISISMO'
    },
    {
        Area: [
            'Alopecia (Parcial)',
            'Región torácica en forma de silla de montar',
            'Cuello',
            'Los pelos se mantienen a lo largo de la columna vertebral',
            'Pabellones auriculares (Cara externa)',
            'Cola',
            'Abdomen',
            'Tórax',
            'Cuello'
        ],
        NAME: 'DERMATOSIS POR HIPOTIROIDISMO'
    },
    {
        Area: [
            'Alopecia (Parcial)',
            'Alopecia (Total)',
            'Región torácica en forma de silla de montar',
            'Cuello',
            'Pabellones auriculares (Cara externa)',
            'Cola',
            'Muslos (Posterior)',
            'Periné',
            'Abdomen',
            'Tórax',
            'Cuello',
        ],
        NAME: 'ALOPECÍA X'
    },
    {
        Area: [
            'Flancos (alopecias)',
            'Área poplítea',
            'Cuello',
            'Ingles hasta las axilas',
            'Ginecomastia',
            'Orejas (Cara interna)',
        ],
        NAME: 'DERMATOSIS POR NEOPLASIA TESTICULAR'
    },
    {
        Area: [
            'Periné',
            'Flancos',
            'Ingles hasta las axilas',
            'Ginecomastia con pezones hiperpigmentados y agrandados',
            'Conductos auditivos (no constante)'
        ],
        NAME: 'DERMATOSIS POR HIPERESTROGENISMO EN HEMBRAS'
    },
    {
        Area: [
            'Flancos (alopecias)',
            'Periné',
            'Muslos (Posterior)',
            'Pabellones auriculares',
            'Desde las axilas hasta las ingles',
            'Cuello'
        ],
        NAME: 'DERMATOSIS QUE RESPONDE A LOS ESTRÓGENOS'
    },
    {
        Area: [
            'Cualquier área',
            'Regiones con pelos cortos',
            'Orejas',
            'Cara',
            'Miembros',
            'Miembros'
        ],
        NAME: 'DERMATOFITOSIS POR MICROSPORUM'
    },
    {
        Area: [
            'Involucra superficies relativamente grandes',
            'Cualquier área',
            'Cabeza',
            'Manos',
            'Patas'
        ],
        NAME: 'DERMATOFITOSIS POR TRICOPHYTON'
    },
    {
        Area: [
            'Axilas',
            'Muslo (Cara interna)',
            'Pliegue vulvar',
            'Área perianal',
            'Área interdigital',
            'Orejas (Cara interna)',
            'Labios',
            'Cuello',
            'Área interdigital'
        ],
        NAME: 'DERMATITIS POR MALASSEZIA'
    },
    {
        Area: [
            'Variable de acuerdo a la causa desencadenante'
        ],
        NAME: 'SEBORREA PRIMARIA'
    },
    {
        Area: [
            'NO tiene área definida',
            'Sigue el patrón de la enfermedad que le dió origen',
            'Callos en puntos de apoyo',
            'Parches seborreicos',
            'Seborrea'
        ],
        NAME: 'SEBORREA SECUNDARIA'
    },
    {
        Area: [
            'Alopecia (Parcial)',
            'Alopecia (Total)',
            'Orejas (Bordes)',
        ],
        NAME: 'SEBORREA DEL BORDE DE LAS OREJAS'
    },
    {
        Area: [
            'Alopecia (Ovoidea)',
            'Alopecia (Total)',
            'En el tercio superior',
            'Cola (Dorsal)'
        ],
        NAME: 'HIPERPLASIA DE LA GLÁNDULA DE LA COLA'
    },
    {
        Area: [
            'Hocico',
            'Almohadillas plantares',
            'Almohadillas plantares'
        ],
        NAME: 'HIPERQUERATOSIS NASO - DIGITAL IDIOPÁTICA'
    },
    {
        Area: [
            'Tórax',
            'Abdomen',
            'Cuello',
            'Tórax (Lateral)',
        ],
        NAME: 'DERMATOSIS QUE RESPONDE A LA VITAMINA A'
    },
    {
        Area: [
            'Hocico',
            'Alrededor de los ojos',
            'Codos',
            'Almohadillas plantares',
            'Área perilabial',
            'Pabellones auriculares (Cara interna)',
            'Escroto',
            'Prepucio',
            'Vulva',
            'Codos',
            'Tarsos',
            'Almohadillas plantares'
        ],
        NAME: 'DERMATOSIS QUE RESPONDE AL ZINC'
    },
    {
        Area: [
            'Alopecia (Parcial)',
            'Dorso',
            'Toda la superficie cutánea',
            //'Respetando la cabeza y lo miembros'
        ],
        NAME: 'ALOPECÍA POR MUTACION DE COLOR'
    },
    {
        Area: [
            'Lesiones únicas',
            'Craneal (Carpos)',
            'Metacarpos',
            'Craneal (Radios)',
            'Metatarsos',
            'Tibias'
        ],
        NAME: 'DERMATITIS ACRAL POR LAMIDO'
    },
    {
        Area: [
            'Pabellones auriculares (Cara interna)',
            'Conductos auditivos (externos)',
        ],
        NAME: 'OTITIS EXTERNA'
    },
    {
        Area: [
            'Área perianal'
        ],
        NAME: 'ENFERMEDAD DE LOS SACOS ANALES'
    },
    {
        Area: [
            'Área perianal'
        ],
        NAME: 'FÍSTULAS PERIANALES'
    },
    {
        Area: [
            'Hocico',
            'Nariz',
            'Labios superiores',
            'Parpados',
            'Labios (Alrededores)',
            'Pabellones auriculares'
        ],
        NAME: 'CELULITIS JUVENIL'
    },
    {
        Area: [
            'Alopecia (Parcial)',
            'Pabellones auriculares (Área convexa)',
            'Área periauricular',
            'Muslos (Posterior)',
            'Periné',
            'Cuello',
            'Pecho',
            'Abdomen'
        ],
        NAME: 'ALOPECÍA O CALVICIE PATRÓN'
    },
    {
        Area: [
            'Región lateral de la Nariz',
            'Plano nasal',
            'Alrededor de los ojos',
            'Pabellones auriculares (Borde interno)',
            'Pabellones auriculares (Cara interna)',
        ],
        NAME: 'FORUNCULOSIS EOSINOFÍLICA'
    },
    {
        Area: [
            'Pabellones auriculares (Bordes)',
            'Pabellones auriculares (Bordes)'
        ],
        NAME: 'VASCULITIS DEL BORDE DE LAS OREJAS'
    }
]