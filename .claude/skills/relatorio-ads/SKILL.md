---
name: relatorio-ads
description: >
  Lê exports de Google Ads e/ou Meta Ads e gera relatório semanal com KPIs, comparação com a
  semana anterior, alertas de desperdício/queda de performance, e recomendações concretas pra
  semana seguinte. Use quando o usuário pedir "relatório de ads", "como foram os anúncios essa
  semana", "performance de campanha", ou /relatorio-ads.
---

# /relatorio-ads — Relatório semanal de performance paga

## Dependências

- **Negócio:** `_memoria/empresa.md`, `_memoria/estrategia.md`.
- **Voz:** `_memoria/preferencias.md` — o relatório fala a língua de quem vai lê-lo, traduzindo
  sigla técnica quando o leitor não for do meio de ads.
- **Entrada:** CSV/XLSX exportado do Google Ads e/ou Meta Ads Manager (ou print, transcrito).
- **Histórico:** `marketing/campanhas/relatorios/`.

## Workflow

### Passo 1 — Ler os exports

Se o caminho não vier no pedido, perguntar onde estão os arquivos. Extrair, no mínimo:
impressões, cliques, CTR, custo, conversões, custo por conversão (e ROAS, se houver dado de
receita). Se faltar coluna crítica, avisar e seguir só com o que der.

### Passo 2 — Comparar com a semana anterior

Procurar o relatório anterior em `marketing/campanhas/relatorios/`. Se existir, calcular variação
percentual de cada métrica. Se não existir, marcar como primeira leitura (linha de base) — número
solto sem comparação não diz muita coisa.

### Passo 3 — Resumo executivo

```markdown
# Relatório de ads — semana de <DD/MM> a <DD/MM>

**Investimento:** R$ X (▲/▼ Y% vs. semana anterior)
**Conversões:** N (▲/▼ Y%)
**Custo por conversão:** R$ X (▲/▼ Y%)

**Por canal:** Google Ads R$ X → N conversões · Meta Ads R$ X → N conversões

**O que mais importa essa semana:** [uma frase — o que estourou, o que travou, o alerta principal]
```

### Passo 4 — Detalhamento

Top 3 e bottom 3 campanhas/grupos por custo-por-conversão. Pra Meta, top/bottom criativos por
CTR e custo por resultado. Pra Google, termos de busca com custo alto e zero conversão —
candidatos a virar negativas.

### Passo 5 — Alertas

| Sinal | Critério |
|---|---|
| 🔴 Gasto sem retorno | Campanha/grupo gastou valor relevante com zero conversão |
| 🔴 Queda de CTR | Caiu mais de 25% vs. semana anterior |
| 🟡 Frequência alta (Meta) | Acima de 3 — indício de público saturado |
| 🟡 Custo por clique subindo | Alta de 20%+ vs. semana anterior |
| 🟢 Oportunidade | Performance acima da média com orçamento limitado — candidato a receber mais verba |

### Passo 6 — Recomendações

3-5 ações concretas e nomeadas — "pausar o grupo X, que gastou R$ Y sem conversão" é útil;
"otimizar as campanhas" não é.

### Passo 7 — Salvar

`marketing/campanhas/relatorios/<data>-relatorio.md`, com um cabeçalho simples (período, total
investido, total de conversões, custo médio) que facilita comparação nas próximas leituras.

### Passo 8 — Entrega

Mostrar o resumo executivo + alertas + recomendações direto na conversa, e apontar pro arquivo
completo. Perguntar se o usuário quer que o resumo vire um e-mail pro cliente (nesse caso, usar
`/email-profissional`).

## Regras

- Nunca inventar número — export incompleto ou ilegível é reportado como tal, não preenchido
  por estimativa.
- Toda métrica isolada precisa de comparação pra significar algo.
- Alertas em ordem: crítico primeiro, atenção depois, oportunidade por último.
- Linguagem segue `_memoria/preferencias.md` — se o leitor final não for do meio de ads, traduzir
  sigla (CPA, CTR, CPM) em vez de assumir que ele entende.
- Reportar perda com clareza, sem suavizar ("a campanha X gastou R$ 300 sem gerar venda" é mais
  útil que "performance abaixo do esperado").
