/* ==========================================================================
   === [CAPÍTULO] CONFIGURAÇÃO E LINHA DO TEMPO DE TABELAS ===
   ========================================================================== */

/* --- [Seção] Configuração de Versão e Controle de Recursos (Feature Flags) --- */
const APP_CONFIG = {
    version: "1.2",
    features: {
        auditSubstituicao: false,
        auditAbono: false,
        exportXlsx: false
    }
};

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
        },
        fc: {
            "FC 1": 1312.57,
            "FC 2": 1526.19,
            "FC 3": 1776.07,
            "FC 4": 2498.33,
            "FC 5": 2875.02,
            "FC 6": 3956.81
        },
        cj: {
            "CJ 1": { integral: 11870.00, opcao: 7715.50 },
            "CJ 2": { integral: 14659.71, opcao: 9528.81 },
            "CJ 3": { integral: 16665.13, opcao: 10832.33 },
            "CJ 4": { integral: 18812.93, opcao: 12228.40 }
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
        },
        fc: {
            "FC 1": 1215.34,
            "FC 2": 1413.14,
            "FC 3": 1644.51,
            "FC 4": 2313.27,
            "FC 5": 2662.06,
            "FC 6": 3663.71
        },
        cj: {
            "CJ 1": { integral: 10990.74, opcao: 7143.98 },
            "CJ 2": { integral: 13573.81, opcao: 8822.98 },
            "CJ 3": { integral: 15430.68, opcao: 10029.94 },
            "CJ 4": { integral: 17419.38, opcao: 11322.60 }
        }
    }
};

/* --- [Seção] Valores Padrão de Benefícios Fixos (Vigência 2026) --- */
const VALOR_AUXILIO_ALIMENTACAO_2026 = 1860.51;
const VALOR_ASSISTENCIA_PRE_ESCOLAR_2026 = 1288.47;

/* --- [Seção] Códigos de Rubricas Estruturais --- */
const RUBRICA_VENCIMENTO = "1001";
const RUBRICA_GAJ = "2001";
const RUBRICA_GAS = "2002";
const RUBRICA_AQ_TREINAMENTO = "23001";
const RUBRICA_AQ_TITULACAO_1 = "462001";
const RUBRICA_AQ_TITULACAO_2 = "463001";

// Cargos em Comissão (CJ) e Funções Comissionadas (FC)
const RUBRICA_CJ_INTEGRAL = "19701";
const RUBRICAS_CJ_OPCAO = ["18001", "8018001", "18701"];
const RUBRICAS_FC = ["13001", "6001", "6401", "6701", "8006001"];

// Substituição de Função e Cargo em Comissão
const RUBRICAS_SUBSTITUICAO = ["50001", "50701", "50007", "50008", "50009"];

// Benefícios Indenizatórios Regulamentados
const RUBRICAS_ALIMENTACAO = ["85001", "85701", "8085701", "8086001", "86001"];
const RUBRICAS_PRE_ESCOLAR = ["90001", "90701", "93001"];

// Previdência do Regime Próprio (RPPS)
const RUBRICAS_DESCONTO_RPPS = [
    "6001000", "6008000", "6015000", "6017000", "6201000", "6326000", "6340000",
    "8001001", "8002001", "8023001"
];

// Abono de Permanência — Segregação entre Mês Corrente e Retroativo/Passivo
const RUBRICAS_ABONO_CORRENTE = ["27001", "8027001"];
const RUBRICAS_ABONO_RETROATIVO = [
    "27004", "27005", "27006", "27007", "27008", "27009",
    "29004", "29005", "29006"
];
const RUBRICAS_ABONO_PERMANENCIA = [...RUBRICAS_ABONO_CORRENTE, ...RUBRICAS_ABONO_RETROATIVO];

// Rol de Rubricas de VPNI e Quintos
const RUBRICAS_VPNI_BASE = [
    "20001", "25001", "230001", "232001", "235001", "236001", "237001", 
    "292001", "293001", "630001", "632001", "635001", "637001", "692001", 
    "693001", "225001", "226001", "626001", "8462001", "8463001"
];

/* --- [Seção] Constantes de Tetos e Limites Legais --- */
const TETO_CONSTITUCIONAL_STF = 46366.19;
const LIMITE_HORAS_EXTRAS_TSE = 17000.00;
const TETO_AQ_TITULACAO_VR = 5.0;
const TETO_AQ_TITULOS_MENORES_VR = 2.0;
const TETO_AQ_TREINAMENTO_VR = 0.60;
const TETO_GLOBAL_AQ_VR = 5.60;

/* --- [Seção] Rubricas Excluídas do Teto Remuneratório Ordinário --- */
const RUBRICAS_EXCLUIDAS_TETO = [
    "85001", "85701", "8085701", "8086001", "86001",
    "90001", "90701", "93001",
    "85002", "85004", "85005", "85006", "85007",
    "120001", "120004", "120701", "120704", "122001", "125001", "125701", "262001", "264001",
    "110001", "8111001",
    "42004", "42005", "42006", "42701",
    "27001", "27004", "27005", "27006", "27007", "27008", "27009",
    "29004", "29005", "29006", "8027001"
];

/* --- [Seção] Funções Utilitárias Gerais --- */
function formatMoeda(val) {
    const num = typeof val === "number" ? val : (parseFloat(val) || 0);
    return num.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function debounce(func, wait = 250) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/* --- [Seção] Tratamento e Normalização de Datas de Nascimento --- */
function parseDataNascimento(val) {
    if (val === undefined || val === null || val === "") return null;

    // 1. Conversor de número serial do Excel
    const numVal = Number(val);
    if (!isNaN(numVal) && numVal > 1000 && numVal < 60000) {
        const excelEpoch = new Date(1899, 11, 30);
        const jsDate = new Date(excelEpoch.getTime() + numVal * 86400 * 1000);
        const dia = jsDate.getDate();
        const mes = jsDate.getMonth() + 1;
        const ano = jsDate.getFullYear();
        return {
            dia: dia,
            mes: mes,
            ano: ano,
            strFormatada: `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`
        };
    }

    // 2. Leitura de string textual (DD/MM/AAAA ou AAAA-MM-DD)
    const strVal = val.toString().trim();
    const parts = strVal.split(/[\/\.\-]/);
    if (parts.length === 3) {
        let dia = 1, mes = 1, ano = 1970;
        if (parts[0].length === 4) {
            ano = parseInt(parts[0], 10);
            mes = parseInt(parts[1], 10);
            dia = parseInt(parts[2], 10);
        } else {
            dia = parseInt(parts[0], 10);
            mes = parseInt(parts[1], 10);
            ano = parseInt(parts[2], 10);
        }
        if (!isNaN(dia) && !isNaN(mes) && !isNaN(ano) && ano > 1900 && mes >= 1 && mes <= 12 && dia >= 1 && dia <= 31) {
            return {
                dia: dia,
                mes: mes,
                ano: ano,
                strFormatada: `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`
            };
        }
    }
    return null;
}

function calcularIdadeCompetencia(nascObj, compStr) {
    if (!nascObj || !compStr || compStr === "N/A") {
        return { idadeAnos: null, completouNoMes: false, jaTinha75Antes: false };
    }
    const parts = compStr.split(/[\/\.\-]/);
    if (parts.length < 2) return { idadeAnos: null, completouNoMes: false, jaTinha75Antes: false };

    const compMes = parseInt(parts[0], 10);
    const compAno = parseInt(parts[1], 10);

    if (isNaN(compMes) || isNaN(compAno)) {
        return { idadeAnos: null, completouNoMes: false, jaTinha75Antes: false };
    }

    let idade = compAno - nascObj.ano;
    let completouNoMes = false;
    let jaTinha75Antes = false;

    if (compMes < nascObj.mes) {
        idade--;
    } else if (compMes === nascObj.mes) {
        if (idade === 75) {
            completouNoMes = true;
        }
    }

    if (idade >= 75 && !completouNoMes) {
        jaTinha75Antes = true;
    }

    return {
        idadeAnos: idade,
        completouNoMes: completouNoMes,
        jaTinha75Antes: jaTinha75Antes
    };
}

/* --- [Seção] Funções de Categorização Textual --- */
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
    if (RUBRICAS_ABONO_PERMANENCIA.includes(cod)) return true;
    const d = (desc || "").toString().toUpperCase();
    return d.includes("ABONO DE PERMANENCIA") || d.includes("ABONO DE PERMANÊNCIA") || d.includes("ABONO PERMANENCIA") || d.includes("ABONO PERMANÊNCIA") || d.includes("PERMANENCIA ATIVO");
}

function isGECC(desc) {
    const d = (desc || "").toString().toUpperCase();
    return d.includes("CURSO/CONCURSO") || d.includes("CURSO E CONCURSO") || d.includes("ENCARGO DE CURSO") || d.includes("GECC") || d.includes("INSTRUTORIA");
}

function isGAACTA(desc) {
    const d = (desc || "").toString().toUpperCase();
    return d.includes("GAACTA") || d.includes("ALTA COMPLEXIDADE");
}

function isBeneficioIndenizatorio(cod, desc) {
    if (RUBRICAS_EXCLUIDAS_TETO.includes(cod)) return true;
    if (isAbonoPermanencia(cod, desc)) return true;
    if (isGECC(desc)) return true;
    if (isGAACTA(desc)) return true;
    const d = (desc || "").toString().toUpperCase();
    return d.includes("ALIMENTACAO") || d.includes("ALIMENTAÇÃO") || d.includes("PRE ESCOLAR") || 
           d.includes("PRÉ-ESCOLAR") || d.includes("AUXILIO SAUDE") || d.includes("AUXÍLIO SAÚDE") || 
           d.includes("NATALIDADE") || d.includes("TRANSPORTE") || d.includes("DIARIA") || 
           d.includes("DIÁRIA") || d.includes("AJUDA DE CUSTO") || d.includes("REEMBOLSO");
}

function isCargoComissao(cod, desc) {
    if (cod === RUBRICA_CJ_INTEGRAL || RUBRICAS_CJ_OPCAO.includes(cod)) return true;
    const d = (desc || "").toString().toUpperCase();
    return d.includes("CARGO EM COMISSAO") || d.includes("CARGO EM COMISSÃO") || d.includes("CJ-") || d.includes("CJ ");
}

function isFuncaoComissionada(cod, desc) {
    if (RUBRICAS_FC.includes(cod)) return true;
    const d = (desc || "").toString().toUpperCase();
    return (d.includes("FUNCAO COMISSIONADA") || d.includes("FUNÇÃO COMISSIONADA") || d.includes("FC-") || d.includes("FC ")) && !isCargoComissao(cod, desc) && !d.includes("SUBSTITU");
}

function isSubstituicaoComissao(cod, desc) {
    if (RUBRICAS_SUBSTITUICAO.includes(cod)) return true;
    const d = (desc || "").toString().toUpperCase();
    return d.includes("SUBSTITUICAO") || d.includes("SUBSTITUIÇÃO");
}

/* ==========================================================================
   === [CAPÍTULO] DETECTORES DETERMINÍSTICOS DE CÁLCULO ===
   ========================================================================== */

/* --- [Seção] Calendário Concreto do TSE: Mês da Folha (M) e Mês Anterior (M-1) --- */
function getCalendarioCompetencia(compStr) {
    const nomesMeses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    if (!compStr || compStr === "N/A") {
        return {
            diasMesAtual: 30,
            mesAtualNome: "mês corrente",
            diasMesAnterior: 30,
            mesAnteriorNome: "mês anterior",
            divisoresGerais: [{ divisor: 30, tipo: "M", rotulo: "mês da folha (base: 30 dias)" }],
            divisoresSubst: [{ divisor: 30, tipo: "M-1", rotulo: "mês anterior (base: 30 dias)" }]
        };
    }

    const parts = compStr.split(/[\/\.\-]/);
    if (parts.length >= 2) {
        const mes = parseInt(parts[0], 10);
        const ano = parseInt(parts[1], 10);

        if (!isNaN(mes) && !isNaN(ano) && mes >= 1 && mes <= 12 && ano > 1900) {
            const diasAtual = new Date(ano, mes, 0).getDate();
            const nomeAtual = nomesMeses[mes - 1];

            const mesAntNum = mes === 1 ? 12 : mes - 1;
            const anoAntNum = mes === 1 ? ano - 1 : ano;
            const diasAnt = new Date(anoAntNum, mesAntNum, 0).getDate();
            const nomeAnt = nomesMeses[mesAntNum - 1];

            const candAtual = { divisor: diasAtual, tipo: "M", rotulo: `mês da folha (${nomeAtual} - ${diasAtual} dias)` };
            const candAnterior = { divisor: diasAnt, tipo: "M-1", rotulo: `mês anterior (${nomeAnt} - ${diasAnt} dias)` };

            return {
                diasMesAtual: diasAtual,
                mesAtualNome: nomeAtual,
                diasMesAnterior: diasAnt,
                mesAnteriorNome: nomeAnt,
                divisoresGerais: [candAtual, candAnterior],
                divisoresSubst: [candAnterior, candAtual]
            };
        }
    }

    return {
        diasMesAtual: 30,
        mesAtualNome: "mês corrente",
        diasMesAnterior: 30,
        mesAnteriorNome: "mês anterior",
        divisoresGerais: [{ divisor: 30, tipo: "M", rotulo: "mês da folha (base: 30 dias)" }],
        divisoresSubst: [{ divisor: 30, tipo: "M-1", rotulo: "mês anterior (base: 30 dias)" }]
    };
}

/* --- [Seção] Detector de Vencimento e GAJ Proporcional --- */
function checkVencGajProportionalAdjustment(paidVenc, paidGaj, referenceTable) {
    if (!paidVenc || paidVenc <= 0 || !referenceTable || referenceTable.length === 0) return null;

    const cal = typeof AppState !== "undefined" ? getCalendarioCompetencia(AppState.matchedCompetence) : getCalendarioCompetencia("N/A");
    const isGajRatioExact = paidGaj > 0 && Math.abs((paidVenc * 1.40) - paidGaj) < 0.50;

    for (const cand of cal.divisoresGerais) {
        const divisor = cand.divisor;
        const maxDiasProporcionais = divisor - 1;

        for (let i = 0; i < referenceTable.length; i++) {
            const grade = referenceTable[i];
            const dailyVenc = grade.vencimento / divisor;
            const days = Math.round(paidVenc / dailyVenc);

            if (days >= 1 && days <= maxDiasProporcionais) {
                const expectedVencCalc = days * dailyVenc;
                if (Math.abs(paidVenc - expectedVencCalc) < 0.60) {
                    const expectedGajCalc = (grade.gaj / divisor) * days;
                    const gajMatch = (paidGaj === 0) || Math.abs(paidGaj - expectedGajCalc) < 0.60 || isGajRatioExact;

                    if (gajMatch) {
                        return {
                            tipo: "FRACAO_DIAS",
                            grade: grade,
                            classe: grade.classe,
                            padrao: grade.padrao,
                            dias: days,
                            divisor: divisor,
                            baseRotulo: cand.rotulo,
                            vencEsperado: paidVenc,
                            gajEsperada: paidGaj > 0 ? paidGaj : expectedGajCalc,
                            vencTabelaCheia: grade.vencimento,
                            gajTabelaCheia: grade.gaj
                        };
                    }
                }
            }
        }

        for (let i = referenceTable.length - 1; i > 0; i--) {
            const gradeAnt = referenceTable[i];
            const gradeNovo = referenceTable[i - 1];

            const dailyAnt = gradeAnt.vencimento / divisor;
            const dailyNovo = gradeNovo.vencimento / divisor;

            if (paidVenc > (gradeAnt.vencimento - 0.1) && paidVenc < (gradeNovo.vencimento + 0.1)) {
                for (let diasNovo = 1; diasNovo <= maxDiasProporcionais; diasNovo++) {
                    const diasAnt = divisor - diasNovo;
                    const calcVenc = (diasAnt * dailyAnt) + (diasNovo * dailyNovo);

                    if (Math.abs(paidVenc - calcVenc) < 0.60) {
                        const calcGaj = (diasAnt * (gradeAnt.gaj / divisor)) + (diasNovo * (gradeNovo.gaj / divisor));
                        const gajMatch = (paidGaj === 0) || Math.abs(paidGaj - calcGaj) < 0.60 || isGajRatioExact;

                        if (gajMatch) {
                            return {
                                tipo: "PROGRESSAO",
                                grade: gradeNovo,
                                classe: gradeNovo.classe,
                                padrao: `${gradeAnt.classe}${gradeAnt.padrao} ➔ ${gradeNovo.classe}${gradeNovo.padrao}`,
                                diasAnt: diasAnt,
                                diasNovo: diasNovo,
                                divisor: divisor,
                                baseRotulo: cand.rotulo,
                                gradeAnt: gradeAnt,
                                gradeNovo: gradeNovo,
                                vencEsperado: paidVenc,
                                gajEsperada: paidGaj > 0 ? paidGaj : calcGaj,
                                vencTabelaCheia: gradeNovo.vencimento,
                                gajTabelaCheia: gradeNovo.gaj
                            };
                        }
                    }
                }

                if (isGajRatioExact) {
                    return {
                        tipo: "TRANSICAO_FERIAS",
                        grade: gradeNovo,
                        classe: gradeNovo.classe,
                        padrao: `${gradeAnt.classe}${gradeAnt.padrao} ➔ ${gradeNovo.classe}${gradeNovo.padrao}`,
                        divisor: divisor,
                        baseRotulo: cand.rotulo,
                        gradeAnt: gradeAnt,
                        gradeNovo: gradeNovo,
                        vencEsperado: gradeAnt.vencimento,
                        gajEsperada: gradeAnt.gaj,
                        vencTabelaCheia: gradeNovo.vencimento,
                        gajTabelaCheia: gradeNovo.gaj
                    };
                }
            }
        }
    }

    return null;
}

/* --- [Seção] Detectores de AQ Titulação e Treinamento --- */
function checkAqTitProportionalAdjustment(paidAqTit, expectedAqTit, activeVR) {
    if (paidAqTit <= 0) return { isProportional: false, days: 0, divisor: 30, baseRotulo: "" };

    const cal = typeof AppState !== "undefined" ? getCalendarioCompetencia(AppState.matchedCompetence) : getCalendarioCompetencia("N/A");
    const diff = paidAqTit - expectedAqTit;

    for (const cand of cal.divisoresGerais) {
        const divisor = cand.divisor;
        const maxDiasProporcionais = divisor - 1;
        const dailyUnits = [
            (0.5 * activeVR) / divisor,
            (1.0 * activeVR) / divisor,
            (1.5 * activeVR) / divisor,
            (2.0 * activeVR) / divisor
        ];

        if (diff > 0.5) {
            for (const unit of dailyUnits) {
                const days = Math.round(diff / unit);
                if (days >= 1 && days <= maxDiasProporcionais && Math.abs(diff - days * unit) < 0.35) {
                    return { isProportional: true, days: days, divisor: divisor, baseRotulo: cand.rotulo };
                }
            }
        }

        if (expectedAqTit > 0 && paidAqTit < expectedAqTit) {
            for (const unit of dailyUnits) {
                const days = Math.round(paidAqTit / unit);
                if (days >= 1 && days <= maxDiasProporcionais && Math.abs(paidAqTit - days * unit) < 0.35) {
                    return { isProportional: true, days: days, divisor: divisor, baseRotulo: cand.rotulo };
                }
            }
        }
    }

    return { isProportional: false, days: 0, divisor: cal.diasMesAtual, baseRotulo: "" };
}

function checkAqTreinProportionalAdjustment(paidAqTrein, expectedAqTrein, activeVR) {
    if (paidAqTrein <= 0) return { isProportional: false, days: 0, divisor: 30, baseRotulo: "" };

    const cal = typeof AppState !== "undefined" ? getCalendarioCompetencia(AppState.matchedCompetence) : getCalendarioCompetencia("N/A");
    const diff = paidAqTrein - expectedAqTrein;

    for (const cand of cal.divisoresGerais) {
        const divisor = cand.divisor;
        const maxDiasProporcionais = divisor - 1;
        const dailyUnits = [
            (0.2 * activeVR) / divisor,
            (0.4 * activeVR) / divisor,
            (0.6 * activeVR) / divisor
        ];

        if (diff > 0.3) {
            for (const unit of dailyUnits) {
                const days = Math.round(diff / unit);
                if (days >= 1 && days <= maxDiasProporcionais && Math.abs(diff - days * unit) < 0.25) {
                    return { isProportional: true, days: days, divisor: divisor, baseRotulo: cand.rotulo };
                }
            }
        }

        if (expectedAqTrein > 0 && paidAqTrein < expectedAqTrein) {
            for (const unit of dailyUnits) {
                const days = Math.round(paidAqTrein / unit);
                if (days >= 1 && days <= maxDiasProporcionais && Math.abs(paidAqTrein - days * unit) < 0.25) {
                    return { isProportional: true, days: days, divisor: divisor, baseRotulo: cand.rotulo };
                }
            }
        }
    }

    return { isProportional: false, days: 0, divisor: cal.diasMesAtual, baseRotulo: "" };
}

