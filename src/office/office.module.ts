import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from 'src/person/person.module';
import { Office } from './office.entity';
import { OfficeResolver } from './office.resolver';
import { OfficeService } from './office.service';

@Module({
  imports: [PersonModule, TypeOrmModule.forFeature([Office])],
  providers: [OfficeResolver, OfficeService],
})
export class OfficeModule {}
