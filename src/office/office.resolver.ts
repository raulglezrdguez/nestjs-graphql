import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PersonService } from '../person/person.service';
import { Office } from './office.entity';
import { CreateOfficeInput } from './office.input';
import { AssignPersonsToOfficeInput } from './office.persons-to-office.input';
import { OfficeService } from './office.service';
import { OfficeType } from './office.type';

@Resolver((of) => OfficeType)
export class OfficeResolver {
  constructor(
    private officeService: OfficeService,
    private personService: PersonService,
  ) {}

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

  @Mutation((returns) => OfficeType)
  assignPersonsToOffice(
    @Args('assignPersonsToOfficeInput')
    assignPersonsToOfficeInput: AssignPersonsToOfficeInput,
  ) {
    const { officeId, personIds } = assignPersonsToOfficeInput;
    return this.officeService.assignPersonsToOffice(officeId, personIds);
  }

  @ResolveField()
  async persons(@Parent() office: Office) {
    return this.personService.getManyPersons(office.persons);
  }
}
