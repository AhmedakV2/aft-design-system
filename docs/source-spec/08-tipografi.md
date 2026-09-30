# 8. Tipografi

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

Şekil 5 · Yazı tipi ölçeği ve font eşleşmesi.

## 8.1 Yazı tipleri

| Rol | Font | Lisans | Neden |
| --- | --- | --- | --- |
| UI | Inter Variable (wght 100–900) | SIL OFL 1.1 | Ekran için tasarlanmış, Türkçe desteği tam, tabular rakamlar, küçük boyutlarda okunaklı. |
| Kod / veri | JetBrains Mono Variable | SIL OFL 1.1 | 0/O ve 1/l/I ayrımı net; adres, seçici ve süre değerleri için ideal. |

```text
Kritik kural:  Fontlar @fontsource-variable/inter ve @fontsource-variable/jetbrains-mono ile uygulamaya gömülür. system-ui, Segoe UI, -apple-system kullanılmaz; mevcut sürümde Windows’ta Segoe UI çıkıyor, macOS’ta SF Pro çıkacaktır ve tek UI hedefi ilk satırda çöker. Yalnızca latin ve latin-ext alt kümeleri paketlenir (Türkçe için latin-ext zorunlu).
```

## 8.2 Tip ölçeği

| Token | Boyut / Satır | Ağırlık | Harf aralığı | Kullanım |
| --- | --- | --- | --- | --- |
| display | 40 / 48 | 600 | -0.02em | Ana KPI (başarı oranı) |
| title-1 | 20 / 28 | 600 | -0.01em | Sayfa başlığı (İstatistik, Kimlik Sağlığı) |
| title-2 | 16 / 24 | 600 | -0.005em | Senaryo adı, dialog başlığı |
| kpi | 28 / 36 | 600 | -0.015em | Destek KPI değerleri |
| heading | 14 / 20 | 600 | 0 | Kart ve panel başlığı |
| body | 13 / 20 | 400 | 0 | Varsayılan UI metni |
| label | 12 / 16 | 500 | 0 | Form etiketi, küçük buton, meta |
| caption | 11 / 16 | 500 | 0.01em | Status bar, zaman damgası |
| overline | 11 / 16 | 600 | 0.06em | Panel ve tablo başlıkları (BÜYÜK HARF) |
| code | 13 / 20 | 400 | 0 | Kod görünümü |
| code-sm | 12 / 20 | 400 | 0 | Adres, kimlik, diff, log |

## 8.3 Tipografi detayları

- Gövde 13 px. Mevcut arayüzde 12 px ağırlıklı; %125 ölçekte bile uzun süre okunması yorucu.
- Yalnızca 400, 500, 600. 700+ bağırır, 300- zeminde kaybolur.
- font-feature-settings: "cv11", "ss01". Tablo, süre, sayaç ve yüzdelerde font-variant-numeric: tabular-nums zorunlu.
- Türkçe büyük harf: text-transform: uppercase her yerde <html lang="tr"> ile. Aksi hâlde “Kütüphane” › “KUTUPHANE” değil ama “Gezgini” › “GEZGINI” olur. JS’de toLocaleUpperCase("tr-TR").
- Sayı biçimi yerel ayara göre: TR “6,3 sn”, “%58”; EN “6.3 s”, “58%”. Intl.NumberFormat kullanılır; mevcut arayüzdeki TR biçimi doğru, standartlaştırılmalı.
- Kod fontunda ligatür varsayılan kapalı (calt 0).
- Kesme: tek satırda ellipsis + tooltip’te tam metin. Adreslerde kesme ortadan (…/hbys-web/gen/anasayfa), çünkü sayfa yolu en anlamlı kısımdır. Mevcut Kimlik Sağlığı tablosunda adresler sondan kesiliyor ve sayfa adı kayboluyor.