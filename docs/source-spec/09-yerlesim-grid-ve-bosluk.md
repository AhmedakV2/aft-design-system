# 9. Yerleşim, Grid ve Boşluk

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

Şekil 6 · 4 px grid, spacing ölçeği, radius ve elevation.

## 9.1 Spacing ölçeği (4 px taban)

| Token | Değer | Tipik kullanım |
| --- | --- | --- |
| space-0.5 | 2 px | Segment kontrol iç boşluğu |
| space-1 | 4 px | İkon butonlar arası |
| space-1.5 | 6 px | Buton içi ikon–metin, label–input |
| space-2 | 8 px | Toolbar elemanları arası |
| space-3 | 12 px | Panel iç padding, kartlar arası boşluk |
| space-4 | 16 px | Kart padding, form alanları arası |
| space-5 | 20 px | Sayfa üst padding |
| space-6 | 24 px | Sayfa yatay padding, dialog padding |
| space-8 / 10 / 12 / 16 | 32 / 40 / 48 / 64 px | Boş durum, onboarding |

## 9.2 Uygulama iskeleti ölçüleri

| Bölge | Boyut | Kural |
| --- | --- | --- |
| Başlık çubuğu | 40 px | Her ekranda aynı: logo, breadcrumb, komut paleti, Ajan ve Ayarlar. Sürükleme alanı. |
| Gezinme çubuğu | 48 px | 6 modül + altta Terminal. İkon 20 px, hedef 36×36, aktif: cobalt tint + 2 px sol çizgi. |
| Kütüphane / liste paneli | 264 px (200–480) | Boyutlandırılabilir; çift tık varsayılana döner; 160 px altına sürüklenince kapanır. |
| Sayfa başlığı | 56 px | Başlık + tek satır meta + eylemler (tek primary). |
| Sekmeler | 36 px | Aktif: 2 px cobalt alt çizgi. |
| Adım satırı | 44 px | Tutamaç, sıra, durum, eylem çipi, hedef, değer, kalite, süre. |
| Tablo satırı | 36 px (kompakt 28) | Yoğunluk ayarı Görünüm’de. |
| Sağ panel (Adım / Ajan) | 372 px (320–560) | < 1280 px pencerede overlay çekmece. |
| Status bar | 24 px | Bağlantı, eşitleme, hedef ortam, tarayıcı, dil, sürüm. |

## 9.3 Duyarlı davranış

| Genişlik | Davranış |
| --- | --- |
| ≥ 1440 px | Liste + içerik + sağ panel açık. |
| 1280–1439 px | Sağ panel açık, liste paneli 240 px. |
| 1024–1279 px | Sağ panel overlay çekmece. İstatistik KPI’ları 2×2 grid. |
| < 1024 px | Minimum pencere boyutu ile engellenir. |

## 9.4 Katman sırası

| Token | Değer | Eleman |
| --- | --- | --- |
| z.base | 0 | İçerik |
| z.sticky | 10 | Sabit tablo başlığı |
| z.drawer | 100 | Sağ panel overlay |
| z.dropdown | 200 | Select, context menü |
| z.dialog | 300 | Modal dialog + scrim |
| z.toast | 400 | Toast |
| z.tooltip | 500 | Tooltip |
| z.inspect | 1000 | Tarayıcıdaki element seçici overlay’i |
