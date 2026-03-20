# Pesquisa de Maturidade em IA — Swift — V5 Design Doc

> **Versao:** 5.0
> **Data:** 2026-03-19
> **Base:** Plano de acao da reuniao de refinamento V3 + feedbacks do time Swift
> **Alteracoes sobre a V4:** aplicacao integral do plano de acao

---

## Resumo Executivo

A V5 aplica todas as mudancas definidas no plano de acao de revisao da V3:
- **Formato 100% descritivo** (sem Likert) — cada opcao de resposta reflete um nivel de maturidade (1-5)
- **Reduzida e focada** — Execucao: 25 perguntas / Gestao: 30 perguntas (incluindo abertas)
- **Tempo estimado:** ~7 minutos
- **Governanca reduzida para Execucao** (3 perguntas) e completa para Gestao (5 perguntas)
- **Cultura reduzida para Execucao** (3 perguntas) e completa para Gestao (4 perguntas)
- **Novas perguntas:** cursos de IA, familiaridade com prompt, explicabilidade, barreira, business case (gestao), priorizacao checkbox (gestao)
- **Perguntas mescladas:** verificacao de dados/resultados (antiga Q17+Q22+Q27 → G2 unificada)
- **Perguntas removidas:** binaria "usa IA" (Q6), cenario relatorio confidencial (Q25)

---

## Estrutura por Formulario

### Formulario Execucao (Assistentes, Analistas, Especialistas, Coordenadores)

| Pagina | Dimensao | Perguntas | IDs |
|--------|----------|-----------|-----|
| 0 | Boas-vindas | — | — |
| 1 | Identificacao | 2 | Q1 (CPF), Q2 (cursos IA) |
| 2 | Utilizacao | 5 | U1-U5 |
| 3 | Dados | 4 | D1-D4 |
| 4 | Governanca | 3 | G1-G3 |
| 5 | Impacto | 4 | I1-I4 |
| 6 | Cultura | 3 | C1-C3 |
| 7 | Abertas | 2 | A1-A2 |
| **Total** | | **23 scored + 2 abertas = 25** | |

### Formulario Gestao (Coordenadores, Gerentes, Diretores)

| Pagina | Dimensao | Perguntas | IDs |
|--------|----------|-----------|-----|
| 0 | Boas-vindas | — | — |
| 1 | Identificacao | 2 | Q1 (CPF), Q2 (cursos IA) |
| 2 | Utilizacao | 5 | U1-U5 |
| 3 | Dados | 4 | D1-D4 |
| 4 | Governanca | 5 | G1-G5 |
| 5 | Impacto | 5 | I1-I5 |
| 6 | Cultura | 4 | C1-C4 |
| 7 | Abertas | 2 | A1-A2 |
| **Total** | | **27 scored + 2 abertas = 30** (inclui 1 checkbox) | |

---

## Mapa Completo de Perguntas

### Pagina 1 — Identificacao (ambos)

| ID | Pergunta | Tipo | Opcoes |
|----|----------|------|--------|
| Q1 | Informe seu CPF | cpf | — |
| Q2 | Voce esta fazendo ou ja fez algum curso ou capacitacao sobre IA? | radio | (1) Nao, nunca fiz · (2) Estou aprendendo por conta propria · (3) Sim, curso online · (4) Sim, curso formal · (5) Sim, multiplos cursos |

### Pagina 2 — Utilizacao (ambos, exceto U4)

| ID | Pergunta | Tipo | Opcoes (nivel 1→5) |
|----|----------|------|-----|
| U1 | Frequencia de uso de IA | radio | Nunca → Parte essencial do fluxo |
| U2 | Como lida com o resultado da IA | radio | Nao uso → Itero com novos prompts |
| U3 | Familiaridade com prompt | radio | Nao sei o que e → Construo complexos e ensino colegas |
| U4-exec | Quantas tarefas diferentes usou IA | radio | Nenhuma → Mais de 5 tipos |
| U4-gestao | % da equipe que usa IA | radio | Menos de 10% → Mais de 75% |
| U5 | Maior barreira para usar mais IA | radio | Nao vejo aplicacao · Nao sei comecar · **Nao sei se posso** · Falta ferramentas · Medo de errar · Falta tempo · Ja uso bastante |

### Pagina 3 — Dados (ambos, exceto D2)

| ID | Pergunta | Tipo |
|----|----------|------|
| D1 | Entendimento sobre como IA funciona | radio |
| D2-exec | Preparar dados para IA | radio |
| D2-gestao | Dados da area organizados para IA | radio |
| D3 | Identificar problemas de qualidade nos dados | radio |
| D4 | Diagnostico quando IA erra | radio |

