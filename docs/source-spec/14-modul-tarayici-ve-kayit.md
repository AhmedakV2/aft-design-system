# 14. Modül: Tarayıcı ve Kayıt

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

Şekil 9 · Kayıt sırasında Tarayıcı. Sabit kayıt çubuğu, element etiketi, canlı adımlar.

## 14.1 Akış

- Başlat: Tarayıcı araç çubuğundaki Kaydet, Senaryolar’daki “Kaydederek ekle” veya ⌘⇧R / Ctrl+Shift+R. Hedef senaryo seçimi (yeni veya mevcut) tek adımlı küçük dialogla sorulur.
- Kayıt sırasında: Adres çubuğunun altında 48 px kayıt çubuğu belirir (kırmızı %7 zemin). Sağ panel otomatik “Canlı adımlar”a geçer. Kayıt çubuğu kaydırmayla kaybolmaz.
- Bitir: “Bitir ve kaydet” veya aynı kısayol. Adımlar senaryoya eklenir, Senaryolar ekranı açılır; toast “6 adım eklendi · Geri al”.
## 14.2 Kayıt çubuğu

| Bölge | İçerik |
| --- | --- |
| Sol | Nabız atan 10 px kayıt noktası + “Kaydediliyor” + mono sayaç |
| Eylemler (sm ghost) | Duraklat · Element seç · Doğrulama ekle · Ekran görüntüsü · Gizli değer |
| Sağ | Kısayol ipucu + record varyant “Bitir ve kaydet” |
| Gizli değer | Parola gibi alanlarda yazılan değer kaydedilmez; {{ gizli.PAROLA }} referansına dönüşür (Ayarlar › Gizli değerler). |

## 14.3 Element seçici overlay

- Hover edilen element: 2 px cobalt.500 çerçeve + %10 dolgu.
- Koyu etiket: rol + erişilebilir ad + boyut ve kimlik kalitesi göstergesi. Kullanıcı daha tıklamadan kimliğin güvenilir olup olmayacağını görür (Nielsen #5, hata önleme).
- Kimlik önceliği: rol + erişilebilir ad > data-testid > id > CSS yolu. XPath son çare ve uyarıyla.
- Kalite < %60 ise etiket turuncu çerçeve alır ve “Daha güvenilir bir hedef seçin” uyarısı çıkar.
## 14.4 Boş Tarayıcı ekranı

Tek arama/adres alanı (üst çubukta; ortada ikinci bir kutu yok). Ortada son ziyaret edilen hedefler kart olarak, her kartta ortam etiketi (Staging, Test, Prod) ve son koşum durumu. Prod ortamı her zaman kırmızı badge ile işaretlidir.
