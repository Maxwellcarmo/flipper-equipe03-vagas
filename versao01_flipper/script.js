// --- DADOS DETALHADOS DAS VAGAS (JSON) ---
const vagasDetalhes = {
    'vaga-01': {
        empresa: 'Unimed',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Unimed_logo.png',
        titulo: 'Enfermeiro(a) Regulador(a) - Hospital Unimed Uberlândia',
        publicada: '23/09/2025',
        local: 'São Paulo - SP',
        modalidade: 'Presencial',
        contrato: 'Efetivo (CLT)',
        salario: 'Salário a Negociar',
        descricao: 'Monitorar e avaliar a elegibilidade e adequação dos serviços de saúde prestados, garantindo a qualidade e o uso eficiente dos recursos. Atuação primária em regulação de internações e procedimentos de alta complexidade.',
        requisitos: ['Graduação completa em Enfermagem', 'Experiência prévia em Auditoria ou Regulação de Contas Médicas', 'Registro ativo no COREN'],
        beneficios: 'Plano de Saúde Integral, Vale Refeição (R$ 40/dia), Auxílio Creche, Participação nos Lucros (PLR) anual.'
    },
    'vaga-02': {
        empresa: 'Nubank',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Nubank_logo_2021.svg',
        titulo: 'Analista de Dados Júnior - São Paulo',
        publicada: '20/09/2025',
        local: 'São Paulo - SP',
        modalidade: 'Híbrido',
        contrato: 'PJ',
        salario: 'R$ 4.000,00 - R$ 6.000,00',
        descricao: 'Coleta, limpeza e análise de grandes volumes de dados transacionais para gerar insights para as áreas de Produto e Risco. Criação de dashboards em ferramentas de BI (Tableau/Power BI).',
        requisitos: ['Conhecimento sólido em SQL', 'Proficiência em Python ou R para análise de dados', 'Familiaridade com conceitos de estatística básica'],
        beneficios: 'Flexibilidade de horário, Bônus por performance, Verba anual de desenvolvimento profissional, Ambiente descontraído.'
    },
    'vaga-03': {
        empresa: 'Tech Solutions Global',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/W3C_logo_for_blue_background.svg/1200px-W3C_logo_for_blue_background.svg.png',
        titulo: 'Desenvolvedor Backend Sênior (Node.js)',
        publicada: '19/09/2025',
        local: 'Qualquer lugar (Global)',
        modalidade: 'Remoto',
        contrato: 'PJ',
        salario: 'US$ 5.000 - US$ 8.000 (mensal)',
        descricao: 'Desenvolvimento e manutenção de APIs de alta performance utilizando Node.js e TypeScript. Colaborar na arquitetura de microsserviços e integração com serviços de nuvem (AWS/Azure).',
        requisitos: ['5+ anos de experiência com desenvolvimento Backend', 'Experiência avançada em Node.js e Express/NestJS', 'Conhecimento em Docker, Kubernetes e CI/CD'],
        beneficios: 'Contrato em Dólar, 30 dias de férias remuneradas, Horário 100% flexível, Equipamento de trabalho fornecido.'
    },
    'vaga-04': {
        empresa: 'Agência Criativa',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Creative_Commons_logo_black.svg/1200px-Creative_Commons_logo_black.svg.png',
        titulo: 'Designer Gráfico Pleno - Campanhas Publicitárias',
        publicada: '25/09/2025',
        local: 'Belo Horizonte - MG',
        modalidade: 'Presencial',
        contrato: 'Efetivo (CLT)',
        salario: 'R$ 3.800,00 - R$ 5.200,00',
        descricao: 'Criação de peças gráficas para mídias online e offline, garantindo a consistência visual da marca. Trabalho próximo à equipe de marketing em campanhas de lançamento.',
        requisitos: ['Domínio do Pacote Adobe (Photoshop, Illustrator, InDesign)', 'Portfólio robusto com foco em publicidade', 'Familiaridade com princípios de UX/UI (diferencial)'],
        beneficios: 'Vale Transporte, Vale Alimentação (R$ 800), Convênio Odontológico e Gympass.'
    },
    'vaga-05': {
        empresa: 'Indústrias Forte',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Rede_Globo_logo.svg/1200px-Rede_Globo_logo.svg.png',
        titulo: 'Gerente de Projetos - Produção Industrial',
        publicada: '26/09/2025',
        local: 'Campinas - SP',
        modalidade: 'Híbrido (3x/semana)',
        contrato: 'Efetivo (CLT)',
        salario: 'A partir de R$ 9.000,00',
        descricao: 'Gerenciar projetos de melhoria contínua e expansão da linha de produção. Responsável pelo cronograma, orçamento e comunicação com stakeholders.',
        requisitos: ['Experiência comprovada em gestão de projetos industriais', 'Certificação PMP ou Scrum Master (obrigatório)', 'Formação em Engenharia de Produção ou áreas correlatas'],
        beneficios: 'Bônus semestral baseado em metas, Previdência Privada, Veículo corporativo (uso misto).'
    },
    'vaga-06': {
        empresa: 'Cloud Services',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Google_Cloud_logo.svg/200px-Google_Cloud_logo.svg.png',
        titulo: 'Estágio em Engenharia de Software',
        publicada: '01/10/2025',
        local: 'São José dos Campos - SP',
        modalidade: 'Presencial',
        contrato: 'Estágio',
        salario: 'Bolsa R$ 1.800,00 + Benefícios',
        descricao: 'Oportunidade para estudantes de Engenharia/Ciência da Computação que desejam atuar no desenvolvimento de sistemas em nuvem. Participação em sprints ágeis e pareamento com devs seniores.',
        requisitos: ['Estar cursando a partir do 4º semestre de Computação ou similar', 'Lógica de programação avançada (qualquer linguagem)', 'Disponibilidade para 30 horas semanais presenciais'],
        beneficios: 'Horário flexível, Auxílio transporte, Vale Refeição (R$ 35/dia), Mentoria especializada.'
    },
    'vaga-07': {
        empresa: 'Ambev Digital',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Ambev_Logo.svg/2560px-Ambev_Logo.svg.png',
        titulo: 'Analista de Suporte ao Cliente (Nível I)',
        publicada: '02/10/2025',
        local: 'Brasil',
        modalidade: '100% Remoto',
        contrato: 'Efetivo (CLT)',
        salario: 'R$ 3.000,00',
        descricao: 'Atendimento e resolução de problemas técnicos e não-técnicos de clientes via chat, telefone e e-mail. Atuação em escala 6x1. Foco em excelência no serviço.',
        requisitos: ['Excelente comunicação verbal e escrita', 'Experiência prévia em call center ou suporte ao cliente (6 meses+)', 'Conhecimento em ferramentas de ticketing (Zendesk/Freshdesk)'],
        beneficios: 'Ajuda de custo para Home Office (R$ 150), Cesta de benefícios (VT, VR, Plano Saúde), Seguro de Vida.'
    }
};

