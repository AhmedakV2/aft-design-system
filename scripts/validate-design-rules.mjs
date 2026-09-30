import fs from "node:fs";
import path from "node:path";
const roots=["packages/ui/src"];
const files=[];
const walk=(d)=>{if(!fs.existsSync(d))return; for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name); e.isDirectory()?walk(p):files.push(p)}};
roots.forEach(walk);
let failed=false;
for(const file of files.filter(f=>/\.(css|tsx|ts)$/.test(f))){const s=fs.readFileSync(file,'utf8');
  if(/#[0-9a-f]{3,8}\b/i.test(s)){console.error(`raw hex: ${file}`); failed=true;}
  if(/cursor\s*:\s*pointer/i.test(s)){console.error(`cursor:pointer: ${file}`); failed=true;}
}
if(failed) process.exit(1); else console.log("Design rule scan passed");
