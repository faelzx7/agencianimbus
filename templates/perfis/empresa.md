# Molde de perfil — Empresa estruturada

> Usado pelo `/instalar` quando o perfil escolhido é "empresa com áreas definidas". O conteúdo
> abaixo entra na seção "Sobre este negócio" do `CLAUDE.md`, adaptado com as respostas da
> entrevista — não é copiado literalmente.

## Pastas específicas desse perfil

Além do núcleo (`_memoria/`, `identidade/`, `saidas/`, `scripts/`, `dados/`), organizado por
área em vez de por cliente:

- `marketing/` — campanhas, conteúdo, mídia paga (já faz parte do núcleo, mas aqui é uma área
  com responsável próprio).
- `comercial/` — pipeline, propostas, materiais de venda.
- `financeiro/` — relatórios, orçamento, fluxo de caixa.
- `operacoes/` — processos internos, procedimentos, fornecedores.
- `projetos/<nome>/` — iniciativas que cruzam mais de uma área.

Adicionar ou remover área conforme a realidade real da empresa — não criar área vazia só porque
está nesse molde.

## O que descrever

- Segmento de atuação e porte da empresa.
- Áreas existentes de fato, e quem responde por cada uma.
- Entregáveis recorrentes por área (o que sai toda semana/mês de cada uma).

## Regra de organização sugerida

Cada área guarda o que produz na própria pasta. Iniciativa que envolve mais de uma área vai em
`projetos/<nome>/`, não duplicada nas pastas de cada área envolvida.
