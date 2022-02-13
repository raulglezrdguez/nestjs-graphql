import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppResolver } from './app.resolver';
import { Office } from './office/office.entity';
import { OfficeModule } from './office/office.module';
import { Person } from './person/person.entity';
import { PersonModule } from './person/person.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/office',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Office, Person],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    OfficeModule,
    PersonModule,
  ],
  exports: [],
  providers: [AppResolver],
})
export class AppModule {}
