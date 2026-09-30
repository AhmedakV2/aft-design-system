# 22. Erişilebilirlik

> Arşiv kaynak: `source/AFT_Tasarim_Sistemi_v1.docx`. Bu dosya tarihsel v1 spesifikasyonudur. Güncel kararlar için `docs/current/` ve `docs/decisions/` önceliklidir.

- Hedef WCAG 2.2 AA. Kontrast Bölüm 7.4’te doğrulandı; yeni renkler CI’da otomatik test edilir.
- Her etkileşim klavyeyle. F6 ile bölgeler arası geçiş: başlık › gezinme › liste › içerik › sağ panel.
- :focus-visible ile her zaman görünür 2 px halka.
- Hedef boyutu min 24 × 24; varsayılan 28 × 28. Mevcut tarayıcı araç çubuğundaki 16 px ikon butonlar bu kuralı ihlal ediyor.
- Ekran okuyucu: VoiceOver, NVDA/Narrator, Orca. Koşum sonucu ve ajan yanıtı aria-live="polite", hata assertive.
- Windows yüksek kontrast: forced-colors: active altında border CanvasText, focus Highlight, gradyanlar kaldırılır.
- Zoom %80–200 (⌘+ / Ctrl+).