/* --- [Seção] Detector de Funções e Cargos Comissionados --- */
function checkCommissionProportionalAdjustment(paidValue, expectedFullValue) {
    const cal = typeof AppState !== "undefined" ? getCalendarioCompetencia(AppState.matchedCompetence) : getCalendarioCompetencia("N/A");
    if (paidValue <= 0 || expectedFullValue <= 0) return { isProportional: false, days: 0, divisor: cal.diasMesAtual, baseRotulo: "" };

    for (const cand of cal.divisoresGerais) {
        const divisor = cand.divisor;
        if (Math.abs(paidValue - expectedFullValue) < 0.10) {
            return { isProportional: false, days: divisor, divisor: divisor, baseRotulo: cand.rotulo };
        }

        const dailyUnit = expectedFullValue / divisor;
        const days = Math.round(paidValue / dailyUnit);
        const maxDiasProporcionais = divisor - 1;

        if (days >= 1 && days <= maxDiasProporcionais) {
            if (Math.abs(paidValue - days * dailyUnit) < 0.30) {
                return { isProportional: true, days: days, divisor: divisor, baseRotulo: cand.rotulo };
            }
        }
    }

    return { isProportional: false, days: 0, divisor: cal.diasMesAtual, baseRotulo: "" };
}

/* --- [Seção] Detector de Substituição de FC e CJ --- */
function checkSubstituicaoComissao(paidSubst, titularSigla, activeFcTable, activeCjTable) {
    if (!paidSubst || paidSubst <= 0) return null;

    const hierarquia = [
        { cargo: "FC 1", valor: activeFcTable["FC 1"] || 0 },
        { cargo: "FC 2", valor: activeFcTable["FC 2"] || 0 },
        { cargo: "FC 3", valor: activeFcTable["FC 3"] || 0 },
        { cargo: "FC 4", valor: activeFcTable["FC 4"] || 0 },
        { cargo: "FC 5", valor: activeFcTable["FC 5"] || 0 },
        { cargo: "FC 6", valor: activeFcTable["FC 6"] || 0 },
        { cargo: "CJ 1", valor: (activeCjTable["CJ 1"] && activeCjTable["CJ 1"].opcao) || 0 },
        { cargo: "CJ 2", valor: (activeCjTable["CJ 2"] && activeCjTable["CJ 2"].opcao) || 0 },
        { cargo: "CJ 3", valor: (activeCjTable["CJ 3"] && activeCjTable["CJ 3"].opcao) || 0 },
        { cargo: "CJ 4", valor: (activeCjTable["CJ 4"] && activeCjTable["CJ 4"].opcao) || 0 }
    ];

    let cleanTitular = (titularSigla || "").trim().toUpperCase().replace("-", " ");
    cleanTitular = cleanTitular.replace(/FC\s*0?(\d)/g, "FC $1").replace(/CJ\s*0?(\d)/g, "CJ $1");
    const matchCargo = cleanTitular.match(/^(FC\s*\d|CJ\s*\d)/);
    if (matchCargo) {
        cleanTitular = matchCargo[1].replace(/\s+/, " ");
    }

    const titularItem = hierarquia.find(h => h.cargo === cleanTitular);
    const cal = typeof AppState !== "undefined" ? getCalendarioCompetencia(AppState.matchedCompetence) : getCalendarioCompetencia("N/A");
    const divisores = cal.divisoresSubst;

    if (titularItem && titularItem.valor > 0) {
        const titularIndex = hierarquia.indexOf(titularItem);
        for (let i = titularIndex + 1; i < hierarquia.length; i++) {
            const superiorItem = hierarquia[i];
            const deltaValor = superiorItem.valor - titularItem.valor;

            for (const cand of divisores) {
                const divisor = cand.divisor;
                const deltaDiaria = deltaValor / divisor;
                const days = Math.round(paidSubst / deltaDiaria);

                if (days >= 1 && days <= divisor) {
                    if (Math.abs(paidSubst - days * deltaDiaria) < 0.45) {
                        return {
                            tipo: "DIFERENCA",
                            cargoSubstituido: superiorItem.cargo,
                            cargoTitular: titularItem.cargo,
                            dias: days,
                            divisor: divisor,
                            baseRotulo: cand.rotulo,
                            valorPago: paidSubst,
                            deltaDiaria: deltaDiaria,
                            diariaSuperior: superiorItem.valor / divisor,
                            diariaTitular: titularItem.valor / divisor,
                            valorSuperiorCheio: superiorItem.valor,
                            valorTitularCheio: titularItem.valor
                        };
                    }
                }
            }
        }
    }

    for (let i = 0; i < hierarquia.length; i++) {
        const item = hierarquia[i];
        if (item.valor > 0) {
            for (const cand of divisores) {
                const divisor = cand.divisor;
                const diaria = item.valor / divisor;
                const days = Math.round(paidSubst / diaria);

                if (days >= 1 && days <= divisor) {
                    if (Math.abs(paidSubst - days * diaria) < 0.45) {
                        return {
                            tipo: "PLENA",
                            cargoSubstituido: item.cargo,
                            cargoTitular: cleanTitular || "Sem função titular",
                            dias: days,
                            divisor: divisor,
                            baseRotulo: cand.rotulo,
                            valorPago: paidSubst,
                            diariaSuperior: diaria,
                            valorSuperiorCheio: item.valor
                        };
                    }
                }
            }
        }
    }

    for (let t = 0; t < hierarquia.length; t++) {
        const tItem = hierarquia[t];
        for (let s = t + 1; s < hierarquia.length; s++) {
            const sItem = hierarquia[s];
            const deltaValor = sItem.valor - tItem.valor;

            for (const cand of divisores) {
                const divisor = cand.divisor;
                const deltaDiaria = deltaValor / divisor;
                const days = Math.round(paidSubst / deltaDiaria);

                if (days >= 1 && days <= divisor) {
                    if (Math.abs(paidSubst - days * deltaDiaria) < 0.45) {
                        return {
                            tipo: "DIFERENCA",
                            cargoSubstituido: sItem.cargo,
                            cargoTitular: tItem.cargo,
                            dias: days,
                            divisor: divisor,
                            baseRotulo: cand.rotulo,
                            valorPago: paidSubst,
                            deltaDiaria: deltaDiaria,
                            diariaSuperior: sItem.valor / divisor,
                            diariaTitular: tItem.valor / divisor,
                            valorSuperiorCheio: sItem.valor,
                            valorTitularCheio: tItem.valor
                        };
                    }
                }
            }
        }
    }

    return null;
}

/* --- [Seção] Detector de Benefícios Indenizatórios --- */
function checkBeneficioProportionalAdjustment(paidValue, fullMonthlyValue) {
    const cal = typeof AppState !== "undefined" ? getCalendarioCompetencia(AppState.matchedCompetence) : getCalendarioCompetencia("N/A");
    if (paidValue <= 0 || fullMonthlyValue <= 0) return { isConforme: false, isProportional: false, days: 0, cotas: 0, divisor: cal.diasMesAtual, baseRotulo: "" };

    const cotas = Math.round(paidValue / fullMonthlyValue);
    if (cotas >= 1 && Math.abs(paidValue - cotas * fullMonthlyValue) < 0.25) {
        return { isConforme: true, isProportional: false, days: cal.diasMesAtual, cotas: cotas, divisor: cal.diasMesAtual, baseRotulo: cal.divisoresGerais[0].rotulo };
    }

    for (const cand of cal.divisoresGerais) {
        const divisor = cand.divisor;
        const dailyUnit = fullMonthlyValue / divisor;
        const days = Math.round(paidValue / dailyUnit);
        const maxDiasProporcionais = divisor - 1;

        if (days >= 1 && days <= maxDiasProporcionais && Math.abs(paidValue - days * dailyUnit) < 0.35) {
            return { isConforme: true, isProportional: true, days: days, cotas: 1, divisor: divisor, baseRotulo: cand.rotulo };
        }
    }

    return { isConforme: false, isProportional: false, days: 0, cotas: 0, divisor: cal.diasMesAtual, baseRotulo: "" };
}

/* --- [Seção] Cálculo da Contribuição Previdenciária Progressiva (RPPS 2026) --- */
function calcularRppsProgressivo2026(baseCalculo) {
    if (!baseCalculo || baseCalculo <= 0) return 0;

    let valor = 0;
    if (baseCalculo <= 1621.00) {
        valor = baseCalculo * 0.075;
    } else if (baseCalculo <= 2902.84) {
        valor = (baseCalculo * 0.09) - 24.33;
    } else if (baseCalculo <= 4354.27) {
        valor = (baseCalculo * 0.12) - 111.41;
    } else if (baseCalculo <= 8475.55) {
        valor = (baseCalculo * 0.14) - 198.51;
    } else if (baseCalculo <= 14514.30) {
        valor = (baseCalculo * 0.145) - 240.89;
    } else if (baseCalculo <= 29028.57) {
        valor = (baseCalculo * 0.165) - 531.18;
    } else if (baseCalculo <= 56605.73) {
        valor = (baseCalculo * 0.19) - 1256.90;
    } else {
        valor = (baseCalculo * 0.22) - 2955.08;
    }

    return Math.round(valor * 100) / 100;
}

/* --- [Seção] Detector Determinístico de Abono de Permanência --- */
function checkAbonoPermanenciaProportional(paidAbonoCorrente, paidAbonoRetroativo, rppsDiscountValue, baseCargoEfetivo, serverAgeInfo) {
    const totalAbono = paidAbonoCorrente + paidAbonoRetroativo;
    const cal = typeof AppState !== "undefined" ? getCalendarioCompetencia(AppState.matchedCompetence) : getCalendarioCompetencia("N/A");

    if (totalAbono <= 0) {
        return { isConforme: false, isProportional: false, tipo: "INEXISTENTE", days: 0, divisor: cal.diasMesAtual, baseRotulo: "", rppsEsperado: rppsDiscountValue, baseEfetivo: baseCargoEfetivo, desvio: 0 };
    }

    // Regra da Aposentadoria Compulsória aos 75 Anos
    if (serverAgeInfo && serverAgeInfo.jaTinha75Antes) {
        return {
            isConforme: false,
            isProportional: false,
            tipo: "COMPULSORIA_ULTRAPASSADA",
            days: cal.diasMesAtual,
            divisor: cal.diasMesAtual,
            baseRotulo: cal.divisoresGerais[0].rotulo,
            rppsEsperado: 0,
            desvio: totalAbono,
            baseEfetivo: baseCargoEfetivo,
            abonoRetroativo: paidAbonoRetroativo
        };
    }

    // Anomalia: Abono recebido sem desconto de previdência no mês
    if (paidAbonoCorrente > 0 && rppsDiscountValue <= 0) {
        return {
            isConforme: false,
            isProportional: false,
            tipo: "SEM_RETENCAO",
            days: cal.diasMesAtual,
            divisor: cal.diasMesAtual,
            baseRotulo: cal.divisoresGerais[0].rotulo,
            rppsEsperado: 0,
            desvio: paidAbonoCorrente,
            baseEfetivo: baseCargoEfetivo,
            abonoRetroativo: paidAbonoRetroativo
        };
    }

    // Anomalia: Abono corrente maior que o desconto total do contracheque
    if (paidAbonoCorrente > rppsDiscountValue + 1.00) {
        return {
            isConforme: false,
            isProportional: false,
            tipo: "EXCESSO",
            days: cal.diasMesAtual,
            divisor: cal.diasMesAtual,
            baseRotulo: cal.divisoresGerais[0].rotulo,
            rppsEsperado: rppsDiscountValue,
            desvio: paidAbonoCorrente - rppsDiscountValue,
            baseEfetivo: baseCargoEfetivo,
            abonoRetroativo: paidAbonoRetroativo
        };
    }

    const rppsEfetivoCalculado = calcularRppsProgressivo2026(baseCargoEfetivo);
    const abonoTestar = paidAbonoCorrente > 0 ? paidAbonoCorrente : 0;

    // Teste 1: Reembolso Total (espelha 100% da previdência descontada no holerite)
    if (abonoTestar > 0 && rppsDiscountValue > 0 && Math.abs(abonoTestar - rppsDiscountValue) < 0.60) {
        return {
            isConforme: true,
            isProportional: false,
            tipo: "RPPS_TOTAL",
            days: cal.diasMesAtual,
            divisor: cal.diasMesAtual,
            baseRotulo: cal.divisoresGerais[0].rotulo,
            rppsEsperado: abonoTestar,
            rppsEfetivo: rppsEfetivoCalculado,
            abonoRetroativo: paidAbonoRetroativo,
            baseEfetivo: baseCargoEfetivo,
            desvio: 0
        };
    }

    // Teste 2: Reembolso do Cargo Efetivo (previdência sobre FC/CJ sem reembolso)
    if (abonoTestar > 0 && rppsEfetivoCalculado > 0 && Math.abs(abonoTestar - rppsEfetivoCalculado) < 0.60) {
        return {
            isConforme: true,
            isProportional: false,
            tipo: "RPPS_EFETIVO",
            days: cal.diasMesAtual,
            divisor: cal.diasMesAtual,
            baseRotulo: cal.divisoresGerais[0].rotulo,
            rppsEsperado: abonoTestar,
            rppsTotalHolerite: rppsDiscountValue,
            abonoRetroativo: paidAbonoRetroativo,
            baseEfetivo: baseCargoEfetivo,
            desvio: 0
        };
    }

    // Teste 3: Pagamento Proporcional de Concessão no Mês (Alerta de Atenção)
    if (abonoTestar > 0 && rppsEfetivoCalculado > 0 && abonoTestar < rppsEfetivoCalculado) {
        for (const cand of cal.divisoresGerais) {
            const divisor = cand.divisor;
            const maxDiasProporcionais = divisor - 1;
            const dailyEfetivo = rppsEfetivoCalculado / divisor;
            const days = Math.round(abonoTestar / dailyEfetivo);

            if (days >= 1 && days <= maxDiasProporcionais && Math.abs(abonoTestar - days * dailyEfetivo) < 0.60) {
                return {
                    isConforme: true,
                    isProportional: true,
                    tipo: "PROPORCIONAL_EFETIVO",
                    days: days,
                    divisor: divisor,
                    baseRotulo: cand.rotulo,
                    rppsEsperado: abonoTestar,
                    rppsEfetivoCheio: rppsEfetivoCalculado,
                    abonoRetroativo: paidAbonoRetroativo,
                    baseEfetivo: baseCargoEfetivo,
                    desvio: 0
                };
            }
        }
    }

    // Teste 4: Se não houver abono corrente mas houver apenas retroativo/passivo
    if (paidAbonoRetroativo > 0 && paidAbonoCorrente === 0) {
        return {
            isConforme: true,
            isProportional: false,
            tipo: "PASSIVO_RETROATIVO",
            days: cal.diasMesAtual,
            divisor: cal.diasMesAtual,
            baseRotulo: cal.divisoresGerais[0].rotulo,
            rppsEsperado: totalAbono,
            abonoRetroativo: paidAbonoRetroativo,
            baseEfetivo: baseCargoEfetivo,
            desvio: 0
        };
    }

    // Divergência de cálculo
    const baseEsperada = rppsEfetivoCalculado > 0 ? rppsEfetivoCalculado : rppsDiscountValue;
    return {
        isConforme: false,
        isProportional: false,
        tipo: "DIVERGENTE",
        days: cal.diasMesAtual,
        divisor: cal.diasMesAtual,
        baseRotulo: cal.divisoresGerais[0].rotulo,
        rppsEsperado: baseEsperada,
        desvio: Math.abs(abonoTestar - baseEsperada),
        baseEfetivo: baseCargoEfetivo,
        abonoRetroativo: paidAbonoRetroativo
    };
}

/* --- [Seção] Armazenamento de Estado Local (App Store) --- */
const AppState = {
    rawRecords: [],
    pivotedServers: {},
    auditFindings: [],
    filteredFindings: [],
    isProcessing: false,
    chartInstance: null,
    matchedCompetence: "N/A",
    activeTableKey: "2026_JAN",
    activeVR: 714.40,
    isIncompatibleCompetence: false,
    currentPage: 1,
    itemsPerPage: 25,
    activeFilter: "alerts",
    alertTypeFilter: "all",
    searchQuery: "",
    sortField: "id",
    sortDirection: "asc"
};

