# Análises Extras — Insights Além do Baseline Planejado

> Documento complementar ao plano de análise original (01-metodologia.md).
> Detalha 10 análises adicionais que os dados da pesquisa já permitem extrair, sem nenhuma pergunta nova.
> Foco: transformar o relatório de diagnóstico descritivo em ferramenta de decisão estratégica.

---

## Contexto

O plano de análise original (01-metodologia.md, seção "Análise Prevista dos Resultados") prevê 9 outputs:

1. Heatmap dimensão × cluster
2. Distribuição nos 4 níveis
3. Radar por cluster
4. Heatmap área × dimensão
5. Análise cruzada (geração, tempo de casa, área)
6. Identificação de early adopters
7. Backlog qualitativo (Q53 + Q34)
8. Gap analysis Execução vs. Gestão
9. Cronbach's alpha por dimensão

Essas 9 análises respondem "onde estamos". As 10 análises extras abaixo respondem **"por que estamos aqui, quem move quem, e onde investir primeiro"**.

---

## Análise 1 — Perfis Latentes (Latent Profile Analysis)

### O que é

Em vez de classificar pessoas em 4 níveis por dimensão isolada, rodar uma LPA (ou k-means como alternativa mais simples) nas 5 dimensões simultaneamente para descobrir **perfis naturais** que emergem dos dados.

### Por que é poderoso

O plano original classifica cada pessoa por dimensão separada. Mas na prática, as dimensões interagem. Uma pessoa com Utilização alta e Governança baixa é um perfil radicalmente diferente de alguém com ambas altas — mesmo que o score geral seja parecido.

Perfis esperados (hipótese a ser validada pelos dados):

| Perfil | Utilização | Dados | Governança | Impacto | Cultura | Característica |
|---|---|---|---|---|---|---|
| **Entusiasta cego** | Alta | Baixa | Baixa | Média | Alta | Usa ChatGPT com dados da empresa sem pensar — risco |
| **Gestor cauteloso** | Baixa | Média | Média | Média | Baixa | Sabe que IA importa, não toca — gargalo silencioso |
| **Operador solitário** | Alta | Alta | Média | Baixa | Baixa | Usa bem mas não compartilha — conhecimento preso |
| **Evangelista superficial** | Média | Baixa | Baixa | Baixa | Alta | Fala muito, faz pouco — falsa sensação de maturidade |
| **Pragmático equilibrado** | Média | Média | Média | Média | Média | Base sólida para avançar — foco do programa |
| **Early adopter real** | Alta | Alta | Alta | Alta | Alta | Multiplicador confirmado — prioridade Germinare |

### Como fazer

1. **Input:** 5 scores comuns (Utilização, Dados, Governança, Impacto, Cultura) por respondente
2. **Método:** K-means clustering (simples) ou Latent Profile Analysis (mais robusto)
3. **Validação:** Silhouette score para definir número ótimo de perfis (testar k=3 a k=8)
4. **Output:** Cada respondente recebe um rótulo de perfil + descrição narrativa

### Ferramentas

- Python: `scikit-learn` (KMeans) ou `tidyLPA` via R
- Alternativa low-code: fazer no próprio Google Sheets com plugin de clustering

### Entrega pro CIO

"Não temos 4 níveis de maturidade — temos 6 tipos de profissional, cada um com uma intervenção diferente."

### Conecta com CSD

- S1 (uso superficial) → perfil "Entusiasta cego"
- S6 (gestores não formulam hipóteses) → perfil "Gestor cauteloso"
- S11 (15-20% early adopters) → perfil "Early adopter real"
- S13 (não avaliam outputs) → perfil "Entusiasta cego" + "Evangelista superficial"

---

## Análise 2 — Índice de Dissonância Cognitiva (Dunning-Kruger Score)

### O que é

Score agregado que mede a distância entre o que a pessoa **diz** que faz (itens Likert de autopercepção) e o que **demonstra** nos cenários comportamentais e itens reversos.

### Por que é poderoso

