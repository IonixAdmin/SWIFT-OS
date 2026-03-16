# Cross-Check — Perguntas x CSD x Matriz de Letramento

> Mapeamento completo e bidirecional entre as 61 perguntas (Q1-Q61), hipoteses CSD (S1-S17, D1-D8) e Matriz de Letramento (5 dimensoes x 4 niveis).
> Inclui composicao detalhada do scoring (Score Comum + Score Estendido).

---

## 1. Mapeamento completo: Cada pergunta → CSD → Matriz → Scoring

### Fase 0 — Caracterizacao Demografica (Q1-Q5)

| # | Descricao | CSD que valida | Dimensao da Matriz | Nivel que discrimina | Scoring |
|---|---|---|---|---|---|
| Q1 | Identificador anonimo | — | — | — | Nenhum (infra) |
| Q2 | Area/departamento | D1, D3 | Transversal | — | Nenhum (segmentacao) |
| Q3 | Cargo atual | Todas | Transversal | — | Nenhum (roteador Execucao/Gestao) |
| Q4 | Faixa etaria | S4 | Utilizacao (cruzamento) | — | Nenhum (segmentacao) |
| Q5 | Tempo de empresa | C3 | Impacto (cruzamento) | — | Nenhum (segmentacao) |

> **Nota:** Fase 0 nao gera scores. Sao variaveis de segmentacao e cruzamento.

---

### Fase 0.5 — Mapa de Uso Atual (Q6-Q11)

| # | Descricao | CSD que valida | Dimensao da Matriz | Nivel que discrimina | Scoring |
|---|---|---|---|---|---|
| Q6 | Ja usou IA? (Sim/Nao) | S1 | Utilizacao | 1 vs 2 (nao usa → uso pontual) | Nenhum (roteador: se Nao → pula para Q11) |
| Q7 | Quais ferramentas usou (multipla escolha) | S1, C6 | Utilizacao | 1→2 (amplitude) | Nenhum (descritivo) |
| Q8 | Frequencia de uso | S1, S11 | Utilizacao | 2→3 (pontual → regular) | Nenhum (descritivo, alimenta perfil early adopter) |
| Q9 | Tipos de tarefa (multipla escolha) | S1, S4 | Utilizacao | 2→3 (simples → complexos) | Nenhum (descritivo) |
| Q10 | Como comecou a usar IA | S2 | Cultura | 1→2 (origem da adocao) | Nenhum (descritivo, valida S2) |
| Q11 | Usa IA com dados reais do trabalho? | S3, D7 | Dados | 1→2 (genericos → reais) | Nenhum (descritivo) |

> **Nota:** Fase 0.5 e descritiva/exploratoria. Nao alimenta scores dimensionais, mas valida hipoteses criticas (S1, S2, S3) e alimenta identificacao de early adopters (S11).

---

### Fase 1 — Maturidade nas 5 Dimensoes (Q12-Q39) — SCORE COMUM

#### Dimensao 1 — Utilizacao (Q12-Q18) — 7 itens

| # | Descricao | CSD que valida | Nivel que discrimina | Scoring |
|---|---|---|---|---|
| Q12 | Utilizo IA regularmente (pelo menos algumas vezes/semana) | S1, S13 | 2→3 (uso regular) | **Score Comum — Utilizacao** |
| Q13 | Consigo avaliar se resultado da IA e bom ou precisa de ajustes | S13 | 2→3 (avaliar outputs) | **Score Comum — Utilizacao** |
| Q14 | Sei adaptar prompt para resultados melhores | S13, S4 | 2→3 (prompts eficientes) | **Score Comum — Utilizacao** |
| Q15 | Quando IA gera resultado incorreto, consigo identificar e corrigir | S13 | 3→4 (resolver problemas complexos) | **Score Comum — Utilizacao** |
| Q16 | Acho dificil avaliar se resultado e confiavel *(REVERSO)* | S13, D4 | 2→3 (avaliacao critica) | **Score Comum — Utilizacao (inversao: 6 - resposta)** |
| Q17 | Quanto confia nos resultados de IA (escala 1-5) | D4 | 3 = confianca calibrada; extremos = risco | **Score Comum — Utilizacao (escala de confianca)** |
| Q18 | Ja utilizei IA para apoiar decisao importante | S1, S13 | 3→4 (uso estrategico para decisoes) | **Score Comum — Utilizacao** |

