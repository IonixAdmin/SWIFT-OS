# GF01 — Grupo Focal: Governanca AS-IS

## Ficha tecnica

| Campo | Valor |
|---|---|
| **Tema** | Governanca de TI e IA — como funciona hoje |
| **Objetivo** | Diagnosticar processos, rituais, fluxos decisorios e lacunas de governanca existentes |
| **Formato** | Grupo focal (sessao unica, todos os niveis hierarquicos juntos) |
| **Duracao** | 90 minutos |
| **Participantes** | 8-10 pessoas (ver perfis abaixo) |
| **Moderador** | Vinicius (IONIX) |
| **Hipoteses CSD** | S6, S7, S9, S10, S15, S16, S17, D1 |

---

## Participantes recomendados

### Composicao ideal: 8-10 pessoas

O objetivo nao e representatividade estatistica (isso e trabalho da quanti com N=198), mas **diversidade de perspectivas** sobre como a governanca funciona (ou nao) na pratica.

| # | Perfil | Justificativa | Obrigatorio? |
|---|---|---|:---:|
| 1 | **CIO** | Visao da governanca desejada vs. real; perspectiva do board | Sim |
| 2 | **Head de Dados / Analytics** | Responsavel operacional pelas fontes de dados; vive a tensao dados vs. rapidez | Sim |
| 3 | **Gerente de area de negocio** (ex: Comercial ou Operacoes) | Camada que deveria formular hipoteses para a esteira (S6); vive o gap entre necessidade e capacidade de articular | Sim |
| 4 | **Gerente de area de suporte** (ex: Financeiro ou RH) | Perspectiva de areas com dados sensiveis (LGPD, folha, financeiro); onde governanca e mais critica | Sim |
| 5 | **Coordenador(a) de TI / Infraestrutura** | Quem recebe demandas de ferramentas; perspectiva de seguranca, compliance, shadow IT | Sim |
| 6 | **Especialista / Analista senior que ja usa IA** | Perspectiva "de baixo" — como lida com ausencia de diretrizes; como decide o que pode e o que nao pode | Sim |
| 7 | **Analista que NAO usa IA** | Perspectiva do "outsider" — por que nao usa, o que falta, como percebe quem usa | Desejavel |
| 8 | **Scrum Master / PMO** (se existir) | Perspectiva de processos e rituais; como demandas sao priorizadas e acompanhadas hoje | Desejavel |
| 9 | **Representante de Compliance / Juridico** (se existir) | Perspectiva de risco, LGPD, regulatorio | Desejavel |
| 10 | **Colaborador Gen Z** (Assistente ou Analista junior) | Perspectiva geracional; representa 23% do time; como percebe governanca (ou a falta dela) | Desejavel |

### Por que todos juntos (sem separacao hierarquica)

A dissonancia entre niveis hierarquicos **e o dado**. Quando o CIO diz "temos processo" e o analista diz "nunca ouvi falar", esse gap e exatamente o que a hipotese S17 (percepcao de vazio de governanca) tenta medir.

**Quorum minimo viavel:** 6 participantes (convidar 10 para ter margem).

---

## Material necessario

- [ ] Termo de consentimento impresso (1 por participante)
- [ ] Gravador de audio (principal)
- [ ] Celular (backup de gravacao)
- [ ] Post-its cor A (3 por participante — Bloco 1)
- [ ] Post-its cor B (2 por participante — Bloco 5)
- [ ] Canetas (1 por participante)
- [ ] Flipchart ou quadro branco + marcadores
- [ ] Roteiro impresso para o moderador
- [ ] Timer visivel para o moderador

---

## Estrutura da sessao — 90 minutos

| Bloco | Conteudo | Tempo | Acumulado |
|---|---|---|---|
| **0** | Abertura e regras do jogo | 8 min | 0:08 |
| **1** | Aquecimento: mapa mental de governanca | 10 min | 0:18 |
| **2** | Diagnostico AS-IS: como funciona hoje | 20 min | 0:38 |
| **3** | Estimulo provocativo 1: cenario do projeto de IA | 20 min | 0:58 |
| **4** | Estimulo provocativo 2: cenario de incidente | 15 min | 1:13 |
| **5** | Lacunas e desejos: o que falta | 12 min | 1:25 |
| **6** | Encerramento e proximos passos | 5 min | 1:30 |

---

## Bloco 0 — Abertura (8 min)

