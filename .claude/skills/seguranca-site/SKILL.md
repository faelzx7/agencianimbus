---
name: seguranca-site
description: >
  Faz uma auditoria de segurança e higiene técnica não-intrusiva de um site (do próprio negócio
  ou de um cliente sob gestão): certificado SSL/TLS, headers de segurança HTTP, exposição comum
  de arquivos sensíveis, sinais de CMS/plugins desatualizados, e autenticação de e-mail
  (SPF/DKIM/DMARC). Devolve relatório em linguagem simples com prioridade de correção. Use quando
  o usuário pedir "auditoria de segurança do site", "o site é seguro?", "checklist de segurança",
  ou /seguranca-site.
---

# /seguranca-site — Auditoria de segurança não-intrusiva

Skill de diagnóstico, não de ataque. Só faz verificações **públicas e não-intrusivas** — o tipo
de checagem que qualquer visitante ou ferramenta pública de auditoria (o mesmo princípio de
checadores públicos de segurança) já faz de fora. Não explora vulnerabilidade, não faz
força-bruta, não faz varredura de portas, não audita site de terceiros sem relação com o usuário.

## Quando usar / quando não usar

- **Usar:** site do próprio negócio, ou de um cliente atendido/gerenciado pela agência.
- **Não usar:** site de terceiros sem relação com o usuário. Se pedirem isso, explicar que a
  skill é pra sites sob gestão própria ou de cliente — não pra investigar concorrente ou site
  aleatório.
- Autorização ambígua (ex: "audita o site da empresa X" sem contexto de que é cliente) →
  perguntar antes de prosseguir.

## Dependências

- **Negócio:** `_memoria/empresa.md` (URL do site, se não vier no pedido).
- **Voz:** `_memoria/preferencias.md` — o relatório final traduz jargão técnico quando o leitor não
  for da área técnica.
- **Ferramentas:** WebFetch e comandos de rede (`curl`, `openssl`, `dig`) quando disponíveis no
  ambiente.

---

## Workflow

### Passo 1 — Confirmar alvo

Se a URL não vier no pedido: "Qual site? É seu ou de um cliente que vocês atendem?"

### Passo 2 — SSL/TLS

- HTTP redireciona pra HTTPS?
- Validade e prazo do certificado (`openssl s_client -connect <dominio>:443 -servername
  <dominio> </dev/null 2>/dev/null | openssl x509 -noout -dates`).
- Sinalizar expiração em menos de 30 dias.

### Passo 3 — Headers de segurança

`curl -sI https://<dominio>` e checar presença de:

| Header | Por que importa |
|---|---|
| `Strict-Transport-Security` | Força HTTPS em visitas futuras |
| `Content-Security-Policy` | Reduz risco de scripts maliciosos injetados |
| `X-Content-Type-Options: nosniff` | Evita interpretação incorreta de tipo de arquivo |
| `X-Frame-Options` / `frame-ancestors` | Evita que o site seja embutido de forma maliciosa em outro |
| `Referrer-Policy` | Controla o que vaza pra outros sites via referrer |

Listar o que existe e o que falta, sem inflar a severidade além do que a ausência real implica.

### Passo 4 — Exposição comum de arquivos

Checar (via `curl`/WebFetch, só o código de resposta HTTP — nunca acessar conteúdo autenticado)
se caminhos comumente esquecidos respondem 200 em vez de 403/404: `/.env`, `/.git/config`,
backups de configuração (`*.bak`), `/.DS_Store`, painel de admin exposto sem proteção adicional.
Isso é o mesmo tipo de checagem pública que qualquer scanner de segurança de sites faz — nunca ir
além do código de resposta.

### Passo 5 — Sinais de software desatualizado

Meta tags de gerador, arquivos de versão públicos, ou headers que revelam a stack. Anotar a
versão exposta e, se possível (via WebSearch), comparar com a versão estável mais recente. Não
tentar identificar falha específica nem explorar nada — só apontar que atualizar reduz a
superfície de ataque.

### Passo 6 — Autenticação de e-mail

Se o domínio envia e-mail transacional ou de marketing, checar registros DNS públicos (`dig TXT
<dominio>` ou verificador público via WebFetch): SPF configurado? DKIM configurado? DMARC
configurado com política de fato aplicada (não só modo de observação)? Sem isso, e-mails da
empresa caem mais fácil em spam e o domínio fica mais exposto a falsificação de remetente.

### Passo 7 — Relatório

Salvar em `saidas/seguranca/<slug-dominio>-<data>.md` (ou a pasta equivalente do cliente, se
estiver rodando dentro de `clientes/<nome>/`):

```markdown
# Auditoria de segurança — <domínio>
Data: <data>

## Resumo
[3-5 linhas: postura geral e o que precisa de atenção imediata]

## Crítico — corrigir logo
## Importante — corrigir esse mês
## Já está correto
## Detalhes por categoria
## Como corrigir cada item
```

---

## Regras

- Nunca testar exploração ativa (injeção, força-bruta de login, varredura de portas) — é
  auditoria de superfície pública, não teste de invasão.
- Nunca auditar site sem confirmar relação com o usuário.
- Nunca inventar vulnerabilidade — reportar só o que foi observado de fato.
- Traduzir jargão técnico quando o leitor final não for da área.
- Ferramenta ausente no ambiente (ex: `openssl`) → avisar e seguir com o que der, sem travar o
  relatório inteiro.
