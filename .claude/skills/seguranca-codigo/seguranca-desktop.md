# Segurança em aplicações desktop (Electron e afins)

## Contexto de segurança do processo renderer

- `nodeIntegration: false` — manter desligado.
- `contextIsolation: true` — obrigatório.
- `sandbox: true` sempre que a funcionalidade permitir.
- `webSecurity: false` nunca em produção, mesmo que "resolva" um problema de CORS momentâneo.

## IPC (comunicação entre renderer e processo principal)

- Validar e sanitizar todo dado que vem do renderer antes de usar no processo principal.
- Expor só as funções realmente necessárias via `contextBridge` — superfície mínima.
- Nunca expor `ipcRenderer` bruto diretamente pro renderer.

## Atualização automática

- Assinar o pacote de atualização com certificado de assinatura de código.
- Validar a assinatura antes de instalar qualquer atualização baixada.
- Distribuir por HTTPS, com pinning de certificado quando possível.

## Armazenamento local

### O que é razoável guardar localmente

- Token de sessão: no keychain do sistema operacional (nunca em `localStorage`).
- Dado do usuário: criptografado com chave derivada de segredo do próprio SO.

### O que nunca guardar localmente sem proteção

- Senha em texto plano.
- Chave privada sem criptografia.
- Dado sensível em `localStorage`/`sessionStorage` sem criptografia — esses mecanismos não foram
  feitos pra guardar segredo.

## Distribuição

- Assinatura de código obrigatória na plataforma de destino (Windows: Authenticode; macOS: Apple
  Developer ID).
- Notarização no macOS pra distribuição fora da loja oficial.
- Verificação de integridade do pacote antes de executar qualquer atualização automática.
