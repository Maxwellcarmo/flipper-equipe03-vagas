/* ===== Dados simulados ===== */
/* ===== Dados simulados ===== */
const vagas = [
  {
    id: 1,
    titulo: "Estágio em Desenvolvimento Web",
    empresa: "Tech Solutions",
    area: "TI",
    curso: "Sistemas de Informação",
    tipo: "Estágio",
    local: "Remoto",
    descricao: "Auxiliar no desenvolvimento de sites e aplicações web.",
    requisitos: "HTML, CSS, JavaScript.",
    data: "2025-10-28",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 2,
    titulo: "Analista Administrativo",
    empresa: "Grupo Alfa",
    area: "Administração",
    curso: "Administração",
    tipo: "Emprego",
    local: "Presencial - São Paulo",
    descricao: "Atuar na área administrativa com controle de documentos e relatórios.",
    requisitos: "Excel, comunicação, organização.",
    data: "2025-10-25",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 3,
    titulo: "Engenheiro Civil Júnior",
    empresa: "Construtora Beta",
    area: "Engenharia",
    curso: "Engenharia Civil",
    tipo: "Emprego",
    local: "Presencial - Recife",
    descricao: "Acompanhar obras e elaborar relatórios técnicos.",
    requisitos: "AutoCAD, CREA ativo.",
    data: "2025-10-20",
    status: "Encerrada",
    visualizacoes: 0
  },
  {
    id: 4,
    titulo: "Designer Gráfico",
    empresa: "Agência Criativa",
    area: "Design",
    curso: "Design Gráfico",
    tipo: "Emprego",
    local: "Híbrido - Rio de Janeiro",
    descricao: "Criação de materiais gráficos para campanhas publicitárias.",
    requisitos: "Photoshop, Illustrator, criatividade.",
    data: "2025-10-30",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 5,
    titulo: "Estágio em Marketing Digital",
    empresa: "SocialUp",
    area: "Marketing",
    curso: "Publicidade e Propaganda",
    tipo: "Estágio",
    local: "Remoto",
    descricao: "Auxiliar no gerenciamento de redes sociais e campanhas online.",
    requisitos: "Canva, métricas de engajamento.",
    data: "2025-11-01",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 6,
    titulo: "Assistente Financeiro",
    empresa: "Finance Corp",
    area: "Finanças",
    curso: "Ciências Contábeis",
    tipo: "Emprego",
    local: "Presencial - Curitiba",
    descricao: "Lançamentos contábeis, controle de caixa e conciliação bancária.",
    requisitos: "Excel avançado, noções contábeis.",
    data: "2025-10-29",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 7,
    titulo: "Trainee em Logística",
    empresa: "TransLog Brasil",
    area: "Logística",
    curso: "Engenharia de Produção",
    tipo: "Trainee",
    local: "Presencial - Campinas",
    descricao: "Atuar em processos logísticos e controle de estoques.",
    requisitos: "Pacote Office, proatividade.",
    data: "2025-10-27",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 8,
    titulo: "Analista de Recursos Humanos",
    empresa: "RH Prime",
    area: "Recursos Humanos",
    curso: "Psicologia",
    tipo: "Emprego",
    local: "Híbrido - Porto Alegre",
    descricao: "Recrutamento, seleção e desenvolvimento de colaboradores.",
    requisitos: "Experiência com entrevistas e testes psicológicos.",
    data: "2025-10-22",
    status: "Encerrada",
    visualizacoes: 0
  },
  {
    id: 9,
    titulo: "Estágio em Engenharia Elétrica",
    empresa: "Energix",
    area: "Engenharia",
    curso: "Engenharia Elétrica",
    tipo: "Estágio",
    local: "Presencial - Belo Horizonte",
    descricao: "Apoiar projetos elétricos e manutenção de equipamentos.",
    requisitos: "AutoCAD, leitura de diagramas elétricos.",
    data: "2025-10-30",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 10,
    titulo: "Atendente de Suporte Técnico",
    empresa: "HelpDesk 24h",
    area: "TI",
    curso: "Tecnologia da Informação",
    tipo: "Emprego",
    local: "Remoto",
    descricao: "Atendimento remoto a clientes com problemas técnicos.",
    requisitos: "Boa comunicação, conhecimento básico em redes.",
    data: "2025-10-24",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 11,
    titulo: "Analista de Dados",
    empresa: "DataSmart",
    area: "TI",
    curso: "Ciência de Dados",
    tipo: "Emprego",
    local: "Híbrido - São Paulo",
    descricao: "Analisar grandes volumes de dados para apoio à tomada de decisão.",
    requisitos: "SQL, Python, Power BI.",
    data: "2025-11-02",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 12,
    titulo: "Professor de Inglês",
    empresa: "Escola Global",
    area: "Educação",
    curso: "Letras",
    tipo: "Emprego",
    local: "Presencial - Salvador",
    descricao: "Ministrar aulas de inglês para turmas do ensino médio.",
    requisitos: "Fluência em inglês, didática.",
    data: "2025-10-31",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 13,
    titulo: "Auxiliar de Laboratório",
    empresa: "BioLab",
    area: "Saúde",
    curso: "Biomedicina",
    tipo: "Emprego",
    local: "Presencial - Fortaleza",
    descricao: "Preparar amostras e auxiliar em análises laboratoriais.",
    requisitos: "Técnicas de biossegurança.",
    data: "2025-10-29",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 14,
    titulo: "Estágio em Jornalismo",
    empresa: "Notícia Agora",
    area: "Comunicação",
    curso: "Jornalismo",
    tipo: "Estágio",
    local: "Híbrido - Rio de Janeiro",
    descricao: "Produzir matérias e auxiliar na edição de conteúdo digital.",
    requisitos: "Boa escrita, interesse em atualidades.",
    data: "2025-10-26",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 15,
    titulo: "Técnico em Enfermagem",
    empresa: "Clínica Vida",
    area: "Saúde",
    curso: "Enfermagem",
    tipo: "Emprego",
    local: "Presencial - Brasília",
    descricao: "Atendimento a pacientes e suporte a médicos.",
    requisitos: "COREN ativo, empatia.",
    data: "2025-10-20",
    status: "Encerrada",
    visualizacoes: 0
  },
  {
    id: 16,
    titulo: "Estágio em Direito",
    empresa: "Advocacia Legal & Cia",
    area: "Direito",
    curso: "Direito",
    tipo: "Estágio",
    local: "Presencial - São Paulo",
    descricao: "Auxiliar em petições, pesquisa jurídica e acompanhamento processual.",
    requisitos: "Boa redação e organização.",
    data: "2025-11-03",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 17,
    titulo: "Estágio em Arquitetura",
    empresa: "Studio Design",
    area: "Arquitetura",
    curso: "Arquitetura e Urbanismo",
    tipo: "Estágio",
    local: "Híbrido - Curitiba",
    descricao: "Auxiliar em projetos e modelagem 3D.",
    requisitos: "AutoCAD, SketchUp, Revit.",
    data: "2025-10-23",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 18,
    titulo: "Analista de Suprimentos",
    empresa: "Indústria Nova Era",
    area: "Logística",
    curso: "Administração",
    tipo: "Emprego",
    local: "Presencial - Manaus",
    descricao: "Gerenciar fornecedores e controlar estoque.",
    requisitos: "ERP, negociação, Excel.",
    data: "2025-10-29",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 19,
    titulo: "Programador Back-End",
    empresa: "CodeBase",
    area: "TI",
    curso: "Ciência da Computação",
    tipo: "Emprego",
    local: "Remoto",
    descricao: "Desenvolver APIs e integrações de sistemas.",
    requisitos: "Node.js, SQL, Git.",
    data: "2025-11-01",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 20,
    titulo: "Estágio em Psicologia Organizacional",
    empresa: "RH Conecta",
    area: "Recursos Humanos",
    curso: "Psicologia",
    tipo: "Estágio",
    local: "Presencial - Florianópolis",
    descricao: "Auxiliar em processos seletivos e entrevistas.",
    requisitos: "Empatia, escuta ativa.",
    data: "2025-10-27",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 21,
    titulo: "Analista de Segurança da Informação",
    empresa: "CyberTech",
    area: "TI",
    curso: "Segurança da Informação",
    tipo: "Emprego",
    local: "Híbrido - São Paulo",
    descricao: "Monitorar vulnerabilidades e aplicar políticas de segurança.",
    requisitos: "Firewall, ISO 27001, Linux.",
    data: "2025-11-02",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 22,
    titulo: "Estágio em Economia",
    empresa: "Banco Nacional",
    area: "Finanças",
    curso: "Economia",
    tipo: "Estágio",
    local: "Presencial - Brasília",
    descricao: "Auxiliar em relatórios de mercado e análise de dados econômicos.",
    requisitos: "Excel, estatística básica.",
    data: "2025-10-28",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 23,
    titulo: "Redator Publicitário",
    empresa: "Agência Impacto",
    area: "Comunicação",
    curso: "Publicidade e Propaganda",
    tipo: "Emprego",
    local: "Remoto",
    descricao: "Criação de textos publicitários para campanhas e redes sociais.",
    requisitos: "Criatividade, gramática impecável.",
    data: "2025-10-31",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 24,
    titulo: "Técnico em Informática",
    empresa: "InfoService",
    area: "TI",
    curso: "Informática",
    tipo: "Emprego",
    local: "Presencial - Goiânia",
    descricao: "Manutenção de computadores e suporte a usuários.",
    requisitos: "Hardware, redes, Windows.",
    data: "2025-10-22",
    status: "Encerrada",
    visualizacoes: 0
  },
  {
    id: 25,
    titulo: "Estágio em Produção Audiovisual",
    empresa: "CineLab",
    area: "Comunicação",
    curso: "Rádio, TV e Internet",
    tipo: "Estágio",
    local: "Híbrido - Recife",
    descricao: "Auxiliar em gravações e edições de vídeos institucionais.",
    requisitos: "Adobe Premiere, After Effects.",
    data: "2025-10-28",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 26,
    titulo: "Trainee em Engenharia Mecânica",
    empresa: "AutoParts Brasil",
    area: "Engenharia",
    curso: "Engenharia Mecânica",
    tipo: "Trainee",
    local: "Presencial - Joinville",
    descricao: "Participar de projetos de melhoria em processos industriais.",
    requisitos: "SolidWorks, Lean Manufacturing.",
    data: "2025-10-30",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 27,
    titulo: "Estágio em Contabilidade",
    empresa: "Contábil Mais",
    area: "Finanças",
    curso: "Ciências Contábeis",
    tipo: "Estágio",
    local: "Presencial - Fortaleza",
    descricao: "Auxiliar em lançamentos contábeis e conciliação bancária.",
    requisitos: "Noções fiscais e tributárias.",
    data: "2025-10-23",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 28,
    titulo: "Analista de Projetos",
    empresa: "InovaTech",
    area: "Gestão de Projetos",
    curso: "Engenharia de Produção",
    tipo: "Emprego",
    local: "Híbrido - São Paulo",
    descricao: "Planejar e acompanhar projetos de inovação tecnológica.",
    requisitos: "MS Project, metodologias ágeis.",
    data: "2025-11-01",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 29,
    titulo: "Estágio em Química Industrial",
    empresa: "Quimix",
    area: "Engenharia Química",
    curso: "Engenharia Química",
    tipo: "Estágio",
    local: "Presencial - Cubatão",
    descricao: "Auxiliar em testes laboratoriais e controle de qualidade.",
    requisitos: "Normas de segurança e boas práticas de laboratório.",
    data: "2025-10-26",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 30,
    titulo: "Desenvolvedor Mobile",
    empresa: "AppFactory",
    area: "TI",
    curso: "Engenharia de Software",
    tipo: "Emprego",
    local: "Remoto",
    descricao: "Desenvolver aplicativos Android e iOS.",
    requisitos: "Flutter, APIs REST, Git.",
    data: "2025-10-29",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 31,
    titulo: "Estágio em Relações Públicas",
    empresa: "Comunicart",
    area: "Comunicação",
    curso: "Relações Públicas",
    tipo: "Estágio",
    local: "Híbrido - Belo Horizonte",
    descricao: "Auxiliar na organização de eventos e relacionamento com a imprensa.",
    requisitos: "Boa comunicação e redação.",
    data: "2025-10-28",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 32,
    titulo: "Analista de E-commerce",
    empresa: "ShopFast",
    area: "Marketing",
    curso: "Administração ou Marketing",
    tipo: "Emprego",
    local: "Remoto",
    descricao: "Gerenciar produtos e campanhas em plataformas de e-commerce.",
    requisitos: "Google Analytics, SEO, Marketplace.",
    data: "2025-11-03",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 33,
    titulo: "Estágio em Agronomia",
    empresa: "AgroBrasil",
    area: "Agronomia",
    curso: "Agronomia",
    tipo: "Estágio",
    local: "Presencial - Campo Grande",
    descricao: "Acompanhar pesquisas e auxiliar na coleta de dados agrícolas.",
    requisitos: "CNH B, disponibilidade para viagens.",
    data: "2025-10-25",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 34,
    titulo: "Consultor Comercial",
    empresa: "Vendas Pro",
    area: "Comercial",
    curso: "Gestão Comercial",
    tipo: "Emprego",
    local: "Presencial - São Paulo",
    descricao: "Prospecção de clientes e fechamento de contratos.",
    requisitos: "Experiência em vendas B2B.",
    data: "2025-10-24",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 35,
    titulo: "Analista de UX/UI",
    empresa: "DesignUp",
    area: "Design",
    curso: "Design Digital",
    tipo: "Emprego",
    local: "Remoto",
    descricao: "Melhorar a experiência do usuário em plataformas digitais.",
    requisitos: "Figma, testes de usabilidade.",
    data: "2025-11-02",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 36,
    titulo: "Estágio em Estatística",
    empresa: "DataScience BR",
    area: "Estatística",
    curso: "Estatística",
    tipo: "Estágio",
    local: "Híbrido - São Paulo",
    descricao: "Auxiliar em modelagens estatísticas e análises preditivas.",
    requisitos: "R, Python, Excel.",
    data: "2025-10-29",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 37,
    titulo: "Técnico de Manutenção",
    empresa: "Indústria Forte",
    area: "Engenharia",
    curso: "Técnico em Mecânica",
    tipo: "Emprego",
    local: "Presencial - Camaçari",
    descricao: "Manutenção preventiva e corretiva de equipamentos.",
    requisitos: "Experiência com manutenção industrial.",
    data: "2025-10-21",
    status: "Encerrada",
    visualizacoes: 0
  },
  {
    id: 38,
    titulo: "Estágio em Letras - Revisão de Texto",
    empresa: "Editora Palavra",
    area: "Educação",
    curso: "Letras",
    tipo: "Estágio",
    local: "Remoto",
    descricao: "Auxiliar na revisão de livros e materiais didáticos.",
    requisitos: "Ortografia e gramática impecáveis.",
    data: "2025-10-30",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 39,
    titulo: "Analista Ambiental",
    empresa: "EcoPlan",
    area: "Meio Ambiente",
    curso: "Engenharia Ambiental",
    tipo: "Emprego",
    local: "Presencial - Belém",
    descricao: "Elaboração de relatórios e acompanhamento de licenças.",
    requisitos: "Legislação ambiental, geoprocessamento.",
    data: "2025-10-27",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 40,
    titulo: "Desenvolvedor Front-End",
    empresa: "WebStart",
    area: "TI",
    curso: "Sistemas para Internet",
    tipo: "Emprego",
    local: "Híbrido - São Paulo",
    descricao: "Desenvolver interfaces modernas e responsivas.",
    requisitos: "React, Tailwind, APIs REST.",
    data: "2025-11-04",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 41,
    titulo: "Estágio em Farmácia",
    empresa: "PharmaLife",
    area: "Saúde",
    curso: "Farmácia",
    tipo: "Estágio",
    local: "Presencial - Curitiba",
    descricao: "Apoiar no controle de estoque e manipulação de medicamentos.",
    requisitos: "Boas práticas de laboratório.",
    data: "2025-10-25",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 42,
    titulo: "Auxiliar de Produção",
    empresa: "Alimentos Boa Mesa",
    area: "Indústria",
    curso: "Ensino Médio",
    tipo: "Emprego",
    local: "Presencial - Porto Alegre",
    descricao: "Atuar na linha de produção de alimentos congelados.",
    requisitos: "Agilidade e atenção aos detalhes.",
    data: "2025-10-22",
    status: "Encerrada",
    visualizacoes: 0
  },
  {
    id: 43,
    titulo: "Gerente de Projetos",
    empresa: "GlobalTech",
    area: "Gestão de Projetos",
    curso: "Administração ou Engenharia",
    tipo: "Emprego",
    local: "Híbrido - São Paulo",
    descricao: "Gerenciar times e cronogramas de entrega de software.",
    requisitos: "Scrum, PMP, liderança.",
    data: "2025-11-02",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 44,
    titulo: "Estágio em Ciências Sociais",
    empresa: "Instituto Cidadania",
    area: "Pesquisas",
    curso: "Ciências Sociais",
    tipo: "Estágio",
    local: "Remoto",
    descricao: "Apoiar em projetos de pesquisa e análise de dados sociais.",
    requisitos: "Boa escrita e análise crítica.",
    data: "2025-10-29",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 45,
    titulo: "Analista de CRM",
    empresa: "MarketHub",
    area: "Marketing",
    curso: "Administração ou Marketing",
    tipo: "Emprego",
    local: "Remoto",
    descricao: "Gerenciar base de clientes e campanhas de fidelização.",
    requisitos: "Salesforce, comunicação.",
    data: "2025-10-31",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 46,
    titulo: "Estágio em Biologia",
    empresa: "BioNature",
    area: "Pesquisa",
    curso: "Biologia",
    tipo: "Estágio",
    local: "Presencial - Florianópolis",
    descricao: "Auxiliar em coletas e análises biológicas de campo.",
    requisitos: "Laboratório e estatística básica.",
    data: "2025-10-27",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 47,
    titulo: "Analista de Qualidade",
    empresa: "Indústria Pura",
    area: "Qualidade",
    curso: "Engenharia de Produção",
    tipo: "Emprego",
    local: "Presencial - Sorocaba",
    descricao: "Controle de qualidade e auditoria interna de processos.",
    requisitos: "ISO 9001, atenção aos detalhes.",
    data: "2025-10-28",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 48,
    titulo: "Assistente de Comunicação",
    empresa: "Agência Conecta",
    area: "Comunicação",
    curso: "Jornalismo",
    tipo: "Emprego",
    local: "Híbrido - Rio de Janeiro",
    descricao: "Produção de releases e apoio em redes sociais.",
    requisitos: "Boa escrita e domínio de redes sociais.",
    data: "2025-10-24",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 49,
    titulo: "Estágio em Estatística Aplicada à Saúde",
    empresa: "Instituto Saúde+",
    area: "Saúde",
    curso: "Estatística",
    tipo: "Estágio",
    local: "Remoto",
    descricao: "Analisar dados epidemiológicos e relatórios estatísticos.",
    requisitos: "Excel, R ou Python.",
    data: "2025-10-30",
    status: "Aberta",
    visualizacoes: 0
  },
  {
    id: 50,
    titulo: "Desenvolvedor Full Stack",
    empresa: "NextCode",
    area: "TI",
    curso: "Engenharia de Software",
    tipo: "Emprego",
    local: "Remoto",
    descricao: "Atuar no desenvolvimento completo de aplicações web.",
    requisitos: "React, Node.js, SQL, Git.",
    data: "2025-11-04",
    status: "Aberta",
    visualizacoes: 0
  }
];

