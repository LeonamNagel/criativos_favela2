export type Professional = {
  id: number;
  name: string;
  photo: string;
  city: string;
  area: string[];
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
  "Salvador",
] as const;

export const professionals: Professional[] = [
  {
    id: 1,
    name: "Gabriel Araújo",
    photo: "/src/assets/professionals/GABRIEL ARAUJO.JPG",
    city: "São Paulo",
    area: ["Filmagem e Fotografia", "Arte e Design", "Comunicação e Marketing", "Edição e Pós-Produção"],
    skills: ["Roteirista", "Editor", "Pesquisador de mercado", "Planejamento estratégico", "Criação de conteúdos mobile"],
    portfolio: "https://gabrielaraujomkt.my.canva.site/",
  },
  {
    id: 2,
    name: "Luz Barbosa",
    photo: "/src/assets/professionals/LUZ BARBOSA.jpg",
    city: "São Paulo",
    area: ["Produção e Direção", "Filmagem e Fotografia", "Arte e Design"],
    skills: ["Produtora", "Diretora de arte", "Social media", "Fotógrafa"],
    portfolio: "https://drive.google.com/drive/folders/1-MH6nE3rVOdOFT7-f9-Ydi6cPsHLr3WM",
  },
  {
    id: 3,
    name: "Pedro Sampaio",
    photo: "/src/assets/professionals/PEDRO SAMPAIO.jpg",
    city: "São Paulo",
    area: ["Filmagem e Fotografia"],
    skills: ["Fotógrafo", "Editor de fotos e vídeos", "Diretor de arte"],
    portfolio: "https://drive.google.com/file/d/1zAkrSQUdBRVMzTbMBf2Lvvp_EUgZyb0t/view?usp=drive_link",
  },
  {
    id: 4,
    name: "Ivan Pereira",
    photo: "/src/assets/professionals/IVAN.JPEG.jpg",
    city: "São Paulo",
    area: ["Produção e Direção", "Filmagem e Fotografia", "Arte e Design", "Comunicação e Marketing"],
    skills: ["Gaffer", "Produtor", "Filmmaker", "Operador de câmera"],
    portfolio: "https://www.canva.com/design/DAGcH6IB-Gk/9xXM9f-SUEfCwg6RATNksA/edit",
  },
  {
    id: 5,
    name: "Ray Santos",
    photo: "/src/assets/professionals/RAY SOUZA.jpg",
    city: "São Paulo",
    area: ["Produção e Direção", "Arte e Design", "Comunicação e Marketing"],
    skills: ["Social media", "Fotógrafo", "Editor"],
    portfolio: "https://www.behance.net/rayanesantos47",
  },
  {
    id: 6,
    name: "Dornelles",
    photo: "/src/assets/professionals/Dorneles.JPG",
    city: "São Paulo",
    area: ["Produção e Direção", "Filmagem e Fotografia", "Arte e Design"],
    skills: ["Filmmaker", "Social Media", "Direção"],
    portfolio: "https://www.canva.com/design/DAGc-ZI-LJY/lzp9p5i2vZutKiDAlLtDDg/edit",
  },
  {
    id: 7,
    name: "Andy Black",
    photo: "/src/assets/professionals/ANDY BLACK.jpg",
    city: "São Paulo",
    area: ["Produção e Direção", "Filmagem e Fotografia", "Arte e Design"],
    skills: ["Videomaker", "Editora", "Pilota de drone"],
    portfolio: "https://www.behance.net/theandyblack",
  },
  {
    id: 8,
    name: "Dhara Andrade",
    photo: "/src/assets/professionals/DHARA ANDRADE.jpg",
    city: "São Paulo",
    area: ["Filmagem e Fotografia", "Arte e Design"],
    skills: ["Produtora", "Social Media"],
    portfolio: "https://drive.google.com/file/d/1Pz6pOjFpM0zW59kngFPWYv-i6vWVNjkE/view?usp=drive_link",
  },
  {
    id: 9,
    name: "Vitor Almeida",
    photo: "/src/assets/professionals/VITOR ALMEIDA.JPG",
    city: "São Paulo",
    area: ["Produção e Direção", "Comunicação e Marketing"],
    skills: ["Fotógrafo", "Filmmaker", "Editor de vídeos"],
    portfolio: "https://drive.google.com/file/d/1-8vU6U9A4fis37Ci6ZqaI25Vst1vJXTO/view?usp=drive_link",
  },
  {
    id: 10,
    name: "Debritas",
    photo: "/src/assets/professionals/Debritas.jpg",
    city: "São Paulo",
    area: ["Produção e Direção", "Filmagem e Fotografia", "Edição e Pós-Produção"],
    skills: ["Social Media", "Fotógrafa", "Diretora de Arte"],
    portfolio: "https://drive.google.com/file/d/1GqwpoLjQy5-qZnwjzqMLiqfXDxGSHQE7/view?usp=sharing",
  },
  {
    id: 11,
    name: "Mar Zenin",
    photo: "/src/assets/professionals/Mar Zenin.JPG",
    city: "São Paulo",
    area: ["Produção e Direção", "Filmagem e Fotografia", "Som e Áudio"],
    skills: ["DOP", "Operação de Câmera", "Gaffer", "Colorista"],
    portfolio: "https://marzenin.myportfolio.com/",
  },
  {
    id: 12,
    name: "Rare Odin",
    photo: "/src/assets/professionals/RARE ODIN.jpg",
    city: "São Paulo",
    area: ["Produção e Direção", "Filmagem e Fotografia", "Comunicação e Marketing"],
    skills: ["Editor de Vídeo", "Operador de Câmera", "Diretor de Videoclipe"],
    portfolio: "https://www.behance.net/rareodin",
  },
  {
    id: 13,
    name: "Leandra Barros",
    photo: "/src/assets/professionals/LEANDRA.jpg",
    city: "São Paulo",
    area: ["Produção e Direção", "Filmagem e Fotografia"],
    skills: ["Fotografia", "Roteiro", "Produção"],
    portfolio: "https://drive.google.com/file/d/1dYNn4nQPKQSBVtD20Wq4j62bW2SriOc5/view?usp=drive_link",
  },
  {
    id: 14,
    name: "Juliana Bitencourt",
    photo: "/src/assets/professionals/JULIANA BITENCOURT.jpg",
    city: "São Paulo",
    area: ["Filmagem e Fotografia", "Arte e Design"],
    skills: ["Produção", "Comunicação"],
    portfolio: "https://www.behance.net/gallery/217488437/Portfolio-Juliana-Bitencourt",
  },
  {
    id: 15,
    name: "Guilherme Calafate",
    photo: "/src/assets/professionals/GUILHERME CALAFATE.JPG",
    city: "São Paulo",
    area: ["Som e Áudio"],
    skills: ["Produção Musical", "Edição de Áudio", "Sound Effects"],
    portfolio: "https://drive.google.com/file/d/1MXTPj2_4086pELfUVr4BQE2jTD0NgIzO/view?usp=sharing",
  },
  {
    id: 16,
    name: "João Victor",
    photo: "/src/assets/professionals/JOAO VITOR.PNG",
    city: "São Paulo",
    area: ["Filmagem e Fotografia", "Edição e Pós-Produção"],
    skills: ["Ilustrador", "Roteirista"],
    portfolio: "https://www.canva.com/design/DAGc-BDFu9M/rG82Gu639Gbj84itiB8FWA/view",
  },
  {
    id: 17,
    name: "Eduardo Frois",
    photo: "/src/assets/professionals/EDUARDO FROIS.jpg",
    city: "São Paulo",
    area: ["Produção e Direção", "Som e Áudio", "Filmagem e Fotografia"],
    skills: ["Áudio", "Fotografia", "Filmagem"],
    portfolio: "https://linktr.ee/DuFrois?lt_utm_source=lt_share_link#434492334",
  },
  {
    id: 18,
    name: "Pietro Universo",
    photo: "/src/assets/professionals/PIETRO UNIVERSO.jpg",
    city: "São Paulo",
    area: ["Produção e Direção", "Filmagem e Fotografia", "Edição e Pós-Produção", "Comunicação e Marketing"],
    skills: ["Fotógrafo", "Ator", "Editor", "Diretor criativo"],
    portfolio: "https://pietrouniverso.my.canva.site",
  },
  {
    id: 19,
    name: "Ju Costa",
    photo: "/src/assets/professionals/JU COSTA.JPG",
    city: "São Paulo",
    area: ["Produção e Direção", "Comunicação e Marketing"],
    skills: ["Fotografia", "Filmagem", "Edição"],
    portfolio: "https://www.instagram.com/clicksdajuliana",
  },
  {
    id: 20,
    name: "Ellen Lopes",
    photo: "/src/assets/professionals/ELLEN LOPES.jpg",
    city: "São Paulo",
    area: ["Produção e Direção", "Comunicação e Marketing"],
    skills: ["Fotografia", "Edição", "Colorista"],
    portfolio: "https://drive.google.com/file/d/1-AMGt_OFOU1HBvVHr3wjXyy4hYbxEpXi/view?usp=drivesdk",
  },
];

// Extract and sort all unique skills from professionals
export const allSkills = Array.from(
  new Set(professionals.flatMap((p) => p.skills))
).sort();
