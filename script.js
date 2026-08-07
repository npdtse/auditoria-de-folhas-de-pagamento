/* ==========================================================================
   === [CAPÍTULO] CONFIGURAÇÃO E BASE DE DADOS ===
   ========================================================================== */

/* --- [Seção] Constante da Tabela Remuneratória de Janeiro/2026 --- */
const TABELA_REMUNERATORIA = {
    "ANALISTA JUDICIARIO": [
        { classe: "C", padrao: 13, vencimento: 9292.14, gaj: 13009.00 },
        { classe: "C", padrao: 12, vencimento: 9021.50, gaj: 12630.10 },
        { classe: "C", padrao: 11, vencimento: 8758.73, gaj: 12262.22 },
        { classe: "B", padrao: 10, vencimento: 8503.62, gaj: 11905.07 },
        { classe: "B", padrao: 9,  vencimento: 8255.95, gaj: 11558.33 },
        { classe: "B", padrao: 8,  vencimento: 7810.73, gaj: 10935.02 },
        { classe: "B", padrao: 7,  vencimento: 7583.23, gaj: 10616.52 },
        { classe: "B", padrao: 6,  vencimento: 7362.37, gaj: 10307.32 },
        { classe: "A", padrao: 5,  vencimento: 7147.92, gaj: 10007.09 },
        { classe: "A", padrao: 4,  vencimento: 6939.75, gaj: 9715.65 },
        { classe: "A", padrao: 3,  vencimento: 6565.50, gaj: 9191.70 },
        { classe: "A", padrao: 2,  vencimento: 6374.26, gaj: 8923.96 },
        { classe: "A", padrao: 1,  vencimento: 6188.61, gaj: 8664.05 }
    ],
    "TECNICO JUDICIARIO": [
        { classe: "C", padrao: 13, vencimento: 5663.47, gaj: 7928.86 },
        { classe: "C", padrao: 12, vencimento: 5498.51, gaj: 7697.91 },
        { classe: "C", padrao: 11, vencimento: 5338.36, gaj: 7473.70 },
        { classe: "B", padrao: 10, vencimento: 5182.88, gaj: 7256.03 },
        { classe: "B", padrao: 9,  vencimento: 5031.90, gaj: 7044.66 },
        { classe: "B", padrao: 8,  vencimento: 4760.56, gaj: 6664.78 },
        { classe: "B", padrao: 7,  vencimento: 4621.90, gaj: 6470.66 },
        { classe: "B", padrao: 6,  vencimento: 4487.29, gaj: 6282.21 },
        { classe: "A", padrao: 5,  vencimento: 4356.59, gaj: 6099.23 },
        { classe: "A", padrao: 4,  vencimento: 4229.69, gaj: 5921.57 },
        { classe: "A", padrao: 3,  vencimento: 4001.60, gaj: 5602.24 },
        { classe: "A", padrao: 2,  vencimento: 3885.06, gaj: 5439.08 },
        { classe: "A", padrao: 1,  vencimento: 3771.88, gaj: 5280.63 }
    ]
};

/* --- [Seção] Códigos de Rubricas Mapeados --- */
const RUBRICA_VENCIMENTO = "1001";
const RUBRICA_GAJ = "2001";
const RUBRICA_GAS = "2002"; 

/* --- [Seção] Constantes do Teto Constitucional e Legislação --- */
const TETO_CONSTITUCIONAL_STF = 46366.19; // Subsídio mensal de Ministro do STF (Lei nº 14.520/2023)
const VALOR_REFERENCIA_AQ = 714.40;       // Valor de Referência unificado de AQ (Lei nº 15.292/2025)

/* --- [Seção] Rol de Rubricas Indenizatórias e Benefícios Excluídos do Teto --- */
const RUBRICAS_EXCLUIDAS_TETO = [
    "85001", // Auxílio-Alimentação
    "85002", // Auxílio-Saúde
    "85003", // Assistência Pré-Escolar
    "85004", // Auxílio-Natalidade
    "85005", // Auxílio-Transporte
    "85006", // Ajuda de Custo
    "85007"  // Diárias
];

/* --- [Seção] Armazenamento de Estado Local (App Store) --- */
const AppState = {
    rawRecords: [],          // Registros brutos lidos
    pivotedServers: {},      // Servidores agrupados em memória
    auditFindings: [],       // Lista de auditoria e conclusões
    filteredFindings: [],    // Conclusões filtradas (ativas para tabela)
    isProcessing: false,     // Semáforo concorrente
    chartInstance: null,     // Instância ativa do Chart.js
    
    // Paginação
    currentPage: 1,
    itemsPerPage: 25,
    filterOnlyErrors: true   // Padrão de visualização
};

/* ==========================================================================
   === [CAPÍTULO] INICIALIZAÇÃO E CICLO DE VIDA ===
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initAppNavigation();
    initThemeManager();
    initDropzoneHandlers();
    initProcessControl();
    initProcessReset();

    // Redirecionamento forçado para a aba de carga de dados na inicialização
    switchView("tab-dashboard");
});

/* ==========================================================================
   === [CAPÍTULO] NAVEGAÇÃO E SPA ===
   ========================================================================== */

function switchView(targetTabId) {
    const viewMap = {
        "tab-dashboard": "view-dashboard",
        "tab-auditoria": "view-auditoria",
        "tab-criterios": "view-criterios"
    };

    const targetViewId = viewMap[targetTabId];
    if (!targetViewId) return;

    document.querySelectorAll(".sidebar__menu-item").forEach(item => {
        item.classList.remove("sidebar__menu-item--active");
    });
    const clickedTab = document.getElementById(targetTabId);
    if (clickedTab) clickedTab.classList.add("sidebar__menu-item--active");

    document.querySelectorAll(".spa-view").forEach(view => {
        view.classList.remove("spa-view--active");
        view.style.display = "none";
        view.style.opacity = "0";
    });

    const activeView = document.getElementById(targetViewId);
    if (activeView) {
        activeView.style.display = "block";
        activeView.classList.add("spa-view--active");

        gsap.fromTo(activeView, 
            { opacity: 0, y: 10 }, 
            { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
        );
    }

    const scrollContainer = document.getElementById("main-scroll-area");
    if (scrollContainer) scrollContainer.scrollTop = 0;
    window.scrollTo(0, 0);
}

function initAppNavigation() {
    document.querySelectorAll(".sidebar__menu-item").forEach(tab => {
        tab.addEventListener("click", (e) => {
            const tabId = e.currentTarget.id;
            if (tabId === "tab-auditoria" && AppState.auditFindings.length === 0) {
                Swal.fire({
                    icon: "info",
                    title: "Aba Bloqueada",
                    text: "Faça o upload da folha e execute o diagnóstico de desvios primeiro.",
                    confirmButtonColor: "var(--primary)"
                });
                return;
            }
            switchView(tabId);
        });
        tab.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const tabId = e.currentTarget.id;
                if (tabId === "tab-auditoria" && AppState.auditFindings.length === 0) return;
                switchView(tabId);
            }
        });
    });
}

function initThemeManager() {
    const themeBtn = document.getElementById("theme-toggle-btn");
    themeBtn.addEventListener("click", () => {
        const htmlNode = document.documentElement;
        const currentTheme = htmlNode.getAttribute("data-theme");
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        
        htmlNode.setAttribute("data-theme", nextTheme);
        
        const icon = themeBtn.querySelector("i");
        const label = themeBtn.querySelector(".sidebar__menu-label");
        
        if (nextTheme === "dark") {
            icon.className = "fa-solid fa-sun";
            if (label) label.textContent = "Modo Claro";
        } else {
            icon.className = "fa-solid fa-moon";
            if (label) label.textContent = "Modo Escuro";
        }

        if (AppState.auditFindings.length > 0) {
            const conforming = AppState.auditFindings.filter(f => f.status !== "DIVERGENTE").length;
            const errors = AppState.auditFindings.filter(f => f.status === "DIVERGENTE").length;
            renderComplianceChart(conforming, errors);
        }
    });
}

/* ==========================================================================
   === [CAPÍTULO] PROCESSAMENTO E INGESTÃO PROGRESSIVA ===
   ========================================================================== */