function preencherFiltros() {
  const areas = [...new Set(vagas.map(v => v.area))].sort();
  const cursos = [...new Set(vagas.map(v => v.curso).filter(Boolean))].sort();

  const areaSelect = document.getElementById("filterArea");
  const cursoSelect = document.getElementById("filterCurso");

  // Limpa opções antigas
  areaSelect.innerHTML = '<option value="">Área</option>';
  cursoSelect.innerHTML = '<option value="">Curso</option>';

  // Preenche dinamicamente
  areas.forEach(area => {
    const opt = document.createElement("option");
    opt.value = area;
    opt.textContent = area;
    areaSelect.appendChild(opt);
  });

  cursos.forEach(curso => {
    const opt = document.createElement("option");
    opt.value = curso;
    opt.textContent = curso;
    cursoSelect.appendChild(opt);
  });
}

// Executa quando a página carregar
document.addEventListener("DOMContentLoaded", preencherFiltros);


let paginaAtual = 1;
const vagasPorPagina = 20;
// Seletores
const toggleCadastroBtn = document.querySelector("#toggleCadastro");
const tipoModal = document.querySelector("#tipoModal");
const formModal = document.querySelector("#formModal");
const closeTipo = document.querySelector(".close-tipo");
const closeForm = document.querySelector(".close-form");
const tipoBtns = document.querySelectorAll(".tipo-btn");

