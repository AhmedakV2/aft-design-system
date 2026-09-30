# 18. Modül: Kimlik Sağlığı

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

Şekil 15 · Yeniden tasarlanmış Kimlik Sağlığı. Tek dağılım barı, sayfaya göre gruplu liste, hover’da görünen eylemler.

Şekil 16 · Mevcut Kimlik Sağlığı ekranı. 8 KPI, 6 sekme, 4 üst buton, her satırda 3 sürekli ikon.

- Başlık altında açıklama: “Testlerin hedeflediği 276 elementin ne kadar güvenilir bulunduğu”. Sayfanın ne işe yaradığı ilk bakışta anlaşılır (Nielsen #10).
- Özet: tek yatay dağılım barı (Sağlam / Zayıf / Bulunamayan) + ortalama güven. 8 KPI kartı yerine.
- Liste sayfa adresine göre gruplanır; adres mono ve ortadan kısaltılır.
- Filtre: Tümü, Zayıf, Bulunamayan, Onay bekleyen. “Strateji”, “Model”, “Projeksiyon” Ayarlar › Kimlik stratejisi altına taşınır (uzman ayarları).
- Ana eylem: Zayıfları onar (128) primary. Ajan önerileri “Onay bekleyen” filtresinde toplanır; toplu onay ve tek tek diff görünümü.
- Satır eylemleri (Sayfada göster, Onar, ⋯) yalnızca hover/seçimde.