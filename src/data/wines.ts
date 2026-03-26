export interface Wine {
  id: number;
  name: string;
  year: number;
  type: "Tinto" | "Blanco" | "Rosado" | "Espumoso";
  grape: string;
  aging: string;
  description: string;
  image: string;
}

export const wines: Wine[] = [
  {
    id: 1,
    name: "Gran Reserva",
    year: 2018,
    type: "Tinto",
    grape: "Tempranillo",
    aging: "36 meses en barrica",
    description: "Un vino excepcional con notas de fruta negra madura, cacao y especias.",
    image: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?w=600&q=80",
  },
  {
    id: 2,
    name: "Crianza Selección",
    year: 2020,
    type: "Tinto",
    grape: "Cabernet Sauvignon",
    aging: "12 meses en barrica",
    description: "Equilibrio perfecto entre fruta y madera, con taninos sedosos.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80",
  },
  {
    id: 3,
    name: "Blanco Fermentado",
    year: 2023,
    type: "Blanco",
    grape: "Chardonnay",
    aging: "6 meses en roble",
    description: "Frescor y elegancia con notas cítricas y矿物.",
    image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=600&q=80",
  },
  {
    id: 4,
    name: "Rosado Premium",
    year: 2023,
    type: "Rosado",
    grape: "Garnacha",
    aging: "3 meses en contacto",
    description: "Delicado y aromático con notas de fresa y rosa.",
    image: "https://images.unsplash.com/photo-1558981852-426c6c22a060?w=600&q=80",
  },
  {
    id: 5,
    name: "Cava Reserva",
    year: 2020,
    type: "Espumoso",
    grape: "Macabeo",
    aging: "24 meses en rima",
    description: "Burbujas finas y persistentes con bouquet complejo.",
    image: "https://images.unsplash.com/photo-1609592806596-4435da1122dc?w=600&q=80",
  },
  {
    id: 6,
    name: "Vendimia Tardía",
    year: 2019,
    type: "Blanco",
    grape: "Moscatel",
    aging: "18 meses en barrica",
    description: "Vino dulce natural con notas de miel y albaricoque.",
    image: "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?w=600&q=80",
  },
];
