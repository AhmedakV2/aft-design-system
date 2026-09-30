# 7. Renk Sistemi

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

Renk sistemi iki katmanlıdır: primitive palet ve semantic tokenlar. Tema değişimi yalnızca semantic katmanda olur. Varsayılan tema Sistem’dir (işletim sistemini takip eder); Dark ve Light eşit düzeyde desteklenir.

Şekil 4 · Primitive palet: AFT Cobalt, Graphite, semantik ve mod renkleri.

## 7.1 Primitive palet

| Token | Hex | Token | Hex |
| --- | --- | --- | --- |
| ██ cobalt.50 | #EEF3FF | ██ cobalt.500 | #2F62F5 |
| ██ cobalt.100 | #DCE6FF | ██ cobalt.600 | #2450D6 |
| ██ cobalt.200 | #BCCFFF | ██ cobalt.700 | #1E42B0 |
| ██ cobalt.300 | #93B1FF | ██ cobalt.800 | #1C388A |
| ██ cobalt.400 | #7FA6FF | ██ cobalt.900 | #1A2F6B |
| ██ graphite.50 | #F6F7F9 | ██ graphite.500 | #646B78 |
| ██ graphite.100 | #EBEDF0 | ██ graphite.600 | #4D5461 |
| ██ graphite.200 | #DCDFE4 | ██ graphite.700 | #2C3037 |
| ██ graphite.300 | #C1C6CF | ██ graphite.800 | #1C1F24 |
| ██ graphite.400 | #868E9B | ██ graphite.900 | #15171B |
| ██ graphite.0 | #FFFFFF | ██ graphite.950 | #0D0E11 |

```text
Neden saf siyah ve mevcut açık mavi zemin değil:  Dark zemin #0D0E11’dir; saf siyah metin çevresinde parlama yaratır ve yüzey katmanlarını yok eder. Mevcut light temadaki mavimsi #EEF2F7 benzeri zemin, primary maviyle aynı tonda olduğu için butonların ve seçimlerin kontrastını düşürüyor. Yeni light canvas nötr #F6F7F9’dur.
```

## 7.2 Semantic tokenlar · Yüzey, çizgi, metin

| Token | Dark | Light | Kullanım |
| --- | --- | --- | --- |
| bg.canvas | ██ #0D0E11 | ██ #F6F7F9 | Pencere zemini, başlık çubuğu, gezinme, status bar |
| bg.surface | ██ #15171B | ██ #FFFFFF | Paneller, listeler, editör |
| bg.raised | ██ #1C1F24 | ██ #FFFFFF | Kartlar, secondary buton, ajan kartı |
| bg.overlay | ██ #23262D | ██ #FFFFFF | Menü, tooltip, toast, dialog |
| bg.sunken | ██ #101114 | ██ #F0F1F4 | Input, kbd, segment kontrol, grup başlığı |
| bg.hover | white %4.5 | ink %4 | Hover katmanı |
| bg.pressed | white %8 | ink %7 | Basılı durum katmanı |
| bg.selected | cobalt.500 %18 | cobalt.500 %9 | Seçili satır, aktif gezinme öğesi |
| border.subtle | ██ #22252B | ██ #EBEDF0 | Panel ayırıcıları, tablo satırları |
| border.default | ██ #2C3037 | ██ #DCDFE4 | Input, kart, secondary buton |
| border.strong | ██ #646B78 | ██ #868E9B | Checkbox, toggle kapalı (≥ 3:1) |
| text.primary | ██ #ECEEF2 | ██ #14161A | Ana metin, başlıklar |
| text.secondary | ██ #A4ABB8 | ██ #4D5461 | Açıklama, ikincil bilgi, ikonlar |
| text.tertiary | ██ #858D9C | ██ #666D7A | Placeholder, zaman damgası, overline |
| text.disabled | ██ #4D5461 | ██ #A3A9B4 | Pasif metin |
| focus.ring | ██ #7FA6FF | ██ #2450D6 | 2 px halka + 2 px canvas boşluğu |

