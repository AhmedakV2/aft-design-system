# 20. Modül: Ajan

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

## 20.1 Konum

Ajan her ekranda sağ panelde açılır (⌘I / Ctrl+I). Açık olan senaryo, koşum veya sayfa otomatik bağlam çipi olarak eklenir (@Hbys). Panel boşken mevcut ekrandaki dört görev kartı (Sayfayı tara, Senaryo çalıştır, Hatayı çöz, Sağlık raporu) gösterilir; bu desen korunur.

## 20.2 Kurallar

- Görünürlük: Plan ve her araç çağrısı adım listesi olarak; varsayılan özet (“Sayfa tarandı · 3 aday”), tıklayınca detay.
- Onay: Senaryo, kimlik veya veri değiştiren her öneri diff kartı olarak gelir: “Uygula ve koş” / “Reddet”. Uygulanan değişiklik tek tıkla geri alınır.
- Modlar: Ajan (eylem yapabilir) ve Sor (yalnızca yanıt). Mod segment kontrolü composer’da her zaman görünür.
- Durdurma: Çalışırken gönder butonu “Durdur”a dönüşür; Esc de durdurur.
- Kullanım: “9 / 1.000” sayacı composer’da kalır; %80’de uyarı rengine döner.
- Dürüstlük: Emin değilse “muhtemel neden” der. Kaynak olarak kullandığı ekran görüntüsü, log veya ağ isteği çip olarak bağlanır.
## 20.3 Diff kartı

| Öğe | Spesifikasyon |
| --- | --- |
| Başlık | İkon + nesne (“Kimlik: kapat”) + kalite değişimi (%49 → %94) |
| Gövde | Mono 12/20; silinen satır danger %12, eklenen success %12 |
| Eylemler | primary sm “Uygula ve koş”, ghost sm “Reddet” |
| Hata durumları | Bağlantı yok, kota doldu, onarım testi geçirmedi (“Değişiklik geri alındı”), yetki gerekli |
