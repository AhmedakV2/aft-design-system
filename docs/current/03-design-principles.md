# Design principles

Öncelik sırası:

1. **Durum her zaman görünür.** Kayıt, koşum, Agent, eşitleme anında geri bildirim verir.
2. **Agent gizli çalışmaz.** Plan, araç çağrıları ve değişiklik diff olarak görünür.
3. **Geri alınabilirlik > onay diyaloğu.** Dialog yalnız geri alınamaz işlemde.
4. **Boş panel yok.** Son kullanılan öğe açılır; gerçek empty state tek action taşır.
5. **Progressive disclosure maksimum iki seviye.** Üçüncü “advanced of advanced” yok.
6. **Klavye birinci sınıf vatandaştır.** Her ana eylem shortcut veya command palette ile erişilebilir.
7. **Renk tek başına bilgi taşımaz.** Icon + text + color birlikte.
8. **Bağlam korunur.** Agent veya inspector kullanmak için kullanıcının ana işinden kopması gerekmez.
9. **Action hierarchy görünürdür.** Bir yüzeyde tek primary action.
10. **Terimler sabittir.** Aynı kavrama iki farklı ad verilmez.
