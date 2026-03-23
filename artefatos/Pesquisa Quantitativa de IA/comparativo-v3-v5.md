# Pesquisa de Maturidade em IA — Comparativo V3 → V5

> **Preparado por:** IONIX
> **Data:** 22/03/2026
> **Objetivo:** Documentar a evolução da pesquisa quantitativa de maturidade em IA da Swift da V3 à V5, com mapeamento preciso de cada alteração, para suporte à comunicação com o cliente.

---

## Visão Executiva

A pesquisa evoluiu de um formulário extenso (~36 perguntas por cluster) com linguagem numérica e seções genéricas, para dois formulários calibrados por público (V5: **26 perguntas — Execução** e **31 perguntas — Gestão**), 100% descritivos, com perguntas abertas estratégicas e uma nova camada de análise: a **Curva de Adoção de Rogers**. O tempo de preenchimento caiu de ~10–12 minutos para ~7 minutos, com aumento significativo na qualidade diagnóstica.

---

## Painel Comparativo Geral

| Aspecto | V3 | V5 | Impacto |
|---------|----|----|---------|
| **Perguntas por formulário** | ~36 (iguais para ambos os clusters) | 26 (Exec) / 31 (Gestão) | Menor carga cognitiva, maior precisão por público |
| **Diferenciação por cluster** | Apenas as 4–5 últimas perguntas diferem | Diferenciação distribuída em todas as dimensões | Diagnóstico muito mais preciso por perfil de responsabilidade |
| **Formato das respostas** | Likert numérico (1–5) + cenários de 3–5 linhas | 100% descritivo — cada opção narra um comportamento concreto | Elimina viés de interpretação; o respondente se reconhece na descrição |
| **Níveis de maturidade** | 4 (Iniciante → Avançado) | 4 (Iniciante → Avançado) + 5.º para Expert em algumas dimensões | Maior resolução na ponta superior |
| **Mapa de Uso Atual** | Presente (Q6–Q10, com lógica condicional) | Removido | Elimina seção com baixo valor diagnóstico e alto custo em tempo |
| **Perguntas de cenário** | 3 cenários longos (Q17, Q23, Q25) | Removidos — convertidos em perguntas diretas descritivas | Reduz ambiguidade e fadiga de leitura |
| **Pergunta de controle** | Q41 (atenção) | Removida | Desnecessária com o novo formato descritivo |
| **Perguntas abertas** | 3 (Q53, Q54, Q57 — dispostas no final, misturadas) | 3 estruturadas com papéis claros (A1 obrigatória, A2–A3 opcionais) | A1 alimenta diretamente o backlog da esteira |
| **Codificação** | Q1–Q64 (sequencial sem referência à dimensão) | U/D/G/I/C por dimensão | Facilita análise longitudinal e rastreamento por pilar |
| **Curva de Adoção (Rogers)** | Não existia | Nova aba no design doc — classifica cada respondente em 5 segmentos | Identifica multiplicadores naturais para a Germinare |
| **Abas no design doc** | 6 (Visão Geral, Matriz, Hipóteses, Perguntas, Scoring, Conexões) | 7 (+ Clusters e + Adoção, remove Conexões) | Novo painel exclusivo para Curva de Rogers |
| **Tempo estimado** | ~10–12 min | ~7 min | Mesma cobertura, menor esforço |

---

## Estrutura dos Formulários

### V3 — Seções (mesmas para ambos os clusters, exceto o Aprofundamento)

| Seção | Perguntas | Obs. |
|-------|-----------|------|
| Identificação | Q1 (CPF) | |
| Mapa de Uso Atual | Q6, Q7, Q9, Q10 | **Removido na V5** — condicional se Q6='Sim' |
| Utilização de IA | Q62, Q12, Q15, Q17*, Q18, Q44 | *cenário |
| Dados e IA | Q19, Q22, Q23* | *cenário |
| Governança e Ética | Q24, Q25*, Q27, Q28, Q58 | *cenário |
| Impacto e Valor | Q30, Q31, Q32, Q34 | |
| Cultura e Engajamento | Q37, Q38, Q39 | |
| Controle | Q40, Q41, Q42 | **Removido na V5** |
| Aprofundamento Exec | Q43, Q63, Q64, Q45 | **Substituído na V5 por diferenciação distribuída** |
| Aprofundamento Gestão | Q47, Q48, Q49, Q51 | **Substituído na V5 por diferenciação distribuída** |
| Perguntas Abertas | Q53, Q54, Q57 | Mantidas e renomeadas (A1–A3) |

