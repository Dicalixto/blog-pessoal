  export type Post = {
    id: number;
    day: number;
    title: string;
    excerpt: string;
    content: string;
    dateISO: string;
  };

  export const posts: Post[] = [
    {
      id: 1,
      day: 1,
      title: 'Dia 1 — A trilha começa',
      excerpt: 'O coração bate forte enquanto a natureza dá as boas-vindas.',
      content:
        'A trilha começa! O coração bate forte enquanto a natureza nos dá boas-vindas com seu ar puro e sons selvagens.',
      dateISO: '2025-09-09',
    },
    {
      id: 2,
      day: 2,
      title: 'Dia 2 — Entre rios e cachoeiras',
      excerpt: 'O corpo se renova e a alma encontra paz no movimento das águas.',
      content:
        'Entre rios e cachoeiras, o corpo se renova e a alma encontra paz no movimento das águas.',
      dateISO: '2025-09-10',
    },
    {
      id: 3,
      day: 3,
      title: 'Dia 3 — Subida desafiadora',
      excerpt: 'Vistas de tirar o fôlego e sensação de conquista a cada passo.',
      content:
        'O desafio da subida revela vistas de tirar o fôlego e a sensação de conquista a cada passo.',
      dateISO: '2025-09-11',
    },
    {
      id: 4,
      day: 4,
      title: 'Dia 4 — Silêncio da floresta',
      excerpt: 'Conexão profunda e respeito pela vida selvagem.',
      content:
        'A imersão na floresta traz silêncio, conexão e um respeito ainda maior pela vida selvagem.',
      dateISO: '2025-09-12',
    },
    {
      id: 5,
      day: 5,
      title: 'Dia 5 — Céu estrelado no acampamento',
      excerpt: 'Simplicidade e grandeza da natureza sob as estrelas.',
      content:
        'O acampamento sob o céu estrelado faz lembrar a simplicidade e a grandeza da natureza.',
      dateISO: '2025-09-13',
    },
    {
      id: 6,
      day: 6,
      title: 'Dia 6 — Até breve',
      excerpt: 'A despedida chega, mas a aventura permanece no coração.',
      content:
        'A despedida chega, mas a aventura fica marcada como uma lembrança inesquecível no coração.',
      dateISO: '2025-09-14',
    },
  ];
