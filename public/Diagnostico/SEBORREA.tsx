export const SeborreaValues = [
    'Ausente',
    'Leve',
    'Moderada',
    'Intensa',
    'Por contaminación',
    'Descamación y costras'
] as const;

type SeborreaDetail = typeof SeborreaValues[number];

export type SeborreaType = {
    Seborrea: SeborreaDetail[];
    NAME: string;
};

export const Seborrea: SeborreaType[] = [
    {
        NAME: 'DERMATITIS DE LOS PLIEGUES',
        Seborrea: ['Ausente']
    },
    {
        NAME: 'DERMATITIS HÚMEDA AGUDA',
        Seborrea: ['Ausente']
    },
    {
        NAME: 'IMPÉTIGO',
        Seborrea: ['Ausente', 'Leve']
    },
    {
        NAME: 'FOLICULITIS BACTERIANA SUPERFICIAL',
        Seborrea: ['Leve',
            'Intensa']
    },
    {
        NAME: 'PIODERMIA SUPERFICIAL DISEMINADA',
        Seborrea: ['Leve', 'Moderada']
    },
    {
        NAME: 'PIODERMIA MUCOCUTÁNEA',
        Seborrea: ['Leve', 'Moderada']
    },
    {
        NAME: 'PIODERMIA PROFUNDA DEL OVEJERO ALEMÁN',
        Seborrea: ['Ausente']
    },
    {
        NAME: 'FOLICULITIS-FORUNCULOSIS PIOTRAUMATICA',
        Seborrea: ['Leve', 'Moderada']
    },
    {
        NAME: 'FOLICULITIS Y FORUNCULOSIS NASAL',
        Seborrea: ['Ausente']
    },
    {
        NAME: 'FOLICULITIS FORUNCULOSIS DEL MENTÓN Y LABIOS',
        Seborrea: ['Ausente']
    },
    {
        NAME: 'FOLICULITIS Y FORUNCULOSIS PODAL',
        Seborrea: ['Ausente']
    },
    {
        NAME: 'FOLICULITIS FORUNCULOSIS DE LOS CALLOS',
        Seborrea: ['Leve', 'Moderada']
    },
    {
        NAME: 'DERMATITIS ALÉRGICA POR PULGAS EST. I',
        Seborrea: ['Ausente', 'Leve']
    },
    {
        NAME: 'DERMATITIS ALÉRGICA POR PULGAS EST. II',
        Seborrea: ['Intensa']
    },
    {
        NAME: 'DERMATITIS ALÉRGICA POR PULGAS EST. III',
        Seborrea: ['Intensa']
    },
    {
        NAME: 'DERMATITIS ATÓPICA CANINA EST. I',
        Seborrea: ['Ausente']
    },
    {
        NAME: 'DERMATITIS ATÓPICA CANINA EST. II',
        Seborrea: ['Intensa']
    },
    {
        NAME: 'DERMATITIS ATÓPICA CANINA EST. III',
        Seborrea: ['Intensa']
    },
    {
        NAME: 'REACCIÓN ADVERSA A LOS ALIMENTOS',
        Seborrea: []
    },
    {
        NAME: 'PÉNFIGO FOLIÁCEO',
        Seborrea: ['Leve', 'Moderada', 'Intensa']
    },
    {
        NAME: 'PÉNFIGO VULGAR',
        Seborrea: ['Intensa']
    },
    {
        NAME: 'PÉNFIGO ERITEMATOSO',
        Seborrea: ['Leve']
    },
    {
        NAME: 'PENFIGOIDE BULLOSO',
        Seborrea: ['Leve']
    },
    {
        NAME: 'LUPUS ERITEMATOSO SISTÉMICO',
        Seborrea: ['Intensa']
    },
    {
        NAME: 'LUPUS ERITEMATOSO DISCOIDE',
        Seborrea: ['Leve']
    },
    {
        NAME: 'LUPUS MUCOCUTÁNEO',
        Seborrea: ['Leve']
    },
    {
        NAME: 'LUPUS CUTÁNEO VESICULAR',
        Seborrea: ['Leve']
    },
    {
        NAME: 'DERMATOMIOSITIS',
        Seborrea: ['Leve']
    },
    {
        NAME: 'DEMODICOSIS LOCALIZADA',
        Seborrea: ['Ausente',
            'Leve', 'Por contaminación']
    },
    {
        NAME: 'DEMODICOSIS GENERALIZADA',
        Seborrea: ['Leve']
    },
    {
        NAME: 'SARNA SARCÓPTICA',
        Seborrea: ['Intensa']
    },
    {
        NAME: 'SARNA OTODÉCTICA',
        Seborrea: ['Intensa']
    },
    {
        NAME: 'CHEILETIELOSIS',
        Seborrea: ['Intensa']
    },
    {
        NAME: 'DERMATOSIS POR HIPERADRENOCORTISISMO',
        Seborrea: ['Leve']
    },
    {
        NAME: 'DERMATOSIS POR HIPOTIROIDISMO',
        Seborrea: ['Leve', 'Moderada']
    },
    {
        NAME: 'ALOPECÍA X',
        Seborrea: ['Leve', 'Moderada']
    },
    {
        NAME: 'DERMATOSIS POR NEOPLASIA TESTICULAR',
        Seborrea: ['Ausente', 'Leve']
    },
    {
        NAME: 'DERMATOSIS POR HIPERESTROGENISMO EN HEMBRAS',
        Seborrea: ['Leve']
    },
    {
        NAME: 'DERMATOSIS QUE RESPONDE A LOS ESTRÓGENOS',
        Seborrea: ['Ausente']
    },
    {
        NAME: 'DERMATOFITOSIS POR MICROSPORUM',
        Seborrea: ['Leve']
    },
    {
        NAME: 'DERMATOFITOSIS POR TRICOPHYTON',
        Seborrea: ['Leve', 'Moderada']
    },
    {
        NAME: 'DERMATITIS POR MALASSEZIA',
        Seborrea: ['Leve', 'Moderada']
    },
    {
        NAME: 'SEBORREA PRIMARIA',
        Seborrea: ['Intensa']
    },
    {
        NAME: 'SEBORREA SECUNDARIA',
        Seborrea: ['Moderada', 'Intensa']
    },
    {
        NAME: 'SEBORREA DEL BORDE DE LAS OREJAS',
        Seborrea: ['Leve', 'Moderada']
    },
    {
        NAME: 'HIPERPLASIA DE LA GLÁNDULA DE LA COLA',
        Seborrea: ['Leve']
    },
    {
        NAME: 'HIPERQUERATOSIS NASO - DIGITAL IDIOPÁTICA',
        Seborrea: ['Leve', 'Moderada', 'Intensa']
    },
    {
        NAME: 'DERMATOSIS QUE RESPONDE A LA VITAMINA A',
        Seborrea: ['Intensa']
    },
    {
        NAME: 'DERMATOSIS QUE RESPONDE AL ZINC',
        Seborrea: ['Intensa']
    },
    {
        NAME: 'ALOPECÍA POR MUTACION DE COLOR',
        Seborrea: ['Leve']
    },
    {
        NAME: 'DERMATITIS ACRAL POR LAMIDO',
        Seborrea: ['Ausente']
    },
    {
        NAME: 'OTITIS EXTERNA',
        Seborrea: ['Leve', 'Moderada', 'Intensa']
    },
    {
        NAME: 'ENFERMEDAD DE LOS SACOS ANALES',
        Seborrea: ['Ausente']
    },
    {
        NAME: 'FÍSTULAS PERIANALES',
        Seborrea: ['Ausente']
    },
    {
        NAME: 'CELULITIS JUVENIL',
        Seborrea: ['Ausente']
    },
    {
        NAME: 'ALOPECÍA O CALVICIE PATRÓN',
        Seborrea: ['Ausente']
    },
    {
        NAME: 'FORUNCULOSIS EOSINOFÍLICA',
        Seborrea: ['Ausente']
    },
    {
        NAME: 'VASCULITIS DEL BORDE DE LAS OREJAS',
        Seborrea: ['Descamación y costras']
    }
]