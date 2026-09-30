# 12. Hareket (Motion)

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

Hareket süs değil, bilgidir: bir şeyin nereden geldiğini, nereye gittiğini ve sistemin çalıştığını anlatır.

| Token | Süre | Kullanım |
| --- | --- | --- |
| duration.instant | 80 ms | Hover, pressed, checkbox |
| duration.fast | 120 ms | Tooltip, menü, sekme çizgisi |
| duration.base | 200 ms | Panel, toast, satır genişleme |
| duration.slow | 320 ms | Dialog, çekmece |

| Easing | Değer | Kullanım |
| --- | --- | --- |
| ease.standard | cubic-bezier(0.2, 0, 0, 1) | Ekranda kalan eleman |
| ease.enter | cubic-bezier(0, 0, 0.2, 1) | Ekrana giren eleman |
| ease.exit | cubic-bezier(0.4, 0, 1, 1) | Ekrandan çıkan eleman |

## 12.1 Bekleme eşikleri (Nielsen 0.1 / 1 / 10 sn)

| Süre | Gösterim |
| --- | --- |
| < 100 ms | Gösterge yok. |
| 100 ms – 1 s | Gösterge 300 ms gecikmeyle başlar. Buton içinde spinner, genişlik sabit. |
| 1 – 10 s | Skeleton veya belirli ilerleme; ne yapıldığı metinle (“Adım 4 / 7”). |
| > 10 s | Belirli ilerleme + kalan süre + arka planda devam. Pencere odakta değilse bitişte sistem bildirimi. |

- Yalnızca transform ve opacity animasyonlanır.
- Sıçrama (bounce) yok. Kayıt noktası 1.6 s nabız atar; başka sürekli animasyon yok.
- Canlı adımlar listesine eklenen yeni adım 200 ms’de soldan 8 px kayarak ve cobalt zeminle girer, 1.5 s sonra zemin söner.
- prefers-reduced-motion: reduce aktifse tüm süreler 0 ms, nabız durur.