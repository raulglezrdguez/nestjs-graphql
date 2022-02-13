import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppResolver } from './app.resolver';
import { OfficeModule } from './office/office.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/office',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    OfficeModule,
  ],
  exports: [],
  providers: [AppResolver],
})
export class AppModule {}
