import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Office } from './office.entity';
import { OfficeService } from './office.service';
import { OfficeType } from './office.type';

@Resolver((of) => OfficeType)
export class OfficeResolver {
  constructor(private readonly officeService: OfficeService) {}

  @Query((returns) => OfficeType)
  office() {
    return {
      id: 'fs',
      name: 'testing',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }

  @Mutation((returns) => OfficeType)
  createOffice(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ) {
    return this.officeService.createOffice(name, startDate, endDate);
  }
}
