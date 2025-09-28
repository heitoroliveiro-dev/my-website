export const projects = [
  {
    id:1,
    title:"personalização perfex crm - Youben Benefícios",
    imageSrc:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    imageAlt:"Dashboard do sistema Perfex CRM customizado para Youin Benefícios",
    description:"Adaptação estratégica do Perfex CRM para a Youben Benefícios, convertendo a plataforma em uma ferramenta de gestão especializada para o setor de telemedicina. O projeto focou em customizar o sistema para atender às regras de negócio do cliente, resultando em uma operação mais centralizada e eficiente.",
    details:[
        "Módulo de Telemedicina: Desenvolvimento de um módulo exclusivo para a gestão de clientes (vidas), seus dependentes e contratos.",
        "Hierarquia de Acesso: Criação de uma lógica de permissões multinível (Admin > RH > Funcionário > Dependente).",
        "Relatórios e Exportação: Implementação de funcionalidades para exportação de dados (formato MAG) para relatórios gerenciais."
    ],
    technologies: ["PHP", "CodeIgniter", "JavaScript", "MySQL", "CRM"],
    link: "https://youben.diletec.dev.br"
  },
  {
    id:2,
    title:"o2control - Puc Minas",
    imageSrc:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    imageAlt:"Interface do sistema O2Control para gestão de oxigênio",
    description:"Aplicação desenvolvida no âmbito acadêmico (PUC Minas) com o objetivo de solucionar um desafio crítico na área da saúde: a gestão de estoques de oxigênio. O sistema oferece a hospitais e clínicas uma plataforma robusta para o controle preciso de cilindros, monitorando níveis de estoque, rastreando movimentações e gerenciando o ciclo de consumo.",
    details:[
      "Foco em uma interface intuitiva para gestores e estoquistas.",
      "Busca mitigar riscos de desabastecimento e otimizar a logística.",
      "Garante a segurança e a continuidade no atendimento a pacientes."
    ],
    technologies: [".Net", "EntityFramework", "Docker", "SQL Server", "C#"],
    link: "https://github.com/heitoroliveiro-dev/o2-control?tab=readme-ov-file"
  },
  {
    id:3,
    title:"n8n random number node",
    imageSrc:"https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
    imageAlt: "Demonstração do nó customizado no n8n",
    description: "Desenvolvimento de um nó customizado para a plataforma de automação n8n. O nó expande as capacidades nativas do n8n ao se integrar com a API externa do Random.org, permitindo a geração de números verdadeiramente aleatórios dentro dos fluxos de trabalho.",
    details: [
        "Desenvolvido em TypeScript e totalmente containerizado com Docker.",
        "Segue as melhores práticas da comunidade n8n para desenvolvimento de nós.",
        "Adiciona uma funcionalidade valiosa para casos que exigem aleatoriedade autêntica."
    ],
    technologies: ["Node.js", "TypeScript", "n8n", "Docker", "API"],
    link: "https://github.com/heitoroliveiro-dev/n8n-node-random-generator"
  },
  {
    id:4,
    title: "jgframe.com",
    imageSrc:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    imageAlt: "Página inicial do e-commerce jgframe.com",
    description: "Desenvolvimento de uma plataforma de e-commerce e galeria digital para um fotógrafo especializado em fine art e fotografia de rua. Construído sobre WordPress e WooCommerce, o site funciona como um portfólio profissional e um canal de vendas direto.",
    details: [
        "Configuração completa da loja virtual para venda de fotografias.",
        "Integração com o gateway de pagamento Mercado Pago.",
        "Oferece uma experiência de compra segura e otimizada para o público brasileiro."
    ],
    technologies: ["WordPress", "WooCommerce", "PHP", "E-commerce"],
    link:"https://jgframe.com"
  },
];