const formCadastroVaga = document.querySelector("#formCadastroVaga");
const cadTipoInput = document.querySelector("#cadTipoCadastro");
const campoCnpj = document.querySelector("#campoCnpj");
const campoLink = document.querySelector("#campoLink");


function qs(sel) { return document.querySelector(sel); }

/* ===== Exibir vagas com paginação ===== */
function exibirVagas(lista) {
  const container = qs("#vagaList");
container.innerHTML = ""; // limpa antes de adicionar novos

  const inicio = (paginaAtual - 1) * vagasPorPagina;
  const fim = inicio + vagasPorPagina;
  const vagasPagina = lista.slice(inicio, fim);

  if (vagasPagina.length === 0) {
    container.innerHTML = `<p>Nenhuma vaga encontrada.</p>`;
    gerarPaginacao(lista.length);
    return;
  }

  vagasPagina.forEach(vaga => {
    const card = document.createElement("div");
    card.className = "vaga-card";
    card.innerHTML = `
  <div class="vaga-cabecalho">
    <h3>${vaga.titulo}</h3>
    <p><strong>Empresa:</strong> ${vaga.empresa}</p>
    <p><strong>Área:</strong> ${vaga.area}</p>
    <p><strong>Tipo:</strong> ${vaga.tipo}</p>
    <p><strong>Status:</strong> ${vaga.status}</p>
    <button class="btn-detalhes" data-id="${vaga.id}">Ver detalhes</button>
  </div>
`;
    container.appendChild(card);
  });

  gerarPaginacao(lista.length);

  // adiciona evento nos botões "ver detalhes"
  document.querySelectorAll(".btn-detalhes").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      abrirDetalhes(id);
    });
  });
}

