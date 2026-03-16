# Algoritmo de Scoring — Como Calcular os Scores de Maturidade em IA

> Documento operacional autocontido para quem vai processar os dados apos a coleta.
> Detalha passo a passo como cada resposta vira score, como os scores compoem as dimensoes, e como classificar cada respondente na Matriz de Letramento.
> Alguem que leia apenas este documento deve conseguir calcular todos os scores.

---

## Visao geral do fluxo

```
Resposta bruta (Likert/cenario/escala)
    |
Conversao individual (resposta → score 1-4)
    |
Score por dimensao (media dos itens da dimensao)
    |
    |--- Score Comum (28 itens, Q12-Q39 — igual para todos)
    |         → comparacao entre clusters, relatorio executivo
    |
    |--- Score Estendido (Score Comum + itens da Fase 2 do cluster)
    |         → Execucao: 30 itens | Gestao: 32 itens
    |         → classificacao mais precisa, early adopters
    |
Nivel na Matriz de Letramento (faixas de corte)
    |
Score geral do respondente (media das 5 dimensoes)
    |
Agregacoes (por cluster, area, geracao, etc.)
```

---

## Etapa 0 — Controle de qualidade (antes de calcular qualquer score)

Antes de processar, **excluir ou sinalizar** respostas invalidas:

| Controle | Regra | Acao |
|---|---|---|
| **Q41 (attention check)** | Resposta deve ser = 4 ("Concordo parcialmente") | Resposta ≠ 4 → **excluir respondente** |
| **Tempo de preenchimento** | Plataforma registra duracao | < 5 minutos → **excluir respondente** |
| **Consistencia Q16 vs Q13** | Q16 e reverso de Q13. Se Q13=5 e Q16=5 → inconsistencia | Diferenca > 3 pontos → **sinalizar para revisao** (nao excluir automaticamente) |
| **Consistencia Q36 vs Q37** | Q36 e reverso de Q37. Se Q37=5 e Q36=5 → inconsistencia | Diferenca > 3 pontos → **sinalizar para revisao** |

---

## Etapa 1 — Conversao: Resposta bruta → Score individual

### 1.1 Itens Likert padrao (escala 1-5)

Aplica-se a: Q12, Q13, Q14, Q15, Q18, Q19, Q20, Q21, Q22, Q24, Q26, Q27, Q28, Q30, Q31, Q32, Q33, Q34, Q35, Q37, Q38, Q39, Q50, Q58, Q60

| Resposta Likert | Score | O que significa no contexto da Matriz |
|---|---|---|
| 1 (Discordo totalmente) | **1.0** | Iniciante — nao faz / nao sabe |
| 2 (Discordo parcialmente) | **1.5** | Transicao Iniciante→Basico |
| 3 (Nao concordo nem discordo) | **2.0** | Basico — tem nocao mas nao pratica consistente |
| 4 (Concordo parcialmente) | **3.0** | Intermediario — faz com alguma competencia |
| 5 (Concordo totalmente) | **4.0** | Avancado — domina o aspecto |

**Por que nao e linear (1,2,3,4,5)?** Porque a Matriz tem 4 niveis, nao 5. A escala Likert 5 pontos precisa ser comprimida para 4 niveis. O ponto 3 ("neutro") mapeia para nivel 2 (Basico) porque neutralidade indica falta de pratica ativa, nao competencia intermediaria.

---

### 1.2 Itens reversos (Q16, Q36)

**Q16:** "Acho dificil avaliar se o resultado gerado por IA e confiavel ou nao."
**Q36:** "Nao me sinto confortavel em recomendar o uso de IA para colegas."

Nesses itens, concordar indica **menor** maturidade. Inverter antes de calcular:

| Resposta Likert | Score (invertido) | Logica |
|---|---|---|
| 1 (Discordo totalmente) | **4.0** | Discorda que e dificil = sabe avaliar = Avancado |
| 2 (Discordo parcialmente) | **3.0** | Intermediario |
| 3 (Nao concordo nem discordo) | **2.0** | Basico |
| 4 (Concordo parcialmente) | **1.5** | Transicao |
| 5 (Concordo totalmente) | **1.0** | Concorda que e dificil = nao sabe avaliar = Iniciante |

**Por que itens reversos?** Controlam o vies de aquiescencia — a tendencia de concordar com tudo. Se alguem marca 5 em Q13 ("consigo avaliar") e tambem marca 5 em Q16 ("acho dificil avaliar"), esta respondendo sem ler. A inversao penaliza esse padrao.

> **CSD:** Itens reversos sao criticos para S13 (avaliam/corrigem outputs?). Se a maioria marca Likert alto em Q13-Q15 mas tambem alto em Q16, o score corrigido revela que a autopercepacao e inflada.

---

### 1.3 Escala de confianca (Q17)

**Q17:** "Quanto voce confia nos resultados gerados por IA?"

Esta nao e Likert padrao. E uma escala de confianca com **penalizacao para confianca excessiva**:

| Resposta | Score | Racional |
|---|---|---|
| 1 (Nao confio nada) | **1.0** | Desconfianca total = nao usa ou rejeita = Iniciante |
| 2 | **2.0** | Cauteloso — usa com ressalvas = Basico |
| 3 | **3.0** | **Confianca calibrada** = avalia criticamente = Intermediario (ideal) |
| 4 | **3.5** | Confianca alta — positivo, mas atencao |
| 5 (Confio totalmente) | **2.0** | **Confianca excessiva = RISCO** → rebaixado para Basico |

**Por que penalizar confianca total?** A Matriz de Letramento define nivel Avancado em Utilizacao como "uso estrategico para resolver problemas complexos" — isso pressupoe avaliacao critica, nao confianca cega. Confiar totalmente na IA sem questionar indica falta de senso critico, nao maturidade.

> **CSD:** Conecta com D4 (nivel de confianca nos outputs) e S10 (governanca baixa). Se muitos marcam 5, e um alerta duplo: risco em Utilizacao (nao avaliam) E em Governanca (nao questionam).

---

### 1.4 Cenario Dados (Q23)

**Q23:** "Voce precisa usar IA para analisar as vendas do ultimo trimestre. O que voce faz primeiro?"

| Opcao escolhida | Score | Nivel | Racional |
|---|---|---|---|
| d) Nao saberia como comecar | **1.0** | Iniciante | Nao sabe a relacao dados↔IA |
| a) Peco direto para a IA analisar | **2.0** | Basico | Sabe que pode usar IA, mas nao prepara dados |
| b) Verifico se os dados estao corretos antes de enviar | **3.0** | Intermediario | Compreende qualidade de dados |
| c) Estruturo os dados num formato adequado e verifico a qualidade | **4.0** | Avancado | Domina preparacao de dados |

