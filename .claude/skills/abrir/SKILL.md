---
name: abrir
description: >
  Carrega a memória do negócio (empresa.md, preferencias.md, estrategia.md, identidade.md) no
  início de uma sessão de trabalho e devolve um resumo curto pra começar. Use quando o usuário
  disser "abrir", "bora começar", "carrega o contexto", "/abrir", ou no primeiro turno de uma
  sessão depois de já ter rodado /instalar.
---

# /abrir — Início de sessão

Objetivo único: carregar contexto e devolver uma síntese curta — não uma lista de arquivos lidos.

## Workflow

1. Ler `_memoria/empresa.md`, `_memoria/preferencias.md`, `_memoria/estrategia.md`.
2. Ler `identidade/identidade.md` só pra saber se está preenchida ou em branco (não citar o
   conteúdo aqui).
3. Se `_memoria/empresa.md` ainda estiver com o template em branco, responder:
   > "Ainda não configurei o contexto desse negócio. Quer rodar `/instalar` agora?"
   e parar.
4. Caso contrário, responder em até 5 linhas:

```
[Nome] — [o que entrega, em poucas palavras]
Foco agora: [gargalo ou prioridade de estrategia.md, uma frase]
Tom: [3-4 palavras que resumem a voz]

Pronto. O que vamos fazer?
```

## Regras

- Não listar os arquivos lidos nem confirmar a leitura.
- Não fazer perguntas além de "o que vamos fazer?".
- Se a identidade visual estiver em branco, não mencionar aqui — só vira relevante quando uma
  skill visual for chamada.
- Isso carrega o contexto do negócio na raiz. Pra abrir o contexto de um cliente específico,
  trabalhar dentro de `clientes/<nome>/` ou pedir explicitamente.
