export const SimetriaValues = [
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
        Simetria: [
            'No resulta claro o concluytente',],
        NAME: "DERMATITIS DE LOS PLIEGUES"
    }
]