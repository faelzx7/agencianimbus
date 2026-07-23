---
name: salvar
description: >
  Versiona o trabalho no Git — commit local, e push se já houver remoto configurado. Na primeira
  vez, oferece configurar um repositório remoto. Use quando o usuário disser "salvar", "commita
  isso", "sobe pro github", "push", "/salvar", ou pedir backup do trabalho.
---

# /salvar — Versionar o trabalho

## Workflow

### Sem repositório ainda

Checar com `git rev-parse --is-inside-work-tree`. Se falhar, rodar `git init`.

### Sem remoto configurado

Checar `git remote get-url origin`. Se não existir, perguntar uma vez:

> "Quer só commit local por enquanto, ou já configuramos um repositório remoto pra ter backup
> fora da máquina?
> 1. Só local por agora
> 2. Já tenho uma URL de repositório
> 3. Quero criar um novo agora"

- Opção 1: seguir só com commits locais, sem perguntar de novo a cada `/salvar` (só se o usuário
  trouxer o assunto).
- Opção 2: pedir a URL, `git remote add origin <url>`.
- Opção 3: se `gh` estiver disponível, usar pra criar o repositório; senão, orientar a criar em
  github.com/new (ou equivalente) e voltar com a URL.

### Commit

1. `git status` — sem mudanças, avisar "nada pra commitar" e parar (nunca commit vazio).
2. Mostrar o resumo do que mudou. Adicionar arquivos por nome, não `git add -A`/`.` no automático
   — conferir que nada sensível (`.env`, dados de cliente que não deveriam ir pro repo) está
   incluso antes de commitar, principalmente dentro de `clientes/`.
3. Mensagem de commit curta, objetiva, focada no que passou a existir (ou usar a do usuário se
   ele fornecer uma).
4. `git commit`. Se houver remoto, `git push` e confirmar com o link do repositório.

## Regras

- Nunca `--force` sem pedido explícito.
- Nunca `git reset --hard` ou operação destrutiva sem confirmação clara.
- Push com divergência: avisar e oferecer `git pull --rebase` antes de tentar de novo.
- Se `user.name`/`user.email` não estiverem configurados, perguntar e configurar antes do
  primeiro commit.
