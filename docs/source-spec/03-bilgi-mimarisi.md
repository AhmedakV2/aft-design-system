# 3. Bilgi Mimarisi

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

Gezinme, kullanıcının iş akışı sırasına göre yeniden düzenlenir: Oluştur → Çalıştır → Analiz et. Ajan bir sayfa değil, her ekrana eşlik eden bir yardımcıdır.

| Sıra | Grup | Modül | İkon (Lucide) | Değişiklik |
| --- | --- | --- | --- | --- |
| 1 | Oluştur | Tarayıcı | globe | Aynı. Kayıt deneyimi yeniden tasarlandı. |
| 2 | Oluştur | Senaryolar | library | Aynı. Adım + Kod görünümü eklendi. |
| 3 | Çalıştır | Sonuçlar | history | Aynı. |
| 4 | Analiz | İstatistik | chart-column | İkon şimşekten grafiğe. |
| 5 | Analiz | Kimlik Sağlığı | fingerprint | İkon nabızdan parmak izine. |
| 6 | Analiz | Kapsam | radar | İkon hedeften radara. |
| — | Her yerde | Ajan | sparkles | Sayfadan sağ panele. Başlık çubuğunda ⌘I / Ctrl+I. |
| — | Ayarlar | Veri ve eşitleme | database | Ana gezinmeden Ayarlar’a; durum status bar’da. |
| alt | Sistem | Terminal | terminal | Alt panel olarak açılır. |

## 3.1 Ayarlar gruplaması

| Grup | Sayfalar |
| --- | --- |
| Kişisel | Hesap, Görünüm, Kısayollar |
| Çalışma alanı | Oynatma, Sol panel, Araçlar, Terminal |
| Organizasyon | Takım, Kurumsal giriş, Gizli değerler, Denetim kaydı, Paket ve kullanım |
| Sistem | Veri ve eşitleme, Tanılama, Hakkında |

Bağımlı seçenekler girintili gösterilir ve pasifken nedenini söyler: “Koşum bitince kapat” › yardım metni: “Önce ‘Koşumda terminali aç’ seçeneğini açın.” Her ayar satırı kart değil, düz liste satırıdır; kart içinde kart görsel gürültü üretir.
