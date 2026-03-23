# Frente 03 — Pod Volante (Experimentacao Agil)

> 1 DBA IONIX + 1 Swift rotativo + 0.5 FTE suporte
> Tripla funcao: quick wins + disseminacao cultural + alimentar pipeline

## Fase 1 — Ativacao (90 dias)

| ID | Atividade | Status | Inicio | Prazo | Responsavel | Dependencia |
|----|-----------|--------|--------|-------|-------------|-------------|
| F3-A01 | Definir modelo operacional do Pod (rituais, SLAs, entregaveis) | `[ ]` | 2026-03-24 | 2026-04-04 | VIN, DBA | — |
| F3-A02 | Selecionar 1o colaborador rotativo Swift | `[ ]` | 2026-04-07 | 2026-04-14 | CIO, VIN | F3-A01 |
| F3-A03 | Mapear quick wins candidatos (entrevistas com areas) | `[ ]` | 2026-04-07 | 2026-04-18 | DBA, VIN | F3-A01 |
| F3-A04 | Priorizar 3 hipoteses para experimentacao | `[ ]` | 2026-04-21 | 2026-04-25 | VIN, COM | F3-A03, F1-A02 |
| F3-A05 | Sprint 1 — Hipotese #1 (prototipo funcional) | `[ ]` | 2026-04-28 | 2026-05-16 | DBA, ROT | F3-A04 |
| F3-A06 | Sprint 2 — Hipotese #2 (prototipo funcional) | `[ ]` | 2026-05-19 | 2026-06-06 | DBA, ROT | F3-A05 |
| F3-A07 | Sprint 3 — Hipotese #3 (prototipo funcional) | `[ ]` | 2026-06-09 | 2026-06-27 | DBA, ROT | F3-A06 |
| F3-A08 | Validacao com usuarios finais das 3 hipoteses | `[ ]` | 2026-05-18 | 2026-06-30 | DBA, ROT, SQD | F3-A05 |
| F3-A09 | Documentar aprendizados e alimentar repositorio | `[ ]` | 2026-06-23 | 2026-06-30 | DBA | F3-A08 |
| F3-A10 | Showcase Fase 1 — apresentar quick wins ao Comite | `[ ]` | 2026-07-01 | 2026-07-01 | DBA, VIN | F3-A09 |

## Fase 2A — Expansao (meses 4-6)

| ID | Atividade | Status | Inicio | Prazo | Responsavel | Dependencia |
|----|-----------|--------|--------|-------|-------------|-------------|
| F3-A11 | Rotacionar 2o colaborador Swift | `[ ]` | 2026-07-07 | 2026-07-11 | CIO | F3-A10 |
| F3-A12 | Definir proximo backlog de hipoteses (5+) | `[ ]` | 2026-07-07 | 2026-07-18 | VIN, COM | F3-A10 |
| F3-A13 | Sprints 4-6 com squad apoiando execucao | `[ ]` | 2026-07-21 | 2026-09-12 | DBA, ROT, SQD | F3-A12 |
| F3-A14 | Escalar 1-2 quick wins validados para producao | `[ ]` | 2026-08-01 | 2026-09-15 | SQD, ART | F3-A08 |
| F3-A15 | Showcase trimestral — resultados e ROI | `[ ]` | 2026-09-15 | 2026-09-15 | DBA, VIN | F3-A13 |

## Fase 2B-C — Transferencia (meses 7-12)

| ID | Atividade | Status | Inicio | Prazo | Responsavel | Dependencia |
|----|-----------|--------|--------|-------|-------------|-------------|
| F3-A16 | Squad interna assume lideranca das experimentacoes | `[ ]` | 2026-10-01 | 2026-10-15 | SQD | F2-A14, F3-A13 |
| F3-A17 | Pod Volante migra para papel de suporte tecnico | `[ ]` | 2026-10-15 | 2026-12-31 | DBA | F3-A16 |
| F3-A18 | Rotacionar 3o e 4o colaboradores (ampliar disseminacao) | `[ ]` | 2026-10-01 | 2027-01-31 | CIO | F3-A16 |
| F3-A19 | Balanco anual — hipoteses testadas, escaladas, ROI total | `[ ]` | 2027-02-15 | 2027-02-28 | VIN, DBA | F3-A18 |

## Metricas de Sucesso

| Metrica | Meta Fase 1 | Meta Ano 1 |
|---------|-------------|------------|
| Hipoteses testadas | 3 | 15+ |
| Quick wins entregues | 1-2 | 6-8 |
| Colaboradores rotacionados | 1 | 4+ |
| Areas impactadas | 2+ | 5+ |
| Tempo medio prototipo | < 3 semanas | < 2 semanas |
