# 17. Modül: İstatistik

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

- KPI hiyerarşisi: 1 ana (Başarı oranı, display 40/48 + eğilim + sparkline) + 3 destek (Koşum, Kararsız senaryo, Ortalama süre). Adım sayısı, kalan adım, güven, onarım gibi değerler detay tablosuna iner.
- Zaman ekseni orantılı: veri olmayan günler 2 px gri çizgiyle boşluk olarak gösterilir. Eksen etiketi haftalık.
- Tanım tutarlılığı: Geçti + Kaldı + Hata + İptal = Koşum. “Başarı oranı = Geçti / (Koşum − İptal)”. Formül tooltip’te yazılır.
- Aksiyon alınabilirlik: “En çok kalan senaryolar” listesi, her satırda en sık kalan adımla. Tıklayınca ilgili senaryo ve adım açılır.
- Her grafikte Grafik / Tablo geçişi (erişilebilirlik ve kopyalanabilir veri).
- Tarih aralığı: 7 / 30 / 90 gün + Özel. Proje filtresi sayfa başlığında. Mevcut “Tümü · Kurumsal” gibi birleşik etiketler ayrıştırılır.
## 17.1 Grafik kuralları

| Kural | Değer |
| --- | --- |
| Çubuk genişliği | Gün başına sabit; aralık %40. Yığılmış çubuklarda segmentler arası 2 px boşluk. |
| Sıralama | Geçti altta (taban), Kaldı üstte. Hata ve İptal ayrı seri, yalnızca varsa. |
| Izgara | 3 yatay çizgi (0, orta, maks), border.subtle. Dikey ızgara yok. |
| Eksen metni | 11 px, text.tertiary, tabular. |
| Halka grafik | Kullanılmaz; 4 kategorili oranlar için yatay yığılmış bar daha okunaklıdır (Kimlik Sağlığı örneğindeki gibi). |
| Renk körlüğü | Geçti/Kaldı tonları parlaklıkta da ayrışır (L: 0.51 / 0.22). Hover’da değer etiketi. |