// Elementos globais
const ulListaVagas = document.getElementById('lista-vagas-ul');
const inputBusca = document.getElementById('busca-vagas');
const vagasNaoEncontradas = document.getElementById('vagas-nao-encontradas');
const LOCAL_STORAGE_KEY = 'flipper_vagas_favoritas';

// Estado global dos filtros
const estadoFiltros = {
    busca: '',
    modalidade: 'todos',
    contrato: 'todos'
};


// --- FUNÇÕES AUXILIARES ---

/**
 * Retorna a classe CSS correta e o ícone prefixado para a tag de modalidade/contrato.
 * Retorna um objeto { classe, icone }.
 */
function getTagInfo(texto, tipo) {
    texto = texto.toLowerCase();
    let classe = '';
    let icone = '';

    if (tipo === 'modalidade') {
        if (texto.includes('presencial')) { classe = 'tag-presencial'; icone = '🏢'; }
        else if (texto.includes('híbrido')) { classe = 'tag-hibrido'; icone = '🔄'; }
        else if (texto.includes('remoto')) { classe = 'tag-remoto'; icone = '🏠'; }
        else { classe = 'tag-default'; icone = '📌'; } 
    } else if (tipo === 'contrato') {
        if (texto.includes('clt') || texto.includes('efetivo')) { classe = 'tag-clt'; icone = '✅'; }
        else if (texto.includes('pj')) { classe = 'tag-pj'; icone = '💼'; }
        else if (texto.includes('estágio')) { classe = 'tag-estagio'; icone = '🎓'; }
        else { classe = 'tag-default'; icone = '⚙️'; }
    }
    return { classe, icone };
}

