import { Query, Resolver } from '@nestjs/graphql';
import { OfficeType } from './office.type';

@Resolver((of) => OfficeType)
export class OfficeResolver {
  @Query((returns) => OfficeType)
  office() {
    return {
      id: 'fs',
      name: 'testing',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
