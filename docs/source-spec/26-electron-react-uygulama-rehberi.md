# 26. Electron + React Uygulama Rehberi

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

## 26.1 Token dosyası

```text
src/styles/tokens.css
:root {
  --font-sans: "Inter Variable", sans-serif;
  --font-mono: "JetBrains Mono Variable", monospace;

  --space-0-5: 2px;
  --space-1: 4px;
  --space-1-5: 6px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;

  --radius-xs: 4px;
  --radius-sm: 5px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-full: 999px;

  --duration-instant: 80ms;
  --duration-fast: 120ms;
  --duration-base: 200ms;
  --duration-slow: 320ms;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --ease-enter: cubic-bezier(0, 0, 0.2, 1);
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);

  --action-primary-bg: #2F62F5;
  --action-primary-bg-hover: #2450D6;
  --action-primary-bg-pressed: #1E42B0;
  --action-primary-fg: #FFFFFF;
  --record-bg: #D42A2A;
  --record-dot: #FF4D4F;
  --ai-gradient: linear-gradient(135deg, #7C5CFF, #4F7CFF 55%, #22B8D9);
  --chart-fail: #E5484D;
  --chart-error: #F5A524;
  --chart-cancel: #9AA1AD;
}

:root[data-theme="dark"] {
  color-scheme: dark;
  --bg-canvas: #0D0E11;
  --bg-surface: #15171B;
  --bg-raised: #1C1F24;
  --bg-overlay: #23262D;
  --bg-sunken: #101114;
  --bg-hover: rgb(255 255 255 / 0.045);
  --bg-pressed: rgb(255 255 255 / 0.08);
  --bg-selected: rgb(47 98 245 / 0.18);
  --border-subtle: #22252B;
  --border-default: #2C3037;
  --border-strong: #646B78;
  --text-primary: #ECEEF2;
  --text-secondary: #A4ABB8;
  --text-tertiary: #858D9C;
  --text-disabled: #4D5461;
  --text-link: #7FA6FF;
  --focus-ring: #7FA6FF;
  --status-success: #3DD68C;
  --status-warning: #F5B849;
  --status-danger: #FF6B63;
  --status-info: #5AA9FF;
  --ai-fg: #A78BFA;
  --chart-pass: #3DD68C;
  --shadow-2: 0 8px 24px rgb(0 0 0 / 0.45), 0 0 0 1px rgb(255 255 255 / 0.06);
  --shadow-3: 0 16px 48px rgb(0 0 0 / 0.55), 0 0 0 1px rgb(255 255 255 / 0.07);
}

:root[data-theme="light"] {
  color-scheme: light;
  --bg-canvas: #F6F7F9;
  --bg-surface: #FFFFFF;
  --bg-raised: #FFFFFF;
  --bg-overlay: #FFFFFF;
  --bg-sunken: #F0F1F4;
  --bg-hover: rgb(20 22 26 / 0.04);
  --bg-pressed: rgb(20 22 26 / 0.07);
  --bg-selected: rgb(47 98 245 / 0.09);
  --border-subtle: #EBEDF0;
  --border-default: #DCDFE4;
  --border-strong: #868E9B;
  --text-primary: #14161A;
  --text-secondary: #4D5461;
  --text-tertiary: #666D7A;
  --text-disabled: #A3A9B4;
  --text-link: #2450D6;
  --focus-ring: #2450D6;
  --status-success: #13804A;
  --status-warning: #A15C00;
  --status-danger: #D92D20;
  --status-info: #1F6FD1;
  --ai-fg: #7045E6;
  --chart-pass: #1E9E63;
  --shadow-2: 0 8px 24px rgb(16 18 24 / 0.10), 0 0 0 1px rgb(16 18 24 / 0.06);
  --shadow-3: 0 16px 48px rgb(16 18 24 / 0.16), 0 0 0 1px rgb(16 18 24 / 0.07);
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-instant: 0ms;
    --duration-fast: 0ms;
    --duration-base: 0ms;
    --duration-slow: 0ms;
  }
}
```