**Objetivo:** Criar seguranca psicologica, explicar regras, obter consentimento.

### Instrucoes para o moderador

1. Cumprimentar e agradecer a presenca de todos.

2. Explicar o proposito:

> "Estamos aqui para entender como a governanca de TI e IA funciona hoje na Swift — o que existe, o que funciona bem, o que nao funciona. Isso e um diagnostico, nao uma avaliacao de desempenho. Nao existem respostas certas ou erradas."

3. Contextualizar:

> "Essa sessao e uma das pernas do nosso diagnostico. A outra e a pesquisa quantitativa que esta rodando em paralelo. Juntas, vao nos dar um retrato completo para calibrar o programa de transformacao."

4. Pedir autorizacao para gravar:

> "Gostaria de gravar o audio para nao perder nenhum detalhe. A transcricao sera anonimizada — nenhuma fala vai ser atribuida pelo nome no relatorio. Se alguem preferir que nao grave, sem problema — respeitamos e tomamos notas manualmente."

5. Estabelecer regras:
   - "Todas as perspectivas sao validas e importantes"
   - "Nao ha hierarquia nesta sala — a perspectiva de um analista e tao valiosa quanto a do CIO"
   - "Se discordarem, otimo — a discordancia e dado"
   - "Peco que nao usem celular durante a sessao"

6. Distribuir e recolher termos de consentimento.

7. Rodada de apresentacao — cada pessoa diz: nome, area, cargo, tempo de casa (30 segundos cada).

**⏱ Verificar gravador apos as apresentacoes.**

---

## Bloco 1 — Aquecimento: Mapa Mental de Governanca (10 min)

**Objetivo:** Revelar o modelo mental de cada participante sobre "governanca" antes de contaminar com definicoes.

**Dinamica:** Post-its anonimos (mitigacao de hierarquia).

**Hipoteses CSD:** S17 (percepcao de vazio de governanca)

### Instrucoes para o moderador

1. Distribuir 3 post-its (cor A) para cada participante.

2. Pergunta:

> "Quando eu digo 'governanca de TI e dados na Swift', o que vem a cabeca de voces? Pode ser uma palavra, uma frase, um sentimento, um processo, uma pessoa — qualquer coisa. Escrevam uma ideia por post-it. Voces tem 2 minutos."

3. Recolher e colar no quadro/flipchart, agrupando por proximidade tematica (sem revelar autoria).

4. Ler em voz alta os agrupamentos.

5. Abrir:

> "Alguem quer comentar algum destes? Algo que surpreende? Algo que falta?"

### O que observar (anotar)

- Os termos sao positivos, neutros ou negativos?
- Ha mencao a processos concretos ou e tudo abstrato?
- Alguem menciona IA especificamente ou a governanca e percebida apenas como TI/dados geral?
- Ha dissonancia entre os post-its dos diferentes niveis hierarquicos?

---

## Bloco 2 — Diagnostico AS-IS: Como Funciona Hoje (20 min)

**Objetivo:** Mapear processos, rituais, fluxos decisorios e lacunas de governanca existentes.

**Hipoteses CSD:** S10, S15, S17, S2, S7, D1

### Sub-bloco 2A — Governanca geral de TI/dados (8 min)

**[P] Pergunta 1:**
> "Hoje, quando surge uma demanda de tecnologia ou dados em alguma area, como ela chega ate quem decide? Qual e o caminho?"

Sondas:
- "Existe um processo formal, um formulario, uma reuniao? Ou e mais informal?"
- "Quem decide se aquela demanda vai adiante ou nao? Quais criterios sao usados?"

**Pergunta 2:**
> "Existem reunioes periodicas onde se discutem prioridades de tecnologia? Se sim, quem participa, com que frequencia, e como funcionam?"

**Pergunta 3:**
> "Na opiniao de voces, o que funciona bem nesse processo hoje? E o que nao funciona?"

### Sub-bloco 2B — Governanca especifica de IA (12 min)

**[P] Pergunta 4:**
> "E quando falamos especificamente de IA — existe alguma diretriz, orientacao ou regra sobre o uso de ferramentas como ChatGPT, Copilot, ou similares na Swift hoje?"

Sondas:
- "Isso veio de onde? E documentado? Todo mundo sabe?"
- "E sobre dados — existe orientacao sobre o que pode e o que nao pode ser colocado nessas ferramentas?"

