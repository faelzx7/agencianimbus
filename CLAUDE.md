# NimbusOS

O negócio roda em cima deste arquivo. Aqui ficam as regras de como o sistema lê contexto,
aprende com correções, mantém a memória em dia e cria skills novas conforme o uso evolui.

Este arquivo é editável. O `/instalar` complementa a seção "Sobre este negócio" abaixo — o resto
das regras vale pra qualquer instalação do NimbusOS.

---

## Sobre este negócio

> Preenchido pelo `/instalar`. Enquanto estiver vazio, o sistema ainda não foi configurado —
> sugerir `/instalar` antes de tarefas que dependam de contexto do negócio.

---

## Contexto do negócio

No início de cada sessão, ler (quando existirem e estiverem preenchidos):

1. `_memoria/empresa.md` — quem é, o que faz, pra quem vende.
2. `_memoria/preferencias.md` — como escreve, o que evitar.
3. `_memoria/estrategia.md` — prioridades e gargalo do momento.

Usar isso como base de qualquer decisão ou sugestão, sem listar o que foi lido nem confirmar a
leitura — só usar o contexto com naturalidade.

Pra qualquer peça visual (carrossel, post, landing page), consultar `identidade/identidade.md`
antes de desenhar.

Se o trabalho for de um cliente específico atendido dentro de `clientes/<nome>/`, o contexto
daquela pasta prevalece sobre o da raiz para aquele cliente — e nunca se mistura com o de outro
cliente nem com o do negócio na raiz.

---

## Fluxo de trabalho

Antes de executar uma tarefa, checar se existe skill relevante em `.claude/skills/`. Se existir,
seguir as instruções dela. Se não existir, executar a tarefa normalmente.

Ao concluir uma tarefa sem skill correspondente que pareça repetível (o usuário provavelmente vai
pedir de novo), perguntar:

> "Isso parece coisa de repetir. Quer que eu transforme numa skill?"

Não perguntar isso pra tarefa pontual ou pergunta simples — só quando o padrão de repetição for
claro.

---

## Aprender com correções

Quando o usuário corrigir algo ou der uma instrução que soa permanente ("na verdade é assim",
"não faz mais isso", "prefiro assim", "sempre que...", "evita..."), perguntar:

> "Guardo isso pra não precisar repetir depois?"

Se sim, salvar no lugar certo:

- Fato sobre o negócio (cliente, serviço, mercado) → `_memoria/empresa.md`
- Tom, estilo, o que evitar → `_memoria/preferencias.md`
- Prioridade ou prazo → `_memoria/estrategia.md`
- Regra de comportamento do sistema → este `CLAUDE.md`

Adicionar como uma linha nova clara, sem reformatar o arquivo inteiro, e mostrar o que foi
adicionado.

Não perguntar quando a correção for óbvia de contexto imediato (ex: "na verdade o arquivo se
chama Y") — só quando a informação tiver valor duradouro.

---

## Manter a memória em dia

Ao terminar uma tarefa que mudou algo relevante (cliente novo, mudança de foco, skill criada,
ferramenta nova, estrutura de pasta alterada), perguntar:

> "Isso muda alguma coisa na memória? Atualizo?"

Se sim, identificar o arquivo certo (mesma lista da seção anterior, mais `identidade/identidade.md`
pra mudança visual) e mostrar o que vai mudar antes de salvar — edição pontual, nunca reescrita
do arquivo inteiro.

**Quando não perguntar:** tarefa pontual sem impacto de contexto (um e-mail avulso, um post isolado),
pergunta simples sem ação, ou mudança que já foi salva pelo bloco "Aprender com correções".

Na dúvida, sugerir `/atualizar` pra uma varredura completa.

---

## Criação de skills

Quando o usuário pedir skill nova (diretamente, ou via `/mapear-rotinas`):

1. Perguntar se é específica desse negócio/cliente ou útil em qualquer contexto:
   - Específica → `.claude/skills/<nome>/SKILL.md` (local, só esse workspace)
   - Universal → skill global do Claude Code, fora deste projeto
2. Ler `_memoria/empresa.md` e `_memoria/preferencias.md` pra calibrar a skill ao contexto real.
3. Escrever com frontmatter (`name`, `description` com gatilhos claros de quando invocar),
   workflow em passos, dependências e regras — no mesmo padrão das skills já existentes.
4. Se precisar de arquivo de apoio (template, exemplo), criar dentro da pasta da própria skill.
