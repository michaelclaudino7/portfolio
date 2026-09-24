export const profile = {
  name: "Michael Rodrigues",
  role: "Desenvolvedor Full Stack",
  pitch:
    "Construo interfaces escaláveis e APIs robustas — do componente React ao microsserviço em produção.",
  summary:
    "Desenvolvedor Full Stack com experiência na construção de interfaces escaláveis e APIs robustas, atuando com React, Next.js, TypeScript, C#, .NET, Entity Framework, SQL Server, MongoDB, RabbitMQ, microsserviços, Docker, CI/CD e Azure. Ao longo da minha trajetória, construí uma base sólida em lógica, modelagem de dados e boas práticas de arquitetura, atuando tanto em frontend quanto em backend em projetos para clientes como Locaweb, RD Station, Unicred, Sicoob, Sankhya e a Assembleia Legislativa do Espírito Santo (ALES).",
  location: "São Paulo, SP",
  languages: "Inglês avançado",
  links: {
    linkedin: "https://www.linkedin.com/in/michael-claudino7/",
    github: "https://github.com/michaelclaudino7",
    resume: "/michael-rodrigues-curriculo.pdf",
    email:
      "https://mail.google.com/mail/?view=cm&fs=1&to=michaelclaudino7@gmail.com&su=Contato%20via%20portf%C3%B3lio",
  },
};

export type Experience = {
  role: string;
  company: string;
  companyMark: string; // sigla curta pra usar como marcador
  type: string;
  period: string;
  duration: string;
  location: string;
  bullets: string[];
  stack: string[];
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    company: "tiki",
    companyMark: "TK",
    type: "Tempo Integral",
    period: "Ago 2023 — Mar 2026",
    duration: "2 anos e 8 meses",
    location: "Remoto",
    current: true,
    bullets: [
      "Desenvolvi interfaces responsivas em React, Next.js e TypeScript para clientes como Locaweb, RD Station, Unicred, Sicoob e Sankhya, atendendo a diferentes contextos de produto e marca.",
      "Migrei o consumo de API do lado do cliente para o lado do servidor (SSR), reduzindo o tempo de carregamento das aplicações em cerca de 30%.",
      "Implementei sistema de estilização com Sass alinhado à identidade visual de cada marca, garantindo consistência entre os produtos.",
      "Padronizei o ambiente de desenvolvimento com Docker, facilitando o onboarding e reduzindo inconsistências entre máquinas da equipe.",
      "Automatizei pipelines de CI/CD com Jenkins, eliminando deploys manuais e reduzindo o tempo perdido com subida de projetos.",
    ],
    stack: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "SCSS",
      "Docker",
      "Jenkins",
      "CI/CD",
      "Git",
      "Scrum",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Intelliway",
    companyMark: "IW",
    type: "Estágio",
    period: "Jul 2022 — Jul 2023",
    duration: "1 ano",
    location: "Remoto",
    bullets: [
      "Desenvolvi APIs REST com C#, .NET e Entity Framework para suportar funcionalidades-chave do produto.",
      "Construí interfaces web com React, Next.js e TypeScript, integrando frontend e backend de ponta a ponta.",
      "Trabalhei com bancos de dados SQL Server e NoSQL (MongoDB), realizando consultas e manipulação de dados para regras de negócio.",
      "Desenvolvi e mantive microsserviços com comunicação assíncrona via RabbitMQ, hospedados na Azure.",
      "Diagnostiquei e corrigi problemas técnicos nas APIs, contribuindo para uma melhoria de até 20% em performance e estabilidade.",
      "Documentei APIs com Swagger, facilitando o consumo por outros times e a manutenção futura.",
      "Ajudei a integrar o chatbot Watson Assistant (IBM) no backend do Alesinha, assistente virtual pioneira no atendimento digital do setor público capixaba.",
    ],
    stack: [
      "C#",
      ".NET Framework",
      "Entity Framework",
      "SQL Server",
      "MongoDB",
      "RabbitMQ",
      "Azure",
      "React",
      "TypeScript",
      "Swagger",
      "Git",
    ],
  },
];

export type Education = {
  school: string;
  schoolMark: string;
  degree: string;
  period: string;
  description: string;
  tags: string[];
};

export const education: Education[] = [
  {
    school: "Universidade Nove de Julho — UNINOVE",
    schoolMark: "UN",
    degree: "Curso Superior de Tecnologia (CST), Análise e Desenvolvimento de Sistemas",
    period: "Fev 2022 — Jun 2024",
    description:
      "Graduado em Análise e Desenvolvimento de Sistemas pela UNINOVE, com base sólida em lógica de programação, modelagem de dados e arquitetura de software.",
    tags: [
      "Systems Design",
      "Architectural Patterns",
      "Banco de Dados",
      "Estrutura de Dados",
      "Engenharia de Software",
      "POO",
    ],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  issued: string;
  credentialId: string;
  skills?: string[];
};

export const certifications: Certification[] = [
  {
    name: "Academy Accreditation — AI Agent Fundamentals",
    issuer: "Databricks",
    issued: "Ago 2026",
    credentialId: "191927461",
  },
  {
    name: "Academy Accreditation — Databricks Fundamentals",
    issuer: "Databricks",
    issued: "Abr 2026",
    credentialId: "180249217",
  },
  {
    name: "Microsoft Certified: Azure Data Fundamentals",
    issuer: "Microsoft",
    issued: "Abr 2026",
    credentialId: "CD598F7C67493EC6",
  },
  {
    name: "Cloud Fundamentals, Administration and Solution Architect",
    issuer: "FIAP",
    issued: "Jan 2026",
    credentialId: "fe8fe39da4dc0e7802d545272df0f573",
    skills: ["Cloud Computing", "Amazon Web Services (AWS)"],
  },
  {
    name: "Python",
    issuer: "FIAP",
    issued: "Jan 2026",
    credentialId: "4b3aa3a39b70254533a4f2932a563adf",
    skills: ["Python (Programming Language)"],
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "SCSS", "JavaScript"],
  },
  {
    label: "Backend",
    items: ["C#", ".NET", "Entity Framework", "APIs RESTful", "Microsserviços"],
  },
  {
    label: "Dados",
    items: ["SQL Server", "PostgreSQL", "MongoDB", "Modelagem de Dados"],
  },
  {
    label: "Infraestrutura",
    items: ["Docker", "CI/CD", "Azure", "RabbitMQ"],
  },
  {
    label: "Processo",
    items: ["Scrum", "Kanban", "Swagger", "Git"],
  },
];
