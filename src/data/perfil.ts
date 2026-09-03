export const perfil = {
  nome: "Leonardo Cabral Sell",
  primeiroNome: "Leonardo",
  cargo: "Desenvolvedor Java Pleno",
  local: "Florianópolis, SC — Brasil",
  email: "leosell14@gmail.com",
  telefone: "(48) 99138-1253",
  telefoneE164: "5548991381253",
  linkedin: "https://www.linkedin.com/in/leonardo-cabral-sell-353ba71b5",
  github: "https://github.com/leosell",
  resumoCurto:
    "Backend em Java e Spring Boot para o mercado de crédito consignado, com integrações bancárias que sustentam de 5 a 15 mil propostas por dia.",
  sobre: [
    "Desenvolvedor Java Pleno com 3 anos de experiência em backend para o mercado de crédito consignado, atuando em integrações bancárias que sustentam de 5 a 15 mil propostas digitadas por dia.",
    "Trabalho com o ecossistema Spring Boot, mensageria, cache, Docker e bancos relacionais, incluindo migração de monolito para microsserviços, e complemento o perfil com Node.js e React.",
  ],
} as const;

export const metricas = [
  { valor: "20+", rotulo: "integrações bancárias", detalhe: "Java · Spring Boot" },
  { valor: "5–15 mil", rotulo: "propostas digitadas por dia", detalhe: "volume em produção" },
  { valor: "300+", rotulo: "usuários atendidos", detalhe: "operação diária" },
  { valor: "30min → 5min", rotulo: "tempo de publicação", detalhe: "após containerização" },
] as const;

export type Experiencia = {
  cargo: string;
  empresa: string;
  periodo: string;
  duracao: string;
  descricao: string;
  entregas: { titulo: string; texto: string }[];
  stack: string[];
};

export const experiencias: Experiencia[] = [
  {
    cargo: "Desenvolvedor Java Pleno",
    empresa: "Nova Promotora",
    periodo: "2023 — Presente",
    duracao: "3 anos",
    descricao:
      "Backend das integrações bancárias que sustentam a operação de crédito consignado: simulação, digitação de propostas e tratamento de retornos.",
    entregas: [
      {
        titulo: "Integrações bancárias em escala",
        texto:
          "Desenvolvi e mantive mais de 20 integrações com sistemas bancários em Java e Spring Boot, entregando simulação e digitação de propostas de consignado para mais de 300 usuários, com volume de 5 a 15 mil propostas digitadas por dia.",
      },
      {
        titulo: "Performance de banco de dados",
        texto:
          "Reescrevi consultas críticas e apliquei indexação no MySQL, eliminando travamentos que afetavam a operação em horários de pico.",
      },
      {
        titulo: "Containerização e entrega",
        texto:
          "Containerizei as aplicações com Docker e padronizei o versionamento, reduzindo o tempo de gerar e publicar uma nova versão de cerca de 30 minutos para 5 a 8 minutos.",
      },
      {
        titulo: "Monolito para microsserviços",
        texto:
          "Conduzi a migração de um monolito para arquitetura de microsserviços, separando domínios e definindo a comunicação entre os serviços.",
      },
      {
        titulo: "Segurança das APIs",
        texto:
          "Migrei a autenticação das APIs de Base64 para JWT com Spring Security.",
      },
      {
        titulo: "Automação e testes",
        texto:
          "Automatizei rotinas e testes de ponta a ponta com Selenium e Playwright.",
      },
      {
        titulo: "Node.js e front-end",
        texto:
          "Integrei serviços em Node.js a bibliotecas open source de WhatsApp e assumi ajustes no front-end em React quando o time de frontend não tinha disponibilidade.",
      },
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "Docker",
      "Kafka",
      "Redis",
      "Node.js",
      "React",
    ],
  },
];

export type Projeto = {
  nome: string;
  arquivo: string;
  descricao: string;
  destaques: string[];
  stack: string[];
};

export const projetos: Projeto[] = [
  {
    nome: "CRM de atendimento com WhatsApp integrado",
    arquivo: "crm-whatsapp",
    descricao:
      "CRM para disparo de mensagens e atendimento ao cliente final, com chat integrado ao WhatsApp.",
    destaques: [
      "Chat em tempo real integrado ao WhatsApp",
      "Disparo de mensagens para a base de clientes",
      "Backend em Java/Spring Boot com serviço Node.js para a camada de mensageria",
    ],
    stack: ["Java", "Spring Boot", "Node.js", "React"],
  },
  {
    nome: "API de tratamento de webhooks bancários",
    arquivo: "webhooks-bancarios",
    descricao:
      "Recebe eventos de webhook de uma bancarizadora e transforma os dados em informação legível para os times financeiro e operacional.",
    destaques: [
      "Ingestão e normalização de eventos da bancarizadora",
      "Tradução de payloads técnicos em informação de negócio",
      "Base de consulta para os times financeiro e operacional",
    ],
    stack: ["Java", "Spring Boot", "MySQL"],
  },
];

export const habilidades = [
  {
    categoria: "Backend",
    chave: "backend",
    itens: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Node.js/Express",
      "TypeScript",
      "Python/FastAPI",
    ],
  },
  {
    categoria: "Frontend",
    chave: "frontend",
    itens: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    categoria: "Dados",
    chave: "dados",
    itens: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQL"],
  },
  {
    categoria: "Mensageria",
    chave: "mensageria",
    itens: ["Kafka", "RabbitMQ"],
  },
  {
    categoria: "Testes",
    chave: "testes",
    itens: ["JUnit", "Mockito", "Selenium", "Playwright"],
  },
  {
    categoria: "DevOps & Ferramentas",
    chave: "devops",
    itens: ["Docker", "AWS", "Git", "GitHub", "Maven", "Swagger/OpenAPI", "Linux/Shell"],
  },
  {
    categoria: "Conceitos",
    chave: "conceitos",
    itens: ["API REST", "Microsserviços", "MVC", "OOP", "Clean Code", "Scrum"],
  },
] as const;

export const formacao = [
  {
    curso: "Técnico em Análise e Desenvolvimento de Sistemas",
    instituicao: "Senai SC",
    periodo: "Concluído em 2024",
  },
] as const;

export const idiomas = [
  { idioma: "Português", nivel: "Nativo" },
  { idioma: "Inglês", nivel: "Técnico (leitura de documentação)" },
] as const;

export const navegacao = [
  { href: "#sobre", rotulo: "sobre" },
  { href: "#experiencia", rotulo: "experiência" },
  { href: "#projetos", rotulo: "projetos" },
  { href: "#stack", rotulo: "stack" },
  { href: "#contato", rotulo: "contato" },
] as const;