/* ==========================================================================
   === [CAPÍTULO] INICIALIZAÇÃO E NAVEGAÇÃO ===
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initAppNavigation();
    initThemeManager();
    initDropzoneHandlers();
    initProcessControl();
    initProcessReset();

    switchView("tab-dashboard");
});

function switchView(targetTabId) {
    const viewMap = {
        "tab-dashboard": "view-dashboard",
        "tab-auditoria": "view-auditoria"
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
    document.querySelectorAll(".sidebar__menu-item[id^='tab-']").forEach(tab => {
        tab.addEventListener("click", (e) => {
            const tabId = e.currentTarget.id;
            if (tabId === "tab-auditoria" && AppState.auditFindings.length === 0) {
                Swal.fire({
                    icon: "info",
                    title: "Aba Bloqueada",
                    text: "Faça o upload da folha e execute o diagnóstico primeiro.",
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
            let totalActiveRubrics = 0;
            let divergentRubricsCount = 0;
            let attentionRubricsCount = 0;

            AppState.auditFindings.forEach(f => {
                const s = AppState.pivotedServers[f.id];
                if (s && (f.status === "CONFORME" || f.status === "ATENCAO" || f.status === "PROPORCIONAL")) {
                    totalActiveRubrics += s.detalheRubricas.length;
                }
                if (f.has_venc_error) divergentRubricsCount++;
                if (f.has_gaj_error) divergentRubricsCount++;
                if (f.has_gas_error) divergentRubricsCount++;
                if (f.aq_tit_status === "DIVERGENTE") divergentRubricsCount++;
                if (f.aq_trein_status === "DIVERGENTE") divergentRubricsCount++;
                if (f.fccj_status === "DIVERGENTE") divergentRubricsCount++;
                if (APP_CONFIG.features.auditSubstituicao && f.subst_status === "DIVERGENTE") divergentRubricsCount++;
                if (f.alim_status === "DIVERGENTE") divergentRubricsCount++;
                if (f.pre_status === "DIVERGENTE") divergentRubricsCount++;
                if (APP_CONFIG.features.auditAbono && f.abono_status === "DIVERGENTE") divergentRubricsCount++;
                if (f.has_cadastral_error) divergentRubricsCount++;
                if (f.has_compulsoria_error) divergentRubricsCount++;
                if (f.has_teto_error) divergentRubricsCount++;
                if (f.has_he_error) divergentRubricsCount++;
                
                if (f.is_venc_prop) attentionRubricsCount++;
                if (f.aq_tit_status === "PROPORCIONAL") attentionRubricsCount++;
                if (f.aq_trein_status === "PROPORCIONAL") attentionRubricsCount++;
                if (f.fccj_status === "ATENCAO" || f.fccj_status === "PROPORCIONAL") attentionRubricsCount++;
                if (APP_CONFIG.features.auditSubstituicao && f.subst_status === "PROPORCIONAL") attentionRubricsCount++;
                if (f.alim_status === "PROPORCIONAL") attentionRubricsCount++;
                if (f.pre_status === "PROPORCIONAL") attentionRubricsCount++;
                if (APP_CONFIG.features.auditAbono && (f.abono_status === "ATENCAO" || f.abono_status === "PROPORCIONAL")) attentionRubricsCount++;
                if (f.has_compulsoria_atencao) attentionRubricsCount++;
            });

            const conformingRubricsCount = Math.max(0, totalActiveRubrics - divergentRubricsCount - attentionRubricsCount);
            renderComplianceChart(conformingRubricsCount, attentionRubricsCount, divergentRubricsCount);
        }
    });
}

/* ==========================================================================
   === [CAPÍTULO] INGESTÃO E PIVOTAGEM DE DADOS ===
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
        { delay: 800, text: "Identificando competência e selecionando Tabelas Salariais..." },
        { delay: 1400, text: "Mapeando e segregando rubricas, datas de nascimento e vantagens..." },
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
        AppState.isProcessing = true;
        runVisualLoadingProgress(() => {
            Papa.parse(file, {
                skipEmptyLines: true,
                header: false,
                delimiter: "#",
                encoding: "ISO-8859-1",
                complete: function(results) {
                    parseMatrixData(results.data);
                },
                error: function() {
                    Swal.fire("Erro de Leitura", "Falha ao processar o arquivo de texto local.", "error");
                    resetFileUIPanel();
                }
            });
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

function pivotAndNormalizeData() {
    const servers = {};
    let matchedCompetence = "N/A";

    const fuzzyMap = {
        id: ["identificacao_unica", "matricula", "id", "identific", "cod_servidor"],
        nome: ["nome", "servidor", "nome_do_servidor"],
        cpf: ["cpf", "documento", "num_cpf"],
        data_nascimento: ["data_nascimento", "data_de_nascimento", "dt_nascimento", "nascimento", "dtnasc", "dt_nasc"],
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
        const dataNascRaw = getVal(fuzzyMap.data_nascimento);
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
            const parsedNasc = parseDataNascimento(dataNascRaw);
            servers[cleanId] = {
                id: cleanId,
                nome: nomeRaw ? nomeRaw.toString().trim() : "Não Informado",
                cpf: cpfRaw ? cpfRaw.toString().replace(/[^\d]/g, "") : "",
                data_nascimento: parsedNasc ? parsedNasc.strFormatada : "",
                nascimento_obj: parsedNasc,
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
            cleanRubrica = cleanRubrica.replace(/^0+/, "") || "0";

            const descStr = descRubricaRaw ? descRubricaRaw.toString().trim() : "Sem descrição";

            if (parsedTipoComp === 0) {
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

    let countActiveServers = 0;
    let countNonAuditedServers = 0;
    let countAuditedRubrics = 0;
    let countNonAuditedRubrics = 0;

    for (const id in servers) {
        const s = servers[id];
        const isAnalistaOrTecnico = s.carreira.includes("ANALISTA") || s.carreira.includes("TECNICO") || s.carreira.includes("TÉCNICO");
        const paidVenc = s.rubricas[RUBRICA_VENCIMENTO] || 0;
        const paidGaj = s.rubricas[RUBRICA_GAJ] || 0;

        const isInactiveOrPensioner = s.categoria === 5 || s.categoria === 6 || s.categoria === 7 ||
                                      s.situacao.includes("INATIVO") || s.situacao.includes("PENSIONISTA") ||
                                      s.situacao.includes("PENSAO") || (paidVenc === 0 && paidGaj === 0);

        if (isAnalistaOrTecnico && !isInactiveOrPensioner) {
            countActiveServers++;
            countAuditedRubrics += s.detalheRubricas.length;
        } else {
            countNonAuditedServers++;
            countNonAuditedRubrics += s.detalheRubricas.length;
        }
    }

    const previewServersAudited = document.getElementById("preview-servers-audited");
    const previewServersNonAudited = document.getElementById("preview-servers-nonaudited");
    const previewRubricsAudited = document.getElementById("preview-rubrics-audited");
    const previewRubricsNonAudited = document.getElementById("preview-rubrics-nonaudited");

    if (previewServersAudited) previewServersAudited.textContent = countActiveServers.toLocaleString('pt-BR');
    if (previewServersNonAudited) previewServersNonAudited.textContent = countNonAuditedServers.toLocaleString('pt-BR');
    if (previewRubricsAudited) previewRubricsAudited.textContent = countAuditedRubrics.toLocaleString('pt-BR');
    if (previewRubricsNonAudited) previewRubricsNonAudited.textContent = countNonAuditedRubrics.toLocaleString('pt-BR');

    let previewBanner = document.getElementById("preview-incompatible-banner");
    const previewPanel = document.getElementById("upload-preview-panel");

    if (AppState.isIncompatibleCompetence && previewPanel) {
        if (!previewBanner) {
            previewBanner = document.createElement("div");
            previewBanner.id = "preview-incompatible-banner";
            previewBanner.className = "notice-banner notice-banner--warning";
            previewPanel.appendChild(previewBanner);
        }
        previewBanner.style.display = "flex";
        previewBanner.innerHTML = `
            <i class="fa-solid fa-triangle-exclamation notice-banner__icon"></i>
            <div class="notice-banner__content">
                <strong>Aviso de Competência Histórica (${AppState.matchedCompetence}):</strong> Não há tabela cadastrada para este ano. A auditoria usará a Tabela de Jan/2026 como espelho estático.
            </div>
        `;
    } else if (previewBanner) {
        previewBanner.style.display = "none";
    }

    const dashboardTitle = document.getElementById("view-dashboard-title");
    const dashboardSubtitle = document.querySelector("#view-dashboard .section-subtitle");
    if (dashboardTitle) dashboardTitle.innerHTML = formatCompetenceHeader(AppState.matchedCompetence);
    if (dashboardSubtitle) dashboardSubtitle.textContent = "Dados estruturados em memória local — prontos para execução do diagnóstico";

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
   === [CAPÍTULO] MOTOR DE AUDITORIA DETERMINÍSTICA EXPANDIDO ===
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
        text: `Auditando lançamentos contra as Tabelas do TSE (${TABELAS_HISTORICAS[AppState.activeTableKey].label})...`,
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading()
    });

    const activeConfig = TABELAS_HISTORICAS[AppState.activeTableKey];
    const activeVR = activeConfig.vr;
    const activeTables = activeConfig.tabelas;
    const activeFcTable = activeConfig.fc;
    const activeCjTable = activeConfig.cj;

    const findings = [];
    let countActiveServers = 0;
    let countAfastadosServers = 0;
    let countInactiveServers = 0;
    let countOtherServers = 0;
    const totalServersInFile = Object.keys(AppState.pivotedServers).length;
    const totalRubricsInFile = AppState.rawRecords.length;

    let totalActiveRubrics = 0;
    let totalNonAuditedRubrics = 0;
    let divergentRubricsCount = 0;
    let attentionRubricsCount = 0;

    for (const id in AppState.pivotedServers) {
        const server = AppState.pivotedServers[id];

        let normalizedCareer = "";
        if (server.carreira.includes("ANALISTA")) {
            normalizedCareer = "ANALISTA JUDICIARIO";
        } else if (server.carreira.includes("TECNICO") || server.carreira.includes("TÉCNICO")) {
            normalizedCareer = "TECNICO JUDICIARIO";
        } else {
            countOtherServers++;
            totalNonAuditedRubrics += server.detalheRubricas.length;
            continue; 
        }

        const paidVenc = server.rubricas[RUBRICA_VENCIMENTO] || 0;
        const paidGaj = server.rubricas[RUBRICA_GAJ] || 0;
        const paidGas = server.rubricas[RUBRICA_GAS] || 0;

        const paidAqTit = (server.rubricas[RUBRICA_AQ_TITULACAO_1] || 0) + 
                          (server.rubricas[RUBRICA_AQ_TITULACAO_2] || 0);
        const paidAqTrein = server.rubricas[RUBRICA_AQ_TREINAMENTO] || 0;

        let paidAlim = 0;
        let paidPre = 0;
        let paidAbonoCorrente = 0;
        let paidAbonoRetroativo = 0;
        let paidSubst = 0;
        let paidRppsDesconto = 0;
        let paidVpni = 0;

        let somaRemuneratoriaOrdinaria = 0;
        let somaHorasExtras = 0;
        let somaOutrasVerbas = 0;
        let somaDescontos = 0;
        const rubricasTetoOrdinario = [];

        server.detalheRubricas.forEach(rub => {
            const cod = rub.codigo;
            const desc = rub.descricao.toUpperCase();

            if (rub.tipoRD === 2 && RUBRICAS_DESCONTO_RPPS.includes(cod)) {
                paidRppsDesconto += rub.valor;
            }

            if (rub.tipoRD === 1) {
                if (RUBRICAS_ALIMENTACAO.includes(cod) || desc.includes("ALIMENTACAO") || desc.includes("ALIMENTAÇÃO")) {
                    paidAlim += rub.valor;
                } else if (RUBRICAS_PRE_ESCOLAR.includes(cod) || desc.includes("PRE ESCOLAR") || desc.includes("PRÉ-ESCOLAR")) {
                    paidPre += rub.valor;
                } else if (RUBRICAS_ABONO_CORRENTE.includes(cod)) {
                    paidAbonoCorrente += rub.valor;
                } else if (RUBRICAS_ABONO_RETROATIVO.includes(cod) || (isAbonoPermanencia(cod, desc) && !RUBRICAS_ABONO_CORRENTE.includes(cod))) {
                    paidAbonoRetroativo += rub.valor;
                } else if (isSubstituicaoComissao(cod, desc)) {
                    paidSubst += rub.valor;
                } else if (RUBRICAS_VPNI_BASE.includes(cod) || desc.includes("VPNI") || desc.includes("QUINTOS") || desc.includes("DECIMOS")) {
                    paidVpni += rub.valor;
                }

                if (isHorasExtras(desc)) {
                    somaHorasExtras += rub.valor;
                } else if (isFerias(desc) || isGratificacaoNatalina(desc) || isGECC(desc) || isBeneficioIndenizatorio(cod, desc)) {
                    somaOutrasVerbas += rub.valor;
                } else {
                    somaRemuneratoriaOrdinaria += rub.valor;
                    rubricasTetoOrdinario.push(rub);
                }
            } else if (rub.tipoRD === 2) {
                somaDescontos += rub.valor;
            }
        });

        const paidAbonoTotal = paidAbonoCorrente + paidAbonoRetroativo;

        const excessoTetoOrdinario = Math.max(0, somaRemuneratoriaOrdinaria - TETO_CONSTITUCIONAL_STF);
        const possuiExcessoTetoOrdinario = excessoTetoOrdinario > 0.01;

        const excessoLimiteHE = Math.max(0, somaHorasExtras - LIMITE_HORAS_EXTRAS_TSE);
        const possuiExcessoHE = excessoLimiteHE > 0.01;

        const isPensionOrInactiveStrict = server.categoria === 5 || server.categoria === 6 || server.categoria === 7 ||
                                          server.situacao.includes("INATIVO") || server.situacao.includes("PENSIONISTA") ||
                                          server.situacao.includes("PENSAO");

        const isAfastadoWithoutPay = !isPensionOrInactiveStrict && (paidVenc === 0 && paidGaj === 0);

        if (isPensionOrInactiveStrict || isAfastadoWithoutPay) {
            if (isPensionOrInactiveStrict) countInactiveServers++;
            else countAfastadosServers++;
            totalNonAuditedRubrics += server.detalheRubricas.length;
            findings.push({
                id: server.id,
                nome: server.nome,
                cpf: server.cpf,
                data_nascimento: server.data_nascimento,
                idade_calculada: null,
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
                aq_tit_esperado: 0,
                aq_tit_pago: paidAqTit,
                aq_tit_status: "CONFORME",
                aq_trein_esperado: 0,
                aq_trein_pago: paidAqTrein,
                aq_trein_status: "CONFORME",
                fccj_cargo: "",
                fccj_modalidade: "",
                fccj_esperado: 0,
                fccj_pago: 0,
                fccj_status: "CONFORME",
                fccj_dias: 30,
                subst_paga: 0,
                subst_esperada: 0,
                subst_status: "CONFORME",
                alim_pago: paidAlim,
                alim_esperado: 0,
                alim_status: "CONFORME",
                pre_pago: paidPre,
                pre_esperado: 0,
                pre_status: "CONFORME",
                abono_pago: paidAbonoTotal,
                abono_esperado: 0,
                abono_status: "CONFORME",
                soma_ordinaria: somaRemuneratoriaOrdinaria,
                soma_he: somaHorasExtras,
                soma_outras: somaOutrasVerbas,
                soma_descontos: somaDescontos,
                rubricas_teto_ordinario: rubricasTetoOrdinario,
                excesso_teto_ordinario: 0,
                excesso_he: 0,
                has_venc_error: false,
                has_gaj_error: false,
                has_gas_error: false,
                has_aq_tit_error: false,
                has_aq_trein_error: false,
                has_fccj_error: false,
                has_subst_error: false,
                has_alim_error: false,
                has_pre_error: false,
                has_abono_error: false,
                has_cadastral_error: false,
                has_compulsoria_error: false,
                has_compulsoria_atencao: false,
                has_teto_error: false,
                has_he_error: false,
                detalhe: `
                    <div class="audit-issue">
                        <span class="audit-issue__badge badge badge--neutral"><i class="fa-solid fa-user-slash"></i> ${isPensionOrInactiveStrict ? 'Inativo / Pensionista' : 'Cedido / Licenciado sem remuneração'}</span>
                    </div>
                `,
                desvio: 0
            });
            continue;
        }

        countActiveServers++;
        totalActiveRubrics += server.detalheRubricas.length;

        // Verificação Ampla da Idade e Aposentadoria Compulsória (75 Anos — EC nº 88/2015)
        const serverAgeInfo = calcularIdadeCompetencia(server.nascimento_obj, AppState.matchedCompetence);
        server.idade_calculada = serverAgeInfo.idadeAnos;
        const hasCompulsoriaError = serverAgeInfo.jaTinha75Antes;
        const hasCompulsoriaAtencao = serverAgeInfo.completouNoMes;

        const referenceTable = activeTables[normalizedCareer];
        let matchedGrade = null;
        let vencPropInfo = null;

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

        if (!matchedGrade) {
            vencPropInfo = checkVencGajProportionalAdjustment(paidVenc, paidGaj, referenceTable);
            if (vencPropInfo) {
                matchedGrade = vencPropInfo.grade;
            } else {
                const otherCareer = normalizedCareer === "ANALISTA JUDICIARIO" ? "TECNICO JUDICIARIO" : "ANALISTA JUDICIARIO";
                const otherTable = activeTables[otherCareer];
                const crossCheck = checkVencGajProportionalAdjustment(paidVenc, paidGaj, otherTable);

                if (crossCheck) {
                    vencPropInfo = crossCheck;
                    matchedGrade = crossCheck.grade;
                    vencPropInfo.cargoIncompativel = true;
                    vencPropInfo.cargoEsperado = otherCareer;
                }
            }
        }

        if (matchedGrade) {
            let expectedVenc = matchedGrade.vencimento;
            let expectedGaj = matchedGrade.gaj;
            let isVencProp = false;

            if (vencPropInfo) {
                expectedVenc = vencPropInfo.vencEsperado;
                expectedGaj = vencPropInfo.gajEsperada;
                isVencProp = true;
            }
            
            let expectedGas = 0;
            if (paidGas > 0) {
                expectedGas = expectedVenc * 0.35;
            }
            const isGasConforming = Math.abs(expectedGas - paidGas) < 0.15;

            // AQ Titulação
            let expectedAqTit = 0;
            const coefTit = paidAqTit / activeVR;

            if (coefTit >= 5.0 - 0.01) expectedAqTit = 5.0 * activeVR;
            else if (coefTit >= 3.5 - 0.01) expectedAqTit = 3.5 * activeVR;
            else if (coefTit >= 2.0 - 0.01) expectedAqTit = 2.0 * activeVR;
            else if (coefTit >= 1.5 - 0.01) expectedAqTit = 1.5 * activeVR;
            else if (coefTit >= 1.0 - 0.01) expectedAqTit = 1.0 * activeVR;
            else if (coefTit >= 0.5 - 0.01) expectedAqTit = 0.5 * activeVR;

            const isAqTitExactMatch = Math.abs(expectedAqTit - paidAqTit) < 0.1;
            const propTitCheck = !isAqTitExactMatch ? checkAqTitProportionalAdjustment(paidAqTit, expectedAqTit, activeVR) : { isProportional: false, days: 0 };

            let aqTitStatus = isAqTitExactMatch ? "CONFORME" : (propTitCheck.isProportional ? "PROPORCIONAL" : (paidAqTit > 0 ? "DIVERGENTE" : "CONFORME"));

            // AQ Treinamento
            let expectedAqTrein = 0;
            const coefTrein = paidAqTrein / activeVR;

            if (coefTrein >= 0.60 - 0.01) expectedAqTrein = 0.60 * activeVR;
            else if (coefTrein >= 0.40 - 0.01) expectedAqTrein = 0.40 * activeVR;
            else if (coefTrein >= 0.20 - 0.01) expectedAqTrein = 0.20 * activeVR;

            const isAqTreinExactMatch = Math.abs(expectedAqTrein - paidAqTrein) < 0.1;
            const propTreinCheck = !isAqTreinExactMatch ? checkAqTreinProportionalAdjustment(paidAqTrein, expectedAqTrein, activeVR) : { isProportional: false, days: 0 };

            let aqTreinStatus = isAqTreinExactMatch ? "CONFORME" : (propTreinCheck.isProportional ? "PROPORCIONAL" : (paidAqTrein > 0 ? "DIVERGENTE" : "CONFORME"));

            if ((paidAqTit + paidAqTrein) > (TETO_GLOBAL_AQ_VR * activeVR) + 0.1) {
                aqTitStatus = "DIVERGENTE";
            }

            // FC e CJ Titular com Detecção de Transição e Busca Reversa
            let fccjCargo = "";
            let fccjModalidade = "";
            let expectedFccj = 0;
            let paidFccj = 0;
            let fccjStatus = "CONFORME";
            let fccjDias = 30;
            let fccjDivergenceType = "";
            let fccjCargoCorrespondente = "";
            let fccjTipoCorrespondente = "";

            let rawSigla = (server.sigla || "").trim().toUpperCase().replace("-", " ");
            rawSigla = rawSigla.replace(/FC\s*0?(\d)/g, "FC $1").replace(/CJ\s*0?(\d)/g, "CJ $1");
            const matchSigla = rawSigla.match(/^(FC\s*\d|CJ\s*\d)/);
            if (matchSigla) {
                rawSigla = matchSigla[1].replace(/\s+/, " ");
            }

            const isCjSigla = rawSigla.startsWith("CJ");
            const isFcSigla = rawSigla.startsWith("FC");

            let paidCjIntegral = 0;
            let paidCjOpcao = 0;
            let paidFcVal = 0;

            server.detalheRubricas.forEach(rub => {
                if (rub.tipoComp === 0 && rub.tipoRD === 1) {
                    const cod = rub.codigo;
                    const desc = rub.descricao.toUpperCase();

                    if (cod === RUBRICA_CJ_INTEGRAL || desc.includes("CARGO EM COMISSAO INTEGRAL")) {
                        paidCjIntegral += rub.valor;
                    } else if (RUBRICAS_CJ_OPCAO.includes(cod) || desc.includes("OPCAO C EFETIVO") || desc.includes("OPTANTE C EFETIVO")) {
                        paidCjOpcao += rub.valor;
                    } else if (isFuncaoComissionada(cod, desc)) {
                        paidFcVal += rub.valor;
                    }
                }
            });

            const totalPaidComissao = paidCjIntegral + paidCjOpcao + paidFcVal;

            if (totalPaidComissao > 0) {
                for (const fcName in activeFcTable) {
                    if (Math.abs(totalPaidComissao - activeFcTable[fcName]) < 0.15) {
                        fccjCargoCorrespondente = fcName;
                        fccjTipoCorrespondente = "Função de Confiança";
                        break;
                    }
                }
                if (!fccjCargoCorrespondente) {
                    for (const cjName in activeCjTable) {
                        if (Math.abs(totalPaidComissao - activeCjTable[cjName].opcao) < 0.15) {
                            fccjCargoCorrespondente = cjName;
                            fccjTipoCorrespondente = "Opção Efetivo, 65%";
                            break;
                        }
                        if (Math.abs(totalPaidComissao - activeCjTable[cjName].integral) < 0.15) {
                            fccjCargoCorrespondente = cjName;
                            fccjTipoCorrespondente = "Integral, 100%";
                            break;
                        }
                    }
                }
            }

            if (isCjSigla) {
                fccjCargo = rawSigla;
                const cjConfig = activeCjTable[rawSigla];

                if (cjConfig) {
                    expectedFccj = paidCjIntegral > 0 ? cjConfig.integral : cjConfig.opcao;
                    fccjModalidade = paidCjIntegral > 0 ? "Integral, 100%" : "Opção Efetivo, 65%";
                    paidFccj = totalPaidComissao;

                    if (totalPaidComissao === 0) {
                        fccjStatus = "ATENCAO";
                        fccjDivergenceType = "NAO_PAGA";
                    } else if (Math.abs(totalPaidComissao - expectedFccj) < 0.10) {
                        fccjStatus = "CONFORME";
                        fccjDias = 30;
                    } else {
                        const propCheck = checkCommissionProportionalAdjustment(totalPaidComissao, expectedFccj);
                        if (propCheck.isProportional) {
                            fccjStatus = "ATENCAO";
                            fccjDias = propCheck.days;
                        } else if (fccjCargoCorrespondente && fccjCargoCorrespondente !== rawSigla) {
                            fccjStatus = "ATENCAO";
                            fccjDivergenceType = "DESCOMPASSO";
                        } else {
                            fccjStatus = "DIVERGENTE";
                        }
                    }
                }
            } else if (isFcSigla) {
                fccjCargo = rawSigla;
                fccjModalidade = "Função de Confiança";
                const fcFullVal = activeFcTable[rawSigla] || 0;
                expectedFccj = fcFullVal;
                paidFccj = totalPaidComissao;

                if (totalPaidComissao === 0) {
                    fccjStatus = "ATENCAO";
                    fccjDivergenceType = "NAO_PAGA";
                } else if (Math.abs(totalPaidComissao - expectedFccj) < 0.10) {
                    fccjStatus = "CONFORME";
                    fccjDias = 30;
                } else {
                    const propCheck = checkCommissionProportionalAdjustment(totalPaidComissao, expectedFccj);
                    if (propCheck.isProportional) {
                        fccjStatus = "ATENCAO";
                        fccjDias = propCheck.days;
                    } else if (fccjCargoCorrespondente && fccjCargoCorrespondente !== rawSigla) {
                        fccjStatus = "ATENCAO";
                        fccjDivergenceType = "DESCOMPASSO";
                    } else {
                        fccjStatus = "DIVERGENTE";
                    }
                }
            } else {
                if (totalPaidComissao > 0) {
                    paidFccj = totalPaidComissao;
                    let reverseMatch = null;

                    for (const fcName in activeFcTable) {
                        const fullVal = activeFcTable[fcName];
                        const check = checkCommissionProportionalAdjustment(totalPaidComissao, fullVal);
                        if (check.isProportional) {
                            reverseMatch = { cargo: fcName, modalidade: "Função de Confiança", esperado: fullVal, dias: check.days };
                            break;
                        }
                    }

                    if (!reverseMatch) {
                        for (const cjName in activeCjTable) {
                            const fullVal = activeCjTable[cjName].opcao;
                            const check = checkCommissionProportionalAdjustment(totalPaidComissao, fullVal);
                            if (check.isProportional) {
                                reverseMatch = { cargo: cjName, modalidade: "Opção Efetivo, 65%", esperado: fullVal, dias: check.days };
                                break;
                            }
                        }
                    }

                    if (reverseMatch) {
                        fccjCargo = reverseMatch.cargo;
                        fccjModalidade = reverseMatch.modalidade;
                        expectedFccj = reverseMatch.esperado;
                        fccjDias = reverseMatch.dias;
                        fccjStatus = "ATENCAO";
                    } else if (fccjCargoCorrespondente) {
                        fccjCargo = "Sem sigla";
                        fccjModalidade = fccjTipoCorrespondente;
                        expectedFccj = activeFcTable[fccjCargoCorrespondente] || (activeCjTable[fccjCargoCorrespondente] && activeCjTable[fccjCargoCorrespondente].opcao) || 0;
                        fccjStatus = "ATENCAO";
                        fccjDivergenceType = "SEM_SIGLA";
                    } else {
                        fccjCargo = "Sem sigla";
                        fccjModalidade = paidCjIntegral > 0 ? "Integral, 100%" : "Opção Efetivo, 65%";
                        expectedFccj = 0;
                        fccjStatus = "DIVERGENTE";
                    }
                }
            }

            // Substituição de Função e Cargo em Comissão
            let substStatus = "CONFORME";
            let substEsperada = 0;
            let substInfo = null;

            if (paidSubst > 0) {
                const substResult = checkSubstituicaoComissao(paidSubst, server.sigla, activeFcTable, activeCjTable);
                if (substResult) {
                    substStatus = "PROPORCIONAL";
                    substEsperada = paidSubst;
                    substInfo = substResult;
                } else {
                    substStatus = "DIVERGENTE";
                    substEsperada = 0;
                    substInfo = null;
                }
            }

            // Auxílio-Alimentação
            let alimStatus = "CONFORME";
            let alimEsperado = 0;
            let alimDias = 30;

            if (paidAlim > 0) {
                const alimCheck = checkBeneficioProportionalAdjustment(paidAlim, VALOR_AUXILIO_ALIMENTACAO_2026);
                alimEsperado = paidAlim;
                alimDias = alimCheck.days;
                if (!alimCheck.isConforme) {
                    alimStatus = "DIVERGENTE";
                    alimEsperado = VALOR_AUXILIO_ALIMENTACAO_2026;
                } else if (alimCheck.isProportional) {
                    alimStatus = "PROPORCIONAL";
                }
            }

            // Assistência Pré-Escolar
            let preStatus = "CONFORME";
            let preEsperado = 0;
            let preDias = 30;
            let preCotas = 0;

            if (paidPre > 0) {
                const preCheck = checkBeneficioProportionalAdjustment(paidPre, VALOR_ASSISTENCIA_PRE_ESCOLAR_2026);
                preEsperado = paidPre;
                preDias = preCheck.days;
                preCotas = preCheck.cotas;
                if (!preCheck.isConforme) {
                    preStatus = "DIVERGENTE";
                    preEsperado = VALOR_ASSISTENCIA_PRE_ESCOLAR_2026;
                } else if (preCheck.isProportional) {
                    preStatus = "PROPORCIONAL";
                }
            }

            // Abono de Permanência Refatorado
            let abonoStatus = "CONFORME";
            let abonoEsperado = 0;
            let abonoDias = 30;
            let abonoInfo = null;
            let abonoDesvioCalculado = 0;

            if (paidAbonoTotal > 0) {
                const baseCargoEfetivo = paidVenc + paidGaj + paidGas + paidAqTit + paidAqTrein + paidVpni;
                const abonoCheck = checkAbonoPermanenciaProportional(paidAbonoCorrente, paidAbonoRetroativo, paidRppsDesconto, baseCargoEfetivo, serverAgeInfo);

                abonoInfo = abonoCheck;
                abonoEsperado = abonoCheck.rppsEsperado;
                abonoDias = abonoCheck.days;
                abonoDesvioCalculado = abonoCheck.desvio || 0;

                if (abonoCheck.isConforme) {
                    if (abonoCheck.isProportional || paidAbonoRetroativo > 0) {
                        abonoStatus = "ATENCAO";
                    } else {
                        abonoStatus = "CONFORME";
                    }
                } else {
                    abonoStatus = "DIVERGENTE";
                }
            }

            // Validação Cadastral de FC/CJ
            let cadastralIssue = "";
            const sigla = server.sigla;
            const atrib = server.atribuicao;

            if (sigla === "FC 6" && atrib !== 1) cadastralIssue = "FC 6 exige Atribuição = 1.";
            else if (sigla === "FC 4" && atrib !== 3) cadastralIssue = "FC 4 exige Atribuição = 3.";
            else if (sigla === "FC 3" && atrib !== 3) cadastralIssue = "FC 3 exige Atribuição = 3.";
            else if (sigla === "FC 1" && atrib !== 3) cadastralIssue = "FC 1 exige Atribuição = 3.";
            else if (sigla.startsWith("CJ") && atrib === 3) cadastralIssue = "Cargos CJ não admitem Atribuição = 3.";

            const isTransicaoFerias = vencPropInfo && vencPropInfo.tipo === "TRANSICAO_FERIAS";
            const isVencConforming = Math.abs(expectedVenc - paidVenc) < 0.20 || isTransicaoFerias;
            const isGajConforming = Math.abs(expectedGaj - paidGaj) < 0.20 || isTransicaoFerias;

            const hasVencError = !isVencConforming;
            const hasGajError = !isGajConforming;
            const hasGasError = !isGasConforming;
            const hasAqTitError = (aqTitStatus === "DIVERGENTE");
            const hasAqTreinError = (aqTreinStatus === "DIVERGENTE");
            const hasFccjError = (fccjStatus === "DIVERGENTE");
            const hasSubstError = APP_CONFIG.features.auditSubstituicao ? (substStatus === "DIVERGENTE") : false;
            const hasAlimError = (alimStatus === "DIVERGENTE");
            const hasPreError = (preStatus === "DIVERGENTE");
            const hasAbonoError = APP_CONFIG.features.auditAbono ? (abonoStatus === "DIVERGENTE") : false;
            const hasCadastralError = !!cadastralIssue;
            const hasTetoError = possuiExcessoTetoOrdinario;
            const hasHeError = possuiExcessoHE;

            const hasSubstAttention = APP_CONFIG.features.auditSubstituicao ? (substStatus === "PROPORCIONAL") : false;
            const hasAbonoAttention = APP_CONFIG.features.auditAbono ? (abonoStatus === "ATENCAO" || abonoStatus === "PROPORCIONAL") : false;

            const hasCriticalError = hasVencError || hasGajError || hasGasError || hasAqTitError || hasAqTreinError || hasFccjError || hasSubstError || hasAlimError || hasPreError || hasAbonoError || hasCadastralError || hasCompulsoriaError || hasTetoError || hasHeError;
            const hasAttentionOnly = !hasCriticalError && (isVencProp || aqTitStatus === "PROPORCIONAL" || aqTreinStatus === "PROPORCIONAL" || fccjStatus === "ATENCAO" || fccjStatus === "PROPORCIONAL" || hasSubstAttention || alimStatus === "PROPORCIONAL" || preStatus === "PROPORCIONAL" || hasAbonoAttention || hasCompulsoriaAtencao);

            if (isVencProp) attentionRubricsCount++;
            if (aqTitStatus === "PROPORCIONAL") attentionRubricsCount++;
            if (aqTreinStatus === "PROPORCIONAL") attentionRubricsCount++;
            if (fccjStatus === "ATENCAO" || fccjStatus === "PROPORCIONAL") attentionRubricsCount++;
            if (hasSubstAttention) attentionRubricsCount++;
            if (alimStatus === "PROPORCIONAL") attentionRubricsCount++;
            if (preStatus === "PROPORCIONAL") attentionRubricsCount++;
            if (hasAbonoAttention) attentionRubricsCount++;
            if (hasCompulsoriaAtencao) attentionRubricsCount++;

            if (hasVencError) divergentRubricsCount++;
            if (hasGajError) divergentRubricsCount++;
            if (hasGasError) divergentRubricsCount++;
            if (hasAqTitError) divergentRubricsCount++;
            if (hasAqTreinError) divergentRubricsCount++;
            if (hasFccjError) divergentRubricsCount++;
            if (hasSubstError) divergentRubricsCount++;
            if (hasAlimError) divergentRubricsCount++;
            if (hasPreError) divergentRubricsCount++;
            if (hasAbonoError) divergentRubricsCount++;
            if (hasCadastralError) divergentRubricsCount++;
            if (hasCompulsoriaError) divergentRubricsCount++;
            if (hasTetoError) divergentRubricsCount++;
            if (hasHeError) divergentRubricsCount++;

            // 1. Materialidade sob Atenção / Desvio de Vencimento e GAJ
            let desvioVenc = 0;
            let desvioGaj = 0;
            if (isVencProp && vencPropInfo) {
                if (vencPropInfo.tipo === "FRACAO_DIAS") {
                    desvioVenc = paidVenc;
                    desvioGaj = paidGaj;
                } else if (vencPropInfo.tipo === "PROGRESSAO" || vencPropInfo.tipo === "TRANSICAO_FERIAS") {
                    desvioVenc = Math.abs(vencPropInfo.gradeNovo.vencimento - vencPropInfo.gradeAnt.vencimento);
                    desvioGaj = Math.abs(vencPropInfo.gradeNovo.gaj - vencPropInfo.gradeAnt.gaj);
                } else {
                    desvioVenc = paidVenc;
                    desvioGaj = paidGaj;
                }
            } else {
                desvioVenc = paidVenc - expectedVenc;
                desvioGaj = paidGaj - expectedGaj;
            }

            // 2. Desvio de GAS
            const desvioGas = isGasConforming ? 0 : (paidGas - expectedGas);

            // 3. Materialidade sob Atenção / Desvio de Adicional de Qualificação
            const desvioAqTit = paidAqTit - expectedAqTit;
            const desvioAqTrein = paidAqTrein - expectedAqTrein;

            // 4. Materialidade sob Atenção / Desvio de FC e CJ
            let desvioFccj = 0;
            if (fccjStatus === "ATENCAO" || fccjStatus === "PROPORCIONAL") {
                if (fccjDivergenceType === "DESCOMPASSO") {
                    desvioFccj = Math.abs(paidFccj - expectedFccj);
                } else if (fccjDivergenceType === "NAO_PAGA") {
                    desvioFccj = expectedFccj;
                } else if (fccjDivergenceType === "SEM_SIGLA") {
                    desvioFccj = paidFccj;
                } else {
                    desvioFccj = paidFccj;
                }
            } else if (fccjStatus === "DIVERGENTE") {
                desvioFccj = paidFccj - expectedFccj;
            } else {
                desvioFccj = 0;
            }

            // 5. Substituição e Benefícios Indenizatórios
            const desvioSubst = APP_CONFIG.features.auditSubstituicao ? (paidSubst - substEsperada) : 0;
            const desvioAlim = alimStatus === "PROPORCIONAL" ? paidAlim : (paidAlim - alimEsperado);
            const desvioPre = preStatus === "PROPORCIONAL" ? paidPre : (paidPre - preEsperado);
            const desvioAbono = APP_CONFIG.features.auditAbono ? abonoDesvioCalculado : 0;

            // Consolidação Geral do Desvio / Materialidade sob Exame
            const desvioFinanceiro = Math.round((desvioVenc + desvioGaj + desvioGas + desvioAqTit + desvioAqTrein + desvioFccj + desvioSubst + desvioAlim + desvioPre + desvioAbono + excessoTetoOrdinario + excessoLimiteHE) * 100) / 100;

            let displayedPadrao = matchedGrade.padrao;
            if (vencPropInfo) {
                if (vencPropInfo.tipo === "PROGRESSAO" || vencPropInfo.tipo === "TRANSICAO_FERIAS") {
                    displayedPadrao = vencPropInfo.padrao;
                } else if (vencPropInfo.tipo === "FRACAO_DIAS") {
                    displayedPadrao = `${matchedGrade.padrao} (${vencPropInfo.dias}d)`;
                }
            }

            if (!hasCriticalError && !hasAttentionOnly) {
                findings.push({
                    id: server.id,
                    nome: server.nome,
                    cpf: server.cpf,
                    data_nascimento: server.data_nascimento,
                    idade_calculada: serverAgeInfo.idadeAnos,
                    carreira: normalizedCareer,
                    classe: matchedGrade.classe,
                    padrao: displayedPadrao,
                    status: "CONFORME",
                    venc_esperado: expectedVenc,
                    venc_pago: paidVenc,
                    gaj_esperada: expectedGaj,
                    gaj_paga: paidGaj,
                    gas_esperada: expectedGas,
                    gas_paga: paidGas,
                    aq_tit_esperado: expectedAqTit,
                    aq_tit_pago: paidAqTit,
                    aq_tit_status: "CONFORME",
                    aq_trein_esperado: expectedAqTrein,
                    aq_trein_pago: paidAqTrein,
                    aq_trein_status: "CONFORME",
                    fccj_cargo: fccjCargo,
                    fccj_modalidade: fccjModalidade,
                    fccj_esperado: expectedFccj,
                    fccj_pago: paidFccj,
                    fccj_status: fccjStatus,
                    fccj_dias: fccjDias,
                    subst_paga: paidSubst,
                    subst_esperada: substEsperada,
                    subst_status: substStatus,
                    subst_info: substInfo,
                    alim_pago: paidAlim,
                    alim_esperado: alimEsperado,
                    alim_status: alimStatus,
                    alim_dias: alimDias,
                    pre_pago: paidPre,
                    pre_esperado: preEsperado,
                    pre_status: preStatus,
                    pre_dias: preDias,
                    pre_cotas: preCotas,
                    abono_pago: paidAbonoTotal,
                    abono_esperado: abonoEsperado,
                    abono_status: abonoStatus,
                    abono_dias: abonoDias,
                    soma_ordinaria: somaRemuneratoriaOrdinaria,
                    soma_he: somaHorasExtras,
                    soma_outras: somaOutrasVerbas,
                    soma_descontos: somaDescontos,
                    rubricas_teto_ordinario: rubricasTetoOrdinario,
                    excesso_teto_ordinario: 0,
                    excesso_he: 0,
                    has_venc_error: false,
                    has_gaj_error: false,
                    has_gas_error: false,
                    has_aq_tit_error: false,
                    has_aq_trein_error: false,
                    has_fccj_error: false,
                    has_subst_error: false,
                    has_alim_error: false,
                    has_pre_error: false,
                    has_abono_error: false,
                    has_cadastral_error: false,
                    has_compulsoria_error: false,
                    has_compulsoria_atencao: false,
                    has_teto_error: false,
                    has_he_error: false,
                    detalhe: `
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--success"><i class="fa-solid fa-circle-check"></i> Conforme</span>
                        </div>
                    `,
                    desvio: 0
                });
            } else {
                let errorDetails = [];

                if (hasCompulsoriaError) {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-cake-candles"></i> APOSENTADORIA COMPULSÓRIA</span>
                            <div class="audit-issue__math">Idade: <strong>${serverAgeInfo.idadeAnos} anos</strong> | Limite constitucional de 75 anos ultrapassado antes da competência</div>
                        </div>
                    `);
                } else if (hasCompulsoriaAtencao) {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--warning"><i class="fa-solid fa-cake-candles"></i> APOSENTADORIA COMPULSÓRIA</span>
                            <div class="audit-issue__math">Idade: <strong>75 anos</strong> | Completou a idade limite no mês da folha (verificar vacância)</div>
                        </div>
                    `);
                }

                if (possuiExcessoTetoOrdinario) {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-gavel"></i> TETO ORDINÁRIO (STF)</span>
                            <div class="audit-issue__math">Pago: <strong>R$ ${formatMoeda(somaRemuneratoriaOrdinaria)}</strong> | Teto: <strong>R$ 46.366,19</strong></div>
                        </div>
                    `);
                }

                if (possuiExcessoHE) {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-clock"></i> LIMITE HORAS EXTRAS (TSE)</span>
                            <div class="audit-issue__math">Pago: <strong>R$ ${formatMoeda(somaHorasExtras)}</strong> | Limite: <strong>R$ 17.000,00</strong></div>
                        </div>
                    `);
                }

                if (isVencProp) {
                    const info = vencPropInfo;
                    let descProp = `${info.dias} dias de efetivo exercício (${info.classe}-${info.padrao})`;
                    if (info.tipo === "TRANSICAO_FERIAS") {
                        descProp = `Transição ${info.padrao} c/ férias`;
                    } else if (info.tipo === "PROGRESSAO") {
                        descProp = `Progressão: ${info.diasAnt}d em ${info.gradeAnt.classe}${info.gradeAnt.padrao} + ${info.diasNovo}d em ${info.gradeNovo.classe}${info.gradeNovo.padrao}`;
                    }

                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--warning"><i class="fa-solid fa-money-bill-wave"></i> VENCIMENTO / GAJ</span>
                            <div class="audit-issue__math">Pago: <strong>R$ ${formatMoeda(paidVenc + paidGaj)}</strong> (${descProp})</div>
                        </div>
                    `);
                } else if (!isVencConforming) {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-money-bill-wave"></i> VENCIMENTO</span>
                            <div class="audit-issue__math">Pago: <strong>R$ ${formatMoeda(paidVenc)}</strong> | Esperado: <strong>R$ ${formatMoeda(expectedVenc)}</strong></div>
                        </div>
                    `);
                }

                if (!isVencProp && !isGajConforming) {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-coins"></i> GAJ (140%)</span>
                            <div class="audit-issue__math">Paga: <strong>R$ ${formatMoeda(paidGaj)}</strong> | Esperada: <strong>R$ ${formatMoeda(expectedGaj)}</strong></div>
                        </div>
                    `);
                }

                if (!isGasConforming) {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-shield-halved"></i> GAS (35%)</span>
                            <div class="audit-issue__math">Paga: <strong>R$ ${formatMoeda(paidGas)}</strong> | Esperada: <strong>R$ ${formatMoeda(expectedGas)}</strong></div>
                        </div>
                    `);
                }

                if (aqTitStatus === "PROPORCIONAL") {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--warning"><i class="fa-solid fa-graduation-cap"></i> AQ TITULAÇÃO</span>
                            <div class="audit-issue__math">Pago: <strong>R$ ${formatMoeda(paidAqTit)}</strong> | Esperado: <strong>R$ ${formatMoeda(expectedAqTit)}</strong> (Proporcional)</div>
                        </div>
                    `);
                } else if (aqTitStatus === "DIVERGENTE") {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-graduation-cap"></i> AQ TITULAÇÃO</span>
                            <div class="audit-issue__math">Pago: <strong>R$ ${formatMoeda(paidAqTit)}</strong> | Esperado: <strong>R$ ${formatMoeda(expectedAqTit)}</strong></div>
                        </div>
                    `);
                }

                if (aqTreinStatus === "PROPORCIONAL") {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--warning"><i class="fa-solid fa-certificate"></i> AQ TREINAMENTO</span>
                            <div class="audit-issue__math">Pago: <strong>R$ ${formatMoeda(paidAqTrein)}</strong> | Esperado: <strong>R$ ${formatMoeda(expectedAqTrein)}</strong> (Proporcional)</div>
                        </div>
                    `);
                } else if (aqTreinStatus === "DIVERGENTE") {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-certificate"></i> AQ TREINAMENTO</span>
                            <div class="audit-issue__math">Pago: <strong>R$ ${formatMoeda(paidAqTrein)}</strong> | Esperado: <strong>R$ ${formatMoeda(expectedAqTrein)}</strong></div>
                        </div>
                    `);
                }

                // FC / CJ: Tratamento de Alertas de Atenção e Divergência
                if (fccjStatus === "ATENCAO" || fccjStatus === "PROPORCIONAL") {
                    if (fccjDivergenceType === "DESCOMPASSO") {
                        errorDetails.push(`
                            <div class="audit-issue">
                                <span class="audit-issue__badge badge badge--warning"><i class="fa-solid fa-briefcase"></i> DESCOMPASSO FC/CJ</span>
                                <div class="audit-issue__math">Pago: <strong>R$ ${formatMoeda(paidFccj)}</strong> (Ref. ${fccjCargoCorrespondente}) | Cadastro: <strong>${fccjCargo}</strong></div>
                            </div>
                        `);
                    } else if (fccjDivergenceType === "NAO_PAGA") {
                        errorDetails.push(`
                            <div class="audit-issue">
                                <span class="audit-issue__badge badge badge--warning"><i class="fa-solid fa-briefcase"></i> COMISSÃO NÃO PAGA</span>
                                <div class="audit-issue__math">Pago: <strong>R$ 0,00</strong> | Cadastro: <strong>${fccjCargo}</strong> (Verificar dispensa/afastamento)</div>
                            </div>
                        `);
                    } else if (fccjDivergenceType === "SEM_SIGLA") {
                        errorDetails.push(`
                            <div class="audit-issue">
                                <span class="audit-issue__badge badge badge--warning"><i class="fa-solid fa-briefcase"></i> COMISSÃO SEM SIGLA</span>
                                <div class="audit-issue__math">Pago: <strong>R$ ${formatMoeda(paidFccj)}</strong> (Ref. ${fccjCargoCorrespondente || 'Comissão'}) | Cadastro: <strong>Sem sigla ativa</strong></div>
                            </div>
                        `);
                    } else {
                        errorDetails.push(`
                            <div class="audit-issue">
                                <span class="audit-issue__badge badge badge--warning"><i class="fa-solid fa-briefcase"></i> ${fccjCargo || 'FC/CJ'}</span>
                                <div class="audit-issue__math">Pago: <strong>R$ ${formatMoeda(paidFccj)}</strong> (${fccjDias} dias de exercício) | Integral: <strong>R$ ${formatMoeda(expectedFccj)}</strong></div>
                            </div>
                        `);
                    }
                } else if (fccjStatus === "DIVERGENTE") {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-briefcase"></i> ${fccjCargo || 'FC/CJ'}</span>
                            <div class="audit-issue__math">Pago: <strong>R$ ${formatMoeda(paidFccj)}</strong> | Esperado: <strong>R$ ${formatMoeda(expectedFccj)}</strong></div>
                        </div>
                    `);
                }

                if (APP_CONFIG.features.auditSubstituicao) {
                    if (substStatus === "PROPORCIONAL" && substInfo) {
                        const descSubst = substInfo.tipo === "DIFERENCA"
                            ? `${substInfo.dias}d de ${substInfo.cargoSubstituido} [Dif. s/ ${substInfo.cargoTitular}]`
                            : `${substInfo.dias}d de ${substInfo.cargoSubstituido}`;

                        errorDetails.push(`
                            <div class="audit-issue">
                                <span class="audit-issue__badge badge badge--warning"><i class="fa-solid fa-people-arrows"></i> SUBSTITUIÇÃO</span>
                                <div class="audit-issue__math">Pago: <strong>R$ ${formatMoeda(paidSubst)}</strong> (${descSubst})</div>
                            </div>
                        `);
                    } else if (substStatus === "DIVERGENTE") {
                        errorDetails.push(`
                            <div class="audit-issue">
                                <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-people-arrows"></i> SUBSTITUIÇÃO</span>
                                <div class="audit-issue__math">Pago: <strong>R$ ${formatMoeda(paidSubst)}</strong> | Não coincide com diárias de FC ou CJ</div>
                            </div>
                        `);
                    }
                }

                if (alimStatus === "PROPORCIONAL") {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--warning"><i class="fa-solid fa-utensils"></i> AUX. ALIMENTAÇÃO</span>
                            <div class="audit-issue__math">Pago: <strong>R$ ${formatMoeda(paidAlim)}</strong> (${alimDias} dias proporcionais)</div>
                        </div>
                    `);
                } else if (alimStatus === "DIVERGENTE") {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-utensils"></i> AUX. ALIMENTAÇÃO</span>
                            <div class="audit-issue__math">Pago: <strong>R$ ${formatMoeda(paidAlim)}</strong> | Esperado: <strong>R$ ${formatMoeda(VALOR_AUXILIO_ALIMENTACAO_2026)}</strong></div>
                        </div>
                    `);
                }

                if (preStatus === "PROPORCIONAL") {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--warning"><i class="fa-solid fa-child"></i> PRÉ-ESCOLAR</span>
                            <div class="audit-issue__math">Pago: <strong>R$ ${formatMoeda(paidPre)}</strong> (${preDias} dias proporcionais)</div>
                        </div>
                    `);
                } else if (preStatus === "DIVERGENTE") {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-child"></i> PRÉ-ESCOLAR</span>
                            <div class="audit-issue__math">Pago: <strong>R$ ${formatMoeda(paidPre)}</strong> | Não fecha com cotas da tabela</div>
                        </div>
                    `);
                }

                // Abono de Permanência: Distinção Clara entre Atenção e Divergência
                if (APP_CONFIG.features.auditAbono && paidAbonoTotal > 0) {
                    if (abonoInfo && abonoInfo.tipo === "COMPULSORIA_ULTRAPASSADA") {
                        errorDetails.push(`
                            <div class="audit-issue">
                                <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-award"></i> ABONO COMPULSÓRIA</span>
                                <div class="audit-issue__math">Pago: <strong>R$ ${formatMoeda(paidAbonoTotal)}</strong> | Recebimento indevido após atingir a idade limite de 75 anos</div>
                            </div>
                        `);
                    } else if (abonoStatus === "DIVERGENTE") {
                        if (abonoInfo && abonoInfo.tipo === "SEM_RETENCAO") {
                            errorDetails.push(`
                                <div class="audit-issue">
                                    <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-award"></i> ABONO SEM DESCONTO</span>
                                    <div class="audit-issue__math">Pago: <strong>R$ ${formatMoeda(paidAbonoTotal)}</strong> | Reembolso sem retenção previdenciária no contracheque</div>
                                </div>
                            `);
                        } else if (abonoInfo && abonoInfo.tipo === "EXCESSO") {
                            errorDetails.push(`
                                <div class="audit-issue">
                                    <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-award"></i> ABONO EM EXCESSO</span>
                                    <div class="audit-issue__math">Pago: <strong>R$ ${formatMoeda(paidAbonoTotal)}</strong> | Excede o desconto de previdência em R$ ${formatMoeda(abonoDesvioCalculado)}</div>
                                </div>
                            `);
                        } else {
                            errorDetails.push(`
                                <div class="audit-issue">
                                    <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-award"></i> ABONO PERMANÊNCIA</span>
                                    <div class="audit-issue__math">Pago: <strong>R$ ${formatMoeda(paidAbonoTotal)}</strong> | Base devida: <strong>R$ ${formatMoeda(abonoEsperado)}</strong></div>
                                </div>
                            `);
                        }
                    } else if (abonoStatus === "ATENCAO") {
                        if (paidAbonoRetroativo > 0) {
                            errorDetails.push(`
                                <div class="audit-issue">
                                    <span class="audit-issue__badge badge badge--warning"><i class="fa-solid fa-award"></i> ABONO RETROATIVO</span>
                                    <div class="audit-issue__math">Passivo: <strong>R$ ${formatMoeda(paidAbonoRetroativo)}</strong> | Recomenda-se conferir processo de concessão</div>
                                </div>
                            `);
                        }
                        if (abonoInfo && abonoInfo.isProportional) {
                            errorDetails.push(`
                                <div class="audit-issue">
                                    <span class="audit-issue__badge badge badge--warning"><i class="fa-solid fa-award"></i> ABONO PROPORCIONAL</span>
                                    <div class="audit-issue__math">Pago: <strong>R$ ${formatMoeda(paidAbonoCorrente)}</strong> (${abonoDias} dias de direito no mês)</div>
                                </div>
                            `);
                        }
                    }
                }

                if (cadastralIssue) {
                    errorDetails.push(`
                        <div class="audit-issue">
                            <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-circle-exclamation"></i> ATRIBUIÇÃO FC/CJ</span>
                            <div class="audit-issue__math">${cadastralIssue}</div>
                        </div>
                    `);
                }

                const detailHtml = errorDetails.join('<div class="audit-issue-divider"></div>');
                const rowStatus = hasCriticalError ? "DIVERGENTE" : (hasAttentionOnly ? "ATENCAO" : "CONFORME");

                findings.push({
                    id: server.id,
                    nome: server.nome,
                    cpf: server.cpf,
                    data_nascimento: server.data_nascimento,
                    idade_calculada: serverAgeInfo.idadeAnos,
                    carreira: normalizedCareer,
                    classe: matchedGrade.classe,
                    padrao: displayedPadrao,
                    status: rowStatus,
                    venc_prop_info: vencPropInfo,
                    is_venc_prop: isVencProp,
                    venc_esperado: expectedVenc,
                    venc_pago: paidVenc,
                    gaj_esperada: expectedGaj,
                    gaj_paga: paidGaj,
                    gas_esperada: expectedGas,
                    gas_paga: paidGas,
                    aq_tit_esperado: expectedAqTit,
                    aq_tit_pago: paidAqTit,
                    aq_tit_status: aqTitStatus,
                    aq_trein_esperado: expectedAqTrein,
                    aq_trein_pago: paidAqTrein,
                    aq_trein_status: aqTreinStatus,
                    fccj_cargo: fccjCargo,
                    fccj_modalidade: fccjModalidade,
                    fccj_esperado: expectedFccj,
                    fccj_pago: paidFccj,
                    fccj_status: fccjStatus,
                    fccj_dias: fccjDias,
                    fccj_divergence_type: fccjDivergenceType,
                    fccj_cargo_correspondente: fccjCargoCorrespondente,
                    fccj_tipo_correspondente: fccjTipoCorrespondente,
                    subst_paga: paidSubst,
                    subst_esperada: substEsperada,
                    subst_status: substStatus,
                    subst_info: substInfo,
                    alim_pago: paidAlim,
                    alim_esperado: alimEsperado,
                    alim_status: alimStatus,
                    alim_dias: alimDias,
                    pre_pago: paidPre,
                    pre_esperado: preEsperado,
                    pre_status: preStatus,
                    pre_dias: preDias,
                    pre_cotas: preCotas,
                    abono_pago: paidAbonoTotal,
                    abono_esperado: abonoEsperado,
                    abono_status: abonoStatus,
                    abono_dias: abonoDias,
                    abono_info: abonoInfo,
                    soma_ordinaria: somaRemuneratoriaOrdinaria,
                    soma_he: somaHorasExtras,
                    soma_outras: somaOutrasVerbas,
                    soma_descontos: somaDescontos,
                    rubricas_teto_ordinario: rubricasTetoOrdinario,
                    excesso_teto_ordinario: excessoTetoOrdinario,
                    excesso_he: excessoLimiteHE,
                    has_venc_error: hasVencError,
                    has_gaj_error: hasGajError,
                    has_gas_error: hasGasError,
                    has_aq_tit_error: hasAqTitError,
                    has_aq_trein_error: hasAqTreinError,
                    has_fccj_error: hasFccjError,
                    has_subst_error: hasSubstError,
                    has_alim_error: hasAlimError,
                    has_pre_error: hasPreError,
                    has_abono_error: hasAbonoError,
                    has_cadastral_error: hasCadastralError,
                    has_compulsoria_error: hasCompulsoriaError,
                    has_compulsoria_atencao: hasCompulsoriaAtencao,
                    has_teto_error: hasTetoError,
                    has_he_error: hasHeError,
                    detalhe: detailHtml,
                    desvio: desvioFinanceiro
                });
            }

        } else {
            divergentRubricsCount++;
            const desvioTotal = paidVenc + paidGaj + excessoTetoOrdinario + excessoLimiteHE;
            findings.push({
                id: server.id,
                nome: server.nome,
                cpf: server.cpf,
                data_nascimento: server.data_nascimento,
                idade_calculada: null,
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
                aq_tit_esperado: 0,
                aq_tit_pago: paidAqTit,
                aq_tit_status: "DIVERGENTE",
                aq_trein_esperado: 0,
                aq_trein_pago: paidAqTrein,
                aq_trein_status: "DIVERGENTE",
                fccj_cargo: "",
                fccj_modalidade: "",
                fccj_esperado: 0,
                fccj_pago: 0,
                fccj_status: "CONFORME",
                fccj_dias: 30,
                subst_paga: 0,
                subst_esperada: 0,
                subst_status: "CONFORME",
                alim_pago: paidAlim,
                alim_esperado: 0,
                alim_status: "CONFORME",
                pre_pago: paidPre,
                pre_esperado: 0,
                pre_status: "CONFORME",
                abono_pago: paidAbonoTotal,
                abono_esperado: 0,
                abono_status: "CONFORME",
                soma_ordinaria: somaRemuneratoriaOrdinaria,
                soma_he: somaHorasExtras,
                soma_outras: somaOutrasVerbas,
                soma_descontos: somaDescontos,
                rubricas_teto_ordinario: rubricasTetoOrdinario,
                excesso_teto_ordinario: excessoTetoOrdinario,
                excesso_he: excessoLimiteHE,
                has_venc_error: true,
                has_gaj_error: false,
                has_gas_error: false,
                has_aq_tit_error: false,
                has_aq_trein_error: false,
                has_fccj_error: false,
                has_subst_error: false,
                has_alim_error: false,
                has_pre_error: false,
                has_abono_error: false,
                has_cadastral_error: false,
                has_compulsoria_error: false,
                has_compulsoria_atencao: false,
                has_teto_error: false,
                has_he_error: false,
                detalhe: `
                    <div class="audit-issue">
                        <span class="audit-issue__badge badge badge--error"><i class="fa-solid fa-money-bill-wave"></i> VENCIMENTO</span>
                        <div class="audit-issue__math">Pago: <strong>R$ ${formatMoeda(paidVenc)}</strong> | Não consta na tabela</div>
                    </div>
                `,
                desvio: desvioTotal
            });
        }
    }

    AppState.auditFindings = findings;
    
    const conformingRubricsCount = Math.max(0, totalActiveRubrics - divergentRubricsCount - attentionRubricsCount);

    let totalGrossAllIncome = 0;
    for (const id in AppState.pivotedServers) {
        const s = AppState.pivotedServers[id];
        const grossServer = s.detalheRubricas
            .filter(r => r.tipoRD === 1)
            .reduce((acc, r) => acc + r.valor, 0);
        totalGrossAllIncome += grossServer;
    }

    let totalAuditedGrossIncome = 0;
    let totalDiscrepantAmount = 0;
    let totalAttentionAmount = 0;

    findings.forEach(f => {
        if (f.status !== "NAO_ANALISADO") {
            const server = AppState.pivotedServers[f.id];
            if (server) {
                const grossServer = server.detalheRubricas
                    .filter(r => r.tipoRD === 1)
                    .reduce((acc, r) => acc + r.valor, 0);
                totalAuditedGrossIncome += grossServer;
            }

            if (f.status === "DIVERGENTE") {
                totalDiscrepantAmount += f.desvio;
            } else if (f.status === "ATENCAO" || f.status === "PROPORCIONAL") {
                totalAttentionAmount += f.desvio;
            }
        }
    });

    const totalNonAuditedGrossIncome = Math.max(0, totalGrossAllIncome - totalAuditedGrossIncome);
    const totalConformingAmount = Math.max(0, totalAuditedGrossIncome - totalDiscrepantAmount - totalAttentionAmount);

    updateAuditDashboardUI(
        totalActiveRubrics, 
        totalNonAuditedRubrics, 
        totalRubricsInFile, 
        countActiveServers, 
        countAfastadosServers, 
        countInactiveServers, 
        countOtherServers, 
        totalServersInFile, 
        conformingRubricsCount, 
        attentionRubricsCount, 
        divergentRubricsCount,
        totalConformingAmount,
        totalAttentionAmount,
        totalDiscrepantAmount,
        totalGrossAllIncome,
        totalAuditedGrossIncome,
        totalNonAuditedGrossIncome
    );
    filterAndPaginateFindings();
    renderComplianceChart(conformingRubricsCount, attentionRubricsCount, divergentRubricsCount);

    Swal.close();
    switchView("tab-auditoria");
}

/* ==========================================================================
   === [CAPÍTULO] RENDERIZAÇÃO DE TELA, MODAL E EXPORTAÇÃO ===
   ========================================================================== */

