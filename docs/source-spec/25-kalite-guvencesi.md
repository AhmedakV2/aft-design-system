# 25. Kalite Güvencesi

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

- Görsel regresyon: Her bileşen Storybook’ta; Playwright ekran görüntüsü testleri Windows, macOS ve Ubuntu CI’da. Platformlar arası piksel farkı eşiği %0.1. AFT zaten Playwright tabanlı test yaptığı için bu altyapı ekipte mevcut.
- Lint: Stylelint ile ham hex, token dışı px (1 px border hariç) ve cursor: pointer (link hariç) yasak.
- Kontrast: Token değişince tüm semantic çiftler otomatik hesaplanır; 4.5:1 altı PR’ı bloklar.
- Erişilebilirlik: axe-core her Storybook hikâyesinde.
- Performans: Soğuk açılış < 2 s, açılışta beyaz flaş yok, etkileşim < 100 ms.
## 25.1 Piksel QA listesi

- Ölçüler 4 px grid’e oturuyor mu?
- İkonlar %125 Windows ölçeğinde keskin mi?
- İç içe radius kuralı uygulanmış mı?
- Sayılar tabular mı, sayaç çalışırken metin zıplıyor mu?
- Türkçe büyük harfte İ/ı doğru mu?
- Dark ve Light’ta aynı ekran kontrol edildi mi?
- Tüm akış klavyeyle tamamlanabiliyor mu?
- Boş, yükleniyor, hata ve başarılı durumların hepsi tasarlandı mı?
## 25.2 Kullanılabilirlik testi ve estetik yanılgısı

Aesthetic-usability etkisi gereği yeni ve daha şık arayüz, kullanıcıların küçük sorunları raporlamamasına yol açar. Bu yüzden:

- Söylenene değil yapılana bakılır: görev tamamlama oranı, süre, hata sayısı. Örnek görev: “Hbys senaryosunun 6. adımını onar ve yeniden çalıştır.”
- Mevcut ve yeni arayüz aynı görevlerle ölçülür; fark sayısal olarak raporlanır.
- “Beğendiniz mi?” yerine “Bu adımda neyi bekliyordunuz?”.
- Gri tonlu prototiple ek tur; estetiğin maskelediği sorunlar ortaya çıkar.