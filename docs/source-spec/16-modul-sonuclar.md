# 16. Modül: Sonuçlar

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

Şekil 14 · Mevcut Sonuçlar ekranı. Durum yalnızca renkli nokta; seçim yokken detay boş.

- Liste güne göre gruplanır (Bugün, Dün, 28 Eylül…). Grup başlığında o günün geçti/kaldı özeti.
- Satır: durum ikonu (renk + şekil), senaryo adı, geçen adım (4/8), süre, saat. Kalan koşum satırı hafif danger zemini alır.
- Filtre (Tümü, Geçti, Kaldı, Hata, İptal) ve senaryo seçimi liste başlığında; sağ üstte değil.
- Açılışta en son koşum seçili gelir. Detay panelinde: özet şerit, adım zaman çizelgesi (Bölüm 15.2 satır yapısıyla aynı), ekran görüntüleri, bağlam paketleri, rapor dışa aktarma.
- Aynı senaryonun art arda koşumları (ör. 8 × Text Input) daraltılmış grup olarak gösterilebilir: “Text Input · 8 koşum · 7 geçti”.