> **CSD:** Valida diretamente S3 (nao conectam com dados reais) e S14 (nao sabem preparar dados). Se a maioria marca (a) ou (d), confirma ambas — capacitacao precisa priorizar letramento em dados.

---

### 1.5 Cenario Governanca — relatorio confidencial (Q25)

**Q25:** "Voce precisa analisar um relatorio confidencial e pensa em usar o ChatGPT. O que voce faz?"

| Opcao escolhida | Score | Nivel | Racional |
|---|---|---|---|
| a) Cola o conteudo diretamente no ChatGPT | **1.0** | Iniciante | Sem nocao de risco |
| e) Nao saberia avaliar o risco | **1.0** | Iniciante | Sem nocao de risco (versao passiva) |
| d) Nao usaria IA para dados confidenciais | **2.0** | Basico | Nocao de risco, mas evita em vez de gerenciar |
| b) Remove dados sensiveis antes de colar | **3.0** | Intermediario | Entende principios, mitiga risco |
| c) Usa uma ferramenta interna aprovada pela empresa | **4.0** | Avancado | Aplica governanca na pratica |

**Por que opcao (d) e nivel 2 e nao 3?** Porque "nao usar" e uma postura cautelosa (sabe que ha risco), mas nao demonstra capacidade de **gerenciar** o risco. Nivel 3 requer gerenciar, nao evitar.

> **CSD:** Valida diretamente S10 (governanca baixa). Se a distribuicao se concentra em (a)+(e), governanca precisa ser a **primeira** intervencao antes de ampliar uso.

---

### 1.6 Cenario Governanca — e-mail para cliente (Q29)

**Q29:** "Voce usa IA para redigir um e-mail importante para um cliente. Antes de enviar, o que voce faz?"

| Opcao escolhida | Score | Nivel | Racional |
|---|---|---|---|
| a) Envia direto, confio no resultado | **1.0** | Iniciante | Sem verificacao — risco |
| d) Nao usaria IA para isso | **2.0** | Basico | Nocao de risco, mas evita |
| b) Leio por cima para ver se esta ok | **2.5** | Basico-Intermediario | Verifica superficialmente |
| c) Reviso criticamente, adapto tom, verifico informacoes | **4.0** | Avancado | Verificacao critica completa |

**Por que este cenario alem do Q25?** Q25 testa risco de dados confidenciais (governanca de informacao). Q29 testa risco de qualidade do output em contexto profissional (governanca de uso). Sao facetas diferentes da mesma dimensao.

> **CSD:** Complementa S10 e conecta com S13 (avaliacao critica de outputs). O cenario do e-mail e mais cotidiano e tangivel que o cenario do relatorio confidencial — captura comportamento de quem usa IA diariamente mas nao verifica.

---

### 1.7 Cenario Execucao — como usa IA (Q43)

**Q43:** Cenario de como o respondente utiliza IA no dia a dia.

| Opcao escolhida | Score | Nivel | Racional |
|---|---|---|---|
| a) Uso o primeiro resultado | **1.0** | Iniciante | Consumidor passivo |
| b) Ajusto o prompt ate resultado satisfatorio | **2.5** | Basico-Intermediario | Iteracao mas sem triangulacao |
| d) Uso como ponto de partida e refaco manualmente | **3.0** | Intermediario | Senso critico, mas nao integra |
| c) Combino com outras fontes e analises | **4.0** | Avancado | Integra IA ao fluxo de trabalho |

> **Por que (d) > (b)?** Quem refaz manualmente demonstra mais senso critico que quem so ajusta prompt. Mas quem combina fontes (c) integra IA de forma estrategica — e o nivel mais alto.

**ENTRA NO SCORE ESTENDIDO → Dimensao Utilizacao (apenas cluster Execucao).**

---

### 1.8 Escala Execucao — automatizou tarefa (Q44)

**Q44:** "Voce ja automatizou alguma tarefa do seu trabalho usando IA?"

| Opcao | Score | Nivel |
|---|---|---|
| Nunca tentei | **1.0** | Iniciante |
| Nao, nao consigo visualizar como | **1.0** | Iniciante |
| Nao, mas sei que seria possivel | **2.0** | Basico |
| Sim, uma vez | **3.0** | Intermediario |
| Sim, mais de uma vez | **4.0** | Avancado |

**ENTRA NO SCORE ESTENDIDO → Dimensao Utilizacao (apenas cluster Execucao).**

---

### 1.9 Cenario Gestao — criterio de priorizacao (Q48)

**Q48:** Cenario de como o gestor prioriza iniciativas de IA.

| Opcao | Score | Nivel | Racional |
|---|---|---|---|
| e) Nao saberia como priorizar | **1.0** | Iniciante | Sem criterio |
| d) O que o time mais pede | **2.0** | Basico | Reativo, sem visao estrategica |
| a) O que gera economia de custo imediata | **2.5** | Basico-Intermediario | Visao de eficiencia, sem diferenciacao |
| b) O que melhora a experiencia do cliente | **3.0** | Intermediario | Visao de valor para o cliente |
| c) O que gera receita nova ou diferenciacao | **4.0** | Avancado | Visao estrategica de negocio |

> **CSD:** Valida S8 (nao diferenciam cosmetico de impacto) e D8 (articulam modelo de negocio?). Se maioria marca (a) ou (d), gestores pensam em custo, nao em alavanca — narrativa de valor precisa ser construida.

**ENTRA NO SCORE ESTENDIDO → Dimensao Impacto no Negocio (apenas cluster Gestao).**

---

### 1.10 Escala Gestao — processo de captura de oportunidades (Q49)

**Q49:** "Como voce captura oportunidades de uso de IA na sua area?"

| Opcao | Score | Nivel |
|---|---|---|
| d) Nao costumo pensar nisso | **1.0** | Iniciante |
| e) Gostaria de ter um processo mas nao sei como | **1.5** | Transicao |
| c) Discuto com o time informalmente | **2.0** | Basico |
| b) Anoto quando surge, mas sem processo formal | **3.0** | Intermediario |
| a) Tenho um processo estruturado | **4.0** | Avancado |

> **CSD:** Valida S9 (capturam ideias de forma desestruturada). Se maioria marca (c)-(e), a esteira precisa de etapa de onboarding de gestores antes de ativar.

