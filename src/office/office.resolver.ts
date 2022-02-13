import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateOfficeInput } from './office.input';
import { OfficeService } from './office.service';
import { OfficeType } from './office.type';

@Resolver((of) => OfficeType)
export class OfficeResolver {
  constructor(private officeService: OfficeService) {}

  @Query((returns) => OfficeType)
  office(@Args('id') id: string) {
    return this.officeService.getOffice(id);
  }

  @Query((returns) => [OfficeType])
  getOffices() {
    return this.officeService.getAllOffices();
  }

  @Mutation((returns) => OfficeType)
  createOffice(
    @Args('createOfficeInput') createOfficeInput: CreateOfficeInput,
  ) {
    return this.officeService.createOffice(createOfficeInput);
  }
}
