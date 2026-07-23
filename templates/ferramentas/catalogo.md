# Catálogo de ferramentas

Referência de APIs, CLIs e conectores (MCP) que uma skill pode usar. Consultar antes de criar
skill nova via `/mapear-rotinas` — evita reinventar integração que já existe.

---

## Renderizar HTML em imagem

### Playwright
**Faz:** transforma HTML em PNG — é o que o `/carrossel` usa pra gerar os slides.
**Precisa de conta:** não, roda local.
**Instalar:** `npm install playwright` + `npx playwright install chromium`.
**Tamanhos comuns:** feed (1080×1350), story/reels (1080×1920), slide 16:9 (1920×1080), quadrado
(1080×1080).

---

## Publicar página na web

### Provedor de hospedagem estática com API (Cloudflare Pages, Vercel, Netlify)
**Faz:** publica um HTML com link público — útil pra proposta, landing page avulsa, estudo.
**Precisa de conta:** sim, a maioria tem plano gratuito.
**Configurar:** token de API salvo em `.env`, nunca commitado.
**Quando usar:** sempre que uma skill gerar HTML que precisa virar link compartilhável.

---

## Publicar em redes sociais

### API oficial da plataforma (Meta Graph API, etc.)
**Faz:** posta conteúdo direto, sem passar pelo app — é o que `/aprovar-post` usa.
**Precisa de conta:** sim, com app registrado e revisado pela plataforma.
**Configurar:** credenciais em `.env`.
**Quando usar:** skill de publicação automática de conteúdo já aprovado.

---

## Pesquisar e ler conteúdo da web

### WebSearch / WebFetch (nativos do Claude Code)
**Fazem:** buscar e ler conteúdo de páginas — usados por `/seo` e `/seguranca-site`.
**Precisa de conta:** não.
**Quando usar:** qualquer pesquisa que precise de dado real, não estimado.

---

## Extrair conteúdo de vídeo

### yt-dlp
**Faz:** baixa legenda/transcrição de vídeos.
**Precisa de conta:** não, roda local.
**Instalar:** `brew install yt-dlp` (ou gerenciador equivalente do sistema).
**Quando usar:** skill que parte de um vídeo pra virar conteúdo escrito (artigo, carrossel).

---

## Gerar imagem com IA

### API de geração de imagem (várias opções no mercado)
**Faz:** gera imagem a partir de texto — usar como opção quando o `/carrossel` precisar de foto
e não houver imagem real fornecida.
**Precisa de conta:** sim, a maioria é paga com camada gratuita limitada.
**Configurar:** chave de API em `.env`.

---

## Conectar com plataformas externas (MCP)

Conectores MCP dão acesso direto a uma plataforma de dentro de uma sessão do Claude Code. Listar
o que já está instalado: `claude mcp list`. Remover: `claude mcp remove <nome>`.

| Plataforma | Pra que serve numa skill |
|---|---|
| Notion | ler/escrever tarefa, base de cliente, documento |
| Gmail | ler e compor e-mail sem sair da sessão |
| Google Calendar | ver agenda, criar evento, achar horário livre |
| Canva | acessar e criar peça visual direto |
| Meta Ads | gerenciar campanha, puxar dado de performance |
| Google Ads | gerenciar campanha, puxar dado de performance |
| Automação (ex: n8n) | disparar workflow externo |
| Banco/backend (ex: Supabase) | guardar dado, autenticação |
| Telegram | enviar/receber mensagem via bot |

Configuração de cada um varia por provedor — consultar a documentação oficial do conector no
momento de instalar.

---

## Como adicionar uma ferramenta nova aqui

```markdown
### Nome da ferramenta
**Faz:** [uma frase]
**Precisa de conta:** [sim/não]
**Configurar:** [o que salvar em .env, se houver]
**Quando usar:** [em que tipo de skill faz sentido]
```
