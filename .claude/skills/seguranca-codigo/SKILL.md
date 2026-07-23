---
name: seguranca-codigo
description: >
  Revisa segurança dentro do código e da arquitetura de uma aplicação — autenticação, segredos,
  banco de dados, dependências, apps desktop/Electron e OWASP Top 10 pra web. Diferente da
  /seguranca-site (que só audita de fora, sem tocar código): essa skill é pra quando o negócio ou
  um cliente está desenvolvendo uma aplicação de verdade. Use quando o usuário pedir "revisão de
  segurança do código", "isso é seguro?", "audita esse app antes de lançar", "investiga esse
  incidente de segurança", ou /seguranca-codigo.
---

# /seguranca-codigo — Revisão de segurança de aplicação

Skill de revisão e correção — não de ataque. O objetivo é encontrar e corrigir vulnerabilidade
real no próprio código/configuração, não testar exploração em sistemas de terceiros.

## Quando usar

- Revisão de segurança antes de lançamento.
- Investigação de um incidente já ocorrido.
- Auditoria de configuração de produção.
- Implementação de autenticação e autorização do zero.

## Como executar

1. Identificar a superfície relevante: web, API, banco de dados, dependências, ou desktop
   (Electron ou similar) — pode ser mais de uma.
2. Ler o(s) arquivo(s) de referência correspondente(s), na mesma pasta desta skill:
   - `seguranca-web.md` — OWASP Top 10 e headers de segurança pra aplicação web/API.
   - `auth-e-segredos.md` — autenticação, JWT, gestão de segredos e credenciais.
   - `banco-e-dependencias.md` — SQL injection, privilégio mínimo, dados sensíveis, supply chain.
   - `seguranca-desktop.md` — hardening de apps Electron/desktop e armazenamento local.
3. Aplicar o checklist relevante ao código real do projeto.
4. Documentar cada achado com severidade, impacto concreto e como corrigir.
5. Priorizar por risco real (probabilidade × impacto), não por ordem de descoberta.

## Severidade

- **Crítica** — exposição de dados de usuários, acesso administrativo indevido ao sistema.
- **Alta** — bypass de autenticação, SQL injection, XSS persistente.
- **Média** — CSRF, ausência de rate limiting, dado sensível em log.
- **Baixa** — header de segurança ausente, mensagem de erro verbosa demais.

## Regras

- Foco em corrigir o próprio código/config — não em testar exploração ativa contra sistema de
  terceiros (isso é escopo de teste de invasão autorizado, não desta skill).
- Todo achado vem com correção concreta, não só a descrição do problema.
- Nunca reportar "provavelmente seguro" sem checar — se não deu pra verificar algo, dizer isso
  explicitamente.
- Priorizar por risco real: uma falha crítica em código morto pesa menos que uma falha média em
  rota exposta publicamente.