function initDropzoneHandlers() {
    const dropzone = document.getElementById("file-dropzone");
    const fileInput = document.getElementById("file-input-raw");

    if (!dropzone || !fileInput) return;

    ["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
        dropzone.addEventListener(eventName, e => e.preventDefault(), false);
    });

    ["dragenter", "dragover"].forEach(eventName => {
        dropzone.addEventListener(eventName, () => dropzone.classList.add("dropzone--dragover"), false);
    });

    ["dragleave", "drop"].forEach(eventName => {
        dropzone.addEventListener(eventName, () => dropzone.classList.remove("dropzone--dragover"), false);
    });

    dropzone.addEventListener("drop", e => {
        const files = e.dataTransfer.files;
        if (files.length > 0) handleRawFileLoad(files[0]);
    });

    dropzone.addEventListener("click", () => fileInput.click());

    fileInput.addEventListener("change", e => {
        if (e.target.files.length > 0) handleRawFileLoad(e.target.files[0]);
    });
}

function normalizeHeaderName(str) {
    if (!str) return "";
    return str.toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, " ")
        .trim()
        .replace(/\s+/g, "_");
}

function runVisualLoadingProgress(callback) {
    const dropzone = document.getElementById("file-dropzone");
    if (!dropzone) return;

    let loader = document.getElementById("upload-loading-panel");
    if (!loader) {
        loader = document.createElement("div");
        loader.id = "upload-loading-panel";
        loader.className = "upload-loading";
        loader.style.display = "none";
        loader.innerHTML = `
            <div class="upload-loading__spinner">
                <i class="fa-solid fa-circle-notch fa-spin" style="font-size: 48px; color: var(--primary);"></i>
            </div>
            <h4 class="upload-loading__title">Processando Planilha da Folha...</h4>
            <p class="upload-loading__status" id="loading-status-text">Inicializando sandbox local de alto desempenho...</p>
        `;
        dropzone.parentNode.appendChild(loader);
    }
    
    const statusText = document.getElementById("loading-status-text");

    gsap.to(dropzone, { opacity: 0, y: -10, duration: 0.15, onComplete: () => {
        dropzone.style.display = "none";
        loader.style.display = "flex";
        loader.style.opacity = "0";
        gsap.to(loader, { opacity: 1, y: 0, duration: 0.15 });
    }});

    const steps = [
        { delay: 300, text: "Lendo linhas locais em memória temporária..." },
        { delay: 800, text: "Buscando correspondências aproximadas de cabeçalhos..." },
        { delay: 1400, text: "Normalizando rubricas por servidor (Mapeando ativos de interesse)..." },
        { delay: 1900, text: "Pivotagem estrutural concluída na Sandbox!" }
    ];

    steps.forEach(step => {
        setTimeout(() => {
            if (statusText) statusText.textContent = step.text;
        }, step.delay);
    });

    setTimeout(() => {
        callback();
    }, 2200);
}

function handleRawFileLoad(file) {
    if (AppState.isProcessing) return;
    
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (fileExtension === "xlsx" || fileExtension === "xls") {
        AppState.isProcessing = true;
        runVisualLoadingProgress(() => {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = new Uint8Array(e.target.result);
                    const workbook = XLSX.read(data, { type: 'array' });
                    const firstSheetName = workbook.SheetNames[0];
                    const worksheet = workbook.Sheets[firstSheetName];
                    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                    
                    parseMatrixData(jsonData);
                } catch (err) {
                    Swal.fire("Erro de Ingestão", "O arquivo Excel está corrompido ou inacessível.", "error");
                    resetFileUIPanel();
                }
            };
            reader.readAsArrayBuffer(file);
        });
    } else {
        Swal.fire({
            title: "Configuração do Arquivo",
            html: `
                <p style="font-size: 14.5px; color: var(--text2); margin-bottom: 24px; line-height: 1.4;">
                    Como as colunas do seu arquivo de texto plano estão separadas? Selecione a opção correspondente:
                </p>
                <div style="display: flex; flex-direction: column; gap: 10px; max-width: 360px; margin: 0 auto;">
                    <button class="btn btn--secondary btn-delim-choice" data-delim="#" style="justify-content: flex-start; padding: 12px 20px;"><i class="fa-solid fa-hashtag" style="color: var(--primary); margin-right: 12px;"></i> Hashtag (#)</button>
                    <button class="btn btn--secondary btn-delim-choice" data-delim=";" style="justify-content: flex-start; padding: 12px 20px;"><i class="fa-solid fa-list-ol" style="color: var(--primary); margin-right: 12px;"></i> Ponto e Vírgula (;)</button>
                    <button class="btn btn--secondary btn-delim-choice" data-delim="\t" style="justify-content: flex-start; padding: 12px 20px;"><i class="fa-solid fa-arrows-left-right" style="color: var(--primary); margin-right: 12px;"></i> Tabulação (Tab / Espaço)</button>
                    <button class="btn btn--secondary btn-delim-choice" data-delim="," style="justify-content: flex-start; padding: 12px 20px;"><i class="fa-solid fa-comma" style="color: var(--primary); margin-right: 12px;"></i> Vírgula (,)</button>
                </div>
            `,
            showConfirmButton: false,
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            cancelButtonColor: "var(--text3)",
            didOpen: () => {
                const buttons = document.querySelectorAll(".btn-delim-choice");
                buttons.forEach(btn => {
                    btn.addEventListener("click", (e) => {
                        const delim = e.currentTarget.getAttribute("data-delim");
                        Swal.close();
                        
                        AppState.isProcessing = true;
                        runVisualLoadingProgress(() => {
                            Papa.parse(file, {
                                skipEmptyLines: true,
                                header: false,
                                delimiter: delim,
                                encoding: "ISO-8859-1",
                                complete: function(results) {
                                    parseMatrixData(results.data);
                                },
                                error: function() {
                                    Swal.fire("Erro", "Erro crítico de leitura local com PapaParse.", "error");
                                    resetFileUIPanel();
                                }
                            });
                        });
                    });
                });
            }
        });
    }
}

function parseMatrixData(matrix) {
    if (!matrix || matrix.length < 2) {
        Swal.fire("Planilha Vazia", "Não foram encontradas linhas de dados no arquivo importado.", "error");
        resetFileUIPanel();
        return;
    }

    const rawHeaders = matrix[0];
    const normalizedHeaders = rawHeaders.map(h => normalizeHeaderName(h));

    const records = [];
    for (let r = 1; r < matrix.length; r++) {
        const row = matrix[r];
        if (row.length === 0 || (row.length === 1 && row[0] === "")) continue;

        const record = {};
        normalizedHeaders.forEach((header, index) => {
            record[header] = row[index] !== undefined ? row[index] : "";
        });
        records.push(record);
    }

    AppState.rawRecords = records;
    pivotAndNormalizeData();
}