O plano original usa os cenários e itens reversos para compor o score da dimensão. Mas tratá-los como **par diagnóstico** (Likert vs. cenário) revela algo que o score médio esconde: **quem não sabe que não sabe**.

Esse grupo é o de maior risco operacional — usa IA com confiança alta, mas toma decisões ruins. É também o grupo que mais resiste a capacitação ("já sei usar IA, não preciso de treinamento").

### Como calcular

#### Dissonância em Utilização
```
Likert_medio = média(Q13, Q14, Q15)          # autopercepção: "consigo avaliar, adaptar, corrigir"
Comportamental = Score_Q16_reverso            # demonstração: "acho difícil avaliar" (invertido)
Dissonância_Util = Likert_medio - Comportamental
```

Se positivo → autopercepção > competência real → **Dunning-Kruger**
Se negativo → competência real > autopercepção → **humildade** (pode ser subaproveitado)
Se próximo de zero → **calibrado**

#### Dissonância em Dados
```
Likert_medio = média(Q19, Q21)               # "verifico dados, identifico quais alimentariam IA"
Comportamental = Score_Q23                    # cenário: o que faz primeiro ao analisar vendas
Dissonância_Dados = Likert_medio - Comportamental
```

#### Dissonância em Governança
```
Likert_medio = média(Q24, Q26)               # "sei o que não compartilhar, conheço diretrizes"
Comportamental = média(Score_Q25, Score_Q29)  # cenários: relatório confidencial + e-mail cliente
Dissonância_Gov = Likert_medio - Comportamental
```

#### Índice agregado
```
Dissonância_Total = média(Dissonância_Util, Dissonância_Dados, Dissonância_Gov)
```

### Classificação

| Dissonância Total | Interpretação | Risco | Intervenção |
|---|---|---|---|
| > 1.0 | Dunning-Kruger severo | Alto | Awareness antes de skill — mostrar gaps com evidência |
| 0.5 a 1.0 | Superestima moderada | Médio | Calibração via cenários práticos |
| -0.5 a 0.5 | Calibrado | Baixo | Capacitação técnica direta |
| < -0.5 | Subestima | Baixo (desperdício) | Empoderamento — mostrar que já sabe mais do que pensa |

### Entrega

Mapa de calor **"Confiança × Competência Real"** (quadrante 2x2) por área/departamento:

```
                    Competência Real Alta
                           │
     Subestimado           │        Calibrado/Expert
     (empoderar)           │        (multiplicar)
                           │
 ──────────────────────────┼──────────────────────────
                           │
     Iniciante consciente  │        Dunning-Kruger
     (capacitar)           │        (awareness primeiro)
                           │
                    Competência Real Baixa
```

### Conecta com CSD

- S13 (não avaliam outputs) → Dunning-Kruger em Utilização
- S10 (governança baixa) → Dunning-Kruger em Governança (acham que sabem, cenários mostram que não)
- S3 (não conectam dados) → Dunning-Kruger em Dados
- D4 (confiança nos outputs) → Q17=5 + Dissonância alta = alerta duplo

---

## Análise 3 — Rede de Difusão Informal de IA

### O que é

Modelo de difusão de inovação (Rogers) construído a partir dos dados da pesquisa, sem precisar de survey de rede formal. Identifica nós de difusão, isolados, e amplificadores.

### Dados utilizados

| Pergunta | O que revela |
|---|---|
| Q10 (como começou a usar IA) | Canal de entrada — indica se rede informal já existe |
| Q37 (compartilhou dica com colegas) | Comportamento de difusão |
| Q38 (experimenta ferramentas novas por conta) | Comportamento de adoção |
| Q42 (interesse em multiplicar) | Intenção de difusão |
| Q2 (área/departamento) | Localização na organização |

### Tipologia de nós

| Q38 (experimenta) | Q37 (compartilha) | Tipo | Papel na rede |
|---|---|---|---|
| Alto (≥4) | Alto (≥4) | **Nó de difusão** | Experimenta E espalha — multiplicador natural |
| Alto (≥4) | Baixo (≤2) | **Nó isolado** | Adota mas não dissemina — conhecimento preso |
| Baixo (≤2) | Alto (≥4) | **Amplificador** | Não cria, mas divulga o que ouve — megafone |
| Baixo (≤2) | Baixo (≤2) | **Inativo** | Nem adota nem espalha — público-alvo passivo |

