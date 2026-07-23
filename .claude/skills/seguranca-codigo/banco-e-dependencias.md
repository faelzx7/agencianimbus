# Banco de dados e dependências

## Injeção SQL

- Sempre query parametrizada ou ORM com binding correto — nunca concatenar input do usuário
  direto na query.
- Mesmo usando ORM, raw query merece atenção redobrada.
- Testar com payloads clássicos (`' OR '1'='1`, `'; DROP TABLE ...;--`) pra confirmar que a
  camada de acesso a dados realmente escapa o input.

## Privilégio mínimo

- Usuário de banco da aplicação: só as permissões que a aplicação de fato usa (não conceder
  DROP/ALTER a um usuário que só faz CRUD).
- Nunca rodar a aplicação com usuário root/admin do banco.
- Usuário separado pra migration, com permissão de alterar schema — não usar o mesmo da
  aplicação em runtime.
- Réplica de leitura: usuário só-leitura.

## Dados sensíveis em banco

- Criptografar dado pessoal sensível (CPF, dado de cartão) em repouso.
- Não armazenar dado de cartão diretamente — usar tokenização via gateway de pagamento.
- Manter trilha de auditoria de quem acessou/alterou dado sensível.
- Backup criptografado — a cópia nunca pode ser mais fraca que o banco de origem.

## Dependências

### Vulnerabilidade em pacote

- Rodar auditoria de dependências (`npm audit`, `pip audit`, equivalente) em CI, a cada PR.
- Automatizar atualização de segurança (Dependabot, Renovate ou equivalente).
- Sempre commitar o lock file — garante que todo ambiente instala exatamente o mesmo conjunto de
  versões.

### Risco de cadeia de suprimento

- Preferir pacote com histórico de manutenção ativa e uso amplo — pacote obscuro/abandonado é
  risco mesmo sem vulnerabilidade conhecida ainda.
- Instalar com scripts de pós-instalação desabilitados quando o pacote for de origem duvidosa.
- Manter um inventário das dependências realmente usadas em produção.

### Cadência de atualização

- Dependência com vulnerabilidade conhecida: atualizar imediatamente, não esperar o próximo
  ciclo.
- Atualização menor: acompanhar no ritmo normal de desenvolvimento.
- Major version: planejar com antecedência — deixar acumular várias majors pendentes é o que
  torna a atualização arriscada depois.
