# 24. Heuristik Eşleme

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

| Heuristik | AFT’deki karşılığı |
| --- | --- |
| 1. Sistem durumunun görünürlüğü | Status bar (bağlantı, eşitleme), kayıt çubuğu, adım durum ikonları, 300 ms gecikmeli yükleme. |
| 2. Gerçek dünya uyumu | Kimlik, Zayıf/Sağlam, Geçti/Kaldı; iç terimler Tanılama’da. |
| 3. Kontrol ve özgürlük | Geri al, ajan değişikliğini geri alma, kayıt Duraklat, Esc ile ajanı durdurma. |
| 4. Tutarlılık | Her ekranda aynı başlık çubuğu, tek terim sözlüğü, IDE kısayolları. |
| 5. Hata önleme | Kayıt sırasında kimlik kalitesi, Prod badge’i, Sil menüde, gizli değer maskeleme. |
| 6. Tanıma | Komut paleti, etiketli tooltip’ler, ajan görev kartları, son kullanılanlar. |
| 7. Esneklik | Kısayollar, Kod görünümü, yoğunluk ayarı, ajan Sor/Ajan modları. |
| 8. Minimalizm | KPI azaltma, boş panel yok, hover eylemleri, 2 seviyeli ayarlar. |
| 9. Hatadan kurtarma | Satır içi hata kartı: ne oldu + neden + Ajan ile onar / Yeniden yakala. |
| 10. Yardım | Sayfa açıklamaları, formül tooltip’leri, ilk kullanım ipuçları. |

## 24.1 Progressive disclosure haritası

| Alan | Seviye 1 (görünür) | Seviye 2 (istek üzerine) |
| --- | --- | --- |
| Adım ayarı | Eylem, hedef, bekleme, hata olursa | Yeniden deneme, ekran görüntüsü, not, koşul |
| Senaryo | Adımlar | Kod, Veri, Geçmiş sekmeleri |
| Ajan adımları | Özet (“Sayfa tarandı · 3 aday”) | Araç çağrısının girdi/çıktısı |
| Kimlik Sağlığı | Liste + durum filtresi | Strateji, model, projeksiyon (Ayarlar) |
| Koşum hatası | Satır içi kart | Stack trace, ağ kaydı, DOM anlık görüntüsü |