### Como analisar

1. Classificar cada respondente na tipologia acima
2. Calcular distribuição de tipos **por área** (Q2)
3. Cruzar Q10="recomendação de colega" com presença de nós de difusão na mesma área
4. Identificar áreas **sem nós de difusão** = "ilhas" desconectadas da rede informal
5. Cruzar tipo de nó com Q42 (intenção de multiplicar): nós de difusão que querem multiplicar = prioridade absoluta para Germinare

### Entrega

**Mapa de "porosidade organizacional":** quais áreas têm rede informal ativa (conhecimento flui) vs. quais são ilhas (precisam de intervenção externa).

Direciona **onde alocar multiplicadores Germinare** para máximo efeito de rede — não onde há mais early adopters, mas onde early adopters existem E a rede permite difusão.

### Conecta com CSD

- S2 (uso por iniciativa própria) → valida existência de rede informal
- S11 (15-20% early adopters) → nós de difusão ≈ early adopters com rede ativa
- S12 (gap entre querer e saber como) → áreas com amplificadores mas sem nós de difusão

---

## Análise 4 — Perfil Dentado (Assimetria Intra-Respondente)

### O que é

Medir o quão "dentado" é o radar de cada pessoa — ou seja, o **desvio padrão** entre as 5 dimensões de um mesmo respondente.

### Por que é poderoso

O score geral (média das 5 dimensões) esconde perfis perigosos. Alguém com Utilização 3.5 e Governança 1.5 tem score geral 2.5 (Intermediário) — mas é mais perigoso que alguém com 2.0 em tudo, porque **usa muito e governa pouco**.

A dimensão mais fraca **bloqueia** as outras. Sem governança, ampliar utilização é risco. Sem dados, vibe coding produz lixo.

### Como calcular

```
Assimetria = desvio_padrão(Score_Util, Score_Dados, Score_Gov, Score_Impacto, Score_Cultura)
```

### Classificação

| Assimetria (DP) | Perfil | Implicação |
|---|---|---|
| < 0.3 | **Radar redondo** — maturidade equilibrada | Pode avançar em bloco, trilha generalista |
| 0.3 — 0.6 | **Radar levemente dentado** — gaps pontuais | Trilha generalista + módulo específico na dimensão fraca |
| > 0.6 | **Radar muito dentado** — gaps críticos | Intervenção cirúrgica na dimensão limitante antes de avançar |

### Análise adicional: Dimensão Limitante

Para cada respondente com assimetria > 0.3, identificar **qual** dimensão é a mais baixa (= limitante).

Agregar por grupo:

| Grupo | Dimensão limitante mais frequente | Implicação |
|---|---|---|
| Analistas | ? | Se Dados → capacitação em data literacy antes de vibe coding |
| Gerentes | ? | Se Impacto → training estratégico urgente (confirma S6) |
| Área X | ? | Se Governança → compliance risk, priorizar |

### Entrega

"Dimensão limitante" por respondente e por grupo. Permite capacitação cirúrgica: **"Analistas da área X precisam de módulo de Governança antes de qualquer avanço em Utilização."**

### Conecta com CSD

- S6 (gestores não formulam hipóteses) → Impacto como dimensão limitante do cluster Gestão
- S10 (governança baixa) → Governança como limitante global
- S3 (não conectam dados) → Dados como limitante do cluster Execução

---

## Análise 5 — ORI (Organizational Readiness Index)

### O que é

Índice único ponderado pela criticidade de cada dimensão para o funcionamento da esteira de produção de IA.

### Racional

As 5 dimensões não são igualmente importantes para a esteira funcionar. Governança baixa é mais bloqueante que Cultura baixa (compliance risk bloqueia escala). Dados é mais bloqueante que Utilização (sem data literacy, qualquer solução de IA produz lixo).