function getFavoritos() {
    const favoritos = localStorage.getItem(LOCAL_STORAGE_KEY);
    return favoritos ? JSON.parse(favoritos) : [];
}

function setFavoritos(favoritos) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favoritos));
}

function toggleFavorito(icone, vagaId) {
    let favoritos = getFavoritos();
    const index = favoritos.indexOf(vagaId);
    const isFavorito = index > -1;

    if (isFavorito) {
        favoritos.splice(index, 1);
        icone.classList.remove('favorito');
    } else {
        favoritos.push(vagaId);
        icone.classList.add('favorito');
    }

    setFavoritos(favoritos);
}

// --- FUNÇÃO PRINCIPAL: RENDERIZAÇÃO E FILTRAGEM ---

function renderizarCards(dados) {
    ulListaVagas.innerHTML = '';
    const favoritos = getFavoritos();
    let cardsVisiveis = 0;

    Object.keys(dados).forEach(vagaId => {
        const vaga = dados[vagaId];
        const isFavorito = favoritos.includes(vagaId);
        const favoritoClass = isFavorito ? ' favorito' : '';
        
        // Aplica o Filtro de Busca (Texto)
        const conteudoCard = (vaga.titulo + ' ' + vaga.empresa + ' ' + vaga.local).toLowerCase();
        const textoPassa = conteudoCard.includes(estadoFiltros.busca);

        // Aplica o Filtro de Modalidade
        const modalidadeVaga = vaga.modalidade.toLowerCase().includes('híbrido') ? 'hibrido' : vaga.modalidade.toLowerCase();
        const modalidadePassa = estadoFiltros.modalidade === 'todos' || modalidadeVaga.includes(estadoFiltros.modalidade);

        // Aplica o Filtro de Contrato
        const contratoVaga = vaga.contrato.toLowerCase();
        const contratoPassa = estadoFiltros.contrato === 'todos' || contratoVaga.includes(estadoFiltros.contrato);

        // Verifica se a vaga passa em TODOS os filtros
        if (textoPassa && modalidadePassa && contratoPassa) {
            cardsVisiveis++;
            
            // --- NOVO: Obtém as informações de tag com ícone ---
            const modalidadeInfo = getTagInfo(vaga.modalidade, 'modalidade');
            const contratoInfo = getTagInfo(vaga.contrato, 'contrato');

            // Constrói o HTML do Card (Apenas se passar nos filtros)
            const cardHTML = `
                <li data-vaga-id="${vagaId}">
                    <a class="card-vaga">
                        <div class="topo-card">
                            <div class="empresa-info">
                                <img
                                    src="${vaga.logo}"
                                    alt="Logo ${vaga.empresa}"
                                    class="logo-empresa"
                                />
                                <h3>${vaga.empresa}</h3>
                            </div>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
                                alt="Favoritar"
                                class="icone-favorito${favoritoClass}"
                            />
                        </div>

                        <h4>${vaga.titulo}</h4>

                        <div class="detalhes-vaga">
                            <div class="detalhe-item">📍 ${vaga.local}</div>
                            <div class="detalhe-item">
                                <span class="tag-vaga ${modalidadeInfo.classe}">
                                    ${modalidadeInfo.icone} ${vaga.modalidade}
                                </span>
                            </div>
                            <div class="detalhe-item">
                                <span class="tag-vaga ${contratoInfo.classe}">
                                    ${contratoInfo.icone} ${vaga.contrato}
                                </span>
                            </div>
                            <div class="detalhe-item">💰 ${vaga.salario}</div>
                        </div>

                        <p class="publicada">Publicada em: ${vaga.publicada}</p>
                    </a>
                </li>
            `;

            ulListaVagas.insertAdjacentHTML('beforeend', cardHTML);
        }
    });
    
    // Atualiza a mensagem de não encontrado
    vagasNaoEncontradas.style.display = cardsVisiveis === 0 ? 'block' : 'none';

    // Re-adiciona os listeners aos novos elementos criados
    adicionarListenersAosCards();
}


// --- LÓGICA DE FILTROS AVANÇADOS ---

