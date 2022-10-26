import { execSync } from 'child_process';
import * as fs from 'fs';
import { join } from 'path';
execSync('vite build --config vite.config.ts --outDir dist/client --ssr client/entry-server.tsx  --emptyOutDir false', {
  stdio: 'inherit',
});
fs.cpSync(join(process.cwd(),'/index.html'), join(process.cwd(),'/client/index.html')) 
