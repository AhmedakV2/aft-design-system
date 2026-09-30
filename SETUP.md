# Setup

## 1. GitHub repo
Bu klasörün içeriğini mevcut `aft-design-system` repository'sinin root'una koy.

```bash
git add .
git commit -m "build AFT design system foundation"
git push
```

## 2. Dependencies
```bash
corepack enable
pnpm install
pnpm tokens:build
pnpm check
pnpm storybook
```

## 3. Hedef AFT repo ile birlikte aç
VS Code'da multi-root workspace veya iki sibling klasör kullan:

```text
workspace/
├── aft-design-system/
└── aft-app/
```

Claude Code'a önce `aft-design-system/CLAUDE.md`, ardından `templates/CLAUDE_REDESIGN_PROMPT.md` okut.

## 4. İlk migration çıktıları
Hedef repoda Claude şu üç dosyayı üretmeli:
- `UI_AUDIT.md`
- `SCREEN_MAP.md`
- `MIGRATION_PLAN.md`

Bunlar oluşmadan geniş UI rewrite başlamamalı.
