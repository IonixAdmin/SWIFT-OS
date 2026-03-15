# Análise do Perfil Demográfico da Swift — Implicações para a Transformação em IA

## Contexto

A Swift possui ~198 colaboradores mapeados neste recorte demográfico. Estes dados devem ser cruzados com o projeto de transformação em IA escalável (3 pilares: esteira de produção, squad interna, Pod Volante) e com a Matriz de Letramento em IA (4 níveis: Iniciante → Básico → Intermediário → Avançado, em 5 dimensões).

---

## Composição Geracional

| Geração | Qtd | % | Período |
|---|---|---|---|
| Geração Y (Millennials) | 114 | 58% | 1981–1996 |
| Geração Z | 46 | 23% | 1997–2010 |
| Geração X | 34 | 17% | 1965–1980 |
| Baby Boomers | 4 | 2% | 1946–1964 |

**Média geral de tempo de casa:** 5 anos.

---

## Distribuição por Cargo e Geração

| Cargo | Baby Boomers | Gen X | Gen Y | Gen Z | Total | Tempo de Casa (média) |
|---|---|---|---|---|---|---|
| Assistente | — | 7 | 6 | — | ~13 | 3.71 anos |
| Analista | 11 | 36 | 52 | — | ~99 | 4.87 anos |
| Especialista | 1 | 2 | 15 | — | ~18 | 5.54 anos |
| Coordenador | — | 5 | 19 | 1 | ~25 | 5.11 anos |
| Gerente | — | 1 | 12 | 18 | ~31 | 8.88 anos |
| Diretor | 1 | — | 3 | 5 | ~9 | 8.64 anos |

> **Nota:** Os valores da Gen Z aparecem distribuídos nos gráficos de barra mas não são discriminados com clareza em todos os cargos. Os totais são aproximados a partir da leitura visual.

---

## Análise Estratégica

### 1. Terreno fértil para adoção — mas o desafio é profundidade, não abertura

81% do time é Gen Y + Gen Z. A resistência cultural clássica a ferramentas de IA tende a ser baixa. O risco real não é o pessoal "não querer usar", mas ficar no nível superficial — o que a Matriz de Letramento classifica como **Básico** (uso pontual de ChatGPT para gerar texto, sem entender dados ou governança).

**Implicação:** O programa de letramento precisa empurrar esse público de "usuário casual" para "intermediário/avançado" rápido, focando em **dados e impacto no negócio**, não em ferramentas.

### 2. Analistas são a maior alavanca — e o maior gargalo

Analistas representam ~50% do headcount (~99 pessoas), com média de 4.87 anos de casa. Esse é o público-alvo natural do **Pod Volante** e da capacitação em vibe coding (N8N, Lovable, Lindy). São eles que vão formular hipóteses, testar e alimentar a esteira de produção.

O tempo de casa médio indica que conhecem bem o negócio, mas podem estar acomodados em processos existentes.

**Implicação:** A capacitação técnica distribuída precisa ser desenhada especificamente para esse grupo — com **casos reais da Swift**, não workshops genéricos. Pair work e experimentação prática > slides e teoria.

### 3. Liderança com alto tempo de casa — letramento estratégico, não operacional

Gerentes (~8.88 anos) e Diretores (~8.64 anos) são predominantemente Gen X e Gen Y seniores. Eles não vão usar N8N — mas precisam saber **priorizar hipóteses, avaliar viabilidade e construir narrativa pro board**.

Na Matriz de Letramento, o foco pra esse público deveria ser as dimensões de **Impacto no Negócio** e **Governança**, não Utilização.

**Implicação:** O gap de letramento na camada de coordenação/gerência pode ser o bottleneck silencioso — se os gerentes não sabem formular boas hipóteses, a esteira não recebe matéria-prima de qualidade.

### 4. Geração Z como multiplicadores naturais

23% do time é Gen Z, concentrada nos níveis de Assistente e Analista. Esse grupo tem fluência digital nativa e tende a ser o mais receptivo a ferramentas de IA. Podem atuar como **multiplicadores internos** após capacitação inicial.

**Implicação:** Integrar Gen Z ao programa Germinare como "embaixadores de IA" nas áreas — acelera a disseminação de cultura sem sobrecarregar o Pod Volante.

---

## Recomendação: 3 Trilhas de Letramento Diferenciadas

| Trilha | Público-alvo | Foco | Formato | Volume |
|---|---|---|---|---|
| **Operacional / Hands-on** | Assistentes + Analistas | Vibe coding, experimentação, prototipagem rápida | Workshops práticos + pair work com Pod Volante | ~112 pessoas |
| **Product Thinking + IA** | Especialistas + Coordenadores | Traduzir problemas em hipóteses testáveis, definir métricas | Cases reais + mentoria | ~43 pessoas |
| **Estratégica** | Gerentes + Diretores | Priorização, governança, narrativa para board, avaliação de viabilidade | Advisory + letramento executivo | ~40 pessoas |

A **Germinare** pode ser o veículo para escalar as duas primeiras trilhas.

---

## Riscos Identificados

- **Falsa sensação de maturidade:** Time jovem e digital ≠ time preparado para IA aplicada ao negócio. Sem profundidade em dados e governança, a adoção fica cosmética.
- **Bottleneck na gerência:** Se a camada de coordenação e gerência não for letrada em IA, a esteira de produção não recebe hipóteses de qualidade e as decisões de priorização ficam subjetivas.
- **Rotatividade no nível de Analista:** Com média de ~5 anos de casa, existe risco de turnover justamente no grupo que mais será capacitado. Documentação e processos da esteira mitigam dependência de pessoas específicas.