### V5 — Formulário Execução (26 perguntas)

| Fase | IDs | Perguntas |
|------|-----|-----------|
| Identificação | Q1, Q2 | CPF + Cursos de IA (novo) |
| Utilização | U1, U2, U3, **U4-exec**, U5 | 5 perguntas (U4 e U5 novos) |
| Dados | D1, **D2-exec**, D3, D4 | 4 perguntas (D2 cluster-specific) |
| Governança | G1, **G2-exec**, G3 | 3 perguntas (G2 cluster-specific, G3 novo) |
| Impacto | I1, **I2-exec**, I3, I4 | 4 perguntas (I2 cluster-specific) |
| Cultura | C1, C2, C3 | 3 perguntas |
| Abertas | A1, A2, A3 | 3 abertas (A1 obrigatória) |

### V5 — Formulário Gestão (31 perguntas)

| Fase | IDs | Perguntas |
|------|-----|-----------|
| Identificação | Q1, Q2 | CPF + Cursos de IA (novo) |
| Utilização | U1, U2, U3, **U4-gestão**, U5 | 5 perguntas (U4 visão da equipe) |
| Dados | D1, **D2-gestão**, D3, D4 | 4 perguntas (D2 prontidão da área) |
| Governança | G1, **G2-gestão**, G3, **G4**, **G5** | 5 perguntas (+2 exclusivas de Gestão) |
| Impacto | I1, **I2-gestão**, I3, I4, **I5** | 5 perguntas (+1 checkbox de priorização) |
| Cultura | C1, C2, C3, **C4** | 4 perguntas (+1 exclusiva de Gestão) |
| Abertas | A1, A2, A3 | 3 abertas (A1 obrigatória) |

---

## Mapeamento Pergunta a Pergunta: V3 → V5

### Dimensão Utilização

| V3 | Texto resumido V3 | V5 | O que mudou |
|----|-------------------|----|-------------|
| Q12 | Uso IA regularmente (Likert concordo/discordo) | **U1** | Convertida para descritiva com frequência de uso real |
| Q15 | Avalio resultados e ajusto pedidos (Likert) | **U2** | Reformulada: como o respondente lida com o output da IA |
| Q62 | Nível de entendimento conceitual (escala a/b/c/d) | *(removida)* | Absorvida por D1 (entendimento do funcionamento) |
| Q18 | Já usei IA para decisão importante (Likert) | *(removida)* | Absorvida em U1 e U2 com maior precisão |
| Q44 | Automatizei alguma tarefa (escala) | *(removida)* | Substituída por U4 (amplitude de uso por tarefas) |
| Q43 *(Aprofundamento Exec)* | Como usa IA no dia a dia (cenário) | **U4-exec** | Convertida: quantas tarefas diferentes já usou |
| *(nova)* | — | **U4-gestão** | Nova: % da equipe que usa IA regularmente |
| Q40 | Maior barreira para usar IA (descritiva) | **U5** | Expandida: adiciona opção "Não sei se posso usar" (permissão/política) |
| *(nova)* | — | **U3** *(reformulada)* | Familiaridade com prompt engineering — central para a V5 |

### Dimensão Dados

| V3 | Texto resumido V3 | V5 | O que mudou |
|----|-------------------|----|-------------|
| Q22 + Q19 | Verifico dados; identifico e preparo dados (Likert) | **D1** | Consolidadas em: entendimento de como a IA funciona |
| Q23 *(cenário vendas)* | Cenário vendas — o que faz primeiro? | **D4** | Convertida para radio descritivo: reação a resultado inesperado |
| Q19 | Identifico dados relevantes e preparo antes de usar IA | **D2-exec** | Aprofundada: capacidade prática de preparar dados (exec) |
| Q49 *(Aprofundamento Gestão)* | Processo de captura de ideias na área | **D2-gestão** | Reformulada: dados da área organizados para alimentar IA |
| *(nova)* | — | **D3** | Nova: identificar problemas de qualidade nos dados |

### Dimensão Governança

