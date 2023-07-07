export const AreaValues = [
    /*TODO*/
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
    'Areas de piel delgada',
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
    'Cuello (Dorsal)',
    'Cuello (Lateral)',
    'Cuello (Ventral)',
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
    'Pliegue facial',
    'Pliegue labial',
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
            'Pliegue facial',
            'Cola',
            'Pliegue vulvar',
            'Labios inferiores',
            'Pliegue labial',
            'Nariz',
            'Vulva',
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
            'Cuello (Ventral)',
        ],
        NAME: 'DERMATITIS HÚMEDA AGUDA'
    },
    {
        Area: [
            'Axilas',
            'Muslo (Cara interna)',
            'Ingles'
        ],
        NAME: 'IMPÉTIGO'
    },
    {
        Area: [
            'NO tiene área definida',
            'Tórax (Lateral)',
            'Lateral de miembros',
            'Muslo (Cara interna)',
            'Abdomen',
            'Cabeza',
            'Cuello (Dorsal)',
            'Cuello (Lateral)',
        ],
        NAME: 'FOLICULITIS BACTERIANA SUPERFICIAL'
    },
    {
        Area: [
            'Axilas',
            'Abdomen',
            'Áreas alopécicas en cualquier parte de la superficie dérmica',
            'Ingles'
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
            'Espacios interdigitales',
            'Muslo (Cara externa)',
            'Tórax',
            'Cola (Base)',
            'Muslo (Cara interna)',
            'Abdomen',
            'Cuello (Dorsal)',
        ],
        NAME: 'PIODERMIA PROFUNDA DEL OVEJERO ALEMÁN'
    },
    {
        Area: [
            'Cabeza',
            'Cola (Base)',
            'Cuello (Dorsal)',
            'Cuello (Ventral)',
        ],
        NAME: 'FOLICULITIS-FORUNCULOSIS PIOTRAUMATICA'
    },
    {
        Area: [
            'Pabellones auriculares (Cara interna)',
            'Pabellones auriculares (Borde interno)',
            'Región lateral de la Nariz',
            'Alrededor de los ojos',
            'Plano nasal'
        ],
        NAME: 'FOLICULITIS Y FORUNCULOSIS NASAL'
    },
    {
        Area: [
            'Labios (Alrededores)',
            'Mentón'
        ],
        NAME: 'FOLICULITIS FORUNCULOSIS DEL MENTÓN Y LABIOS'
    },
    {
        Area: [
            'Espacios interdigitales y tejidos vecinos',
            'Pies',
            'Manos'
        ],
        NAME: 'FOLICULITIS Y FORUNCULOSIS PODAL'
    },
    {
        Area: [
            'Esternón',
            'Codos',
            'Tarsos'
        ],
        NAME: 'FOLICULITIS FORUNCULOSIS DE LOS CALLOS'
    },
    {
        Area: [
            'Área umbilical',
            'Muslo (Cara interna)',
            'Región lumbosacra',
            'Cola (Base)'
        ],
        NAME: 'DERMATITIS ALÉRGICA POR PULGAS EST. I'
    },
    {
        Area: [
            'Área umbilical',
            'Pabellones auriculares (Cara interna)',
            'Desde la región lumbosacra se extiende en forma de triángulo con vértice hacia craneal',
            'Cola (Base)',
            'Periné',
            'Muslo (Cara interna)',
            'Cola (Inserción)',
            'Área poplítea',
            'Cuello (Ventral)',
            'Abdomen',
            'Región inguinal y umbilical',
            'Región lumbosacra'
        ],
        NAME: 'DERMATITIS ALÉRGICA POR PULGAS EST. II'
    },
    {
        Area: [
            'Área umbilical',
            'Pabellones auriculares (Cara externa)',
            'Tórax (Dorsal)',
            'Pabellones auriculares (Cara interna)',
            'Tórax (Lateral)',
            'Desde la región lumbosacra se extiende en forma de triángulo con vértice hacia craneal',
            'Cola (Base)',
            'Periné',
            'Región esternal y axilar',
            'Muslo (Cara interna)',
            'Cola (Inserción)',
            'Área poplítea',
            'Cuello (Ventral)',
            'Abdomen',
            'Región inguinal y umbilical',
            'Área periocular',
            'Región lumbosacra'
        ],
        NAME: 'DERMATITIS ALÉRGICA POR PULGAS EST. III'
    },
    {
        Area: [
            'Área periocular',
            'Área interdigital',
            'Sin lesion dermica',
            'Área perilabial'
        ],
        NAME: 'DERMATITIS ATÓPICA CANINA EST. I'
    },
    {
        Area: [
            'Área interdigital',
            'Pabellones auriculares (Cara interna)',
            'Área perilabial',
            'Axilas',
            'Sin lesion dermica',
            'Ingles',
            'Periné',
            'Abdomen',
            'Área periocular'
        ],
        NAME: 'DERMATITIS ATÓPICA CANINA EST. II'
    },
    {
        Area: [
            'Área interdigital',
            'Tórax (Dorsal)',
            'Pabellones auriculares (Cara interna)',
            'Área perilabial',
            'Axilas',
            'Tórax (Lateral)',
            'Sin lesion dermica',
            'Ingles',
            'Periné',
            'Abdomen',
            'Área periocular'
        ],
        NAME: 'DERMATITIS ATÓPICA CANINA EST. III'
    },
    {
        Area: [],
        NAME: 'REACCIÓN ADVERSA A LOS ALIMENTOS'
    },
    {
        Area: [
            'Pabellones auriculares (Cara externa)',
            'Pabellones auriculares (Cara interna)',
            'Puede afectar todo el cuerpo de manera explosiva',
            'Ingles',
            'Nariz',
            'Almohadillas plantares',
            'Uñas',
            'Pabellones auriculares (Borde interno)',
            'Área periocular'
        ],
        NAME: 'PÉNFIGO FOLIÁCEO'
    },
    {
        Area: [
            'Ano',
            'Fosas nasales',
            'Bordes palpebrales',
            'Piel',
            'Axilas',
            'Prepucio',
            'Ingles',
            'Dentro de la cavidad bucal y en las uniones muco-cutaneas',
            'Almohadillas plantares',
            'Vulva',
            'Labios'
        ],
        NAME: 'PÉNFIGO VULGAR'
    },
    {
        Area: [
            'Pabellones auriculares (Cara externa)',
            'Pabellones auriculares (Cara interna)',
            'Nariz',
            'Pabellones auriculares (Borde interno)',
            'Área periocular'
        ],
        NAME: 'PÉNFIGO ERITEMATOSO'
    },
    {
        Area: [
            'Abdomen',
            'Muslo (Cara interna)',
            'Bordes mucocutáneos',
            'Piel sin pelo'
        ],
        NAME: 'PENFIGOIDE BULLOSO'
    },
    {
        Area: [
            'Pabellones auriculares',
            'Todo el cuerpo',
            'NO tiene área definida',
            'Nariz',
            'Almohadillas plantares',
            'Área periocular'
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
            'Área perilabial',
            'Prepucio',
            'Union mucocutanea del ano',
            'Vulva',
            'Área periocular',
            'Perinasal'
        ],
        NAME: 'LUPUS MUCOCUTÁNEO'
    },
    {
        Area: [
            'Abdomen',
            'Areas de piel delgada',
            'Axilas',
            'Muslo (Cara interna)'
        ],
        NAME: 'LUPUS CUTÁNEO VESICULAR'
    },
    {
        Area: [
            'Nariz',
            'Dedos',
            'Orejas (Puntas)',
            'Codos',
            'Carpos',
            'Plano nasal',
            'Área periocular',
            'Tarsos',
            'Cola (Punta)'
        ],
        NAME: 'DERMATOMIOSITIS'
    },
    {
        Area: [
            'Cabeza',
            'Región costal',
            'Miembros',
            'Alopecia (Parcial)'
        ],
        NAME: 'DEMODICOSIS LOCALIZADA'
    },
    {
        Area: [
            'Cualquier área',
            'Espacios interdigitales',
            'Miembros',
            'Dorso',
            'Cabeza',
            'Cuello (Ventral)',
        ],
        NAME: 'DEMODICOSIS GENERALIZADA'
    },
    {
        Area: [
            'Orejas (Bordes)',
            'Tórax',
            'Abdomen',
            'Codos',
            'Tarsos'
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
            'Columna dorsal',
            'Cabeza',
            'NO tiene área definida',
            'Cuello (Dorsal)',
            //'Cuello (Lateral)',//VER
            //'Cuello (Ventral)',//VER
        ],
        NAME: 'CHEILETIELOSIS'
    },
    {
        Area: [
            'Alopecia (Difusa)',
            'Cola',
            'Alopecia (Total)',
            'Venas mamarias visibles',
            'Ingles hasta las axilas',
            'Tronco llegando hasta los codos',
            'Cuello (Dorsal)',
            'Cuello (Ventral)',
            'Alopecia (Parcial)',
            'Tarsos'
        ],
        NAME: 'DERMATOSIS POR HIPERADRENOCORTISISMO'
    },
    {
        Area: [
            'Pabellones auriculares (Cara externa)',
            'Cola',
            'Tórax',
            'Región torácica en forma de silla de montar',
            'Alopecia (Parcial)',
            'Abdomen',
            'Los pelos se mantienen a lo largo de la columna vertebral',
            'Cuello (Dorsal)',
            'Cuello (Ventral)',
        ],
        NAME: 'DERMATOSIS POR HIPOTIROIDISMO'
    },
    {
        Area: [
            'Pabellones auriculares (Cara externa)',
            'Muslos (Posterior)',
            'Cola',
            'Alopecia (Total)',
            'Tórax',
            'Periné',
            'Región torácica en forma de silla de montar',
            'Alopecia (Parcial)',
            'Abdomen',
            'Cuello (Dorsal)',
            'Cuello (Ventral)',
        ],
        NAME: 'ALOPECÍA X'
    },
    {
        Area: [
            'Orejas (Cara interna)',
            'Ingles hasta las axilas',
            'Área poplítea',
            'Ginecomastia',
            'Flancos (alopecias)',
            'Cuello (Dorsal)',
        ],
        NAME: 'DERMATOSIS POR NEOPLASIA TESTICULAR'
    },
    {
        Area: [
            'Flancos',
            'Conductos auditivos (no constante)',
            'Ingles hasta las axilas',
            'Periné',
            'Ginecomastia con pezones hiperpigmentados y agrandados'
        ],
        NAME: 'DERMATOSIS POR HIPERESTROGENISMO EN HEMBRAS'
    },
    {
        Area: [
            'Pabellones auriculares',
            'Desde las axilas hasta las ingles',
            'Periné',
            'Muslos (Posterior)',
            'Flancos (alopecias)',
            'Cuello (Ventral)',
        ],
        NAME: 'DERMATOSIS QUE RESPONDE A LOS ESTRÓGENOS'
    },
    {
        Area: [
            'Cualquier área',
            'Regiones con pelos cortos',
            'Miembros',
            'Cara',
            'Orejas'
        ],
        NAME: 'DERMATOFITOSIS POR MICROSPORUM'
    },
    {
        Area: [
            'Cualquier área',
            'Manos',
            'Patas',
            'Cabeza',
            'Involucra superficies relativamente grandes'
        ],
        NAME: 'DERMATOFITOSIS POR TRICOPHYTON'
    },
    {
        Area: [
            'Área perianal',
            'Área interdigital',
            'Pliegue vulvar',
            'Axilas',
            'Orejas (Cara interna)',
            'Muslo (Cara interna)',
            'Labios',
            'Cuello (Dorsal)',
            'Cuello (Ventral)',
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
            'Callos en puntos de apoyo',
            'Seborrea',
            'Parches seborreicos',
            'Sigue el patrón de la enfermedad que le dió origen'
        ],
        NAME: 'SEBORREA SECUNDARIA'
    },
    {
        Area: [
            'Orejas (Bordes)',
            'Alopecia (Total)',
            'Alopecia (Parcial)'
        ],
        NAME: 'SEBORREA DEL BORDE DE LAS OREJAS'
    },
    {
        Area: [
            'En el tercio superior',
            'Alopecia (Total)',
            'Alopecia (Ovoidea)',
            'Cola (Dorsal)'
        ],
        NAME: 'HIPERPLASIA DE LA GLÁNDULA DE LA COLA'
    },
    {
        Area: [
            'Almohadillas plantares',
            'Hocico'
        ],
        NAME: 'HIPERQUERATOSIS NASO - DIGITAL IDIOPÁTICA'
    },
    {
        Area: [
            'Abdomen',
            'Tórax',
            'Tórax (Lateral)',
            'Cuello (Ventral)',
        ],
        NAME: 'DERMATOSIS QUE RESPONDE A LA VITAMINA A'
    },
    {
        Area: [
            'Pabellones auriculares (Cara interna)',
            'Área perilabial',
            'Prepucio',
            'Hocico',
            'Almohadillas plantares',
            'Alrededor de los ojos',
            'Escroto',
            'Vulva',
            'Codos',
            'Tarsos'
        ],
        NAME: 'DERMATOSIS QUE RESPONDE AL ZINC'
    },
    {
        Area: [
            //'Respetando la cabeza y lo miembros',
            'Toda la superficie cutánea',
            'Dorso',
            'Alopecia (Parcial)'
        ],
        NAME: 'ALOPECÍA POR MUTACION DE COLOR'
    },
    {
        Area: [
            'Craneal (Radios)',
            'Lesiones únicas',
            'Metatarsos',
            'Tibias',
            'Metacarpos',
            'Craneal (Carpos)'
        ],
        NAME: 'DERMATITIS ACRAL POR LAMIDO'
    },
    {
        Area: [
            'Conductos auditivos (externos)',
            'Pabellones auriculares (Cara interna)'
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
            'Parpados',
            'Pabellones auriculares',
            'Hocico',
            'Nariz',
            'Labios (Alrededores)',
            'Labios superiores'
        ],
        NAME: 'CELULITIS JUVENIL'
    },
    {
        Area: [
            'Pecho',
            'Alopecia (Parcial)',
            'Periné',
            'Pabellones auriculares (Área convexa)',
            'Área periauricular',
            'Muslos (Posterior)',
            'Abdomen',
            'Cuello (Ventral)',
        ],
        NAME: 'ALOPECÍA O CALVICIE PATRÓN'
    },
    {
        Area: [
            'Pabellones auriculares (Cara interna)',
            'Pabellones auriculares (Borde interno)',
            'Región lateral de la Nariz',
            'Alrededor de los ojos',
            'Plano nasal'
        ],
        NAME: 'FORUNCULOSIS EOSINOFÍLICA'
    },
    {
        Area: [
            'Pabellones auriculares (Bordes)'
        ],
        NAME: 'VASCULITIS DEL BORDE DE LAS OREJAS'
    }
]