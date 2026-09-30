# Foundations

## Typography
- UI: Inter Variable
- Code/data: JetBrains Mono Variable
- Body: 13/20
- Page title: 20/28 600
- Section heading: 14/20 600
- Labels: 12/16 500
- Captions: 11/16 500
- Tabular sayılar zorunlu

## Grid
4 px ana grid. İstisna: 2 px micro-spacing.

## Layout
- Titlebar: 40 px
- Activity rail: 48 px
- List/library: 264 px, resize 200–480
- Page header: 56 px
- Tabs: 36 px
- Step row: 44 px
- Table row: 36 px, compact 28 px
- Inspector/Agent: 372 px, resize 320–560
- Status bar: 24 px
- Minimum window: 1024×640

## Shape
- xs 4
- sm 5
- md 6
- lg 8
- xl 12
- full 999

Paneller “card mosaic” oluşturmaz; ana workspace yüzeyleri 1 px hairline ile bitişir.

## Motion
- hover 80 ms
- menu/tab 120 ms
- panel/toast 200 ms
- dialog/drawer 320 ms
- bounce yok
- yalnız transform/opacity
- reduced-motion altında süreler 0 ms

## Waiting
- <100 ms: indicator yok
- 100 ms–1 s: spinner 300 ms gecikmeli
- 1–10 s: skeleton/progress + açıklama
- >10 s: progress + kalan süre + background completion notification