**Composicao:** Q12 + Q13 + Q14 + Q15 + Q16(reverso) + Q17(confianca) + Q18 = 7 itens

---

#### Dimensao 2 — Dados (Q19-Q23) — 5 itens

| # | Descricao | CSD que valida | Nivel que discrimina | Scoring |
|---|---|---|---|---|
| Q19 | Verifico e preparo dados antes de usar IA | S14 | 2→3 (preparacao de dados) | **Score Comum — Dados** |
| Q20 | Qualidade dos dados influencia qualidade do resultado | S3, S14 | 1→2 (awareness sobre dados) | **Score Comum — Dados** |
| Q21 | Identifico quais dados poderiam alimentar solucao de IA | S14, D7 | 2→3 (compreende relevancia) | **Score Comum — Dados** |
| Q22 | Quando IA apresenta dados/numeros, verifico antes de usar | S14 | 2→3 (verificacao de outputs de dados) | **Score Comum — Dados** |
| Q23 | Cenario vendas — o que faz primeiro (a/b/c/d) | S3, S14 | 1→4 (cenario comportamental completo) | **Score Comum — Dados (conversao cenario)** |

**Composicao:** Q19 + Q20 + Q21 + Q22 + Q23(cenario) = 5 itens

**Conversao cenario Q23:** d=1, a=2, b=3, c=5

---

#### Dimensao 3 — Governanca (Q24-Q29) — 6 itens

| # | Descricao | CSD que valida | Nivel que discrimina | Scoring |
|---|---|---|---|---|
| Q24 | Sei quais informacoes NAO compartilhar com IA publica | S10 | 1→2 (nocoes basicas) e 2→3 (principios) | **Score Comum — Governanca** |
| Q25 | Cenario relatorio confidencial (a/b/c/d/e) | S10 | 1→4 (cenario comportamental completo) | **Score Comum — Governanca (conversao cenario)** |
| Q26 | Conheco diretrizes/boas praticas da empresa sobre IA | S10, S15 | 2→3 (entende praticas) e 3→4 (aplica) | **Score Comum — Governanca** |
| Q27 | Verifico informacoes com outras fontes antes de decisao importante | S10 | 2→3 (pensamento critico) | **Score Comum — Governanca** |
| Q28 | Saberia identificar responsavel se IA gerasse recomendacao errada | S10 | 3→4 (accountability) | **Score Comum — Governanca** |
| Q29 | Cenario e-mail para cliente — o que faz antes de enviar (a/b/c/d) | S10 | 2→4 (cenario comportamental) | **Score Comum — Governanca (conversao cenario)** |
| Q58 | Sei o que e vies algoritmico e seu impacto em decisoes de IA | S16 | 2→3 (principios de etica/vies) | **Score Comum — Governanca** |
| Q59 | Cenario: IA com vies em contratacao — o que faria (a/b/c/d) | S16 | 1→4 (cenario comportamental etica) | **Score Comum — Governanca (conversao cenario)** |
| Q60 | Conheco os riscos legais de usar IA com dados pessoais (LGPD) | S16 | 2→3 (compliance/legal) | **Score Comum — Governanca** |
| Q61 | Como avalia os mecanismos de governanca de IA da Swift hoje | S17 | — (percepção institucional) | **Nenhum (descritivo — valida S17)** |

**Composicao:** Q24 + Q25(cenario) + Q26 + Q27 + Q28 + Q29(cenario) + Q58 + Q59(cenario) + Q60 = 9 itens
*(Q61 e descritivo — nao entra no scoring)*

