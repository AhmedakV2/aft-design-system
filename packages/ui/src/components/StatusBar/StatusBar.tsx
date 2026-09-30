import type { ReactNode } from "react"; import styles from "./StatusBar.module.css";
export function StatusBar({left,right}:{left?:ReactNode;right?:ReactNode}){return <div className={styles.root}><div>{left}</div><div>{right}</div></div>}