**ENTRA NO SCORE ESTENDIDO → Dimensao Impacto no Negocio (apenas cluster Gestao).**

---

### 1.11 Likert Gestao — preparado para avaliar viabilidade (Q50)

**Q50:** "Me sinto preparado para avaliar a viabilidade de uma iniciativa de IA na minha area."

Conversao: Likert padrao (mesma tabela da secao 1.1).

**ENTRA NO SCORE ESTENDIDO → Dimensao Impacto no Negocio (apenas cluster Gestao).**

---

### 1.12 Escala Gestao — aplicou orientacao na area (Q51)

**Q51:** "Voce ja aplicou alguma orientacao sobre uso de IA na sua area/equipe?"

| Opcao | Score | Nivel | Racional |
|---|---|---|---|
| Nao | **1.0** | Iniciante | Nenhuma acao |
| Nao, mas pretendo fazer | **2.0** | Basico | Intencao sem acao |
| Sim, com orientacoes informais/verbais | **3.0** | Intermediario | Acao informal |
| Sim, com diretrizes formais documentadas | **4.0** | Avancado | Governanca aplicada e documentada |

> **CSD:** Valida S15 (gestores nao aplicam governanca). Sem esta pergunta no scoring, nao e possivel distinguir gestores que conhecem governanca (nivel 3) de gestores que aplicam (nivel 4).

**ENTRA NO SCORE ESTENDIDO → Dimensao Governanca (apenas cluster Gestao).**

---

### 1.13 Likert padrao — conhece vies algoritmico (Q58)

**Q58:** "Sei o que e vies algoritmico e como ele pode impactar decisoes tomadas com IA (ex.: triagem de curriculos, aprovacao de credito, atendimento segmentado)."

Conversao: Likert padrao (mesma tabela da secao 1.1).

**ENTRA NO SCORE COMUM → Dimensao Governanca (todos os respondentes).**

> **CSD:** Valida S16 (desconhecem vies algoritmico). Score baixo indica que o modulo de etica precisa cobrir vies explicitamente — nao e apenas "nao cole dados sigilosos".

---

### 1.14 Cenario Etica — IA com vies em contratacao (Q59)

**Q59:** "Uma ferramenta de IA usada pela Swift aprova consistentemente candidatos com determinado perfil e rejeita outros para a mesma vaga, sem criterio claro. O que voce faria?"

| Opcao escolhida | Score | Nivel | Racional |
|---|---|---|---|
| a) Continuaria usando — os resultados parecem adequados | **1.0** | Iniciante | Ignora o risco — uso irresponsavel |
| b) Reportaria ao gestor, mas continuaria usando | **2.0** | Basico | Tem alguma sensibilidade mas sem acao de contencao |
| d) Suspenderia o uso e escalaria para TI ou Compliance | **3.0** | Intermediario | Age com prudencia, mas sem diagnostico da causa |
| c) Investigaria a causa antes de continuar — entenderia o padrao e documentaria o risco | **4.0** | Avancado | Aplica governanca real: diagnostico + documentacao + decisao informada |

**Por que (d) e nivel 3 e nao 4?** Suspender sem entender e uma resposta cautelosa (bom instinto), mas nao demonstra capacidade de **diagnosticar e gerenciar** o risco. Nivel 4 requer investigacao ativa — a postura de quem sabe que governanca e processo, nao apenas reacao.

**ENTRA NO SCORE COMUM → Dimensao Governanca (todos os respondentes).**

> **CSD:** Teste comportamental de S16. Complementa Q58 (declarativo) — quem diz que "sabe o que e vies" mas marca (a) no cenario tem autopercepçao inflada. Detecta Dunning-Kruger de etica.

---

### 1.15 Likert padrao — conhece riscos legais/LGPD (Q60)

**Q60:** "Conheco os riscos legais de usar IA com dados pessoais de clientes ou colaboradores (ex.: LGPD, privacidade, responsabilidade civil)."

Conversao: Likert padrao (mesma tabela da secao 1.1).

**ENTRA NO SCORE COMUM → Dimensao Governanca (todos os respondentes).**

> **CSD:** Valida S16 — vetor legal. Enquanto Q58 testa vies (risco para terceiros), Q60 testa compliance (risco para a empresa). Juntas cobrem os dois vetores de S16. Score baixo em Q60 indica exposicao juridica nao percebida.

---

## Etapa 2 — Composicao: Scores individuais → Score por dimensao

### O que e o Score Comum e o Score Estendido

A pesquisa tem dois blocos que geram scores:

- **Fase 1 (Q12-Q39):** Respondida por **todos**. Sao **28 itens**. E a base do **Score Comum**.
- **Fase 2A/2B:** Respondida apenas pelo cluster do respondente. Algumas perguntas medem competencia real e complementam o Score Comum, gerando o **Score Estendido**.

| Camada | O que inclui | Qtd itens | Para que serve |
|---|---|---|---|
| **Score Comum** | Apenas itens da Fase 1 (Q12-Q39) — iguais para todos | **28** | Comparacao direta entre clusters, areas e geracoes. Usar no **relatorio executivo** |
| **Score Estendido Execucao** | Score Comum + Q43, Q44 | **30** | Classificacao mais precisa para o cluster Execucao |
| **Score Estendido Gestao** | Score Comum + Q48, Q49, Q50, Q51 | **32** | Classificacao mais precisa para o cluster Gestao |

**Por que duas camadas?** O Score Estendido usa perguntas diferentes por cluster (Execucao tem Q43/Q44, Gestao tem Q48-Q51). Isso torna a comparacao direta entre clusters imprecisa. O Score Comum resolve isso: mesmos 28 itens, mesma base, comparavel.

**O Score Estendido e OPCIONAL.** Se a analise nao precisar desse nivel de detalhe, o Score Comum e suficiente para todos os outputs do relatorio executivo. O Estendido agrega valor quando:
- Voce quer classificar respondentes dentro do cluster com mais granularidade
- Voce quer identificar early adopters (Q43/Q44 sao essenciais para Execucao)
- Voce quer avaliar gestores em Impacto e Governanca com mais profundidade (Q48-Q51)

---

### 2.1 Score Comum — Composicao por dimensao (todos os respondentes, 28 itens)