**[P] Pergunta 5:**
> "Quando alguem comeca a usar uma ferramenta de IA por conta propria no trabalho — o que acontece? Alguem e informado? Precisa de alguma aprovacao?"

Sondas:
- "Isso ja aconteceu? Como foi?"

**Pergunta 6:**
> "Se alguem tivesse uma ideia de usar IA para resolver um problema na area dele, como ele faria para levar isso adiante hoje? Existe algum caminho?"

**Pergunta 7:**
> "Voces sabem se existem diretrizes na Swift sobre etica no uso de IA, vies algoritmico, ou LGPD aplicada a ferramentas de IA?"

### O que observar (anotar)

- Existe processo formal ou tudo e informal/ad hoc?
- As pessoas conhecem as diretrizes que existem (S17)?
- Ha "shadow IT" de IA acontecendo (S2)?
- A lideranca acha que existem diretrizes que a operacao desconhece (gap perceptual)?
- Quem e percebido como "dono" da governanca de IA (S7)?

---

## Bloco 3 — Estimulo Provocativo 1: Cenario do Projeto de IA (20 min)

**Objetivo:** Simular o fluxo de um projeto de IA para revelar gargalos, lacunas e dissonancias no processo decisorio.

**Hipoteses CSD:** S6, S7, S9, S10, S15

### Cenario (ler em voz alta)

> "Vou apresentar uma situacao hipotetica e quero que voces me digam como isso funcionaria HOJE na Swift — nao como deveria funcionar, mas como realmente funcionaria.
>
> **Cenario:** O gerente da area Comercial identifica que a equipe gasta 3 horas por dia montando propostas comerciais manualmente, copiando dados de diferentes planilhas. Ele ouve de um analista que existe uma ferramenta de IA que poderia automatizar 80% desse trabalho. O gerente acha que vale a pena investigar.
>
> Agora me contem: **o que acontece a partir dai?**"

### Instrucoes para o moderador

1. Apos ler o cenario, dar **1 minuto de silencio** para cada pessoa pensar (podem anotar).
2. Pedir que **CADA pessoa** descreva brevemente o que acha que aconteceria. **Comecar pelos cargos operacionais.**
3. Depois de ouvir todos, abrir para discussao com as sondas abaixo.

### Sondas (usar conforme o fluxo)

- "Quem esse gerente procuraria primeiro? Por que?"
- "Precisaria de alguma aprovacao? De quem? Quanto tempo isso levaria?"
- "Quem avaliaria se a ferramenta e segura para uso com dados da Swift?"
- "E se envolvesse dados de clientes — mudaria alguma coisa no processo?"
- "Se o gerente simplesmente assinasse um trial por conta propria e comecasse a usar, alguem ficaria sabendo? O que aconteceria?"
- "Esse projeto seria priorizado contra quais outros? Como?"
- "Essa demanda seria registrada em algum lugar antes de chegar a TI? Como?" *(S9)*
- "O gerente avaliaria algum risco antes de comecar a usar, ou iria direto para a acao?" *(S15)*

**Sonda critica (S6):**
> "O gerente conseguiria explicar para TI exatamente o que precisa, com que resultado espera e como medir sucesso? Ou a demanda chegaria como 'quero uma IA pra fazer propostas'?"

### O que observar (anotar)

- Quantos "passos" o cenario gera vs. quantos "nao sei o que aconteceria"
- O fluxo descrito e consistente entre os participantes (ou cada um descreve um caminho diferente)
- Existe mecanismo de priorizacao ou tudo e por influencia/urgencia
- A resposta padrao e "leva pra TI" (S7)
- A formulacao da demanda seria vaga ou estruturada (S6)
- Alguem menciona risco, seguranca, compliance espontaneamente

---

## Bloco 4 — Estimulo Provocativo 2: Cenario de Incidente (15 min)

**Objetivo:** Testar a resposta a risco e a existencia de protocolos de governanca sob pressao.

**Hipoteses CSD:** S10, S16, S17

### Cenario (ler em voz alta)

> "Agora imaginem outra situacao:
>
> **Cenario:** Um analista da area financeira esta usando o ChatGPT para analisar dados de fluxo de caixa da Swift. Ele cola uma planilha com valores reais de receita, nomes de clientes e condicoes comerciais. Um colega ve e fica preocupado.
>
> **O que acontece a partir dai?**"

### Instrucoes para o moderador

1. **1 minuto de silencio** para pensar.
2. Pedir que **CADA pessoa** responda. **Comecar pelos cargos operacionais.**
3. Abrir para discussao com as sondas.

