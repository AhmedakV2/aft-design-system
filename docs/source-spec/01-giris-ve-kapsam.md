# 1. Giriş ve Kapsam

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

Bu doküman AFT’nin Windows, macOS ve Linux üzerinde tek bir arayüz ile çalışacak yeni tasarım sistemini ve marka dilini tanımlar. Mevcut ekranlar incelenmiş, korunacak yanlar ayrılmış, sorunlu noktalar gerekçeleriyle yeniden tasarlanmıştır.

Doküman bir “stil rehberi” değil, uygulanabilir bir spesifikasyondur: her renk hex değeriyle, her ölçü piksel değeriyle, her kural gerekçesiyle verilir. Belirsiz kalan her karar farklı geliştiricilerin farklı yorumlaması demektir; marka tutarlılığı da tam orada kaybolur.

## 1.1 Ürün kapsamı

| Modül | Amaç |
| --- | --- |
| Tarayıcı | Gömülü tarayıcıda hedef uygulamayı açar, etkileşimleri kaydeder (Record) ve oynatır (Playback). |
| Senaryolar | Kayıtlı ve elle yazılmış senaryoların kütüphanesi. Adım listesi, adım ayarları ve kod (QA dili) görünümü. |
| Sonuçlar | Koşumların listesi ve ayrıntısı: adımlar, ekran görüntüleri, bağlam paketleri, rapor. |
| İstatistik | Başarı oranı, koşum hacmi, süre dağılımı, kararsız (flaky) senaryolar. |
| Kimlik Sağlığı | Testlerin hedeflediği elementlerin (descriptor) güvenilirliği, kırılganlar ve otomatik onarım. |
| Kapsam | Sayfada testlerin erişemediği bölgeler ve iç çerçeveler. |
| Ajan | Sayfayı tarayan, senaryo çalıştıran, hatayı çözen ve sağlık raporu çıkaran AI ajanı. |
| Veri | Yerel depo, gönderim kuyruğu ve sunucu eşitlemesi. |

## 1.2 Dayanak kaynaklar

| Kaynak | Bu dokümana etkisi |
| --- | --- |
| Apple HIG · 8 tasarım ilkesi | Purpose, Agency, Responsibility, Familiarity, Flexibility, Simplicity, Craft, Delight ilkeleri AFT ilkelerine (Bölüm 5) dönüştürüldü. |
| NN/g · 10 Usability Heuristics | Mevcut arayüz bu heuristiklere göre denetlendi (Bölüm 2), yeni tasarım her birine eşlendi (Bölüm 24). |
| NN/g · Progressive Disclosure | Ayarlar, ajan araç çağrıları, adım ayrıntısı ve Kimlik Sağlığı sekmeleri en fazla 2 seviyeli yapıya indirildi. |
| NN/g · Aesthetic-Usability Effect | Premium görünüm hedeflenirken, testlerde estetiğin sorunları maskelemesine karşı yöntem tanımlandı (Bölüm 25). |

## 1.3 Terminoloji

| Terim | Anlam |
| --- | --- |
| Senaryo | Bir iş akışını test eden adımlar bütünü (şema: scenario/1.0.0). |
| Adım | Senaryodaki tek eylem: git, yaz, tıkla, seç, bekle, doğrula… |
| Koşum | Bir senaryonun tek bir çalıştırılması ve sonucu. |
| Kimlik | Bir adımın hedeflediği elementin tanımı (kodda descriptor). Arayüzde “Kimlik” kullanılır, “descriptor” kullanılmaz. |
| Kimlik kalitesi | Kimliğin sayfada doğru elementi tek başına bulma güveni (%0–100). |
| Kararsız (flaky) | Aynı kodla bazen geçip bazen kalan senaryo veya adım. |
| Token | Tasarım kararını taşıyan isimlendirilmiş değer (ör. bg.surface). Kodda ham hex veya piksel yazılmaz. |
