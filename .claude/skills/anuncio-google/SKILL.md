---
name: anuncio-google
description: >
  Monta a estrutura de uma campanha de Google Ads a partir de um briefing (ou da estratégia
  produzida pela skill /seo) e gera os CSVs prontos pra importar no Google Ads Editor:
  campanhas, grupos, palavras-chave, negativas, anúncios e extensões. Use quando o usuário pedir
  "campanha de google ads", "anúncio no google", "csv pro ads editor", ou /anuncio-google.
---

# /anuncio-google — Estrutura de campanha pronta pra importar

## Dependências

- **Negócio:** `_memoria/empresa.md`.
- **Voz:** `_memoria/preferencias.md`.
- **Pesquisa prévia (se existir):** `marketing/seo/01-demanda.md` — usar como base de palavras-
  chave em vez de gerar do zero.
- **Saída:** `marketing/campanhas/google-<data>/`.

---

## Passo 1 — Briefing

Se não vier de `marketing/seo/`, perguntar:
1. Produto/serviço a anunciar.
2. Público e a dor que resolve.
3. Raio geográfico e cidade-base.
4. Orçamento diário.
5. Objetivo (ligação, WhatsApp, formulário, visita à loja).
6. URL de destino.

## Passo 2 — Palavras-chave

Usar o material de `marketing/seo/01-demanda.md` se existir (filtrando por intenção comercial/
transacional — descartar as informacionais, que servem pra conteúdo orgânico, não anúncio). Sem
pesquisa prévia, gerar uma lista a partir do briefing e usar WebSearch pra checar concorrência
antes de finalizar. Agrupar por cluster de intenção (um grupo de anúncio por cluster).

## Passo 3 — Estrutura

```
Campanha — Pesquisa geral
├── Grupo <cluster 1>
│   ├── 8-15 palavras-chave (mix de frase e exata)
│   ├── 2-3 anúncios responsivos (múltiplos títulos/descrições)
│   └── negativas específicas do grupo
├── Grupo <cluster 2>
│   └── ...
Negativas globais: termos genéricos fora de intenção, marcas de concorrentes
```

## Passo 4 — Anúncios responsivos

Por grupo: 10-15 títulos (variando keyword principal, diferencial concreto, chamada de ação,
prova social real) e 3-4 descrições. Respeitar limites do Google (título: 30 caracteres,
descrição: 90 caracteres — contar antes de fechar cada linha). Seguir `_memoria/preferencias.md`,
sem superlativo não sustentado ("o melhor", "líder") e sem emoji/caixa alta.

## Passo 5 — Extensões

Sitelinks (4-6), extensão de chamada (telefone de `_memoria/empresa.md`), snippets estruturados
(lista de serviços/categorias), e preço se fizer sentido pro negócio.

## Passo 6 — Configurações recomendadas

Estratégia de lance inicial ("maximizar conversões" até acumular histórico), orçamento diário do
briefing, segmentação geográfica, idioma, e a lista de conversões que precisam estar configuradas
antes de ativar (clique no WhatsApp, envio de formulário, ligação).

## Passo 7 — Gerar os arquivos

```
marketing/campanhas/google-<data>/
  campanhas.csv
  grupos.csv
  palavras-chave.csv
  negativas.csv
  anuncios.csv
  extensoes.csv
  configuracoes.md
  como-importar.md   ← passo a passo pra subir no Google Ads Editor
```

Formato de coluna alinhado ao padrão de importação do Google Ads Editor — avisar o usuário que o
mapeamento exato de colunas deve ser conferido contra a versão atual do Editor antes de importar
(o formato muda entre versões).

## Passo 8 — Resumo

```
✓ Campanha pronta: marketing/campanhas/google-<data>/
<N> grupos · <N> palavras-chave · <N> anúncios

Pra subir: abrir Google Ads Editor → Importar → CSV, na ordem campanhas → grupos → palavras-
chave → anúncios → extensões. Tudo sobe pausado — revisar e ativar manualmente.
```

## Regras

- Nunca inventar CPC ou custo estimado sem alguma base real (WebSearch da concorrência) — se
  perguntarem quanto vai custar, responder com faixa e a lógica por trás, não um número seco.
- Campanha sempre sobe pausada — ativação é decisão do usuário.
- Sem conversão configurada, avisar que o Google não otimiza direito e pedir esse setup antes de
  ativar de verdade.
- Lista de negativas globais é obrigatória, nunca opcional.
- Não anunciar por termos puramente informacionais — esses ficam pro conteúdo orgânico.