**Conversao cenario Q25:** a=1, e=1, d=2, b=3, c=4
**Conversao cenario Q29:** a=1, d=2, b=2.5, c=4
**Conversao cenario Q59:** a=1, b=2, d=3, c=4

---

#### Dimensao 4 — Impacto no Negocio (Q30-Q34) — 5 itens

| # | Descricao | CSD que valida | Nivel que discrimina | Scoring |
|---|---|---|---|---|
| Q30 | Identifico pelo menos um processo que poderia melhorar com IA | S6, S7, D2 | 1→2 (identifica casos simples) e 2→3 (sugere melhorias) | **Score Comum — Impacto** |
| Q31 | Saberia explicar para colega como IA gera valor na area | S6, S8 | 2→3 (articula valor) | **Score Comum — Impacto** |
| Q32 | Diferencio quando IA economiza tempo de quando muda o resultado | S8, D8 | 3→4 (visao estrategica) | **Score Comum — Impacto** |
| Q33 | Estimo tempo/custo que solucao de IA economizaria | S6 | 3→4 (estrutura business case) | **Score Comum — Impacto** |
| Q34 | Ja sugeri/propus ideia de uso de IA para gestor/equipe | S6, D2 | 2→3 (proatividade) e 3→4 (acao concreta) | **Score Comum — Impacto** |

**Composicao:** Q30 + Q31 + Q32 + Q33 + Q34 = 5 itens

---

#### Dimensao 5 — Cultura (Q35-Q39) — 5 itens

| # | Descricao | CSD que valida | Nivel que discrimina | Scoring |
|---|---|---|---|---|
| Q35 | Tenho interesse ativo em aprender mais sobre IA | S12 | 1→2 (curiosidade → interesse ativo) | **Score Comum — Cultura** |
| Q36 | Nao me sinto confortavel recomendando IA *(REVERSO)* | S5, S12 | 2→3 (supera barreiras) | **Score Comum — Cultura (inversao: 6 - resposta)** |
| Q37 | Ja compartilhei dica/aprendizado sobre IA com colegas | S11 | 2→3 (incentivador) e 3→4 (agente) | **Score Comum — Cultura** |
| Q38 | Quando surge nova ferramenta, experimento por conta propria | S11, S12 | 2→3 (incorpora no fluxo) | **Score Comum — Cultura** |
| Q39 | Busco ativamente formas de aplicar IA para melhorar trabalho | S11, S12 | 3→4 (agente de transformacao) | **Score Comum — Cultura** |

**Composicao:** Q35 + Q36(reverso) + Q37 + Q38 + Q39 = 5 itens

---

### Perguntas de Diagnostico, Controle e Multiplicador (Q40-Q42)

| # | Descricao | CSD que valida | Dimensao da Matriz | Nivel que discrimina | Scoring |
|---|---|---|---|---|---|
| Q40 | Maior barreira para usar mais IA (escolha unica) | S5, S12 | Cultura | Diagnostico de barreiras | Nenhum (descritivo/diagnostico) |
| Q41 | Attention check ("marque Concordo parcialmente") | — | — | — | Nenhum (controle de qualidade) |
| Q42 | Interesse em ser multiplicador | S11 | Cultura | 3→4 (agente) | Nenhum (descritivo, dupla validacao early adopter) |

---

### Fase 2A — Cluster Execucao (Q43-Q46) — SCORE ESTENDIDO (+2 itens)

| # | Descricao | CSD que valida | Dimensao da Matriz | Nivel que discrimina | Scoring |
|---|---|---|---|---|---|
| Q43 | Como usa IA (primeiro resultado → combina fontes) | S1, S4, S13 | Utilizacao | 2→3→4 (profundidade) | **Score Estendido Execucao → Utilizacao** |
| Q44 | Ja automatizou/simplificou tarefa repetitiva com IA | S11, S13 | Utilizacao | 3→4 (aplicacao avancada) | **Score Estendido Execucao → Utilizacao** |
| Q45 | Interesse em treinamento — topicos (multipla escolha) | D6 | Cultura | — | Nenhum (descritivo, calibra Germinare) |
| Q46 | Maior impedimento para profundidade (escolha unica) | S5, S12 | Cultura | Diagnostico de barreiras | Nenhum (descritivo/diagnostico) |

