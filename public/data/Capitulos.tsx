type FullCharapters = {
    Titulo: string,
    Items: {
        ID: string,
        NroItem: number,
    }[],
}
export const Capitulos: FullCharapters[] = [
    {
        Titulo: 'I - Dermatitis pseudobacteriana',
        Items: [
            { ID: '1BCAL', NroItem: 1 },
            { ID: '1BPOD', NroItem: 2 },
            { ID: '1BPLI', NroItem: 3 },
            { ID: '1BMEN', NroItem: 4 },
            { ID: '1BCAY', NroItem: 5 },
            { ID: '1POV', NroItem: 9 },
            { ID: '9FIS', NroItem: 10 },
            { ID: '4JUV', NroItem: 21 },
            { ID: '7SPO', NroItem: 37 },
            { ID: '9ANO', NroItem: 52 }
        ]
    },
    {
        Titulo: 'II - Dermatitis bacteriana',
        Items: [
            { ID: '1SIMP', NroItem: 6 },
            { ID: '1SFOL', NroItem: 7 },
            { ID: '1SCAL', NroItem: 8 },
            { ID: '1BNAS', NroItem: 53 },
            { ID: '1SHSE', NroItem: 54 },
            { ID: '1PFFC', NroItem: 55 }
        ]
    },
    {
        Titulo: 'III - Dermatitis por hipersensibilidades',
        Items: [
            { ID: '2PUL', NroItem: 11 },
            { ID: '2PUL2', NroItem: 12 },
            { ID: '2PUL3', NroItem: 13 },
            { ID: '2ATO', NroItem: 14 },
            { ID: '2ATO2', NroItem: 15 },
            { ID: '2ATO3', NroItem: 16 },
            { ID: '2CONT', NroItem: 17 },
            { ID: '2CONT2', NroItem: 18 },
            { ID: '2ALIM', NroItem: 19 },
            { ID: '9FLAN', NroItem: 60 }
        ]
    },
    {
        Titulo: 'IV - Dermatitis autoinmunes',//, inmunomediadas que responden al zinc',
        Items: [
            { ID: '4PFOL', NroItem: 20 },
            { ID: '8CZ1', NroItem: 44 },
            { ID: '8CZ2', NroItem: 45 },
            { ID: '1PVUL', NroItem: 56 },
            { ID: '1PBUL', NroItem: 57 },
            { ID: '1PLES', NroItem: 58 },
            { ID: '1PLED', NroItem: 59 }
        ]
    },
    {
        Titulo: 'V - Dermatitis por ectoparasitosis',
        Items: [
            { ID: '5SARC', NroItem: 22 },
            { ID: '5DEMG', NroItem: 23 },
            { ID: '5DEML', NroItem: 24 },
            { ID: '5OTO', NroItem: 25 },
            { ID: '5CHEL', NroItem: 26 },
            { ID: '9EPI', NroItem: 49 }
        ]
    },
    {
        Titulo: 'VI - Dermatosis de origen hormonal',
        Items: [
            { ID: '6CUSH', NroItem: 27 },
            { ID: '6HTIR', NroItem: 28 },
            { ID: '6HEST', NroItem: 29 },
            { ID: '6HIP', NroItem: 30 },
            { ID: '6AND', NroItem: 31 },
            { ID: '6SER', NroItem: 32 },
            { ID: '6SOM', NroItem: 33 },
            { ID: '9ACA', NroItem: 46 },
            { ID: '9ACA2', NroItem: 47 },
            { ID: '9MUT', NroItem: 48 }
        ]
    },
    {
        Titulo: 'VII - Dermatomicosis',
        Items: [
            { ID: '7MIC', NroItem: 34 },
            { ID: '7TRI', NroItem: 35 },
            { ID: '7MAL', NroItem: 36 },
            { ID: '9LICK', NroItem: 50 }
        ]
    },
    {
        Titulo: 'VIII - Dermatosis por alteración de las glándulas sebáceas, queratinización y nutrición',
        Items: [
            { ID: '8APRI', NroItem: 38 },
            { ID: '8ASEC', NroItem: 39 },
            { ID: '8AORE', NroItem: 40 },
            { ID: '8ACOL', NroItem: 41 },
            { ID: '8BNAS', NroItem: 42 },
            { ID: '8CVIT', NroItem: 43 },
            { ID: '9OTI', NroItem: 51 }
        ]
    }
]
