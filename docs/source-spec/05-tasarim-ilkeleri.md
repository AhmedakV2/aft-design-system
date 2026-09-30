# 5. Tasarım İlkeleri

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

Aşağıdaki yedi ilke, tasarım kararlarında çatışma olduğunda hangi tarafın kazanacağını belirler. Sıralama önceliği ifade eder.

| # | İlke | AFT’deki karşılığı | Kaynak |
| --- | --- | --- | --- |
| 1 | Durum her zaman görünür | Kayıt, koşum, ajan işlemi, eşitleme durumu her an ekranda. 100 ms içinde geri bildirim. | Nielsen #1 |
| 2 | Ajan asla gizli çalışmaz | Planı, araç çağrıları ve değişiklikleri diff olarak gösterilir. Senaryo veya kimlik değiştiren her eylem onaya tabidir. | HIG Responsibility |
| 3 | Her şey geri alınabilir | Adım silme, ajan onarımı, kimlik değişikliği: Geri al her zaman var. Onay diyaloğu yalnızca geri alınamaz işlemlerde. | Nielsen #3, #5 |
| 4 | Boş ekran yok | Seçim yoksa son kullanılan öğe açılır. Boş durum yalnızca gerçekten veri yokken ve her zaman bir eylemle. | HIG Agency, N8 |
| 5 | Aşamalı açıklık, en fazla 2 seviye | Temel ayar görünür, gelişmiş ayar “Gelişmiş” altında. Üçüncü seviye yasak. | NN/g PD |
| 6 | Klavye birinci sınıf vatandaş | Her eylemin kısayolu veya komut paletinde karşılığı var. | Nielsen #7 |
| 7 | Renk tek başına bilgi taşımaz | Her durum ikon + renk + metin üçlüsüyle anlatılır. | WCAG 1.4.1 |
