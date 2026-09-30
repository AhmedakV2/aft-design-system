# 21. UX Yazımı

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

- Butonlar fiil ile başlar: “Senaryoyu çalıştır”, “Zayıfları onar”. “Tamam”, “Evet” kullanılmaz.
- Kullanıcı dili: “descriptor” › “kimlik”, “fair · %49” › “Zayıf · %49”, “wal” › Tanılama’da kalır.
- Hata formülü: Ne oldu + Neden (biliniyorsa) + Ne yapılabilir.
- Terimler sözlükte sabit (Bölüm 1.3). Aynı kavrama iki kelime, iki kavrama aynı kelime yasak.
- i18n: TR ve EN ile başla; metin kutuları %30 uzamaya dayanıklı.
| Mevcut / Kötü | Önerilen |
| --- | --- |
| Başarısız 127 (KPI) · Başarısız 113 (grafik) | Kaldı 113 · Hata 9 · İptal 5 |
| 64 bulunamayan · 64 zayıf · 276 descriptor | 276 kimlik · 64 zayıf · 64 bulunamadı |
| Seviye 1 | Etkileşimli · Tıklanabilir ve yazılabilir alanlar |
| Kör nokta bulunmadı … ya da henüz tarama yapılmadı | Henüz tarama yapılmadı [Sayfayı tara] |
| Senaryo seçilmedi | (Gösterilmez; son senaryo açılır) |
| Bu işlemi yapmak istediğinize emin misiniz? | “Hbys” senaryosu silinsin mi? 7 adım ve 24 koşum geçmişi silinecek. [Vazgeç] [Senaryoyu sil] |
