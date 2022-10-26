import { execSync } from 'child_process';

import * as fs from 'fs';
import { join } from 'path';

fs.cpSync(join(process.cwd(),'/client/index.html'), join(process.cwd(),'/index.html')) 
// execSync('mv ./client/index.html ./', { stdio: 'inherit' });
execSync('vite build --outDir dist/client ', { stdio: 'inherit' });
