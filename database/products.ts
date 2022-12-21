interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    category: 'red-wine'|'white-wine'|'sparkling'
}

type ValidTypes = 'chardonnay'|'malbec'|'pinot'|'cavernet'|'sauvignon'|'vieux'|'extra brut'|'brut nature';

interface SeedData {
    products: SeedProduct[],
}




export const initialData: SeedData = {
    products: [
        /* ROJOS */
        {
            description: "La temperatura adecuado para su degustación es de 16 º C. Es un vino apto para guarda de 8 años. Decantar por espacio de una hora antes de beberlo. Maridaje ideal para acompañar carnes de caza, cordero y pastas condimentadas.",
            images: [
                '1740176-00-A_0_2000.jpg',
                '1740176-00-A_1.jpg',
            ],
            inStock: 7,
            price: 1828,
            slug: "malma-malbec",
            type: 'malbec',
            tags: ['malma', 'malbec'],
            title: "Malma Reserva de Familia Malbec",
            category: 'red-wine'
        },
        {
            description: "Temperatura de servicio para este vino es entre 16º y 18º C, Potencial de guarda 4 años. Decantar por espacio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar carnes rojas y de caza, salsas especiadas y quesos de sabor intenso.",
            images: [
                '1740507-00-A_0_2000.jpg',
                '1740176-00-A_1.jpg',
            ],
            inStock: 5,
            price: 1388,
            slug: "punto-final-malbec",
            type: 'malbec',
            tags: ['punto final', 'malbec'],
            title: "Punto Final Malbec",
            category: 'red-wine'
        },
        {
            description: "Temperatura de servicio para este vino es entre 16º y 18º C, Potencial de guarda 3 años. Decantar por espacio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar cordero asado",
            images: [
                '1740250-00-A_0_2000.jpg',
                '1740176-00-A_1.jpg',
            ],
            inStock: 7,
            price: 794,
            slug: "cordero-con-piel-de-lobo-malbec",
            type: 'malbec',
            tags: ['malbec'],
            title: "Cordero Con Piel de Lobo Malbec",
            category: 'red-wine'
        },
        {
            description: "Anejado 8 meses en barricas. 50% roble francés, 50% roble americano. Cosecha A mano y fermentación en tanques de acero inoxidable, apenas descobajado, se realiza una maceración prefermentativa a 10º C durante 72 hs. Luego la fermentación alcohólica se conduce haciendo un pico de 28º como máximo, finalizando a una temperatura de 23-24º C para obtener todos los aromas frutales.",
            images: [
                '1473809-00-A_1_2000.jpg',
                '1740176-00-A_1.jpg',
            ],
            inStock: 15,
            price: 1899,
            slug: "escorihuela-gascon-malbec",
            type: 'malbec',
            tags: ['malbec'],
            title: "Escorihuela Gascon Malbec",
            category: 'red-wine'
        },
        {
            description: "Temperatura de servicio para este vino es entre 16º y 18º C, Potencial de guarda 3 años. Decantar por espacio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar cordero asado",
            images: [
                '1506211-00-A_1_2000.jpg',
                '1740176-00-A_1.jpg',
            ],
            inStock: 8,
            price: 739,
            slug: "portillo-malbec",
            type: 'malbec',
            tags: ['malbec'],
            title: "Portillo Malbec",
            category: 'red-wine'
        },
         /* BLANCOS */
        {
            description: "Temperatura de servicio de este vino es entre 10º y 12º C. Potencial de guarda unos 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para maridar unos Penne Rigate con suave de ajo y frutos de mar.",
            images: [
                '7652410-00-A_0.jpg',
                '1473809-00-A_alt.jpg',
            ],
            inStock: 20,
            price: 739,
            slug: "portillo-sauvignon-blanc",
            type: 'sauvignon',
            tags: ['Sauvignon'],
            title: "Portillo Sauvignon Blanc",
            category: 'white-wine'
        },
        {
            description: "Temperatura de servicio para este vino es entre 16º y 18º C, Potencial de guarda 3 años. Decantar por espacio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar cordero asado",
            images: [
                '100042307_0_2000.jpg',
                '1473809-00-A_alt.jpg',
            ],
            inStock: 8,
            price: 739,
            slug: "portillo-chardonnay",
            type: 'chardonnay',
            tags: ['chardonnay'],
            title: "Portillo Chardonnay",
            category: 'white-wine'
        },
        {
            description: "Temperatura de servicio para este vino es entre 10º y 12º C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. ideal para acompañar un tapeo variado.",
            images: [
                '100042307_1_2000.jpg',
                '1473809-00-A_alt.jpg',
            ],
            inStock: 11,
            price: 1570,
            slug: "la-flor-sauvignon-blanc",
            type: 'sauvignon',
            tags: ['sauvignon'],
            title: "La Flor Sauvignon Blanc",
            category: 'white-wine'
        },
        {
            description: "La temperatura adecuada para su degustacion es entre 7º y 9º C. Es un vino apto para guarda de 3 años. Acompaña muy bien ensaladas de verdes, pescados al vapor y mariscos suaves.",
            images: [
                '100042307_alt_2000.jpg',
                '1473809-00-A_alt.jpg',
            ],
            inStock: 8,
            price: 1065,
            slug: "clara-benegas-chardonnay",
            type: 'chardonnay',
            tags: ['chardonnay'],
            title: "Clara Benegas Chardonnay",
            category: 'white-wine'
        },
        {
            description: "Temperatura de servicio para este vino es entre 8º y 10º C, Potencial de guarda un año. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar una Liebre guisado y amaranto. ",
            images: [
                '7654420-00-A_1_2000.jpg',
                '1473809-00-A_alt.jpg',
            ],
            inStock: 8,
            price: 739,
            slug: "chateau-vieux-blanco",
            type: 'vieux',
            tags: ['vieux'],
            title: "Chateau Vieux Blanco",
            category: 'white-wine'
        },
        /* ESPUMANTES */
        {
            description: "Temperatura de servicio de este espumante es de 7º C. Potencial de guarda unos 3 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para maridar con unas tapas de salmón.",
            images: [
                '7652410-00-A_1_2000.jpg',
                '1473809-00-A_alt.jpg',
            ],
            inStock: 8,
            price: 1699,
            slug: "salentein-cuvee-speciale-extra-brut",
            type: 'extra brut',
            tags: ['extra brut'],
            title: "Salentein Cuvée Spéciale Extra Brut",
            category: 'sparkling'
        },
        {
            description: "Temperatura de servicio de este espumante es de 7º C. Potencial de guarda unos 3 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para maridar con unas tapas de salmón.",
            images: [
                '7652421-00-A_0_2000.jpg',
                '1473809-00-A_alt.jpg',
            ],
            inStock: 5,
            price: 4366,
            slug: "alma-negra-espumante-rose",
            type: 'brut nature',
            tags: ['brut nature'],
            title: "Alma Negra Brut Nature Rose",
            category: 'sparkling'
        },
        {
            description: "Presenta un color dorado brillante, burbujas finas y alineadas con una corona persistente. Sensación fresca, un sutil recuerdo de azares que aporta el Torrontés, acompañado de notas a frutas frescas como manzana verde y ananá aportadas por el Riesling. Tiene un inicio dinámico y bien mineral, con un volumen medio preservando la frescura, sobre el final se puede percibir sutilmente la acidez. Tiene una persistencia fresca y elegante ",
            images: [
                '7652426-00-A_0_2000.jpg',
                '1473809-00-A_alt.jpg',
            ],
            inStock: 20,
            price: 1568,
            slug: "amalaya-brut-nature",
            type: 'brut nature',
            tags: ['brut nature'],
            title: "Amalaya Brut Nature",
            category: 'sparkling'
        },
        {
            description: "Temperatura de servicio de este espumante es entre 6º  y 8º C, Potencial de guarda 1 año. Ideal para maridar una Ensalada de papaya verde, mangos con langostinos picantes.  ",
            images: [
                '7652432-00-A_0_2000.jpg',
                '1473809-00-A_alt.jpg',
            ],
            inStock: 12,
            price: 2524,
            slug: "cruzat-clasico-rose-extra-brut",
            type: 'extra brut',
            tags: ['extra brut'],
            title: "Cruzat Premier Rosé Extra Brut",
            category: 'sparkling'
        },
        {
            description: "Temperatura de servicio para este vino es entre 8º y 10º C, Potencial de guarda un año. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar una Liebre guisado y amaranto. ",
            images: [
                '7652453-00-A_0_2000.jpg',
                '1473809-00-A_alt.jpg',
            ],
            inStock: 23,
            price: 1959,
            slug: "progenie-iii-extra-brut",
            type: 'extra brut',
            tags: ['extra brut'],
            title: "Progenie III Extra Brut",
            category: 'sparkling'
        },
    ]
}