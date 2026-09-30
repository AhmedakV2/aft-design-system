# 15. Modül: Senaryolar

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

Şekil 10 · Senaryolar · Light. Adım listesi, satır içi hata ayrıntısı, sağda Adım ayarı.

Şekil 11 · Senaryolar · Dark. Aynı ekran, sağ panelde Ajan onarım önerisi.

Şekil 12 · Mevcut Senaryolar ekranı (karşılaştırma için). Seçim yokken iki boş panel, beş eşit buton.

## 15.1 Ekran kuralları

- Açılışta son çalışılan senaryo açılır. Boş durum yalnızca kütüphane boşsa.
- Sayfa başlığı: senaryo adı (16/24) + meta satırı (adım sayısı, son koşum, geçen adım, süre).
- Eylemler: ghost Doğrula, secondary Kaydederek ekle, primary Çalıştır (⌘R), “⋯” menüsünde Çoğalt, Dışa aktar, Sil.
- Kaydet butonu yok: değişiklikler otomatik kaydedilir, sekme satırında “Kaydedildi / Kaydediliyor” gösterilir. ⌘S yine çalışır.
- Sekmeler: Adımlar · Kod · Veri · Geçmiş. Kod, aynı senaryonun QA dili görünümüdür (progressive disclosure: çoğu kullanıcı Adımlar’da kalır).
## 15.2 Adım satırı anatomisi (44 px)

| Sıra | Öğe | Spesifikasyon |
| --- | --- | --- |
| 1 | Tutamaç | grip-vertical 14 px, text.disabled; hover’da text.secondary. Sürükleyerek sıralama. |
| 2 | Sıra no | Mono 12 px tabular, sağa hizalı. |
| 3 | Son koşum durumu | 16 px ikon (Geçti / Kaldı / Kararsız / Atlandı). |
| 4 | Eylem çipi | Mono 11.5 px, 64 px sabit genişlik, radius 4. Renk eylem türüne göre: git = info, yaz = success, tıkla = mor, doğrula = pembe. |
| 5 | Hedef | Kimlik adı (500) + rol (12 px tertiary). |
| 6 | Değer | Mono 12 px, string rengi. Gizli değerler {{ gizli.X }}. |
| 7 | Kalite | Kimlik kalitesi göstergesi. |
| 8 | Süre | Mono 12 px, sağa hizalı. |

Kalan adım satırı status.danger.bg zemin + 2 px sol kırmızı çizgi alır ve satır içinde genişler: ekran görüntüsü küçük resmi (hedefin olması gereken yer kesikli çerçeveyle), düz dilde hata başlığı, olası neden ve üç eylem (Ajan ile onar, Yeniden yakala, Ekran görüntüsü). Kullanıcı Sonuçlar ekranına gitmeden hatayı anlar.

## 15.3 Adım ayarı paneli

- Yalnızca adım seçiliyken içerik gösterir; seçim yoksa sağ panel Ajan sekmesinde açılır.
- Seviye 1: Eylem, Hedef (kimlik kartı + kalite + Yeniden yakala + Sayfada göster), Bekleme süresi, Hata olursa.
- Seviye 2 (Gelişmiş, kapalı): yeniden deneme sayısı, ekran görüntüsü politikası, not, koşul.
- Zayıf kimlikte kartın altında uyarı: “Zayıf kimlik. Bu adım kararsız çalışabilir.”
## 15.4 Kod görünümü (QA dili)

Şekil 13 · Kod sekmesi. Adımlar ve kod aynı dosyanın iki görünümüdür; biri değişince diğeri güncellenir.

| Token | Dark | Light | Örnek |
| --- | --- | --- | --- |
| syntax.keyword | ██ #B69CFF | ██ #6B3FD4 | test, suite, use, with, contains |
| syntax.command | ██ #5AA9FF | ██ #1F6FD1 | open, fill, click, wait |
| syntax.assertion | ██ #FF7AB2 | ██ #C0266D | expect |
| syntax.selector | ██ #F5B849 | ██ #A15C00 | #email, button, role, text |
| syntax.string | ██ #7FD6A4 | ██ #13804A | "Giriş yap" |
| syntax.number | ██ #FF9E64 | ██ #B5480F | 3s, 1280 |
| syntax.comment | ██ #7C8494 italik | ██ #6B7280 italik | Yorum satırları |

Editör motoru Monaco; dil desteği LSP ile. Tüm sözdizimi renkleri ≥ 4.5:1. Assertion’ların ayrı ve dikkat çekici renkte olması QA’ya özgü bilinçli bir karardır. Dil anahtar kelimeleri İngilizce kalır (SQL gibi evrensel), adım çipleri arayüz dilinde gösterilir (tıkla = click).

```text
login.aft
suite "Kimlik Doğrulama"

test "Başarılı giriş yönlendirir" {
  use fixture.cleanSession
  open "https://app.example.com/login"
  fill #email with "qa@example.com"
  fill #password with env.QA_PASSWORD
  click button("Giriş yap")
  expect url contains "/dashboard"
  expect text("Hoş geldin") visible within 3s
}
```
