---
name: aprovar-post
description: >
  Publica um conteúdo já pronto (criado por /publicar-tema): tira o artigo do modo rascunho, sobe
  as imagens do carrossel pro site e faz commit/push (deploy automático assume o resto), e prepara
  o carrossel e as legendas pra postagem nas redes. A postagem automática no Instagram/Facebook é
  uma etapa avançada opcional (requer app próprio da Meta). Use quando o usuário disser "aprova
  esse post", "publica o conteúdo de X", "pode postar", ou /aprovar-post <slug>.
---

# /aprovar-post — Publicação de um conteúdo aprovado

Ponte entre o conteúdo já criado (blog + carrossel + legendas) e a publicação. O caminho padrão
publica o blog e deixa o carrossel e as legendas prontos pra postar — funciona sem nenhuma
integração externa além do deploy do próprio site. A postagem automática nas redes é opcional e
descrita no fim.

## Quando não usar

- Conteúdo ainda não existe → rodar `/publicar-tema` primeiro.
- Usuário ainda está revisando o rascunho → esperar confirmação explícita de aprovação.

## Argumento

`/aprovar-post <slug>` — slug do artigo (nome do arquivo em `marketing/conteudo/`, sem `.md`).
Sem argumento, listar os artigos em rascunho e perguntar qual.

## Caminho padrão (sempre funciona)

### Passo 1 — Localizar os arquivos

- Artigo: `marketing/conteudo/<slug>.md`.
- Pasta do carrossel: `marketing/conteudo/<slug>-*` (sufixo de data).
- Confirmar que existem os PNGs dos slides e as legendas (`legenda.md`, `legenda-linkedin.md`).
  Se faltar algo, parar e relatar o que falta.

### Passo 2 — Confirmação

Mostrar: título do artigo, quantos slides tem o carrossel, primeiras linhas da legenda, e a URL
final. Perguntar explicitamente: **"Confirma a publicação do blog?"** — só seguir com "sim".

### Passo 3 — Publicar o blog

- Tirar o artigo do modo rascunho no frontmatter.
- Copiar os PNGs do carrossel pra pasta pública do site (criar destino se não existir).
- Commit e push:
  ```bash
  git add <arquivo do artigo> <pasta de imagens>
  git commit -m "publica: <título>"
  git push
  ```
- Se o site tiver deploy automático, aguardar (1-3 min típico) e checar que a URL responde:
  ```bash
  curl -sf -o /dev/null -w "%{http_code}" "<SITE_URL>/blog/<slug>/"
  ```
  Sem deploy automático configurado, apenas avisar que o push foi feito e o site precisa ser
  publicado pelo processo que o usuário já usa.

### Passo 4 — Preparar as redes pra postagem

O sistema não posta sozinho no caminho padrão — entrega tudo pronto pra o usuário publicar em
poucos cliques:

```
Blog publicado: <SITE_URL>/blog/<slug>/

Pra postar nas redes (manual):
- Instagram/Facebook: subir os slides de marketing/conteudo/<slug>-<data>/slides/
  com o texto de legenda.md
- LinkedIn: texto + link do blog, usando legenda-linkedin.md
```

Mostrar o texto das legendas direto na conversa pra facilitar o copiar-e-colar.

## Postagem automática nas redes (opcional, avançado)

Só quando o usuário **explicitamente** pedir postagem automática e tiver a infraestrutura própria
configurada. Isso não é necessário pra usar a skill — o caminho padrão acima já entrega o
trabalho pronto.

### Pré-requisitos (responsabilidade do usuário)

- Um app próprio da Meta, com **App Review aprovado** e verificação de negócio concluída — a Meta
  exige isso pra publicar em contas que não sejam a de quem criou o app (o caso de uma agência
  postando na conta de um cliente). Esse processo é feito pelo usuário junto à Meta e leva tempo.
- `.env` na raiz (nunca commitado — coberto pelo `.gitignore`) com as credenciais do app do
  usuário: `META_PAGE_ACCESS_TOKEN`, `META_PAGE_ID`, `META_IG_USER_ID`, `SITE_URL`.
- Conta Instagram Business conectada à Página do Facebook.
- Um script de publicação em `scripts/` que o usuário tenha configurado pro próprio app.

Se qualquer pré-requisito faltar, **não tentar postar** — explicar o que falta e seguir só com o
caminho padrão (blog publicado + legendas prontas pra postar manual). Nunca tratar a ausência da
integração como erro: pra maioria dos usuários, postar manual é o fluxo normal.

### Fluxo (quando os pré-requisitos existem)

1. Garantir que os slides estão acessíveis por URL pública (a Meta busca a imagem por URL) —
   depende do deploy do Passo 3 ter concluído.
2. Rodar o script de publicação do usuário. Capturar o ID retornado. Se o Instagram falhar, não
   seguir pro Facebook — relatar e parar.
3. LinkedIn permanece manual (a API de página exige aprovação própria demorada) — entregar o
   texto de `legenda-linkedin.md` pra postar à mão.

## Princípios

1. O caminho padrão nunca depende de integração externa além do deploy do próprio site — funciona
   pra qualquer usuário no dia 1.
2. Nunca pular a confirmação humana antes de publicar — publicação é irreversível na prática.
3. Rodar de novo com o mesmo slug deve detectar que já foi publicado e perguntar se é republicação
   ou só atualização, em vez de duplicar.
4. Integração de postagem automática é opcional e do usuário — sua ausência não é erro, é o fluxo
   padrão.