/* ===== Paginação ===== */
function gerarPaginacao(total) {
  const totalPaginas = Math.max(1, Math.ceil(total / vagasPorPagina));
  const pagContainer = qs("#pagination");
  pagContainer.innerHTML = "";

  for (let i = 1; i <= totalPaginas; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === paginaAtual) btn.classList.add("active");
    btn.addEventListener("click", () => {
      paginaAtual = i;
      aplicarFiltros();
    });
    pagContainer.appendChild(btn);
  }
}

/* ===== Filtros e ordenação ===== */
function aplicarFiltros() {
  const texto = (qs("#searchText")?.value || "").toLowerCase();
  const area = qs("#filterArea")?.value || "";
  const curso = qs("#filterCurso")?.value || "";
  const tipo = qs("#filterTipo")?.value || "";
  const status = qs("#filterStatus")?.value || "";
  const orderBy = qs("#orderBy")?.value || "data";

  let filtradas = vagas.filter(vaga => {
    const buscaTexto = (
      vaga.titulo.toLowerCase().includes(texto) ||
      vaga.descricao.toLowerCase().includes(texto) ||
      vaga.requisitos.toLowerCase().includes(texto)
    );
    const matchArea = !area || vaga.area === area;
    const matchCurso = !curso || vaga.curso === curso;
    const matchTipo = !tipo || vaga.tipo === tipo;
    const matchStatus = !status || vaga.status === status;
    return buscaTexto && matchArea && matchCurso && matchTipo && matchStatus;
  });

  if (orderBy === "data") {
    filtradas.sort((a,b) => new Date(b.data) - new Date(a.data));
  } else if (orderBy === "relevancia") {
    filtradas.sort((a,b) => (b.visualizacoes || 0) - (a.visualizacoes || 0));
  }

  const totalPaginas = Math.max(1, Math.ceil(filtradas.length / vagasPorPagina));
  if (paginaAtual > totalPaginas) paginaAtual = 1;

  exibirVagas(filtradas);
}

