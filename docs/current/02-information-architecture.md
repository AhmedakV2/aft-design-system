# Information architecture

## Ana akış
**Oluştur → Çalıştır → Analiz et**

### Oluştur
1. Tarayıcı + Kayıt
2. Senaryolar

### Çalıştır
3. Sonuçlar

### Analiz et
4. İstatistik
5. Kimlik Sağlığı
6. Kapsam

### Her yerde
- Ajan: sağ contextual panel, `Cmd/Ctrl+I`
- Komut paleti: `Cmd/Ctrl+K`
- Terminal: alt panel
- Status bar: bağlantı/eşitleme/ortam/tarayıcı/dil/sürüm

### Ayarlar altında
- Veri ve eşitleme
- Kimlik stratejisi/model/projeksiyon
- Tanılama

## Workspace kuralı
Geniş ekranda `navigation + optional list + content + optional inspector`; 1024–1279 aralığında inspector overlay drawer olur. Seçim yoksa anlamsız boş inspector tutulmaz.

## Navigation semantiği
Icon-only rail kullanılabilir; tüm ikonlar tooltip/accessible label taşır. Ayarlarda etiketli navigation seçeneği desteklenebilir. İkonlar tek başına domain jargonunu açıklamak zorunda bırakılmaz.
