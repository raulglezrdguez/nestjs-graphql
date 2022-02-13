import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Person')
export class PersonType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  birthDate: string;
}
