import type { Preview } from "@storybook/react-vite";
import "../src/styles/index.css";
const preview: Preview = {
  globalTypes: { theme: { description: "Theme", defaultValue: "dark", toolbar: { icon: "mirror", items: ["dark", "light"] } } },
  decorators: [(Story, ctx) => { document.documentElement.dataset.theme = ctx.globals.theme; return Story(); }],
  parameters: { layout: "centered", a11y: { test: "error" } },
};
export default preview;