## 26.2 Global stiller

```text
src/styles/base.css
@import "@fontsource-variable/inter/wght.css";
@import "@fontsource-variable/jetbrains-mono/wght.css";

*, *::before, *::after {
  box-sizing: border-box;
}

html, body, #root {
  height: 100%;
  margin: 0;
  overflow: hidden;
}

body {
  font-family: var(--font-sans);
  font-size: 13px;
  line-height: 20px;
  font-feature-settings: "cv11", "ss01";
  font-synthesis: none;
  color: var(--text-primary);
  background: var(--bg-canvas);
  -webkit-font-smoothing: antialiased;
  user-select: none;
  cursor: default;
}

code, pre, kbd, .mono {
  font-family: var(--font-mono);
  font-feature-settings: "calt" 0;
}

.tnum {
  font-variant-numeric: tabular-nums;
}

.selectable {
  user-select: text;
}

::selection {
  background: rgb(47 98 245 / 0.35);
}

:focus-visible {
  outline: 2px solid var(--focus-ring);
  outline-offset: 2px;
}

.titlebar {
  -webkit-app-region: drag;
  height: 40px;
}

.titlebar button, .titlebar input, .titlebar [role="button"] {
  -webkit-app-region: no-drag;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  background: var(--border-default);
  border: 2px solid transparent;
  border-radius: 999px;
  background-clip: padding-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: var(--border-strong);
}

::-webkit-scrollbar-track, ::-webkit-scrollbar-corner {
  background: transparent;
}

@media (forced-colors: active) {
  * {
    background-image: none !important;
  }
  :focus-visible {
    outline-color: Highlight;
  }
}
```

## 26.3 Ana pencere

```text
electron/main/window.ts
import { BrowserWindow, BrowserWindowConstructorOptions, nativeTheme } from "electron";
import path from "node:path";

const isMac = process.platform === "darwin";
const isWin = process.platform === "win32";

const CANVAS = { dark: "#0D0E11", light: "#F6F7F9" } as const;
const SYMBOL = { dark: "#A4ABB8", light: "#4D5461" } as const;

const currentTheme = () => (nativeTheme.shouldUseDarkColors ? "dark" : "light");

const platformChrome = (): BrowserWindowConstructorOptions => {
  if (isMac) {
    return { titleBarStyle: "hiddenInset", trafficLightPosition: { x: 14, y: 13 } };
  }
  if (isWin) {
    const t = currentTheme();
    return {
      titleBarStyle: "hidden",
      titleBarOverlay: { color: CANVAS[t], symbolColor: SYMBOL[t], height: 40 },
    };
  }
  return { frame: false };
};

export function createMainWindow(): BrowserWindow {
  const win = new BrowserWindow({
    title: "AFT",
    width: 1440,
    height: 900,
    minWidth: 1024,
    minHeight: 640,
    show: false,
    backgroundColor: CANVAS[currentTheme()],
    ...platformChrome(),
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      spellcheck: false,
    },
  });

  win.once("ready-to-show", () => win.show());

  nativeTheme.on("updated", () => {
    const t = currentTheme();
    win.setBackgroundColor(CANVAS[t]);
    if (isWin) win.setTitleBarOverlay({ color: CANVAS[t], symbolColor: SYMBOL[t], height: 40 });
    win.webContents.send("theme:changed", t);
  });

  return win;
}
```

```text
Detay:  backgroundColor canvas rengine ayarlanır, pencere show: false + ready-to-show ile açılır. Açılıştaki beyaz flaş premium hissi bozan en yaygın Electron hatasıdır.
```

## 26.4 Gömülü tarayıcı görünümü