### Pagina 4 — Governanca

**Execucao (3 perguntas — reduzida):**

| ID | Pergunta | Tipo | Origem |
|----|----------|------|--------|
| G1 | Preocupacao ao usar IA com dados de clientes | radio | V4 G1 |
| G2 | Verificacao de dados de entrada e resultados | radio | **NOVA** (merge Q17+Q22+Q27) |
| G3 | Explicabilidade — explicar como IA chegou no resultado | radio | **NOVA** |

**Gestao (5 perguntas — completa):**

| ID | Pergunta | Tipo | Origem |
|----|----------|------|--------|
| G1 | Preocupacao ao usar IA com dados de clientes | radio | V4 G1 |
| G2 | Info sensivel — o que NAO inserir em IA publica | radio | V4 G2 |
| G3 | Explicabilidade — explicar como IA chegou no resultado | radio | **NOVA** |
| G4 | Consciencia dos mecanismos de governanca | radio | **REFORMULADA** (ex-Q58 vies) |
| G5 | Orientacoes para equipe sobre uso de IA | radio | V4 G4 |

### Pagina 5 — Impacto

**Execucao (4 perguntas):**

| ID | Pergunta | Tipo |
|----|----------|------|
| I1 | Identificar processos para IA | radio |
| I2 | Montar proposta de uso de IA | radio |
| I3 | Estimar impacto | radio |
| I4 | Visao sobre IA no trabalho | radio |

**Gestao (5 perguntas — expandida):**

| ID | Pergunta | Tipo | Origem |
|----|----------|------|--------|
| I1 | Identificar processos para IA | radio | V4 I1 |
| I2 | Avaliar indicadores/business case | radio | **NOVA** (substituiu priorizacao do V4) |
| I3 | Estimar impacto | radio | V4 I3 |
| I4 | Visao sobre IA no trabalho | radio | V4 I4 |
| I5 | Criterios de priorizacao de projetos IA | **checkbox** | **MODIFICADA** (+eficiencia, +pedido diretoria, multipla escolha) |

### Pagina 6 — Cultura

**Execucao (3 perguntas — reduzida):**

| ID | Pergunta |
|----|----------|
| C1 | Compartilhou aprendizado de IA nos ultimos 30 dias |
| C2 | Reacao a capacitacao avancada |
| C3 | Papel na adocao de IA |

**Gestao (4 perguntas — completa):**

| ID | Pergunta |
|----|----------|
| C1 | Compartilhou aprendizado de IA nos ultimos 30 dias |
| C2 | Reacao a capacitacao avancada |
| C3 | Reacao a nova ferramenta de IA |
| C4 | Papel na adocao de IA |

### Pagina 7 — Abertas (ambos)

| ID | Pergunta | Obrigatoria |
|----|----------|-------------|
| A1 | Qual tarefa do seu trabalho voce mais gostaria de nunca mais ter que fazer manualmente? | Sim |
| A2 | Conta uma vez que voce tentou usar IA e nao deu certo — o que aconteceu? | Nao |
| A3 | Compartilhe livremente: uma experiencia com IA (boa ou ruim), uma preocupacao, uma sugestao, ou qualquer coisa que gostaria de dizer. | Nao |

---

## Score Comum (perguntas identicas em ambos os clusters)

Para comparacao direta entre Execucao e Gestao e acompanhamento longitudinal:

| ID | Pergunta | Dimensao |
|----|----------|----------|
| Q2 | Cursos de IA | Identificacao |
| U1 | Frequencia de uso | Utilizacao |
| U2 | Como lida com resultado | Utilizacao |
| U3 | Familiaridade com prompt | Utilizacao |
| U5 | Maior barreira | Utilizacao |
| D1 | Entendimento IA | Dados |
| D3 | Qualidade de dados | Dados |
| D4 | Diagnostico de erro | Dados |
| G1 | Dados de clientes | Governanca |
| G3-exec / G3-gestao | Explicabilidade | Governanca |
| I1 | Identificar processos | Impacto |
| I3 | Estimar impacto | Impacto |
| I4 | Visao sobre IA | Impacto |
| C1 | Compartilhamento | Cultura |
| C2 | Capacitacao | Cultura |
| **Total: 15 perguntas comuns** | | |

---

## Perguntas-Chave Imutaveis (para monitoramento longitudinal)

1 pergunta por pilar que NAO muda entre rodadas da pesquisa:

