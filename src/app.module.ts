import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { isProduction } from './utils/env';

@Module({
  imports: [
    
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      sortSchema: true,
      autoSchemaFile: true,
      playground: !isProduction,
      debug: !isProduction,
    }),
    
    UserModule,
  ]
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) { 
    
  }
}
