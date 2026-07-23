---
name: publicar-tema
description: >
  Pega um tema e gera, de forma amarrada, um artigo de blog completo, o carrossel-resumo (via
  skill /carrossel) e legendas para redes sociais apontando de volta pro artigo. Use quando o
  usuário pedir "publica esse tema", "transforma isso em conteúdo completo", "gera o pacote de
  conteúdo pra X", ou /publicar-tema.
---

# /publicar-tema — Um tema, três formatos amarrados

Skill orquestradora: o blog é a peça principal, o carrossel e as legendas derivam dele — nunca o
contrário.

## Dependências

- **Estratégia de conteúdo (se existir):** `marketing/seo/estrategia-conteudo.md` (produzida
  pela skill `/seo`) — usar como fonte de temas se o usuário não trouxer um.
- **Skill `/carrossel`** — usada na etapa de resumo visual.
- **Voz e negócio:** `_memoria/preferencias.md`, `_memoria/empresa.md`.
- **Saída:** `marketing/conteudo/`.

## Quando não usar

- Pedido de carrossel avulso sem blog → usar `/carrossel` direto.
- Post único, frase de impacto → `/carrossel`.
- Atualização de artigo já existente → editar o arquivo direto.

---

## Workflow

### Passo 0 — Escolher o tema

Se veio no pedido, usar. Senão, ler `marketing/seo/estrategia-conteudo.md` (se existir) e listar
opções ainda não publicadas; se não existir, perguntar o tema direto.

### Passo 1 — Escrever o artigo

800 a 1500 palavras. Estrutura:
1. Abertura com o problema real do leitor, sem enrolação.
2. Seção explicando o que é/por que importa.
3. Seção prática — o que fazer, o que observar.
4. Conexão natural com o que o negócio oferece (sem virar propaganda).
5. Fechamento com uma única chamada de ação.

Título com a palavra-chave principal perto do início. Meta description de 150-160 caracteres, se
o destino do artigo usar frontmatter com esses campos. Slug curto em kebab-case.

Sempre marcar como rascunho/não-publicado no frontmatter (se o formato do site usar isso) —
quem decide publicar de fato é o usuário, nunca automático.

Salvar em `marketing/conteudo/<slug>.md` (ou no caminho do blog do site, se o usuário já tiver
indicado onde fica).

### Passo 2 — Carrossel-resumo

Chamar a lógica de `/carrossel` (bloco ABERTURA com o mesmo título ou uma variação enxuta; blocos
de conteúdo com os pontos-chave do artigo; bloco CHAMADA final apontando pro link do blog).

Pasta: `marketing/conteudo/<slug>-<data>/` (mesmo padrão de saída do `/carrossel`).

### Passo 3 — Legendas

Duas versões, salvas na mesma pasta do carrossel:

- **`legenda.md`** (Instagram/Facebook): gancho na primeira linha, 2-3 frases de contexto,
  chamada pra arrastar o carrossel + link pro artigo completo, hashtags se fizer sentido.
- **`legenda-linkedin.md`** (mais formal, sem hashtags em excesso): abertura mais analítica,
  3-4 parágrafos (LinkedIn aceita texto mais longo), link direto pro artigo, sem "arraste pro
  lado" (comportamento de feed diferente).

### Passo 4 — Resumo de entrega

```
✓ Artigo: marketing/conteudo/<slug>.md (rascunho — revisar antes de publicar)
✓ Carrossel: marketing/conteudo/<slug>-<data>/
✓ Legendas: legenda.md + legenda-linkedin.md

Pra publicar de fato:
1. Revisar o artigo e tirar do modo rascunho
2. Publicar no site/CMS
3. Postar o carrossel com legenda.md
4. Postar o texto + link no LinkedIn com legenda-linkedin.md
```

Se o usuário já tiver a automação de publicação configurada, mencionar `/aprovar-post`.

## Princípios

1. O artigo é a peça-mãe — carrossel e legendas existem em função dele.
2. Tudo referencia tudo — o carrossel aponta pro blog, o blog fecha com CTA de contato.
3. Nunca publicar automaticamente — o usuário revisa antes (ou usa `/aprovar-post` de propósito).
4. Sem corporativês — a voz segue `_memoria/preferencias.md` à risca em todos os três formatos.