function aplicarFiltroAvancado(event) {
    const btn = event.target;
    if (!btn.classList.contains('btn-filtro')) return;

    const tipoFiltro = btn.dataset.filterType; 
    const valorFiltro = btn.dataset.filterValue; 

    // 1. Atualiza o estado global
    estadoFiltros[tipoFiltro] = valorFiltro;

    // 2. Remove a classe 'active' de todos os botões do mesmo grupo
    document.querySelectorAll(`.btn-filtro[data-filter-type="${tipoFiltro}"]`).forEach(b => {
        b.classList.remove('active');
    });

    // 3. Adiciona a classe 'active' ao botão clicado
    btn.classList.add('active');

    // 4. Re-renderiza os cards com os novos filtros
    renderizarCards(vagasDetalhes);
}

// Listener para a busca por texto (atualizado para usar o estado global)
inputBusca.addEventListener('keyup', function() {
    estadoFiltros.busca = inputBusca.value.toLowerCase().trim();
    renderizarCards(vagasDetalhes);
});

// Listener para os botões de filtro
document.querySelector('.filtros-avancados').addEventListener('click', aplicarFiltroAvancado);


// --- LISTENERS DE INTERAÇÃO (Modal e Favorito) ---

function adicionarListenersAosCards() {
    // Listener para Favoritar
    document.querySelectorAll('.icone-favorito').forEach(icone => {
        icone.addEventListener('click', function(event) {
            event.preventDefault(); 
            event.stopPropagation();
            
            const li = icone.closest('li[data-vaga-id]');
            const vagaId = li.getAttribute('data-vaga-id');
            
            if (vagaId) {
                toggleFavorito(icone, vagaId);
            }
        });
    });

    // Listener para Abrir Modal
    document.querySelectorAll('.card-vaga').forEach(card => {
        card.addEventListener('click', function() {
            const li = card.closest('li[data-vaga-id]');
            const vagaId = li.getAttribute('data-vaga-id');
            abrirModal(vagaId);
        });
    });
}

// --- FUNÇÕES DO MODAL ---

const modalBackdrop = document.getElementById('modal-vaga');
const modalCloseBtn = document.getElementById('modal-close-btn');

function criarTagHtmlModal(texto, tipo) {
    const info = getTagInfo(texto, tipo); // Usa a função nova
    return `<span class="tag-vaga ${info.classe}">${info.icone} ${texto.toUpperCase()}</span>`;
}

function abrirModal(vagaId) {
    const dados = vagasDetalhes[vagaId];
    if (!dados) return;

    document.getElementById('modal-titulo').textContent = dados.titulo;

    const modalTags = document.getElementById('modal-tags');
    modalTags.innerHTML = `
        <span class="tag-vaga tag-local">📍 ${dados.local}</span>
        ${criarTagHtmlModal(dados.modalidade, 'modalidade')}
        ${criarTagHtmlModal(dados.contrato, 'contrato')}
        <span class="tag-vaga tag-salario">💰 ${dados.salario}</span>
    `;

    document.getElementById('modal-descricao').textContent = dados.descricao;

    const ulRequisitos = document.getElementById('modal-requisitos');
    ulRequisitos.innerHTML = dados.requisitos.map(req => `<li>${req}</li>`).join('');

    document.getElementById('modal-beneficios').textContent = dados.beneficios;
    
    const btnCandidatar = document.querySelector('.modal-botao-candidatar');
    btnCandidatar.href = `https://exemplo.com/candidatar/${vagaId}`;
    
    modalBackdrop.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
}

function fecharModal() {
    modalBackdrop.style.display = 'none';
    document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', fecharModal);

modalBackdrop.addEventListener('click', function(event) {
    if (event.target === modalBackdrop) {
        fecharModal();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && modalBackdrop.style.display === 'flex') {
        fecharModal();
    }
});

// --- INICIALIZAÇÃO ---

document.addEventListener('DOMContentLoaded', () => {
    // Renderiza todos os cards com os filtros iniciais ('todos')
    renderizarCards(vagasDetalhes); 
});

// Botão Voltar (Corrigido)
document.getElementById('btn-voltar').addEventListener('click', function(event) {
    event.preventDefault();
    history.back();
});