| Dimensao | Itens | Qtd | Peso |
|---|---|---|---|
| **Utilizacao** | Q12 + Q13 + Q14 + Q15 + Q16(reverso) + Q17(confianca) + Q18 | 7 | Media simples |
| **Dados** | Q19 + Q20 + Q21 + Q22 + Q23(cenario) | 5 | Media simples |
| **Governanca** | Q24 + Q25(cenario) + Q26 + Q27 + Q28 + Q29(cenario) + Q58 + Q59(cenario) + Q60 | 9 | Media simples |
| **Impacto no Negocio** | Q30 + Q31 + Q32 + Q33 + Q34 | 5 | Media simples |
| **Cultura** | Q35 + Q36(reverso) + Q37 + Q38 + Q39 | 5 | Media simples |

**Total: 7 + 5 + 9 + 5 + 5 = 31 itens**

**Formula:**

```
Score_comum_dimensao = soma(scores dos itens da dimensao) / quantidade de itens da dimensao
```

---

### 2.2 Score Estendido — Itens adicionais por cluster

#### Cluster Execucao (+2 itens → Utilizacao 7→9)

| Pergunta | Dimensao | Tipo de conversao | O que agrega |
|---|---|---|---|
| Q43 (como usa IA) | Utilizacao | Cenario (secao 1.7) | Profundidade real de uso — diferencia quem aceita tudo cru de quem triangula |
| Q44 (automatizou tarefa) | Utilizacao | Escala (secao 1.8) | Aplicacao pratica — marcador de nivel 4 ("automatizar atividades") |

**Composicao estendida para Execucao:**

| Dimensao | Score Comum | + Estendido | Total itens |
|---|---|---|---|
| **Utilizacao** | Q12-Q18 (7) | + Q43, Q44 | **9** |
| Dados | Q19-Q23 (5) | — | 5 |
| Governanca | Q24-Q29 + Q58-Q60 (9) | — | 9 |
| Impacto | Q30-Q34 (5) | — | 5 |
| Cultura | Q35-Q39 (5) | — | 5 |
| **Total** | **28** | **+2** | **30** |

---

#### Cluster Gestao (+4 itens → Impacto 5→8, Governanca 6→7)

| Pergunta | Dimensao | Tipo de conversao | O que agrega |
|---|---|---|---|
| Q48 (criterio de priorizacao) | Impacto | Cenario (secao 1.9) | Sofisticacao estrategica — eficiencia vs diferenciacao |
| Q49 (processo de captura) | Impacto | Escala (secao 1.10) | Estruturacao de processo — informal vs formal |
| Q50 (preparado para avaliar viabilidade) | Impacto | Likert padrao (secao 1.11) | Competencia em avaliacao de viabilidade |
| Q51 (aplicou orientacao na area) | Governanca | Escala (secao 1.12) | Governanca aplicada — diferencia "conhecer" de "agir" |

**Composicao estendida para Gestao:**

| Dimensao | Score Comum | + Estendido | Total itens |
|---|---|---|---|
| Utilizacao | Q12-Q18 (7) | — | 7 |
| Dados | Q19-Q23 (5) | — | 5 |
| **Governanca** | Q24-Q29 + Q58-Q60 (9) | + Q51 | **10** |
| **Impacto** | Q30-Q34 (5) | + Q48, Q49, Q50 | **8** |
| Cultura | Q35-Q39 (5) | — | 5 |
| **Total** | **28** | **+4** | **32** |

---

### 2.3 Quando usar cada score

| Contexto | Qual score usar | Por que |
|---|---|---|
| **Relatorio executivo** (CIO + Comite) | Score Comum | Mesma base para todos, comparacao justa entre clusters |
| **Heatmap area x dimensao** | Score Comum | Comparabilidade entre areas |
| **Gap analysis Execucao vs Gestao** | Score Comum | Comparacao direta |
| **Relatorio operacional** (planos de capacitacao por cluster) | Score Estendido | Classificacao mais precisa dentro do cluster |
| **Identificacao de early adopters** | Score Estendido | Q43/Q44 (Exec) e Q49/Q51 (Gestao) sao essenciais |
| **Trilha de capacitacao individual** | Score Estendido | Mais granularidade = melhor direcionamento |
| **Reaplicacao T2 (90 dias)** | Score Comum | Mesmos itens, comparacao temporal valida |

> **Regra pratica:** Na duvida, use o Score Comum. Ele e suficiente para todos os outputs executivos. O Score Estendido e um **bonus de precisao** para quem precisa de granularidade dentro de cada cluster.

---

## Etapa 3 — Classificacao: Score → Nivel na Matriz de Letramento

### Faixas de corte (aplicam-se tanto ao Score Comum quanto ao Estendido)

| Score medio da dimensao | Nivel atribuido | Descricao na Matriz |
|---|---|---|
| **1.00 — 1.49** | Nivel 1 — Iniciante | Nao usa / desconhece / sem nocao |
| **1.50 — 2.49** | Nivel 2 — Basico | Uso pontual / nocoes basicas / identifica casos simples |
| **2.50 — 3.49** | Nivel 3 — Intermediario | Uso regular com competencia / entende principios / sugere melhorias |
| **3.50 — 4.00** | Nivel 4 — Avancado | Uso estrategico / aplica na pratica / estrutura business cases |

**Por que essas faixas?** A distribuicao e assimetrica propositalmente:
- Nivel 1 e estreito (0.49 de amplitude) porque "Iniciante" e um estado bem definido
- Nivel 2 e amplo (1.0 de amplitude) porque e onde provavelmente a maioria estara (baseline pre-programa)
- Nivel 3 e amplo (1.0 de amplitude) para capturar a faixa-alvo de evolucao
- Nivel 4 e estreito (0.5 de amplitude) porque "Avancado" exige consistencia alta em todos os itens

---

### Score geral do respondente

```
Score_geral = (Score_Utilizacao + Score_Dados + Score_Governanca + Score_Impacto + Score_Cultura) / 5
```

O score geral usa a mesma tabela de faixas de corte.

---

### Exemplo completo de calculo (Score Comum)

Respondente ficticio do cluster Execucao:

**Dimensao 1 — Utilizacao (7 itens):**

| Item | Resposta | Tipo | Score |
|---|---|---|---|
| Q12 (usa IA regularmente) | 4 (Concordo parcialmente) | Likert padrao | 3.0 |
| Q13 (avalia resultado) | 3 (Neutro) | Likert padrao | 2.0 |
| Q14 (adapta prompt) | 4 (Concordo parcialmente) | Likert padrao | 3.0 |
| Q15 (identifica e corrige erro) | 2 (Discordo parcialmente) | Likert padrao | 1.5 |
| Q16 (dificil avaliar confiabilidade) | 2 (Discordo parcialmente) | **Likert reverso** | **3.0** |
| Q17 (nivel de confianca) | 3 | **Escala confianca** | **3.0** |
| Q18 (usou IA para decisao importante) | 2 (Discordo parcialmente) | Likert padrao | 1.5 |