**Composicao Score Estendido Execucao:** Q43 → Utilizacao, Q44 → Utilizacao = +2 itens

**Conversao cenario Q43:** a=1, d=2, b=3, c=5
**Conversao Q44:** "Nunca tentei"=1, "Nao, nao consigo visualizar"=2, "Nao, mas sei que seria possivel"=3, "Sim, uma vez"=4, "Sim, mais de uma vez"=5

---

### Fase 2B — Cluster Gestao (Q47-Q52) — SCORE ESTENDIDO (+4 itens)

| # | Descricao | CSD que valida | Dimensao da Matriz | Nivel que discrimina | Scoring |
|---|---|---|---|---|---|
| Q47 | Quem deveria ser responsavel por identificar oportunidades de IA | S7 | Impacto | 1→2 (ownership) | Nenhum (descritivo, valida S7) |
| Q48 | Cenario priorizacao — criterio de escolha (a/b/c/d/e) | S8, D8 | Impacto | 3→4 (eficiencia vs diferenciacao) | **Score Estendido Gestao → Impacto** |
| Q49 | Como identifica e registra oportunidades de IA | S9 | Impacto | 2→3 (informal → estruturado) | **Score Estendido Gestao → Impacto** |
| Q50 | Preparado para avaliar viabilidade de proposta de IA (Likert 1-5) | S6, S15 | Impacto | 3→4 (avaliacao critica) | **Score Estendido Gestao → Impacto** |
| Q51 | Ja definiu/aplicou orientacao sobre uso de IA na area | S15 | Governanca | 3→4 (aplica vs conhece) | **Score Estendido Gestao → Governanca** |
| Q52 | O que ajudaria a decidir melhor sobre IA (multipla escolha) | D6 | Cultura | — | Nenhum (descritivo, calibra trilha estrategica) |

**Composicao Score Estendido Gestao:** Q48 → Impacto, Q49 → Impacto, Q50 → Impacto, Q51 → Governanca = +4 itens

**Conversao cenario Q48:** e=1, d=2, a=3, b=4, c=5
**Conversao Q49:** d=1, e=2, c=3, b=4, a=5
**Conversao Q51:** "Nao"=1, "Nao, mas pretendo"=2, "Sim, orientacoes informais/verbais"=4, "Sim, diretrizes formais documentadas"=5

---

### Fase 3 — Perguntas Abertas (Q53-Q57)

| # | Descricao | CSD que alimenta | Dimensao da Matriz | Nivel que discrimina | Scoring |
|---|---|---|---|---|---|
| Q53 | Tarefa que gostaria de nunca mais fazer manualmente (obrigatoria) | D2 | Impacto | — | Nenhum (qualitativo — backlog da esteira) |
| Q54 | Experiencia negativa com IA (opcional) | D5 | Cultura | — | Nenhum (qualitativo — frustracoes ocultas) |
| Q55 | Preocupacao com IA usada de forma ampla na Swift (opcional) | S10, S15 | Governanca | — | Nenhum (qualitativo — percepcao de risco) |
| Q56 | O que mudaria na Swift amanha para facilitar IA (opcional) | S12 | Cultura | — | Nenhum (qualitativo — quick wins) |
| Q57 | Espaco livre (opcional) | Exploratorio | Transversal | — | Nenhum (qualitativo — insights nao previstos) |

---

## 2. Verificacao inversa: CSD → Perguntas

### Suposicoes (S1-S15)