### Sondas

- "O colega preocupado saberia para quem reportar? Existe um canal?"
- "Isso seria tratado como um incidente de seguranca ou como uma situacao normal?"
- "Existe alguma politica que diria que isso nao deveria ter sido feito? Se sim, o analista sabia dela?"
- "Quem seria responsabilizado — o analista, o gestor da area, TI, ninguem?"
- "O que precisaria mudar para que isso nao acontecesse de novo?"

**Sonda critica (S16):**
> "E se em vez de dados financeiros, o analista tivesse usado a IA para triar curriculos de candidatos e a ferramenta comecasse a rejeitar candidatos de certas regioes — alguem perceberia? Como?"

### O que observar (anotar)

- Ha protocolo de resposta a incidentes de IA ou seria tratado ad hoc?
- As pessoas sabem o que e informacao sensivel no contexto de IA (S10)?
- Existe cultura de reporte ou de "deixa pra la"?
- A reacao da lideranca (CIO) e diferente da operacao — ouvem o mesmo incidente de formas diferentes?
- Alguem menciona LGPD, vies, compliance espontaneamente (S16)?

---

## Bloco 5 — Lacunas e Desejos: O Que Falta (12 min)

**Objetivo:** Coletar percepcoes sobre o que a governanca ideal precisaria ter.

**Hipoteses CSD:** S7, S9, S15, S17

**Dinamica:** Post-its (cor B) + discussao.

### Instrucoes para o moderador

1. Distribuir 2 post-its (cor B) para cada participante.

2. Pergunta:

> "Com base em tudo que discutimos, escrevam em cada post-it UMA coisa que voces acham que a Swift precisa ter para governar IA de forma adequada. Pode ser um processo, uma regra, uma pessoa, um ritual — qualquer coisa. 2 minutos."

3. Recolher e colar no quadro (separado dos post-its do Bloco 1).

4. Ler os agrupamentos. Perguntar:

> "Algo aqui surpreende voces?"

> "Se voces pudessem escolher apenas UMA dessas coisas para implementar amanha, qual seria? Por que?"

> "Existe algo que ja foi tentado e nao funcionou?"

5. Pergunta de fechamento:

> "Na visao de voces, quem deveria ser o responsavel por fazer isso acontecer? Uma pessoa? Um comite? Cada area?"

### O que observar (anotar)

- Os desejos sao operacionais (ferramentas, regras) ou estrategicos (comite, visao)?
- Ha convergencia ou fragmentacao nas respostas?
- A resposta sobre "responsavel" aponta para TI (confirma S7) ou para um modelo distribuido?
- Comparar post-its Bloco 1 (percepcao atual) vs. Bloco 5 (desejo) — o gap e o dado.

---

## Bloco 6 — Encerramento (5 min)

### Instrucoes para o moderador

1. Agradecer a participacao de todos.

2. Resumir brevemente 3-4 temas-chave que emergiram (sem interpretar — apenas espelhar):

> "Dos temas que surgiram aqui, os que mais me chamaram atencao foram [tema 1], [tema 2], [tema 3]..."

3. Abrir espaco final:

> "Alguem quer acrescentar algo que nao teve espaco para dizer?"

4. Explicar proximos passos:

> "Vou analisar tudo que discutimos aqui, integrar com os resultados da pesquisa quantitativa, e o diagnostico consolidado sera apresentado ao Comite de IA. As falas serao anonimizadas."

5. Avaliacao rapida da sessao (opcional — pedir por escrito ou levantar a mao):
   - "A sessao foi util?"
   - "Voce se sentiu confortavel para falar?"
   - "Algo ficou sem espaco?"

6. **Desligar o gravador.**

---

## Mapeamento CSD → Blocos

