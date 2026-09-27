import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: 'Canvas Study Helper',
    host_permissions: ['https://learn.adelaide.edu.au/*'],
  },
  webExt: {
    // keep uni logged in between runs
    chromiumArgs: ['--user-data-dir=./.wxt/chrome-data'],
  },
});