---
name: frontend-design
description: >
  Cria e revisa interfaces web (componentes, telas, landing pages) com qualidade visual
  profissional — hierarquia, espaçamento, cor, tipografia e acessibilidade tratados como parte
  do código, não como retoque depois. Use quando o usuário pedir "cria uma interface", "monta
  essa landing page", "melhora esse componente", "converte esse mockup em código", ou
  /frontend-design.
---

# /frontend-design — Interfaces com qualidade visual profissional

Vai além do funcional: entrega componentes e telas com consistência visual e boa experiência de
uso, não só HTML/CSS que "funciona".

## Dependências

- **Identidade (se o negócio já tiver uma):** `identidade/identidade.md` — cores, tipografia e
  personalidade visual definidas ali sobrescrevem os padrões genéricos abaixo.
- **Fontes enviadas pelo usuário (se houver):** `identidade/fontes/` — arquivos reais (`.woff2`
  de preferência) referenciados no campo "Arquivos" da Tipografia em `identidade/identidade.md`.
- **Voz (pra copy dentro da interface):** `_memoria/preferencias.md`.

## Quando usar

- Criar componente de UI do zero.
- Revisar/melhorar interface existente.
- Converter mockup ou wireframe em código.
- Montar landing page ou página de produto.

---

## Princípios

### Fugir do genérico de IA

O maior risco não é ficar feio — é ficar com **cara de site gerado por IA**, o "vibecoding
genérico" que qualquer usuário reconhece de cara e que mina a credibilidade da peça inteira. Isso
tem padrões conhecidos e repetidos. Evitar, salvo pedido explícito do usuário:

- Bege/creme quente (`#F4F1EA`) com serifada display e acento terracota.
- Quase-preto com um único pop de verde-ácido ou vermelho vibrante.
- Colunas densas com regrinhas finas estilo jornal.
- Hero com gradiente roxo-pro-azul sobre fundo branco.
- Inter ou Space Grotesk como fonte "segura" — são a escolha padrão de qualquer gerador de IA,
  o que as torna o oposto de neutras: viraram a assinatura visual do genérico.
- Emoji como marcador de seção.
- Tudo centralizado.
- `rounded-lg` em todo elemento, sem exceção.
- Cartão com barra/friso de acento na lateral, em toda parte.

**Como fugir de verdade:** ancorar cada escolha no assunto específico da peça — se
`identidade/identidade.md` já define paleta e tipografia, usar dali sem desviar. Se não define
nada, não cair automaticamente nos padrões acima só porque "funcionam sempre" — fazer uma escolha
deliberada e específica pro que está sendo construído, mesmo que mais simples. Um layout bem
composto com uma escolha de tipografia com personalidade vale mais que um "estilo" genérico
aplicado por cima.

### Hierarquia visual

- Um elemento principal por tela — um CTA, um título, uma ação primária. Se tudo compete por
  atenção, nada se destaca.
- Escala de fonte consistente (ex: 12/14/16/20/24/32/48px) — evitar tamanhos aleatórios entre
  componentes parecidos.
- Contraste mínimo AA (4.5:1 pra texto normal) — acessibilidade não é opcional.

### Espaçamento

- Escala de 4px (4, 8, 12, 16, 24, 32, 48, 64) — todo espaçamento vem dessa régua, nunca valor
  solto tipo `13px` ou `27px`.
- Padding interno consistente por tipo de componente (todo card com o mesmo padding, todo botão
  com a mesma proporção).
- Espaço em branco generoso comunica qualidade — resistir ao impulso de preencher tudo.

### Cor

- Definir a paleta por função, não por preferência solta: primária, secundária, neutros, e
  semânticas (sucesso, erro, alerta). Se `identidade/identidade.md` já define isso, usar dali.
- Evitar preto puro (`#000`) e branco puro (`#FFF`) em fundos grandes — prefira tons próximos
  (ex: `#0F0F0F`/`#1A1A1A` pro escuro, `#FAFAFA`/`#F5F5F5` pro claro). Reduz fadiga visual e
  parece mais trabalhado.
- **Dar ritmo às dobras — nunca a página inteira num tom só.** Numa página com várias seções
  (landing, página de produto), alternar o fundo entre as dobras: uma clara/branca, a próxima
  escura, outra num tom de acento, e assim por diante. Fundo monocromático do topo ao rodapé
  achata a página e cansa. A cada seção, escolher deliberadamente uma cor de fundo da paleta que
  contraste com a vizinha — sem cair no aleatório: 2 a 4 "famílias" de fundo que se revezam num
  ritmo claro (ex: escuro → claro → escuro → acento → claro).
- Ao trocar o fundo de uma dobra, **trocar junto a paleta inteira daquela dobra** — texto, cards,
  bordas, cor de acento — pra manter o contraste AA em cada uma. O jeito robusto é tokens por
  seção (variáveis CSS `--sec-*` que cada dobra sobrescreve), não recolorir elemento a elemento.

### Tipografia

- No máximo 2 famílias de fonte por projeto (uma pra título, uma pro corpo — ou a mesma família
  em pesos diferentes). Pareamento deliberado: uma face de título com personalidade, usada com
  moderação, complementada por uma face de corpo mais neutra — não a mesma dupla seguidona em
  todo projeto. Evitar Inter/Space Grotesk como default (ver "Fugir do genérico de IA").