/* --- [Seção] Pivoteamento com Mapeamento de Rendimento vs Desconto --- */
function pivotAndNormalizeData() {
    const servers = {};

    const fuzzyMap = {
        id: ["identificacao_unica", "matricula", "id", "identific", "cod_servidor"],
        nome: ["nome", "servidor", "nome_do_servidor"],
        cpf: ["cpf", "documento", "num_cpf"],
        carreira: ["carreira", "cargo_efetivo", "cargo"],
        sigla: ["sigla", "cargo_comissao", "funcao", "sigla_fc_cj"],
        atribuicao: ["atribuicao", "atrib", "nivel_atribuicao"],
        situacao: ["situacao_funcional", "situac", "situacao_func"],
        categoria: ["categoria_da_situacao", "categoria", "cat_situacao"],
        tipo_competencia: ["tipo_competencia", "tipo_comp", "comp_tipo"],
        codigo_rubrica: ["codigo_da_rubrica", "codigo_rubrica", "rubrica", "cod_rubrica"],
        descricao_rubrica: ["descricao_da_rubrica", "descricao_rubrica", "desc_rubrica"],
        valor: ["valor", "valor_rubrica", "vlr_pago", "vlr"],
        codigo_rendimento_desconto: ["codigo_rendimento_desconto", "codigo_rendimento", "rendimento_desconto", "cod_rend_desc", "tipo_rubrica"]
    };

    AppState.rawRecords.forEach(record => {
        const keys = Object.keys(record);

        const getVal = (fieldKeys, excludePatterns = []) => {
            for (const key of fieldKeys) {
                if (keys.includes(key)) return record[key];
            }
            for (const key of fieldKeys) {
                const foundKey = keys.find(k => k.includes(key) && !excludePatterns.some(ex => k.includes(ex)));
                if (foundKey) return record[foundKey];
            }
            return undefined;
        };

        const idRaw = getVal(fuzzyMap.id);
        const nomeRaw = getVal(fuzzyMap.nome);
        const cpfRaw = getVal(fuzzyMap.cpf);
        const carreiraRaw = getVal(fuzzyMap.carreira, ["requisito", "ingresso"]);
        const siglaRaw = getVal(fuzzyMap.sigla);
        const atribuicaoRaw = getVal(fuzzyMap.atribuicao);
        const situacaoRaw = getVal(fuzzyMap.situacao, ["categoria"]);
        const categoriaRaw = getVal(fuzzyMap.categoria);
        const tipoCompRaw = getVal(fuzzyMap.tipo_competencia, ["sequencial", "rubrica"]);
        const rubricaRaw = getVal(fuzzyMap.codigo_rubrica, ["desc", "tipo", "rendimento"]);
        const descRubricaRaw = getVal(fuzzyMap.descricao_rubrica);
        const valorRaw = getVal(fuzzyMap.valor, ["tipo", "codigo"]);
        const rendDescRaw = getVal(fuzzyMap.codigo_rendimento_desconto, ["desc", "sequencial"]);

        if (idRaw === undefined || idRaw === "") return;

        let parsedTipoComp = 0;
        if (tipoCompRaw !== undefined && tipoCompRaw !== "") {
            parsedTipoComp = parseInt(tipoCompRaw);
            if (isNaN(parsedTipoComp)) parsedTipoComp = 0;
        }
        if (parsedTipoComp !== 0) {
            return; 
        }

        const cleanId = idRaw.toString().trim();

        if (!servers[cleanId]) {
            servers[cleanId] = {
                id: cleanId,
                nome: nomeRaw ? nomeRaw.toString().trim() : "Não Informado",
                cpf: cpfRaw ? cpfRaw.toString().replace(/[^\d]/g, "") : "",
                carreira: carreiraRaw ? carreiraRaw.toString().trim().toUpperCase() : "CARREIRA INDEFINIDA",
                sigla: siglaRaw ? siglaRaw.toString().trim().toUpperCase() : "",
                atribuicao: atribuicaoRaw !== undefined ? parseInt(atribuicaoRaw) : 0,
                situacao: situacaoRaw ? situacaoRaw.toString().trim().toUpperCase() : "EFETIVO",
                categoria: categoriaRaw !== undefined && categoriaRaw !== "" ? parseInt(categoriaRaw) : 1,
                tipo_competencia: 0,
                rubricas: {},
                detalheRubricas: []
            };
        }

        // CAPTURA DO CÓDIGO RENDIMENTO DESCONTO (1 = Rendimento, 2 = Desconto)
        let cleanRendDesc = 1; // Padrão: Rendimento
        if (rendDescRaw !== undefined && rendDescRaw !== "") {
            const parsedRD = parseInt(rendDescRaw);
            if (!isNaN(parsedRD)) cleanRendDesc = parsedRD;
        }

        if (rubricaRaw && valorRaw !== undefined) {
            let valorParsed = 0;
            if (typeof valorRaw === "number") {
                valorParsed = valorRaw;
            } else {
                valorParsed = parseFloat(valorRaw.toString().replace(/\./g, "").replace(",", "."));
            }
            if (isNaN(valorParsed)) valorParsed = 0;

            let cleanRubrica = rubricaRaw.toString().trim();
            if (cleanRubrica.endsWith(".0")) {
                cleanRubrica = cleanRubrica.slice(0, -2);
            }

            // Armazena no dicionário do servidor apenas se for do tipo Rendimento (1) para não inflar a rubrica com descontos
            if (cleanRendDesc === 1) {
                servers[cleanId].rubricas[cleanRubrica] = (servers[cleanId].rubricas[cleanRubrica] || 0) + valorParsed;
            }

            servers[cleanId].detalheRubricas.push({
                codigo: cleanRubrica,
                descricao: descRubricaRaw ? descRubricaRaw.toString().trim() : "Sem descrição",
                valor: valorParsed,
                tipoRD: cleanRendDesc
            });
        }
    });

    AppState.pivotedServers = servers;
    AppState.isProcessing = false;

    let activeServerCount = 0;
    for (const id in servers) {
        const s = servers[id];
        if (s.carreira.includes("ANALISTA") || s.carreira.includes("TECNICO")) {
            activeServerCount++;
        }
    }

    const rowCountText = document.getElementById("preview-row-count");
    const serverCountText = document.getElementById("preview-server-count");
    
    if (rowCountText) rowCountText.textContent = `${AppState.rawRecords.length} lançamentos`;
    if (serverCountText) serverCountText.textContent = activeServerCount;

    const loader = document.getElementById("upload-loading-panel");
    if (loader) loader.style.display = "none";
    
    const previewPanel = document.getElementById("upload-preview-panel");
    if (previewPanel) {
        previewPanel.style.display = "block";
        gsap.fromTo(previewPanel, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.3 });
    }
}

function resetFileUIPanel() {
    AppState.isProcessing = false;
    const loader = document.getElementById("upload-loading-panel");
    if (loader) loader.style.display = "none";
    
    const dropzone = document.getElementById("file-dropzone");
    if (dropzone) {
        dropzone.style.display = "block";
        gsap.fromTo(dropzone, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.2 });
    }
}

/* ==========================================================================
   === [CAPÍTULO] MOTOR DE AUDITORIA DETERMINÍSTICA ===
   ========================================================================== */