| CSD | Descricao | Perguntas que validam | Qtd | Status |
|---|---|---|---|---|
| S1 | Maioria usa IA de forma rasa | Q6, Q7, Q8, Q9, Q12, Q18, Q43 | 7 | **Coberta** |
| S2 | Uso por iniciativa propria | Q10 | 1 | **Coberta** |
| S3 | Nao conectam com dados reais | Q11, Q20, Q23 | 3 | **Coberta** |
| S4 | Gen Z usa mais, profundidade igual Gen Y | Q4 x Q13, Q14, Q15, Q43 (cruzamento) | 4+ | **Coberta** (depende de n por faixa) |
| S5 | Medo/ansiedade sobre substituicao | Q36(reverso), Q40(opcao "impacto no cargo"), Q46(opcao "impacto no cargo"), Q54 | 4 | **Coberta** |
| S6 | Gestores nao formulam hipoteses | Q30, Q31, Q33, Q34, Q48, Q49, Q50 | 7 | **Coberta** (forte) |
| S7 | Veem IA como coisa de TI | Q47 | 1 | **Coberta** |
| S8 | Nao diferenciam IA cosmetica de impacto | Q32, Q48 | 2 | **Coberta** |
| S9 | Capturam ideias desestruturadamente | Q49 | 1 | **Coberta** |
| S10 | Governanca muito baixa | Q24, Q25, Q26, Q27, Q28, Q29, Q55 | 7 | **Coberta** (forte) |
| S11 | 15-20% sao early adopters | Q8, Q37, Q38, Q39, Q42, Q43, Q44 | 7 | **Coberta** (dupla validacao) |
| S12 | Gap "quero aprender" vs "sei por onde comecar" | Q35, Q38, Q39, Q40(opcao "nao saber por onde comecar"), Q45, Q46, Q52, Q56 | 8 | **Coberta** (forte) |
| S13 | Nao avaliam/corrigem outputs | Q13, Q14, Q15, Q16(reverso), Q43 | 5 | **Coberta** |
| S14 | Nao sabem preparar dados | Q19, Q20, Q21, Q22, Q23 | 5 | **Coberta** |
| S15 | Gestores nao aplicam governanca | Q26, Q50, Q51, Q55 | 4 | **Coberta** (Q51 testa acao real) |
| S16 | Desconhecem vies algoritmico e riscos legais/LGPD | Q58, Q59, Q60 | 3 | **Coberta** (vies + cenario + legal) |
| S17 | Percepcao de vazio de governanca na Swift | Q61, Q55 | 2 | **Coberta** (escala direta + aberta) |

**Resultado:** 17/17 suposicoes cobertas. Nenhuma orfa.

---

### Duvidas (D1-D8)

| CSD | Descricao | Perguntas/analises que alimentam | Status |
|---|---|---|---|
| D1 | Areas com iniciativas informais | Q2 x Q6-Q11 (cruzamento por area) | **Coberta** |
| D2 | Processos candidatos a IA | Q34 (acao), Q53 (aberta) | **Coberta** |
| D3 | Variacao de maturidade entre areas | Q2 x scores dimensionais (cruzamento) | **Coberta** |
| D4 | Nivel de confianca nos outputs | Q16(reverso), Q17(confianca) | **Coberta** |
| D5 | Experiencia negativa previa | Q54 (aberta) | **Coberta** |
| D6 | Como preferem aprender | Q45 (Execucao), Q52 (Gestao) | **Coberta** |
| D7 | Quais dados lidam no dia a dia | Q11, Q21, Q53 | **Coberta** |
| D8 | Gestores articulam modelo de negocio ou so eficiencia | Q32, Q48 | **Coberta** |

**Resultado:** 8/8 duvidas cobertas. Nenhuma orfa.

---

## 3. Verificacao inversa: Matriz → Perguntas (transicoes de nivel)

### Utilizacao

