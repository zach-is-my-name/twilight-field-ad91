// build.js
import esbuild from 'esbuild';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

esbuild.build({
  entryPoints: [path.resolve(__dirname, 'src/index.ts')],
  outfile: path.resolve(__dirname, 'dist/bundle.js'),
  bundle: true,
  platform: 'browser', // assuming 'browser' for compatibility with Cloudflare worker environment
  target: 'es2020',
  define: {
    'process.env.NODE_ENV': '"production"', // Define any necessary environment variables
  },
  alias: {
    // Check this line carefully; adjust if necessary
    'crypto': path.resolve(__dirname, 'src/custom-shim.js'),
  },
  external: ['crypto'] // This might not be necessary if crypto-shim fully replaces 'crypto'
}).catch(() => process.exit(1));
