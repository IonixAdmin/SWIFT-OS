# E-mail: Raciocínio Analítico dos Resultados da Pesquisa

---

**De:** Vinicius / IONIX
**Para:** Alan, Debora / Swift
**Assunto:** Pesquisa de Maturidade em IA — Como vamos ler os resultados e o que cada análise entrega

---

Alan, Debora,

Queria compartilhar com vocês o raciocínio por trás de como vamos analisar os resultados da pesquisa quantitativa. A ideia é que vocês entendam não só *o que* vamos medir, mas *por que* cada análise existe e *que decisão* ela alimenta.

São três lentes complementares:

---

### 1. Matriz CSD (Certezas, Suposições e Dúvidas)

A pesquisa foi desenhada a partir de uma **Matriz CSD** — um framework que separa o que já sabemos (certezas), o que acreditamos mas precisamos validar (suposições) e o que genuinamente não sabemos (dúvidas).

**Como funciona na prática:**

Temos **17 suposições** mapeadas antes da pesquisa. Cada uma está vinculada a perguntas específicas do questionário. Quando os resultados chegarem, cada suposição será classificada como **confirmada** ou **refutada** — e cada resultado tem uma ação concreta já planejada.

**Exemplos do que vamos validar:**

- *"A maioria já usa IA, mas de forma rasa"* (S1) — Se confirmada, a capacitação parte do nível 2, sem precisar evangelizar. Se refutada, podemos começar mais avançados.
- *"Gestores não conseguem formular hipóteses testáveis com IA"* (S6) — Este é o gargalo #1 da esteira. Se confirmado, a trilha estratégica começa por pensamento de hipótese, não por ferramentas.
- *"Governança muito baixa em todos os níveis"* (S10) — Se confirmada, governança precisa ser a PRIMEIRA intervenção, antes de ampliar uso. Risco real de compliance.
- *"15-20% são early adopters"* (S11) — Cada multiplicador impacta 5-8 colegas via Germinare. Precisamos saber se temos essa massa crítica.

Além das suposições, temos **8 dúvidas** que a pesquisa vai esclarecer — desde quais áreas têm bolsões de maturidade espontâneos até quais processos os próprios colaboradores enxergam como candidatos a automação (essa última alimenta diretamente o backlog da esteira via a pergunta aberta A1).

**O que a Matriz CSD entrega:** Um mapa de decisões com base em evidências. Cada suposição confirmada ou refutada desbloqueia uma ação específica no programa — sequência de capacitação, prioridade de governança, ativação de multiplicadores, calibração do Pod Volante.

---

### 2. Histograma de Dispersão e Análise Estatística

A média geral de maturidade conta uma parte da história. O histograma conta o resto.

**Por que importa:**

Imagine que o score médio da Swift em Utilização dê 2.5 (Intermediário). Isso pode significar duas realidades completamente diferentes:

- **Cenário A — Distribuição concentrada:** A maioria das pessoas está entre 2.0 e 3.0. O time é relativamente homogêneo. Uma trilha de capacitação unificada funciona.
- **Cenário B — Distribuição bimodal:** Metade está no nível 1 (nunca usou) e metade no nível 4 (uso avançado). A média é 2.5, mas ninguém está no 2.5. Uma trilha única não serve para ninguém.

**O que vamos analisar em cada dimensão:**

| Métrica | O que revela | Decisão que alimenta |
|---------|-------------|---------------------|
| **Mediana** | Onde está o colaborador "típico" (menos sensível a extremos que a média) | Ponto de partida real da capacitação |
| **Desvio padrão** | Quanto o time varia — homogêneo ou polarizado | Trilha unificada vs. trilhas segmentadas |
| **Percentil 25 (P25)** | O "piso" — onde estão os 25% menos maduros | Prioridade de intervenção básica |
| **Percentil 75 (P75)** | O "teto" — onde estão os 25% mais maduros | Pool de candidatos a multiplicadores |
| **Distância P75-P25 (IQR)** | Tamanho do gap entre base e topo | Quanto esforço de nivelamento é necessário |
| **Distribuição por faixa** | Quantas pessoas em cada nível (1-5) | Dimensionamento de turmas e recursos |

**Cruzamentos importantes:**

Vamos sobrepor os histogramas com os dados demográficos via CPF (cruzamento com base RH):
- **Por área/departamento** — Identificar bolsões de maturidade e áreas que precisam de atenção prioritária
- **Por nível hierárquico** — Verificar se gestores estão mais avançados em Impacto e Governança que Execução (esperado) ou se há gaps inesperados
- **Por geração** — Testar a suposição S4 (Gen Z usa mais mas não é mais profunda)