/* ===== Modal de detalhes ===== */
function abrirDetalhes(id) {
  const vaga = vagas.find(v => v.id === id);
  if (!vaga) return;

  vaga.visualizacoes = (vaga.visualizacoes || 0) + 1;

  const similares = vagas.filter(v => v.area === vaga.area && v.id !== vaga.id).slice(0, 3);

  const detalhes = qs("#vagaDetalhes");
  detalhes.innerHTML = `
    <h2>${vaga.titulo}</h2>
    <p><strong>Empresa:</strong> ${vaga.empresa}</p>
    <p><strong>Área:</strong> ${vaga.area}</p>
    <p><strong>Curso:</strong> ${vaga.curso}</p>
    <p><strong>Tipo:</strong> ${vaga.tipo}</p>
    <p><strong>Local:</strong> ${vaga.local}</p>
    <p><strong>Data de publicação:</strong> ${vaga.data}</p>
    <p><strong>Status:</strong> ${vaga.status}</p>
    <p><strong>Visualizações:</strong> ${vaga.visualizacoes}</p>
    <hr/>
    <p>${vaga.descricao}</p>
    <p><strong>Requisitos:</strong> ${vaga.requisitos}</p>
    <div style="margin-top:10px">
      <button id="btnCand" data-id="${vaga.id}">Candidatar-se</button>
    </div>
    <h3 style="margin-top:12px">Vagas similares</h3>
    ${similares.length ? '<ul>' + similares.map(s => `<li>${s.titulo} - ${s.empresa}</li>`).join("") + '</ul>' : '<p>Nenhuma similar encontrada.</p>'}
  `;

  abrirModal("#vagaModal");

  // botão dentro do modal
  const btnCand = qs("#btnCand");
  btnCand.addEventListener("click", () => abrirFormularioCandidatura(vaga.id));
}