```text
electron/main/browser-view.ts
import { BrowserWindow, WebContentsView } from "electron";
import path from "node:path";

export interface ViewportRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function createTargetView(win: BrowserWindow, rect: ViewportRect): WebContentsView {
  const view = new WebContentsView({
    webPreferences: {
      preload: path.join(__dirname, "../preload/recorder.js"),
      partition: "persist:aft-target",
      contextIsolation: true,
      sandbox: true,
    },
  });

  view.setBackgroundColor("#FFFFFF");
  view.setBounds(rect);
  win.contentView.addChildView(view);
  return view;
}

export function syncBounds(view: WebContentsView, rect: ViewportRect): void {
  view.setBounds({
    x: Math.round(rect.x),
    y: Math.round(rect.y),
    width: Math.round(rect.width),
    height: Math.round(rect.height),
  });
}
```

Viewport dikdörtgeni renderer’dan ResizeObserver ile ölçülüp IPC ile gönderilir; değerler tam sayıya yuvarlanır (kesirli ölçekte bulanıklığı önler). Test edilen sitenin çerezleri uygulamanın kendi oturumundan partition ile ayrılır.

## 26.5 Platform ve kısayol gösterimi

```text
src/lib/platform.ts
export type OS = "mac" | "win" | "linux";

export const os: OS = window.api.platform === "darwin"
  ? "mac"
  : window.api.platform === "win32"
    ? "win"
    : "linux";

const MAC_SYMBOLS: Record<string, string> = {
  Mod: "⌘",
  Shift: "⇧",
  Alt: "⌥",
  Ctrl: "⌃",
  Enter: "↩",
  Backspace: "⌫",
};

export function formatShortcut(keys: string[]): string {
  if (os === "mac") {
    return keys.map((k) => MAC_SYMBOLS[k] ?? k.toUpperCase()).join("");
  }
  return keys.map((k) => (k === "Mod" ? "Ctrl" : k)).join("+");
}

export function isModKey(e: KeyboardEvent): boolean {
  return os === "mac" ? e.metaKey : e.ctrlKey;
}
```

## 26.6 Buton bileşeni

```text
src/components/Button/Button.tsx
import { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "ghost" | "danger" | "record" | "ai";
type Size = "sm" | "md" | "lg" | "xl";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "secondary", size = "md", icon, loading = false, disabled, children, className, ...rest }, ref) => (
    <button
      ref={ref}
      type="button"
      className={clsx(styles.button, styles[variant], styles[size], className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading ? <span className={styles.spinner} aria-hidden /> : icon}
      {children && <span className={styles.label}>{children}</span>}
    </button>
  ),
);

Button.displayName = "Button";
```

```text
src/components/Button/Button.module.css
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1-5);
  min-width: 64px;
  border: 1px solid transparent;
  font: inherit;
  font-weight: 500;
  white-space: nowrap;
  cursor: default;
  transition: background-color var(--duration-instant) var(--ease-standard),
    border-color var(--duration-instant) var(--ease-standard);
}

.button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--bg-canvas), 0 0 0 4px var(--focus-ring);
}

.button:disabled {
  background: var(--bg-raised);
  border-color: var(--border-default);
  color: var(--text-disabled);
  box-shadow: none;
}

.sm { height: 24px; padding: 0 var(--space-2); font-size: 12px; border-radius: var(--radius-sm); gap: var(--space-1); }
.md { height: 28px; padding: 0 var(--space-3); font-size: 13px; border-radius: var(--radius-md); }
.lg { height: 32px; padding: 0 14px; font-size: 13px; border-radius: var(--radius-md); }
.xl { height: 40px; padding: 0 18px; font-size: 14px; border-radius: var(--radius-lg); }

.primary {
  background: var(--action-primary-bg);
  color: var(--action-primary-fg);
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.14);
}
.primary:hover:not(:disabled) { background: var(--action-primary-bg-hover); }
.primary:active:not(:disabled) { background: var(--action-primary-bg-pressed); }

.secondary {
  background: var(--bg-raised);
  border-color: var(--border-default);
  color: var(--text-primary);
}
.secondary:hover:not(:disabled) { background-image: linear-gradient(var(--bg-hover), var(--bg-hover)); }

.ghost {
  background: transparent;
  color: var(--text-secondary);
}
.ghost:hover:not(:disabled) { background: var(--bg-hover); color: var(--text-primary); }

.danger {
  background: transparent;
  color: var(--status-danger);
  border-color: color-mix(in srgb, var(--status-danger) 40%, transparent);
}

.record {
  background: var(--record-bg);
  color: #FFFFFF;
}

.ai {
  background: var(--ai-gradient);
  color: #FFFFFF;
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.2);
}

.spinner {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1.5px solid rgb(255 255 255 / 0.3);
  border-top-color: currentColor;
  animation: spin 800ms linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .spinner { animation: none; opacity: 0.6; }
}
```

