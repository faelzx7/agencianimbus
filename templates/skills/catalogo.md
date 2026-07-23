# Catálogo de skills

Referência de skills prontas — nativas do Claude Code ou de terceiros — que complementam as
skills próprias do NimbusOS. Consultar antes de propor skill nova via `/mapear-rotinas`: se já
existe uma pronta que resolve, usar em vez de reinventar.

> Isso é diferente de `templates/ferramentas/catalogo.md`, que lista APIs/CLIs/MCPs (peças soltas
> que uma skill usa por baixo), não skills completas.

---

## Já coberto por skills próprias do NimbusOS — não precisa instalar nada

- **Copywriting** → `/copy`
- **Interface web / frontend** → `/frontend-design`
- **Revisão de segurança de código** → `/seguranca-codigo`
- **Auditoria de segurança de site** → `/seguranca-site`

## Documentos de escritório

### PDF (nativa do Claude Code)
**Faz:** extrai texto/tabela, cria PDF novo, junta/separa páginas, preenche formulário.
**Bom pra:** extrair dado de contrato, montar relatório em PDF, preencher formulário.
**Chamar com:** `/pdf`

### DOCX (nativa do Claude Code)
**Faz:** cria e edita documento Word, com formatação, alterações rastreadas e comentário.
**Bom pra:** proposta formal, contrato, documento que o cliente pede em Word.
**Chamar com:** `/docx`

### PPTX (nativa do Claude Code)
**Faz:** cria e edita apresentação PowerPoint, com layout e notas do apresentador.
**Bom pra:** apresentação pra cliente, deck de vendas, material de treinamento.
**Chamar com:** `/pptx`

### XLSX (nativa do Claude Code)
**Faz:** cria e edita planilha, com fórmula, formatação e gráfico.
**Bom pra:** relatório financeiro, dashboard em planilha, apoio pra `/analisar-dados`.
**Chamar com:** `/xlsx`

## Visual

### Canvas design (nativa do Claude Code)
**Faz:** cria arte em PNG/PDF aplicando princípio de design — pôster, capa, peça gráfica.
**Bom pra:** capa de material, banner, thumbnail — quando não for carrossel (isso é `/carrossel`).
**Chamar com:** `/canvas-design`

## Documentos e specs

### Doc co-authoring (nativa do Claude Code)
**Faz:** fluxo guiado de escrita conjunta — entrevista, itera rascunho, valida se o documento
funciona pro leitor final.
**Bom pra:** proposta técnica, especificação, documento de decisão interna.
**Chamar com:** `/doc-coauthoring`

## Testar aplicações

### Webapp testing (nativa do Claude Code)
**Faz:** testa aplicação web local via navegador — captura tela, verifica funcionamento, lê log
do navegador.
**Bom pra:** conferir landing page antes de publicar, checar responsividade.
**Chamar com:** `/webapp-testing`

## Criar skill do zero

### Skill creator (nativa do Claude Code)
**Faz:** guia estruturado pra criar skill nova — ajuda a definir gatilho e testar.
**Bom pra:** quando `/mapear-rotinas` não é suficiente e a skill precisa de mais profundidade.
**Chamar com:** `/skill-creator`

---

## Como adicionar uma skill nova a este catálogo

```markdown
### Nome da skill
**Faz:** [uma frase]
**Bom pra:** [caso de uso concreto]
**Chamar com:** [comando]
**Origem:** [nativa do Claude Code / criada localmente / de terceiros]
```
