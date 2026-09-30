# 6. Evrensel UI Stratejisi

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

## 6.1 Ortak olan (değişmez)

Renkler, tipografi, ikonlar, bileşenler, yerleşim, animasyonlar, uygulama içi menüler, diyaloglar, bildirim kartları, kaydırma çubukları ve tüm uygulama içi etkileşimler üç platformda piksel olarak aynıdır. Fontlar uygulamayla birlikte gömülür; sistem fontuna asla güvenilmez.

## 6.2 Platforma göre değişen (zorunlu adaptasyonlar)

```text
Gerçekçi not:  Tamamen “tek UI” kağıt üzerinde temiz görünür ama pencere kontrolleri, kısayol tuşları, menü çubuğu ve dosya diyaloglarında platforma uymamak “yabancı uygulama” hissi verir (HIG Familiarity, Nielsen #4). Standart: %95 ortak arayüz + %5 zorunlu platform adaptasyonu. Aşağıdaki liste kapalıdır; bunun dışında platforma özel UI yazılmaz.
```

| Konu | macOS | Windows | Linux |
| --- | --- | --- | --- |
| Pencere kontrolleri | Trafik ışıkları solda (hiddenInset), sol 78 px güvenli alan | Sağda 46×40 min/max/kapat (titleBarOverlay), kapat hover #C42B1C | Sağda özel çizilmiş 24 px yuvarlak kontroller (frame:false) |
| Değiştirici tuş | ⌘ Cmd | Ctrl | Ctrl |
| Kısayol gösterimi | Semboller: ⌘⇧⌥⌃, boşluksuz (⌘⇧R) | Metin: Ctrl+Shift+R | Metin: Ctrl+Shift+R |
| Menü çubuğu | Native global menü (AFT, Dosya, Düzen, Görünüm, Pencere, Yardım) | Uygulama içi; komut paleti | Windows ile aynı |
| Ayarlar | ⌘ , | Ctrl + , | Ctrl + , |
| Yinele | ⌘⇧Z | Ctrl+Y ve Ctrl+Shift+Z | Ctrl+Shift+Z |
| Çıkış | ⌘Q (pencere kapanınca uygulama açık kalır) | Pencere kapanınca uygulama kapanır | Ctrl+Q |
| Dosya diyalogları | Native | Native | Native (xdg-desktop-portal) |
| Sistem bildirimi | Notification Center | Toast (AppUserModelID zorunlu) | libnotify |

```text
Karar:  Diyaloglarda buton sırası üç platformda da [İkincil] [Birincil] (birincil sağda). Windows 11 ve GNOME bu düzeni zaten kullanır; tek UI hedefine en az sürtünmeyle uyan seçenek budur.
```

Şekil 3 · Başlık çubuğunun üç platform varyantı. İçerik aynı, yalnızca pencere kontrolleri ve kısayol gösterimi değişir.

## 6.3 Ekran yoğunluğu ve ölçekleme

- Tüm ölçüler CSS piksel cinsindendir. Windows %100–200, macOS Retina, Linux fractional scaling otomatik ölçeklenir.
- Kesirli ölçeklerde (%125, %175) 0.5 px değer kullanılmaz; border 1 px, konumlar tam sayı. Aksi hâlde Windows’ta çizgiler bulanıklaşır. Mevcut ekranların çoğu %125’te çekilmiş; test bu ölçekte zorunlu.
- transform: scale() ve kesirli translate metin taşıyan elemanlarda kullanılmaz.
- Logo ve ikonlar SVG; raster gerekiyorsa @1x, @2x, @3x.
- Minimum pencere 1024 × 640, varsayılan 1440 × 900 veya ekranın %80’i. Boyut ve konum oturumlar arası saklanır.