# Plano de Acao — Revisao da Pesquisa V3

> Baseado na reuniao de refinamento com o time Swift + direcionamentos do Vinicius (IONIX)

---

## Contexto

A reuniao revisou a pesquisa de maturidade em IA V3 (61 perguntas, 2 clusters: Execucao ~130 pessoas / Gestao ~65 pessoas). O time Swift trouxe feedbacks relevantes sobre extensao, formato, conteudo e objetivos da pesquisa. As sugestoes convergem para uma pesquisa **mais enxuta, descritiva e acionavel**.

---

## Mapa de Alteracoes por Pergunta

### DELETAR

| Pergunta | Acao | Justificativa |
|----------|------|---------------|
| **Q6** ("Voce ja utilizou alguma ferramenta de IA? Sim/Nao") | **DELETAR** | Binaria, nao agrega. Manter apenas Q8 (frequencia de uso) |
| **Q25** (Cenario: relatorio confidencial + ChatGPT) | **DELETAR** | Solicitacao direta da reuniao — pergunta muito especifica sobre ChatGPT |

### ADICIONAR

| Nova Pergunta | Onde | Detalhe |
|--------------|------|---------|
| **Explicabilidade** (Governanca) | Dimensao 3 | "Saberia explicar como a IA chegou no resultado que me entregou? Consigo rastrear o raciocinio?" |
| **Identificacao de processos para IA** | Dimensao 4 | "Consigo identificar processos no meu trabalho que possam ser melhorados com IA?" (complementa Q30, mas mais direta) |
| **Familiaridade com prompt** | Dimensao 1 | "O quao familiarizado voce esta com o conceito de prompt e as praticas que envolvem ele?" (escala descritiva) |
| **Avaliacao de indicadores/business case** | Fase 2B (Gestao) | "Voce e capaz de avaliar indicadores e variaveis que justifiquem o investimento em uma iniciativa de IA?" |
| **Cursos de IA** | Fase 0.5 (mover para inicio) | "Voce esta fazendo ou ja fez algum curso/capacitacao sobre IA?" — mapear no comeco para segmentar respostas e identificar champions |

### MODIFICAR

| Pergunta | Acao | Detalhe |
|----------|------|---------|
| **Q17** (Confianca nos resultados de IA) | **MESCLAR com Q22 e Q27** | Simplificar e unificar em 1 pergunta sobre **responsabilidade no uso da IA** — "Quando uso IA, verifico tanto os dados de entrada quanto os resultados antes de tomar decisoes" |
| **Q22** (Verifico dados/numeros antes de usar) | **MESCLAR em Q17** | Consolidar — diz a mesma coisa que Q17 e Q27 sob angulos levemente diferentes |
| **Q27** (Verifico com outras fontes antes de decidir) | **MESCLAR em Q17** | Consolidar — idem |
| **Q40** (Maior barreira para usar IA) | **ADICIONAR opcao**: "Nao sei se posso usar" | Captura duvida sobre permissao/politica — diferente de "medo de errar" |
| **Q48** (Criterio de priorizacao) | **3 mudancas**: (1) Permitir mais de uma alternativa; (2) Adicionar opcao "Eficiencia operacional"; (3) Adicionar opcao "Pedido/direcionamento da diretoria" | Reflete realidade de priorizacao top-down e reconhece eficiencia como criterio |
| **Q58** (Vies algoritmico) | **REFORMULAR** | Mudar para: "Tenho plena consciencia dos mecanismos de governanca de IA da empresa e sei como eles se aplicam ao meu trabalho" — foco em governanca real, nao conceito teorico |
| **Todas as Likert** | **CONVERTER para descritivo** | Sair de "discordo/concordo" para 5 opcoes descritivas onde cada uma = 1 nivel de maturidade |

---

## Sintese das Sugestoes da Reuniao

### A. Estrutura e Formato