O score geral atual (média simples) trata todas as dimensões como igualmente importantes. O ORI corrige isso.

### Pesos propostos

| Dimensão | Peso | Justificativa |
|---|---|---|
| Governança | 0.25 | **Bloqueante:** sem isso, ampliar uso é risco de compliance |
| Dados | 0.25 | **Bloqueante:** sem isso, IA produz outputs de baixa qualidade |
| Impacto no Negócio | 0.20 | **Pipeline:** esteira depende de hipóteses bem formuladas |
| Utilização | 0.15 | **Importante mas não bloqueante:** pode ser desenvolvida com as demais |
| Cultura | 0.15 | **Acelerador:** facilita adoção, mas não bloqueia se as outras estiverem altas |

### Fórmula

```
ORI = 0.25 × Score_Governança + 0.25 × Score_Dados + 0.20 × Score_Impacto + 0.15 × Score_Utilização + 0.15 × Score_Cultura
```

Usar Score Comum para comparabilidade.

### Faixas de interpretação

| ORI | Interpretação | Recomendação |
|---|---|---|
| < 1.5 | **Não pronta** — riscos fundamentais | Programa de fundamentos (governança + dados) antes de qualquer expansão |
| 1.5 — 2.0 | **Pré-condições parciais** | Intervenções específicas nas dimensões bloqueantes |
| 2.0 — 2.5 | **Base suficiente** | Programa de capacitação pode iniciar com acompanhamento |
| 2.5 — 3.0 | **Pronta para escalar** | Ativar esteira com pilotos + Germinare |
| > 3.0 | **Madura** | Escala completa, foco em casos avançados |

### Decomposição do ORI

Para cada ponto perdido, mostrar de onde vem:

```
Exemplo: ORI = 2.1

Decomposição:
- Governança (peso 0.25): Score 1.8 → contribui 0.45 / máximo 1.0 → gap de 0.55
- Dados (peso 0.25): Score 2.0 → contribui 0.50 / máximo 1.0 → gap de 0.50
- Impacto (peso 0.20): Score 2.3 → contribui 0.46 / máximo 0.8 → gap de 0.34
- Utilização (peso 0.15): Score 2.5 → contribui 0.38 / máximo 0.6 → gap de 0.23
- Cultura (peso 0.15): Score 2.8 → contribui 0.42 / máximo 0.6 → gap de 0.18

Total gap = 1.80 → maior gap vem de Governança (0.55) e Dados (0.50)
→ "Investir R$1 em Governança gera mais retorno de prontidão que R$1 em Cultura"
```

### Entrega pro CIO

Um número único: **"A Swift tem ORI de X/4.0"** — com decomposição mostrando onde cada ponto perdido vem. Muito mais acionável que 5 scores separados para decisão de investimento.

### Conecta com CSD

- S10 (governança baixa) → se confirmada, é a maior contribuinte do gap no ORI
- S6 (gestores sem hipóteses) → Impacto puxa o ORI pra baixo no cluster Gestão
- S3 (não conectam dados) → Dados puxa ORI pra baixo no cluster Execução

---

## Análise 6 — Barreiras como Variável Mediadora

### O que é

Usar Q40 (maior barreira) e Q46 (impedimento principal — Execução) não como descritivas, mas como **variável mediadora** em modelos de regressão. Testar se a barreira **explica** a diferença de maturidade entre pessoas com perfil demográfico similar.

### Racional

O plano original cruza maturidade com geração, tempo de casa, cargo e área. Mas duas pessoas do mesmo cargo/geração/tempo de casa podem ter maturidades muito diferentes. A **barreira** declarada pode explicar o porquê — e, mais importante, indicar qual tipo de intervenção resolve.

### Modelo

```
Score_Maturidade = β₀ + β₁(Cargo) + β₂(Geração) + β₃(Tempo_casa) + β₄(Barreira_principal) + ε
```

Testar:
- β₄ significativo → barreira é preditora independente de maturidade
- β₁ perde significância ao incluir β₄ → barreira **media** o efeito do cargo (i.e., não é o cargo que importa, é a barreira que vem com ele)

