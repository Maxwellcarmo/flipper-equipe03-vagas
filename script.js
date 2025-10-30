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
  }
];

let paginaAtual = 1;
const vagasPorPagina = 2;

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
});
