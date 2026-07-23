# Molde de perfil — Freelancer com clientes

> Usado pelo `/instalar` quando o perfil escolhido é "freelancer com clientes". O conteúdo abaixo
> entra na seção "Sobre este negócio" do `CLAUDE.md`, adaptado com as respostas da entrevista —
> não é copiado literalmente.

## Pastas específicas desse perfil

Além do núcleo (`_memoria/`, `identidade/`, `marketing/`, `saidas/`, `scripts/`, `dados/`):

- `clientes/<nome>/` — um cliente, uma pasta isolada (via `/novo-projeto`), memória e identidade
  próprias.
- `propostas/` — propostas em rascunho ou já enviadas que ainda não viraram cliente fechado.

## O que descrever

- Área de atuação e o tipo real de cliente que contrata (porte, nicho, ticket médio se souber).
- Serviço(s) principal(is) — específico, não uma lista genérica de habilidades.
- Capacidade simultânea (quantos projetos ao mesmo tempo faz sentido tocar).
- Como o trabalho flui: como recebe briefing, como entrega, ferramentas que usa no dia a dia.

## Regra de organização sugerida

Cliente fechado → `/novo-projeto` cria `clientes/<nome>/` com briefing e contexto próprio.
Proposta que ainda não fechou fica em `propostas/`, não dentro de `clientes/` — só vira pasta de
cliente quando o trabalho é confirmado.
