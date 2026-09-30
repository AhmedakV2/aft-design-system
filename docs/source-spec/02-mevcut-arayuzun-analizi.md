# 2. Mevcut Arayüzün Analizi

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

Mevcut AFT ekranları (Tarayıcı, Ajan, Senaryolar, Sonuçlar, İstatistik, Kimlik Sağlığı, Kapsam, Veri, Ayarlar) Nielsen heuristikleri, progressive disclosure ve HIG ilkelerine göre incelendi. Özet: temel yapı doğru kurulmuş (sol gezinme, komut paleti, çok panelli düzen, boş durum mesajları, mono sayılar). Sorunlar büyük ölçüde hiyerarşi, yoğunluk ve terminoloji kaynaklı; iskeleti atmak gerekmiyor, yeniden düzenlemek gerekiyor.

## 2.1 Korunacak güçlü yanlar

- Komut paleti (“İşlem ara veya çalıştır”) ve kısayolu. Uzman kullanıcı için doğru temel (Nielsen #7).
- Her boş durumda ikon + başlık + tek cümle açıklama. Doğru desen; yalnızca bir eylem butonu eksik.
- Sayısal değerlerde mono font kullanımı (süre, tarih). Tabular rakam fikri doğru, uygulaması genelleştirilmeli.
- Ajan başlangıç ekranındaki dört görev kartı (Sayfayı tara, Senaryo çalıştır, Hatayı çöz, Sağlık raporu). İyi bir “tanıma, hatırlamaya gerek yok” örneği.
- Günlük ajan kullanım sayacının (9 / 1.000) görünür olması. Sistem durumu şeffaflığı.
## 2.2 Bulgular

| # | Ekran | Bulgu | İlke | Önem | Çözüm |
| --- | --- | --- | --- | --- | --- |
| 1 | Tümü | Sol gezinme ikonları etiketsiz ve anlamı belirsiz (şimşek = İstatistik, nabız = Kimlik Sağlığı, hedef = Kapsam). Alttaki ızgara ikonunun işlevi tahmin edilemiyor. | N6, N2 | Yüksek | Anlamlı ikonlar (grafik, parmak izi, radar), hover’da 600 ms tooltip, ayarlarda “etiketli gezinme” seçeneği. |
| 2 | Senaryolar | Senaryo seçili değilken ekranın %80’i iki boş panel. Adım ayarı paneli adım seçilmeden yer kaplıyor. | N8, PD | Yüksek | Son açılan senaryo otomatik açılır. Adım ayarı yalnızca adım seçilince açılan sağ panel sekmesidir. |
| 3 | Senaryolar | Yeni, Doğrula, Kaydet, Çalıştır, Sil aynı görsel ağırlıkta. Ana eylem (Çalıştır) ile yıkıcı eylem (Sil) yan yana. | N5, N8 | Yüksek | Tek primary (Çalıştır), Sil “⋯” menüsüne, Kaydet otomatik (“Kaydedildi” göstergesi). |
| 4 | Sonuçlar | Durum yalnızca renkli nokta ile gösteriliyor (kırmızı/yeşil). Renk körü kullanıcı için ayırt edilemez. | WCAG 1.4.1 | Yüksek | İkon + renk + metin (circle-check / circle-x). Kalan koşum satırı zemin rengiyle ayrılır. |
| 5 | Sonuçlar | Koşum seçilmeden detay paneli boş; filtre (Tümü/Başarılı/…) listeden uzakta sağ üstte. | N8, yakınlık | Orta | En son koşum otomatik seçilir. Filtre liste başlığına taşınır; liste güne göre gruplanır. |
| 6 | İstatistik | Dokuz KPI kartı eşit ağırlıkta; hangisinin önemli olduğu anlaşılmıyor. | N8, HIG | Yüksek | Bir ana KPI (başarı oranı) + üç destek KPI. Diğerleri tablo görünümüne veya detay sayfasına. |
| 7 | İstatistik | “Başarı oranı eğilimi” grafiğinde tarih ekseni kategorik: 04.09 ile 14.09 arası 10 gün, 14.09–15.09 arası 1 gün ile aynı genişlikte. Eğilim yanıltıcı. | Veri | Yüksek | Zaman ekseni her zaman orantılı; veri olmayan günler boşluk olarak gösterilir. |
| 8 | İstatistik | KPI “Başarısız 127”, halka grafik “Başarısız 113” diyor (127 = 113 + 9 hata + 5 iptal). Aynı kelime iki farklı tanımla kullanılıyor. | N4 | Yüksek | Terimler sabitlenir: Geçti, Kaldı, Hata, İptal. “Kaldı” hiçbir yerde toplam anlamında kullanılmaz. |
| 9 | İstatistik | Doygun kırmızı-yeşil yığılmış çubuklar; kırmızı üstte olduğu için göz hep hataya kilitleniyor, renk körlüğünde ayırt edilemiyor. | WCAG, N8 | Orta | Geçti altta, Kaldı üstte ama farklı parlaklıkta iki ton; çubuklar arası 2 px boşluk; tablo görünümü alternatifi. |
| 10 | Kimlik Sağlığı | 6 sekme (Katalog, Kırılgan, Onay, Strateji, Projeksiyon, Model) + 4 üst buton; “Projeksiyon” hem sekme hem buton. | PD, N4 | Yüksek | Tek liste + durum filtresi (Tümü, Zayıf, Bulunamayan, Onay bekleyen). Strateji/Model/Projeksiyon ayarlara veya “Gelişmiş”e. |
| 11 | Kimlik Sağlığı | Her satırda sürekli görünen 3 eylem ikonu; 20 satırda 60 ikon görsel gürültü. | N8 | Orta | Eylemler yalnızca hover ve seçili satırda görünür; klavyeyle erişilebilir kalır. |
| 12 | Kimlik Sağlığı | “descriptor”, “Projeksiyon”, “fair · %49” gibi iç/İngilizce terimler. | N2 | Orta | Kimlik, Zayıf / Sağlam / Bulunamadı gibi kullanıcı dili. |
| 13 | Kapsam | “Seviye 0 / 1 / 2 / 3” etiketleri ne anlama geldiğini söylemiyor. | N2, N6 | Orta | Anlamını söyleyen isimler ve her seviyede tek cümlelik açıklama (tooltip). |
| 14 | Veri | “wal”, “Günlük kipi”, “Şema sürümü”, “Eşitle”, tam Windows dosya yolu: geliştirici iç bilgileri QA kullanıcısının ana gezinmesinde. | N2, N8 | Orta | Veri modülü Ayarlar › Veri ve eşitleme altına taşınır. Eşitleme durumu status bar’da her zaman görünür. |
| 15 | Veri | Başlıktaki “141 bekleyen / 44 hatalı” rozetleri hemen altındaki kartları tekrarlıyor. | N8 | Düşük | Tek yerde göster. Kalıcı durum status bar’da. |
| 16 | Tarayıcı | Adres iki yerde (üst çubuk ve ortadaki arama kutusu). Kayıt ve oynat butonları 16 px etiketsiz ikon. | N4, N1 | Yüksek | Tek adres çubuğu. Kaydet butonu metinli ve kayıt rengiyle; kayıt sırasında sabit kayıt çubuğu. |
| 17 | Tarayıcı | Tarayıcı ekranında başlık çubuğu değişiyor (komut paleti kayboluyor, adres çubuğu geliyor). | N4 | Orta | Başlık çubuğu her ekranda aynı; tarayıcı araç çubuğu içerik alanında. |
| 18 | Ajan | Ajan ayrı bir sayfa; kullanıcı senaryo veya sonuçtan ayrılmak zorunda. Bağlam kayboluyor. | HIG Agency | Yüksek | Ajan her ekranda açılabilen sağ panel; açık olan senaryo/koşum otomatik bağlam olarak eklenir. |
| 19 | Ayarlar | Kişisel, takım ve kurum ayarları gruplanmadan tek listede. Bağımlı seçenek (“Koşum bitince kapat”) açıklamasız pasif. | N4, N10 | Orta | Gruplu gezinme; bağımlı seçenek girintili ve “Önce … açın” yardım metniyle. |
| 20 | Tümü | Sistem fontu (Windows’ta Segoe UI) kullanılıyor; macOS ve Linux’ta farklı görünecek. | Tek UI | Yüksek | Inter ve JetBrains Mono uygulamaya gömülür (Bölüm 8). |
| 21 | Tümü | Başlık çubuğundaki yeşil nokta etiketsiz; neyi ifade ettiği belirsiz. | N1 | Düşük | Durum status bar’da metinle: “Bağlı”, “Çevrimdışı”, “Eşitleniyor”. |

Şekil 1 · Mevcut İstatistik ekranı. 9 eşit KPI, orantısız zaman ekseni, tutarsız “Başarısız” tanımı.

Şekil 2 · Yeniden tasarlanmış İstatistik. 1 ana + 3 destek KPI, orantılı zaman ekseni, aksiyon alınabilir “En çok kalan senaryolar”.