```
Score_Utilizacao = (3.0 + 2.0 + 3.0 + 1.5 + 3.0 + 3.0 + 1.5) / 7 = 17.0 / 7 = 2.43
→ Nivel 2 — Basico
```

**Dimensao 2 — Dados (5 itens):**

| Item | Resposta | Tipo | Score |
|---|---|---|---|
| Q19 (verifico e preparo dados) | 3 (Neutro) | Likert padrao | 2.0 |
| Q20 (qualidade influencia resultado) | 5 (Concordo totalmente) | Likert padrao | 4.0 |
| Q21 (identifico quais dados alimentariam IA) | 3 (Neutro) | Likert padrao | 2.0 |
| Q22 (verifico dados/numeros da IA) | 4 (Concordo parcialmente) | Likert padrao | 3.0 |
| Q23 (cenario vendas) | Opcao b (verifico dados) | Cenario | 3.0 |

```
Score_Dados = (2.0 + 4.0 + 2.0 + 3.0 + 3.0) / 5 = 14.0 / 5 = 2.80
→ Nivel 3 — Intermediario
```

**Dimensao 3 — Governanca (6 itens):**

| Item | Resposta | Tipo | Score |
|---|---|---|---|
| Q24 (sabe quais infos nao compartilhar) | 4 (Concordo parcialmente) | Likert padrao | 3.0 |
| Q25 (cenario relatorio confidencial) | Opcao d (nao usaria) | Cenario | 2.0 |
| Q26 (conhece diretrizes da empresa) | 2 (Discordo parcialmente) | Likert padrao | 1.5 |
| Q27 (verifica com outras fontes) | 4 (Concordo parcialmente) | Likert padrao | 3.0 |
| Q28 (sabe quem e responsavel quando IA erra) | 3 (Neutro) | Likert padrao | 2.0 |
| Q29 (cenario e-mail) | Opcao b (leio por cima) | Cenario | 2.5 |

```
Score_Governanca = (3.0 + 2.0 + 1.5 + 3.0 + 2.0 + 2.5) / 6 = 14.0 / 6 = 2.33
→ Nivel 2 — Basico
```

**Dimensao 4 — Impacto no Negocio (5 itens):**

| Item | Resposta | Tipo | Score |
|---|---|---|---|
| Q30 (identifica processo para IA) | 4 (Concordo parcialmente) | Likert padrao | 3.0 |
| Q31 (explica como IA gera valor) | 3 (Neutro) | Likert padrao | 2.0 |
| Q32 (diferencia eficiencia de diferenciacao) | 2 (Discordo parcialmente) | Likert padrao | 1.5 |
| Q33 (estima tempo/custo) | 2 (Discordo parcialmente) | Likert padrao | 1.5 |
| Q34 (ja sugeriu ideia de IA) | 4 (Concordo parcialmente) | Likert padrao | 3.0 |

```
Score_Impacto = (3.0 + 2.0 + 1.5 + 1.5 + 3.0) / 5 = 11.0 / 5 = 2.20
→ Nivel 2 — Basico
```

**Dimensao 5 — Cultura (5 itens):**

| Item | Resposta | Tipo | Score |
|---|---|---|---|
| Q35 (interesse em aprender) | 5 (Concordo totalmente) | Likert padrao | 4.0 |
| Q36 (nao se sente confortavel recomendando) | 4 (Concordo parcialmente) | **Likert reverso** | **1.5** |
| Q37 (compartilhou dica com colegas) | 3 (Neutro) | Likert padrao | 2.0 |
| Q38 (experimenta ferramentas novas) | 4 (Concordo parcialmente) | Likert padrao | 3.0 |
| Q39 (busca formas de aplicar IA) | 4 (Concordo parcialmente) | Likert padrao | 3.0 |

```
Score_Cultura = (4.0 + 1.5 + 2.0 + 3.0 + 3.0) / 5 = 13.5 / 5 = 2.70
→ Nivel 3 — Intermediario
```

**Score Geral (Score Comum):**

| Dimensao | Score | Nivel |
|---|---|---|
| Utilizacao | 2.43 | 2 — Basico |
| Dados | 2.80 | 3 — Intermediario |
| Governanca | 2.33 | 2 — Basico |
| Impacto | 2.20 | 2 — Basico |
| Cultura | 2.70 | 3 — Intermediario |
| **Geral** | **2.49** | **2 — Basico** |

---

### Exemplo com Score Estendido (mesmo respondente, cluster Execucao)

Respostas adicionais da Fase 2A:
- Q43 (como usa IA): opcao c ("Combino com outras fontes") → score 4.0
- Q44 (automatizou tarefa): "Sim, mais de uma vez" → score 4.0

Apenas a dimensao Utilizacao muda (7→9 itens):

```
Score_Utilizacao_estendido = (soma dos 7 itens comuns + 4.0 + 4.0) / 9
                           = (17.0 + 4.0 + 4.0) / 9
                           = 25.0 / 9
                           = 2.78
→ Nivel 3 — Intermediario (era Nivel 2 no Score Comum)
```

| Dimensao | Comum | Estendido | Nivel Comum | Nivel Estendido |
|---|---|---|---|---|
| Utilizacao | 2.43 | **2.78** | 2 — Basico | **3 — Intermediario** |
| Dados | 2.80 | 2.80 | 3 — Intermediario | 3 — Intermediario |
| Governanca | 2.33 | 2.33 | 2 — Basico | 2 — Basico |
| Impacto | 2.20 | 2.20 | 2 — Basico | 2 — Basico |
| Cultura | 2.70 | 2.70 | 3 — Intermediario | 3 — Intermediario |
| **Geral** | **2.49** | **2.56** | **2 — Basico** | **3 — Intermediario** |

Neste caso, o Score Estendido revela que em Utilizacao o respondente e um Intermediario (2.78), nao um Basico borderline (2.43). Os itens Q43 e Q44 mostram que ele usa IA de forma sofisticada na pratica — o Score Comum nao capturava isso. O score geral tambem sobe de Basico para Intermediario, o que pode mudar a trilha de capacitacao recomendada.

---

## Etapa 4 — Detalhe por dimensao: o que cada item mede e por que

### Dimensao 1 — Utilizacao (Score Comum: 7 itens / Estendido Execucao: 9 itens)

