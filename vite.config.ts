// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";
// import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// export default defineConfig({
//   plugins: [
//     react(),
//     runtimeErrorOverlay(),
//     ...(process.env.NODE_ENV !== "production" &&
//     process.env.REPL_ID !== undefined
//       ? [
//           await import("@replit/vite-plugin-cartographer").then((m) =>
//             m.cartographer(),
//           ),
//         ]
//       : []),
//   ],
//   resolve: {
//     alias: {
//       "@": path.resolve(import.meta.dirname, "client", "src"),
//       "@shared": path.resolve(import.meta.dirname, "shared"),
//       "@assets": path.resolve(import.meta.dirname, "attached_assets"),
//     },
//   },
//   root: path.resolve(import.meta.dirname, "client"),
//   build: {
//     outDir: path.resolve(import.meta.dirname, "dist/public"),
//     emptyOutDir: true,
//   },
//   server: {
//     fs: {
//       strict: true,
//       deny: ["**/.*"],
//     },
//   },
// });

// Version 2

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Only use Replit-specific plugins when running on Replit (optional safety)
const isReplit = process.env.REPL_ID !== undefined && process.env.NODE_ENV !== "production";

export default defineConfig({
  plugins: [
    react(),
    // Guard dynamic import usage behind the isReplit flag; avoid top-level await inside array
    ...(isReplit
      ? [
          // @ts-expect-error dynamic import in config env
          (await import("@replit/vite-plugin-runtime-error-modal")).default?.() ??
            (await import("@replit/vite-plugin-runtime-error-modal")).then((m) => m.default?.()),
          // @ts-expect-error dynamic import in config env
          (await import("@replit/vite-plugin-cartographer")).then((m) => m.cartographer()),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  // The Vite project root is the client folder
  root: path.resolve(__dirname, "client"),
  build: {
    // Emit the client build into the repo root /dist so Vercel can serve it directly
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
