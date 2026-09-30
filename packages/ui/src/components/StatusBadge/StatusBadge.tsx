import { CircleCheck, CircleX, TriangleAlert, Info, CircleDashed } from "lucide-react";
import styles from "./StatusBadge.module.css";
type Tone="success"|"danger"|"warning"|"info"|"neutral";
const icons={success:CircleCheck,danger:CircleX,warning:TriangleAlert,info:Info,neutral:CircleDashed};
export function StatusBadge({tone,label}:{tone:Tone;label:string}){const Icon=icons[tone];return <span className={styles.root} data-tone={tone}><Icon size={12} aria-hidden/><span>{label}</span></span>}
