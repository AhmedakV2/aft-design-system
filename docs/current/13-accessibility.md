# Accessibility contract

Hedef WCAG 2.2 AA.

- Her interaction keyboard erişilebilir.
- F6: titlebar → navigation → list → content → inspector bölgeleri.
- `:focus-visible` belirgin ve kalıcı.
- Minimum hit target 24×24, varsayılan 28×28.
- Status yalnız renk değil: icon + text + color.
- Run result ve Agent response `aria-live="polite"`; kritik error gerektiğinde assertive.
- `forced-colors: active` altında gradient kaldırılır, sistem renkleri kullanılır.
- Zoom %80–200.
- `prefers-reduced-motion` tüm motion sürelerini 0'a indirir.
- Contrast token değişikliklerinde CI'da tekrar hesaplanır.
