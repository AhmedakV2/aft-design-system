import fs from "node:fs";
const base = "packages/tokens/src/";
const p=JSON.parse(fs.readFileSync(base+"primitives.json","utf8"));
const themes={light:JSON.parse(fs.readFileSync(base+"semantic.light.json","utf8")),dark:JSON.parse(fs.readFileSync(base+"semantic.dark.json","utf8"))};
const get=(o,k)=>k.split('.').reduce((v,x)=>v[x],o);
const resolve=(v)=>typeof v==='string'&&/^\{.+\}$/.test(v)?get(p,v.slice(1,-1)):v;
const rgb=(h)=>{h=h.replace('#',''); return [0,2,4].map(i=>parseInt(h.slice(i,i+2),16)/255)};
const lum=(h)=>rgb(h).map(c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4).reduce((s,c,i)=>s+c*[.2126,.7152,.0722][i],0);
const ratio=(a,b)=>{const [x,y]=[lum(resolve(a)),lum(resolve(b))].sort((a,b)=>b-a);return (x+.05)/(y+.05)};
const pairs=[['text.primary','bg.surface',4.5],['text.secondary','bg.surface',4.5],['text.tertiary','bg.surface',4.5],['action.primary.fg','action.primary.bg',4.5],['status.danger','bg.surface',4.5]];
let fail=false;
for(const [theme,t] of Object.entries(themes)) for(const [a,b,min] of pairs){const r=ratio(get(t,a),get(t,b)); console.log(`${theme} ${a}/${b}: ${r.toFixed(2)}:1`); if(r<min){fail=true; console.error(`FAIL < ${min}:1`)}}
if(fail) process.exit(1);
