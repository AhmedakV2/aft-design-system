# Migration strategy

## Faz 0 — Envanter
Legacy screen/route/component/CSS/IPC listesi çıkar.

## Faz 1 — Foundations
Token, fonts, base CSS, titlebar, activity rail, command palette, status bar.

## Faz 2 — Shared workspace
Panel, split, list, inspector, table, empty state, status components.

## Faz 3 — Workflow migration
1. Senaryolar
2. Tarayıcı/Kayıt
3. Sonuçlar
4. Agent panel
5. İstatistik
6. Kimlik Sağlığı
7. Kapsam
8. Settings/Data/Terminal

## Faz 4 — Cleanup
Legacy theme variables, duplicate components ve dead CSS kaldırılır.

## Faz 5 — Measurement
Eski/yeni UI aynı görevlerle ölçülür. Görsel kalite tek başarı metriği değildir.

## Anti-pattern
Big-bang CSS rewrite yapıp tüm UX davranışlarını aynı anda bilinçsiz değiştirme. Her workflow dikey olarak tamamlanır, ama ortak foundations ilk başta tek seferde kurulur.