/* ===== Modais ===== */
function abrirModal(sel) {
  const modal = qs(sel);
  modal?.setAttribute("aria-hidden", "false");
}

function fecharModal(sel) {
  const modal = qs(sel);
  modal?.setAttribute("aria-hidden", "true");
}

/* ===== Candidatura ===== */
let vagaSelecionada = null;

function abrirFormularioCandidatura(vagaId) {
  vagaSelecionada = vagas.find(v => v.id === vagaId);
  if (!vagaSelecionada) return;
  qs("#candMsg").textContent = "";
  qs("#formCandidatura").reset();
  abrirModal("#candidaturaModal");
}

const formCand = qs("#formCandidatura");
if (formCand) {
  formCand.addEventListener("submit", e => {
    e.preventDefault();
    const nome = qs("#candNome").value.trim();
    const email = qs("#candEmail").value.trim();
    const arquivo = qs("#candArquivo").files[0];
    if (!nome || !email || !arquivo) {
      alert("Preencha todos os campos e anexe o currículo.");
      return;
    }
    if (arquivo.type !== "application/pdf") {
      alert("Envie um arquivo PDF.");
      return;
    }
    qs("#candMsg").textContent = `✅ Candidatura enviada com sucesso para "${vagaSelecionada.titulo}"!`;
    setTimeout(() => fecharModal("#candidaturaModal"), 2000);
  });
}

