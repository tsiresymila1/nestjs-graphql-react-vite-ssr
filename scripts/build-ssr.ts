import { execSync } from 'child_process';

execSync('vite build --outDir dist/client --ssr client/entry-server.tsx --emptyOutDir false', {
  stdio: 'inherit',
});
// execSync('mv ./index.html ./client/', { stdio: 'inherit' });