| V3 | Texto resumido V3 | V5 | O que mudou |
|----|-------------------|----|-------------|
| Q24 | Sei o que NÃO compartilhar com IA pública (Likert) | **G1** | Reformulada: preocupação ao usar IA com dados de clientes |
| Q17 + Q27 *(cenário)* | Verifica relatório gerado por IA; verifica com outras fontes | **G2-exec** | Mescladas (merge Q17+Q22+Q27) em verificação de entrada e saída |
| Q51 *(Aprofundamento Gestão)* | Já aplicou orientação de IA na área | **G2-gestão** | Reformulada: sabe quais informações NÃO devem ir para IA pública |
| Q28 | Saberia identificar responsável se IA errasse (Likert) | **G3** | Reformulada: pergunta de **explicabilidade** — consegue explicar como a IA chegou ao resultado |
| Q58 | Conheço riscos éticos e legais, viés, LGPD (Likert) | **G4-gestão** | Reformulada para Gestão: consciência dos mecanismos de governança de IA na Swift |
| Q25 *(cenário relatório confidencial)* | Cenário dado sigiloso | *(removida)* | Absorvida em G1 e G2 com mais precisão |
| *(nova — só Gestão)* | — | **G5** | Nova: gestor já definiu orientações específicas sobre uso de IA na área |

### Dimensão Impacto

| V3 | Texto resumido V3 | V5 | O que mudou |
|----|-------------------|----|-------------|
| Q30 | Identifico processo que IA melhoraria (Likert) | **I1** | Reformulada com escala de profundidade (de "ideia vaga" a "business case") |
| Q34 | Já sugeri ideia de IA para gestor/equipe (Likert) | **I2-exec** | Expandida: o que conseguiria entregar se pedissem uma proposta |
| Q32 | Diferencio quando IA economiza tempo vs. muda resultado (Likert) | **I3** | Expandida: estima o impacto (tempo, custo, qualidade) |
| Q31 | Explico como IA gera valor na minha área (Likert) | **I4** | Reformulada: visão estratégica da IA no trabalho |
| Q48 *(Aprofundamento Gestão — cenário)* | Cenário: critério para priorizar projeto de IA | **I2-gestão** | Convertida para radio: capacidade de avaliar indicadores e montar business case |
| *(nova — só Gestão)* | — | **I5** | Nova checkbox: quais critérios usaria para priorizar projetos de IA |
| Q63 *(Aprofundamento Exec)* | Tempo economizado por semana com IA | *(removida)* | Absorvida em I3 de forma mais abrangente |

### Dimensão Cultura

| V3 | Texto resumido V3 | V5 | O que mudou |
|----|-------------------|----|-------------|
| Q37 | Compartilhei dica/aprendizado de IA com colegas (Likert) | **C1** | Reformulada: compartilhou aprendizado nos últimos 30 dias (mais específica) |
| Q38 | Experimento ferramentas novas por conta própria (Likert) | **C3** | Reformulada: como reage quando descobre uma nova ferramenta de IA |
| Q39 | Busco ativamente formas de aplicar IA (Likert) | **C2** | Reformulada: reação a uma capacitação avançada em IA |
| Q42 | Seria multiplicador de IA na área? (descritiva) | **C4** | Reformulada: qual papel exerce hoje na adoção de IA na Swift |
| Q41 | Attention check (pergunta de controle) | *(removida)* | Desnecessária com formato descritivo |

### Identificação e Abertas

| V3 | Texto resumido V3 | V5 | O que mudou |
|----|-------------------|----|-------------|
| Q1 | CPF | **Q1** | Mantida |
| Q6–Q10 | Mapa de Uso Atual (ferramentas, tarefas, início) | *(removido)* | Seção inteira removida |
| *(nova)* | — | **Q2** | Nova: cursos ou capacitações sobre IA |
| Q53 | Tarefa que nunca mais faria manualmente | **A1** *(obrigatória)* | Promovida a obrigatória e reposicionada como input estratégico para a esteira |
| Q54 | Tentou usar IA e não deu certo | **A2** *(opcional)* | Reformulada: mais direta |
| Q57 | Espaço livre — experiência, preocupação, sugestão | **A3** *(opcional)* | Mantida |

---

## Novas Capacidades da V5

### 1. Curva de Adoção de Rogers
A V5 classifica cada respondente nos 5 segmentos da curva de difusão de inovação de Everett Rogers, cruzando automaticamente múltiplas respostas (U1, Q2, U2, U3, C1, C3, C4):

| Segmento | % Esperado | Perfil na Swift |
|----------|-----------|-----------------|
| **Inovadores** | ~2.5% | Usam IA intensivamente, dominam prompt, fazem cursos, multiplicam |
| **Adotantes iniciais** | ~13.5% | Uso frequente, avaliam criticamente, compartilham com colegas |
| **Maioria inicial** | ~34% | Uso regular, maturidade intermediária |
| **Maioria tardia** | ~34% | Uso esporádico, maturidade básica |
| **Retardatários** | ~16% | Nunca usaram, não veem relação com seu trabalho |

