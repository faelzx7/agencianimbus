---
name: mapear-rotinas
description: >
  Entrevista o usuário sobre tarefas repetitivas do dia a dia e propõe skills novas pra
  automatizá-las, criando as aprovadas em .claude/skills/. Use quando o usuário pedir
  "/mapear-rotinas", "cria uma skill pra isso", "o que dá pra automatizar", "quero parar de
  fazer isso na mão toda semana".
---

# /mapear-rotinas — De tarefa repetida a skill própria

## Passo 1 — Descoberta

Três perguntas, uma por vez:

1. "Quais tarefas você repete toda semana e queria parar de fazer na mão? (pode listar várias)"
2. "Pra cada uma, qual é a entrada típica? (um link, um arquivo, um nome de cliente, uma
   pergunta recorrente)"
3. "E o que você espera receber no final?"

## Passo 2 — Checar sobreposição

Antes de propor skill nova, verificar se alguma tarefa mencionada já é coberta por: uma skill
existente em `.claude/skills/`; uma skill catalogada em `templates/skills/catalogo.md` (nativas
do Claude Code e de terceiros validadas); ou uma ferramenta catalogada em
`templates/ferramentas/catalogo.md`. Se já existir, sugerir usar a existente em vez de duplicar.

## Passo 3 — Propor

Pra cada tarefa sem cobertura, montar uma proposta:

```
### /<nome-sugerido>
O que faz: [uma frase]
Recebe: [entrada]
Entrega: [saída]
Depende de: [arquivos de _memoria/identidade, ou ferramenta externa]
```

Mostrar todas juntas e perguntar quais o usuário quer criar agora (pode ser todas, algumas ou
nenhuma, e pode pedir ajuste antes de aprovar).

## Passo 4 — Criar as aprovadas

Pra cada skill aprovada:
1. Criar `.claude/skills/<nome>/SKILL.md` com frontmatter (`name`, `description` com gatilhos
   claros de quando invocar), workflow em passos, dependências e regras — no mesmo padrão das
   skills já existentes no sistema.
2. Calibrar tom e exemplos por `_memoria/preferencias.md` e `_memoria/empresa.md`.
3. Se precisar de template ou exemplo de apoio, criar dentro da própria pasta da skill.

## Passo 5 — Resumo

```
Criei [N] skills novas:
✓ /<nome> — .claude/skills/<nome>/SKILL.md
...

Pra usar, chama a skill normalmente numa sessão. Pra ajustar depois, edita o SKILL.md
correspondente direto.
```

## Regras

- Não criar skill pra algo que só aconteceu uma vez — tem que ser de verdade repetível.
- No máximo 5 skills novas por rodada — se pedirem mais, dividir em outra sessão de mapeamento.
- Toda skill criada precisa de gatilho claro na `description` (frases que o usuário realmente
  diria) — sem isso a skill nunca é invocada quando deveria.
- Se a skill depender de algo que o usuário ainda não tem configurado (ex: uma API sem acesso),
  avisar antes de criar e oferecer uma versão mais simples que funcione sem essa dependência.
