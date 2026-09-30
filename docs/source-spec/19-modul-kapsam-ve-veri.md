# 19. Modül: Kapsam ve Veri

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

## 19.1 Kapsam

- “Seviye 0–3” yerine anlamını söyleyen isimler kullanılır; her seviyenin altında tek cümle açıklama. Örnek adlandırma: Görünür, Etkileşimli, Dinamik, Derin. Kesin isimler seviyelerin teknik tanımına göre belirlenmeli.
- Tarama yapılmadıysa boş durum “Henüz tarama yapılmadı” der ve Sayfayı tara butonu içerir. “Kör nokta bulunmadı” yalnızca tarama sonrası gösterilir; mevcut ekran iki durumu tek mesajda birleştiriyor ve kullanıcı hangisinin geçerli olduğunu bilemiyor.
- Sonuç varken: solda erişilemeyen bölgeler listesi, sağda sayfa önizlemesi üzerinde bölgelerin kesikli çerçeveyle işaretlenmesi.
## 19.2 Veri ve eşitleme

- Ana gezinmeden çıkar, Ayarlar › Sistem › Veri ve eşitleme altına taşınır.
- Status bar her zaman: “Bağlı · 172 gönderildi · 141 bekleyen”. Hatalı gönderim varsa kırmızı “44 hatalı” ve tıklayınca ilgili ayar sayfası açılır.
- Teknik alanlar (günlük kipi, şema sürümü, dosya yolu) “Tanılama” başlığı altında, kopyalanabilir mono metin olarak.
- “Temizle” danger varyantı ve onay diyaloğu: “141 bekleyen kayıt silinecek. Bu işlem geri alınamaz.”