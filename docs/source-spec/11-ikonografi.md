# 11. İkonografi

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

- Kütüphane: Lucide (ISC lisansı). Mevcut arayüz de Lucide benzeri bir set kullanıyor; geçiş maliyeti düşük. Başka setten ikon karıştırılmaz.
- Çizgi kalınlığı 1.5 px, uçlar yuvarlak.
- Boyutlar: 12 (inline meta), 14 (small buton, menü), 16 (varsayılan), 20 (gezinme). Başka boyut yasak.
- İkonlar tam piksel konumda; 16 px ikon 28 px butonda 6 px ofset.
- Renk currentColor; varsayılan text.secondary, aktif text.primary veya text.link.
| Anlam | Lucide ikonu | Not |
| --- | --- | --- |
| Geçti / Sağlam | circle-check | status.success |
| Kaldı / Bulunamadı | circle-x | status.danger |
| Kararsız / Zayıf | triangle-alert | status.warning |
| Çalışıyor | loader-circle (döner) | cobalt.400, 800 ms/tur |
| Bekliyor | circle-dashed | text.tertiary |
| Atlandı | circle-slash | text.disabled |
| Kayıt | dolu daire | record.dot dolgu |
| Çalıştır | play |  |
| Ajan | sparkles | Yalnızca Ajan |
| Onar | wand-sparkles | Ajan destekli onarım |
| Kimlik | fingerprint | Kimlik Sağlığı ve hedef alanları |
| Element seç | crosshair | Kayıt çubuğu, Yeniden yakala |
