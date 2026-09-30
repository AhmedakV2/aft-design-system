# ADR-0001 — Primary brand accent = AFT Orange

**Status:** Accepted — 2026-09-30

## Context
v1 kaynak doküman primary accent olarak Cobalt `#2F62F5` tanımlıyordu. Güncel marka yönü AFT'nin ana rengini turuncu olarak belirledi.

## Decision
Primary brand/action/active accent primitive'i Orange ailesidir. Cobalt artık primary değildir. Bilgi/link semantiğinde ayrı Blue ailesi kullanılabilir.

Semantic primary:
- Light: `brand.700 #C2410C` + white text (AA)
- Dark: `brand.500 #F97316` + graphite.950 text

## Consequences
- Source-spec içindeki “cobalt” ifadeleri tarihsel kabul edilir.
- Eski mavi selection/action CSS migration sırasında kaldırılır.
- Danger ve Record Red, Orange yerine geçmez.
- Agent Violet ayrı semantik aile olarak kalır.