function updateAuditDashboardUI(auditedRubrics, nonAuditedRubrics, totalRubricsAll, countActive, countAfastados, countInactive, countOthers, totalServersInFile, conformingRubrics, attentionRubrics, discrepantRubrics, totalConformingAmount = 0, totalAttentionAmount = 0, totalDiscrepantAmount = 0, totalGrossAllIncome = 0, totalAuditedMoney = 0, totalNonAuditedMoney = 0) {
    const kpiTotalRubricsAll = document.getElementById("kpi-total-rubrics-all");
    const kpiTotalGrossIncome = document.getElementById("kpi-total-gross-income");
    const kpiAuditedRubrics = document.getElementById("kpi-audited-rubrics");
    const kpiAuditedMoney = document.getElementById("kpi-audited-money");
    const kpiNonAuditedRubrics = document.getElementById("kpi-nonaudited-rubrics");
    const kpiNonAuditedMoney = document.getElementById("kpi-nonaudited-money");
    const kpiTotalServersRaw = document.getElementById("kpi-total-servers-raw");
    
    const kpiCountActive = document.getElementById("kpi-count-active");
    const kpiCountAfastados = document.getElementById("kpi-count-afastados");
    const kpiCountInactive = document.getElementById("kpi-count-inactive");
    const kpiCountOthers = document.getElementById("kpi-count-others");
    
    const kpiConformingRubrics = document.getElementById("kpi-conforming-rubrics");
    const kpiProportionalRubrics = document.getElementById("kpi-proportional-rubrics");
    const kpiDiscrepantRubrics = document.getElementById("kpi-discrepant-rubrics");
    
    const kpiConformingPct = document.getElementById("kpi-conforming-rubrics-pct");
    const kpiProportionalPct = document.getElementById("kpi-proportional-rubrics-pct");
    const kpiDiscrepantPct = document.getElementById("kpi-discrepant-rubrics-pct");

    const kpiConformingAmount = document.getElementById("kpi-conforming-amount");
    const kpiProportionalAmount = document.getElementById("kpi-proportional-amount");
    const kpiDiscrepantAmount = document.getElementById("kpi-discrepant-amount");

    if (kpiTotalRubricsAll) kpiTotalRubricsAll.textContent = totalRubricsAll.toLocaleString('pt-BR');
    if (kpiTotalGrossIncome) kpiTotalGrossIncome.textContent = `R$ ${formatMoeda(totalGrossAllIncome)}`;
    if (kpiAuditedRubrics) kpiAuditedRubrics.textContent = auditedRubrics.toLocaleString('pt-BR');
    if (kpiAuditedMoney) kpiAuditedMoney.textContent = `R$ ${formatMoeda(totalAuditedMoney)}`;
    if (kpiNonAuditedRubrics) kpiNonAuditedRubrics.textContent = nonAuditedRubrics.toLocaleString('pt-BR');
    if (kpiNonAuditedMoney) kpiNonAuditedMoney.textContent = `R$ ${formatMoeda(totalNonAuditedMoney)}`;
    if (kpiTotalServersRaw) kpiTotalServersRaw.textContent = totalServersInFile.toLocaleString('pt-BR');
    
    if (kpiCountActive) kpiCountActive.textContent = countActive.toLocaleString('pt-BR');
    if (kpiCountAfastados) kpiCountAfastados.textContent = countAfastados.toLocaleString('pt-BR');
    if (kpiCountInactive) kpiCountInactive.textContent = countInactive.toLocaleString('pt-BR');
    if (kpiCountOthers) kpiCountOthers.textContent = countOthers.toLocaleString('pt-BR');

    if (kpiConformingRubrics) kpiConformingRubrics.textContent = conformingRubrics.toLocaleString('pt-BR');
    if (kpiProportionalRubrics) kpiProportionalRubrics.textContent = attentionRubrics.toLocaleString('pt-BR');
    if (kpiDiscrepantRubrics) kpiDiscrepantRubrics.textContent = discrepantRubrics.toLocaleString('pt-BR');

    const conformingPct = auditedRubrics > 0 ? ((conformingRubrics / auditedRubrics) * 100).toFixed(1) : "0";
    const attentionPct = auditedRubrics > 0 ? ((attentionRubrics / auditedRubrics) * 100).toFixed(1) : "0";
    const discrepantPct = auditedRubrics > 0 ? ((discrepantRubrics / auditedRubrics) * 100).toFixed(1) : "0";

    if (kpiConformingPct) kpiConformingPct.textContent = `${conformingPct}%`;
    if (kpiProportionalPct) kpiProportionalPct.textContent = `${attentionPct}%`;
    if (kpiDiscrepantPct) kpiDiscrepantPct.textContent = `${discrepantPct}%`;

    if (kpiConformingAmount) kpiConformingAmount.textContent = `R$ ${formatMoeda(totalConformingAmount)}`;
    if (kpiProportionalAmount) kpiProportionalAmount.textContent = `R$ ${formatMoeda(totalAttentionAmount)}`;
    if (kpiDiscrepantAmount) kpiDiscrepantAmount.textContent = `R$ ${formatMoeda(totalDiscrepantAmount)}`;

    let auditBanner = document.getElementById("audit-incompatible-banner");
    const auditViewHeader = document.querySelector("#view-auditoria .view-header");

    if (AppState.isIncompatibleCompetence && auditViewHeader) {
        if (!auditBanner) {
            auditBanner = document.createElement("div");
            auditBanner.id = "audit-incompatible-banner";
            auditBanner.className = "notice-banner notice-banner--warning";
            auditViewHeader.appendChild(auditBanner);
        }
        auditBanner.style.display = "flex";
        auditBanner.innerHTML = `
            <i class="fa-solid fa-triangle-exclamation notice-banner__icon"></i>
            <div class="notice-banner__content">
                <strong>Folha de Período Histórico (${AppState.matchedCompetence}):</strong> Não há tabela cadastrada para este ano. A análise utilizou a Tabela de Jan/2026 como espelho temporário.
            </div>
        `;
    } else if (auditBanner) {
        auditBanner.style.display = "none";
    }
}

