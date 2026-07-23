# Segurança web (OWASP Top 10)

## 1. Controle de acesso quebrado

- Validar permissão sempre no servidor — nunca confiar só no que o frontend esconde/mostra.
- IDOR (referência direta a objeto insegura): checar se o usuário autenticado realmente tem
  direito ao recurso pedido pelo ID, não só se está autenticado.
- Privilégio mínimo em toda rota, não só nas óbvias.

## 2. Falha criptográfica

- HTTPS em tudo, sem exceção.
- Header HSTS com `includeSubDomains`.
- Nunca colocar dado sensível em query string — acaba parando em log de servidor/proxy.

## 3. Injeção

- SQL: sempre query parametrizada.
- XSS: sanitizar saída, usar Content-Security-Policy.
- Injeção de comando: nunca passar input do usuário direto pra um comando de shell.

## 4. Cross-Site Scripting (XSS)

- Escapar HTML em qualquer saída que inclua dado vindo do usuário.
- Content-Security-Policy bloqueando script inline.
- Cookies de sessão com `HttpOnly` e `Secure`.

## 5. CSRF

- `SameSite=Strict` ou `Lax` nos cookies de sessão.
- Token CSRF em formulário que altera estado.
- Checar `Origin`/`Referer` em requisição sensível.

## Headers de segurança recomendados

```
Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000; includeSubDomains
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

## Rate limiting

- Login: algo como 5 tentativas por minuto por IP, ajustável ao risco real do produto.
- API pública: limite por IP e por token/chave.
- Endpoint de reset de senha: ainda mais restritivo — é alvo comum de abuso.

## Checklist rápido de revisão

- [ ] Todo input do usuário é validado e sanitizado?
- [ ] Autenticação verificada em toda rota que deveria exigir?
- [ ] HTTPS forçado, com redirect a partir de HTTP?
- [ ] Headers de segurança configurados?
- [ ] Log não contém dado sensível?
- [ ] Dependências auditadas recentemente?
