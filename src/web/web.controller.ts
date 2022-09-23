import {
  Controller,
  Get,
  Header,
  InternalServerErrorException,
  Req,
} from '@nestjs/common';
import { readFileSync } from 'fs';
import type { Request } from 'express';
import type { ViteDevServer } from 'vite';
import { isProduction } from 'src/utils/env';
import { resolveClientPath, resolveDistPath } from 'src/utils/resolve-path';
import { getViteServer } from '../vite-server';

const TEMPLATE_PLACEHOLDER = '<!-- template-placeholder -->';

@Controller('*')
export class WebController {
  constructor() {}

  @Get()
  @Header('Content-Type', 'text/html')
  async renderApp(@Req() request: Request): Promise<string> {
    const url = request.originalUrl;
    let vite: ViteDevServer;
    let template : string;
    let render: (url: string) => Promise<{ html: string }>;
    console.log(url)

    try {
      if (isProduction) {
        template  = readFileSync(resolveDistPath('client', 'index.html'), {
          encoding: 'utf-8',
        });
        render = (await import(resolveDistPath('src', 'entry-server.js')))
          .render;
      } else {
        vite = await getViteServer();
        template  = readFileSync(resolveClientPath('index.html'), {
            encoding: 'utf-8',
          });
        template  = await vite.transformIndexHtml(url,template);
        const reactRenderer = resolveClientPath('entry-server.tsx');
        const plugin = await vite.ssrLoadModule(reactRenderer);
        render = plugin.render;
      }

      const {html} = await render(url);
      return template .replace(TEMPLATE_PLACEHOLDER, html);
    } catch (error) {
      vite && vite.ssrFixStacktrace(error);
      throw new InternalServerErrorException(error);
    }
  }
}
