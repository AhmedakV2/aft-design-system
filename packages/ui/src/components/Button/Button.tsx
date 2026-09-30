import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";
export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "record" | "ai";
export type ButtonSize = "sm" | "md" | "lg" | "xl";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { variant?: ButtonVariant; size?: ButtonSize; icon?: ReactNode; loading?: boolean; }
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({variant="secondary",size="md",icon,loading=false,disabled,children,className,...rest},ref){
  return <button ref={ref} type="button" className={clsx(styles.button,styles[variant],styles[size],className)} disabled={disabled||loading} aria-busy={loading||undefined} {...rest}>{loading?<span className={styles.spinner} aria-hidden />:icon}{children&&<span>{children}</span>}</button>;
});
