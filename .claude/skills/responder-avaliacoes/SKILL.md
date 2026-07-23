---
name: responder-avaliacoes
description: >
  Escreve respostas curtas e humanas para avaliações do Google Meu Negócio ou outra plataforma
  de reviews. Nada de resposta padronizada de empresa grande. Use quando o usuário disser
  "responder avaliação", "chegou uma review nova", "me ajuda a responder isso", ou colar o texto
  de uma avaliação.
---

# /responder-avaliacoes — Respostas a reviews

## Dependências

- **Voz:** `_memoria/preferencias.md`.
- **Negócio:** `_memoria/empresa.md` (pra puxar algo concreto e real na resposta).

## Padrão

Resposta curta (1-2 frases), pessoal, específica. O oposto de "agradecemos seu feedback,
valorizamos sua opinião" — isso não soa como ninguém de verdade.

### Regras de escrita

1. Citar o nome de quem avaliou quando disponível e capitalizar corretamente (perfis em
   minúsculo ganham capitalização normal na resposta).
2. Variar o agradecimento — não repetir a mesma abertura em respostas seguidas.
3. Ancorar em algo concreto: o que a pessoa elogiou especificamente, ou algo real do negócio —
   nunca um genérico que serviria pra qualquer review de qualquer empresa.
4. Emoji é opcional, no máximo um, só quando o tom da review for caloroso — nunca em review
   formal, seca ou negativa.
5. Seguir `_memoria/preferencias.md` à risca — sem "prezado cliente", sem jargão de marketing.

### Como calibrar por tipo de review

| Tipo | Abordagem |
|---|---|
| Elogio específico | Agradecer + ecoar o que foi elogiado |
| Elogio genérico/curto | Agradecer + uma frase real sobre o cuidado do negócio |
| Sem texto, só nota alta | Agradecimento breve, sem inventar contexto que não existe |
| Elogio com ressalva | Agradecer + reconhecer o ponto levantado, sem se justificar demais |
| Review negativa | **Parar antes de responder automaticamente** — alinhar com o usuário a abordagem certa pra esse caso específico |

## Workflow

### Passo 1 — Receber a avaliação

Extrair nome, nota e texto (se houver). Se vier como imagem/print, ler e transcrever antes de
responder.

### Passo 2 — Escrever

Uma resposta por review, seguindo o padrão acima. Nunca copiar a mesma resposta pra reviews
diferentes, mesmo que pareçam parecidas.

### Passo 3 — Entregar

```
**[Nome]** — [nota] — "[trecho da review]"
→ [resposta]
```

Se forem várias, entregar todas juntas nesse formato, prontas pra copiar.

### Passo 4 — Registro (só se pedido)

Se o usuário quiser guardar histórico, salvar em
`marketing/avaliacoes/<data>-respostas.md`. Não criar isso por padrão.

## Regras

- Nunca prometer algo que depende de terceiros (prazo de fornecedor, logística terceirizada).
- Nunca usar sobrenome completo na resposta pública — só o primeiro nome.
- Nunca mencionar concorrentes, mesmo que a review mencione.
- Reviews negativas: reconhecer sem se defender, e só oferecer contato privado se o usuário
  autorizar essa linha na resposta.