| Transicao | Descritor da Matriz | Perguntas que discriminam |
|---|---|---|
| **Nivel 1→2** | "Nao usa IA" → "Uso pontual e operacional" | Q6 (binaria), Q7 (amplitude), Q8 (frequencia), Q9 (tipos de tarefa) |
| **Nivel 2→3** | "Uso pontual" → "Prompts eficientes e avaliar resultados" | Q12 (uso regular), Q13 (avaliar resultado), Q14 (adaptar prompt), Q16 reverso (dificuldade avaliar), Q43 (profundidade - Execucao) |
| **Nivel 3→4** | "Uso regular" → "Uso estrategico para decisoes complexas" | Q15 (identificar/corrigir erro), Q17 (confianca calibrada), Q18 (IA para decisao importante), Q44 (automatizou tarefa - Execucao) |

**Status:** Cobertura completa. Todas as transicoes com multiplas perguntas.

---

### Dados

| Transicao | Descritor da Matriz | Perguntas que discriminam |
|---|---|---|
| **Nivel 1→2** | "Desconhece relacao dados↔IA" → "Sabe que dados sao importantes" | Q11 ("nunca usei IA" / "so dados genericos"), Q20 (awareness qualidade), Q23 opcao d ("nao saberia") |
| **Nivel 2→3** | "Sabe que dados sao importantes" → "Compreende qualidade e organizacao" | Q19 (prepara dados), Q21 (identifica dados relevantes), Q22 (verifica dados de saida), Q23 opcao a→b |
| **Nivel 3→4** | "Compreende qualidade" → "Domina preparacao e aplicacao em modelos" | Q23 opcao c (estrutura formato + verifica qualidade) |

**Status:** Cobertura adequada. Nivel 4 com cobertura limitada (aceitavel: poucos nesse nivel no baseline).

---

### Governanca

| Transicao | Descritor da Matriz | Perguntas que discriminam |
|---|---|---|
| **Nivel 1→2** | "Sem conhecimento" → "Nocoes basicas de uso responsavel" | Q24 baixo, Q25 opcoes a/e (sem nocao de risco) |
| **Nivel 2→3** | "Nocoes basicas" → "Entende principios e boas praticas" | Q24 alto, Q25 opcao b→d, Q26, Q27, Q29 opcao b→c, Q58 (vies), Q59 cenario (etica comportamental), Q60 (LGPD) |
| **Nivel 3→4** | "Entende principios" → "Aplica governanca, etica e compliance" | Q25 opcao c, Q28, Q29 opcao c, Q51 (Gestao: aplica orientacao) |

**Status:** Cobertura forte. Transicao 2→3 reforçada com 3 novos itens (Q58, Q59, Q60) cobrindo etica, vies e compliance legal. Q51 garante teste comportamental para nivel 4 no cluster Gestao.

---

### Impacto no Negocio

| Transicao | Descritor da Matriz | Perguntas que discriminam |
|---|---|---|
| **Nivel 1→2** | "Nao identifica oportunidades" → "Identifica casos simples" | Q30 baixo→medio, Q47 (ownership - Gestao) |
| **Nivel 2→3** | "Identifica casos simples" → "Sugere melhorias em processos" | Q30 alto, Q31 (explica valor), Q34 (propoe ideias), Q49 (captura oportunidades - Gestao) |
| **Nivel 3→4** | "Sugere melhorias" → "Estrutura business cases" | Q32 (diferencia eficiencia de diferenciacao), Q33 (estima custo/tempo), Q48 (priorizacao - Gestao), Q50 (avalia viabilidade - Gestao) |

**Status:** Cobertura forte. Nivel 4 especialmente robusto para cluster Gestao.

---

### Cultura

| Transicao | Descritor da Matriz | Perguntas que discriminam |
|---|---|---|
| **Nivel 1→2** | "Curiosidade inicial" → "Interesse ativo em aprender" | Q35 baixo→alto, Q10 (como comecou), Q38 baixo→medio |
| **Nivel 2→3** | "Interesse ativo" → "Incentivador na equipe" | Q36 reverso (confortavel recomendando), Q37 (compartilhou dica), Q38 alto (experimenta proativamente) |
| **Nivel 3→4** | "Incentivador" → "Agente de transformacao" | Q37 alto, Q39 (busca ativamente aplicar), Q42 (interesse em ser multiplicador) |

