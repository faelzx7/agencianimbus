# dados/

Zona de entrada. Solte aqui qualquer arquivo que uma skill precise ler uma vez só: export de
anúncio (CSV/XLSX), planilha, PDF, transcrição, print de relatório.

`/analisar-dados` e `/relatorio-ads` leem direto daqui — você arrasta o arquivo, chama a skill,
recebe o resultado.

Não é destino final de nada — é insumo. O que importa do que passa por aqui vira parte de
`_memoria/`, `marketing/` ou `saidas/`. Só o `README.md` fica versionado; o resto do conteúdo
dessa pasta é ignorado pelo Git (arquivo de cliente não deveria parar num repositório).

Se houver MCP de armazenamento conectado (Google Drive, Notion, etc.), não precisa soltar nada
aqui — é só pedir pra buscar o arquivo direto da fonte.