**O que o histograma entrega:** Visibilidade real da dispersão, que evita o erro de tratar a Swift como um bloco homogêneo. Permite personalizar a capacitação por grupo e dimensionar recursos com precisão.

---

### 3. Curva de Adoção de Rogers

Esta é a análise que transforma dados individuais em um mapa estratégico de ativação.

**O conceito:**

A Curva de Difusão de Inovação (Everett Rogers, 1962) classifica as pessoas em 5 segmentos baseados no seu comportamento frente a uma nova tecnologia. Não é sobre "quem sabe mais" — é sobre **quem age primeiro e influencia os demais**.

**Como vamos classificar cada respondente:**

| Segmento | % Esperado | Critérios (combinação de respostas) | O que fazemos com eles |
|----------|-----------|--------------------------------------|----------------------|
| **Inovadores** | ~2.5% (~5 pessoas) | Uso essencial + prompt avançado + múltiplos cursos + papel de multiplicador | **Embaixadores do programa.** São os primeiros a testar novas ferramentas e validar com o time |
| **Adotantes iniciais** | ~13.5% (~27 pessoas) | Uso frequente + avaliam criticamente + compartilham ativamente | **Multiplicadores da Germinare.** Cada um impacta 5-8 colegas. São a alavanca de escala |
| **Maioria inicial** | ~34% (~67 pessoas) | Uso regular + maturidade intermediária | **Público-alvo principal da capacitação.** Respondem bem a trilhas guiadas com exemplos práticos |
| **Maioria tardia** | ~34% (~67 pessoas) | Uso esporádico + maturidade básica | **Precisam de evidência social.** Só adotam quando veem colegas usando com sucesso. Depoimentos e cases internos |
| **Retardatários** | ~16% (~32 pessoas) | Nunca usaram + não veem relação com seu trabalho | **Não são o foco inicial.** Tentativa de conversão forçada gera resistência. A estratégia é cercar com evidência e esperar |

**Por que isso importa para a Swift:**

A curva responde três perguntas estratégicas:

1. **"Temos massa crítica para a Germinare?"** — Precisamos de pelo menos ~30 pessoas entre Inovadores e Adotantes Iniciais para ativar o modelo train-the-trainer. Se tivermos menos de 15, a Germinare precisa de mais suporte externo da IONIX.

2. **"Onde estão os detratores e por quê?"** — A Maioria Tardia e os Retardatários não são "resistentes" — são pessoas que precisam de estímulos diferentes. A pesquisa nos diz o *motivo*: U5 (barreira) diferencia quem não usa por falta de habilidade, por insegurança sobre permissão, por medo de errar ou por falta de ferramentas. Cada barreira tem uma intervenção diferente.

3. **"Qual é a sequência certa de ativação?"** — A teoria de Rogers mostra que forçar adoção na Maioria Tardia antes de consolidar os Adotantes Iniciais é contraproducente. A sequência correta é: ativar Inovadores → treinar Adotantes Iniciais como multiplicadores → a Maioria Inicial adota por influência → a Maioria Tardia segue por evidência social.

**Cruzamento com dados demográficos:**

Vamos sobrepor a curva de Rogers com área, cargo e geração. Isso responde perguntas como:
- Qual área tem mais Inovadores? (candidata a piloto da esteira)
- A liderança está entre os Adotantes Iniciais ou na Maioria Tardia? (define se precisamos trabalhar top-down ou bottom-up)
- A Gen Z está distribuída entre Inovadores e Adotantes ou concentrada na Maioria Inicial? (testa a suposição S4)

**O que a Curva de Rogers entrega:** Um plano de ativação por segmento com nomes reais (via CPF). Sabemos exatamente quem convidar para o primeiro ciclo de multiplicadores da Germinare, quem precisa de cases antes de aderir, e quem não deve ser forçado.

---

### Como as três lentes se conectam

```
Matriz CSD          →  O QUE é verdade (valida/refuta hipóteses)
Histograma          →  COMO a maturidade se distribui (dispersão e gaps)
Curva de Rogers     →  QUEM ativar primeiro e em que sequência (plano de ação)
```

Juntas, essas três análises nos dão: o diagnóstico (CSD), a radiografia (histograma) e o plano de ativação (Rogers). Nenhuma sozinha é suficiente — é a combinação que transforma dados em decisões.

---

Fico à disposição para alinharmos qualquer ponto. A ideia é que quando os resultados chegarem, vocês já entendam a lógica por trás de cada número e gráfico que vamos apresentar.

Abraço,
Vinicius