**Status:** Cobertura completa. Transicao 3→4 validada por comportamento + intencao.

---

## 4. Mapa resumo: Scoring vs Descritivo/Diagnostico

### Perguntas que entram no Score Comum (28 itens, Q12-Q39)

| Dimensao | Perguntas | Qtd |
|---|---|---|
| **Utilizacao** | Q12, Q13, Q14, Q15, Q16(reverso), Q17(confianca), Q18 | 7 |
| **Dados** | Q19, Q20, Q21, Q22, Q23(cenario) | 5 |
| **Governanca** | Q24, Q25(cenario), Q26, Q27, Q28, Q29(cenario), Q58, Q59(cenario), Q60 | 9 |
| **Impacto** | Q30, Q31, Q32, Q33, Q34 | 5 |
| **Cultura** | Q35, Q36(reverso), Q37, Q38, Q39 | 5 |
| **TOTAL** | | **31** |

---

### Perguntas que entram no Score Estendido

| Cluster | Perguntas | Dimensao que alimenta | Qtd |
|---|---|---|---|
| **Execucao** | Q43 | Utilizacao | +1 |
| **Execucao** | Q44 | Utilizacao | +1 |
| **Gestao** | Q48 | Impacto | +1 |
| **Gestao** | Q49 | Impacto | +1 |
| **Gestao** | Q50 | Impacto | +1 |
| **Gestao** | Q51 | Governanca | +1 |
| **TOTAL Execucao** | | | **+2** |
| **TOTAL Gestao** | | | **+4** |

---

### Perguntas descritivas / diagnostico (nao entram no scoring)

| Categoria | Perguntas | Funcao |
|---|---|---|
| **Segmentacao** | Q1, Q2, Q3, Q4, Q5 | Variaveis de corte para analises cruzadas |
| **Mapa de uso** | Q6, Q7, Q8, Q9, Q10, Q11 | Descritivo — valida hipoteses S1, S2, S3 sem score |
| **Diagnostico de barreiras** | Q40, Q46 | Identifica tipo de barreira (descritivo) |
| **Controle de qualidade** | Q41 | Attention check |
| **Multiplicador** | Q42 | Dupla validacao early adopter |
| **Preferencia de formato** | Q45, Q52 | Calibra formato da capacitacao |
| **Ownership** | Q47 | Valida S7 (descritivo) |
| **Qualitativos** | Q53, Q54, Q55, Q56, Q57 | Backlog, frustracoes, riscos, quick wins, insights |
| **TOTAL** | **23 perguntas** | |

---

### Tabela consolidada: cada pergunta e seu destino

| Pergunta | Tipo | Destino |
|---|---|---|
| Q1-Q5 | Segmentacao | Corte analitico |
| Q6-Q11 | Mapa descritivo | Validacao de hipoteses (sem score) |
| Q12-Q18 | **Score Comum** | **Utilizacao (7 itens)** |
| Q19-Q23 | **Score Comum** | **Dados (5 itens)** |
| Q24-Q29, Q58-Q60 | **Score Comum** | **Governanca (9 itens)** |
| Q61 | Descritivo | Valida S17 (sentimento institucional) |
| Q30-Q34 | **Score Comum** | **Impacto (5 itens)** |
| Q35-Q39 | **Score Comum** | **Cultura (5 itens)** |
| Q40 | Diagnostico | Barreiras (descritivo) |
| Q41 | Controle | Attention check |
| Q42 | Multiplicador | Early adopter (descritivo) |
| Q43-Q44 | **Score Estendido** | **Utilizacao (+2 Execucao)** |
| Q45-Q46 | Diagnostico | Formato/barreiras (descritivo) |
| Q47 | Diagnostico | Ownership (descritivo) |
| Q48-Q50 | **Score Estendido** | **Impacto (+3 Gestao)** |
| Q51 | **Score Estendido** | **Governanca (+1 Gestao)** |
| Q52 | Diagnostico | Formato (descritivo) |
| Q53-Q57 | Qualitativo | Insights abertos |

