# AFT Design System — Claude Code Contract

Bu repository AFT'nin tasarım ve UX source-of-truth'udur. Hedef bir Electron uygulamasını yeniden tasarlarken **mevcut ekranı güzelleştirme**; işlevi ve veri modelini koruyup UI mimarisini bu sistemle yeniden kur.

## Öncelik sırası

Çelişki varsa şu sıra kazanır:

1. `docs/decisions/*.md`
2. `packages/tokens/src/*`
3. `docs/current/*`
4. `packages/ui/*`
5. `docs/source-spec/*`
6. `references/*`
7. legacy ekran görüntüleri

**Önemli:** v1 kaynak belge Cobalt kullanır. ADR-0001 nedeniyle güncel primary marka rengi AFT Orange'dır. Cobalt'ı yeniden primary yapma.

## Değiştirilemeyecek ürün ilkeleri

- Durum her zaman görünür.
- Ajan gizli çalışmaz; plan, araç çağrısı ve değişiklik görünürdür.
- Geri alınabilir işlem için gereksiz onay dialogu açılmaz; undo sağlanır.
- Seçim olmadığı için yarım ekran boş panel bırakılmaz.
- Progressive disclosure en fazla 2 seviye.
- Klavye birinci sınıf vatandaştır.
- Renk tek başına bilgi taşımaz.
- Aynı kavram her yerde aynı terimle yazılır.

## Yeniden tasarım yöntemi

### 1. Discovery
Hedef repo'nun tamamını incele ve şunları çıkar:
- route / view / window / modal / drawer / panel envanteri
- Electron main/preload/renderer sınırları
- IPC sözleşmeleri
- API ve state bağımlılıkları
- kullanıcı görevleri ve primary action'lar
- loading / empty / error / success / disabled durumları

### 2. UX audit
`templates/UX_AUDIT_TEMPLATE.md` formatında sorunları sınıflandır:
- bilgi mimarisi
- bilişsel yük
- yanlış hiyerarşi
- gereksiz/tekrarlı bilgi
- bağlam kaybı
- erişilebilirlik
- klavye/komut eksikleri
- destructive action riski

### 3. Mapping
Her ekranı `docs/current/02-information-architecture.md` ve `templates/SCREEN_MAPPING_TEMPLATE.md` ile yeni pattern'e eşleştir.

### 4. Foundation first
Sayfa tasarlamadan önce:
- tokenları bağla
- base styles
- titlebar
- activity navigation
- command palette/search
- status bar
- panel/split layout
- inspector/drawer
- focus/keyboard sistemi
uygulanmış olmalı.

### 5. Implement by workflow
Sıra: Oluştur → Çalıştır → Analiz → Sistem. Bir ekranı “mükemmel” yapıp geri kalanını eski bırakma.

### 6. QA
`pnpm check` ve `docs/quality/UI_DEFINITION_OF_DONE.md` tamamlanmadan işi bitmiş sayma.

## AFT bilgi mimarisi

- Tarayıcı + Kayıt: içerik toolbar'ında, titlebar yapısını değiştirme.
- Senaryolar: library + steps/code + contextual inspector.
- Sonuçlar: en son koşum otomatik seçili, filtre listeye yakın.
- İstatistik: 1 ana KPI + 3 destek KPI, geri kalan veri detayda.
- Kimlik Sağlığı: tek liste + durum filtresi; gelişmiş model/strateji ayarlarda.
- Kapsam: “tarama yapılmadı” ile “sorun bulunmadı” ayrı state'ler.
- Veri/Eşitleme: ana navigation'da değil; Ayarlar > Sistem.
- Terminal: bottom panel.
- Ajan: ayrı sayfa değil; her ekranda bağlamsal right panel (Ctrl/Cmd+I).

## Görsel karakter

Hedef: profesyonel IDE/tool/agent ürünü. Web dashboard veya landing page değil.

Yap:
- bitişik yüzeyler + 1px ayırıcı
- data-dense fakat okunabilir layout
- tabular sayılar
- mono yalnızca kod/veri/URL/süre
- orange primary action / active focus
- net selected/hover/focus states
- contextual actions

Yapma:
- her şeyi card içine alma
- glassmorphism / glow / dekoratif gradient
- dev radius
- büyük marketing başlıkları
- gereksiz whitespace
- aynı ekranda birden fazla primary CTA
- sürekli görünen satır aksiyonları
- ham hex / keyfi spacing
- icon-only navigation'ı açıklamasız bırakma

## Marka semantiği

- Orange = action / execution / active focus
- Green = success
- Amber = warning / unstable / weak
- Red = failure / destructive
- Red record = recording state; destructive red ile semantic olarak aynı değildir
- Blue = informational/link
- Violet = AI/Agent

## Teknik sınırlar

- Business logic, API contracts ve Electron IPC'yi yalnız UI gerekçesiyle bozma.
- Node integration açma; context isolation/sandbox korunur.
- Native file dialogs ve platform chrome platforma göre adapte edilir; içerik UI ortak kalır.
- `@aft/tokens` dışında raw color üretme.
- Yeni reusable primitive gerekiyorsa önce `packages/ui` içine ekle ve Storybook story yaz.

## Tamamlama kriteri

“Redesign tamamlandı” diyebilmek için:
- tüm ana ekranlar yeni shell ve token sistemi kullanıyor,
- legacy CSS/renkler kaldırılmış veya migration listesine alınmış,
- keyboard/focus akışları çalışıyor,
- light/dark/system doğrulanmış,
- empty/loading/error states mevcut,
- Agent context kaybetmeden açılıyor,
- visual regression ve accessibility kontrolleri geçiyor.
