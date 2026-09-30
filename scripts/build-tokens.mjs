import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (name) => JSON.parse(fs.readFileSync(path.join(root, "packages/tokens/src", name), "utf8"));
const primitive = read("primitives.json");
const dimensions = read("dimensions.json");
const typography = read("typography.json");
const motion = read("motion.json");
const light = read("semantic.light.json");
const dark = read("semantic.dark.json");

const get = (obj, key) => key.split(".").reduce((v, k) => v[k], obj);
const resolve = (value) => typeof value === "string" && /^\{.+\}$/.test(value)
  ? get(primitive, value.slice(1, -1))
  : value;
const flatten = (obj, prefix = "", out = {}) => {
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}-${k.replaceAll(".", "-")}` : k.replaceAll(".", "-");
    if (v && typeof v === "object" && !Array.isArray(v)) flatten(v, key, out);
    else out[key] = resolve(v);
  }
  return out;
};
const common = {...flatten(dimensions), ...flatten(motion)};
for (const [name, t] of Object.entries(typography.type)) {
  common[`type-${name}-size`] = t.size; common[`type-${name}-line`] = t.lineHeight;
  common[`type-${name}-weight`] = t.weight; common[`type-${name}-tracking`] = t.tracking;
}
common["font-sans"] = `\"${typography.font.sans}\", sans-serif`;
common["font-mono"] = `\"${typography.font.mono}\", monospace`;

const block = (selector, obj) => `${selector} {\n${Object.entries({...common, ...flatten(obj)}).map(([k,v]) => `  --${k}: ${v};`).join("\n")}\n}`;
const css = `${block(':root[data-theme="light"]', light)}\n\n${block(':root[data-theme="dark"]', dark)}\n\n@media (prefers-reduced-motion: reduce) {\n  :root { --duration-instant: 0ms; --duration-fast: 0ms; --duration-base: 0ms; --duration-slow: 0ms; }\n}\n`;
fs.mkdirSync(path.join(root, "packages/tokens/generated"), {recursive:true});
fs.writeFileSync(path.join(root, "packages/tokens/generated/tokens.css"), css);
const ts = `export const primitives = ${JSON.stringify(primitive,null,2)} as const;\nexport const light = ${JSON.stringify(light,null,2)} as const;\nexport const dark = ${JSON.stringify(dark,null,2)} as const;\n`;
fs.writeFileSync(path.join(root, "packages/tokens/generated/tokens.ts"), ts);
console.log("Generated token CSS + TS");