| Item | Pergunta resumida | Tipo | Nivel que discrimina | CSD |
|---|---|---|---|---|
| Q12 | Usa IA regularmente | Likert | 1→2→3: frequencia de uso | S1 |
| Q13 | Avalia se resultado e bom | Likert | 2→3: avaliar outputs | S13 |
| Q14 | Adapta prompt | Likert | 2→3: prompts eficientes | S13 |
| Q15 | Identifica e corrige erro | Likert | 3→4: resolver problemas | S13 |
| Q16 | Dificil avaliar confiabilidade | Likert reverso | 2→3: controle de avaliacao critica | S13, D4 |
| Q17 | Nivel de confianca | Escala confianca | 3: confianca calibrada | D4 |
| Q18 | Usou IA para decisao importante | Likert | 3→4: aplicacao estrategica | S13 |
| *Q43* | *Como usa IA (cenario)* | *Cenario Execucao* | *2→4: profundidade real* | *S1, S13* |
| *Q44* | *Automatizou tarefa* | *Escala Execucao* | *3→4: aplicacao pratica* | *S11* |

> *Italico = Score Estendido (apenas Execucao)*

**Interpretacao via CSD:**
- Score Comum baixo em Q13-Q15 mas Q16 reverso alto → autopercepacao inflada, confirma S13
- Se Q17=5 e frequente → alerta sobre confianca excessiva (D4 + S10)
- Score Estendido: Q43 e o melhor discriminador. Se maioria marca (a) "uso primeiro resultado" mas Q13=4 "consigo avaliar", ha dissonancia entre o que dizem e o que fazem → Dunning-Kruger confirmado

---

### Dimensao 2 — Dados (5 itens, igual para todos)

| Item | Pergunta resumida | Tipo | Nivel que discrimina | CSD |
|---|---|---|---|---|
| Q19 | Verifico e preparo dados | Likert | 2→3: preparacao ativa | S14 |
| Q20 | Qualidade dos dados influencia resultado | Likert | 1→2: awareness | S3, S14 |
| Q21 | Identifico quais dados alimentariam IA | Likert | 2→3: compreende relevancia | S14, D7 |
| Q22 | Verifico dados/numeros que IA apresenta | Likert | 2→3: senso critico sobre output | S14, D4 |
| Q23 | Cenario vendas | Cenario Dados | 1→4: competencia real | S3, S14 |

**Interpretacao via CSD:**
- Q20 alto + Q19/Q21 baixos = padrao classico de S3: sabe que dados importam mas nao pratica
- Q22 conecta Dados com Governanca — quem nao verifica numeros e risco em ambas
- Q23 cenario vs Q19 Likert: se Q19=4 ("verifico") mas Q23=a ("peco direto"), Likert esta inflado

---

### Dimensao 3 — Governanca (Score Comum: 6 itens / Estendido Gestao: 7 itens)

| Item | Pergunta resumida | Tipo | Nivel que discrimina | CSD |
|---|---|---|---|---|
| Q24 | Sabe quais informacoes nao compartilhar | Likert | 1→2→3: nocoes a principios | S10 |
| Q25 | Cenario relatorio confidencial | Cenario Gov. | 1→4: competencia real (dados) | S10 |
| Q26 | Conhece diretrizes da empresa | Likert | 2→3→4: boas praticas | S10, S15 |
| Q27 | Verifica com outras fontes antes de decisao | Likert | 2→3: boas praticas aplicadas | S10 |
| Q28 | Sabe quem e responsavel quando IA erra | Likert | 3→4: compliance/responsabilidade | S10, S15 |
| Q29 | Cenario e-mail para cliente | Cenario Gov. | 1→4: verificacao pratica (uso) | S10, S13 |
| *Q51* | *Ja aplicou orientacao na area* | *Escala Gestao* | *3→4: governanca aplicada* | *S15* |

> *Italico = Score Estendido (apenas Gestao)*

**Interpretacao via CSD:**
- 6 itens no Score Comum, 2 cenarios comportamentais. Mais robusto de todas as dimensoes
- Q25 + Q29 testam facetas diferentes: Q25 = risco de dados confidenciais, Q29 = risco de qualidade de output
- Se Q24 e Q26 altos (dizem que sabem) mas Q25/Q29 comportamentais baixos → Dunning-Kruger
- Score Estendido: Q51 e decisiva para S15. Gestor com score Governanca alto no Comum mas Q51="Nao" → conhece mas nao aplica → nivel 3, nao 4

---

### Dimensao 4 — Impacto no Negocio (Score Comum: 5 itens / Estendido Gestao: 8 itens)

| Item | Pergunta resumida | Tipo | Nivel que discrimina | CSD |
|---|---|---|---|---|
| Q30 | Identifica processo que IA melhoraria | Likert | 1→2→3: identifica oportunidades | S6, S7, D2 |
| Q31 | Explica como IA gera valor na area | Likert | 2→3→4: articula valor | S6, S8 |
| Q32 | Diferencia eficiencia de diferenciacao | Likert | 3→4: visao estrategica | S8, D8 |
| Q33 | Estima tempo/custo que IA economizaria | Likert | 3→4: quantifica impacto | S6, S8 |
| Q34 | Ja sugeriu ideia de IA para gestor/equipe | Likert | 2→3: acao concreta | S6, D2 |
| *Q48* | *Criterio de priorizacao* | *Cenario Gestao* | *1→4: sofisticacao estrategica* | *S8, D8* |
| *Q49* | *Processo de captura de oportunidades* | *Escala Gestao* | *1→4: estruturacao* | *S9* |
| *Q50* | *Preparado para avaliar viabilidade* | *Likert Gestao* | *3→4: avaliacao critica* | *S6, S15* |

> *Italico = Score Estendido (apenas Gestao)*

**Interpretacao via CSD:**
- Q30 alto + Q34 baixo = veem oportunidades mas nao agem → barreira nao e percepcao, e iniciativa
- Q32 baixo + Q33 baixo = nao diferenciam nem quantificam → confirma S8
- Score Estendido: Q48 e o melhor discriminador estrategico. Se gestor marca (a) "economia de custo", pensa em eficiencia (nivel 2-3). Se marca (c) "receita/diferenciacao", pensa em alavanca (nivel 4). Confirma ou refuta D8

---

### Dimensao 5 — Cultura (5 itens, igual para todos)

