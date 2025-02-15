
export type Professional = {
  id: number;
  name: string;
  photo: string;
  city: string;
  area: string;
  skills: string[];
  portfolio: string;
};

export const areas = [
  "Produção e Direção",
  "Filmagem e Fotografia",
  "Som e Áudio",
  "Edição e Pós-Produção",
  "Arte e Design",
  "Comunicação e Marketing",
] as const;

export const cities = [
  "São Paulo",
  "Rio de Janeiro",
  "Belo Horizonte",
  "Curitiba",
  "Porto Alegre",
  "Recife",
  "Salvador",
  "Brasília",
] as const;

export const professionals: Professional[] = [
  {
    id: 1,
    name: "Sofia Mendes",
    photo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    city: "São Paulo",
    area: "Edição e Pós-Produção",
    skills: ["Edição de Vídeo", "Motion Graphics", "Color Grading"],
    portfolio: "https://www.behance.net",
  },
  {
    id: 2,
    name: "Lucas Santos",
    photo: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    city: "Rio de Janeiro",
    area: "Filmagem e Fotografia",
    skills: ["Direção de Fotografia", "Iluminação", "Steadicam"],
    portfolio: "https://www.instagram.com",
  },
  {
    id: 3,
    name: "Ana Clara",
    photo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    city: "Belo Horizonte",
    area: "Produção e Direção",
    skills: ["Direção", "Produção Executiva", "Roteiro"],
    portfolio: "https://www.vimeo.com",
  },
  {
    id: 4,
    name: "Pedro Almeida",
    photo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    city: "São Paulo",
    area: "Som e Áudio",
    skills: ["Sound Design", "Mixagem", "Captação"],
    portfolio: "https://www.soundcloud.com",
  },
];
