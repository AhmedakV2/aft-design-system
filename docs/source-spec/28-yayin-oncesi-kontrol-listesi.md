# 28. Yayın Öncesi Kontrol Listesi

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

- Inter ve JetBrains Mono gömülü; üç platformda DevTools › Rendered Fonts ile doğrulandı.
- Açılışta beyaz flaş yok; pencere boyutu ve konumu hatırlanıyor.
- Başlık çubuğu her ekranda aynı; pencere kontrolleri üç platformda doğru.
- Kısayollar platforma göre doğru gösteriliyor (⌘ / Ctrl); Ctrl+P geçiş ipucu aktif.
- Hiçbir ekranda seçim yokken yarım ekran boş panel kalmıyor.
- Tüm durumlar ikon + renk + metin; renk körlüğü simülasyonuyla kontrol edildi.
- İstatistik zaman ekseni orantılı; Geçti + Kaldı + Hata + İptal = Koşum her ekranda tutarlı.
- Ajan hiçbir değişikliği onaysız uygulamıyor; tümü geri alınabiliyor.
- Dark / Light / Sistem ve Windows yüksek kontrast test edildi; reduced motion çalışıyor.
- Görsel regresyon testleri üç platformda yeşil.
```text
Son söz:  Premium hissi büyük kararlar değil, tutarlı uygulanan küçük kurallar yaratır: 1 px çizgiler, tabular rakamlar, doğru imleç, beyaz flaş olmaması, 300 ms gecikmeli spinner, boş panel bırakmamak. Token dosyası tek kaynak kabul edilmeli ve her PR bu kurallara göre gözden geçirilmelidir; aksi hâlde altı ay içinde kod ile tasarım ayrışır.
```
