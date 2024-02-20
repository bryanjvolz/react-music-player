import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import 'dotenv/config'

export default ({mode}) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

  return defineConfig({
    base: process.env.PUBLIC_URL,
    plugins: [react()],
    assetsInclude: ['*.m4a','*.mp3'],
    input: ['src/module.js', `src/another/module.js`],
    output: [
      {
        format: 'es',
        dir: 'dist',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
  });
}
