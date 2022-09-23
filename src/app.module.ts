import { Module } from '@nestjs/common';
import { WebModule } from './web/web.module';

@Module({
  imports: [
    // must be load last
    WebModule
  ]
})
export class AppModule {}
