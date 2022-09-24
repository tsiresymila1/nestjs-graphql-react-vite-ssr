import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as compression from 'compression';
import { AppModule } from './app.module';
import { isProduction } from './utils/env';
import { resolveDistPath } from './utils/resolve-path';
import { getViteServer } from './vite-server';
import { FrontendRenderFilter } from './web/web.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  if (isProduction) {
    app.useStaticAssets(resolveDistPath('client'), {
      index: false,
    });
    app.use(compression());
  } else {
    const vite = await getViteServer();
    app.use(vite.middlewares);
  }
  app.useGlobalFilters(new FrontendRenderFilter()) 
  await app.listen(3000); 
}
bootstrap();

