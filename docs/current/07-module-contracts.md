# Module contracts

## Tarayıcı + Kayıt
Tek adres alanı. Kayıt başladığında içerikte sabit 48 px recording bar. Canlı adımlar contextual panelde. Prod environment açıkça işaretlenir.

## Senaryolar
Son kullanılan senaryo açılır. Auto-save. Actions: Doğrula / Kaydederek ekle / **Çalıştır** / overflow. Tabs: Adımlar, Kod, Veri, Geçmiş. Inspector yalnız bağlam varken.

## Sonuçlar
Koşumlar gün bazında gruplanır. En son koşum seçilir. Filter liste başlığında. Debug detail: timeline + screenshot + context + report.

## İstatistik
1 primary KPI + 3 support KPI. Zaman ekseni gerçek zaman aralığına orantılı. Chart/table switch. “En çok kalan senaryolar” aksiyon alınabilir liste.

## Kimlik Sağlığı
8 KPI/6 tab yerine distribution + average + tek liste. Filter: Tümü/Zayıf/Bulunamayan/Onay bekleyen. Row actions hover/select ile.

## Kapsam
“Tarama yapılmadı” ve “sorun yok” farklı state. Sonuç varsa list + page preview overlay.

## Veri/Eşitleme
Ana navigation'dan çıkar. Status bar özet, Ayarlar altında detay. Teknik WAL/schema/path yalnız Tanılama.

## Ajan
Her ekranda contextual right panel. “Ajan” ve “Sor” mode. Değişiklik diff + kullanıcı onayı + undo. Stop her zaman görünür. Bağlam chip'leri kaynakları gösterir.
