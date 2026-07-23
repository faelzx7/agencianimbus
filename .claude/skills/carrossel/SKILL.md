---
name: carrossel
description: >
  Cria carrosséis e posts visuais para Instagram/LinkedIn/TikTok com a identidade da marca —
  texto, HTML estilizado e PNG renderizado via Playwright em 1080x1350, com legenda incluída.
  Use quando o usuário pedir "carrossel", "post pro instagram", "conteúdo visual", "criar slides",
  "post educativo", ou /carrossel.
---

# /carrossel — Conteúdo visual em slides

Pega um tema → devolve texto aprovado + HTML + PNGs prontos pra postar + legenda.

## Dependências

- **Identidade:** `identidade/identidade.md` — ler antes de desenhar qualquer coisa. Se estiver
  em branco, usar o padrão neutro descrito abaixo (não travar pedindo `/instalar`).
- **Negócio e voz:** `_memoria/empresa.md`, `_memoria/preferencias.md`.
- **Renderização:** Node + Playwright. Se não houver `node_modules` com Playwright disponível no
  workspace (checar com `npx playwright --version`), rodar `npm init -y` (se não existir
  `package.json`) e `npm install playwright` antes de renderizar — avisar o usuário que a
  primeira renderização vai demorar um pouco mais por causa do download do navegador.
- **Saída:** `marketing/conteudo/<slug-tema>-<data>/` (ou a pasta equivalente dentro de
  `clientes/<nome>/` se o trabalho for de um cliente específico).

---

## Formato

Sempre 1080×1350 (proporção 4:5) pra Instagram/LinkedIn. Se o usuário pedir formato de
Stories/Reels/TikTok, usar 1080×1920 (9:16) — só nesse caso.

## Padrão visual neutro (quando `identidade/identidade.md` estiver em branco)

- Fundo escuro `#111318` alternado com fundo claro `#F7F5F0`, mais **uma** cor de destaque só
  (nunca mais de uma cor forte competindo).
- Tipografia sem serifa, títulos com peso pesado (700-800) e entrelinha apertada; corpo de texto
  com peso regular (400-500) e entrelinha confortável (1.4-1.6).
- Nada de clip-art, gradiente decorativo, emoji como elemento gráfico, ou estética genérica de
  IA. Se `identidade/identidade.md` tiver conteúdo, ela sempre sobrescreve esse padrão.

## Vocabulário de blocos (variar entre eles ao longo do carrossel)

- **ABERTURA** — primeiro slide. Frase de gancho curta (até ~8 palavras) + subtítulo opcional.
  Fundo sólido ou com imagem (se houver) e overlay escuro pra manter o texto legível.
- **DESTAQUE** — um ponto por slide: título curto + 1-2 frases de apoio. É o bloco mais usado
  nos slides do meio.
- **COMPARATIVO** — dois elementos lado a lado (antes/depois, opção A/B, mito/fato).
- **DADO** — um número ou estatística em destaque visual grande, com uma frase de contexto.
- **DEPOIMENTO** — citação (real, fornecida pelo usuário — nunca inventada) com atribuição.
- **CHAMADA** — último slide. Fundo na cor de destaque, mensagem de ação clara, forma de
  contato ou link.

Regra de ritmo: nunca dois slides seguidos com o mesmo bloco ou o mesmo fundo (alternar claro/
escuro/cor de destaque). Considerar qual foi a última capa publicada (perguntar se não souber)
pra não repetir o mesmo padrão de abertura duas vezes seguidas no feed.

---

## Workflow

### Passo 1 — Entender o pedido

Se não vier claro, perguntar: tema, objetivo (educar, vender, engajar, anunciar), e quantidade
aproximada de slides (padrão: 6 a 9, contando abertura e chamada).

### Passo 2 — Escrever o texto primeiro

Um bloco por slide, seguindo `_memoria/preferencias.md` — sem encher linguiça, frases que soam
faladas, não "corporativês". Mostrar o texto completo (slide por slide) e esperar aprovação antes
de ir pro visual — copy ruim com visual bonito ainda é copy ruim.

### Passo 3 — HTML

Montar **um único arquivo** `carrossel.html` com todos os slides como `<section>` sequenciais,
CSS inline, usando as cores/fontes de `identidade/identidade.md` (ou o padrão neutro). Cada slide
com dimensão fixa de 1080×1350px. Variar pelo menos 2 blocos diferentes ao longo do carrossel.

### Passo 4 — Renderizar

Criar um script `render.js` na mesma pasta (Node + Playwright) que abre o `carrossel.html` e
captura cada `section` como PNG separado, numerado (`slide-01.png`, `slide-02.png`, ...). Rodar
o script e confirmar que todos os PNGs foram gerados no tamanho certo.

### Passo 5 — Legenda

Gerar automaticamente, sem esperar o usuário pedir, salvando em `legenda.md` na mesma pasta:
1. Gancho (pergunta ou afirmação que prende)
2. 1-2 frases de contexto
3. Chamada pra arrastar o carrossel
4. Chamada de ação final (contato, link, comentário)
5. Hashtags relevantes, se fizer sentido pro nicho

### Passo 6 — Organização final

```
marketing/conteudo/<slug-tema>-<data>/
  texto.md            ← texto aprovado, slide por slide
  carrossel.html
  render.js
  slides/
    slide-01.png → slide-NN.png
  legenda.md
```

### Passo 7 — Gancho pra blog (opcional)

Perguntar: "Esse tema dá pra virar artigo de blog também, com SEO. Quer que eu gere a versão
blog?" Se sim, usar `/publicar-tema` com o mesmo tema.

## Regras

- Sempre ler `identidade/identidade.md` antes de desenhar.
- 1080×1350 é o padrão — 1080×1920 só quando pedido explicitamente.
- Nunca pular a aprovação do texto antes de gerar o visual.
- Legenda é sempre gerada, nunca opcional.
- Nunca repetir o mesmo bloco visual em slides consecutivos.
- Nunca inventar depoimento, dado ou número — usar somente o que o usuário fornecer como real.