/* ===== Fechar modais ===== */
qs(".close")?.addEventListener("click", () => fecharModal("#vagaModal"));
qs(".close-cand")?.addEventListener("click", () => fecharModal("#candidaturaModal"));

window.addEventListener("click", e => {
  if (e.target.id === "vagaModal") fecharModal("#vagaModal");
  if (e.target.id === "candidaturaModal") fecharModal("#candidaturaModal");
});

/* ===== Botão aplicar filtros ===== */
qs("#applyFilters")?.addEventListener("click", () => {
  paginaAtual = 1;
  aplicarFiltros();
});

/* ===== Inicialização ===== */
document.addEventListener("DOMContentLoaded", () => {
  aplicarFiltros();

  const cnpjInput = document.querySelector("#cadCnpj");
  if (cnpjInput) {
    IMask(cnpjInput, {
      mask: "00.000.000/0000-00"
    });
  }
});

qs("#toggleFiltros")?.addEventListener("click", () => {
  const filtros = qs("#filtrosContainer");
  filtros.classList.toggle("oculto");
});

// Abrir modal de escolha
toggleCadastroBtn.addEventListener("click", () => {
  tipoModal.setAttribute("aria-hidden", "false");
});

// Fechar modal de escolha
closeTipo.addEventListener("click", () => tipoModal.setAttribute("aria-hidden", "true"));