### Categorias de barreira (Q40)

| Barreira | Tipo de intervenção |
|---|---|
| "Não sei por onde começar" | **Curadoria:** trilha de entrada clara + primeiro passo guiado |
| "Falta de ferramentas aprovadas" | **Infraestrutura:** TI precisa aprovar/disponibilizar ferramentas |
| "Falta de tempo" | **Processo:** integrar IA ao fluxo existente, não como tarefa extra |
| "Medo de cometer erros" | **Segurança psicológica:** sandbox para experimentar sem risco |
| "Preocupação com impacto no emprego" | **Comunicação:** narrativa "IA como copiloto, não substituto" |
| "Gestor não incentiva" | **Liderança:** ativar gestores como patrocinadores (liga com S6/S7) |
| "Não se aplica ao meu trabalho" | **Relevância:** mostrar casos reais da área da pessoa |

### Entrega

Não apenas "quais são as barreiras" (isso já está planejado como descritiva), mas **"qual barreira está impedindo qual grupo de chegar ao próximo nível"** — decisão de investimento.

Exemplo de output:

> "Analistas Gen Y com 3-5 anos de casa estão travados no Nível 2 → 3 em Utilização. A barreira que mais discrimina esse grupo é 'falta de ferramentas aprovadas' (43% deles selecionaram essa opção vs. 18% da organização). Resolver acesso a ferramentas destrava esse grupo inteiro."

### Conecta com CSD

- S5 (medo de substituição) → barreira "impacto no emprego" como mediadora de Cultura
- S12 (gap entre querer e saber) → barreira "não sei por onde começar" como mediadora de Cultura e Utilização
- S7 (IA como coisa de TI) → barreira "não se aplica" mais frequente onde Q47="IT/Data deve ser responsável"

---

## Análise 7 — Text Mining nas Abertas (Q53-Q57)

### O que é

Análise estruturada das respostas abertas usando categorização semântica, análise de sentimento, e cruzamento com scores quantitativos.

### Por que vai além do planejado

O plano original trata Q53 como "backlog qualitativo" — listar tarefas que as pessoas não querem fazer. Mas 198 respostas textuais (Q53 obrigatória) + até 4 opcionais por pessoa permitem análise muito mais rica.

### Método por questão

#### Q53 — "Tarefa que mais quero nunca mais fazer manualmente"

1. **Categorização semântica** (via Claude API ou manual): tipo de tarefa (operacional, analítica, comunicação, decisão), área de negócio, complexidade estimada
2. **Frequência × viabilidade:** rankear processos por quantas vezes aparecem × estimativa de viabilidade técnica com IA
3. **Cruzar com score do respondente:** quem tem score alto sugere tarefas mais complexas? Ou o oposto? (testa se maturidade = melhor formulação de problemas)

**Output:** "Top 10 processos candidatos para Pipeline" rankeados por frequência × viabilidade

#### Q54 — "Vez que tentei IA e não funcionou"

1. **Categorização de falha:** expectativa irreal, prompt ruim, dados inadequados, ferramenta errada, limitação real da IA
2. **Análise de modelos mentais:** o que esperavam que funcionasse e por quê → revela misconceptions a serem tratadas na capacitação

**Output:** "Top 5 misconceptions sobre IA na Swift" — calibra comunicação do programa

#### Q55 — "O que me preocupa sobre IA na Swift"

1. **Análise de sentimento:** medo (perda de emprego), frustração (falta de suporte), ceticismo (não funciona), resistência informada (riscos legítimos)
2. **Cruzar sentimento com score de maturidade:** quem sabe mais tem medo diferente de quem sabe menos?

**Output:** Matriz "Preocupação × Maturidade" — diferencia medos fundados (endereçar com governança) de medos infundados (endereçar com educação)

#### Q56 — "Se pudesse mudar UMA coisa amanhã"

1. **Categorização:** infraestrutura, política, cultura, capacitação, processo, liderança
2. **Análise de frequência:** qual categoria concentra mais menções?
3. **Cruzar com área:** cada área tem uma "dor" dominante?

