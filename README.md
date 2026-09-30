# AFT Design System

AFT'nin Electron + React + TypeScript masaüstü ürün ailesi için **tasarım sistemi, UX mimarisi, bileşen sözleşmeleri ve kalite kapıları**.

Bu repository bir “görsel tema” deposu değildir. Amaç; AFT'nin Tarayıcı/Kayıt, Senaryolar, Sonuçlar, Analiz, Kimlik Sağlığı, Kapsam ve bağlamsal Ajan deneyimini tek bir ürün dili altında tutmaktır.

## Tasarım yönü

**Precision Calm / Kesin Sakinlik**: yüksek bilgi yoğunluğu, düşük görsel gürültü, açık durum geri bildirimi, güçlü klavye akışları ve bağlamsal yapay zekâ. Marka vurgusu **AFT Orange**'dır; renk dekorasyon için değil, eylem ve odak için kullanılır.

> Not: Arşivlenen v1 doküman Cobalt maviyi ana vurgu olarak tanımlar. Güncel ürün kararı turuncudur. Bu değişiklik `docs/decisions/ADR-0001-brand-orange.md` ile açıkça override edilmiştir.

## Source of truth sırası

1. `docs/decisions/` — kabul edilmiş güncel kararlar
2. `packages/tokens/src/` — makine-okunur tasarım tokenları
3. `docs/current/` — yaşayan ürün/UX kuralları
4. `packages/ui/` — çalışan React bileşenleri
5. `docs/source-spec/` — v1 kaynak dokümanın arşivlenmiş bölümleri
6. `references/` — yalnızca ilham ve karşılaştırma; kural değildir

## Hızlı başlangıç

```bash
corepack enable
pnpm install
pnpm tokens:build
pnpm check
pnpm storybook
```

İlk `pnpm install` sonrasında oluşan lockfile repoya commit edilmelidir.

## Repo haritası

```text
aft-design-system/
├─ CLAUDE.md                    # Claude Code için bağlayıcı çalışma talimatı
├─ AGENTS.md                    # Diğer coding agent'lar için kısa sözleşme
├─ docs/
│  ├─ current/                  # Güncel ürün ve UX sistemi
│  ├─ decisions/                # ADR'ler / override kararları
│  ├─ source-spec/              # 54 sayfalık v1 dokümanın bölümlenmiş arşivi
│  ├─ migration/                # Eski UI → yeni UI geçiş haritaları
│  └─ quality/                  # UI Definition of Done ve review kuralları
├─ packages/
│  ├─ tokens/                   # Primitive + semantic token kaynağı
│  └─ ui/                       # React temel bileşenleri + Storybook
├─ references/                  # SaaSFrame / ürün referansları için kontrollü klasör
├─ templates/                   # Audit, mapping ve tek-prompt redesign şablonları
├─ scripts/                     # Token build, kontrast, tasarım kuralı kontrolleri
└─ source/                      # Orijinal .docx ve gömülü görseller
```

## AFT'yi başka bir repoda yeniden tasarlama

1. Bu repo ile hedef Electron repo aynı VS Code workspace içinde açılsın.
2. Hedef repo'nun iş mantığı, IPC, veri akışları ve ekranları önce envanterlensin.
3. `templates/CLAUDE_REDESIGN_PROMPT.md` tek master prompt olarak kullanılsın.
4. Ekranlar tek tek bağımsız tasarlanmasın; önce bilgi mimarisi ve ortak shell uygulanmalı.
5. Tüm yeni UI `@aft/tokens` ve `@aft/ui` üzerinden beslensin.
6. PR, `docs/quality/UI_DEFINITION_OF_DONE.md` tamamlanmadan merge edilmesin.

## Ana ürün mimarisi

- **Oluştur:** Tarayıcı + Kayıt, Senaryolar
- **Çalıştır:** Sonuçlar / koşum geçmişi
- **Analiz et:** İstatistik, Kimlik Sağlığı, Kapsam
- **Her yerde:** Ajan sağ panel
- **Sistem:** Terminal alt panel, Veri/Eşitleme Ayarlar altında, status bar'da canlı durum

## Marka rengi

AFT Orange, ürünün “execution / action / focus” semantiğidir. Durum renkleri ile karıştırılmaz. `success`, `warning`, `danger`, `info`, `record` ve `ai` ayrı semantic ailelerdir.
