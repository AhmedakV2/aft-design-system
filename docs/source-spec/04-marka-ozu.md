# 4. Marka Özü

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

## 4.1 Konumlandırma

Hedef kullanıcı: QA mühendisleri, test otomasyonu yapan geliştiriciler ve kurumsal yazılım (ör. HBYS) test ekipleri. Bu kitle saatlerce aynı ekrana bakar, yoğun bilgiyle çalışır ve güvenilmezlik (kararsız test, açıklanamayan hata) karşısında toleransı düşüktür. AFT’nin markası bu yüzden gösterişli değil, güven veren olmalıdır.

Tasarım dili adı: Precision Calm (Kesin Sakinlik). Arayüz sessizdir; renk ve hareket yalnızca durum değiştiğinde konuşur.

## 4.2 Marka kişiliği

| Özellik | Ne demek | Ne değil |
| --- | --- | --- |
| Kesin | Ölçülü tipografi, 4 px grid, tabular rakamlar, tanımı sabit terimler. | Soğuk, bürokratik, teknik jargon dolu. |
| Sakin | Nötr yüzeyler; renk sadece anlam taşıdığında. | Sönük, sıkıcı, hiyerarşisiz. |
| Şeffaf | Sistem ve Ajan ne yapıyorsa görünür; hiçbir değişiklik gizli değil. | Her detayı aynı anda göstermek. |
| Yetkin | Uzman kullanıcıya kısayol, komut paleti, QA dili. | Yeni başlayanı dışlayan karmaşıklık. |

## 4.3 Görsel imza

- AFT Cobalt (#2F62F5) birincil eylem rengi. Mevcut logonun mavisinin daha canlı ve erişilebilir hâli; marka sürekliliği korunur. Ekranın en fazla %5–10’unu kaplar.
- Aurora gradyanı (#7C5CFF → #4F7CFF → #22B8D9) yalnızca Ajan özelliklerinde. Cobalt maviden ayrışan mor tonu, “burada AI var” sinyalini tek bakışta verir.
- Kayıt kırmızısı noktası (#FF4D4F) ve sabit kayıt çubuğu. Kayıt modunun evrensel işareti.
- Kimlik kalitesi göstergesi: 36 px bar + yüzde. AFT’ye özgü, her ekranda aynı görünen imza bileşen.
- Mono + Sans ikilisi: Inter arayüzde, JetBrains Mono kod, adres, seçici ve süre değerlerinde.