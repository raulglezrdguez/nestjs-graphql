import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PersonType } from 'src/person/person.type';

@ObjectType('Office')
export class OfficeType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field((type) => [PersonType])
  persons: string[];
}
