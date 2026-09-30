# Platform strategy — 95/5

AFT'nin uygulama içi UI'si Windows/macOS/Linux'ta ortaktır. Platform adaptasyonu yalnız kullanıcı beklentisinin güçlü olduğu yerde yapılır.

## Ortak
Renk, typography, spacing, icons, components, app menus, dialogs, notifications, scrollbars, workspaces.

## Adaptasyon
- macOS: native traffic lights / global menu / Cmd shortcuts
- Windows: titleBarOverlay / Ctrl shortcuts / Toast
- Linux: custom window controls / Ctrl shortcuts / xdg-desktop-portal / libnotify
- File dialogs native

## Scaling
CSS px kullan. Fractional scaling'de 0.5 px yok. Borders 1 px. Text taşıyan `transform: scale()` yok. Windows %125 zorunlu test noktası.
