# Dashboard Consolidado — SWIFT OS

> Ultima atualizacao: 2026-03-23

## Visao Geral por Frente

| # | Frente | Total Ativ. | Concluidas | Em Andamento | Bloqueadas | % Progresso |
|---|--------|-------------|------------|--------------|------------|-------------|
| F1 | Esteira de Producao de IA | 22 | 0 | 0 | 0 | 0% |
| F2 | Squad Interna | 18 | 0 | 0 | 0 | 0% |
| F3 | Pod Volante | 19 | 0 | 0 | 0 | 0% |
| F4 | Pesquisa e Diagnostico | 22 | 2 | 1 | 0 | 9% |
| F5 | Capacitacao e Vibe Coding | 18 | 0 | 0 | 0 | 0% |
| F6 | Governanca Estrategica | 18 | 0 | 1 | 0 | 3% |
| **TOTAL** | | **117** | **2** | **2** | **0** | **2%** |

## Proximos Marcos (Milestones)

| Data | Marco | Frente | Status |
|------|-------|--------|--------|
| 2026-04-04 | Charter do Comite de IA definido | F6 | `[ ]` |
| 2026-04-07 | Framework de intake e priorizacao prontos | F1 | `[ ]` |
| 2026-04-18 | Selecao de membros da squad concluida | F2 | `[ ]` |
| 2026-04-25 | Periodo de coleta quanti encerrado | F4 | `[ ]` |
| 2026-05-05 | Primeira priorizacao com Comite | F1, F6 | `[ ]` |
| 2026-05-20 | Workshop Intensivo de Vibe Coding realizado | F5 | `[ ]` |
| 2026-05-26 | Resultados pesquisa quanti apresentados ao Comite | F4 | `[ ]` |
| 2026-06-13 | MVP da esteira validado (retrospectiva 1o ciclo) | F1 | `[ ]` |
| 2026-06-20 | Relatorio integrado de diagnostico entregue | F4 | `[ ]` |
| 2026-06-23 | Apresentacao ao Board — 90 dias | F6 | `[ ]` |
| 2026-07-01 | Showcase quick wins Pod Volante | F3 | `[ ]` |
| 2026-09-22 | Apresentacao ao Board — semestral | F6 | `[ ]` |
| 2027-02-22 | Apresentacao ao Board — balanco anual | F6 | `[ ]` |

## Grafo de Dependencias Criticas

```
F4 (Pesquisa)
  └─> F2-A05 (diagnostico individual squad)
  └─> F5-A01 (selecao multiplicadores)
  └─> F6-A14 (material para Board)

F1 (Esteira)
  └─> F3-A04 (priorizacao hipoteses Pod)
  └─> F2-A08 (squad participa do 1o ciclo)

F2 (Squad)
  └─> F3-A16 (squad assume experimentacoes)
  └─> F5-A08+ (squad instrui turmas Germinare)

F6 (Governanca)
  └─> F1-A07 (reuniao priorizacao)
  └─> F3-A04 (priorizacao hipoteses)
```

## Carga por Responsavel (proximas 4 semanas)

| Responsavel | Atividades Ativas | Proxima Entrega |
|-------------|-------------------|-----------------|
| VIN | F1-A01, F1-A02, F2-A01, F3-A01, F4-A02, F6-A01, F6-A02, F6-A03 | 2026-04-04 |
| CIO | F2-A01, F3-A02, F4-A02, F6-A01 | 2026-04-04 |
| DBA | F3-A01, F3-A03 | 2026-04-04 |
| OLI | F6-A03 | 2026-04-04 |
| GER | F4-A04 | 2026-04-04 |
| COM | — | 2026-04-21 (1a reuniao Comite) |

## Riscos e Atencoes

| Risco | Impacto | Mitigacao | Frente |
|-------|---------|-----------|--------|
| Baixa adesao a pesquisa quanti (<70%) | Diagnostico incompleto, decisoes sem base | Engajamento via CIO + Germinare, comunicacao interna | F4 |
| Atraso na formacao do Comite | Bloqueia priorizacao e governanca | Escalar com CIO, simplificar charter inicial | F6 |
| Dificuldade em selecionar membros da squad | Atrasa toda Frente 2 | Pool maior de candidatos, perfil minimo flexivel | F2 |
| Falsa maturidade digital (81% Gen Y+Z) | Expectativas desalinhadas | Diagnostico real via pesquisa, trilhas diferenciadas | F4, F5 |
| Turnover de analistas (media 5 anos) | Perda de conhecimento | Documentacao rigorosa, processo > pessoa | F1, F2 |

## Como Atualizar

1. Editar o arquivo da frente correspondente (`01-esteira-producao-ia.md`, etc.)
2. Alterar o status da atividade: `[ ]` → `[~]` → `[x]`
3. Atualizar este dashboard com os novos totais
4. Commitar com mensagem descritiva: `gestao: atualiza status F{X}-A{YY}`