| Hipotese CSD | Prioridade | Como o grupo focal investiga | Bloco(s) |
|---|---|---|---|
| **S6** — Gestores nao formulam hipoteses | #1 | Cenario 1: como a demanda do gerente chegaria? Estruturada ou vaga? | 3 |
| **S7** — Veem IA como coisa de TI | Critica | Cenario 1: quem o gerente procura primeiro? Bloco 5: quem e responsavel? | 3, 5 |
| **S9** — Captura desestruturada de ideias | Media | Bloco 2: existe processo de intake? Cenario 1: como registraria a ideia? | 2, 3 |
| **S10** — Governanca baixa transversal | #2 | Bloco 2: diretrizes existem? Bloco 4: incidente revela gaps | 2, 4 |
| **S15** — Gestores nao aplicam governanca | Alta | Bloco 2: gestores definiram orientacoes? Cenario 1: gestor avalia risco? | 2, 3 |
| **S16** — Desconhecem vies e riscos legais | Alta | Bloco 4: mencionam LGPD/vies espontaneamente? Sonda sobre vies em RH | 4 |
| **S17** — Percepcao de vazio de governanca | Alta | Bloco 1: mapa mental revela ausencia? Bloco 5: gap entre existente e desejado | 1, 5 |
| **D1** — Areas com iniciativas informais | Alta | Bloco 2: shadow IT de IA? | 2 |

---

## Guia de contingencia para o moderador

| Situacao | O que fazer |
|---|---|
| **CIO domina a conversa** | "Obrigado, [CIO]. [Nome operacional], voce concorda ou tem uma experiencia diferente?" |
| **Ninguem responde** | "Vou pedir que cada pessoa compartilhe uma observacao breve. [Nome], pode comecar?" |
| **Sessao esta atrasada** | Cortar sondas nao marcadas com [P]. Bloco 5 pode ser reduzido a 8 min. |
| **Discussao esquenta** | "Otimo, essa divergencia e exatamente o que precisamos capturar. Vamos anotar as duas perspectivas." |
| **Participante desvia do tema** | "Ponto interessante. Vamos anotar para retomar. Voltando ao cenario..." |
| **Gravacao falha** | Ativar backup no celular. Anotar pontos-chave em tempo real. |
| **Participante nao comparece** | Sessao viavel com minimo de 6. Se < 6, considerar reagendar. |

---

## Pos-sessao: Checklist do moderador

### Ate 24h apos a sessao

- [ ] Escrever notas de campo: dinamicas que o audio nao captura (tensao, silencio significativo, linguagem corporal, quem falou mais/menos)
- [ ] Registrar reflexividade: "Eu esperava que X acontecesse; o que emergiu foi Y"
- [ ] Fotografar os post-its no quadro (Bloco 1 e Bloco 5)
- [ ] Verificar qualidade do audio

### Ate 72h apos a sessao

- [ ] Transcrever audio (pode usar Whisper/Claude para draft, revisar manualmente)
- [ ] Anonimizar: substituir nomes por codigos (P1-CIO, P2-HeadDados, etc.)
- [ ] Salvar transcricao em `resultados/GF01-transcricao.md`

### Ate 5 dias uteis apos a sessao

- [ ] Aplicar Analise Tematica (6 fases — ver 01-metodologia-quali.md)
- [ ] Mapear temas para hipoteses CSD (confirma / refuta / expande)
- [ ] Salvar analise em `resultados/GF01-analise-tematica.md`
- [ ] Salvar mapeamento em `resultados/GF01-codificacao-csd.md`
- [ ] Realizar member checking: enviar resumo dos temas (sem atribuicao) para 2-3 participantes e perguntar se reflete o que foi discutido

### Apos coleta da pesquisa quantitativa

- [ ] Construir Joint Display Table (quanti + quali integrados)
- [ ] Incluir no relatorio executivo consolidado

---

## Cenarios alternativos (para sessoes futuras ou adaptacao)

Caso o moderador queira substituir ou adaptar os cenarios provocativos:

- **Cenario Ecossistema:** "Um diretor viu uma startup que oferece um produto de IA para a Swift. Ele quer testar. Como isso entraria no sistema?" — testa canal de Provedor de Ecossistema.
- **Cenario Etica:** "A Swift quer usar IA para analisar o desempenho de funcionarios. Um colaborador descobre e fica desconfortavel." — testa percepcao de etica e vies (S16) com mais profundidade.

---

## Documentos relacionados

| Arquivo | Conteudo |
|---|---|
| ../00-objetivo-e-escopo.md | Objetivo, escopo e programa de sessoes da pesquisa qualitativa |
| ../01-metodologia-quali.md | Design metodologico, Analise Tematica, controles de qualidade |
| ../../pesquisa-quanti/01-hipoteses-csd.md | Matriz CSD completa (base para mapeamento quali) |
| ../../pesquisa-quanti/02-pesquisa-completa.md | Questionario quantitativo (par complementar) |

---

*Programa de Transformacao IA Escalavel — Swift x Ionix*