| Item | Pergunta resumida | Tipo | Nivel que discrimina | CSD |
|---|---|---|---|---|
| Q35 | Interesse ativo em aprender | Likert | 1→2: curiosidade → interesse | S12 |
| Q36 | Nao se sente confortavel recomendando | Likert reverso | 2→3: supera barreiras | S5, S12 |
| Q37 | Ja compartilhou dica com colegas | Likert | 2→3→4: incentivador a agente | S11 |
| Q38 | Experimenta ferramentas novas por conta | Likert | 2→3: proatividade | S12, S2 |
| Q39 | Busca formas de aplicar IA | Likert | 2→3→4: agente de mudanca | S12 |

**Interpretacao via CSD:**
- Q35 alto + Q36 reverso baixo = quer aprender mas nao recomenda → S12 (gap de direcao)
- Q35 alto + Q38 baixo = quer aprender mas nao experimenta → barreira e pratica, nao crenca
- Q38 alto + Q37 alto = proativo e disseminador → candidato a early adopter
- Q36 reverso alto + Q37 baixo = confortavel mas nao compartilha → barreira e oportunidade, nao confianca

---

## Etapa 5 — Identificacao de Early Adopters (S11)

Score separado, usa Score Estendido + dados da Fase 0.5. **Dupla validacao:** score calculado + intencao declarada.

### Score calculado (comportamental)

**Para Execucao:**

| Criterio | Pergunta | Condicao | Pontos |
|---|---|---|---|
| Usa com frequencia | Q8 (Fase 0.5) | = "Diariamente" | +1 |
| Uso com profundidade | Q43 | = opcao (c) "Combino com outras fontes" | +1 |
| Ja automatizou | Q44 | = "Sim, mais de uma vez" | +1 |
| Compartilha aprendizados | Q37 | Likert >= 4 | +1 |

**Maximo: 4 pontos.**

**Para Gestao:**

| Criterio | Pergunta | Condicao | Pontos |
|---|---|---|---|
| Usa com frequencia | Q8 (Fase 0.5) | = "Diariamente" | +1 |
| Processo estruturado | Q49 | = opcao (a) "Tenho processo estruturado" | +1 |
| Aplica governanca | Q51 | = "Sim, com diretrizes formais" | +1 |
| Compartilha aprendizados | Q37 | Likert >= 4 | +1 |

**Maximo: 4 pontos.**

### Classificacao final

Cruzar score calculado com Q42 (interesse em ser multiplicador):

| Score calculado | Q42 | Classificacao | Acao |
|---|---|---|---|
| >= 3 | Interesse alto ("Sim, com certeza") | **Early adopter confirmado** | Prioridade 1 para Germinare |
| >= 3 | Interesse condicionado ("Sim, se tiver suporte") | **Early adopter potencial** | Oferecer suporte e reavaliar |
| >= 2 | Interesse alto | **Entusiasta** | Incluir em trilha avancada |
| >= 3 | Sem interesse | **Adopter silencioso** | Investigar por que nao quer multiplicar |
| < 2 | Qualquer | **Nao e early adopter** | Trilha padrao |

> **CSD:** Se < 15% sao early adopters confirmados → Germinare precisa de mais suporte externo (IONIX). Se > 30% → transformacao mais rapida e barata.

---

## Etapa 6 — Agregacoes e visualizacoes

### 6.1 Por cluster

Para cada dimensao, calcular com **Score Comum** (para comparacao):

| Dimensao | Execucao (media +/- dp) | Gestao (media +/- dp) | Gap |
|---|---|---|---|
| Utilizacao | ? | ? | ? |
| Dados | ? | ? | ? |
| Governanca | ? | ? | ? |
| Impacto | ? | ? | ? |
| Cultura | ? | ? | ? |

> **CSD:** O gap Execucao vs Gestao e o principal output executivo. Se Gestao esta abaixo em Impacto → confirma S6/S7.

### 6.2 Por area/departamento (D1, D3)

Cruzamento Q2 x scores dimensionais (Score Comum). Gera **heatmap area x dimensao**.

- So reportar areas com **n >= 10** (protege anonimato)
- Identifica "bolsoes de maturidade" (D1) e variacao entre areas (D3)

### 6.3 Por geracao (S4)

Cruzamento Q4 x Score Comum de Utilizacao.

> Se Gen Z e Gen Y tem scores similares → confirma S4 ("usa mais" ≠ "usa melhor")

### 6.4 Visualizacoes

- **Radar individual** — 5 eixos, score de 1 a 4 (Score Estendido)
- **Radar de cluster** — media Execucao vs Gestao sobrepostos (Score Comum)
- **Heatmap area x dimensao** — cores por nivel (Score Comum)
- **Distribuicao organizacional** — % em cada nivel, global e por dimensao

---

## Etapa 7 — Validacao de consistencia interna

Apos coleta, calcular **Cronbach's alpha** por dimensao (usar Score Comum):

| Dimensao | Itens | Alpha esperado | Se alpha < 0.6 |
|---|---|---|---|
| Utilizacao | Q12-Q18 (7) | >= 0.7 | Verificar se Q17 (confianca) destoa |
| Dados | Q19-Q23 (5) | >= 0.7 | Q20 pode ter efeito teto — verificar variancia |
| Governanca | Q24-Q29 + Q58-Q60 (9) | >= 0.7 | Robusto — 9 itens, 3 cenarios (Q25, Q29, Q59) |
| Impacto | Q30-Q34 (5) | >= 0.7 | Se alpha baixo, Q32 pode medir algo diferente |
| Cultura | Q35-Q39 (5) | >= 0.7 | Se alpha baixo, Q36 (reverso) pode destoar dos itens de acao |

> Com 5-7 itens por dimensao, alpha >= 0.7 e esperado. Se alguma dimensao ficar < 0.6, reportar e considerar analise item a item.

---

## Etapa 8 — Perguntas que NAO entram em nenhum scoring

Essas perguntas sao descritivas, de diagnostico ou de preferencia:

| Pergunta | Para que serve | Hipotese que valida |
|---|---|---|
| Q1-Q5 | Segmentacao demografica | Variaveis de cruzamento |
| Q6-Q11 | Mapa descritivo de uso | S1, S2, S3 |
| Q40 | Maior barreira (descritiva) | S5, S12 |
| Q41 | Attention check | Controle |
| Q42 | Interesse em multiplicar | S11 (intencao) |
| Q45 | Interesse em treinamento (Exec) | D6 |
| Q46 | Impedimento principal (Exec) | S5, S12 |
| Q47 | Ownership de IA (Gestao) | S7 |
| Q52 | O que ajudaria a decidir (Gestao) | D6 |
| Q53 | Tarefa que nao quer fazer manualmente (obrigatoria) | Backlog |
| Q54 | Tentou IA e nao deu certo | D2, D5 |
| Q55 | O que preocupa sobre IA na Swift | S10, S12, S17 |
| Q56 | Mudar UMA coisa amanha | S12 |
| Q57 | Algo que ninguem perguntou | D2, D5 |
| Q61 | Avaliacao dos mecanismos de governanca da Swift hoje | S17 |

