---
name: atualizar
description: >
  Compara os arquivos de memória (empresa.md, estrategia.md, identidade.md, CLAUDE.md) com o
  estado real do workspace — clientes em clientes/, entregas recentes em marketing/ e saidas/ —
  e propõe atualizações, sem aplicar nada sem confirmação. Use quando o usuário disser "atualiza
  a memória", "/atualizar", "varre o projeto", ou pedir uma reconciliação geral.
---

# /atualizar — Reconciliar memória com a realidade

## Workflow

### Passo 1 — Levantamento

- Subpastas de `clientes/` (cada uma é um cliente ativo).
- Arquivos criados/modificados recentemente em `marketing/`, `saidas/`, e nas pastas
  equivalentes dentro de cada `clientes/<nome>/` (usar `git log` ou data de modificação como
  evidência — nunca supor atividade sem rastro real).
- Skills existentes em `.claude/skills/`.

### Passo 2 — Comparação

- `_memoria/empresa.md`: a lista de clientes ativos bate com as pastas em `clientes/`?
- `_memoria/estrategia.md`: o que está descrito como prioridade ainda condiz com o que foi
  produzido/entregue recentemente?
- `identidade/identidade.md`: continua coerente com o que foi gerado nas últimas peças visuais?
- `CLAUDE.md`: a estrutura de pastas descrita bate com o que existe de fato?

### Passo 3 — Proposta

Apresentar como lista curta, nunca aplicar direto:

```
Encontrei [N] pontos pra atualizar:

1. _memoria/empresa.md — cliente "Acme" tem pasta em clientes/ desde [data] mas não está listado
2. _memoria/estrategia.md — menciona prazo de [data] já vencido, sem registro do que aconteceu
3. CLAUDE.md — cita uma pasta que não existe mais

Aplico tudo, algumas, ou nenhuma?
```

### Passo 4 — Aplicação

Só depois de aprovado. Editar cirurgicamente — a linha específica, não reescrever o arquivo
inteiro. Mostrar o que mudou em cada arquivo tocado.

## Regras

- Nunca inventar fato sem evidência real no workspace.
- Evidência ambígua (ex: pasta vazia recém-criada) → perguntar antes de registrar.
- Nunca apagar conteúdo existente — só atualizar ou complementar.
- Sem nada pra atualizar, responder isso diretamente e parar.
- Isso cobre a memória do negócio na raiz. Pra reconciliar a memória de um cliente específico,
  rodar de dentro de `clientes/<nome>/` ou pedir explicitamente.