**Benefício:** Identifica com precisão os candidatos a multiplicadores para a **Germinare** (train-the-trainer), tornando a ativação do programa baseada em dados.

### 2. Backlog automático da esteira
A pergunta **A1** ("Qual tarefa você mais gostaria de nunca mais fazer manualmente?") transforma o formulário em gerador de oportunidades reais para o **Pod Volante** e o intake da esteira.

### 3. Diagnóstico de barreiras acionáveis
A pergunta **U5** diferencia três perfis de não-uso com intervenções completamente distintas:
- **"Não sei usar"** → Capacitação técnica
- **"Não sei se posso usar"** → Comunicação de governança e política interna
- **"Falta de ferramentas aprovadas"** → Ação da TI e do Comitê de IA

### 4. Explicabilidade como nova dimensão (G3)
Mede se o colaborador consegue rastrear e explicar como a IA chegou a um resultado — requisito crescente de **compliance, auditoria e uso responsável** de IA.

### 5. Scoring longitudinal garantido
A V5 define **perguntas-chave imutáveis** (uma por pilar) e **15 perguntas de tronco comum** entre os dois clusters, garantindo comparabilidade exata entre a rodada pré-capacitação (Dia 0) e a pós-90-dias.

---

## O Que Foi Removido e Por Quê

| Elemento V3 | Justificativa da remoção |
|-------------|--------------------------|
| **Mapa de Uso Atual** (Q6–Q10, ~4 perguntas) | Condicional complexo ("se sim, responda Q7–Q10") aumentava tempo e criava lógica de dependência sem valor diagnóstico proporcional |
| **3 perguntas de cenário** (Q17, Q23, Q25) | Textos longos, ambíguos e cansativos — cada um com 3–5 linhas de contextualização. Convertidos em perguntas diretas e descritivas |
| **Pergunta de controle** (Q41) | Redundante com o formato descritivo, que naturalmente discrimina respondentes inatentos |
| **Aprofundamento isolado** (Q43–Q64 Exec / Q47–Q51 Gestão) | Substituído por diferenciação distribuída em cada dimensão, com muito mais precisão diagnóstica |
| **Q62** (entendimento conceitual escala a/b/c/d) | Absorvida por D1 com linguagem mais acessível |
| **Q18** (usei IA para decisão importante) | Redundante com U1 e U2 no novo formato |
| **Q44** (automatizei tarefa) | Substituída por U4 (amplitude de uso) |
| **Q63** (tempo economizado por semana) | Absorvida por I3 (estima impacto) de forma mais abrangente |

---

## Design Doc: Evolução das Abas

| Aba | V3 | V5 | Nota |
|-----|----|----|------|
| Visão Geral | ✅ | ✅ | Atualizada com novos KPIs |
| Matriz (5 dimensões × 4 níveis) | ✅ | ✅ | Mantida |
| Hipóteses CSD | ✅ (17 suposições + 8 dúvidas) | ✅ (hipóteses atualizadas para novos IDs) | Suposições remapeadas para novos IDs de perguntas |
| Perguntas | ✅ (por fase) | ✅ (por fase + cluster) | V5 distingue claramente tronco comum de cluster |
| Scoring | ✅ | ✅ | Mantido |
| Conexões | ✅ | ❌ (removida) | Substituída pela aba Clusters |
| **Clusters** | ❌ | ✅ *(nova)* | Painel com detalhamento Exec vs. Gestão |
| **Adoção (Curva de Rogers)** | ❌ | ✅ *(nova)* | Simulador com os 5 segmentos de difusão |

---

## Resumo Visual

```
V3                                      V5
────────────────────────────────        ────────────────────────────────────────
~36 perguntas (iguais p/ todos)         26 (Exec) / 31 (Gestão)
Mapa de Uso Atual (Q6–Q10)             Removido
3 cenários longos (Q17, Q23, Q25)      Perguntas diretas descritivas
Likert numérico (1–5)                   100% descritivo (comportamento)
Aprofundamento só no final (4 pergs)   Diferenciação distribuída em 5 dimensões
Codificação Q1–Q64 (sequencial)        Codificação U/D/G/I/C por dimensão
6 abas no design doc                   7 abas (+ Clusters, + Adoção)
Sem perguntas abertas estruturadas     3 abertas c/ papéis definidos (A1–A3)
Sem Curva de Rogers                    Rogers integrado — identifica multiplicadores
Sem barreira acionável                 U5 diferencia "não sei" de "não sei se posso"
Sem explicabilidade                    G3: rastrear e explicar resultados da IA
```

---

*Documento preparado pela IONIX para comunicação com o time Swift.*
