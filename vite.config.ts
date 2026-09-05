// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Static export: pre-render every static page to real .html files so the
    // build output (.output/public) can be uploaded to plain static hosting
    // (e.g. MilesWeb cPanel / shared hosting) without a running server.
    // Dynamic $slug routes are NOT listed — they render client-side via the
    // router when navigated to from their listing pages.
    prerender: {
      enabled: true,
      autoStaticPathsDiscovery: false,
    },
    pages: [
      { path: "/" },
      { path: "/about" },
      { path: "/appointment" },
      { path: "/contact" },
      { path: "/founder" },
      { path: "/signin" },
      { path: "/services" },
      { path: "/blogs" },
      { path: "/news" },
      { path: "/grants" },
      { path: "/laws" },
    ],
  },
});