---

## 5. Resumo executivo da cobertura

### Resultado geral

| Criterio | Status |
|---|---|
| Todas as 17 suposicoes (S1-S17) cobertas por perguntas | **OK — 17/17** |
| Todas as 8 duvidas (D1-D8) cobertas por perguntas/analises | **OK — 8/8** |
| Todas as 15 transicoes de nivel (5 dimensoes x 3) cobertas | **OK — 15/15** |
| Minimo 3 itens por dimensao no Score Comum | **OK (7+5+9+5+5 = 31)** |
| Itens reversos presentes | **OK — Q16 (Utilizacao), Q36 (Cultura)** |
| Cenarios comportamentais presentes | **OK — Q23 (Dados), Q25 (Governanca), Q29 (Governanca), Q59 (Governanca/Etica)** |
| Attention check presente | **OK — Q41** |
| Perguntas orfas substantivas | **Nenhuma** |
| Hipoteses orfas (sem pergunta) | **Nenhuma** |

### Distribuicao de perguntas

| Funcao | Quantidade | Perguntas |
|---|---|---|
| Score Comum (todos respondem) | 31 | Q12-Q39 + Q58, Q59, Q60 |
| Score Estendido Execucao | +2 | Q43, Q44 |
| Score Estendido Gestao | +4 | Q48, Q49, Q50, Q51 |
| Descritivas / Diagnostico | 26 | Q1-Q11, Q40-Q42, Q45-Q47, Q52-Q57, Q61 |
| **Total** | **61** | |

### Composicao final dos scores por dimensao

| Dimensao | Score Comum | + Estendido Execucao | + Estendido Gestao | Total Execucao | Total Gestao |
|---|---|---|---|---|---|
| **Utilizacao** | 7 itens | +2 (Q43, Q44) | — | 9 | 7 |
| **Dados** | 5 itens | — | — | 5 | 5 |
| **Governanca** | 9 itens (Q24-Q29+Q58-Q60) | — | +1 (Q51) | 9 | 10 |
| **Impacto** | 5 itens | — | +3 (Q48, Q49, Q50) | 5 | 8 |
| **Cultura** | 5 itens | — | — | 5 | 5 |
| **TOTAL** | **31** | **+2** | **+4** | **33** | **35** |

### Observacoes sobre fidelidade Matriz-perguntas

Duas celulas com fidelidade "Adequada" (nao "Alta"):

1. **Dados nivel 4** — "domina preparacao e aplicacao em modelos" nao testado diretamente. Aceitavel: baseline, quase ninguem nesse nivel. Aprofundar na pesquisa T2.
2. **Impacto nivel 4 para Execucao** — "estrutura business cases" concentrado no bloco Gestao (Q48-Q50). Aceitavel: nivel 4 em Impacto nao e meta de 90 dias para Execucao.

Todas as demais celulas (18/20) com fidelidade Alta.

### Fluxo de dados: Pesquisa → Analise

```
Fase 0 (Q1-Q5) → Variaveis de segmentacao
      |
Fase 0.5 (Q6-Q11) → Mapa descritivo de uso → Valida S1, S2, S3
      |
Fase 1 (Q12-Q39) → Score Comum (28 itens, 5 dimensoes)
  Q40 → Diagnostico de barreiras
  Q41 → Controle de qualidade
  Q42 → Multiplicador (early adopter)
      |
Fase 2A (Q43-Q46) → Score Estendido Execucao (+2) + diagnostico
Fase 2B (Q47-Q52) → Score Estendido Gestao (+4) + diagnostico
      |
Fase 3 (Q53-Q57) → Insights qualitativos → Backlog, frustracoes, riscos, quick wins
      |
      v
Score por dimensao → Nivel na Matriz → Baseline organizacional
```

---

*Documento parte do programa de Transformacao IA Escalavel — Swift x Ionix*
