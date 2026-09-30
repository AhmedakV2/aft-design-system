# 27. Logo ve Uygulama İkonu

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

- Mevcut A işareti korunur; yalnızca geometri inceltilir: sağ ve sol ayak eşit kalınlıkta, iç kesim optik olarak ortalanmış, köşeler 0.5 px yuvarlatılmış.
- Renk: cobalt.500 tek renk. Koyu zeminde beyaz veya cobalt.400. Gradyan, gölge, çerçeve yok.
- Wordmark “AFT”: Inter 600, +0.02em harf aralığı, büyük harf. İşaret ile wordmark arası = işaret genişliğinin %40’ı.
- Güvenli alan: işaret yüksekliğinin %25’i. Minimum boyut: işaret 16 px, işaret + wordmark 56 px.
- Başlık çubuğundaki yanındaki yeşil nokta kaldırılır; bağlantı durumu status bar’a taşınır.
| Platform | Format | Boyutlar | Kural |
| --- | --- | --- | --- |
| macOS | .icns | 16–1024 (@1x/@2x) | 1024 kanvas, Apple squircle grid; cobalt zemin üzerinde beyaz A. macOS 26 için Icon Composer ile katmanlı. |
| Windows | .ico | 16, 20, 24, 32, 40, 48, 64, 256 | Hafif yuvarlak kare; 16–32 px için sadeleştirilmiş çizim (iç kesim kalkar). |
| Linux | .png + .svg | 16–512 + scalable | hicolor tema dizini, .desktop dosyasında Icon=aft. |
| Tray | Template .png | 16, 32 (@2x) | macOS siyah template; Win/Linux tek renk. |