## 26.7 Kimlik kalitesi bileşeni

```text
src/components/QualityMeter/QualityMeter.tsx
import styles from "./QualityMeter.module.css";

export type QualityLevel = "strong" | "fair" | "weak" | "missing";

export function levelOf(value: number | null): QualityLevel {
  if (value === null) return "missing";
  if (value >= 80) return "strong";
  if (value >= 60) return "fair";
  return "weak";
}

const LABEL: Record<QualityLevel, string> = {
  strong: "Sağlam",
  fair: "Orta",
  weak: "Zayıf",
  missing: "Bulunamadı",
};

const percent = new Intl.NumberFormat("tr-TR", { style: "percent", maximumFractionDigits: 0 });

export function QualityMeter({ value }: { value: number | null }) {
  const level = levelOf(value);
  if (value === null) {
    return <span className={styles.missing} aria-label={LABEL.missing}>—</span>;
  }
  return (
    <span className={styles.root} data-level={level} role="img" aria-label={`Kimlik kalitesi ${percent.format(value / 100)}, ${LABEL[level]}`}>
      <span className={styles.track}>
        <span className={styles.fill} style={{ width: `${value}%` }} />
      </span>
      <span className={styles.value}>{percent.format(value / 100)}</span>
    </span>
  );
}
```

```text
src/components/QualityMeter/QualityMeter.module.css
.root {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1-5);
}

.track {
  width: 36px;
  height: 4px;
  border-radius: 2px;
  background: var(--bg-hover);
  overflow: hidden;
}

.fill {
  display: block;
  height: 100%;
  background: currentColor;
}

.value {
  font-family: var(--font-mono);
  font-size: 11px;
  line-height: 16px;
  font-variant-numeric: tabular-nums;
  min-width: 28px;
}

.root[data-level="strong"] { color: var(--status-success); }
.root[data-level="fair"] { color: var(--status-warning); }
.root[data-level="weak"] { color: var(--status-danger); }

.missing {
  color: var(--text-disabled);
  font-family: var(--font-mono);
  font-size: 11px;
}
```

## 26.8 Tema senkronizasyonu

```text
src/lib/theme.ts
export type ThemePref = "system" | "dark" | "light";

const KEY = "aft.theme";

export function resolveTheme(pref: ThemePref): "dark" | "light" {
  if (pref !== "system") return pref;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function applyTheme(pref: ThemePref): void {
  document.documentElement.dataset.theme = resolveTheme(pref);
}

export function initTheme(locale: string): void {
  document.documentElement.lang = locale.startsWith("tr") ? "tr" : "en";
  const read = () => (localStorage.getItem(KEY) as ThemePref | null) ?? "system";
  applyTheme(read());
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => applyTheme(read()));
}
```

## 26.9 Tek kaynaktan token üretimi

Tokenlar Style Dictionary ile tek JSON kaynağından CSS değişkenleri, TypeScript sabitleri ve Figma değişkenleri olarak üretilir.

```text
tokens/color.json
{
  "color": {
    "cobalt": {
      "400": { "value": "#7FA6FF" },
      "500": { "value": "#2F62F5" },
      "600": { "value": "#2450D6" },
      "700": { "value": "#1E42B0" }
    },
    "action": {
      "primary": {
        "bg": { "value": "{color.cobalt.500}" },
        "bg-hover": { "value": "{color.cobalt.600}" },
        "bg-pressed": { "value": "{color.cobalt.700}" }
      }
    }
  }
}
```