## 7.3 Semantic tokenlar · Eylem, durum, mod

| Token | Dark | Light | Kullanım |
| --- | --- | --- | --- |
| action.primary.bg | ██ #2F62F5 | ██ #2F62F5 | Primary buton. Hover cobalt.600, pressed cobalt.700 |
| text.link | ██ #7FA6FF | ██ #2450D6 | Link, aktif sekme çizgisi, aktif gezinme ikonu |
| status.success | ██ #3DD68C | ██ #13804A | Geçti, Sağlam, Bağlı |
| status.warning | ██ #F5B849 | ██ #A15C00 | Kararsız, Zayıf, Bekleyen |
| status.danger | ██ #FF6B63 | ██ #D92D20 | Kaldı, Bulunamadı, yıkıcı eylem |
| status.info | ██ #5AA9FF | ██ #1F6FD1 | Bilgi, Çalışıyor |
| status.*.bg | renk %12 | renk %8–9 | Pill, satır vurgusu, banner zemini |
| ai.fg | ██ #A78BFA | ██ #7045E6 | Ajan etiketi ve ikonları |
| ai.gradient | ██ #7C5CFF → #22B8D9 | aynı | Yalnızca Ajan CTA’ları |
| record.bg | ██ #D42A2A | ██ #D42A2A | Kayıt çubuğu “Bitir” butonu |
| record.dot | ██ #FF4D4F | ██ #FF4D4F | Kayıt göstergesi, breakpoint |
| chart.pass | ██ #3DD68C | ██ #1E9E63 | Grafiklerde Geçti |
| chart.fail | ██ #E5484D | ██ #E5484D | Grafiklerde Kaldı |
| chart.error / cancel | ██ #F5A524 / #9AA1AD | aynı | Grafiklerde Hata / İptal |

## 7.4 Kontrast doğrulaması (WCAG 2.2)

Değerler WCAG göreli parlaklık formülüyle hesaplanmıştır. Metin için ≥ 4.5:1, UI sınırları ve ikonlar için ≥ 3:1.

| Çift | Oran | Sonuç |
| --- | --- | --- |
| text.primary / bg.surface (dark) | 15.45 : 1 | AAA |
| text.secondary / bg.surface (dark) | 7.77 : 1 | AAA |
| text.tertiary / bg.surface (dark) | 4.95 : 1 | AA |
| text.link / bg.surface (dark) | 7.52 : 1 | AAA |
| white / action.primary.bg | 5.02 : 1 | AA |
| white / record.bg | 5.04 : 1 | AA |
| status.danger / bg.surface (dark) | 6.44 : 1 | AA |
| border.strong / bg.surface (dark) | 3.35 : 1 | UI AA |
| text.primary / white (light) | 18.11 : 1 | AAA |
| text.secondary / white (light) | 7.62 : 1 | AAA |
| text.link / white (light) | 6.58 : 1 | AA |
| status.success / white (light) | 4.98 : 1 | AA |
| status.warning / white (light) | 5.19 : 1 | AA |
| ai.fg / white (light) | 5.70 : 1 | AA |
| border.strong / white (light) | 3.30 : 1 | UI AA |

## 7.5 Renk kullanım kuralları

- 60-30-10: %60 canvas/surface, %30 metin ve çizgiler, en fazla %10 vurgu. Bir ekranda birden fazla primary buton olmaz.
- Cobalt = eylem, Aurora = Ajan, Kırmızı nokta = kayıt. Bu üç aile birbirinin yerine kullanılmaz.
- Danger ≠ Record: Kayıt başlatma butonu secondary + kırmızı nokta ikonu; kayıt sırasında “Bitir” dolu kırmızıdır. Silme butonu outline danger’dır ve hiçbir zaman ana eylemin yanında durmaz.
- Durum renkleri yalnızca durum için; dekoratif yeşil/kırmızı yok.
- Hover/pressed yeni renk değil, alfa katmanı (bg.hover, bg.pressed) ile yapılır.
- Kodda ham hex yasak; Stylelint ile engellenir (Bölüm 25).