**Output:** "A mudança #1 pedida pela organização é [X]" — ação de quick win para comunicação do programa

#### Q57 — "Algo que ninguém perguntou"

1. **Scan para surpresas:** ideias, preocupações, ou contexto que não está coberto pelo instrumento
2. **Identificar temas emergentes** que nenhuma hipótese CSD previu

**Output:** Lista de "blind spots" — hipóteses que deveriam ter existido

### Ferramentas

- Categorização via Claude API (batch de 198 textos, prompt com taxonomia pré-definida)
- Alternativa: categorização manual com 2 codificadores + kappa de concordância
- Visualização: word cloud categorizada por dimensão da Matriz (não genérica)

### Conecta com CSD

- D2 (processos candidatos por percepção) → Q53 é a fonte primária
- D5 (experiências negativas) → Q54 revela
- S5 (medo/ansiedade) → Q55 quantifica e qualifica
- S12 (gap de direção) → Q56 mostra o que resolveria

---

## Análise 8 — Pipeline Readiness Score por Área

### O que é

Score composto que indica quão **pronta** cada área está para entrar na esteira de produção de IA com pilotos do Pod Volante.

### Racional

Não é só "quem sabe mais" que deve entrar primeiro. É quem tem a combinação de: maturidade suficiente + problemas concretos identificados + multiplicadores internos para sustentar.

### Fórmula

```
Pipeline_Readiness = ORI_médio_da_área × Densidade_processos × Densidade_early_adopters
```

Onde:
- **ORI_médio_da_área** = média do ORI (Análise 5) dos respondentes da área
- **Densidade_processos** = quantidade de processos candidatos citados em Q53 pela área / headcount da área
- **Densidade_early_adopters** = % de early adopters confirmados na área (Etapa 5 do algoritmo de scoring)

### Normalização

Cada componente é normalizado para 0-1 antes de multiplicar:
```
Componente_norm = (valor - min) / (max - min)
Pipeline_Readiness = ORI_norm × Processos_norm × Adopters_norm
```

Score final varia de 0 a 1.

### Interpretação

| Pipeline Readiness | Interpretação | Recomendação |
|---|---|---|
| > 0.6 | **Área piloto ideal** | Prioridade 1 para Pod Volante |
| 0.3 — 0.6 | **Área com potencial** | Necessita preparação pontual antes de pilotar |
| < 0.3 | **Área não pronta** | Capacitação base antes de considerar para pipeline |

### Entrega

**"As 3 áreas mais prontas para pilotos do Pod Volante são X, Y, Z — porque têm maturidade suficiente, problemas concretos identificados, e multiplicadores internos para sustentar."**

Decisão de alocação de recurso escasso (Pod Volante = 1 DBA + 1 Swift rotativo + 0.5 FTE).

### Conecta com CSD

- D1 (áreas com iniciativas informais) → áreas com alta densidade de early adopters
- D2 (processos candidatos) → Q53 alimenta o componente de processos
- D3 (variação entre áreas significativa?) → o score mostra se há dispersão ou não

---

## Análise 9 — Efeito Manada (Conformidade Intra-Equipe)

### O que é

Medir o **coeficiente de variação** (CV = desvio padrão / média) dos scores **dentro de cada área/departamento**. Identifica se a maturidade é moldada pelo gestor/cultura da área ou pela iniciativa individual.

### Como calcular

Para cada área com n ≥ 10:

```
CV_área = desvio_padrão(scores gerais dos respondentes da área) / média(scores da área)
```

Calcular também por dimensão para granularidade.

### Interpretação

| CV | Perfil da área | Locus de influência | Intervenção |
|---|---|---|---|
| < 0.15 | **Equipe homogênea** — cultura da área domina | **Gestor** | Se score alto: escalar o que o gestor faz. Se score baixo: ativar o gestor primeiro |
| 0.15 — 0.25 | **Equipe mista** | **Ambos** | Combinar intervenção no gestor com peer-to-peer |
| > 0.25 | **Equipe heterogênea** — variação individual | **Indivíduo** | Peer-to-peer, pair work, multiplicadores internos à área |

