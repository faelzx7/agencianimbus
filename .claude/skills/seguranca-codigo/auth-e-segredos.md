# Autenticação e segredos

## Senhas

- Hash com bcrypt (custo ≥ 12), Argon2id ou scrypt. Nunca MD5/SHA1 puro pra senha.
- Mínimo de 8 caracteres, sem exigir combinação forçada de caracteres especiais (isso incentiva
  padrões previsíveis, não senhas mais fortes).
- Bloqueio após N tentativas (lockout progressivo ou CAPTCHA).
- Oferecer 2FA — TOTP (tipo Google Authenticator) é o padrão mínimo razoável hoje.

## JWT

- Assinar com RS256 (assimétrico) em produção — nunca HS256 com segredo fraco/compartilhado.
- `exp` curto pro access token (15 min a 1h).
- Refresh token com rotação: ao usar, invalidar o anterior e emitir um novo.
- Nunca colocar dado sensível no payload (é apenas base64, não é criptografia).
- Manter lista de tokens invalidados (ex: Redis com TTL igual ao `exp` original) pra revogação
  antes da expiração natural.

## OAuth / SSO

- Usar biblioteca estabelecida — não implementar o fluxo manualmente.
- Validar o parâmetro `state` pra prevenir CSRF no fluxo de autorização.
- PKCE obrigatório em SPAs e apps mobile.

## Segredos e credenciais

### Nunca fazer

- Commitar `.env` no controle de versão.
- Hardcodar chave de API no código-fonte.
- Logar credencial, mesmo em modo debug.
- Reusar a mesma credencial entre ambiente de desenvolvimento e produção.

### Onde guardar

- Produção: gerenciador de segredos dedicado (Vault, AWS Secrets Manager, Doppler ou equivalente).
- CI/CD: variáveis de ambiente criptografadas da própria plataforma.
- Local: `.env` fora do controle de versão (garantido pelo `.gitignore`).

### Rotação

- Segredo de serviço de terceiro: rotacionar periodicamente e sempre que alguém com acesso sair
  do time.
- Chave de API de produção: uma por serviço/ambiente, nunca compartilhada entre projetos.
- Senha de banco de dados: preferir autenticação via IAM do provedor de nuvem quando disponível,
  em vez de senha estática.