function runDeterministicAudit() {
    if (Object.keys(AppState.pivotedServers).length === 0) {
        Swal.fire("Aviso", "Não há dados em memória para processar.", "warning");
        return;
    }

    Swal.fire({
        title: "Processando Auditoria",
        text: "Comparando valores contra a legislação e tabelas do TSE...",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading()
    });

    const findings = [];
    let totalAudited = 0;
    let conformingCount = 0;
    let discrepancyCount = 0;

    for (const id in AppState.pivotedServers) {
        const server = AppState.pivotedServers[id];

        let normalizedCareer = "";
        if (server.carreira.includes("ANALISTA")) {
            normalizedCareer = "ANALISTA JUDICIARIO";
        } else if (server.carreira.includes("TECNICO")) {
            normalizedCareer = "TECNICO JUDICIARIO";
        } else {
            continue; 
        }

        totalAudited++;

        const paidVenc = server.rubricas[RUBRICA_VENCIMENTO] || 0;
        const paidGaj = server.rubricas[RUBRICA_GAJ] || 0;
        const paidGas = server.rubricas[RUBRICA_GAS] || 0;

        const paidAq = (server.rubricas["462001"] || 0) + 
                       (server.rubricas["463001"] || 0) + 
                       (server.rubricas["23001"] || 0);

        // =========================================================================
        // CÁLCULO DA SOMA REMUNERATÓRIA BRUTA PARA O TETO CONSTITUCIONAL (STF)
        // Apenas rubricas com Código Rendimento Desconto == 1 (Rendimento) somam!
        // =========================================================================
        let somaRemuneratoriaBruta = 0;
        
        server.detalheRubricas.forEach(rub => {
            if (rub.tipoRD === 1 && !RUBRICAS_EXCLUIDAS_TETO.includes(rub.codigo)) {
                somaRemuneratoriaBruta += rub.valor;
            }
        });

        const excessoTetoBruto = Math.max(0, somaRemuneratoriaBruta - TETO_CONSTITUCIONAL_STF);
        const possuiExcessoTeto = excessoTetoBruto > 0.01;

        // Isolamento de Inativos e Pensionistas
        const isInactiveOrPensioner = server.categoria === 5 || server.categoria === 6 || server.categoria === 7 ||
                                      server.situacao.includes("INATIVO") || server.situacao.includes("PENSIONISTA") ||
                                      server.situacao.includes("PENSAO") || (paidVenc === 0 && paidGaj === 0);

        if (isInactiveOrPensioner) {
            findings.push({
                id: server.id,
                nome: server.nome,
                cpf: server.cpf,
                carreira: normalizedCareer,
                classe: "N/A",
                padrao: "N/A",
                status: "NAO_ANALISADO",
                venc_esperado: 0,
                venc_pago: paidVenc,
                gaj_esperada: 0,
                gaj_paga: paidGaj,
                gas_esperada: 0,
                gas_paga: paidGas,
                aq_esperado: 0,
                aq_pago: paidAq,
                soma_remuneratoria: somaRemuneratoriaBruta,
                excesso_teto: 0,
                detalhe: `
                    <div class="audit-issue">
                        <span class="audit-issue__badge badge badge--neutral"><i class="fa-solid fa-user-slash"></i> Não Analisado</span>
                        <div class="audit-issue__rule">Servidor identificado como aposentado ou pensionista fora do escopo.</div>
                        <div class="audit-issue__law">Base Legal: Limitação de escopo da Portaria Conjunta nº 1/2026.</div>
                    </div>
                `,
                desvio: 0
            });
            conformingCount++;
            continue;
        }

        const referenceTable = TABELA_REMUNERATORIA[normalizedCareer];
        let matchedGrade = null;

        for (let i = 0; i < referenceTable.length; i++) {
            const grade = referenceTable[i];
            const diffVenc = Math.abs(grade.vencimento - paidVenc);
            const diffGaj = Math.abs(grade.gaj - paidGaj);

            if (diffVenc < 0.1 && diffGaj < 0.1) {
                matchedGrade = grade;
                break;
            }
        }

        if (!matchedGrade) {
            matchedGrade = referenceTable.find(g => Math.abs(g.vencimento - paidVenc) < 0.1);
        }

        if (matchedGrade) {
            const expectedVenc = matchedGrade.vencimento;
            const expectedGaj = matchedGrade.gaj;
            
            let expectedGas = 0;
            if (paidGas > 0) {
                expectedGas = expectedVenc * 0.35;
            }
            const isGasConforming = Math.abs(expectedGas - paidGas) < 0.1;

            // Recálculo Inteligente de AQ
            let expectedAq = 0;
            let expectedT = 0; 
            let expectedQ = 0; 

            const rawT = server.rubricas["23001"] || 0;
            const coefT = rawT / VALOR_REFERENCIA_AQ;
            let matchedCoefT = 0.0;

            if (coefT >= 0.60 - 0.01) {
                matchedCoefT = 0.6;
            } else if (coefT >= 0.40 - 0.01) {
                matchedCoefT = 0.4;
            } else if (coefT >= 0.20 - 0.01) {
                matchedCoefT = 0.2;
            } else {
                matchedCoefT = 0.0;
            }
            expectedT = matchedCoefT * VALOR_REFERENCIA_AQ;

            const rawQ = (server.rubricas["462001"] || 0) + (server.rubricas["463001"] || 0);
            const coefQ = rawQ / VALOR_REFERENCIA_AQ;
            let matchedCoefQ = 0.0;

            if (coefQ >= 5.0 - 0.01) {
                matchedCoefQ = 5.0;
            } else if (coefQ >= 3.5 - 0.01) {
                matchedCoefQ = 3.5;
            } else if (coefQ >= 2.0 - 0.01) {
                matchedCoefQ = 2.0;
            } else if (coefQ >= 1.0 - 0.01) {
                matchedCoefQ = 1.0;
            } else {
                matchedCoefQ = 0.0;
            }
            expectedQ = matchedCoefQ * VALOR_REFERENCIA_AQ;

            expectedAq = expectedT + expectedQ;

            const isAqConforming = Math.abs(expectedAq - paidAq) < 0.1;
            let aqErrorReason = "";

            if (!isAqConforming) {
                const calculatedCoefficient = paidAq / VALOR_REFERENCIA_AQ;
                const expectedCoefficient = expectedAq / VALOR_REFERENCIA_AQ;
                const diffAqValue = paidAq - expectedAq;

                if (calculatedCoefficient > 5.6) {
                    aqErrorReason = `O valor pago de R$ ${paidAq.toFixed(2)} (${calculatedCoefficient.toFixed(2)} VR) extrapola o teto máximo de 5,6 VR (Doutorado + 3 Capacitações). O direito reconhecido é de ${expectedCoefficient.toFixed(2)} VR (R$ ${expectedAq.toFixed(2)}), gerando excesso de R$ ${diffAqValue.toFixed(2)}.`;
                } else if (calculatedCoefficient > 2.6 && calculatedCoefficient < 3.5) {
                    aqErrorReason = `A soma de títulos secundários excede o teto de 2,0 VR (R$ 1.428,80). O direito reconhecido é de ${expectedCoefficient.toFixed(2)} VR (R$ ${expectedAq.toFixed(2)}), gerando excesso de R$ ${diffAqValue.toFixed(2)}.`;
                } else if (calculatedCoefficient > 3.5 && calculatedCoefficient < 4.1) {
                    aqErrorReason = `O Mestrado (3,5 VR) absorve títulos de menor nível. O direito reconhecido é de ${expectedCoefficient.toFixed(2)} VR (R$ ${expectedAq.toFixed(2)}), gerando excesso de R$ ${diffAqValue.toFixed(2)}.`;
                } else if (calculatedCoefficient > 5.0 && calculatedCoefficient < 5.6) {
                    aqErrorReason = `O Doutorado (5,0 VR) absorve títulos de menor nível. O direito reconhecido é de ${expectedCoefficient.toFixed(2)} VR (R$ ${expectedAq.toFixed(2)}), gerando excesso de R$ ${diffAqValue.toFixed(2)}.`;
                } else if (calculatedCoefficient < 0.2) {
                    aqErrorReason = `O valor de R$ ${paidAq.toFixed(2)} (${calculatedCoefficient.toFixed(2)} VR) é inferior ao módulo mínimo de 0,20 VR (R$ 142,88 / 120h). O valor legal esperado é de R$ 0,00, gerando divergência de R$ ${paidAq.toFixed(2)}.`;
                } else {
                    aqErrorReason = `O valor de R$ ${paidAq.toFixed(2)} (${calculatedCoefficient.toFixed(2)} VR) possui um resíduo excedente em relação ao direito reconhecido de ${expectedCoefficient.toFixed(2)} VR (R$ ${expectedAq.toFixed(2)}). Diferença calculada em excesso de R$ ${diffAqValue.toFixed(2)}.`;
                }
            }

            // Validação Cadastral de FC/CJ
            let cadastralIssue = "";
            const sigla = server.sigla;
            const atrib = server.atribuicao;

            if (sigla === "FC 6" && atrib !== 1) {
                cadastralIssue = "FC 6 exige Atribuição = 1.";
            } else if (sigla === "FC 4" && atrib !== 3) {
                cadastralIssue = "FC 4 exige Atribuição = 3.";
            } else if (sigla === "FC 3" && atrib !== 3) {
                cadastralIssue = "FC 3 exige Atribuição = 3.";
            } else if (sigla === "FC 1" && atrib !== 3) {
                cadastralIssue = "FC 1 exige Atribuição = 3.";
            } else if (sigla.startsWith("CJ") && atrib === 3) {
                cadastralIssue = "Cargos CJ não admitem Atribuição = 3.";
            }

            const isVencConforming = Math.abs(expectedVenc - paidVenc) < 0.1;
            const isGajConforming = Math.abs(expectedGaj - paidGaj) < 0.1;

            if (isVencConforming && isGajConforming && isGasConforming && isAqConforming && !cadastralIssue && !possuiExcessoTeto) {
                findings.push({
                    id: server.id,
                    nome: server.nome,
                    cpf: server.cpf,
                    carreira: normalizedCareer,
                    classe: matchedGrade.classe,
                    padrao: matchedGrade.padrao,
                    status: "CONFORME",
                    venc_esperado: expectedVenc,
                    venc_pago: paidVenc,
                    gaj_esperada: expectedGaj,
                    gaj_paga: paidGaj,
                    gas_esperada: expectedGas,
                    gas_paga: paidGas,
                    aq_esperado: expectedAq,
                    aq_pago: paidAq,
                    soma_remuneratoria: somaRemuneratoriaBruta,
                    excesso_teto: 0,
                    detalhe: `
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--success"><i class="fa-solid fa-circle-check"></i> Conforme</span>
                            <div class="audit-issue__rule">Enquadramento e rubricas em conformidade com as diretrizes vigentes.</div>
                        </div>
                    `,
                    desvio: 0
                });
                conformingCount++;
            } else {
                let errorDetails = [];

                if (possuiExcessoTeto) {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-gavel"></i> Teto Constitucional STF</span>
                            <div class="audit-issue__math">Remuneração Bruta: <strong>R$ ${somaRemuneratoriaBruta.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> | Teto STF: <strong>R$ 46.366,19</strong></div>
                            <div class="audit-issue__rule">A soma das verbas de natureza remuneratória ultrapassa o teto constitucional do funcionalismo em R$ ${excessoTetoBruto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}.</div>
                            <div class="audit-issue__law">Base Legal: Artigo 37, Inciso XI e § 11 da Constituição Federal e Resolução CNJ nº 14/2006.</div>
                        </div>
                    `);
                }
                
                if (!isVencConforming) {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-money-bill-wave"></i> Vencimento</span>
                            <div class="audit-issue__math">Pago: <strong>R$ ${paidVenc.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> | Esperado: <strong>R$ ${expectedVenc.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong></div>
                            <div class="audit-issue__rule">O valor do vencimento básico difere da tabela salarial oficial.</div>
                            <div class="audit-issue__law">Base Legal: Anexo I da Lei nº 15.292/2025.</div>
                        </div>
                    `);
                }
                
                if (!isGajConforming) {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-coins"></i> Gratificação Judiciária (GAJ)</span>
                            <div class="audit-issue__math">Paga: <strong>R$ ${paidGaj.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> | Esperada: <strong>R$ ${expectedGaj.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong></div>
                            <div class="audit-issue__rule">A Gratificação de Atividade Judiciária deve equivaler estritamente a 140% do vencimento básico do padrão.</div>
                            <div class="audit-issue__law">Base Legal: Artigo 13 da Lei nº 11.416/2006 (atualizado).</div>
                        </div>
                    `);
                }
                
                if (!isGasConforming) {
                    if (expectedGas === 0 && paidGas > 0) {
                        errorDetails.push(`
                            <div class="audit-issue">
                                <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-shield-halved"></i> Gratificação de Segurança (GAS)</span>
                                <div class="audit-issue__math">Paga: <strong>R$ ${paidGas.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> | Esperada: <strong>R$ 0,00</strong></div>
                                <div class="audit-issue__rule">Recebimento indevido de Adicional de Segurança para cargo sem atribuições policiais ativas.</div>
                                <div class="audit-issue__law">Base Legal: Artigo 17 da Lei nº 11.416/2006.</div>
                            </div>
                        `);
                    } else {
                        errorDetails.push(`
                            <div class="audit-issue">
                                <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-shield-halved"></i> Gratificação de Segurança (GAS)</span>
                                <div class="audit-issue__math">Paga: <strong>R$ ${paidGas.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> | Esperada: <strong>R$ ${expectedGas.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong></div>
                                <div class="audit-issue__rule">O adicional de segurança diverge do limite legal de 35% sobre o vencimento básico.</div>
                                <div class="audit-issue__law">Base Legal: Artigo 17 da Lei nº 11.416/2006.</div>
                            </div>
                        `);
                    }
                }
                
                if (!isAqConforming) {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-graduation-cap"></i> Adicional de Qualificação (AQ)</span>
                            <div class="audit-issue__math">Pago: <strong>R$ ${paidAq.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> | Esperado: <strong>R$ ${expectedAq.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong></div>
                            <div class="audit-issue__rule">${aqErrorReason}</div>
                            <div class="audit-issue__law">Base Legal: Artigo 15 da Lei nº 15.292/2025 e Portaria Conjunta nº 1/2026.</div>
                        </div>
                    `);
                }
                
                if (cadastralIssue) {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-circle-exclamation"></i> Atribuição de FC ou CJ</span>
                            <div class="audit-issue__rule">${cadastralIssue}</div>
                            <div class="audit-issue__law">Base Legal: Regramento de Atribuições da Portaria Conjunta nº 1/2026.</div>
                        </div>
                    `);
                }

                const desvioFinanceiro = (paidVenc - expectedVenc) + (paidGaj - expectedGaj) + (paidGas - expectedGas) + (paidAq - expectedAq) + excessoTetoBruto;
                const detailHtml = errorDetails.join('<div class="audit-issue-divider"></div>');

                findings.push({
                    id: server.id,
                    nome: server.nome,
                    cpf: server.cpf,
                    carreira: normalizedCareer,
                    classe: matchedGrade.classe,
                    padrao: matchedGrade.padrao,
                    status: "DIVERGENTE",
                    venc_esperado: expectedVenc,
                    venc_pago: paidVenc,
                    gaj_esperada: expectedGaj,
                    gaj_paga: paidGaj,
                    gas_esperada: expectedGas,
                    gas_paga: paidGas,
                    aq_esperado: expectedAq,
                    aq_pago: paidAq,
                    soma_remuneratoria: somaRemuneratoriaBruta,
                    excesso_teto: excessoTetoBruto,
                    detalhe: detailHtml,
                    desvio: desvioFinanceiro
                });
                discrepancyCount++;
            }

        } else {
            const desvioTotal = paidVenc + paidGaj + excessoTetoBruto;
            findings.push({
                id: server.id,
                nome: server.nome,
                cpf: server.cpf,
                carreira: normalizedCareer,
                classe: "Incompatível",
                padrao: "Incompatível",
                status: "DIVERGENTE",
                venc_esperado: 0,
                venc_pago: paidVenc,
                gaj_esperada: 0,
                gaj_paga: paidGaj,
                gas_esperada: 0,
                gas_paga: paidGas,
                aq_esperado: 0,
                aq_pago: paidAq,
                soma_remuneratoria: somaRemuneratoriaBruta,
                excesso_teto: excessoTetoBruto,
                detalhe: `
                    <div class="audit-issue">
                        <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-money-bill-wave"></i> Vencimento</span>
                        <div class="audit-issue__rule">Vencimentos ordinários pagos não correspondem a nenhuma classe salarial de maio de 2026.</div>
                        <div class="audit-issue__law">Base Legal: Tabela Remuneratória Geral de Ativos da Portaria Conjunta nº 1/2026.</div>
                    </div>
                `,
                desvio: desvioTotal
            });
            discrepancyCount++;
        }
    }

    AppState.auditFindings = findings;
    
    updateAuditDashboardUI(totalAudited, conformingCount, discrepancyCount);
    filterAndPaginateFindings();
    renderComplianceChart(conformingCount, discrepancies = AppState.auditFindings.filter(f => f.status === "DIVERGENTE").length);

    Swal.close();
    switchView("tab-auditoria");
}

/* ==========================================================================
   === [CAPÍTULO] RENDERIZAÇÃO DE TELA, PAGINAÇÃO E EXPORTAÇÃO ===
   ========================================================================== */

function updateAuditDashboardUI(total, conforming, errors) {
    const kpiTotal = document.getElementById("kpi-total-audited");
    const kpiConforming = document.getElementById("kpi-conforming");
    const kpiDiscrepancies = document.getElementById("kpi-discrepancies");
    const kpiConformingPct = document.getElementById("kpi-conforming-pct");
    const kpiDiscrepanciesPct = document.getElementById("kpi-discrepancies-pct");

    if (kpiTotal) kpiTotal.textContent = total.toLocaleString('pt-BR');
    if (kpiConforming) kpiConforming.textContent = conforming.toLocaleString('pt-BR');
    if (kpiDiscrepancies) kpiDiscrepancies.textContent = errors.toLocaleString('pt-BR');

    const conformingPct = total > 0 ? Math.round((conforming / total) * 100) : 0;
    const errorsPct = total > 0 ? Math.round((errors / total) * 100) : 0;

    if (kpiConformingPct) kpiConformingPct.textContent = `${conformingPct}% da folha ativa`;
    if (kpiDiscrepanciesPct) kpiDiscrepanciesPct.textContent = `${errorsPct}% desvios cadastrais`;
}

function renderComplianceChart(conforming, discrepancies) {
    const canvas = document.getElementById("compliance-chart");
    if (!canvas) return;

    if (AppState.chartInstance) {
        AppState.chartInstance.destroy();
    }

    const ctx = canvas.getContext("2d");
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const labelColor = isDark ? "#CBD5E1" : "#1A2733";

    AppState.chartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Valores Regulares / Outros', 'Valores Divergentes'],
            datasets: [{
                data: [conforming, discrepancies],
                backgroundColor: ['#10B981', '#E11D48'],
                borderWidth: 2,
                borderColor: isDark ? "#1E293B" : "#FFFFFF"
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: labelColor,
                        font: { family: 'Source Sans 3', size: 12, weight: 'bold' }
                    }
                }
            },
            cutout: '72%'
        }
    });
}

function filterAndPaginateFindings() {
    if (AppState.filterOnlyErrors) {
        AppState.filteredFindings = AppState.auditFindings.filter(f => f.status === "DIVERGENTE");
    } else {
        AppState.filteredFindings = [...AppState.auditFindings];
    }

    const maxPage = AppState.itemsPerPage === "all" ? 1 : Math.ceil(AppState.filteredFindings.length / AppState.itemsPerPage);
    if (AppState.currentPage > maxPage) AppState.currentPage = maxPage || 1;
    if (AppState.currentPage < 1) AppState.currentPage = 1;

    renderAuditTable();
}

function renderAuditTable() {
    const tableBody = document.querySelector("#audit-results-table tbody");
    if (!tableBody) return;

    tableBody.innerHTML = "";

    const totalRecords = AppState.filteredFindings.length;

    if (totalRecords === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="9" class="td-placeholder">
                    <i class="fa-solid fa-circle-check" style="color: #10B981; font-size: 28px; display: block; margin-bottom: 12px;"></i>
                    Excelente! Nenhuma inconsistência encontrada neste segmento da folha de pagamento.
                </td>
            </tr>
        `;
        renderPaginationUI(0, 0, 0);
        return;
    }

    let startIndex = 0;
    let endIndex = totalRecords;

    if (AppState.itemsPerPage !== "all") {
        startIndex = (AppState.currentPage - 1) * AppState.itemsPerPage;
        endIndex = Math.min(startIndex + AppState.itemsPerPage, totalRecords);
    }

    const pageSlice = AppState.filteredFindings.slice(startIndex, endIndex);

    pageSlice.forEach(item => {
        const row = document.createElement("tr");

        const gradeStr = item.classe !== "N/A" && item.classe !== "Incompatível" ? `${item.classe}-${item.padrao}` : "N/A";
        
        let desvioStyleColor = "var(--text2)";
        if (item.desvio > 0.1) desvioStyleColor = "var(--color-conclusion)";
        if (item.desvio < -0.1) desvioStyleColor = "var(--color-start)";

        row.innerHTML = `
            <td data-label="Matrícula"><strong>${item.id}</strong></td>
            <td data-label="Cargo Folha">${item.carreira}</td>
            <td data-label="Classe / Padrão"><span class="badge badge--neutral">${gradeStr}</span></td>
            <td data-label="Vencimento Pago">R$ ${item.venc_pago.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
            <td data-label="GAJ Paga">R$ ${item.gaj_paga.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
            <td data-label="GAS Paga">R$ ${item.gas_paga.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
            <td data-label="AQ Pago">R$ ${item.aq_pago.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
            <td data-label="Inconsistência Detalhada" class="data-table__cell--detail">${item.detalhe}</td>
            <td data-label="Desvio Financeiro"><strong style="color: ${desvioStyleColor}">R$ ${item.desvio.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong></td>
        `;

        row.style.cursor = "pointer";
        row.setAttribute("data-id", item.id);
        row.addEventListener("click", () => openAuditDetailModal(item.id));

        tableBody.appendChild(row);
    });

    renderPaginationUI(startIndex + 1, endIndex, totalRecords);
}

function openAuditDetailModal(serverId) {
    const server = AppState.pivotedServers[serverId];
    const finding = AppState.auditFindings.find(f => f.id === serverId);
    if (!server || !finding) return;

    let normalizedCareer = "";
    if (server.carreira.includes("ANALISTA")) {
        normalizedCareer = "ANALISTA JUDICIÁRIO";
    } else if (server.carreira.includes("TECNICO")) {
        normalizedCareer = "TÉCNICO JUDICIÁRIO";
    } else {
        normalizedCareer = server.carreira;
    }

    const formattedCpf = server.cpf ? server.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") : "Não Informado";
    const gradeStr = finding.classe !== "N/A" && finding.classe !== "Incompatível" ? `${finding.classe}-${finding.padrao}` : "Não enquadrado";
    
    const statusBadgeHtml = finding.status === "CONFORME" 
        ? `<span class="badge badge--success" style="font-size: 13px; padding: 6px 12px; margin-top: 8px;">Conforme</span>` 
        : (finding.status === "SUPLEMENTAR" 
            ? `<span class="badge badge--neutral" style="font-size: 13px; padding: 6px 12px; margin-top: 8px;">Suplementar</span>`
            : `<span class="badge badge--error" style="font-size: 13px; padding: 6px 12px; margin-top: 8px;">Divergente</span>`);

    let rubricsHtml = "";
    server.detalheRubricas.forEach(rub => {
        const isAudited = [RUBRICA_VENCIMENTO, RUBRICA_GAJ, "2002", "23001", "462001", "463001"].includes(rub.codigo);
        const tagAudited = isAudited 
            ? `<span class="badge badge--success" style="font-size: 11px; padding: 2px 6px;">Auditada</span>` 
            : `<span class="badge badge--neutral" style="font-size: 11px; padding: 2px 6px;">Não Auditada</span>`;
        
        const tagRD = rub.tipoRD === 1 
            ? `<span class="badge badge--success" style="font-size: 11px; padding: 2px 6px; margin-left: 4px;">Rendimento</span>` 
            : `<span class="badge badge--neutral" style="font-size: 11px; padding: 2px 6px; margin-left: 4px;">Desconto</span>`;

        rubricsHtml += `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--border); font-size: 15px;">
                <div style="text-align: left;">
                    <strong style="color: var(--text);">${rub.codigo}</strong> - <span style="color: var(--text2);">${rub.descricao}</span>
                    <div style="margin-top: 3px; display: flex; gap: 4px;">${tagAudited}${tagRD}</div>
                </div>
                <strong style="color: ${rub.tipoRD === 1 ? 'var(--text)' : 'var(--color-conclusion)'}; white-space: nowrap;">
                    ${rub.tipoRD === 1 ? '' : '- '}R$ ${rub.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </strong>
            </div>
        `;
    });

    const isVencConforming = Math.abs(finding.venc_pago - finding.venc_esperado) < 0.1;
    const isGajConforming = Math.abs(finding.gaj_paga - finding.gaj_esperada) < 0.1;
    const isGasConforming = Math.abs(finding.gas_paga - finding.gas_esperada) < 0.1;
    const isAqConforming = Math.abs(finding.aq_pago - finding.aq_esperado) < 0.1;
    const isTetoConforming = finding.excesso_teto <= 0.01;

    const diffVenc = finding.venc_pago - finding.venc_esperado;
    const noteVenc = isVencConforming ? "" : `
        O vencimento básico de <strong>R$ ${finding.venc_pago.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> pago difere do previsto na Tabela Remuneratória Oficial (Anexo I da Lei nº 15.292/2025) para o padrão de enquadramento <strong>${gradeStr}</strong> (que deveria ser de <strong>R$ ${finding.venc_esperado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>). 
        Diferença líquida calculada: <strong style="color: var(--color-conclusion);">R$ ${diffVenc.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>.
    `;

    const diffGaj = finding.gaj_paga - finding.gaj_esperada;
    const noteGaj = isGajConforming ? "" : `
        A Gratificação Judiciária (GAJ) paga de <strong>R$ ${finding.gaj_paga.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> diverge do percentual compulsório de 140% incidente sobre o Vencimento Básico previsto para o padrão <strong>${gradeStr}</strong> (R$ ${finding.venc_esperado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} &times; 140% = <strong>R$ ${finding.gaj_esperada.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>). 
        Desvio identificado de <strong style="color: var(--color-conclusion);">R$ ${diffGaj.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>. (Artigo 13 da Lei nº 11.416/2006).
    `;
    
    let noteGas = "";
    if (!isGasConforming) {
        const diffGas = finding.gas_paga - finding.gas_esperada;
        if (finding.gas_esperada === 0 && finding.gas_paga > 0) {
            noteGas = `
                Recebimento indevido: foi pago o valor de <strong>R$ ${finding.gas_paga.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> a título de GAS (Adicional de Segurança), porém o servidor não possui cargo ou atribuições de segurança ativas homologadas na folha de ativos ordinários. 
                Diferença a ser glosada: <strong style="color: var(--color-conclusion);">R$ ${diffGas.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>. (Artigo 17 da Lei nº 11.416/2006).
            `;
        } else {
            noteGas = `
                O Adicional de Segurança (GAS) pago de <strong>R$ ${finding.gas_paga.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> diverge do percentual legal de 35% incidente sobre o Vencimento Básico do padrão enquadrado (R$ ${finding.venc_esperado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} &times; 35% = <strong>R$ ${finding.gas_esperada.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>). 
                Divergência calculada de <strong style="color: var(--color-conclusion);">R$ ${diffGas.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>. (Artigo 17 da Lei nº 11.416/2006).
            `;
        }
    }

    let noteAq = "";
    if (!isAqConforming) {
        const calculatedCoefficient = finding.aq_pago / VALOR_REFERENCIA_AQ;
        const expectedCoefficient = finding.aq_esperado / VALOR_REFERENCIA_AQ;
        const diffAq = finding.aq_pago - finding.aq_esperado;

        if (calculatedCoefficient < 0.2) {
            noteAq = `
                O servidor recebeu R$ ${finding.aq_pago.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} (coeficiente de <strong>${calculatedCoefficient.toFixed(2)} VR</strong>). 
                Este valor é inferior ao bloco mínimo de 120 horas exigido para Ações de Capacitação (0,20 VR = R$ 142,88). Como não atinge o módulo mínimo, o direito esperado é de <strong>0,00 VR (R$ 0,00)</strong>, gerando divergência integral de <strong style="color: var(--color-conclusion);">R$ ${finding.aq_pago.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>. (Art. 15, V da Lei nº 15.292/2025).
            `;
        } else {
            noteAq = `
                O servidor recebeu R$ ${finding.aq_pago.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} (coeficiente de <strong>${calculatedCoefficient.toFixed(2)} VR</strong>). 
                Com base na faixa de enquadramento legal, o direito reconhecido do servidor é de <strong>${expectedCoefficient.toFixed(2)} VR (R$ ${finding.aq_esperado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })})</strong>. 
                O valor pago contém um resíduo em excesso, gerando divergência a ser corrigida de <strong style="color: var(--color-conclusion);">R$ ${diffAq.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> (<strong>${(calculatedCoefficient - expectedCoefficient).toFixed(2)} VR</strong>). (Lei nº 15.292/2025 e Portaria Conjunta nº 1/2026).
            `;
        }
    }

    let noteTeto = "";
    if (!isTetoConforming) {
        noteTeto = `
            A soma das verbas de natureza remuneratória pagas no mês (<strong>R$ ${finding.soma_remuneratoria.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>) ultrapassa o teto constitucional do funcionalismo público (<strong>R$ 46.366,19</strong> — Subsídio de Ministro do STF). 
            Excesso bruto sujeito a abate-teto: <strong style="color: var(--color-conclusion);">R$ ${finding.excesso_teto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>. (Artigo 37, XI da Constituição Federal e Resolução CNJ nº 14/2006).
        `;
    }

    const compRow = (label, paid, expected, conforms, icon, note = "") => {
        const color = conforms ? "#10B981" : "#E11D48";
        const statusText = conforms ? "Conforme" : "Divergente";
        
        const noteHtml = (!conforms && note) ? `
            <div style="margin-top: 10px; padding: 12px; background: var(--bg); border-radius: 8px; font-size: 14.5px; color: var(--text); line-height: 1.5;">
                <i class="fa-solid fa-circle-info" style="color: var(--primary); margin-right: 6px;"></i> <strong>Nota Técnica:</strong> ${note}
            </div>
        ` : '';

        return `
            <div style="padding: 14px; background: var(--bg2); border-radius: 10px; margin-bottom: 12px;">
                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 15px; font-weight: 700; color: var(--text);">
                    <span><i class="${icon}" style="margin-right: 8px; color: ${color}; font-size: 16px;"></i> ${label}</span>
                    <span style="color: ${color}; font-size: 12px; font-weight: 800; text-transform: uppercase;">${statusText}</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 15px; margin-top: 8px; color: var(--text2);">
                    <span>Pago: R$ ${paid.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    <span>Esperado / Limite: R$ ${expected.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                ${noteHtml}
            </div>
        `;
    };

    const reconciliaHtml = `
        ${compRow("Vencimento Básico", finding.venc_pago, finding.venc_esperado, isVencConforming, "fa-solid fa-money-bill-wave", noteVenc)}
        ${compRow("Gratificação Judiciária (GAJ)", finding.gaj_paga, finding.gaj_esperada, isGajConforming, "fa-solid fa-coins", noteGaj)}
        ${compRow("Gratificação de Segurança (GAS)", finding.gas_paga, finding.gas_esperada, isGasConforming, "fa-solid fa-shield-halved", noteGas)}
        ${compRow("Adicional de Qualificação (AQ)", finding.aq_pago, finding.aq_esperado, isAqConforming, "fa-solid fa-graduation-cap", noteAq)}
        ${compRow("Teto Constitucional STF", finding.soma_remuneratoria, TETO_CONSTITUCIONAL_STF, isTetoConforming, "fa-solid fa-gavel", noteTeto)}
    `;

    Swal.fire({
        width: '820px',
        showConfirmButton: true,
        confirmButtonText: 'Fechar Diagnóstico',
        confirmButtonColor: 'var(--primary)',
        background: 'var(--surface)',
        color: 'var(--text)',
        html: `
            <div style="font-family: var(--font-main); color: var(--text); padding-top: 10px; text-align: left;">
                
                <!-- SEÇÃO 1: CABEÇALHO -->
                <div style="border-bottom: 2px solid var(--border); padding-bottom: 16px; margin-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div>
                            <h3 style="font-size: 22px; font-weight: 800; color: var(--text); margin-bottom: 4px;">${server.nome}</h3>
                            <p style="font-size: 14.5px; color: var(--text3); margin-bottom: 4px;">CPF: <strong>${formattedCpf}</strong> | Matrícula: <strong>${server.id}</strong></p>
                            <p style="font-size: 14.5px; color: var(--text2); font-weight: 600;">${normalizedCareer} • Padrão ${gradeStr}</p>
                        </div>
                        <div style="text-align: right;">
                            ${statusBadgeHtml}
                        </div>
                    </div>
                </div>

                <!-- SEÇÃO 2: RAIO-X DE LANÇAMENTOS -->
                <div style="margin-bottom: 24px;">
                    <h4 style="font-size: 15.5px; font-weight: 700; color: var(--text3); text-transform: uppercase; margin-bottom: 12px; letter-spacing: 0.5px;">1. Detalhamento de Lançamentos em Folha</h4>
                    <div style="max-height: 280px; overflow-y: auto; border: 1px solid var(--border); border-radius: 8px; padding: 0 14px; background: var(--surface2);">
                        ${rubricsHtml}
                    </div>
                </div>

                <!-- SEÇÃO 3: CONCILIAÇÃO LEGAL -->
                <div style="margin-bottom: 16px;">
                    <h4 style="font-size: 15.5px; font-weight: 700; color: var(--text3); text-transform: uppercase; margin-bottom: 12px; letter-spacing: 0.5px;">2. Conciliação contra Tabela Remuneratória e Teto</h4>
                    <div style="display: flex; flex-direction: column;">
                        ${reconciliaHtml}
                    </div>
                </div>

                <!-- PAINEL DE SALDO -->
                <div style="padding: 18px; background: var(--bg); border: 1px solid var(--border); border-radius: 12px; display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
                    <div>
                        <span style="font-size: 12.5px; font-weight: 700; color: var(--text3); text-transform: uppercase; display: block;">Saldo do Desvio Financeiro</span>
                        <span style="font-size: 13.5px; color: var(--text2); display: block; margin-top: 2px;">Fundamentação: Art. 37, XI da CF/88, Lei nº 15.292/2025 e Portaria Conjunta nº 1/2026</span>
                    </div>
                    <strong style="font-size: 22px; color: ${finding.desvio === 0 ? 'var(--color-start)' : 'var(--color-conclusion)'}">R$ ${finding.desvio.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>
                </div>
            </div>
        `
    });
}

function renderPaginationUI(start, end, total) {
    let container = document.getElementById("table-pagination-controls");
    const tableCard = document.querySelector("#view-auditoria .card:last-child");

    if (!container && tableCard) {
        container = document.createElement("div");
        container.id = "table-pagination-controls";
        container.className = "table-pagination-container";
        tableCard.appendChild(container);
    }

    if (!container) return;

    if (total === 0) {
        container.innerHTML = "";
        return;
    }

    const totalPages = AppState.itemsPerPage === "all" ? 1 : Math.ceil(total / AppState.itemsPerPage);

    container.innerHTML = `
        <div class="table-pagination">
            <span class="table-pagination__info">Mostrando ${start} a ${end} de ${total} registros analisados</span>
            <div class="table-pagination__controls">
                <button class="btn btn--secondary btn--compact table-pagination__btn" id="btn-page-first" ${AppState.currentPage === 1 ? 'disabled style="opacity: 0.5; cursor: default;"' : ''}>
                    <i class="fa-solid fa-angles-left"></i>
                </button>
                <button class="btn btn--secondary btn--compact table-pagination__btn" id="btn-page-prev" ${AppState.currentPage === 1 ? 'disabled style="opacity: 0.5; cursor: default;"' : ''}>
                    <i class="fa-solid fa-angle-left"></i>
                </button>
                <span class="table-pagination__indicator">Página <strong>${AppState.currentPage}</strong> de ${totalPages}</span>
                <button class="btn btn--secondary btn--compact table-pagination__btn" id="btn-page-next" ${AppState.currentPage === totalPages ? 'disabled style="opacity: 0.5; cursor: default;"' : ''}>
                    <i class="fa-solid fa-angle-right"></i>
                </button>
                <button class="btn btn--secondary btn--compact table-pagination__btn" id="btn-page-last" ${AppState.currentPage === totalPages ? 'disabled style="opacity: 0.5; cursor: default;"' : ''}>
                    <i class="fa-solid fa-angles-right"></i>
                </button>
            </div>
            <div class="table-pagination__size">
                <select class="table-pagination__select" id="select-page-size">
                    <option value="10" ${AppState.itemsPerPage === 10 ? 'selected' : ''}>10 registros por página</option>
                    <option value="25" ${AppState.itemsPerPage === 25 ? 'selected' : ''}>25 registros por página</option>
                    <option value="50" ${AppState.itemsPerPage === 50 ? 'selected' : ''}>50 registros por página</option>
                    <option value="100" ${AppState.itemsPerPage === 100 ? 'selected' : ''}>100 registros por página</option>
                    <option value="all" ${AppState.itemsPerPage === "all" ? 'selected' : ''}>Mostrar Todos</option>
                </select>
            </div>
        </div>
    `;

    document.getElementById("btn-page-first").addEventListener("click", () => {
        if (AppState.currentPage > 1) {
            AppState.currentPage = 1;
            filterAndPaginateFindings();
        }
    });

    document.getElementById("btn-page-prev").addEventListener("click", () => {
        if (AppState.currentPage > 1) {
            AppState.currentPage--;
            filterAndPaginateFindings();
        }
    });

    document.getElementById("btn-page-next").addEventListener("click", () => {
        if (AppState.currentPage < totalPages) {
            AppState.currentPage++;
            filterAndPaginateFindings();
        }
    });

    document.getElementById("btn-page-last").addEventListener("click", () => {
        if (AppState.currentPage < totalPages) {
            AppState.currentPage = totalPages;
            filterAndPaginateFindings();
        }
    });

    document.getElementById("select-page-size").addEventListener("change", (e) => {
        const val = e.target.value;
        AppState.itemsPerPage = val === "all" ? "all" : parseInt(val);
        AppState.currentPage = 1;
        filterAndPaginateFindings();
    });
}

function exportAuditToXLSX() {
    if (AppState.auditFindings.length === 0) return;
    
    try {
        const exportData = AppState.filteredFindings.map(item => ({
            "Identificação Única": item.id,
            "Nome do Servidor": item.nome,
            "CPF": item.cpf,
            "Carreira": item.carreira,
            "Enquadramento Mapeado": item.classe !== "N/A" ? `${item.classe}-${item.padrao}` : "Incompatível",
            "Vencimento Esperado (R$)": item.venc_esperado,
            "Vencimento Pago (R$)": item.venc_pago,
            "GAJ Esperada (R$)": item.gaj_esperada,
            "GAJ Paga (R$)": item.gaj_paga,
            "GAS Esperada (R$)": item.gas_esperada,
            "GAS Paga (R$)": item.gas_paga,
            "AQ Esperado (R$)": item.aq_esperado,
            "AQ Pago (R$)": item.aq_pago,
            "Remuneração Bruta Sujeita ao Teto (R$)": item.soma_remuneratoria,
            "Excesso de Teto Constitucional (R$)": item.excesso_teto,
            "Resultado do Diagnóstico": item.detalhe ? item.detalhe.replace(/<[^>]*>/g, " | ").replace(/\s+/g, " ").trim() : "Sem inconsistências",
            "Desvio Financeiro Geral (R$)": item.desvio
        }));

        const worksheet = XLSX.utils.json_to_sheet(exportData);
        const workbook = XLSX.utils.book_new();
        XLSX.book_append_sheet(workbook, worksheet, "Resultado_Auditoria");
        
        XLSX.writeFile(workbook, "Relatorio_Diagnostico_Auditado_Folha_Ativos.xlsx");
    } catch (err) {
        Swal.fire("Erro ao Exportar", "Falha local ao converter os dados estruturados para XLSX.", "error");
    }
}

/* --- [Seção] Orquestração Geral de Estados e Eventos --- */
function initProcessControl() {
    const triggerBtn = document.getElementById("btn-trigger-direct-audit");
    const filterAllBtn = document.getElementById("btn-filter-all-audited");
    const filterErrorsBtn = document.getElementById("btn-filter-only-errors");
    const exportBtn = document.getElementById("btn-export-final-xlsx");

    if (triggerBtn) {
        triggerBtn.addEventListener("click", () => {
            const hBrandBox = document.getElementById("header-brand-box");
            const hActiveBox = document.getElementById("header-active-box");
            const btnReset = document.getElementById("btn-reset-process");

            if (hBrandBox) hBrandBox.style.display = "none";
            if (hActiveBox) hActiveBox.style.display = "flex";
            if (btnReset) btnReset.style.display = "inline-flex";
            
            runDeterministicAudit();
        });
    }

    if (filterAllBtn) {
        filterAllBtn.addEventListener("click", (e) => {
            if (filterErrorsBtn) filterErrorsBtn.classList.remove("btn--active");
            e.currentTarget.classList.add("btn--active");
            AppState.filterOnlyErrors = false;
            AppState.currentPage = 1;
            filterAndPaginateFindings();
        });
    }

    if (filterErrorsBtn) {
        filterErrorsBtn.addEventListener("click", (e) => {
            if (filterAllBtn) filterAllBtn.classList.remove("btn--active");
            e.currentTarget.classList.add("btn--active");
            AppState.filterOnlyErrors = true;
            AppState.currentPage = 1;
            filterAndPaginateFindings();
        });
    }

    if (exportBtn) {
        exportBtn.addEventListener("click", exportAuditToXLSX);
    }
}

function initProcessReset() {
    const resetBtn = document.getElementById("btn-reset-process");
    if (!resetBtn) return;

    resetBtn.addEventListener("click", () => {
        Swal.fire({
            title: "Deseja mudar de folha?",
            text: "Os dados ativos da Sandbox de auditoria local serão descartados.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "var(--primary)",
            cancelButtonColor: "var(--text3)",
            confirmButtonText: "Sim, reiniciar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                AppState.rawRecords = [];
                AppState.pivotedServers = {};
                AppState.auditFindings = [];
                AppState.filteredFindings = [];
                AppState.currentPage = 1;
                AppState.itemsPerPage = 25;
                
                if (AppState.chartInstance) {
                    AppState.chartInstance.destroy();
                    AppState.chartInstance = null;
                }

                const hActiveBox = document.getElementById("header-active-box");
                const hBrandBox = document.getElementById("header-brand-box");
                const fInput = document.getElementById("file-input-raw");
                const uPreviewPanel = document.getElementById("upload-preview-panel");

                if (hActiveBox) hActiveBox.style.display = "none";
                if (resetBtn) resetBtn.style.display = "none";
                if (hBrandBox) hBrandBox.style.display = "block";

                if (uPreviewPanel) uPreviewPanel.style.display = "none";
                if (fInput) fInput.value = "";
                
                const dropzone = document.getElementById("file-dropzone");
                if (dropzone) {
                    dropzone.style.display = "block";
                    dropzone.style.opacity = "1";
                }

                const tableBody = document.querySelector("#audit-results-table tbody");
                if (tableBody) {
                    tableBody.innerHTML = `
                        <tr>
                            <td colspan="9" class="td-placeholder">
                                Aguardando processamento de dados para gerar relatório...
                            </td>
                        </tr>
                    `;
                }

                const paginationContainer = document.getElementById("table-pagination-controls");
                if (paginationContainer) paginationContainer.innerHTML = "";

                switchView("tab-dashboard");
                Swal.fire("Resetado", "Sandbox reiniciada em memória com sucesso.", "success");
            }
        });
    });
}