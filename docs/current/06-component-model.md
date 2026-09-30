# Component model

## Katmanlar

### Primitives
Button, IconButton, Input, Checkbox, Toggle, Select/Listbox, Tabs, Tooltip, Menu, Dialog, Toast, Badge.

### Desktop shell
Titlebar, ActivityRail, CommandPalette, StatusBar, BottomPanel, SplitPane, InspectorDrawer.

### Domain components
QualityMeter, RunStatus, StepRow, IdentityCard, RecordingBar, AgentDiffCard, ContextChip, EnvironmentBadge.

### Patterns
LibraryWorkspace, RunDebugWorkspace, AnalyticsOverview, SettingsPage, BrowserRecorder, AgentPanel.

## Kurallar
- Primitive başka domain kavramı bilmez.
- Domain component semantic token kullanır; primitive hex bilmez.
- Pattern, business state'i layout'a map eder.
- Sayfa doğrudan raw `<button>`/`<input>` stillendirmez; primitive kullanır.
- Her component state matrisi: default/hover/pressed/focus/disabled/loading/error gerekliyse documented.