- **De onde vem a fonte, em ordem de prioridade:**
  1. `identidade/identidade.md` já define título/corpo → usar exatamente isso.
  2. O usuário disse "vou mandar minhas fontes" → arquivos ficam em `identidade/fontes/`,
     referenciados no campo "Arquivos" da Tipografia. Se ele ainda não mandou mas sinalizou que
     vai, perguntar o formato (`.woff2` é o ideal) e esperar antes de fechar o visual.
  3. Nada definido → escolher um pareamento com personalidade pro assunto específico da peça
     (não Inter/Space Grotesk por padrão) e avisar que é um padrão neutro, sugerindo que o
     usuário rode `/instalar` ou edite `identidade/identidade.md` se quiser fixar isso pra marca.
- **Como carregar de verdade** (isso não é um Artifact — é um site real, então CDN de fonte
  funciona normalmente, mas self-host é preferível):
  - Arquivo próprio em `identidade/fontes/`: declarar via `@font-face` com `.woff2`, sem
    dependência externa.
  - Sem arquivo próprio: `<link>`/`@import` do Google Fonts pelo nome definido. Nunca deixar a
    peça cair silenciosamente na fonte de sistema do navegador só porque o link falhou — testar
    que carregou.
- Entrelinha (line-height): ~1.5 pro corpo de texto, ~1.2 pra títulos grandes.
- Letter-spacing levemente negativo em títulos grandes costuma ler como mais refinado.

### Responsividade

- Mobile-first: escrever o CSS base pro menor viewport, depois adicionar `min-width` pra telas
  maiores — não o inverso.
- Breakpoints de referência (ajustar ao conteúdo, não decorar como regra fixa): `480px` (celular
  grande), `768px` (tablet), `1024px`/`1280px` (desktop).
- Tipografia fluida com `clamp()` pra títulos grandes (ex: `clamp(1.9rem, 4.4vw, 3rem)`) evita
  saltos bruscos de tamanho entre breakpoints.
- Alvo de toque mínimo de 44×44px em qualquer elemento clicável em mobile.
- Tabela, bloco de código e conteúdo largo ganham `overflow-x: auto` no próprio container — a
  página nunca rola na horizontal.
- Testar mentalmente (ou de fato, se houver como rodar) em pelo menos 3 larguras: ~375px, ~768px,
  ~1440px — não só redimensionar a janela do editor e assumir que "coube".

---

## Stack (usar como padrão, salvo o projeto já ter uma stack definida)

- React + Tailwind CSS pra maioria dos casos.
- Framer Motion pra animação, quando a interação pedir.
- Radix UI (ou equivalente) como base de componentes acessíveis (dropdown, dialog, etc.) — não
  reinventar isso do zero.
- Biblioteca de ícones consistente (uma só por projeto).

## Workflow

1. Confirmar se há identidade visual definida (`identidade/identidade.md`). Se houver, usar as
   cores/tipografia de lá — inclusive checar `identidade/fontes/` por arquivos reais. Se não,
   escolher deliberadamente (ver "Fugir do genérico de IA") e avisar que está usando um padrão
   neutro.
2. Entender o objetivo da tela/componente antes de codar — qual é a ação principal que ela
   precisa gerar.
3. Construir componentizado e reutilizável, mobile-first, testando pelo menos 3 larguras.
4. Cobrir os estados relevantes: padrão, hover, ativo, desabilitado, carregando, erro — não só
   o estado "feliz".
5. Antes de considerar pronto, revisar contra a lista de "Fugir do genérico de IA" — se a peça
   bateu com 2 ou mais itens da lista, refazer aquela parte antes de entregar.
6. Comentar apenas decisões de design não óbvias (por que esse espaçamento, por que essa cor) —
   não narrar o que o código já mostra.

## Onde gravar (site publicável)

Quando o pedido for um **site/landing page completo de um cliente** (não um componente solto),
gravar os arquivos finais em `clientes/<slug>/saidas/site/` — um site estático pronto pra servir,
com `index.html` na raiz dessa pasta. É desse caminho que o botão "Publicar" do NimbusOS lê pra
subir na Vercel; fora dele, o deploy automático não acha o site. Para componente avulso ou
protótipo parcial, gravar onde fizer sentido no contexto — a convenção acima vale só pro site
inteiro que se pretende publicar.

## Regras

- Responsivo por padrão, não como etapa separada depois.
- Nunca usar preto/branco puro em áreas grandes de fundo.
- Numa página de várias seções, nunca deixar tudo num fundo só — alternar as dobras (clara,
  escura, acento) num ritmo deliberado, trocando a paleta inteira de cada dobra junto com o fundo.
- Nunca mais de 2 famílias de fonte no mesmo projeto.
- Nunca usar Inter ou Space Grotesk como escolha padrão quando nada foi definido — são a
  assinatura visual do genérico de IA, o oposto de neutras.
- Se o usuário disser que vai mandar fontes próprias, esperar os arquivos antes de fechar o
  visual — não seguir com Google Fonts e trocar depois.
- Todo espaçamento vem da escala de 4px — sem valores soltos.
- Se `identidade/identidade.md` estiver preenchida, ela manda mais que qualquer padrão genérico
  desta skill.