| Pilar | Pergunta-chave | ID |
|-------|---------------|----|
| Utilizacao | Frequencia de uso de IA | U1 |
| Dados | Entendimento sobre como IA funciona | D1 |
| Governanca | Preocupacao com dados de clientes | G1 |
| Impacto | Visao sobre IA no trabalho | I4 |
| Cultura | Papel na adocao de IA | C3-exec / C4-gestao |

---

## Scoring Aproximado V5

### Conversao: opcao descritiva → nivel

Cada pergunta radio tem 5 opcoes ordenadas por maturidade:
- Opcao 1 = Nivel 1 (Iniciante)
- Opcao 2 = Nivel 2 (Basico)
- Opcao 3 = Nivel 3 (Intermediario)
- Opcao 4 = Nivel 4 (Avancado)
- Opcao 5 = Nivel 5 (Expert)

### Score por dimensao

```
Score_Dimensao = media(niveis das perguntas da dimensao)
```

### Score geral

```
Score_Geral = media ponderada dos 5 pilares
  Utilizacao: 25%
  Dados: 20%
  Governanca: 15%
  Impacto: 25%
  Cultura: 15%
```

### Faixas de maturidade

| Score | Nivel | Descricao |
|-------|-------|-----------|
| 1.00-1.49 | Iniciante | Sem contato com IA |
| 1.50-2.49 | Basico | Conhecimento superficial, uso esporadico |
| 2.50-3.49 | Intermediario | Uso regular com alguma criticidade |
| 3.50-4.49 | Avancado | Uso sofisticado com verificacao e impacto |
| 4.50-5.00 | Expert | Referencia interna, capacita outros |

### Perguntas especiais

- **U5 (barreira):** nao entra no score numerico — usada para analise qualitativa
- **I5-gestao (priorizacao checkbox):** nao entra no score — usada para analise de perfil decisorio
- **Q2 (cursos):** usada para segmentacao e identificacao de champions
- **A1, A2 (abertas):** alimentam backlog de oportunidades e analise de riscos percebidos

---

## Curva de Adocao de Rogers

Alem do score, classificar cada respondente na curva de adocao:

| Segmento | % esperado | Criterios (combinacao de respostas) |
|----------|-----------|--------------------------------------|
| **Inovadores** | ~2.5% | U1=5 + U3>=4 + Q2>=4 + C3/C4="Multiplicador" |
| **Adotantes iniciais** | ~13.5% | U1>=4 + U2>=4 + C1>=4 |
| **Maioria inicial** | ~34% | U1=3 + score geral 2.5-3.5 |
| **Maioria tardia** | ~34% | U1=2 + score geral 1.5-2.5 |
| **Retardatarios** | ~16% | U1=1 + I4<=2 |

A curva sera cruzada com dados demograficos (area, cargo, geracao) via CPF → base RH.

---

## Mudancas V4 → V5 (Changelog)

### Adicionadas
- Q2: Cursos/capacitacao de IA (identificacao, inicio)
- U3: Familiaridade com prompt (reformulada, mais detalhada)
- U5: Maior barreira (+opcao "Nao sei se posso")
- G2-exec: Responsabilidade no uso (merge Q17+Q22+Q27)
- G3: Explicabilidade
- G4-gestao: Consciencia de mecanismos de governanca (reformulada ex-Q58)
- I2-gestao: Avaliar indicadores/business case
- I5-gestao: Priorizacao checkbox (+eficiencia, +pedido diretoria)
- A1, A2: Perguntas abertas

### Removidas
- Q6 equivalente (binaria usa/nao usa) — ja removida na V4
- Q25 equivalente (cenario relatorio confidencial) — ja removida na V4
- G4-exec V4 (orientar colega) — movida para gestao
- C3-exec V4 (nova ferramenta) — removida do cluster execucao

### Reduzidas
- Governanca execucao: 4 → 3 perguntas
- Cultura execucao: 4 → 3 perguntas

### Expandidas
- Governanca gestao: 4 → 5 perguntas
- Impacto gestao: 4 → 5 perguntas (inclui checkbox)

---

## Arquivos

| Arquivo | Descricao |
|---------|-----------|
| `pesquisa-maturidade-ia-v5-design.md` | Este documento |
| `pesquisa-maturidade-ia-v5-formulario-execucao.html` | Formulario Execucao (React/Tailwind) |
| `pesquisa-maturidade-ia-v5-formulario-gestao.html` | Formulario Gestao (React/Tailwind) |

---

## Proximos Passos

1. Validar V5 com Alan e Debora (Swift)
2. Configurar SHEETS_URL no Google Apps Script
3. Subir na plataforma
4. Disparar segunda-feira de manha
5. Coleta: 3 dias uteis
6. Analise: score + curva de Rogers + narrativa descritiva
