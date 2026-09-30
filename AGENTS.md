# Agent contract

AFT UI üzerinde çalışan tüm coding agent'lar önce `CLAUDE.md` ve `docs/current/00-governance.md` okumalıdır.

- ADR > token > current docs > code > source-spec > references önceliğini uygula.
- Primary marka rengi Orange'dır.
- UI'yi sayfa sayfa bağımsız icat etme; ortak shell/pattern kullan.
- Business logic, API ve Electron IPC'yi redesign bahanesiyle değiştirme.
- Yeni primitive için Storybook story + accessibility state + keyboard state zorunlu.
- Raw hex ve rastgele ölçü yerine token kullan.
- Her PR'da `pnpm check` çalıştır.
