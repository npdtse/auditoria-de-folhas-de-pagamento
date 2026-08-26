/* ==========================================================================
   === [CAPÍTULO] CONFIGURAÇÃO E LINHA DO TEMPO DE TABELAS ===
   ========================================================================== */

/* --- [Seção] Dicionário Temporal de Tabelas Remuneratórias do TSE --- */
const TABELAS_HISTORICAS = {
    "2026_JUL": {
        label: "Julho/2026 em diante (Lei nº 15.293/2025)",
        vr: 771.55,
        tabelas: {
            "ANALISTA JUDICIARIO": [
                { classe: "C", padrao: 13, vencimento: 10035.51, gaj: 14049.71 },
                { classe: "C", padrao: 12, vencimento: 9743.22,  gaj: 13640.51 },
                { classe: "C", padrao: 11, vencimento: 9459.43,  gaj: 13243.20 },
                { classe: "B", padrao: 10, vencimento: 9183.91,  gaj: 12857.47 },
                { classe: "B", padrao: 9,  vencimento: 8916.43,  gaj: 12483.00 },
                { classe: "B", padrao: 8,  vencimento: 8435.59,  gaj: 11809.83 },
                { classe: "B", padrao: 7,  vencimento: 8189.89,  gaj: 11465.85 },
                { classe: "B", padrao: 6,  vencimento: 7951.36,  gaj: 11131.90 },
                { classe: "A", padrao: 5,  vencimento: 7719.75,  gaj: 10807.65 },
                { classe: "A", padrao: 4,  vencimento: 7494.93,  gaj: 10492.90 },
                { classe: "A", padrao: 3,  vencimento: 7090.74,  gaj: 9927.04 },
                { classe: "A", padrao: 2,  vencimento: 6884.20,  gaj: 9637.88 },
                { classe: "A", padrao: 1,  vencimento: 6683.70,  gaj: 9357.18 }
            ],
            "TECNICO JUDICIARIO": [
                { classe: "C", padrao: 13, vencimento: 6116.55, gaj: 8563.17 },
                { classe: "C", padrao: 12, vencimento: 5938.39, gaj: 8313.75 },
                { classe: "C", padrao: 11, vencimento: 5765.43, gaj: 8071.60 },
                { classe: "B", padrao: 10, vencimento: 5597.51, gaj: 7836.51 },
                { classe: "B", padrao: 9,  vencimento: 5434.45, gaj: 7608.23 },
                { classe: "B", padrao: 8,  vencimento: 5141.40, gaj: 7197.96 },
                { classe: "B", padrao: 7,  vencimento: 4991.65, gaj: 6988.31 },
                { classe: "B", padrao: 6,  vencimento: 4846.27, gaj: 6784.78 },
                { classe: "A", padrao: 5,  vencimento: 4705.12, gaj: 6587.17 },
                { classe: "A", padrao: 4,  vencimento: 4568.07, gaj: 6395.30 },
                { classe: "A", padrao: 3,  vencimento: 4321.73, gaj: 6050.42 },
                { classe: "A", padrao: 2,  vencimento: 4195.86, gaj: 5874.20 },
                { classe: "A", padrao: 1,  vencimento: 4073.63, gaj: 5703.08 }
            ]
        }
    },
    "2026_JAN": {
        label: "Janeiro/2026 a Junho/2026 (Lei nº 15.292/2025)",
        vr: 714.40,
        tabelas: {
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
        }
    }
};

/* --- [Seção] Códigos de Rubricas Mapeados --- */
const RUBRICA_VENCIMENTO = "1001";
const RUBRICA_GAJ = "2001";
const RUBRICA_GAS = "2002";

/* --- [Seção] Constantes de Tetos e Limites --- */
const TETO_CONSTITUCIONAL_STF = 46366.19; // Subsídio mensal de Ministro do STF (Art. 37, XI da CF/88)
const LIMITE_HORAS_EXTRAS_TSE = 17000.00; // Limite Administrativo de Trabalho Extraordinário (TSE / Art. 3º, IV da Res. CNJ 14/2006)
const VALOR_REFERENCIA_AQ = 714.40;       // Base padrão de VR

/* --- [Seção] Rol de Rubricas Indenizatórias, Benefícios e Abonos Excluídos do Teto --- */
const RUBRICAS_EXCLUIDAS_TETO = [
    "85001",   // Auxílio-Alimentação
    "85002",   // Auxílio-Saúde
    "85003",   // Assistência Pré-Escolar
    "85004",   // Auxílio-Natalidade
    "85005",   // Auxílio-Transporte
    "85006",   // Ajuda de Custo
    "85007",   // Diárias
    "27001",   // Abono de Permanência Ativo EC
    "8027001"  // Abono de Permanência EC nº 41/2003 RPPS
];

/* --- [Seção] Funções de Categorização Textual de Rubricas --- */
function isHorasExtras(desc) {
    const d = (desc || "").toString().toUpperCase();
    return d.includes("EXTRAORDINARIO") || d.includes("EXTRAORDINÁRIO") || d.includes("SERV EXTRA") || d.includes("PLEITOS") || d.includes("HORA EXTRA");
}

function isFerias(desc) {
    const d = (desc || "").toString().toUpperCase();
    return d.includes("FERIAS") || d.includes("FÉRIAS") || d.includes("TERCO") || d.includes("TERÇO") || d.includes("1/3");
}

function isGratificacaoNatalina(desc) {
    const d = (desc || "").toString().toUpperCase();
    return d.includes("NATALINA") || d.includes("13º") || d.includes("13 SALARIO") || d.includes("DECIMO TERCEIRO") || d.includes("DÉCIMO TERCEIRO");
}

