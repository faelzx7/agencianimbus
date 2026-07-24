// NimbusOS — devolve as saídas de um cliente pro painel, sem precisar de git push.
//
// Uso (dentro do repositório da sua conta):
//   NIMBUS_TOKEN=<seu-token> node .nimbus/publicar.mjs <slug-do-cliente>
//
// Ele lê tudo que estiver em clientes/<slug>/saidas/, manda pro NimbusOS, e o
// NimbusOS grava no seu GitHub usando o App dele (escrita garantida). A URL do
// NimbusOS pode ser trocada via NIMBUS_INGEST_URL, se algum dia mudar.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";

const slug = process.argv[2];
const token = process.env.NIMBUS_TOKEN;
const url = process.env.NIMBUS_INGEST_URL || "https://nimbusos-app.vercel.app/api/ingest";

if (!slug) {
  console.error("Uso: NIMBUS_TOKEN=<token> node .nimbus/publicar.mjs <slug>");
  process.exit(1);
}
if (!token) {
  console.error("Falta a variável NIMBUS_TOKEN.");
  process.exit(1);
}

const base = join("clientes", slug);
const root = join(base, "saidas");
if (!existsSync(root)) {
  console.error(`Nada em ${root} pra publicar. Gere as saídas primeiro.`);
  process.exit(1);
}

const files = [];
(function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else
      files.push({
        path: relative(base, full).split(sep).join("/"),
        content: readFileSync(full).toString("base64"),
        encoding: "base64",
      });
  }
})(root);

const res = await fetch(url, {
  method: "POST",
  headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  body: JSON.stringify({ slug, files }),
});
const body = await res.text();
console.log("ingest", res.status, body);
if (!res.ok) process.exit(1);
console.log(`\n✓ ${files.length} arquivo(s) publicado(s) no NimbusOS.`);
