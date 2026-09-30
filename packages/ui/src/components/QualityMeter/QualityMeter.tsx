import styles from "./QualityMeter.module.css";
export type QualityLevel="strong"|"fair"|"weak"|"missing";
export const levelOf=(value:number|null):QualityLevel=>value===null?"missing":value>=80?"strong":value>=60?"fair":"weak";
const label={strong:"Sağlam",fair:"Orta",weak:"Zayıf",missing:"Bulunamadı"} as const;
const percent=new Intl.NumberFormat("tr-TR",{style:"percent",maximumFractionDigits:0});
export function QualityMeter({value}:{value:number|null}){const level=levelOf(value); if(value===null)return <span className={styles.missing} aria-label={label.missing}>—</span>; return <span className={styles.root} data-level={level} role="img" aria-label={`Kimlik kalitesi ${percent.format(value/100)}, ${label[level]}`}><span className={styles.track}><span className={styles.fill} style={{width:`${value}%`}}/></span><span className={styles.value}>{percent.format(value/100)}</span></span>}