function renderComplianceChart(conforming, attention, discrepancies) {
    const canvas = document.getElementById("compliance-chart");
    if (!canvas) return;

    if (AppState.chartInstance) {
        AppState.chartInstance.destroy();
    }

    const ctx = canvas.getContext("2d");
    const realData = [conforming, attention, discrepancies];
    const total = conforming + attention + discrepancies;

    let displayData = [...realData];
    if (total > 0) {
        const minVisualFloor = Math.max(1, Math.round(total * 0.035));
        let adjustedAtt = (attention > 0 && attention < minVisualFloor) ? minVisualFloor : attention;
        let adjustedDisc = (discrepancies > 0 && discrepancies < minVisualFloor) ? minVisualFloor : discrepancies;
        let adjustedConf = Math.max(0, total - (adjustedAtt > 0 ? adjustedAtt : 0) - (adjustedDisc > 0 ? adjustedDisc : 0));
        
        displayData = [adjustedConf, adjustedAtt, adjustedDisc];
    }

    AppState.chartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Em Conformidade', 'Pontos de Atenção', 'Divergências'],
            datasets: [{
                data: displayData,
                backgroundColor: ['#10B981', '#F59E0B', '#E11D48'],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    padding: 8,
                    titleFont: { size: 11, weight: 'bold' },
                    bodyFont: { size: 11 },
                    callbacks: {
                        title: function(items) {
                            return items.length > 0 ? items[0].label : "";
                        },
                        label: function(context) {
                            const idx = context.dataIndex;
                            const val = realData[idx];
                            const pct = total > 0 ? ((val / total) * 100).toFixed(1) : "0";
                            return ` ${val.toLocaleString('pt-BR')} lançamentos (${pct}%)`;
                        }
                    }
                }
            },
            cutout: '68%'
        }
    });
}

