---
name: analisar-dados
description: >
  Lê um arquivo de dados (CSV, XLSX, PDF, TXT) e devolve um resumo executivo em prosa com
  destaques, pontos de atenção e recomendações. Use quando o usuário disser "analisa esse
  arquivo", "o que esses dados mostram", "resume esse relatório", ou anexar um arquivo de dados.
---

# /analisar-dados — Leitura executiva de arquivo

## Dependências

- **Negócio:** `_memoria/empresa.md` (contexto pra interpretar o que os dados representam).
- **Voz:** `_memoria/preferencias.md`.

## Workflow

### Passo 1 — Contexto

Se não estiver óbvio pelo nome do arquivo ou conteúdo, perguntar: "O que é esse arquivo? E qual
pergunta você quer responder com ele?" Se for óbvio, seguir sem perguntar.

### Passo 2 — Ler o arquivo

CSV, XLSX, PDF ou TXT — usar a ferramenta adequada pra extrair o conteúdo de fato (não assumir
estrutura sem checar).

### Passo 3 — Análise

- **O que está indo bem:** métricas acima da média, tendência de alta, destaques por categoria.
- **O que preocupa:** quedas, valores fora do padrão, o que está abaixo do esperado.
- **Comparações:** período atual vs. anterior (se houver), melhor vs. pior desempenho, distribuição
  entre categorias.
- **O que não é óbvio de cara:** correlações ou padrões que só aparecem olhando com atenção.

### Passo 4 — Entregar

Resumo executivo em prosa (não só lista de bullets) — quem lê deve entender sem abrir o arquivo
original:

```markdown
# Análise — [nome do arquivo]
[data]

## O que esses dados mostram
[2-3 parágrafos com o panorama geral]

## O que está funcionando
## O que merece atenção

## Recomendações
1. [ação concreta]
2. [ação concreta]
3. [ação concreta]

## Números-chave
| Métrica | Valor | Contexto |
```

Perguntar se quer o resumo exportado (ex: como página HTML) pra compartilhar ou apresentar.

## Regras

- Prosa, não só listas — o objetivo é que o leitor entenda sem abrir a planilha.
- Nunca inventar dado que não está no arquivo.
- Dados incompletos ou com problema → mencionar isso antes de analisar, não silenciar.
- Tom segue `_memoria/preferencias.md`.
