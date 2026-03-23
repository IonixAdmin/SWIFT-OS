# Frente 01 — Esteira de Producao de IA

> Intake → Priorizacao → Experimentacao → Validacao → Escalacao

## Fase 1 — Setup (90 dias)

| ID | Atividade | Status | Inicio | Prazo | Responsavel | Dependencia |
|----|-----------|--------|--------|-------|-------------|-------------|
| F1-A01 | Definir framework de intake (formulario de hipoteses) | `[ ]` | 2026-03-24 | 2026-04-07 | VIN | — |
| F1-A02 | Criar matriz de priorizacao (impacto x viabilidade x urgencia) | `[ ]` | 2026-03-24 | 2026-04-07 | VIN | — |
| F1-A03 | Configurar ferramenta de gestao do pipeline (board kanban) | `[ ]` | 2026-04-08 | 2026-04-18 | VIN, SQD | F1-A01 |
| F1-A04 | Definir templates de documentacao por etapa | `[ ]` | 2026-04-08 | 2026-04-18 | VIN | F1-A01 |
| F1-A05 | Estabelecer criterios de go/no-go entre etapas | `[ ]` | 2026-04-14 | 2026-04-25 | VIN, CIO | F1-A02 |
| F1-A06 | Primeiro ciclo de intake (coletar hipoteses das areas) | `[ ]` | 2026-04-21 | 2026-05-02 | SQD, VIN | F1-A03 |
| F1-A07 | Primeira reuniao de priorizacao com Comite | `[ ]` | 2026-05-05 | 2026-05-05 | COM, VIN | F1-A06 |
| F1-A08 | Iniciar experimentacao das 3 primeiras hipoteses | `[ ]` | 2026-05-06 | 2026-05-30 | SQD, DBA | F1-A07 |
| F1-A09 | Construir dashboard de acompanhamento em tempo real | `[ ]` | 2026-04-21 | 2026-05-09 | VIN | F1-A03 |
| F1-A10 | Validacao do MVP da esteira (retrospectiva do 1o ciclo) | `[ ]` | 2026-06-01 | 2026-06-13 | VIN, CIO, COM | F1-A08 |

## Fase 2A — Consolidacao (meses 4-6)

| ID | Atividade | Status | Inicio | Prazo | Responsavel | Dependencia |
|----|-----------|--------|--------|-------|-------------|-------------|
| F1-A11 | Refinar processo com base na retrospectiva | `[ ]` | 2026-06-16 | 2026-06-27 | VIN, SQD | F1-A10 |
| F1-A12 | Integrar pipeline com Artefact Lab (handoff de hipoteses complexas) | `[ ]` | 2026-06-16 | 2026-07-10 | VIN, ART | F1-A10 |
| F1-A13 | Automatizar notificacoes e status updates | `[ ]` | 2026-07-01 | 2026-07-18 | SQD | F1-A09 |
| F1-A14 | 2o ciclo completo da esteira (5+ hipoteses) | `[ ]` | 2026-07-01 | 2026-08-15 | SQD, DBA | F1-A11 |
| F1-A15 | Criar repositorio de conhecimento (casos, aprendizados) | `[ ]` | 2026-07-14 | 2026-08-01 | SQD, VIN | F1-A14 |

## Fase 2B — Escala (meses 7-9)

| ID | Atividade | Status | Inicio | Prazo | Responsavel | Dependencia |
|----|-----------|--------|--------|-------|-------------|-------------|
| F1-A16 | Squad assume gestao autonoma do pipeline | `[ ]` | 2026-09-01 | 2026-09-15 | SQD | F1-A14 |
| F1-A17 | IONIX em papel de mentoria (reducao para 50% presenca) | `[ ]` | 2026-09-15 | 2026-11-30 | VIN | F1-A16 |
| F1-A18 | 3o ciclo — 10+ hipoteses com autonomia da squad | `[ ]` | 2026-09-15 | 2026-11-15 | SQD | F1-A16 |
| F1-A19 | Showcase trimestral para Board | `[ ]` | 2026-11-20 | 2026-11-20 | SQD, CIO | F1-A18 |

## Fase 2C — Autonomia (meses 10-12)

| ID | Atividade | Status | Inicio | Prazo | Responsavel | Dependencia |
|----|-----------|--------|--------|-------|-------------|-------------|
| F1-A20 | Squad opera com 95% autonomia | `[ ]` | 2026-12-01 | 2027-02-28 | SQD | F1-A18 |
| F1-A21 | IONIX apenas advisory mensal | `[ ]` | 2026-12-01 | 2027-02-28 | VIN | F1-A20 |
| F1-A22 | Retrospectiva anual e planejamento ano 2 | `[ ]` | 2027-02-15 | 2027-02-28 | VIN, CIO, COM | F1-A20 |

## Metricas de Sucesso

| Metrica | Meta Fase 1 | Meta Ano 1 |
|---------|-------------|------------|
| Hipoteses no pipeline | 10+ | 50+ |
| Ciclo medio intake→validacao | < 30 dias | < 21 dias |
| Taxa de aprovacao go/no-go | > 60% | > 70% |
| Hipoteses escaladas | 1-2 | 8-10 |