| # | Sugestao | Quem trouxe | Impacto |
|---|---------|-------------|---------|
| A1 | **Reduzir para ~30-36 perguntas** (estava em 61). Pesquisa longa causa fadiga cognitiva e perda de qualidade | Angelo, Patricia, Alan | Alto |
| A2 | **Transitar de Likert (score) para descritivo/exploratorio** — sair de "discordo/concordo" para opcoes que descrevem comportamentos reais | IONIX, Alan | Alto |
| A3 | **Eliminar pergunta binaria Q6** e ir direto para escala de frequencia | Debora, Vinicius | Medio |
| A4 | **Frequencia de uso em vez de binario** — usar escala: nunca, raramente, as vezes, quase sempre, sempre | Debora, Patricia | Alto |
| A5 | **Cada resposta reflete um nivel de maturidade (1-5)** — 5 opcoes descritivas, cada uma mapeada a um nivel | Participante 6, Alan | Alto |
| A6 | **Manter todas obrigatorias** (exceto abertas no final) para garantir completude dos dados | Debora | Medio |
| A7 | **Perguntas mais descritivas e subjetivas** — fugir do score numerico | Vinicius | Alto |

### B. Conteudo — Perguntas a Adicionar/Retornar

| # | Sugestao | Detalhe | Prioridade |
|---|---------|---------|-----------|
| B1 | **Pergunta sobre familiaridade com prompt** | "O quao familiarizado voce esta com o tema prompt e as praticas que envolvem?" | Alta |
| B2 | **Adicionar explicabilidade** (Governanca) | "Saberia explicar como a IA chegou nos resultados?" — rastreabilidade do raciocinio | Alta |
| B3 | **Pergunta sobre identificar processos para IA** | "Consigo identificar processos que possam usar IA?" | Alta |
| B4 | **Pergunta sobre avaliar indicadores/business case** (Gestao) | "Voce e capaz de avaliar indicadores/variaveis que justifiquem o investimento?" | Alta |
| B5 | **Incluir pergunta sobre cursos de IA NO INICIO** | Mapear logo no comeco para segmentar e identificar champions | Alta |
| B6 | **Opcao sobre politica restritiva como barreira** | Na Q40, incluir "Nao sei se posso usar" | Media |
| B7 | **Priorizacao top-down: "Pedido da diretoria"** | Na Q48, adicionar opcao + permitir multipla escolha | Media |
| B8 | **Opcao de "Eficiencia"** | Na Q48, adicionar "Eficiencia operacional / produtividade" | Media |

### C. Conteudo — Perguntas a Consolidar/Remover

| # | Sugestao | Detalhe | Prioridade |
|---|---------|---------|-----------|
| C1 | **Mesclar Q17 + Q22 + Q27 em 1 pergunta** | Simplificar para avaliar responsabilidade no uso da IA (entrada + saida + decisao) | Alta |
| C2 | **Deletar Q6** (binario usa/nao usa IA) | Substituir por frequencia | Alta |
| C3 | **Deletar Q25** (cenario relatorio confidencial + ChatGPT) | Solicitacao direta da reuniao | Alta |
| C4 | **Reformular Q58** (vies algoritmico) | Mudar para consciencia de governanca real: "Tenho plena consciencia dos mecanismos de governanca de IA..." | Alta |
| C5 | **Reduzir perguntas de governanca para base (execucao)** | Governanca e mais relevante para lideranca nesse momento | Media |
| C6 | **Cultura so para lideranca** | Temas de cultura fazem mais sentido no cluster Gestao | Media |

### D. Estrategia e Objetivos

| # | Sugestao | Detalhe | Impacto |
|---|---------|---------|--------|
| D1 | **Foco em: Utilizacao, Impacto, Dados** | Esses sao os pilares-chave para a base de execucao | Alto |
| D2 | **Identificar champions** | Pesquisa deve permitir identificar pessoas que buscam conhecimento sozinhas, constroem prompts, incentivam pares | Alto |
| D3 | **Perguntas estaticas para monitoramento** | 1 pergunta-chave por pilar IMUTAVEL entre rodadas — trackear evolucao | Alto |
| D4 | **Score aproximado (nao cientifico preciso)** | Foco e entender a historia descritiva, nao o numero 2.43 | Medio |
| D5 | **Analise de Curva de Adocao (Rogers)** | Alem do score, classificar respondentes na curva: Inovadores → Adotantes iniciais → Maioria inicial → Maioria tardia → Retardatarios | Alto |
| D6 | **Rounds adicionais com RH e Marketing** | Pesquisas pontuais e focadas para essas areas no futuro | Medio |

