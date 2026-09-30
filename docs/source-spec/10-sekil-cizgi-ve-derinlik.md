# 10. Şekil, Çizgi ve Derinlik

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

| Token | Değer | Kullanım |
| --- | --- | --- |
| radius.xs | 4 px | Badge, kbd, checkbox, eylem çipi |
| radius.sm | 5 px | Small buton, ağaç öğesi, menü öğesi |
| radius.md | 6 px | Buton, input (varsayılan) |
| radius.lg | 8 px | Kart, menü, panel içi kutular |
| radius.xl | 12 px | Dialog, ayarlar penceresi |
| radius.full | 999 px | Pill, toggle |

- İç içe radius: iç radius = dış radius − padding. 12 px radius’lu, 4 px padding’li kapsayıcıdaki öğe 8 px alır.
- Tüm ayırıcılar 1 px border.subtle. 2 px yalnızca aktif sekme, aktif gezinme ve focus halkasında.
- Dark temada derinlik yüzey tonu + hairline, light temada gölge ile verilir.
- Mevcut arayüzde her panel ayrı beyaz kart ve kartlar arasında 8 px mavi zemin görünüyor; bu “kart mozaiği” ekranı böler. Yeni düzende paneller birbirine 1 px çizgiyle bitişir; kart yalnızca KPI ve gruplu içerik için kullanılır.
- Arka plan bulanıklığı yalnızca komut paleti ve dialog scrim’inde. Electron vibrancy/mica kullanılmaz (Linux’ta karşılığı yok).
| Seviye | Dark | Light | Eleman |
| --- | --- | --- | --- |
| 0 · canvas | bg.canvas | bg.canvas | Pencere zemini |
| 1 · surface | bg.surface + border.subtle | white + border.subtle | Paneller |
| 2 · raised | 0 8 24 rgba(0,0,0,.45) + ring white/6% | 0 8 24 rgba(16,18,24,.10) + ring ink/6% | Menü, tooltip, dropdown |
| 3 · overlay | 0 16 48 rgba(0,0,0,.55) + ring white/7% | 0 16 48 rgba(16,18,24,.16) + ring ink/7% | Dialog, toast |
