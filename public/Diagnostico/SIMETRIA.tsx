export const SimetriaValues = [
    /*TODO*/
    'No resulta claro o concluytente',
    'Mas bien, diria que esta "al medio"',
    'No, son asimetricas y/o unilaterales',
    'Si, son simetricas y/o bilaterales',
] as const;

type SimetriaDetail = typeof SimetriaValues[number];

export type SimetriaType = {
    Simetria: SimetriaDetail[];
    NAME: string;
};


export const Simetria: SimetriaType[] = [

    {
        Simetria: [],
        NAME: "DERMATITIS DE LOS PLIEGUES"
    }
]