---
name: seo
description: >
  Fluxo completo de SEO em 7 etapas: pesquisa de demanda, mapeamento de concorrência, perfil do
  Google Meu Negócio, otimização on-page, estratégia de conteúdo, checklist de monitoramento, e
  presença em respostas de IA (GEO). Use quando o usuário pedir "seo", "palavras-chave",
  "aparecer no google", "google meu negócio", "gmb", "pesquisa de concorrência", "aparecer no
  chatgpt", ou /seo.
---

# /seo — Pesquisa e estratégia de SEO

## Dependências

- **Negócio:** `_memoria/empresa.md` (produto/serviço, público, região, diferenciais).
- **Ferramentas:** WebSearch e WebFetch — toda pesquisa usa dados reais, nunca inventados.
- **Saída:** `marketing/seo/`.

---

## Etapa 1 — Demanda real

Extrair de `_memoria/empresa.md` as categorias de produto/serviço, região e público. Gerar uma
lista inicial de termos de busca (20-40) cobrindo intenção informacional, comercial e
transacional. Usar WebSearch pra checar o que de fato aparece pra cada termo (resultados
orgânicos, anúncios, pacote local) e estimar relevância/dificuldade a partir disso — nunca
inventar volume de busca sem alguma evidência.

**Saída:** `marketing/seo/01-demanda.md` — termos classificados, top 10 prioritários, termos
sazonais se houver sinal disso.

## Etapa 2 — Concorrência

Pros termos prioritários da Etapa 1, usar WebSearch pra identificar quem domina os resultados
(3-6 concorrentes reais). Usar WebFetch nos sites deles pra entender estrutura, profundidade de
conteúdo, e o que fazem bem ou mal. Identificar lacunas — onde nenhum concorrente atende bem a
intenção de busca.

**Saída:** `marketing/seo/02-concorrencia.md` — tabela de concorrentes, gaps, recomendação de
onde atacar primeiro.

## Etapa 3 — Google Meu Negócio

Levantar (via WebSearch) o estado atual do perfil, se existir. Montar checklist do que falta:
categoria certa, descrição otimizada (respeitando `_memoria/preferencias.md`), atributos, fotos
recomendadas, cadência de posts, e estratégia de resposta a avaliações (referenciar
`/responder-avaliacoes`).

**Saída:** `marketing/seo/03-gmb.md`.

## Etapa 4 — On-page

Se houver site acessível, usar WebFetch nas páginas principais e revisar: title, meta
description, hierarquia de headings, URLs. Sugerir dados estruturados (JSON-LD) básicos quando
fizer sentido (negócio local, produto, FAQ). Se não houver site, registrar isso e seguir sem
travar as demais etapas.

**Saída:** `marketing/seo/04-on-page.md` — tabela página → palavra-chave → ajustes sugeridos.

## Etapa 5 — Estratégia de conteúdo

A partir das lacunas das Etapas 1-2, montar uma lista de 5-10 temas prioritários com título,
palavra-chave alvo e uma linha de ângulo (o que esse conteúdo cobre que os concorrentes não
cobrem bem). Essa lista alimenta a skill `/publicar-tema` diretamente.

**Saída:** `marketing/seo/estrategia-conteudo.md`.

## Etapa 6 — Monitoramento

Checklist simples de cadência: o que checar semanalmente (posição nos termos prioritários,
avaliações novas), mensalmente (métricas de anúncios via `/relatorio-ads`, se aplicável), e
trimestralmente (revisão de concorrência e conteúdo).

**Saída:** `marketing/seo/06-monitoramento.md`.

## Etapa 7 — GEO (presença em respostas de IA)

Testar, via WebSearch, se o negócio (ou concorrentes) aparece quando ferramentas de busca com IA
respondem perguntas do nicho. Recomendar: conteúdo com respostas diretas logo no início de cada
seção, dados concretos (números, certificações), estrutura de pergunta-resposta, e presença em
fontes externas citáveis (diretórios, avaliações, menções).

**Saída:** `marketing/seo/07-geo.md`.

---

## Execução

Rodar as 7 etapas em sequência por padrão, mostrando um resumo curto entre cada uma antes de
seguir. Se o usuário pedir só uma etapa (`/seo etapa 3` ou `/seo gmb`), rodar só ela.

Ao final de todas, apresentar um resumo executivo: top 5 oportunidades, 3-5 ações prioritárias, e
o que precisa de decisão do usuário antes de seguir (ex: orçamento de anúncio, acesso ao site).

## Regras

- Toda pesquisa usa WebSearch/WebFetch — nunca inventar volume de busca, posição ou dado de
  concorrente sem alguma base real.
- Se um dado não puder ser confirmado, dizer isso explicitamente em vez de estimar sem avisar.
- Termos e conteúdo seguem `_memoria/preferencias.md`.
- Priorizar termos com intenção comercial/transacional quando o objetivo for geração de negócio;
  termos informacionais alimentam a estratégia de conteúdo, não anúncio pago.
