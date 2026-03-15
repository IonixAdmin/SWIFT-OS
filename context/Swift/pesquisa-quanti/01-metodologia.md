# Metodologia — Pesquisa de Maturidade em IA da Swift

## Classificacao da pesquisa

| Aspecto | Definicao |
|---|---|
| **Tipo** | Levantamento descritivo transversal (cross-sectional survey) com componente relacional |
| **Abordagem** | Quantitativa com componente qualitativo exploratoria (perguntas abertas) |
| **Populacao** | Censo (N=198, populacao inteira da Swift) |
| **Instrumento** | Questionario auto-administrado online (Google Forms / Typeform) |
| **Duracao estimada** | ~20 minutos |
| **Total de perguntas** | 57 (Q1-Q57), sendo 42-46 por respondente (depende do cluster) |
| **Fundamentacao** | Matriz de Letramento em IA (5 dimensoes x 4 niveis) — programa Swift x IONIX |
| **Revisao metodologica** | Framework Co-Researcher (Research Methodology) |

---

## Design do instrumento

### Principios aplicados

1. **Minimo 5 itens por dimensao** — garante consistencia interna robusta (Cronbach's alpha >= 0.7)
2. **Itens reversos** — 2 perguntas com formulacao negativa para controlar vies de aquiescencia (Q16, Q36)
3. **Cenarios comportamentais** — 3 perguntas situacionais que testam competencia real, nao apenas autopercepacao (Q23, Q25, Q29) — reduz Dunning-Kruger e desejabilidade social
4. **Attention check** — 1 pergunta de verificacao para identificar respostas aleatorias (Q41)
5. **Escala Likert 5 pontos totalmente rotulada** — todos os pontos nomeados, nao apenas as ancoras extremas
6. **Escala de confianca com penalizacao** — Q17 penaliza confianca excessiva (score 5→2.0)
7. **Algoritmo de scoring explicito** — regras de conversao resposta → pontuacao → nivel definidas antes da coleta
8. **Score em duas camadas** — Score Comum (comparavel entre clusters) + Score Estendido opcional (mais preciso dentro de cada cluster)

### Arquitetura em fases

| Fase | O que captura | Qtd perguntas | Tempo |
|---|---|---|---|
| **Fase 0** | Caracterizacao demografica | 5 (Q1-Q5) | ~2 min |
| **Fase 0.5** | Mapa de uso atual | 6 (Q6-Q11) | ~3 min |
| **Fase 1** | Maturidade nas 5 dimensoes + controles + multiplicador | 31 (Q12-Q42) | ~10 min |
| **Fase 2** | Bloco especifico por cluster (Execucao OU Gestao) | 4-6 (Q43-Q46 ou Q47-Q52) | ~3 min |
| **Fase 3** | Perguntas abertas (Q53 obrigatoria, Q54-Q57 opcionais) | 5 (Q53-Q57) | ~3 min |
| **Total** | | 51-52 por pessoa | ~20 min |

### Itens no scoring por dimensao

| Dimensao | Itens Score Comum | Qtd | Itens Score Estendido | Qtd total |
|---|---|---|---|---|
| **Utilizacao** | Q12 + Q13 + Q14 + Q15 + Q16(reverso) + Q17(confianca) + Q18 | 7 | + Q43 + Q44 (Execucao) | 9 (Exec) / 7 (Gestao) |
| **Dados** | Q19 + Q20 + Q21 + Q22 + Q23(cenario) | 5 | — | 5 |
| **Governanca** | Q24 + Q25(cenario) + Q26 + Q27 + Q28 + Q29(cenario) | 6 | + Q51 (Gestao) | 6 (Exec) / 7 (Gestao) |
| **Impacto no Negocio** | Q30 + Q31 + Q32 + Q33 + Q34 | 5 | + Q48 + Q49 + Q50 (Gestao) | 5 (Exec) / 8 (Gestao) |
| **Cultura** | Q35 + Q36(reverso) + Q37 + Q38 + Q39 | 5 | — | 5 |
| **Total** | | **28** | | **30 (Exec) / 32 (Gestao)** |

---

## Controles de Qualidade

| Controle | Como funciona | Acao |
|---|---|---|
| **Attention check (Q41)** | Respondente deve marcar "Concordo parcialmente" | Excluir respostas que errarem |
| **Itens reversos (Q16, Q36)** | Respostas devem ser inversamente correlacionadas com itens positivos da mesma dimensao | Sinalizar inconsistencias > 3 pontos (Q16 vs Q13, Q36 vs Q37) |
| **Tempo de preenchimento** | Plataforma registra duracao | Sinalizar respostas < 5 min |
| **Taxa de resposta minima** | Meta: 75% global, 80% Gestao | Follow-up segmentado por area |
| **Non-response bias** | Comparar perfil dos respondentes vs perfil conhecido (RH) | Se sub-representado, reportar e ponderar |
| **N minimo por subgrupo** | Resultados so para subgrupos com n >= 10 | Protege anonimato e significancia |

---

## Analise Prevista dos Resultados

1. **Heatmap por dimensao x cluster** — visao consolidada do baseline (Score Comum)
2. **Distribuicao nos 4 niveis da Matriz de Letramento** por grupo (Score Comum)
3. **Radar por cluster** — perfil de 5 dimensoes, Execucao vs Gestao sobrepostos (Score Comum)
4. **Radar por area** — heatmap area x dimensao (Score Comum, areas com n >= 10)
5. **Analise cruzada:** geracao x profundidade, tempo de casa x percepcao de impacto, area x maturidade
6. **Identificacao de early adopters** para programa Germinare — dupla validacao score calculado + Q42 (Score Estendido)
7. **Backlog qualitativo** da esteira — Q53 (obrigatoria) + Q34 (ja sugeriu ideia)
8. **Gap analysis** Execucao vs. Gestao por dimensao (Score Comum)
9. **Analise de consistencia interna** — Cronbach's alpha por dimensao (meta >= 0.7)

---

## Reaplicacao (T2 — apos 90 dias)

Para medir evolucao pos-capacitacao, manter **todos os itens do Score Comum (Q12-Q39)** identicos. Mudancas no instrumento invalidam comparacao temporal.

- **Itens obrigatorios na reaplicacao:** Q12-Q42 (bloco comum completo incluindo controle e multiplicador)
- **Itens opcionais:** Fases 0.5, 2 e 3 podem ser ajustadas

---

## Proximos passos

1. Validar pesquisa com **teste piloto** (3-5 pessoas de cada cluster)
2. No piloto, coletar **feedback qualitativo** sobre clareza e tempo real
3. Estimar **variancia dos itens Likert** — se desvio padrao < 0.5, item nao discrimina
4. Monitorar **Cronbach's alpha** — especialmente Q17 (confianca nao-monotonica) em Utilizacao
5. Definir **lista de areas/departamentos** para dropdown (obter com RH da Swift)
6. Configurar **logica de roteamento** na plataforma (cargo → cluster, Q6 → skip para Q11)
7. Comunicar pesquisa com apoio do **CIO + Comite de IA** para maximizar taxa de resposta
8. Apos coleta, aplicar **algoritmo de scoring** (ver 04-algoritmo-de-scoring.md)
9. Gerar **relatorio executivo** (Score Comum) + **relatorio operacional** (Score Estendido)
10. Usar baseline para medir evolucao apos 90 dias

---

## Documentos relacionados

| Arquivo | Conteudo |
|---|---|
| 02-pesquisa-completa.md | Questionario pronto (Q1-Q57) |
| 04-algoritmo-de-scoring.md | Conversoes, composicao por dimensao, faixas de corte, early adopters, agregacoes |
| 01-hipoteses-csd.md | Matriz CSD — fundamentacao das hipoteses |
| 03-cross-check-perguntas-csd-matriz.md | Mapeamento bidirecional perguntas ↔ CSD ↔ Matriz |

---

*Documento parte do programa de Transformacao IA Escalavel — Swift x Ionix*
*Revisao metodologica aplicada com framework Co-Researcher (Research Methodology)*
