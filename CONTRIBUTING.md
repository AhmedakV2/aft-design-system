# Contributing

## Bir UI değişikliği yapmadan önce
1. İlgili ADR ve current doc'u oku.
2. Mevcut component ile çözülebiliyor mu kontrol et.
3. Yeni pattern gerekiyorsa önce kısa bir ADR aç.
4. Component ise Storybook'ta tüm state'leri göster.

## PR zorunlulukları
- [ ] Token dışı renk yok
- [ ] Light / Dark / System kontrol edildi
- [ ] Keyboard + focus çalışıyor
- [ ] Empty / loading / error / disabled düşünülmüş
- [ ] Status renk + ikon + metin ile anlatılıyor
- [ ] Reduced motion bozulmuyor
- [ ] %125 Windows scaling kontrol edildi
- [ ] 1024×640 minimum pencere test edildi
- [ ] Yeni copy terminoloji sözlüğüne uyuyor
- [ ] `pnpm check` yeşil

Büyük IA değişiklikleri doğrudan component PR'ına gömülmez; `docs/decisions/` altında ADR ile gerekçelendirilir.
