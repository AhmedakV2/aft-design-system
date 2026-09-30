# UI Definition of Done

Bir ekran/pattern tamamlanmış sayılmaz, ta ki:

## Architecture
- [ ] `@aft/tokens` kullanıyor
- [ ] mevcut primitive/pattern'leri tekrar kullanıyor
- [ ] business logic/IPC contract korunuyor

## Interaction
- [ ] primary action tek ve anlaşılır
- [ ] keyboard path var
- [ ] focus-visible net
- [ ] destructive action primary'nin yanında değil
- [ ] undo mümkünse confirmation yerine undo var

## States
- [ ] loading
- [ ] empty
- [ ] error
- [ ] success
- [ ] disabled + reason
- [ ] selection/no-selection

## Accessibility
- [ ] status = icon + text + color
- [ ] target ≥ 24×24
- [ ] contrast AA
- [ ] screen reader labels
- [ ] reduced motion
- [ ] forced-colors makul

## Desktop quality
- [ ] 1024×640
- [ ] 1440×900
- [ ] Windows %125 scaling
- [ ] light/dark/system
- [ ] tabular numbers
- [ ] no white flash
- [ ] no web-only cursor:pointer on buttons

## QA
- [ ] Storybook story
- [ ] accessibility test
- [ ] visual regression baseline
- [ ] `pnpm check`
