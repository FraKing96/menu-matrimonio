export const wedding = {
  bride: "Nicole",
  groom: "Francesco",
  dateLabel: "20.05.2027",
  venue: "Agriturismo Cascina Rosio",
  place: "Albairate",
} as const;

export type Dish = {
  name: string;
  note?: string;
};

export type Course = {
  id: string;
  label: string;
  items: Dish[];
};

// Bozza: sostituisci i piatti con il menù definitivo.
export const courses: Course[] = [
  {
    id: "aperitivo",
    label: "Aperitivo",
    items: [
      {
        name: "Calice di benvenuto",
        note: "Bollicine brut",
      },
      {
        name: "Stuzzichini dell'orto",
        note: "Focaccia, grissini e verdure di stagione",
      },
    ],
  },
  {
    id: "antipasti",
    label: "Antipasti",
    items: [
      {
        name: "Tagliere della cascina",
        note: "Salumi e formaggi selezionati, miele e noci",
      },
      {
        name: "Flan di verdure",
        note: "Fonduta leggera ed erbe del giardino",
      },
      {
        name: "Gamberi, agrumi e finocchio",
        note: "Olio al basilico",
      },
    ],
  },
  {
    id: "primi",
    label: "Primi",
    items: [
      {
        name: "Risotto allo zafferano",
        note: "Mantecatura al burro e midollo",
      },
      {
        name: "Tortelli di zucca",
        note: "Burro fuso, salvia e amaretti",
      },
    ],
  },
  {
    id: "secondi",
    label: "Secondi",
    items: [
      {
        name: "Tagliata di manzo",
        note: "Rucola, grana e rosmarino",
      },
      {
        name: "Branzino al forno",
        note: "Erbe aromatiche e limone",
      },
      {
        name: "Contorni",
        note: "Patate al forno e verdure di stagione",
      },
    ],
  },
  {
    id: "dolce",
    label: "Dolce",
    items: [
      {
        name: "Torta nuziale",
        note: "Vaniglia, frutti di bosco e fiori",
      },
      {
        name: "Piccola pasticceria",
        note: "Mignon e biscotti della casa",
      },
      {
        name: "Caffè",
        note: "E un confetto, per chiudere",
      },
    ],
  },
];
