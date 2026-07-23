# Molde de perfil — Agência / consultoria

> Usado pelo `/instalar` quando o perfil escolhido é "agência". O conteúdo abaixo entra na seção
> "Sobre este negócio" do `CLAUDE.md`, adaptado com as respostas da entrevista — não é copiado
> literalmente.

## Pastas específicas desse perfil

Além do núcleo (`_memoria/`, `identidade/`, `marketing/`, `saidas/`, `scripts/`, `dados/`):

- `clientes/<nome>/` — um cliente, uma pasta isolada (via `/novo-projeto`), com sua própria
  `_memoria/`, `identidade/`, `marketing/` e `saidas/` — nunca misturada com a de outro cliente
  nem com a da agência na raiz.
- `briefings/` — briefings de prospects, antes de virarem cliente fechado.
- `propostas/` — propostas comerciais em andamento.

## O que descrever

- Tipo de serviço (marketing digital, design, conteúdo, consultoria, dev, etc.) e nicho de
  atuação preferencial, se houver um.
- Perfil real do cliente atendido — porte, ticket médio, segmento.
- Tamanho do time e como o trabalho se divide entre as pessoas.
- Capacidade — quantos clientes ativos simultâneos fazem sentido pro tamanho do time.

## Regra de organização sugerida

Cliente novo fechado → `/novo-projeto` cria a pasta isolada em `clientes/`. Proposta que ainda
não fechou fica em `propostas/`. Caso de sucesso de um cliente (pra reusar em pitch futuro) vive
dentro da própria pasta do cliente, não solto na raiz.