### E. Identificacao e Privacidade

| # | Sugestao | Detalhe |
|---|---------|---------|
| E1 | **Trocar CPF por ID de empregado ou matricula** | Angelo nao gosta de CPF. Debora concorda que ID funciona |
| E2 | **Mensagem de confidencialidade** | Manter mensagem clara de que dados sao confidenciais |

---

## Plano de Acao

### Fase 1 — Revisao Estrutural (imediata)

- [ ] **1.1** Converter TODAS as perguntas Likert para formato descritivo com 5 opcoes (cada uma = 1 nivel de maturidade)
- [ ] **1.2** Deletar Q6 (binario "usa IA sim/nao") — manter apenas frequencia
- [ ] **1.3** Deletar Q25 (cenario relatorio confidencial + ChatGPT)
- [ ] **1.4** Mesclar Q17 + Q22 + Q27 em 1 unica pergunta sobre responsabilidade no uso da IA
- [ ] **1.5** Definir pergunta-chave IMUTAVEL para cada um dos 5 pilares
- [ ] **1.6** Redesenhar fluxo sem skip logic baseada em Q6 (que foi deletada)

### Fase 2 — Ajuste de Conteudo

- [ ] **2.1** Adicionar pergunta sobre **familiaridade com prompt** (Dimensao 1 — Utilizacao)
- [ ] **2.2** Adicionar pergunta sobre **explicabilidade** (Dimensao 3 — Governanca)
- [ ] **2.3** Adicionar pergunta sobre **identificar processos para IA** (Dimensao 4 — Impacto)
- [ ] **2.4** Adicionar pergunta sobre **avaliar indicadores/business case** (Fase 2B — Gestao)
- [ ] **2.5** Mover/adicionar pergunta sobre **cursos de IA para o INICIO** (Fase 0.5)
- [ ] **2.6** Q40: adicionar opcao **"Nao sei se posso usar"**
- [ ] **2.7** Q48: tornar **multipla escolha** + adicionar opcoes **"Eficiencia operacional"** e **"Pedido/direcionamento da diretoria"**
- [ ] **2.8** Reformular Q58: de vies algoritmico para **"Tenho plena consciencia dos mecanismos de governanca de IA..."**

### Fase 3 — Priorizacao de Pilares por Cluster

- [ ] **3.1** Cluster Execucao: focar em **Utilizacao + Dados + Impacto** (reduzir governanca e cultura)
- [ ] **3.2** Cluster Gestao: manter todos os pilares, com enfase em **Governanca + Cultura + Impacto**
- [ ] **3.3** Garantir que Score Comum tenha ~20 perguntas iguais para ambos os clusters
- [ ] **3.4** Meta: **maximo 30-35 perguntas por cluster** (incluindo abertas)

### Fase 4 — Analise Complementar: Curva de Adocao (Rogers)

- [ ] **4.1** Definir criterios para classificar respondentes na curva de adocao:
  - **Inovadores** (~2.5%): ja constroem prompts avancados, experimentam por conta propria, fazem cursos
  - **Adotantes iniciais** (~13.5%): usam regularmente, refinam resultados, incentivam pares
  - **Maioria inicial** (~34%): usam quando alguem mostra, seguem o fluxo
  - **Maioria tardia** (~34%): esperam pra ver se funciona, usam so se obrigados
  - **Retardatarios** (~16%): nao veem valor, resistem ativamente
- [ ] **4.2** Mapear quais perguntas alimentam a classificacao na curva
- [ ] **4.3** Cruzar curva de adocao com dados demograficos (area, cargo, geracao)

### Fase 5 — Validacao e Disparo

- [ ] **5.1** IONIX faz revisao completa e envia versao atualizada para time Swift (assincrono)
- [ ] **5.2** Alan e Debora validam (prazo: ate fim do dia seguinte)
- [ ] **5.3** Debora sobe na plataforma
- [ ] **5.4** Disparo na segunda-feira de manha
- [ ] **5.5** Coleta: 3 dias uteis (segunda a quarta)
- [ ] **5.6** Analise: quinta e sexta

