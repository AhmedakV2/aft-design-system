import type { ReactNode } from "react"; import styles from "./Inspector.module.css";
export function Inspector({title,actions,children}:{title:string;actions?:ReactNode;children:ReactNode}){return <section className={styles.root} aria-label={title}><header><h2>{title}</h2>{actions}</header><div className={styles.body}>{children}</div></section>}