// Fechar modal de formulário
closeForm.addEventListener("click", () => formModal.setAttribute("aria-hidden", "true"));

// Fechar clicando fora
window.addEventListener("click", e => {
  if (e.target === tipoModal) tipoModal.setAttribute("aria-hidden", "true");
  if (e.target === formModal) formModal.setAttribute("aria-hidden", "true");
});


// Escolha do tipo e abrir modal de formulário
tipoBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const tipo = btn.dataset.tipo;
    cadTipoInput.value = tipo;;

    // Mostrar ou ocultar campos usando classe 'oculto'
    if (tipo === "empresa") {
  campoCnpj.classList.remove("oculto");
  campoLink.classList.remove("oculto");
} else {
      campoCnpj.classList.add("oculto");
      campoLink.classList.add("oculto");
    }

    // Fechar modal de escolha e abrir modal de formulário
    tipoModal.setAttribute("aria-hidden", "true");
    formModal.setAttribute("aria-hidden", "false");
  });
});

// Submit do formulário
formCadastroVaga.addEventListener("submit", e => {
  const tipoCadastro = cadTipoInput.value;
const cnpj = qs("#cadCnpj").value.trim();

if (tipoCadastro === "empresa" && !validarCNPJ(cnpj)) {
  alert("Esse CNPJ não é válido");
  return;
}
  e.preventDefault();
  alert(`Vaga cadastrada com sucesso como ${cadTipoInput.value}!`);
  formCadastroVaga.reset();
  campoCnpj.classList.add("oculto");
  campoLink.classList.add("oculto");
  formModal.setAttribute("aria-hidden", "true");
});

// Criar nova vaga com dados do formulário
const novaVaga = {
  id: vagas.length + 1,
  titulo: qs("#cadTitulo").value.trim(),
  empresa: qs("#cadEmpresa")?.value.trim() || "Empresa cadastrada", // ou outro campo se quiser adicionar
  area: qs("#cadArea").value.trim(),
  curso: qs("#cadCurso").value.trim(),
  tipo: qs("#cadTipo").value,
  local: qs("#cadLocal").value.trim(),
  descricao: qs("#cadDescricao").value.trim(),
  requisitos: qs("#cadRequisitos").value.trim(),
  data: qs("#cadData").value,
  status: qs("#cadStatus").value,
  visualizacoes: 0
};

vagas.push(novaVaga); // adiciona ao array
aplicarFiltros();     // atualiza a exibição

function validarCNPJ(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g, '');

  if (cnpj.length !== 14) return false;

  // Elimina CNPJs com todos os dígitos iguais
  if (/^(\d)\1+$/.test(cnpj)) return false;

  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }

  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(0)) return false;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }

  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(1)) return false;

  return true;
}