### Cruzamento com Q10

Em áreas com CV baixo, Q10 (como começou a usar IA) tende a concentrar-se em:
- "Incentivo da empresa/gestor" → cultura top-down confirma efeito manada

Em áreas com CV alto, Q10 tende a distribuir-se mais em:
- "Iniciativa própria" ou "recomendação de colega" → adoção bottom-up, independente do gestor

### Cruzamento com Q47 (apenas Gestão)

Se o gestor da área respondeu Q47="IT/Data deve ser responsável" E a área tem CV baixo e score baixo → o gestor está **ativamente bloqueando** adoção por delegation mindset.

### Entrega

**Mapa de "locus de influência":** onde a alavanca é o gestor vs. onde a alavanca é o indivíduo.

Exemplo:
> "Na área Financeira (CV=0.12), todos estão em Nível 2. O gestor respondeu que IA é responsabilidade de TI. Intervenção: ativar o gestor primeiro — sem ele, a equipe não se move."
> "Na área Comercial (CV=0.31), há early adopters e iniciantes no mesmo time. Intervenção: pair work entre os que já usam e os que não usam."

### Conecta com CSD

- S7 (IA como coisa de TI) → CV baixo + Q47="IT" = evidência forte de S7 naquela área
- S2 (uso por iniciativa própria) → CV alto = adoção orgânica individual
- D3 (variação entre áreas significativa?) → CV entre áreas responde isso diretamente

---

## Análise 10 — Modelo Preditivo para T2 (Propensão a Evoluir)

### O que é

Com os dados de T1, construir um modelo de **propensão a evoluir** — prever quais respondentes têm maior probabilidade de subir de nível após 90 dias de programa.

### Por que construir agora

Se construído **antes** de T2, o modelo permite:
1. **Testar prospectivamente:** "Previmos que estes 40 profissionais evoluiriam mais. Acertamos?"
2. **Isolar o efeito do programa:** Separar evolução orgânica (aconteceria de qualquer forma) de evolução atribuível à capacitação
3. **Identificar quem precisa de mais atenção:** Quem o modelo prevê que não evoluiria pode receber intervenção extra

### Variáveis preditoras (todas disponíveis em T1)

| Variável | Fonte | Hipótese |
|---|---|---|
| Score T1 (por dimensão) | Score Comum | Quem está perto do threshold do próximo nível tem mais chance de subir |
| Barreira principal | Q40/Q46 | "Não sei por onde começar" evolui mais que "medo de impacto no emprego" (barreira solucionável vs. atitudinal) |
| Geração | Q4 | Gen Z pode evoluir mais rápido (fluência digital) |
| Early adopter score | Etapa 5 | Early adopters evoluem mais (mas já estão mais altos — efeito teto?) |
| Dissonância | Análise 2 | Calibrados evoluem mais que Dunning-Kruger (sabem o que não sabem) |
| CV da área | Análise 9 | Áreas com CV alto (heterogêneas) permitem mais evolução individual |
| Perfil latente | Análise 1 | Alguns perfis são naturalmente mais "móveis" que outros |

### Método

- **Regressão logística ordinal** (outcome = mudou de nível sim/não, ou quantos níveis subiu)
- Alternativa: **Random Forest** se a amostra permitir (n=198 é limitante — considerar apenas variáveis mais fortes)
- **Validação:** Leave-one-out cross-validation (dado n pequeno)

### Output em T1 (antes do programa)

Para cada respondente:
```
Probabilidade_evolução = 0.73  (alta)
Fatores positivos: perto do threshold (2.4), barreira solucionável, área com CV alto
Fatores negativos: dissonância moderada
Recomendação: trilha padrão, provavelmente evolui naturalmente
```

### Output em T2 (após 90 dias)

Comparar previsão com realidade:

| Grupo | Previsão média | Evolução real | Delta | Interpretação |
|---|---|---|---|---|
| Participou da capacitação | 0.55 | 0.72 | +0.17 | **Programa acelerou evolução** |
| Não participou | 0.55 | 0.48 | -0.07 | **Evolução orgânica menor que prevista** |