function isAbonoPermanencia(cod, desc) {
    if (cod === "27001" || cod === "8027001") return true;
    const d = (desc || "").toString().toUpperCase();
    return d.includes("ABONO DE PERMANENCIA") || d.includes("ABONO DE PERMANÊNCIA") || d.includes("ABONO PERMANENCIA") || d.includes("ABONO PERMANÊNCIA") || d.includes("PERMANENCIA ATIVO");
}

function isBeneficioIndenizatorio(cod, desc) {
    if (RUBRICAS_EXCLUIDAS_TETO.includes(cod)) return true;
    if (isAbonoPermanencia(cod, desc)) return true;
    const d = (desc || "").toString().toUpperCase();
    return d.includes("ALIMENTACAO") || d.includes("ALIMENTAÇÃO") || d.includes("PRE ESCOLAR") || 
           d.includes("PRÉ-ESCOLAR") || d.includes("AUXILIO SAUDE") || d.includes("AUXÍLIO SAÚDE") || 
           d.includes("NATALIDADE") || d.includes("TRANSPORTE") || d.includes("DIARIA") || 
           d.includes("DIÁRIA") || d.includes("AJUDA DE CUSTO");
}

/* --- [Seção] Armazenamento de Estado Local (App Store) --- */
const AppState = {
    rawRecords: [],          // Registros brutos lidos
    pivotedServers: {},      // Servidores agrupados em memória
    auditFindings: [],       // Lista de auditoria e conclusões
    filteredFindings: [],    // Conclusões filtradas (ativas para tabela)
    isProcessing: false,     // Semáforo concorrente
    chartInstance: null,     // Instância ativa do Chart.js
    
    // Propriedades do Motor Temporal
    matchedCompetence: "N/A",
    activeTableKey: "2026_JAN",
    activeVR: 714.40,
    isIncompatibleCompetence: false,
    
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

/* --- [Seção] Resolvedor de Vigência com Conversor de Ordinal do Excel --- */
function resolveActiveTableConfig(competenciaStr) {
    if (!competenciaStr || competenciaStr === "N/A") {
        return { key: "2026_JAN", vr: 714.40, isIncompatible: false, label: "Janeiro/2026 (Padrão)", formattedDate: "N/A" };
    }

    let cleanComp = competenciaStr.toString().trim();
    let month = 1;
    let year = 2026;

    const numericComp = Number(cleanComp);
    if (!isNaN(numericComp) && numericComp > 30000 && numericComp < 60000) {
        const excelEpoch = new Date(1899, 11, 30);
        const jsDate = new Date(excelEpoch.getTime() + numericComp * 86400 * 1000);
        month = jsDate.getMonth() + 1;
        year = jsDate.getFullYear();
        cleanComp = `${month.toString().padStart(2, '0')}/${year}`;
    } else {
        const parts = cleanComp.split(/[\/\.\-]/);
        if (parts.length >= 3) {
            if (parts[0].length === 4) {
                year = parseInt(parts[0]) || 2026;
                month = parseInt(parts[1]) || 1;
            } else {
                month = parseInt(parts[1]) || 1;
                year = parseInt(parts[2]) || 2026;
            }
        } else if (parts.length === 2) {
            if (parts[0].length === 4) {
                year = parseInt(parts[0]) || 2026;
                month = parseInt(parts[1]) || 1;
            } else {
                month = parseInt(parts[0]) || 1;
                year = parseInt(parts[1]) || 2026;
            }
        }
        cleanComp = `${month.toString().padStart(2, '0')}/${year}`;
    }

    if (year > 2026 || (year === 2026 && month >= 7)) {
        return { 
            key: "2026_JUL", 
            vr: TABELAS_HISTORICAS["2026_JUL"].vr, 
            isIncompatible: false, 
            label: TABELAS_HISTORICAS["2026_JUL"].label,
            formattedDate: cleanComp
        };
    } else if (year === 2026 && month >= 1) {
        return { 
            key: "2026_JAN", 
            vr: TABELAS_HISTORICAS["2026_JAN"].vr, 
            isIncompatible: false, 
            label: TABELAS_HISTORICAS["2026_JAN"].label,
            formattedDate: cleanComp
        };
    } else {
        return { 
            key: "2026_JAN", 
            vr: TABELAS_HISTORICAS["2026_JAN"].vr, 
            isIncompatible: true, 
            label: `Sem Tabela Histórica (${cleanComp}) — Espelho Jan/2026`,
            formattedDate: cleanComp
        };
    }
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
        { delay: 800, text: "Identificando competência e selecionando Tabela Salarial..." },
        { delay: 1400, text: "Mapeando e agregando rubricas regulares e suplementares..." },
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

/* --- [Seção] Pivoteamento com Mapeamento Multi-Competência de HE e Férias --- */
function pivotAndNormalizeData() {
    const servers = {};
    let matchedCompetence = "N/A";

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
        codigo_rendimento_desconto: ["codigo_rendimento_desconto", "codigo_rendimento", "rendimento_desconto", "cod_rend_desc", "tipo_rubrica"],
        competencia: ["mes_ano", "competencia", "mes", "compet"]
    };

    // Extração antecipada da competência
    for (const rec of AppState.rawRecords) {
        const keys = Object.keys(rec);
        const findCompKey = keys.find(k => fuzzyMap.competencia.some(pat => k.includes(pat)) && !k.includes("tipo"));
        if (findCompKey && rec[findCompKey] !== undefined && rec[findCompKey].toString().trim() !== "") {
            matchedCompetence = rec[findCompKey].toString().trim();
            break;
        }
    }

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
                tipo_competencia: parsedTipoComp,
                rubricas: {},
                detalheRubricas: []
            };
        }

        let cleanRendDesc = 1; 
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

            const descStr = descRubricaRaw ? descRubricaRaw.toString().trim() : "Sem descrição";

            if (parsedTipoComp === 0 && cleanRendDesc === 1) {
                servers[cleanId].rubricas[cleanRubrica] = (servers[cleanId].rubricas[cleanRubrica] || 0) + valorParsed;
            } else if (cleanRendDesc === 1 && (isHorasExtras(descStr) || isFerias(descStr) || isGratificacaoNatalina(descStr))) {
                servers[cleanId].rubricas[cleanRubrica] = (servers[cleanId].rubricas[cleanRubrica] || 0) + valorParsed;
            }

            servers[cleanId].detalheRubricas.push({
                codigo: cleanRubrica,
                descricao: descStr,
                valor: valorParsed,
                tipoRD: cleanRendDesc,
                tipoComp: parsedTipoComp
            });
        }
    });

    AppState.pivotedServers = servers;
    AppState.isProcessing = false;

    const tableConfig = resolveActiveTableConfig(matchedCompetence);
    AppState.matchedCompetence = tableConfig.formattedDate; 
    AppState.activeTableKey = tableConfig.key;
    AppState.activeVR = tableConfig.vr;
    AppState.isIncompatibleCompetence = tableConfig.isIncompatible;

    let activeServerCount = 0;
    for (const id in servers) {
        const s = servers[id];
        if (s.carreira.includes("ANALISTA")) {
            activeServerCount++;
        } else if (s.carreira.includes("TECNICO") || s.carreira.includes("TÉCNICO")) {
            activeServerCount++;
        }
    }

    const rowCountText = document.getElementById("preview-row-count");
    const serverCountText = document.getElementById("preview-server-count");
    
    if (rowCountText) rowCountText.textContent = `${AppState.rawRecords.length} lançamentos`;
    if (serverCountText) serverCountText.textContent = activeServerCount;

    let previewBanner = document.getElementById("preview-incompatible-banner");
    const previewPanel = document.getElementById("upload-preview-panel");

    if (AppState.isIncompatibleCompetence && previewPanel) {
        if (!previewBanner) {
            previewBanner = document.createElement("div");
            previewBanner.id = "preview-incompatible-banner";
            previewBanner.style.cssText = "margin-top: 16px; padding: 14px 16px; background-color: #FEF3C7; border: 1px solid #F59E0B; border-radius: 8px; font-size: 13.5px; color: #92400E; display: flex; align-items: center; gap: 10px;";
            previewPanel.appendChild(previewBanner);
        }
        previewBanner.style.display = "flex";
        previewBanner.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="font-size: 18px; color: #D97706;"></i> <div><strong>Aviso de Competência Histórica (${AppState.matchedCompetence}):</strong> Não há tabela salarial cadastrada para este ano no aplicativo. A auditoria usará a Tabela de Jan/2026 como espelho estático.</div>`;
    } else if (previewBanner) {
        previewBanner.style.display = "none";
    }

    const loader = document.getElementById("upload-loading-panel");
    if (loader) loader.style.display = "none";
    
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

async function runDeterministicAudit() {
    if (Object.keys(AppState.pivotedServers).length === 0) {
        Swal.fire("Aviso", "Não há dados em memória para processar.", "warning");
        return;
    }

    if (AppState.isIncompatibleCompetence) {
        await Swal.fire({
            icon: "warning",
            title: "Aviso de Inadequação de Tabela",
            html: `Competência da folha (<strong>${AppState.matchedCompetence}</strong>) anterior a 2026.<br><br>Não há tabela histórica cadastrada para este período no aplicativo. O diagnóstico será executado utilizando a <strong>Tabela de Janeiro/2026</strong> como referência estática de apoio.`,
            confirmButtonText: "Entendi, Continuar Auditoria",
            confirmButtonColor: "var(--primary)"
        });
    }

    Swal.fire({
        title: "Processando Auditoria",
        text: `Comparando valores contra a Tabela do TSE (${TABELAS_HISTORICAS[AppState.activeTableKey].label})...`,
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading()
    });

    const activeConfig = TABELAS_HISTORICAS[AppState.activeTableKey];
    const activeVR = activeConfig.vr;
    const activeTables = activeConfig.tabelas;

    const findings = [];
    let totalAudited = 0;
    let conformingCount = 0;
    let discrepancyCount = 0;

    for (const id in AppState.pivotedServers) {
        const server = AppState.pivotedServers[id];

        let normalizedCareer = "";
        if (server.carreira.includes("ANALISTA")) {
            normalizedCareer = "ANALISTA JUDICIARIO";
        } else if (server.carreira.includes("TECNICO") || server.carreira.includes("TÉCNICO")) {
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
        // SEGREGAÇÃO DE TETOS CONFORME RESOLUÇÃO CNJ Nº 14/2006 (ARTS. 3º E 4º)
        // =========================================================================
        let somaRemuneratoriaOrdinaria = 0;
        let somaHorasExtras = 0;
        let somaFerias = 0;
        let somaGratNatalina = 0;
        const rubricasTetoOrdinario = [];

        server.detalheRubricas.forEach(rub => {
            if (rub.tipoRD === 1) {
                const desc = rub.descricao;
                const cod = rub.codigo;

                if (isHorasExtras(desc)) {
                    somaHorasExtras += rub.valor;
                } else if (isFerias(desc)) {
                    somaFerias += rub.valor;
                } else if (isGratificacaoNatalina(desc)) {
                    somaGratNatalina += rub.valor;
                } else if (!isBeneficioIndenizatorio(cod, desc)) {
                    somaRemuneratoriaOrdinaria += rub.valor;
                    rubricasTetoOrdinario.push(rub);
                }
            }
        });

        // 1. Teto Constitucional Ordinário (R$ 46.366,19)
        const excessoTetoOrdinario = Math.max(0, somaRemuneratoriaOrdinaria - TETO_CONSTITUCIONAL_STF);
        const possuiExcessoTetoOrdinario = excessoTetoOrdinario > 0.01;

        // 2. Limite Específico de Horas Extras do TSE (R$ 17.000,00)
        const excessoLimiteHE = Math.max(0, somaHorasExtras - LIMITE_HORAS_EXTRAS_TSE);
        const possuiExcessoHE = excessoLimiteHE > 0.01;

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
                soma_ordinaria: somaRemuneratoriaOrdinaria,
                rubricas_teto_ordinario: rubricasTetoOrdinario,
                excesso_teto_ordinario: 0,
                soma_he: somaHorasExtras,
                excesso_he: 0,
                detalhe: `
                    <div class="audit-issue">
                        <span class="audit-issue__badge badge badge--neutral"><i class="fa-solid fa-user-slash"></i> Não Analisado</span>
                    </div>
                `,
                desvio: 0
            });
            conformingCount++;
            continue;
        }

        const referenceTable = activeTables[normalizedCareer];
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

            // Recálculo por Faixas de Piso de Direito do AQ
            let expectedAq = 0;
            let expectedT = 0; 
            let expectedQ = 0; 

            const rawT = server.rubricas["23001"] || 0;
            const coefT = rawT / activeVR;
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
            expectedT = matchedCoefT * activeVR;

            const rawQ = (server.rubricas["462001"] || 0) + (server.rubricas["463001"] || 0);
            const coefQ = rawQ / activeVR;
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
            expectedQ = matchedCoefQ * activeVR;

            expectedAq = expectedT + expectedQ;

            const isAqConforming = Math.abs(expectedAq - paidAq) < 0.1;

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

            if (isVencConforming && isGajConforming && isGasConforming && isAqConforming && !cadastralIssue && !possuiExcessoTetoOrdinario && !possuiExcessoHE) {
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
                    soma_ordinaria: somaRemuneratoriaOrdinaria,
                    rubricas_teto_ordinario: rubricasTetoOrdinario,
                    excesso_teto_ordinario: 0,
                    soma_he: somaHorasExtras,
                    excesso_he: 0,
                    detalhe: `
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--success"><i class="fa-solid fa-circle-check"></i> Conforme</span>
                        </div>
                    `,
                    desvio: 0
                });
                conformingCount++;
            } else {
                // Síntese compacta para a tabela
                let errorDetails = [];

                if (possuiExcessoTetoOrdinario) {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-gavel"></i> TETO ORDINÁRIO (STF)</span>
                            <div class="audit-issue__math">Pago: <strong>R$ ${somaRemuneratoriaOrdinaria.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> | Teto: <strong>R$ 46.366,19</strong></div>
                        </div>
                    `);
                }

                if (possuiExcessoHE) {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-clock"></i> LIMITE HORAS EXTRAS (TSE)</span>
                            <div class="audit-issue__math">Pago: <strong>R$ ${somaHorasExtras.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> | Limite: <strong>R$ 17.000,00</strong></div>
                        </div>
                    `);
                }
                
                if (!isVencConforming) {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-money-bill-wave"></i> VENCIMENTO</span>
                            <div class="audit-issue__math">Pago: <strong>R$ ${paidVenc.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> | Esperado: <strong>R$ ${expectedVenc.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong></div>
                        </div>
                    `);
                }
                
                if (!isGajConforming) {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-coins"></i> GAJ (140%)</span>
                            <div class="audit-issue__math">Paga: <strong>R$ ${paidGaj.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> | Esperada: <strong>R$ ${expectedGaj.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong></div>
                        </div>
                    `);
                }
                
                if (!isGasConforming) {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-shield-halved"></i> GAS (35%)</span>
                            <div class="audit-issue__math">Paga: <strong>R$ ${paidGas.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> | Esperada: <strong>R$ ${expectedGas.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong></div>
                        </div>
                    `);
                }
                
                if (!isAqConforming) {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-graduation-cap"></i> ADICIONAL QUALIFICAÇÃO</span>
                            <div class="audit-issue__math">Pago: <strong>R$ ${paidAq.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> | Esperado: <strong>R$ ${expectedAq.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong></div>
                        </div>
                    `);
                }
                
                if (cadastralIssue) {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-circle-exclamation"></i> ATRIBUIÇÃO FC/CJ</span>
                            <div class="audit-issue__math">${cadastralIssue}</div>
                        </div>
                    `);
                }

                const desvioFinanceiro = (paidVenc - expectedVenc) + (paidGaj - expectedGaj) + (paidGas - expectedGas) + (paidAq - expectedAq) + excessoTetoOrdinario + excessoLimiteHE;
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
                    soma_ordinaria: somaRemuneratoriaOrdinaria,
                    rubricas_teto_ordinario: rubricasTetoOrdinario,
                    excesso_teto_ordinario: excessoTetoOrdinario,
                    soma_he: somaHorasExtras,
                    excesso_he: excessoLimiteHE,
                    detalhe: detailHtml,
                    desvio: desvioFinanceiro
                });
                discrepancyCount++;
            }

        } else {
            const desvioTotal = paidVenc + paidGaj + excessoTetoOrdinario + excessoLimiteHE;
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
                soma_ordinaria: somaRemuneratoriaOrdinaria,
                rubricas_teto_ordinario: rubricasTetoOrdinario,
                excesso_teto_ordinario: excessoTetoOrdinario,
                soma_he: somaHorasExtras,
                excesso_he: excessoLimiteHE,
                detalhe: `
                    <div class="audit-issue">
                        <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-money-bill-wave"></i> VENCIMENTO</span>
                        <div class="audit-issue__math">Pago: <strong>R$ ${paidVenc.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> | Não consta na tabela</div>
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

    let auditBanner = document.getElementById("audit-incompatible-banner");
    const auditViewHeader = document.querySelector("#view-auditoria .view-header");

    if (AppState.isIncompatibleCompetence && auditViewHeader) {
        if (!auditBanner) {
            auditBanner = document.createElement("div");
            auditBanner.id = "audit-incompatible-banner";
            auditBanner.style.cssText = "margin-top: 16px; padding: 14px 16px; background-color: #FEF3C7; border: 1px solid #F59E0B; border-radius: 8px; font-size: 13.5px; color: #92400E; display: flex; align-items: center; gap: 10px; margin-bottom: 10px";
            auditViewHeader.appendChild(auditBanner);
        }
        auditBanner.style.display = "flex";
        auditBanner.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="font-size: 18px; color: #D97706;"></i> <div><strong>Folha de Período Histórico (${AppState.matchedCompetence}):</strong> Não há tabela remuneratória cadastrada para este ano. A análise utilizou a Tabela de Jan/2026 como espelho temporário.</div>`;
    } else if (auditBanner) {
        auditBanner.style.display = "none";
    }
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

    const activeConfig = TABELAS_HISTORICAS[AppState.activeTableKey];
    const activeVR = activeConfig.vr;

    let normalizedCareer = "";
    if (server.carreira.includes("ANALISTA")) {
        normalizedCareer = "ANALISTA JUDICIÁRIO";
    } else if (server.carreira.includes("TECNICO") || server.carreira.includes("TÉCNICO")) {
        normalizedCareer = "TÉCNICO JUDICIÁRIO";
    } else {
        normalizedCareer = server.carreira;
    }

    const formattedCpf = server.cpf ? server.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") : "Não Informado";
    const maskedCpf = server.cpf ? server.cpf.replace(/(\d{3})\d{3}\d{3}(\d{2})/, "$1.***.***-$2") : "***.***.***-**";
    const gradeStr = finding.classe !== "N/A" && finding.classe !== "Incompatível" ? `${finding.classe}-${finding.padrao}` : "Não enquadrado";
    
    const statusBadgeHtml = finding.status === "CONFORME" 
        ? `<span class="badge badge--success" style="font-size: 13px; padding: 6px 12px;">Conforme</span>` 
        : (finding.status === "SUPLEMENTAR" 
            ? `<span class="badge badge--neutral" style="font-size: 13px; padding: 6px 12px;">Suplementar</span>`
            : `<span class="badge badge--error" style="font-size: 13px; padding: 6px 12px;">Divergente</span>`);

    // Geração do Bloco 1: Detalhamento de Lançamentos em Folha (Limpo, sem tags redundantes)
    let rubricsHtml = "";
    server.detalheRubricas.forEach((rub, rIdx) => {
        // Etiqueta Padronizada de Folha Regular vs. Folha Suplementar
        const tagFolha = rub.tipoComp === 1
            ? `<span class="badge badge--neutral" style="font-size: 11px; padding: 2px 6px; background: #E0E7FF; color: #3730A3;">Folha Suplementar</span>`
            : `<span class="badge badge--neutral" style="font-size: 11px; padding: 2px 6px; background: #F1F5F9; color: #475569;">Folha Regular</span>`;

        // Microetiquetas de Enquadramento no Teto Constitucional
        let tagTetoClass = "";
        let tagTetoHtml = "";
        if (rub.tipoRD === 1) {
            if (isHorasExtras(rub.descricao)) {
                tagTetoHtml = `<span class="badge badge--neutral" style="font-size: 11px; padding: 2px 6px; background: #FEF3C7; color: #92400E;"><i class="fa-solid fa-clock" style="font-size: 9px; margin-right: 3px;"></i>Teto HE</span>`;
            } else if (isFerias(rub.descricao)) {
                tagTetoHtml = `<span class="badge badge--neutral" style="font-size: 11px; padding: 2px 6px; background: #F1F5F9; color: #64748B;">Fora do Teto (Férias)</span>`;
            } else if (isGratificacaoNatalina(rub.descricao)) {
                tagTetoHtml = `<span class="badge badge--neutral" style="font-size: 11px; padding: 2px 6px; background: #F1F5F9; color: #64748B;">Fora do Teto (13º Salário)</span>`;
            } else if (isAbonoPermanencia(rub.codigo, rub.descricao)) {
                tagTetoHtml = `<span class="badge badge--neutral" style="font-size: 11px; padding: 2px 6px; background: #ECFDF5; color: #065F46;">Fora do Teto (Abono Perm.)</span>`;
            } else if (isBeneficioIndenizatorio(rub.codigo, rub.descricao)) {
                tagTetoHtml = `<span class="badge badge--neutral" style="font-size: 11px; padding: 2px 6px; background: #F1F5F9; color: #64748B;">Fora do Teto (Indenizatória)</span>`;
            } else {
                tagTetoClass = "rubric-item-teto-ordinario";
                tagTetoHtml = `<span class="badge badge--neutral" style="font-size: 11px; padding: 2px 6px; background: #DBEAFE; color: #1E40AF; font-weight: 700;"><i class="fa-solid fa-calculator" style="font-size: 9px; margin-right: 3px;"></i>Teto Ordinário</span>`;
            }
        }

        rubricsHtml += `
            <div class="modal-rubric-row ${tagTetoClass}" id="rubric-row-${rIdx}" style="display: flex; justify-content: space-between; align-items: center; padding: 10px 8px; border-bottom: 1px solid var(--border); font-size: 14.5px; border-radius: 6px; transition: background 0.15s ease, border-color 0.15s ease;">
                <div style="text-align: left;">
                    <strong style="color: var(--text);">${rub.codigo}</strong> - <span style="color: var(--text2);">${rub.descricao}</span>
                    <div style="margin-top: 4px; display: flex; gap: 6px; flex-wrap: wrap;">${tagFolha}${tagTetoHtml}</div>
                </div>
                <strong style="color: ${rub.tipoRD === 1 ? 'var(--text)' : 'var(--color-conclusion)'}; white-space: nowrap; margin-left: 12px;">
                    ${rub.tipoRD === 1 ? '' : '- '}R$ ${rub.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </strong>
            </div>
        `;
    });

    const isVencConforming = Math.abs(finding.venc_pago - finding.venc_esperado) < 0.1;
    const isGajConforming = Math.abs(finding.gaj_paga - finding.gaj_esperada) < 0.1;
    const isGasConforming = Math.abs(finding.gas_paga - finding.gas_esperada) < 0.1;
    const isAqConforming = Math.abs(finding.aq_pago - finding.aq_esperado) < 0.1;
    const isTetoOrdConforming = finding.excesso_teto_ordinario <= 0.01;
    const isHeConforming = finding.excesso_he <= 0.01;

    const diffVenc = finding.venc_pago - finding.venc_esperado;
    const noteVenc = isVencConforming ? "" : `
        O vencimento básico de <strong>R$ ${finding.venc_pago.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> pago difere do previsto na Tabela Remuneratória Oficial do TSE para o padrão <strong>${gradeStr}</strong> (esperado: <strong>R$ ${finding.venc_esperado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>). 
        Diferença calculada: <strong style="color: var(--color-conclusion);">R$ ${diffVenc.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>.
    `;

    const diffGaj = finding.gaj_paga - finding.gaj_esperada;
    const noteGaj = isGajConforming ? "" : `
        A GAJ paga de <strong>R$ ${finding.gaj_paga.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> diverge de 140% sobre o Vencimento Básico do padrão <strong>${gradeStr}</strong> (R$ ${finding.venc_esperado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} &times; 140% = <strong>R$ ${finding.gaj_esperada.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>). 
        Desvio de <strong style="color: var(--color-conclusion);">R$ ${diffGaj.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>. (Artigo 13 da Lei nº 11.416/2006).
    `;
    
    let noteGas = "";
    if (!isGasConforming) {
        const diffGas = finding.gas_paga - finding.gas_esperada;
        if (finding.gas_esperada === 0 && finding.gas_paga > 0) {
            noteGas = `
                Recebimento indevido: foi pago <strong>R$ ${finding.gas_paga.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> de GAS (Adicional de Segurança), mas o servidor não possui atribuições policiais ativas. 
                Diferença a ser glosada: <strong style="color: var(--color-conclusion);">R$ ${diffGas.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>. (Artigo 17 da Lei nº 11.416/2006).
            `;
        } else {
            noteGas = `
                A GAS paga de <strong>R$ ${finding.gas_paga.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> diverge do percentual de 35% sobre o Vencimento Básico (R$ ${finding.venc_esperado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} &times; 35% = <strong>R$ ${finding.gas_esperada.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>). 
                Divergência: <strong style="color: var(--color-conclusion);">R$ ${diffGas.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>. (Artigo 17 da Lei nº 11.416/2006).
            `;
        }
    }

    let noteAq = "";
    if (!isAqConforming) {
        const calculatedCoefficient = finding.aq_pago / activeVR;
        const expectedCoefficient = finding.aq_esperado / activeVR;
        const diffAq = finding.aq_pago - finding.aq_esperado;

        if (calculatedCoefficient < 0.2) {
            noteAq = `
                O servidor recebeu R$ ${finding.aq_pago.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} (${calculatedCoefficient.toFixed(2)} VR). 
                Este valor é inferior ao bloco mínimo de 120h para Capacitações (0,20 VR = R$ ${(0.20 * activeVR).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}). O direito esperado é de <strong>0,00 VR (R$ 0,00)</strong>, gerando divergência integral de <strong style="color: var(--color-conclusion);">R$ ${finding.aq_pago.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>.
            `;
        } else {
            noteAq = `
                O servidor recebeu R$ ${finding.aq_pago.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} (${calculatedCoefficient.toFixed(2)} VR). 
                Com base na faixa legal da tabela vigente, o direito reconhecido é de <strong>${expectedCoefficient.toFixed(2)} VR (R$ ${finding.aq_esperado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })})</strong>. 
                Divergência residual em excesso a ser corrigida: <strong style="color: var(--color-conclusion);">R$ ${diffAq.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> (${(calculatedCoefficient - expectedCoefficient).toFixed(2)} VR).
            `;
        }
    }

    // Memória de Cálculo Discriminada para o Teto Constitucional Ordinário
    let tetoCompositionRows = "";
    (finding.rubricas_teto_ordinario || []).forEach(r => {
        tetoCompositionRows += `
            <div style="display: flex; justify-content: space-between; font-size: 13.5px; padding: 4px 0; border-bottom: 1px dashed var(--border);">
                <span><i class="fa-solid fa-angle-right" style="color: var(--primary); margin-right: 6px; font-size: 11px;"></i><strong>${r.codigo}</strong> - ${r.descricao}</span>
                <strong style="color: var(--text);">R$ ${r.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>
            </div>
        `;
    });

    const noteTetoOrd = `
        <div style="margin-bottom: 10px;">
            A remuneração ordinária bruta mensal apurada (<strong>R$ ${finding.soma_ordinaria.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>) — excluídas horas extras, férias, 13º salário, abono de permanência e auxílios indenizatórios — ${isTetoOrdConforming ? 'está <strong>em conformidade</strong> com o teto constitucional' : 'ultrapassa o teto constitucional geral do funcionalismo'} (<strong>R$ 46.366,19</strong>).
            ${!isTetoOrdConforming ? `Excesso bruto sujeito a corte: <strong style="color: var(--color-conclusion);">R$ ${finding.excesso_teto_ordinario.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>. (Art. 37, XI da CF/88 e Arts. 3º e 4º da Resolução CNJ nº 14/2006).` : ''}
        </div>
        <div style="background: var(--surface2); border: 1px solid var(--border); border-radius: 8px; padding: 12px; margin-top: 10px;" id="teto-breakdown-box">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-size: 12px; font-weight: 800; text-transform: uppercase; color: var(--primary); letter-spacing: 0.5px;">
                    <i class="fa-solid fa-list-check" style="margin-right: 4px;"></i> Memória de Cálculo — Composição da Base Ordinária
                </span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 2px;">
                ${tetoCompositionRows}
                <div style="display: flex; justify-content: space-between; font-size: 14px; padding-top: 8px; margin-top: 4px; border-top: 1.5px solid var(--border);">
                    <strong style="color: var(--text);">Total da Base Ordinária Apurada:</strong>
                    <strong style="color: var(--primary);">R$ ${finding.soma_ordinaria.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 13.5px; padding-top: 4px; color: var(--text2);">
                    <span>(-) Teto Constitucional (STF):</span>
                    <span>R$ ${TETO_CONSTITUCIONAL_STF.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 14px; padding-top: 4px; border-top: 1px solid var(--border);">
                    <strong style="color: var(--text);">(=) Glosa / Excesso de Teto:</strong>
                    <strong style="color: ${finding.excesso_teto_ordinario > 0.01 ? 'var(--color-conclusion)' : 'var(--color-start)'};">R$ ${finding.excesso_teto_ordinario.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>
                </div>
            </div>
        </div>
    `;

    let noteHe = "";
    if (!isHeConforming) {
        noteHe = `
            O total pago de serviço extraordinário / horas extras no mês (<strong>R$ ${finding.soma_he.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>) ultrapassa o limite máximo administrativo fixado pelo TSE (<strong>R$ 17.000,00</strong>). 
            Excesso a ser glosado: <strong style="color: var(--color-conclusion);">R$ ${finding.excesso_he.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>. (Art. 3º, IV da Resolução CNJ nº 14/2006 e Regulamento Interno do TSE).
        `;
    }

    const compRow = (label, paid, expected, conforms, icon, note = "", forceShowNote = false) => {
        const color = conforms ? "#10B981" : "#E11D48";
        const statusText = conforms ? "Conforme" : "Divergente";
        
        const noteHtml = ((!conforms && note) || forceShowNote) ? `
            <div style="margin-top: 10px; padding: 12px; background: var(--bg); border-radius: 8px; font-size: 14px; color: var(--text); line-height: 1.5;">
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
        ${compRow("Teto Constitucional Ordinário", finding.soma_ordinaria, TETO_CONSTITUCIONAL_STF, isTetoOrdConforming, "fa-solid fa-gavel", noteTetoOrd, true)}
        ${compRow("Limite de Horas Extras (TSE)", finding.soma_he, LIMITE_HORAS_EXTRAS_TSE, isHeConforming, "fa-solid fa-clock", noteHe)}
    `;

    const tableBadgeLabel = AppState.isIncompatibleCompetence 
        ? `<span class="badge badge--neutral" style="font-size: 11px; padding: 4px 8px; margin-left: 8px; background: #FEF3C7; color: #D97706;">Tabela Espelho Jan/2026</span>`
        : `<span class="badge badge--success" style="font-size: 11px; padding: 4px 8px; margin-left: 8px;">Tabela ${activeConfig.label.split(' ')[0]}</span>`;

    Swal.fire({
        width: '840px',
        showConfirmButton: true,
        confirmButtonText: 'Fechar Diagnóstico',
        confirmButtonColor: 'var(--primary)',
        background: 'var(--surface)',
        color: 'var(--text)',
        html: `
            <div style="font-family: var(--font-main); color: var(--text); padding-top: 6px; text-align: left;">
                
                <!-- SEÇÃO 1: CABEÇALHO COM MODO ANONIMIZADO / PRIVACIDADE -->
                <div style="border-bottom: 2px solid var(--border); padding-bottom: 16px; margin-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
                        <div style="flex: 1;">
                            <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                                <h3 style="font-size: 22px; font-weight: 800; color: var(--text); margin: 0;">
                                    Matrícula: <span style="color: var(--primary);">${server.id}</span>
                                </h3>
                                <button class="btn btn--secondary btn--compact" id="btn-toggle-privacy-detail" style="font-size: 11.5px; height: 28px; padding: 4px 10px; gap: 6px;">
                                    <i class="fa-solid fa-eye" id="privacy-eye-icon"></i>
                                    <span id="privacy-btn-text">Revelar Dados Pessoais</span>
                                </button>
                            </div>

                            <!-- Bloco de Dados Pessoais com Anonimização -->
                            <div id="privacy-personal-box" style="margin-top: 6px; font-size: 14.5px; color: var(--text2);">
                                <span id="label-server-name" style="font-weight: 700; color: var(--text3);">Nome: ••••••••••••••••••</span>
                                <span style="margin: 0 6px; color: var(--border);">|</span>
                                <span id="label-server-cpf" style="color: var(--text3);">CPF: ${maskedCpf}</span>
                            </div>

                            <p style="font-size: 14px; color: var(--text2); font-weight: 600; margin-top: 6px;">
                                ${normalizedCareer} • Padrão ${gradeStr} ${tableBadgeLabel}
                            </p>
                        </div>
                        <div style="text-align: right; flex-shrink: 0;">
                            ${statusBadgeHtml}
                        </div>
                    </div>
                </div>

                <!-- SEÇÃO 2: RAIO-X DE LANÇAMENTOS COM ALTURA AMPLIADA -->
                <div style="margin-bottom: 24px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <h4 style="font-size: 14.5px; font-weight: 700; color: var(--text3); text-transform: uppercase; margin: 0; letter-spacing: 0.5px;">
                            1. Detalhamento de Lançamentos em Folha
                        </h4>
                        <span style="font-size: 12px; color: var(--text3); font-weight: 600;">
                            ${server.detalheRubricas.length} rubricas registradas
                        </span>
                    </div>
                    <div style="max-height: 380px; overflow-y: auto; border: 1px solid var(--border); border-radius: 8px; padding: 4px 10px; background: var(--surface2);" id="modal-rubrics-container">
                        ${rubricsHtml}
                    </div>
                </div>

                <!-- SEÇÃO 3: CONCILIAÇÃO LEGAL E MEMÓRIA DE CÁLCULO -->
                <div style="margin-bottom: 16px;">
                    <h4 style="font-size: 14.5px; font-weight: 700; color: var(--text3); text-transform: uppercase; margin-bottom: 12px; letter-spacing: 0.5px;">
                        2. Conciliação contra Tabelas e Limites Legais
                    </h4>
                    <div style="display: flex; flex-direction: column;">
                        ${reconciliaHtml}
                    </div>
                </div>

                <!-- PAINEL DE SALDO CONSOLIDADO -->
                <div style="padding: 18px; background: var(--bg); border: 1px solid var(--border); border-radius: 12px; display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
                    <div>
                        <span style="font-size: 12.5px; font-weight: 700; color: var(--text3); text-transform: uppercase; display: block;">Saldo do Desvio Financeiro Consolidado</span>
                        <span style="font-size: 13.5px; color: var(--text2); display: block; margin-top: 2px;">Fundamentação: Art. 37, XI da CF/88, Res. CNJ nº 14/2006 e Regulamentos do TSE</span>
                    </div>
                    <strong style="font-size: 22px; color: ${finding.desvio === 0 ? 'var(--color-start)' : 'var(--color-conclusion)'}">R$ ${finding.desvio.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>
                </div>
            </div>
        `,
        didOpen: () => {
            // Controle de Anonimização / Revelação de Dados Pessoais
            let isRevealed = false;
            const privacyBtn = document.getElementById("btn-toggle-privacy-detail");
            const eyeIcon = document.getElementById("privacy-eye-icon");
            const btnText = document.getElementById("privacy-btn-text");
            const nameLabel = document.getElementById("label-server-name");
            const cpfLabel = document.getElementById("label-server-cpf");

            if (privacyBtn) {
                privacyBtn.addEventListener("click", () => {
                    isRevealed = !isRevealed;
                    if (isRevealed) {
                        eyeIcon.className = "fa-solid fa-eye-slash";
                        btnText.textContent = "Ocultar Dados Pessoais";
                        nameLabel.textContent = `Nome: ${server.nome}`;
                        nameLabel.style.color = "var(--text)";
                        cpfLabel.textContent = `CPF: ${formattedCpf}`;
                        cpfLabel.style.color = "var(--text)";
                    } else {
                        eyeIcon.className = "fa-solid fa-eye";
                        btnText.textContent = "Revelar Dados Pessoais";
                        nameLabel.textContent = "Nome: ••••••••••••••••••";
                        nameLabel.style.color = "var(--text3)";
                        cpfLabel.textContent = `CPF: ${maskedCpf}`;
                        cpfLabel.style.color = "var(--text3)";
                    }
                });
            }
        }
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
            "Remuneração Ordinária Sujeita ao Teto (R$)": item.soma_ordinaria,
            "Excesso de Teto Ordinário (R$)": item.excesso_teto_ordinario,
            "Total Horas Extras no Mês (R$)": item.soma_he,
            "Excesso Limite Horas Extras (R$)": item.excesso_he,
            "Resultado do Diagnóstico": item.detalhe ? item.detalhe.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim() : "Sem inconsistências",
            "Desvio Financeiro Geral Consolidado (R$)": item.desvio
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
                AppState.matchedCompetence = "N/A";
                AppState.activeTableKey = "2026_JAN";
                AppState.isIncompatibleCompetence = false;
                
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