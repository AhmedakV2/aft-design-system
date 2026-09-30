export const primitives = {
  "brand": {
    "50": "#FFF7ED",
    "100": "#FFEDD5",
    "200": "#FED7AA",
    "300": "#FDBA74",
    "400": "#FB923C",
    "500": "#F97316",
    "600": "#EA580C",
    "700": "#C2410C",
    "800": "#9A3412",
    "900": "#7C2D12",
    "950": "#431407"
  },
  "graphite": {
    "0": "#FFFFFF",
    "50": "#F6F7F9",
    "100": "#EBEDF0",
    "200": "#DCDFE4",
    "300": "#C1C6CF",
    "400": "#868E9B",
    "500": "#646B78",
    "600": "#4D5461",
    "700": "#2C3037",
    "800": "#1C1F24",
    "900": "#15171B",
    "950": "#0D0E11"
  },
  "green": {
    "400": "#3DD68C",
    "700": "#13804A"
  },
  "amber": {
    "400": "#F5B849",
    "700": "#A15C00"
  },
  "red": {
    "400": "#FF6B63",
    "600": "#D92D20",
    "record": "#D42A2A",
    "recordDot": "#FF4D4F"
  },
  "blue": {
    "400": "#5AA9FF",
    "700": "#1F6FD1"
  },
  "violet": {
    "400": "#A78BFA",
    "700": "#7045E6"
  }
} as const;
export const light = {
  "bg": {
    "canvas": "{graphite.50}",
    "surface": "{graphite.0}",
    "raised": "{graphite.0}",
    "overlay": "{graphite.0}",
    "sunken": "#F0F1F4",
    "hover": "rgba(20,22,26,0.04)",
    "pressed": "rgba(20,22,26,0.07)",
    "selected": "rgba(194,65,12,0.10)"
  },
  "border": {
    "subtle": "{graphite.100}",
    "default": "{graphite.200}",
    "strong": "{graphite.400}"
  },
  "text": {
    "primary": "#14161A",
    "secondary": "{graphite.600}",
    "tertiary": "#666D7A",
    "disabled": "#A3A9B4",
    "link": "{blue.700}"
  },
  "focus": {
    "ring": "{brand.700}"
  },
  "action": {
    "primary": {
      "bg": "{brand.700}",
      "hover": "{brand.800}",
      "pressed": "{brand.900}",
      "fg": "#FFFFFF"
    }
  },
  "status": {
    "success": "{green.700}",
    "warning": "{amber.700}",
    "danger": "{red.600}",
    "info": "{blue.700}"
  },
  "ai": {
    "fg": "{violet.700}"
  },
  "record": {
    "bg": "{red.record}",
    "dot": "{red.recordDot}"
  },
  "chart": {
    "pass": "#1E9E63",
    "fail": "#E5484D",
    "error": "#F5A524",
    "cancel": "#9AA1AD"
  }
} as const;
export const dark = {
  "bg": {
    "canvas": "{graphite.950}",
    "surface": "{graphite.900}",
    "raised": "{graphite.800}",
    "overlay": "#23262D",
    "sunken": "#101114",
    "hover": "rgba(255,255,255,0.045)",
    "pressed": "rgba(255,255,255,0.08)",
    "selected": "rgba(249,115,22,0.18)"
  },
  "border": {
    "subtle": "#22252B",
    "default": "{graphite.700}",
    "strong": "{graphite.500}"
  },
  "text": {
    "primary": "#ECEEF2",
    "secondary": "#A4ABB8",
    "tertiary": "#858D9C",
    "disabled": "{graphite.600}",
    "link": "{blue.400}"
  },
  "focus": {
    "ring": "{brand.400}"
  },
  "action": {
    "primary": {
      "bg": "{brand.500}",
      "hover": "{brand.400}",
      "pressed": "{brand.600}",
      "fg": "{graphite.950}"
    }
  },
  "status": {
    "success": "{green.400}",
    "warning": "{amber.400}",
    "danger": "{red.400}",
    "info": "{blue.400}"
  },
  "ai": {
    "fg": "{violet.400}"
  },
  "record": {
    "bg": "{red.record}",
    "dot": "{red.recordDot}"
  },
  "chart": {
    "pass": "{green.400}",
    "fail": "#E5484D",
    "error": "#F5A524",
    "cancel": "#9AA1AD"
  }
} as const;
