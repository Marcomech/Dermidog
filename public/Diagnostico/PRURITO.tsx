export const PruritoValues = [
    'Ausente',
    'Leve',
    'Moderado',
    'Intenso',
    'Por contaminación bacteriana'
] as const;

type PruritoDetail = typeof PruritoValues[number];

export type PruritoType = {
    Prurito: PruritoDetail[]
    NAME: string
}

export const Prurito: PruritoType[] = [{
    NAME: 'DERMATITIS DE LOS PLIEGUES',
    Prurito: ['Ausente', 'Leve', 'Por contaminación bacteriana']
},
{
    NAME: 'DERMATITIS HÚMEDA AGUDA',
    Prurito: ['Intenso']
},
{
    NAME: 'IMPÉTIGO',
    Prurito: ['Ausente']
},
{
    NAME: 'FOLICULITIS BACTERIANA SUPERFICIAL',
    Prurito: ['Leve']
},
{
    NAME: 'PIODERMIA SUPERFICIAL DISEMINADA',
    Prurito: ['Leve', 'Moderado']
},
{
    NAME: 'PIODERMIA MUCOCUTÁNEA',
    Prurito: ['Leve', 'Moderado']
},
{
    NAME: 'PIODERMIA PROFUNDA DEL OVEJERO ALEMÁN',
    Prurito: ['Leve']
},
{
    NAME: 'FOLICULITIS-FORUNCULOSIS PIOTRAUMATICA',
    Prurito: ['Intenso', 'Ausente', 'Leve', 'Moderado']
},
{
    NAME: 'FOLICULITIS Y FORUNCULOSIS NASAL',
    Prurito: ['Ausente']
},
{
    NAME: 'FOLICULITIS FORUNCULOSIS DEL MENTÓN Y LABIOS',
    Prurito: ['Ausente']
},
{
    NAME: 'FOLICULITIS Y FORUNCULOSIS PODAL',
    Prurito: ['Leve', 'Moderado', 'Intenso']// en las hipersensibilidades'  
},
{
    NAME: 'FOLICULITIS FORUNCULOSIS DE LOS CALLOS',
    Prurito: ['Ausente']
},
{
    NAME: 'DERMATITIS ALÉRGICA POR PULGAS EST. I',
    Prurito: ['Moderado', 'Intenso']
},
{
    NAME: 'DERMATITIS ALÉRGICA POR PULGAS EST. II',
    Prurito: ['Intenso']
},
{
    NAME: 'DERMATITIS ALÉRGICA POR PULGAS EST. III',
    Prurito: ['Intenso']
},
{
    NAME: 'DERMATITIS ATÓPICA CANINA EST. I',
    Prurito: ['Intenso']
},
{
    NAME: 'DERMATITIS ATÓPICA CANINA EST. II',
    Prurito: ['Intenso']
},
{
    NAME: 'DERMATITIS ATÓPICA CANINA EST. III',
    Prurito: ['Intenso']
},
{
    NAME: 'REACCIÓN ADVERSA A LOS ALIMENTOS',
    Prurito: ['Ausente', 'Leve', 'Moderado', 'Intenso',]            //'VER DERMATITIS ATÓPICA CANINA YA QUE SU PRESENTACIÓN CLÍNICA Y DERMOGRAMA ES SIMILAR'    
},
{
    NAME: 'PÉNFIGO FOLIÁCEO',
    Prurito: ['Leve', 'Por contaminación bacteriana']
},
{
    NAME: 'PÉNFIGO VULGAR',
    Prurito: ['Leve', 'Por contaminación bacteriana']
},
{
    NAME: 'PÉNFIGO ERITEMATOSO',
    Prurito: ['Leve', 'Por contaminación bacteriana']
},
{
    NAME: 'PENFIGOIDE BULLOSO',
    Prurito: ['Leve', 'Por contaminación bacteriana']
},
{
    NAME: 'LUPUS ERITEMATOSO SISTÉMICO',
    Prurito: ['Leve', 'Por contaminación bacteriana']
},
{
    NAME: 'LUPUS ERITEMATOSO DISCOIDE',
    Prurito: ['Ausente', 'Leve', 'Por contaminación bacteriana']
},
{
    NAME: 'LUPUS MUCOCUTÁNEO',
    Prurito: ['Ausente', 'Leve', 'Por contaminación bacteriana']
},
{
    NAME: 'LUPUS CUTÁNEO VESICULAR',
    Prurito: ['Ausente', 'Leve', 'Por contaminación bacteriana']
},
{
    NAME: 'DERMATOMIOSITIS',
    Prurito: ['Ausente', 'Por contaminación bacteriana']
},
{
    NAME: 'DEMODICOSIS LOCALIZADA',
    Prurito: ['Ausente', 'Leve', 'Por contaminación bacteriana']
},
{
    NAME: 'DEMODICOSIS GENERALIZADA',
    Prurito: ['Leve', 'Por contaminación bacteriana']
},
{
    NAME: 'SARNA SARCÓPTICA',
    Prurito: ['Intenso']
},
{
    NAME: 'SARNA OTODÉCTICA',
    Prurito: ['Intenso']
},
{
    NAME: 'CHEILETIELOSIS',
    Prurito: ['Intenso']
},
{
    NAME: 'DERMATOSIS POR HIPERADRENOCORTISISMO',
    Prurito: ['Leve', 'Por contaminación bacteriana']
},
{
    NAME: 'DERMATOSIS POR HIPOTIROIDISMO',
    Prurito: ['Ausente', 'Por contaminación bacteriana']
},
{
    NAME: 'ALOPECÍA X',
    Prurito: ['Ausente', 'Por contaminación bacteriana']
},
{
    NAME: 'DERMATOSIS POR NEOPLASIA TESTICULAR',
    Prurito: ['Ausente', 'Leve', 'Por contaminación bacteriana']
},
{
    NAME: 'DERMATOSIS POR HIPERESTROGENISMO EN HEMBRAS',
    Prurito: ['Ausente', 'Por contaminación bacteriana']
},
{
    NAME: 'DERMATOSIS QUE RESPONDE A LOS ESTRÓGENOS',
    Prurito: ['Ausente']
},
{
    NAME: 'DERMATOFITOSIS POR MICROSPORUM',
    Prurito: ['Ausente', 'Por contaminación bacteriana']
},
{
    NAME: 'DERMATOFITOSIS POR TRICOPHYTON',
    Prurito: ['Ausente', 'Por contaminación bacteriana']
},
{
    NAME: 'DERMATITIS POR MALASSEZIA',
    Prurito: ['Intenso']
},
{
    NAME: 'SEBORREA PRIMARIA',
    Prurito: ['Leve', 'Ausente', 'Leve', 'Intenso', 'Moderado', 'Por contaminación bacteriana']
},
{
    NAME: 'SEBORREA SECUNDARIA',
    Prurito: ['Intenso', 'Leve', 'Por contaminación bacteriana']
},
{
    NAME: 'SEBORREA DEL BORDE DE LAS OREJAS',
    Prurito: ['Leve', 'Por contaminación bacteriana']
},
{
    NAME: 'HIPERPLASIA DE LA GLÁNDULA DE LA COLA',
    Prurito: ['Ausente', 'Leve', 'Por contaminación bacteriana']
},
{
    NAME: 'HIPERQUERATOSIS NASO - DIGITAL IDIOPÁTICA',
    Prurito: ['Ausente']
},
{
    NAME: 'DERMATOSIS QUE RESPONDE A LA VITAMINA A',
    Prurito: ['Leve', 'Leve', 'Por contaminación bacteriana']
},
{
    NAME: 'DERMATOSIS QUE RESPONDE AL ZINC',
    Prurito: ['Leve', 'Por contaminación bacteriana']
},
{
    NAME: 'ALOPECÍA POR MUTACION DE COLOR',
    Prurito: ['Ausente', 'Leve']
},
{
    NAME: 'DERMATITIS ACRAL POR LAMIDO',
    Prurito: ['Intenso']
},
{
    NAME: 'OTITIS EXTERNA',
    Prurito: ['Leve', 'Moderado', 'Intenso']
},
{
    NAME: 'ENFERMEDAD DE LOS SACOS ANALES',
    Prurito: ['Leve']
},
{
    NAME: 'FÍSTULAS PERIANALES',
    Prurito: ['Leve']
},
{
    NAME: 'CELULITIS JUVENIL',
    Prurito: ['Ausente']
},
{
    NAME: 'ALOPECÍA O CALVICIE PATRÓN',
    Prurito: ['Ausente', 'Leve']
},
{
    NAME: 'FORUNCULOSIS EOSINOFÍLICA',
    Prurito: ['Ausente']
},
{
    NAME: 'VASCULITIS DEL BORDE DE LAS OREJAS',
    Prurito: ['Ausente']
}
]