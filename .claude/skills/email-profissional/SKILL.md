---
name: email-profissional
description: >
  Rascunha um e-mail profissional a partir de contexto livre, calibrando tom pelo destinatário e
  objetivo. Use quando o usuário disser "escreve um email pra", "preciso mandar um email sobre",
  "como eu respondo isso", ou /email-profissional.
---

# /email-profissional — Rascunho de e-mail

## Dependências

- **Negócio:** `_memoria/empresa.md`.
- **Voz:** `_memoria/preferencias.md`.

## Workflow

### Passo 1 — Contexto

Se não vier no pedido, perguntar:
1. "Pra quem é? (nome, e a relação — cliente novo, parceiro antigo, fornecedor)"
2. "Qual o objetivo? (cobrar, propor, responder, agradecer, dar seguimento)"
3. "Tem algo que precisa constar, ou algo que é melhor evitar dizer?"

Se o usuário já deu o contexto de forma corrida (mesmo desorganizado), extrair o que der e
prosseguir sem repetir as perguntas.

### Passo 2 — Escrever

- Tom proporcional à relação — cliente novo pede mais cuidado, parceiro antigo aceita mais
  diretamente.
- Objetivo claro logo na abertura — não enterrar o pedido no fim do texto.
- Uma ação pedida por vez.
- Fechamento sem redundância automática ("qualquer dúvida, à disposição" só entra se fizer
  sentido, não por hábito).

```
Assunto: [direto, específico — nunca "seguimento" ou "proposta" sozinho]

[Nome],

[parágrafo 1 — contexto ou referência ao contato anterior]

[parágrafo 2 — o ponto principal ou pedido]

[parágrafo 3 — próximo passo, se houver]

[assinatura, de _memoria/empresa.md]
```

### Passo 3 — Oferecer variação (quando o assunto for delicado)

Pra cobrança, feedback negativo ou recusa, oferecer duas versões — uma mais direta, uma mais
suave — e deixar o usuário escolher.

## Regras

- Tom segue `_memoria/preferencias.md`.
- Assunto específico e descritivo, nunca vago.
- Cobrança: direto, sem agressividade.
- Resposta a algo: citar o contexto já na primeira linha.
- Nunca linguagem corporativa genérica sem necessidade real.