function updateSortIcons() {
    document.querySelectorAll(".sortable-th").forEach(th => {
        const field = th.getAttribute("data-sort");
        const icon = th.querySelector(".sort-icon");
        if (!icon) return;

        if (field === AppState.sortField) {
            th.classList.add("sorted");
            icon.className = AppState.sortDirection === "asc" 
                ? "fa-solid fa-sort-up sort-icon" 
                : "fa-solid fa-sort-down sort-icon";
        } else {
            th.classList.remove("sorted");
            icon.className = "fa-solid fa-sort sort-icon";
        }
    });
}

function filterAndPaginateFindings() {
    let result = [...AppState.auditFindings];

    if (AppState.activeFilter === "alerts") {
        result = result.filter(f => f.status === "DIVERGENTE" || f.status === "ATENCAO" || f.status === "PROPORCIONAL");
    } else if (AppState.activeFilter === "atencao" || AppState.activeFilter === "proportional") {
        result = result.filter(f => f.status === "ATENCAO" || f.status === "PROPORCIONAL");
    } else if (AppState.activeFilter === "divergent") {
        result = result.filter(f => f.status === "DIVERGENTE");
    }

    if (AppState.alertTypeFilter !== "all") {
        result = result.filter(item => {
            switch (AppState.alertTypeFilter) {
                case "substituicao":
                    return item.subst_status !== "CONFORME" || item.has_subst_error;
                case "aq_treinamento":
                    return item.aq_trein_status !== "CONFORME" || item.has_aq_trein_error;
                case "aq_titulacao":
                    return item.aq_tit_status !== "CONFORME" || item.has_aq_tit_error;
                case "fccj":
                    return item.fccj_status !== "CONFORME" || item.has_fccj_error;
                case "venc_gaj":
                    return item.has_venc_error || item.has_gaj_error || item.has_gas_error || item.is_venc_prop;
                case "beneficios":
                    return item.alim_status !== "CONFORME" || item.pre_status !== "CONFORME" || item.has_alim_error || item.has_pre_error;
                case "abono":
                    return item.abono_status !== "CONFORME" || item.has_abono_error;
                case "tetos":
                    return item.has_teto_error || item.has_he_error;
                case "cadastral":
                    return item.has_cadastral_error || item.has_compulsoria_error || item.has_compulsoria_atencao;
                default:
                    return true;
            }
        });
    }

    const query = AppState.searchQuery.trim().toLowerCase();
    if (query !== "") {
        const queryNumerica = query.replace(".", ",");

        result = result.filter(item => {
            const idMatch = item.id.toLowerCase().includes(query);
            const nomeMatch = (item.nome || "").toLowerCase().includes(query);
            const cpfMatch = (item.cpf || "").includes(query);
            const carreiraMatch = (item.carreira || "").toLowerCase().includes(query);
            const padraoMatch = `${item.classe}-${item.padrao}`.toLowerCase().includes(query);
            
            const desvioStr = item.desvio.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
            const desvioMatch = desvioStr.includes(queryNumerica) || item.desvio.toFixed(2).includes(query);
            
            return idMatch || nomeMatch || cpfMatch || carreiraMatch || padraoMatch || desvioMatch;
        });
    }

    const field = AppState.sortField;
    const direction = AppState.sortDirection === "asc" ? 1 : -1;

    result.sort((a, b) => {
        let valA = a[field];
        let valB = b[field];

        if (typeof valA === "number" && typeof valB === "number") {
            return (valA - valB) * direction;
        }

        if (field === "id") {
            const numA = parseInt(valA, 10) || 0;
            const numB = parseInt(valB, 10) || 0;
            if (numA !== numB) return (numA - numB) * direction;
        }

        const strA = (valA || "").toString().toLowerCase();
        const strB = (valB || "").toString().toLowerCase();
        return strA.localeCompare(strB, "pt-BR") * direction;
    });

    AppState.filteredFindings = result;

    const maxPage = AppState.itemsPerPage === "all" ? 1 : Math.ceil(AppState.filteredFindings.length / AppState.itemsPerPage);
    if (AppState.currentPage > maxPage) AppState.currentPage = maxPage || 1;
    if (AppState.currentPage < 1) AppState.currentPage = 1;

    updateSortIcons();
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
                    <i class="fa-solid fa-circle-check" style="color: var(--color-start); font-size: 28px; display: block; margin-bottom: 12px;"></i>
                    Excelente! Nenhum registro encontrado para os critérios de busca e filtro ativos.
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
        if (item.status === "ATENCAO" || item.status === "PROPORCIONAL") desvioStyleColor = "var(--color-warning)";
        else if (item.desvio > 0.1) desvioStyleColor = "var(--color-conclusion)";
        else if (item.desvio < -0.1) desvioStyleColor = "var(--color-start)";

        row.innerHTML = `
            <td data-label="Matrícula"><strong>${item.id}</strong></td>
            <td data-label="Cargo Folha">${item.carreira}</td>
            <td data-label="Classe / Padrão"><span class="badge badge--neutral">${gradeStr}</span></td>
            <td data-label="Remuneração Ordinária">R$ ${formatMoeda(item.soma_ordinaria)}</td>
            <td data-label="Horas Extras">R$ ${formatMoeda(item.soma_he)}</td>
            <td data-label="Outras Verbas">R$ ${formatMoeda(item.soma_outras)}</td>
            <td data-label="Descontos">${item.soma_descontos > 0 ? '- ' : ''}R$ ${formatMoeda(item.soma_descontos)}</td>
            <td data-label="Inconsistência Detalhada" class="data-table__cell--detail">${item.detalhe}</td>
            <td data-label="Desvio Potencial"><strong style="color: ${desvioStyleColor}">R$ ${formatMoeda(item.desvio)}</strong></td>
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
    
    let statusBadgeHtml = `<span class="badge badge--success">Conforme</span>`;
    if (finding.status === "ATENCAO" || finding.status === "PROPORCIONAL") {
        statusBadgeHtml = `<span class="badge badge--warning">Alerta de Atenção</span>`;
    } else if (finding.status === "DIVERGENTE") {
        statusBadgeHtml = `<span class="badge badge--error">Alerta de Divergência</span>`;
    } else if (finding.status === "NAO_ANALISADO") {
        statusBadgeHtml = `<span class="badge badge--neutral">Não Analisado</span>`;
    }

    let rubricsHtml = "";
    server.detalheRubricas.forEach((rub, rIdx) => {
        const tagFolha = rub.tipoComp === 1
            ? `<span class="badge badge--neutral">Folha Suplementar</span>`
            : `<span class="badge badge--neutral">Folha Regular</span>`;

        let tagTetoHtml = "";
        if (rub.tipoRD === 1) {
                if (isHorasExtras(rub.descricao)) {
                    tagTetoHtml = `<span class="badge badge--warning"><i class="fa-solid fa-clock"></i> Teto HE</span>`;
                } else if (isFerias(rub.descricao)) {
                    tagTetoHtml = `<span class="badge badge--neutral">Fora do Teto (Férias)</span>`;
                } else if (isGratificacaoNatalina(rub.descricao)) {
                    tagTetoHtml = `<span class="badge badge--neutral">Fora do Teto (13º)</span>`;
                } else if (isAbonoPermanencia(rub.codigo, rub.descricao)) {
                    tagTetoHtml = `<span class="badge badge--success">Fora do Teto (Abono Perm.)</span>`;
                } else if (isGECC(rub.descricao)) {
                    tagTetoHtml = `<span class="badge badge--neutral">Fora do Teto (GECC)</span>`;
                } else if (isGAACTA(rub.descricao)) {
                    tagTetoHtml = `<span class="badge badge--neutral">Fora do Teto (GAACTA)</span>`;
                } else if (isBeneficioIndenizatorio(rub.codigo, rub.descricao)) {
                    tagTetoHtml = `<span class="badge badge--neutral">Fora do Teto (Indenizatória)</span>`;
                } else {
                    tagTetoHtml = `<span class="badge badge--primary"><i class="fa-solid fa-calculator"></i> Teto Ordinário</span>`;
                }
            }

        const isDeduction = rub.tipoRD === 2;

        rubricsHtml += `
            <div class="audit-rubric-row" id="rubric-row-${rIdx}">
                <div class="audit-rubric-row__info">
                    <strong class="audit-rubric-row__code">${rub.codigo}</strong> - <span class="audit-rubric-row__desc">${rub.descricao}</span>
                    <div class="audit-rubric-row__tags">${tagFolha}${tagTetoHtml}</div>
                </div>
                <strong class="audit-rubric-row__val ${isDeduction ? 'audit-rubric-row__val--deduction' : 'audit-rubric-row__val--income'}">
                    ${isDeduction ? '- ' : ''}R$ ${formatMoeda(rub.valor)}
                </strong>
            </div>
        `;
    });

    const isVencConforming = Math.abs(finding.venc_pago - finding.venc_esperado) < 0.20;
    const isGajConforming = Math.abs(finding.gaj_paga - finding.gaj_esperada) < 0.20;
    const isGasConforming = Math.abs(finding.gas_paga - finding.gas_esperada) < 0.15;
    const isTetoOrdConforming = finding.excesso_teto_ordinario <= 0.01;
    const isHeConforming = finding.excesso_he <= 0.01;

    const diffVenc = finding.venc_pago - finding.venc_esperado;
    let noteVenc = "";
    if (finding.venc_prop_info) {
        const info = finding.venc_prop_info;
        const baseDivisorTxt = info.baseRotulo ? ` — ${info.baseRotulo}` : (info.divisor ? ` — base: ${info.divisor} dias` : '');

        if (info.cargoIncompativel) {
            noteVenc = `Atenção: O servidor está cadastrado como <strong>${normalizedCareer}</strong>, mas o valor de <strong>R$ ${formatMoeda(finding.venc_pago)}</strong> corresponde a <strong>${info.dias} dias de ${info.cargoEsperado} (${info.classe}-${info.padrao})${baseDivisorTxt}</strong>. Verifique se o cargo no cadastro está correto.`;
        } else if (info.tipo === "TRANSICAO_FERIAS") {
            noteVenc = `O Vencimento pago de <strong>R$ ${formatMoeda(finding.venc_pago)}</strong> situa-se entre os padrões <strong>${info.gradeAnt.classe}-${info.gradeAnt.padrao} (R$ ${formatMoeda(info.gradeAnt.vencimento)})</strong> e <strong>${info.gradeNovo.classe}-${info.gradeNovo.padrao} (R$ ${formatMoeda(info.gradeNovo.vencimento)})</strong> com proporção de GAJ exata (140%${baseDivisorTxt}). Constam registros de acerto de férias na folha. Recomenda-se conferir a portaria de progressão funcional.`;
        } else if (info.tipo === "PROGRESSAO") {
            noteVenc = `Identificado <strong>pagamento proporcional por progressão funcional</strong>: composto por <strong>${info.diasAnt} dias no padrão ${info.gradeAnt.classe}${info.gradeAnt.padrao}</strong> acrescido de <strong>${info.diasNovo} dias no padrão ${info.gradeNovo.classe}${info.gradeNovo.padrao}</strong> (${baseDivisorTxt.replace(/^ — /, '')}). Valor proporcional cumprido.`;
        } else {
            noteVenc = `Identificado <strong>pagamento proporcional de Vencimento Básico</strong> no valor de <strong>R$ ${formatMoeda(finding.venc_pago)}</strong>, referente a <strong>${info.dias} dias de efetivo exercício</strong> no padrão ${info.classe}-${info.padrao}${baseDivisorTxt}.`;
        }
    } else if (!isVencConforming) {
        noteVenc = `
            O vencimento básico de <strong>R$ ${formatMoeda(finding.venc_pago)}</strong> difere do previsto na Tabela Oficial do TSE para o padrão <strong>${gradeStr}</strong> (esperado: <strong>R$ ${formatMoeda(finding.venc_esperado)}</strong>). 
            Diferença calculada: <strong style="color: var(--color-conclusion);">R$ ${formatMoeda(diffVenc)}</strong>.
        `;
    }

    const diffGaj = finding.gaj_paga - finding.gaj_esperada;
    let noteGaj = "";
    if (finding.venc_prop_info) {
        const baseDivisorGaj = finding.venc_prop_info.baseRotulo ? ` (${finding.venc_prop_info.baseRotulo})` : '';
        noteGaj = `A Gratificação Judiciária (GAJ de 140%) foi calculada e paga em exata conformidade sobre a fração proporcional do Vencimento Básico apurado${baseDivisorGaj}.`;
    } else if (!isGajConforming) {
        noteGaj = `
            A GAJ paga de <strong>R$ ${formatMoeda(finding.gaj_paga)}</strong> diverge de 140% sobre o Vencimento Básico do padrão <strong>${gradeStr}</strong> (R$ ${formatMoeda(finding.venc_esperado)} &times; 140% = <strong>R$ ${formatMoeda(finding.gaj_esperada)}</strong>). 
            Desvio de <strong style="color: var(--color-conclusion);">R$ ${formatMoeda(diffGaj)}</strong>. (Art. 13 da Lei nº 11.416/2006).
        `;
    }
    
    let noteGas = "";
    if (!isGasConforming) {
        const diffGas = finding.gas_paga - finding.gas_esperada;
        noteGas = `
            A GAS paga de <strong>R$ ${formatMoeda(finding.gas_paga)}</strong> diverge do percentual de 35% sobre o Vencimento Básico. 
            Divergência: <strong style="color: var(--color-conclusion);">R$ ${formatMoeda(diffGas)}</strong>. (Art. 17 da Lei nº 11.416/2006).
        `;
    }

    let noteAqTit = "";
    if (finding.aq_tit_status === "PROPORCIONAL") {
        const diffAqTit = finding.aq_tit_pago - finding.aq_tit_esperado;
        const propCheck = checkAqTitProportionalAdjustment(finding.aq_tit_pago, finding.aq_tit_esperado, activeVR);
        const baseDivisorTxt = propCheck.baseRotulo ? ` — base: ${propCheck.baseRotulo}` : (propCheck.divisor ? ` — base: ${propCheck.divisor} dias` : '');
        const daysText = propCheck.days > 0 ? `${propCheck.days} dias proporcionais` : `dias proporcionais`;

        if (finding.aq_tit_esperado === 0) {
            noteAqTit = `Identificado <strong>pagamento proporcional</strong> de <strong>R$ ${formatMoeda(finding.aq_tit_pago)}</strong> (${daysText}${baseDivisorTxt}) por novo título averbado no mês.`;
        } else {
            noteAqTit = `Valor composto pelo patamar integral de <strong>${(finding.aq_tit_esperado / activeVR).toFixed(2)} VR (R$ ${formatMoeda(finding.aq_tit_esperado)})</strong> acrescido de <strong>pagamento proporcional</strong> de <strong>R$ ${formatMoeda(diffAqTit)}</strong> (${daysText}${baseDivisorTxt}).`;
        }
    } else if (finding.aq_tit_status === "DIVERGENTE") {
        const coefPagoTit = finding.aq_tit_pago / activeVR;
        const coefEspTit = finding.aq_tit_esperado / activeVR;
        const diffTit = finding.aq_tit_pago - finding.aq_tit_esperado;

        if (coefPagoTit > 5.0) {
            noteAqTit = `Recebimento de <strong>R$ ${formatMoeda(finding.aq_tit_pago)}</strong> (${coefPagoTit.toFixed(2)} VR), ultrapassando o teto de 5,0 VR (Doutorado) que absorve todos os demais títulos (Art. 15, § 1º-B da Lei nº 11.416/2006).`;
        } else if (coefPagoTit > 2.0 && coefPagoTit < 3.5) {
            noteAqTit = `A soma de títulos menores alcançou <strong>${coefPagoTit.toFixed(2)} VR</strong>, ultrapassando o teto legal de <strong>2,0 VR (R$ ${formatMoeda(2.0 * activeVR)})</strong> sem registro de Mestrado ou Doutorado (Art. 15, § 1º-C da Lei nº 11.416/2006).`;
        } else {
            noteAqTit = `Recebimento de <strong>R$ ${formatMoeda(finding.aq_tit_pago)}</strong> (${coefPagoTit.toFixed(2)} VR). O patamar reconhecido é de <strong>${coefEspTit.toFixed(2)} VR (R$ ${formatMoeda(finding.aq_tit_esperado)})</strong>. A diferença de <strong>R$ ${formatMoeda(diffTit)}</strong> não corresponde a proporção de dias do calendário.`;
        }
    }

    let noteAqTrein = "";
    if (finding.aq_trein_status === "PROPORCIONAL") {
        const diffAqTrein = finding.aq_trein_pago - finding.aq_trein_esperado;
        const propCheck = checkAqTreinProportionalAdjustment(finding.aq_trein_pago, finding.aq_trein_esperado, activeVR);
        const baseDivisorTxt = propCheck.baseRotulo ? ` — base: ${propCheck.baseRotulo}` : (propCheck.divisor ? ` — base: ${propCheck.divisor} dias` : '');
        const daysText = propCheck.days > 0 ? `${propCheck.days} dias proporcionais` : `dias proporcionais`;

        if (finding.aq_trein_esperado === 0) {
            noteAqTrein = `Identificado <strong>pagamento proporcional</strong> de <strong>R$ ${formatMoeda(finding.aq_trein_pago)}</strong> (${daysText}${baseDivisorTxt}) por capacitação homologada no mês.`;
        } else {
            noteAqTrein = `Valor composto pelo patamar integral de <strong>${(finding.aq_trein_esperado / activeVR).toFixed(2)} VR (R$ ${formatMoeda(finding.aq_trein_esperado)})</strong> acrescido de <strong>pagamento proporcional</strong> de <strong>R$ ${formatMoeda(diffAqTrein)}</strong> (${daysText}${baseDivisorTxt}).`;
        }
    } else if (finding.aq_trein_status === "DIVERGENTE") {
        const coefPagoTrein = finding.aq_trein_pago / activeVR;
        const coefEspTrein = finding.aq_trein_esperado / activeVR;
        const diffTrein = finding.aq_trein_pago - finding.aq_trein_esperado;

        if (coefPagoTrein > 0.60) {
            noteAqTrein = `Total pago de treinamento (<strong>R$ ${formatMoeda(finding.aq_trein_pago)}</strong> = ${coefPagoTrein.toFixed(2)} VR) ultrapassa o teto legal de <strong>0,60 VR (R$ ${formatMoeda(0.60 * activeVR)})</strong> (Art. 15, V da Lei nº 11.416/2006).`;
        } else {
            noteAqTrein = `Recebimento de <strong>R$ ${formatMoeda(finding.aq_trein_pago)}</strong> (${coefPagoTrein.toFixed(2)} VR). Patamar reconhecido: <strong>${coefEspTrein.toFixed(2)} VR (R$ ${formatMoeda(finding.aq_trein_esperado)})</strong>. Diferença de <strong>R$ ${formatMoeda(diffTrein)}</strong> não fecha com fração diária do calendário.`;
        }
    }

    let noteFccj = "";
    if (finding.fccj_cargo || finding.fccj_pago > 0) {
        const propCheck = checkCommissionProportionalAdjustment(finding.fccj_pago, finding.fccj_esperado);
        const baseDivisorTxt = propCheck.baseRotulo ? ` — base: ${propCheck.baseRotulo}` : (finding.fccj_divisor ? ` — base: ${finding.fccj_divisor} dias` : '');

        if (finding.fccj_status === "PROPORCIONAL" || (finding.fccj_status === "ATENCAO" && finding.fccj_dias < 30 && !finding.fccj_divergence_type)) {
            noteFccj = `Identificado <strong>pagamento proporcional</strong> de <strong>R$ ${formatMoeda(finding.fccj_pago)}</strong> (${finding.fccj_dias} dias de exercício${baseDivisorTxt}) no cargo comissionado <strong>${finding.fccj_cargo}</strong> (${finding.fccj_modalidade}). Valor integral de referência: <strong>R$ ${formatMoeda(finding.fccj_esperado)}</strong>.`;
        } else if (finding.fccj_divergence_type === "DESCOMPASSO") {
            noteFccj = `O servidor consta cadastrado com a comissão <strong>${finding.fccj_cargo}</strong> (esperado: R$ ${formatMoeda(finding.fccj_esperado)}), porém recebeu na folha o valor de <strong>R$ ${formatMoeda(finding.fccj_pago)}</strong>, correspondente à tabela de <strong>${finding.fccj_cargo_correspondente}</strong> (${finding.fccj_tipo_correspondente}). Essa situação é típica de transição funcional (nomeação ou dispensa ocorrida no final do mês cuja vigência financeira inicia na competência seguinte). Recomenda-se confrontar a data de designação.`;
        } else if (finding.fccj_divergence_type === "NAO_PAGA") {
            noteFccj = `O servidor possui a comissão <strong>${finding.fccj_cargo}</strong> ativa no cadastro, mas não houve lançamento da parcela remuneratória no contracheque. Hipóteses prováveis para verificação do auditor: (1) exoneração ou dispensa ocorrida no mês anterior com pendência de atualização cadastral; (2) afastamento ou licença que suspende a retribuição do cargo em comissão; ou (3) cessão para outro órgão com ônus da comissão a cargo do cessionário. Recomenda-se confrontar a data de designação.`;
        } else if (finding.fccj_divergence_type === "SEM_SIGLA") {
            noteFccj = `Identificado pagamento de <strong>R$ ${formatMoeda(finding.fccj_pago)}</strong> referente à comissão <strong>${finding.fccj_cargo_correspondente || 'de tabela'}</strong>, entretanto não consta sigla de cargo em comissão ativa no cadastro deste servidor. Recomenda-se verificar se houve designação sem a devida atualização do código de função no cadastro.`;
        } else if (finding.fccj_status === "DIVERGENTE") {
            noteFccj = `O valor pago de <strong>R$ ${formatMoeda(finding.fccj_pago)}</strong> diverge do valor da tabela para <strong>${finding.fccj_cargo}</strong> (${finding.fccj_modalidade}: <strong>R$ ${formatMoeda(finding.fccj_esperado)}</strong>) e não corresponde a frações de dias de exercício.`;
        }
    }

    let noteSubst = "";
    if (finding.subst_paga > 0) {
        if (finding.subst_status === "PROPORCIONAL" && finding.subst_info) {
            const info = finding.subst_info;
            const divisorTxt = info.baseRotulo ? ` — base: ${info.baseRotulo}` : (info.divisor ? ` — base: mês de ${info.divisor} dias` : '');
            if (info.tipo === "DIFERENCA") {
                noteSubst = `Identificado pagamento de <strong>substituição eventual por diferença</strong> de <strong>R$ ${formatMoeda(finding.subst_paga)}</strong> (${info.dias} dias de ${info.cargoSubstituido} exercida pelo titular de ${info.cargoTitular}${divisorTxt}). Diferença diária: R$ ${formatMoeda(info.deltaDiaria)}/dia.`;
            } else {
                noteSubst = `Identificado pagamento de <strong>substituição eventual plena</strong> de <strong>R$ ${formatMoeda(finding.subst_paga)}</strong> (${info.dias} dias de substituição de ${info.cargoSubstituido}${divisorTxt}). Diária: R$ ${formatMoeda(info.diariaSuperior)}/dia.`;
            }
        } else {
            noteSubst = `O valor de substituição de <strong>R$ ${formatMoeda(finding.subst_paga)}</strong> não coincide com diárias oficiais de FC ou CJ do tribunal.`;
        }
    }

    let noteAlim = "";
    if (finding.alim_pago > 0) {
        const alimCheck = checkBeneficioProportionalAdjustment(finding.alim_pago, VALOR_AUXILIO_ALIMENTACAO_2026);
        const divisorUtilizado = alimCheck.divisor || 30;
        const baseDivisorTxt = alimCheck.baseRotulo ? ` (${alimCheck.baseRotulo})` : ` (base: mês de ${divisorUtilizado} dias)`;

        if (finding.alim_status === "PROPORCIONAL") {
            noteAlim = `Pagamento proporcional de Auxílio-Alimentação no valor de <strong>R$ ${formatMoeda(finding.alim_pago)}</strong> (${finding.alim_dias} dias de vínculo ativo). Diária: R$ ${formatMoeda(VALOR_AUXILIO_ALIMENTACAO_2026 / divisorUtilizado)}/dia${baseDivisorTxt}.`;
        } else if (finding.alim_status === "DIVERGENTE") {
            noteAlim = `O valor de Auxílio-Alimentação de <strong>R$ ${formatMoeda(finding.alim_pago)}</strong> difere do valor integral de <strong>R$ ${formatMoeda(VALOR_AUXILIO_ALIMENTACAO_2026)}</strong>.`;
        }
    }

    let notePre = "";
    if (finding.pre_pago > 0) {
        const preCheck = checkBeneficioProportionalAdjustment(finding.pre_pago, VALOR_ASSISTENCIA_PRE_ESCOLAR_2026);
        const baseDivisorTxt = preCheck.baseRotulo ? ` — base: ${preCheck.baseRotulo}` : '';

        if (finding.pre_status === "PROPORCIONAL") {
            notePre = `Pagamento proporcional de Assistência Pré-Escolar de <strong>R$ ${formatMoeda(finding.pre_pago)}</strong> (${finding.pre_dias} dias proporcionais${baseDivisorTxt}).`;
        } else if (finding.pre_status === "DIVERGENTE") {
            notePre = `O valor de Pré-Escolar de <strong>R$ ${formatMoeda(finding.pre_pago)}</strong> não fecha com cotas integrais (R$ ${formatMoeda(VALOR_ASSISTENCIA_PRE_ESCOLAR_2026)}/dependente) nem frações diárias do calendário.`;
        }
    }

    let noteAbono = "";
    if (finding.abono_pago > 0) {
        const info = finding.abono_info;
        if (info && info.tipo === "COMPULSORIA_ULTRAPASSADA") {
            noteAbono = `Recebimento indevido de Abono de Permanência no valor de <strong>R$ ${formatMoeda(finding.abono_pago)}</strong> após atingir a idade limite constitucional da aposentadoria compulsória (75 anos — Art. 40, § 1º, II e § 19 da CF/88 c/c EC nº 88/2015). O benefício e o vínculo estatutário cessam compulsoriamente aos 75 anos.`;
        } else if (info && info.tipo === "SEM_RETENCAO") {
            noteAbono = `Identificado pagamento de Abono de Permanência no valor de <strong>R$ ${formatMoeda(finding.abono_pago)}</strong> sem que tenha havido qualquer retenção ou desconto de contribuição previdenciária no contracheque.`;
        } else if (info && info.tipo === "EXCESSO") {
            noteAbono = `O valor de Abono de Permanência mensal pago (<strong>R$ ${formatMoeda(finding.abono_pago)}</strong>) é superior ao desconto total de previdência efetuado no mês (R$ ${formatMoeda(info.rppsEsperado)}). Excesso financeiro a ser glosado: <strong style="color: var(--color-conclusion);">R$ ${formatMoeda(info.desvio)}</strong>.`;
        } else if (info && info.tipo === "PASSIVO_RETROATIVO") {
            noteAbono = `Identificado pagamento de <strong>Abono de Permanência Retroativo / Exercícios Anteriores</strong> no valor de <strong>R$ ${formatMoeda(finding.abono_pago)}</strong>. Trata-se de valor acumulado legítimo pago com atraso. Recomenda-se confrontar o processo administrativo de concessão.`;
        } else if (info && info.tipo === "RPPS_EFETIVO") {
            const complementoRetro = info.abonoRetroativo > 0 ? ` (acrescido de R$ ${formatMoeda(info.abonoRetroativo)} de passivo anterior)` : '';
            noteAbono = `O Abono de Permanência mensal pago (<strong>R$ ${formatMoeda(finding.abono_pago - (info.abonoRetroativo || 0))}</strong>)${complementoRetro} coincide rigorosamente com a contribuição previdenciária progressiva do cargo efetivo (R$ ${formatMoeda(info.baseEfetivo || 0)}). A diferença em relação ao desconto total do holerite decorre da incidência facultativa sobre FC/CJ (Art. 40, § 19 da CF/88).`;
        } else if (info && info.tipo === "RPPS_TOTAL") {
            const complementoRetro = info.abonoRetroativo > 0 ? ` (acrescido de R$ ${formatMoeda(info.abonoRetroativo)} de passivo anterior)` : '';
            noteAbono = `O valor de Abono de Permanência mensal pago (<strong>R$ ${formatMoeda(finding.abono_pago - (info.abonoRetroativo || 0))}</strong>)${complementoRetro} neutraliza 100% do desconto de previdência total do contracheque (Art. 40, § 19 da CF/88).`;
        } else if (info && info.tipo === "PROPORCIONAL_EFETIVO") {
            const baseDivisorTxt = info.baseRotulo ? ` — base: ${info.baseRotulo}` : (info.divisor ? ` — base: ${info.divisor} dias` : '');
            noteAbono = `Identificado <strong>pagamento proporcional de Abono de Permanência</strong> no valor de <strong>R$ ${formatMoeda(finding.abono_pago)}</strong>, referente a <strong>${finding.abono_dias} dias proporcionais</strong> desde a data de implementação dos requisitos de aposentadoria voluntária no mês${baseDivisorTxt}.`;
        } else {
            noteAbono = `O Abono de Permanência pago (<strong>R$ ${formatMoeda(finding.abono_pago)}</strong>) não coincide com a contribuição progressiva do cargo efetivo nem com dias proporcionais regulamentares do calendário.`;
        }
    }

    let noteCompulsoria = "";
    if (finding.has_compulsoria_error) {
        noteCompulsoria = `Servidor ativo na folha com <strong>${finding.idade_calculada} anos</strong> de idade completados antes do início desta competência. Atingiu o limite de idade da aposentadoria compulsória previsto no Art. 40, § 1º, II da Constituição Federal (EC nº 88/2015). Recomenda-se conferir a publicação da portaria de vacância/aposentadoria.`;
    } else if (finding.has_compulsoria_atencao) {
        noteCompulsoria = `Servidor completou <strong>75 anos de idade</strong> no curso desta competência. Mês de transição para a aposentadoria compulsória constitucional (Art. 40, § 1º, II da CF/88).`;
    }

    let tetoCompositionRows = "";
    (finding.rubricas_teto_ordinario || []).forEach(r => {
        tetoCompositionRows += `
            <div class="audit-breakdown__item">
                <span><i class="fa-solid fa-angle-right" style="color: var(--text3); margin-right: 6px; font-size: 10px; opacity: 0.6;"></i><span class="audit-breakdown__item-code">${r.codigo}</span> - ${r.descricao}</span>
                <span class="audit-breakdown__item-code">R$ ${formatMoeda(r.valor)}</span>
            </div>
        `;
    });

    const noteTetoOrd = `
        <div style="margin-bottom: 12px; font-size: 15px; line-height: 1.6;">
            A remuneração ordinária bruta apurada (<strong>R$ ${formatMoeda(finding.soma_ordinaria)}</strong>) — excluídas verbas indenizatórias, HE, férias e 13º — ${isTetoOrdConforming ? 'está <strong>em conformidade</strong> com o teto constitucional' : 'ultrapassa o teto constitucional geral do funcionalismo'} (<strong>R$ 46.366,19</strong>).
            ${!isTetoOrdConforming ? `Excesso sujeito a glosa: <strong style="color: var(--color-conclusion);">R$ ${formatMoeda(finding.excesso_teto_ordinario)}</strong>. (Art. 37, XI da CF/88).` : ''}
        </div>
        <div class="audit-breakdown">
            <div class="audit-breakdown__heading">Composição da Base Ordinária de Incidência</div>
            <div class="audit-breakdown__list">
                ${tetoCompositionRows}
                <div class="audit-breakdown__subtotal">
                    <span>Total da Base Ordinária:</span>
                    <strong style="color: var(--primary);">R$ ${formatMoeda(finding.soma_ordinaria)}</strong>
                </div>
                <div class="audit-breakdown__limit">
                    <span>(-) Teto Constitucional (STF):</span>
                    <span>R$ ${formatMoeda(TETO_CONSTITUCIONAL_STF)}</span>
                </div>
                <div class="audit-breakdown__total">
                    <span>(=) Glosa / Excesso de Teto:</span>
                    <strong style="color: ${finding.excesso_teto_ordinario > 0.01 ? 'var(--color-conclusion)' : 'var(--color-start)'};">R$ ${formatMoeda(finding.excesso_teto_ordinario)}</strong>
                </div>
            </div>
        </div>
    `;

    let noteHe = "";
    if (!isHeConforming) {
        noteHe = `
            O total pago de serviço extraordinário no mês (<strong>R$ ${formatMoeda(finding.soma_he)}</strong>) ultrapassa o limite máximo fixado pelo TSE (<strong>R$ 17.000,00</strong>). 
            Glosar: <strong style="color: var(--color-conclusion);">R$ ${formatMoeda(finding.excesso_he)}</strong>. (Res. CNJ nº 14/2006).
        `;
    }

    const compRow = (label, paid, expected, statusType, iconClass, note = "", forceShowNote = false) => {
        let modifierClass = "audit-card--conforming";
        let statusBadgeClass = "audit-card__badge-status--conforming";
        let noteModifierClass = "";
        let statusText = "Conforme";

        if (statusType === "ATENCAO" || statusType === "PROPORCIONAL") {
            modifierClass = "audit-card--proportional";
            statusBadgeClass = "audit-card__badge-status--proportional";
            noteModifierClass = "audit-card__note--warning";
            statusText = "Atenção";
        } else if (statusType === "DIVERGENTE" || statusType === false) {
            modifierClass = "audit-card--divergent";
            statusBadgeClass = "audit-card__badge-status--divergent";
            noteModifierClass = "audit-card__note--divergent";
            statusText = "Divergente";
        }
        
        const noteHtml = ((statusType !== "CONFORME" && statusType !== true && note) || forceShowNote) ? `
            <div class="audit-card__note ${noteModifierClass}">
                <strong>Nota Técnica:</strong> ${note}
            </div>
        ` : '';

        return `
            <div class="audit-card ${modifierClass}">
                <div class="audit-card__header">
                    <span class="audit-card__title">
                        <i class="${iconClass} audit-card__icon"></i>
                        ${label}
                    </span>
                    <span class="audit-card__badge-status ${statusBadgeClass}">${statusText}</span>
                </div>
                <div class="audit-card__values">
                    <span>Pago: R$ ${formatMoeda(paid)}</span>
                    <span>Esperado / Limite: R$ ${formatMoeda(expected)}</span>
                </div>
                ${noteHtml}
            </div>
        `;
    };

    let vencStatusType = isVencConforming ? "CONFORME" : "DIVERGENTE";
    if (finding.venc_prop_info) vencStatusType = "ATENCAO";

    let gajStatusType = isGajConforming ? "CONFORME" : "DIVERGENTE";
    if (finding.venc_prop_info) gajStatusType = "ATENCAO";

    const fccjSectionHtml = (finding.fccj_cargo || finding.fccj_pago > 0) ? `
        ${compRow(
            `Comissão / Função (${finding.fccj_cargo || 'FC/CJ'}) — ${finding.fccj_modalidade || 'Integral'}`,
            finding.fccj_pago,
            finding.fccj_esperado,
            finding.fccj_status,
            "fa-solid fa-briefcase",
            noteFccj,
            finding.fccj_status === "ATENCAO" || finding.fccj_status === "PROPORCIONAL"
        )}
    ` : '';

    const substSectionHtml = (APP_CONFIG.features.auditSubstituicao && finding.subst_paga > 0) ? `
        ${compRow(
            `Substituição de Função/Comissão`,
            finding.subst_paga,
            finding.subst_esperada,
            finding.subst_status,
            "fa-solid fa-people-arrows",
            noteSubst,
            true
        )}
    ` : '';

    const alimSectionHtml = (finding.alim_pago > 0) ? `
        ${compRow(
            `Auxílio-Alimentação`,
            finding.alim_pago,
            finding.alim_esperado,
            finding.alim_status,
            "fa-solid fa-utensils",
            noteAlim,
            finding.alim_status === "PROPORCIONAL"
        )}
    ` : '';

    const preSectionHtml = (finding.pre_pago > 0) ? `
        ${compRow(
            `Assistência Pré-Escolar`,
            finding.pre_pago,
            finding.pre_esperado,
            finding.pre_status,
            "fa-solid fa-child",
            notePre,
            finding.pre_status === "PROPORCIONAL"
        )}
    ` : '';

    const abonoSectionHtml = (APP_CONFIG.features.auditAbono && finding.abono_pago > 0) ? `
        ${compRow(
            `Abono de Permanência`,
            finding.abono_pago,
            finding.abono_esperado,
            finding.abono_status,
            "fa-solid fa-award",
            noteAbono,
            true
        )}
    ` : '';

    const compulsoriaSectionHtml = (finding.has_compulsoria_error || finding.has_compulsoria_atencao) ? `
        <div class="audit-card ${finding.has_compulsoria_error ? 'audit-card--divergent' : 'audit-card--proportional'}">
            <div class="audit-card__header">
                <span class="audit-card__title">
                    <i class="fa-solid fa-cake-candles audit-card__icon"></i>
                    Aposentadoria Compulsória (75 Anos — EC nº 88/2015)
                </span>
                <span class="audit-card__badge-status ${finding.has_compulsoria_error ? 'audit-card__badge-status--divergent' : 'audit-card__badge-status--proportional'}">
                    ${finding.has_compulsoria_error ? 'Divergente' : 'Atenção'}
                </span>
            </div>
            <div class="audit-card__values">
                <span>Idade na Competência: <strong>${finding.idade_calculada} anos</strong></span>
                <span>Limite Constitucional: <strong>75 anos</strong></span>
            </div>
            <div class="audit-card__note ${finding.has_compulsoria_error ? 'audit-card__note--divergent' : 'audit-card__note--warning'}">
                <strong>Nota Técnica:</strong> ${noteCompulsoria}
            </div>
        </div>
    ` : '';

    const reconciliaHtml = `
        ${compulsoriaSectionHtml}
        ${compRow("Vencimento Básico", finding.venc_pago, finding.venc_esperado, vencStatusType, "fa-solid fa-money-bill-wave", noteVenc, !!finding.venc_prop_info)}
        ${compRow("Gratificação Judiciária (GAJ)", finding.gaj_paga, finding.gaj_esperada, gajStatusType, "fa-solid fa-coins", noteGaj, !!finding.venc_prop_info)}
        ${compRow("Gratificação de Segurança (GAS)", finding.gas_paga, finding.gas_esperada, isGasConforming, "fa-solid fa-shield-halved", noteGas)}
        ${fccjSectionHtml}
        ${substSectionHtml}
        ${compRow("Adicional de Qualificação — Titulação", finding.aq_tit_pago, finding.aq_tit_esperado, finding.aq_tit_status, "fa-solid fa-graduation-cap", noteAqTit, finding.aq_tit_status === "PROPORCIONAL")}
        ${compRow("Adicional de Qualificação — Treinamento", finding.aq_trein_pago, finding.aq_trein_esperado, finding.aq_trein_status, "fa-solid fa-certificate", noteAqTrein, finding.aq_trein_status === "PROPORCIONAL")}
        ${alimSectionHtml}
        ${preSectionHtml}
        ${abonoSectionHtml}
        ${compRow("Teto Constitucional Ordinário", finding.soma_ordinaria, TETO_CONSTITUCIONAL_STF, isTetoOrdConforming, "fa-solid fa-gavel", noteTetoOrd, true)}
        ${compRow("Limite de Horas Extras (TSE)", finding.soma_he, LIMITE_HORAS_EXTRAS_TSE, isHeConforming, "fa-solid fa-clock", noteHe)}
    `;

    const tableReferenceBadge = AppState.isIncompatibleCompetence 
        ? `<span class="badge badge--warning"><i class="fa-solid fa-triangle-exclamation"></i> Tabela Espelho Jan/2026</span>`
        : `<span class="badge badge--neutral"><i class="fa-solid fa-scale-balanced" style="color: var(--primary);"></i> ${activeConfig.label}</span>`;

    let footerValueColor = "var(--color-start)";
    if (finding.desvio !== 0) {
        footerValueColor = (finding.status === "ATENCAO" || finding.status === "PROPORCIONAL") ? "var(--color-warning)" : "var(--color-conclusion)";
    }

    const nascFormatada = server.data_nascimento || "Não Informada";
    const idadeVal = (finding.idade_calculada !== undefined && finding.idade_calculada !== null) 
        ? finding.idade_calculada 
        : (server.idade_calculada !== undefined && server.idade_calculada !== null ? server.idade_calculada : null);
    const idadeTexto = idadeVal !== null ? `${idadeVal} anos` : "Idade não apurada";

    Swal.fire({
        width: '840px',
        showConfirmButton: true,
        confirmButtonText: 'Fechar Diagnóstico',
        confirmButtonColor: 'var(--primary)',
        background: 'var(--surface)',
        color: 'var(--text)',
        html: `
            <div class="audit-modal">
                
                <div class="audit-modal__header">
                    <div class="audit-modal__header-row">
                        <div class="audit-modal__identity">
                            <div class="audit-modal__title-row">
                                <h3 class="audit-modal__title">
                                    Matrícula: <span>${server.id}</span>
                                </h3>
                                <button class="btn btn--secondary btn--compact" id="btn-toggle-privacy-detail" aria-label="Alternar dados pessoais">
                                    <i class="fa-solid fa-eye" id="privacy-eye-icon"></i>
                                    <span id="privacy-btn-text">Revelar Dados Pessoais</span>
                                </button>
                            </div>

                            <div class="audit-modal__privacy-box" id="privacy-personal-box">
                                <span id="label-server-name">Nome: ••••••••••••••••••</span>
                                <span class="audit-modal__divider-dot">|</span><br>
                                <span id="label-server-cpf">CPF: ${maskedCpf}</span>
                                <span class="audit-modal__divider-dot">|</span>
                                <span id="label-server-nasc">Data de Nasc.: ••/••/•••• (•• anos)</span>
                            </div>

                            <p class="audit-modal__subtitle">
                                ${normalizedCareer} • Padrão ${gradeStr} ${finding.fccj_cargo ? `• <strong>${finding.fccj_cargo}</strong>` : ''}
                            </p>
                        </div>
                        <div>
                            ${statusBadgeHtml}
                        </div>
                    </div>
                </div>

                <div class="audit-modal__section">
                    <div class="audit-modal__section-header">
                        <h4 class="audit-modal__section-title">
                            1. Detalhamento de Lançamentos em Folha
                        </h4>
                        <span class="badge badge--neutral">
                            ${server.detalheRubricas.length} rubricas registradas
                        </span>
                    </div>
                    <div class="audit-modal__rubrics-box" id="modal-rubrics-container">
                        ${rubricsHtml}
                    </div>
                </div>

                <div class="audit-modal__section">
                    <div class="audit-modal__section-header">
                        <h4 class="audit-modal__section-title">
                            2. Conciliação contra Tabelas e Limites Legais
                        </h4>
                        ${tableReferenceBadge}
                    </div>
                    <div>
                        ${reconciliaHtml}
                    </div>
                </div>

                <div class="audit-modal__footer">
                    <div>
                        <span class="audit-modal__footer-label">
                            ${(finding.status === "ATENCAO" || finding.status === "PROPORCIONAL") ? 'Materialidade sob Exame (Valores Proporcionais / Transição)' : 'Saldo do Desvio Potencial Consolidado'}
                        </span>
                        <span class="audit-modal__footer-sub">
                            ${(finding.status === "ATENCAO" || finding.status === "PROPORCIONAL") ? 'Montante sujeito à ratificação formal mediante conferência de ato no SEI ou registro de frequência' : 'Fundamentação: Art. 37, XI e Art. 40 da CF/88, Lei nº 11.416/2006, Res. CNJ nº 14/2006 e Regulamentos do TSE'}
                        </span>
                    </div>
                    <strong class="audit-modal__footer-value" style="color: ${footerValueColor};">R$ ${formatMoeda(finding.desvio)}</strong>
                </div>
            </div>
        `,
        didOpen: () => {
            let isRevealed = false;
            const privacyBtn = document.getElementById("btn-toggle-privacy-detail");
            const eyeIcon = document.getElementById("privacy-eye-icon");
            const btnText = document.getElementById("privacy-btn-text");
            const nameLabel = document.getElementById("label-server-name");
            const cpfLabel = document.getElementById("label-server-cpf");
            const nascLabel = document.getElementById("label-server-nasc");

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
                        if (nascLabel) {
                            nascLabel.textContent = `Data de Nasc.: ${nascFormatada} (${idadeTexto})`;
                            nascLabel.style.color = "var(--text)";
                        }
                    } else {
                        eyeIcon.className = "fa-solid fa-eye";
                        btnText.textContent = "Revelar Dados Pessoais";
                        nameLabel.textContent = "Nome: ••••••••••••••••••";
                        nameLabel.style.color = "var(--text3)";
                        cpfLabel.textContent = `CPF: ${maskedCpf}`;
                        cpfLabel.style.color = "var(--text3)";
                        if (nascLabel) {
                            nascLabel.textContent = "Data de Nasc.: ••/••/•••• (•• anos)";
                            nascLabel.style.color = "var(--text3)";
                        }
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
                <button class="btn btn--secondary btn--compact table-pagination__btn" id="btn-page-first" ${AppState.currentPage === 1 ? 'disabled style="opacity: 0.5; cursor: default;"' : ''} aria-label="Primeira Página">
                    <i class="fa-solid fa-angles-left"></i>
                </button>
                <button class="btn btn--secondary btn--compact table-pagination__btn" id="btn-page-prev" ${AppState.currentPage === 1 ? 'disabled style="opacity: 0.5; cursor: default;"' : ''} aria-label="Página Anterior">
                    <i class="fa-solid fa-angle-left"></i>
                </button>
                <span class="table-pagination__indicator">Página <strong>${AppState.currentPage}</strong> de ${totalPages}</span>
                <button class="btn btn--secondary btn--compact table-pagination__btn" id="btn-page-next" ${AppState.currentPage === totalPages ? 'disabled style="opacity: 0.5; cursor: default;"' : ''} aria-label="Próxima Página">
                    <i class="fa-solid fa-angle-right"></i>
                </button>
                <button class="btn btn--secondary btn--compact table-pagination__btn" id="btn-page-last" ${AppState.currentPage === totalPages ? 'disabled style="opacity: 0.5; cursor: default;"' : ''} aria-label="Última Página">
                    <i class="fa-solid fa-angles-right"></i>
                </button>
            </div>
            <div class="table-pagination__size">
                <select class="table-pagination__select" id="select-page-size" aria-label="Registros por página">
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
            "Data de Nascimento": item.data_nascimento || "Não informada",
            "Idade na Competência": item.idade_calculada !== null ? item.idade_calculada : "N/A",
            "Carreira": item.carreira,
            "Enquadramento Mapeado": item.classe !== "N/A" ? `${item.classe}-${item.padrao}` : "Incompatível",
            "Cargo em Comissão / FC": item.fccj_cargo || "Não possui",
            "Status FC/CJ": item.fccj_status,
            "Dias Exercício FC/CJ": item.fccj_dias,
            "Substituição de Função (R$)": item.subst_paga,
            "Status Substituição": item.subst_status,
            "Auxílio-Alimentação Pago (R$)": item.alim_pago,
            "Status Alimentação": item.alim_status,
            "Assistência Pré-Escolar Paga (R$)": item.pre_pago,
            "Status Pré-Escolar": item.pre_status,
            "Abono de Permanência Pago (R$)": item.abono_pago,
            "Status Abono": item.abono_status,
            "Remuneração Ordinária (R$)": item.soma_ordinaria,
            "Horas Extras no Mês (R$)": item.soma_he,
            "Outras Verbas e Indenizações (R$)": item.soma_outras,
            "Total Descontos (R$)": item.soma_descontos,
            "Vencimento Esperado (R$)": item.venc_esperado,
            "Vencimento Pago (R$)": item.venc_pago,
            "GAJ Esperada (R$)": item.gaj_esperada,
            "GAJ Paga (R$)": item.gaj_paga,
            "GAS Esperada (R$)": item.gas_esperada,
            "GAS Paga (R$)": item.gas_paga,
            "AQ Titulação Esperado (R$)": item.aq_tit_esperado,
            "AQ Titulação Pago (R$)": item.aq_tit_pago,
            "Status AQ Titulação": item.aq_tit_status,
            "AQ Treinamento Esperado (R$)": item.aq_trein_esperado,
            "AQ Treinamento Pago (R$)": item.aq_trein_pago,
            "Status AQ Treinamento": item.aq_trein_status,
            "Excesso de Teto Ordinário (R$)": item.excesso_teto_ordinario,
            "Excesso Limite Horas Extras (R$)": item.excesso_he,
            "Resultado do Diagnóstico": item.detalhe ? item.detalhe.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim() : "Sem inconsistências",
            "Desvio Potencial Geral (R$)": item.desvio
        }));

        const worksheet = XLSX.utils.json_to_sheet(exportData);
        const workbook = XLSX.utils.book_new();
        XLSX.book_append_sheet(workbook, worksheet, "Resultado_Auditoria");
        
        XLSX.writeFile(workbook, "Relatorio_Diagnostico_Auditado_Folha_Ativos.xlsx");
    } catch (err) {
        Swal.fire("Erro ao Exportar", "Falha local ao converter os dados estruturados para XLSX.", "error");
    }
}

function formatCompetenceHeader(compStr) {
    if (!compStr || compStr === "N/A") return `Folha Salarial — <span style="color: var(--primary); font-weight: 800;">TSE</span>`;
    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    const parts = compStr.split("/");
    if (parts.length === 2) {
        const m = parseInt(parts[0], 10);
        const y = parts[1];
        if (m >= 1 && m <= 12) {
            return `Folha de <span style="color: var(--primary); font-weight: 800;">${months[m - 1]} de ${y}</span>`;
        }
    }
    return `Folha de <span style="color: var(--primary); font-weight: 800;">${compStr}</span>`;
}

function initProcessControl() {
    const triggerBtn = document.getElementById("btn-trigger-direct-audit");
    const searchInput = document.getElementById("table-search-input");
    const exportBtn = document.getElementById("btn-export-final-xlsx");

    if (triggerBtn) {
        triggerBtn.addEventListener("click", () => {
            const hBrandBox = document.getElementById("header-brand-box");
            const hActiveBox = document.getElementById("header-active-box");
            const btnReset = document.getElementById("btn-reset-process");
            const activeFlowTitle = document.getElementById("active-flow-title");

            if (hBrandBox) hBrandBox.style.display = "none";
            if (hActiveBox) hActiveBox.style.display = "flex";
            if (btnReset) btnReset.style.display = "inline-flex";
            if (activeFlowTitle) activeFlowTitle.innerHTML = formatCompetenceHeader(AppState.matchedCompetence);
            
            runDeterministicAudit();
        });
    }

    const statusFilterSelect = document.getElementById("select-status-filter");
    if (statusFilterSelect) {
        statusFilterSelect.addEventListener("change", (e) => {
            AppState.activeFilter = e.target.value;
            AppState.currentPage = 1;
            filterAndPaginateFindings();
        });
    }

    const alertTypeSelect = document.getElementById("select-alert-type");
    if (alertTypeSelect) {
        alertTypeSelect.addEventListener("change", (e) => {
            AppState.alertTypeFilter = e.target.value;
            if (e.target.value !== "all" && AppState.activeFilter === "all") {
                AppState.activeFilter = "alerts";
                if (statusFilterSelect) statusFilterSelect.value = "alerts";
            }
            AppState.currentPage = 1;
            filterAndPaginateFindings();
        });
    }

    if (searchInput) {
        const handleSearchDebounced = debounce((e) => {
            AppState.searchQuery = e.target.value;
            AppState.currentPage = 1;
            filterAndPaginateFindings();
        }, 250);

        searchInput.addEventListener("input", handleSearchDebounced);
    }

    document.querySelectorAll(".sortable-th").forEach(th => {
        th.addEventListener("click", () => {
            const field = th.getAttribute("data-sort");
            if (AppState.sortField === field) {
                AppState.sortDirection = AppState.sortDirection === "asc" ? "desc" : "asc";
            } else {
                AppState.sortField = field;
                AppState.sortDirection = "asc";
            }
            filterAndPaginateFindings();
        });
    });

    if (exportBtn) {
        exportBtn.addEventListener("click", (e) => {
            if (!APP_CONFIG.features.exportXlsx) {
                e.preventDefault();
                return;
            }
            exportAuditToXLSX();
        });
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
                AppState.activeFilter = "alerts";
                AppState.alertTypeFilter = "all";
                AppState.searchQuery = "";
                AppState.sortField = "id";
                AppState.sortDirection = "asc";
                
                if (AppState.chartInstance) {
                    AppState.chartInstance.destroy();
                    AppState.chartInstance = null;
                }

                const hActiveBox = document.getElementById("header-active-box");
                const hBrandBox = document.getElementById("header-brand-box");
                const fInput = document.getElementById("file-input-raw");
                const uPreviewPanel = document.getElementById("upload-preview-panel");
                const dashboardTitle = document.getElementById("view-dashboard-title");
                const dashboardSubtitle = document.querySelector("#view-dashboard .section-subtitle");
                const searchInput = document.getElementById("table-search-input");

                if (hActiveBox) hActiveBox.style.display = "none";
                if (resetBtn) resetBtn.style.display = "none";
                if (hBrandBox) hBrandBox.style.display = "block";

                if (dashboardTitle) dashboardTitle.textContent = "Carregar Folha Salarial";
                if (dashboardSubtitle) dashboardSubtitle.textContent = "Selecione o arquivo de folha de pagamento (.xlsx ou .txt)";

                const sFilterSelect = document.getElementById("select-status-filter");
                if (sFilterSelect) sFilterSelect.value = "alerts";

                const aTypeSelect = document.getElementById("select-alert-type");
                if (aTypeSelect) aTypeSelect.value = "all";

                if (searchInput) searchInput.value = "";
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

                const previewServersAudited = document.getElementById("preview-servers-audited");
                const previewServersNonAudited = document.getElementById("preview-servers-nonaudited");
                const previewRubricsAudited = document.getElementById("preview-rubrics-audited");
                const previewRubricsNonAudited = document.getElementById("preview-rubrics-nonaudited");

                if (previewServersAudited) previewServersAudited.textContent = "0";
                if (previewServersNonAudited) previewServersNonAudited.textContent = "0";
                if (previewRubricsAudited) previewRubricsAudited.textContent = "0";
                if (previewRubricsNonAudited) previewRubricsNonAudited.textContent = "0";

                const kpiTotalRubricsAll = document.getElementById("kpi-total-rubrics-all");
                const kpiAuditedRubrics = document.getElementById("kpi-audited-rubrics");
                const kpiNonAuditedRubrics = document.getElementById("kpi-nonaudited-rubrics");
                const kpiTotalServersRaw = document.getElementById("kpi-total-servers-raw");
                const kpiCountActive = document.getElementById("kpi-count-active");
                const kpiCountAfastados = document.getElementById("kpi-count-afastados");
                const kpiCountInactive = document.getElementById("kpi-count-inactive");
                const kpiCountOthers = document.getElementById("kpi-count-others");
                const kpiConformingRubrics = document.getElementById("kpi-conforming-rubrics");
                const kpiProportionalRubrics = document.getElementById("kpi-proportional-rubrics");
                const kpiDiscrepantRubrics = document.getElementById("kpi-discrepant-rubrics");

                if (kpiTotalRubricsAll) kpiTotalRubricsAll.textContent = "0";
                if (kpiAuditedRubrics) kpiAuditedRubrics.textContent = "0";
                if (kpiNonAuditedRubrics) kpiNonAuditedRubrics.textContent = "0";
                if (kpiTotalServersRaw) kpiTotalServersRaw.textContent = "0";
                if (kpiCountActive) kpiCountActive.textContent = "0";
                if (kpiCountAfastados) kpiCountAfastados.textContent = "0";
                if (kpiCountInactive) kpiCountInactive.textContent = "0";
                if (kpiCountOthers) kpiCountOthers.textContent = "0";
                if (kpiConformingRubrics) kpiConformingRubrics.textContent = "0";
                if (kpiProportionalRubrics) kpiProportionalRubrics.textContent = "0";
                if (kpiDiscrepantRubrics) kpiDiscrepantRubrics.textContent = "0";

                const kpiTotalGrossIncome = document.getElementById("kpi-total-gross-income");
                const kpiAuditedMoney = document.getElementById("kpi-audited-money");
                const kpiNonAuditedMoney = document.getElementById("kpi-nonaudited-money");
                const kpiConformingAmount = document.getElementById("kpi-conforming-amount");
                const kpiProportionalAmount = document.getElementById("kpi-proportional-amount");
                const kpiDiscrepantAmount = document.getElementById("kpi-discrepant-amount");

                if (kpiTotalGrossIncome) kpiTotalGrossIncome.textContent = "R$ 0,00";
                if (kpiAuditedMoney) kpiAuditedMoney.textContent = "R$ 0,00";
                if (kpiNonAuditedMoney) kpiNonAuditedMoney.textContent = "R$ 0,00";
                if (kpiConformingAmount) kpiConformingAmount.textContent = "R$ 0,00";
                if (kpiProportionalAmount) kpiProportionalAmount.textContent = "R$ 0,00";
                if (kpiDiscrepantAmount) kpiDiscrepantAmount.textContent = "R$ 0,00";

                switchView("tab-dashboard");
                Swal.fire("Resetado", "Sandbox reiniciada em memória com sucesso.", "success");
            }
        });
    });
}