### Entrega pro CIO

Na reaplicação T2, não reportar só *"maturidade subiu de 2.1 para 2.8"*. Reportar: **"Maturidade subiu 0.7 pontos, sendo ~0.3 atribuíveis ao programa e ~0.4 à evolução orgânica esperada. ROI do investimento em capacitação: X."**

### Conecta com CSD

- Todas as hipóteses S1-S15 confirmadas ou refutadas em T1 alimentam o modelo
- T2 valida se as intervenções baseadas no CSD foram eficazes
- Modelo preditivo transforma a pesquisa de diagnóstico pontual em **instrumento de gestão contínua**

---

## Resumo: Prioridade de Implementação

| # | Análise | Complexidade | Impacto | Dados necessários | Quando rodar |
|---|---|---|---|---|---|
| **1** | **Perfis Latentes (LPA)** | Média | Muito alto | Scores comuns (5 dim.) | Após scoring T1 |
| **2** | **Índice de Dissonância** | Baixa | Alto | Likert + cenários + reversos | Após scoring T1 |
| **3** | **Pipeline Readiness por Área** | Baixa | Muito alto | ORI + Q53 + early adopters | Após análises 5 e 6 |
| **4** | **ORI ponderado** | Baixa | Alto | Scores comuns (5 dim.) | Após scoring T1 |
| **5** | **Perfil Dentado (assimetria)** | Baixa | Médio-alto | Scores comuns (5 dim.) | Após scoring T1 |
| **6** | **Text Mining Q53-Q57** | Média | Alto | Respostas abertas | Paralelo ao scoring |
| **7** | **Efeito Manada (CV)** | Baixa | Médio-alto | Scores + Q2 | Após scoring T1 |
| **8** | **Barreiras como mediadora** | Média | Médio | Scores + Q40/Q46 | Após scoring T1 |
| **9** | **Rede de Difusão** | Média | Médio | Q10, Q37, Q38, Q42, Q2 | Após scoring T1 |
| **10** | **Modelo Preditivo T2** | Alta | Muito alto (a posteriori) | Todos os anteriores | Antes de T2 |

### Sequência recomendada

```
Coleta T1
    │
    ├── Scoring (algoritmo existente)
    │       │
    │       ├── Análise 4 (ORI) ─────────────────────┐
    │       ├── Análise 5 (Perfil Dentado) ───────────┤
    │       ├── Análise 2 (Dissonância) ──────────────┤
    │       ├── Análise 7 (Efeito Manada) ────────────┤
    │       └── Análise 9 (Rede de Difusão) ──────────┤
    │                                                  │
    ├── Análise 6 (Text Mining) ──────────────────────┤
    │                                                  │
    └── Análise 1 (Perfis Latentes) ──────────────────┤
                                                       │
                                                       ▼
                                           Análise 3 (Pipeline Readiness)
                                           Análise 8 (Barreiras como mediadora)
                                                       │
                                                       ▼
                                           Análise 10 (Modelo Preditivo)
                                                       │
                                                       ▼
                                                   Coleta T2
                                                       │
                                                       ▼
                                           Validação do modelo + ROI
```

---

## Documentos relacionados

| Arquivo | Conteúdo |
|---|---|
| 00-objetivo-e-escopo.md | Objetivo da pesquisa e público-alvo |
| 01-hipoteses-csd.md | Matriz CSD completa — hipóteses referenciadas aqui |
| 01-metodologia.md | Design do instrumento e análises originais (9 outputs) |
| 02-pesquisa-completa.md | Questionário pronto (Q1-Q57) |
| 03-cross-check-perguntas-csd-matriz.md | Mapeamento bidirecional perguntas ↔ CSD ↔ Matriz |
| 04-algoritmo-de-scoring.md | Conversões, composição, faixas de corte, early adopters |

---

*Documento parte do programa de Transformação IA Escalável — Swift × IONIX*
*Análises complementares desenhadas para extrair o máximo dos dados já coletados pelo instrumento existente*
