# 13. Bileşen Kütüphanesi

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

Şekil 7 · Temel bileşenler · Dark.

Şekil 8 · Temel bileşenler · Light. Aynı token isimleri, farklı değerler.

## 13.1 Buton

| Boyut | Yükseklik | Yatay padding | Font | İkon | Radius |
| --- | --- | --- | --- | --- | --- |
| sm | 24 px | 8 px | 12/16 · 500 | 12–14 px | 5 px |
| md (varsayılan) | 28 px | 12 px | 13/20 · 500 | 14 px | 6 px |
| lg | 32 px | 14 px | 13/20 · 500 | 16 px | 6 px |
| xl | 40 px | 18 px | 14/20 · 500 | 16 px | 8 px |

| Varyant | Görünüm | Ne zaman |
| --- | --- | --- |
| primary | Cobalt dolgu, beyaz metin, üstte 1 px beyaz %14 iç parlama | Ekrandaki tek ana eylem (Çalıştır, Çözümle) |
| secondary | bg.raised + border.default | İkincil eylemler (Sayfayı tara, Kaydederek ekle) |
| ghost | Şeffaf, text.secondary | Toolbar, Vazgeç, Doğrula |
| danger | Outline danger; onay diyaloğunda dolgulu | Sil, Temizle |
| record | Dolu kırmızı | Yalnızca kayıt sırasında “Bitir ve kaydet” |
| ai | Aurora gradyanı + sparkles | Yalnızca Ajan’a iş veren CTA (Ajan ile onar) |

| Durum | Kural |
| --- | --- |
| Hover | Primary cobalt.600, diğerleri bg.hover. 80 ms. |
| Pressed | Primary cobalt.700, diğerleri bg.pressed. Scale efekti yok. |
| Focus | :focus-visible ile 2 px canvas + 2 px focus.ring. |
| Disabled | bg.raised + text.disabled; tooltip ile nedeni. Mevcut Senaryolar ekranında Çalıştır nedeni belirtilmeden pasif. |
| Loading | Spinner ikonun yerini alır, metin “-iyor” formuna geçer, genişlik sabit. |

```text
Masaüstü detayı:  Butonlarda cursor: pointer kullanılmaz; masaüstü uygulamalarında el imleci yalnızca linkler içindir. Arayüz metinleri user-select: none; içerik (adres, kimlik, log, kod) seçilebilir. Bu iki kural uygulamanın “web sayfası” değil “native uygulama” gibi hissettirmesini sağlar.
```

## 13.2 Form elemanları

- Input 28 px, bg.sunken, border.default, radius 6. Focus: border cobalt.500 + 3 px cobalt %18 halo.
- Hata: border danger + halo; altında 12/16 metin ve circle-alert. Doğrulama blur anında.
- Label her zaman input’un üstünde. Placeholder label yerine kullanılmaz.
- Checkbox 16 × 16, radius 4; tıklama alanı satırın tamamı. Anında etki eden ayarlarda toggle.
- Native <select> kullanılmaz (platforma göre farklı görünür); özel listbox, yazarak arama destekli.
## 13.3 Kimlik kalitesi göstergesi (AFT imza bileşeni)

| Özellik | Değer |
| --- | --- |
| Yapı | 36 × 4 px bar (radius 2) + 6 px boşluk + mono 11 px tabular yüzde |
| Eşikler | ≥ %80 success (Sağlam), %60–79 warning, < %60 danger (Zayıf). Bulunamadı: “—”. |
| Kullanım | Adım satırı, adım ayarı, Kimlik Sağlığı tablosu, tarayıcı element etiketi, ajan diff kartı (önce → sonra). |
| Tooltip | “Kimlik kalitesi %49 · Zayıf. Rol ve metin eşleşiyor, konum eşleşmiyor.” |

## 13.4 Katman bileşenleri

| Bileşen | Spesifikasyon |
| --- | --- |
| Tooltip | bg.overlay, 12/16, radius 6. İlk gösterim 600 ms; 1.5 s içinde diğerine 0 ms. Kısayol kbd ile. |
| Context menü | Min 200 px, öğe 28 px, radius 8. Yıkıcı eylem en altta, ayırıcıdan sonra. |
| Dialog | 480 / 640 / 880 px. Padding 24, radius 12. Esc kapatır, focus içeride. |
| Toast | Sağ alt, 360 px. Başarı 4 s, hata kapatılana kadar. Mümkünse “Geri al”. |
| Komut paleti | ⌘K / Ctrl+K. 640 px, üstten %20. Son kullanılanlar üstte, kısayollar sağda. |
| Boş durum | 24 px ikon, başlık, tek cümle, tek eylem butonu. Ör. “Henüz koşum yok · Senaryo çalıştır”. |
