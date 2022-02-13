import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePersonInput } from './create-person.input';
import { PersonService } from './person.service';
import { PersonType } from './person.type';

@Resolver((of) => PersonType)
export class PersonResolver {
  constructor(private personService: PersonService) {}

  @Query((returns) => PersonType)
  person(@Args('id') id: string) {
    return this.personService.getPerson(id);
  }

  @Query((returns) => [PersonType])
  getPersons() {
    return this.personService.getAllPersons();
  }

  @Mutation((returns) => PersonType)
  createPerson(
    @Args('createPersonInput') createPersonInput: CreatePersonInput,
  ) {
    return this.personService.createPerson(createPersonInput);
  }
}
