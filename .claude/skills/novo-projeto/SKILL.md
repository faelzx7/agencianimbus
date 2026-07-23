---
name: novo-projeto
description: >
  Cria uma pasta isolada em clientes/<nome>/ (ou projetos/<nome>/ para iniciativas internas)
  com memória e identidade próprias, depois de uma entrevista curta sobre o cliente ou projeto.
  Use quando o usuário disser "novo cliente", "novo projeto", "/novo-projeto", "começa um projeto
  pra X", ou pedir pra estruturar um trabalho novo isolado do resto.
---

# /novo-projeto — Pasta isolada por cliente ou projeto

## Passo 1 — Entrevista

1. "Nome do cliente ou projeto?"
2. "É um cliente que vocês atendem, ou uma iniciativa interna (produto próprio, campanha
   institucional)?"
3. "Em uma frase, qual o objetivo principal desse trabalho?"
4. "Que tipo de entrega vai rolar? (conteúdo, ads, SEO, copy, segurança, análise de dados — pode
   ser mais de uma)"

## Passo 2 — Onde criar

- Cliente → `clientes/<slug>/`
- Iniciativa interna → `projetos/<slug>/` (criar a pasta `projetos/` se ainda não existir)

Slug: nome em minúsculas, sem acento, espaços viram hífen, mantendo reconhecível (não abreviar
agressivamente).

Se a pasta já existir, avisar e perguntar se é pra continuar o que já tem ou usar outro nome —
nunca sobrescrever sem confirmação.

## Passo 3 — Estrutura

```
clientes/<slug>/  (ou projetos/<slug>/)
├── _memoria/
│   ├── empresa.md       ← sobre ESSE cliente/projeto, não sobre a agência
│   ├── preferencias.md
│   └── estrategia.md
├── identidade/
│   └── identidade.md
├── marketing/
└── saidas/
```

Preencher `_memoria/empresa.md` e `estrategia.md` já com as respostas 1-4 (a entrevista completa
de voz/identidade fica pra quando o usuário quiser rodar `/instalar` de dentro dessa pasta, ou
responder mais detalhadamente agora — perguntar se quer aprofundar já).

## Passo 4 — Resumo

```
Pasta criada: clientes/<slug>/ (ou projetos/<slug>/)
✓ _memoria/empresa.md
✓ _memoria/preferencias.md (em branco — preencher quando tiver exemplo de escrita do cliente)
✓ _memoria/estrategia.md
✓ identidade/identidade.md (em branco — preencher quando tiver a marca do cliente)

Pra trabalhar nesse cliente/projeto, abre uma sessão dentro dessa pasta — assim o contexto
carregado é o dele, isolado do resto.
```

## Regras

- Nome de pasta reconhecível — não normalizar a ponto de perder o nome do cliente.
- Não criar subpastas além das listadas "pra organizar melhor" sem terem sido mencionadas.
- A memória e identidade daqui **nunca** se misturam com a da agência na raiz nem com a de outro
  cliente — cada `clientes/<nome>/` é um compartimento fechado.