### Fase 6 — Pos-pesquisa

- [ ] **6.1** Gerar score aproximado por pilar + narrativa descritiva
- [ ] **6.2** Gerar analise de Curva de Adocao de Rogers
- [ ] **6.3** Identificar champions a partir dos resultados
- [ ] **6.4** Planejar round 2 focado em RH e Marketing
- [ ] **6.5** Conduzir entrevistas qualitativas com lideranca (foco em governanca)
- [ ] **6.6** Preparar apresentacao para diretoria: score + curva de adocao + narrativa descritiva

---

## Resumo das Mudancas por Pergunta (Quick Reference)

| Pergunta | Status | Acao |
|----------|--------|------|
| Q6 | DELETAR | Binaria "usa/nao usa" — substituida por frequencia |
| Q17 | MESCLAR | Unir com Q22 e Q27 → 1 pergunta sobre responsabilidade no uso |
| Q22 | MESCLAR | Absorvida pela nova Q17 unificada |
| Q25 | DELETAR | Cenario relatorio confidencial + ChatGPT |
| Q27 | MESCLAR | Absorvida pela nova Q17 unificada |
| Q40 | MODIFICAR | Adicionar opcao "Nao sei se posso usar" |
| Q48 | MODIFICAR | Multipla escolha + adicionar "Eficiencia" e "Pedido da diretoria" |
| Q58 | REFORMULAR | De vies algoritmico → consciencia dos mecanismos de governanca |
| NOVA | ADICIONAR | Familiaridade com prompt (Utilizacao) |
| NOVA | ADICIONAR | Explicabilidade (Governanca) |
| NOVA | ADICIONAR | Identificar processos para IA (Impacto) |
| NOVA | ADICIONAR | Avaliar indicadores/business case (Gestao) |
| NOVA | ADICIONAR | Cursos de IA — mover para inicio |
| TODAS Likert | CONVERTER | De escala 1-5 para opcoes descritivas por nivel de maturidade |

**Balanco: -5 perguntas (2 deletadas + 3 mescladas) / +5 perguntas novas = saldo neutro**
*Porem, a conversao de Likert para descritivo e a reducao de governanca no cluster Execucao devem reduzir o total para ~30-35 por cluster.*

---

## Decisoes-Chave

1. **Pesquisa muda de objetivo**: de score preciso → entendimento descritivo + curva de adocao
2. **Score sera aproximado**: baseado em opcoes descritivas mapeadas a niveis (nao Likert puro)
3. **Curva de Adocao de Rogers**: nova camada de analise que complementa o score
4. **Governanca via entrevistas qualitativas** com lideranca (nao sobrecarregar quanti)
5. **Cultura vai apenas para cluster Gestao** neste primeiro momento
6. **Perguntas estaticas por pilar** para acompanhamento longitudinal
7. **Identificacao por ID/matricula** (nao CPF)
8. **Tempo maximo de resposta**: ~7 minutos
9. **Q17+Q22+Q27 viram 1 pergunta** sobre responsabilidade no uso
10. **Q58 reformulada**: de conceito teorico (vies) para pratica real (governanca)

---

## Riscos e Atencoes

| Risco | Mitigacao |
|-------|----------|
| Adicionar perguntas e estourar o limite de 30-35 | Cada adicao substitui ou consolida outra (balanco neutro) |
| Perder capacidade de score ao sair do Likert | 1 pergunta-chave por pilar com opcoes mapeadas a niveis |
| Fadiga cognitiva com perguntas reflexivas | Alternar entre perguntas rapidas e cenarios |
| Baixa adesao por extensao percebida | Barra de progresso + mensagem de tempo estimado (~7 min) |
| Curva de Rogers baseada em auto-percepcao | Cruzar com dados objetivos (frequencia, ferramentas, cenarios) |

---

## Proximos Passos Imediatos

1. **IONIX**: aplicar as alteracoes mapeadas acima (Fases 1-3) na pesquisa V4
2. **Swift (Alan/Debora)**: validar versao revisada de forma assincrona
3. **Debora**: subir na plataforma apos validacao
4. **Todos**: reuniao de planejamento do projeto (governanca + pod volante) na quarta-feira 9h-10h30