---

## Resumo: mapa completo pergunta → papel no scoring

| Bloco | Perguntas | Score Comum | Score Estendido |
|---|---|---|---|
| Fase 0 — Demograficas | Q1-Q5 | — | — |
| Fase 0.5 — Mapa de uso | Q6-Q11 | — | — |
| **Fase 1 — Utilizacao** | **Q12-Q18** | **Sim (7)** | **Sim (7)** |
| **Fase 1 — Dados** | **Q19-Q23** | **Sim (5)** | **Sim (5)** |
| **Fase 1 — Governanca** | **Q24-Q29, Q58-Q60** | **Sim (9)** | **Sim (9)** |
| **Fase 1 — Impacto** | **Q30-Q34** | **Sim (5)** | **Sim (5)** |
| **Fase 1 — Cultura** | **Q35-Q39** | **Sim (5)** | **Sim (5)** |
| Fase 1 — Controle/Mult. | Q40-Q42 | — | — |
| **Fase 2A — Execucao (scoring)** | **Q43-Q44** | — | **Sim → Utilizacao (+2)** |
| Fase 2A — Execucao (descritivas) | Q45-Q46 | — | — |
| **Fase 2B — Gestao (scoring)** | **Q48-Q51** | — | **Sim → Impacto (+3) e Governanca (+1)** |
| Fase 2B — Gestao (descritivas) | Q47, Q52 | — | — |
| Fase 3 — Abertas | Q53-Q57 | — | — |

### Totais

| | Score Comum | Score Estendido (Exec) | Score Estendido (Gestao) |
|---|---|---|---|
| Itens no scoring | **31** | **33** | **35** |
| Itens fora do scoring | 30 | 28 | 26 |
| **Total pesquisa** | **61** | **61** | **61** |

### Tabela de conversao rapida — todos os itens que entram no scoring

| Pergunta | Dimensao | Tipo | Conversao |
|---|---|---|---|
| Q12 | Utilizacao | Likert padrao | 1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0 |
| Q13 | Utilizacao | Likert padrao | 1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0 |
| Q14 | Utilizacao | Likert padrao | 1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0 |
| Q15 | Utilizacao | Likert padrao | 1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0 |
| Q16 | Utilizacao | **Likert reverso** | **1→4.0, 2→3.0, 3→2.0, 4→1.5, 5→1.0** |
| Q17 | Utilizacao | **Escala confianca** | **1→1.0, 2→2.0, 3→3.0, 4→3.5, 5→2.0** |
| Q18 | Utilizacao | Likert padrao | 1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0 |
| Q19 | Dados | Likert padrao | 1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0 |
| Q20 | Dados | Likert padrao | 1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0 |
| Q21 | Dados | Likert padrao | 1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0 |
| Q22 | Dados | Likert padrao | 1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0 |
| Q23 | Dados | **Cenario** | **d=1.0, a=2.0, b=3.0, c=4.0** |
| Q24 | Governanca | Likert padrao | 1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0 |
| Q25 | Governanca | **Cenario** | **a=1.0, e=1.0, d=2.0, b=3.0, c=4.0** |
| Q26 | Governanca | Likert padrao | 1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0 |
| Q27 | Governanca | Likert padrao | 1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0 |
| Q28 | Governanca | Likert padrao | 1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0 |
| Q29 | Governanca | **Cenario** | **a=1.0, d=2.0, b=2.5, c=4.0** |
| Q58 | Governanca | Likert padrao | 1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0 |
| Q59 | Governanca | **Cenario** | **a=1.0, b=2.0, d=3.0, c=4.0** |
| Q60 | Governanca | Likert padrao | 1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0 |
| Q30 | Impacto | Likert padrao | 1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0 |
| Q31 | Impacto | Likert padrao | 1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0 |
| Q32 | Impacto | Likert padrao | 1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0 |
| Q33 | Impacto | Likert padrao | 1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0 |
| Q34 | Impacto | Likert padrao | 1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0 |
| Q35 | Cultura | Likert padrao | 1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0 |
| Q36 | Cultura | **Likert reverso** | **1→4.0, 2→3.0, 3→2.0, 4→1.5, 5→1.0** |
| Q37 | Cultura | Likert padrao | 1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0 |
| Q38 | Cultura | Likert padrao | 1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0 |
| Q39 | Cultura | Likert padrao | 1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0 |
| *Q43* | *Utilizacao (Exec)* | ***Cenario*** | ***a=1.0, b=2.5, d=3.0, c=4.0*** |
| *Q44* | *Utilizacao (Exec)* | ***Escala*** | ***nunca tentei=1.0, nao visualizo=1.0, possivel=2.0, uma vez=3.0, mais de uma vez=4.0*** |
| *Q48* | *Impacto (Gestao)* | ***Cenario*** | ***e=1.0, d=2.0, a=2.5, b=3.0, c=4.0*** |
| *Q49* | *Impacto (Gestao)* | ***Escala*** | ***d=1.0, e=1.5, c=2.0, b=3.0, a=4.0*** |
| *Q50* | *Impacto (Gestao)* | ***Likert padrao*** | ***1→1.0, 2→1.5, 3→2.0, 4→3.0, 5→4.0*** |
| *Q51* | *Governanca (Gestao)* | ***Escala*** | ***Nao=1.0, pretendo=2.0, informais=3.0, formais=4.0*** |

> *Italico = Score Estendido apenas*

---

## Documentos relacionados

| Arquivo | Conteudo |
|---|---|
| 00-objetivo-e-escopo.md | Objetivo da pesquisa e publico-alvo |
| 01-hipoteses-csd.md | Matriz CSD completa — fundamentacao das hipoteses referenciadas aqui |
| 01-metodologia.md | Design do instrumento e controles de qualidade |
| 02-pesquisa-completa.md | Questionario pronto (Q1-Q57) |
| 03-cross-check-perguntas-csd-matriz.md | Mapeamento bidirecional perguntas ↔ CSD ↔ Matriz |

---

*Documento parte do programa de Transformacao IA Escalavel — Swift x Ionix*
