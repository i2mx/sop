import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://i2mx.github.io',
  base: '/sop',
  integrations: [react()]
});