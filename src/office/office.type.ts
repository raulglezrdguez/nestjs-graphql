import { Field, ID, ObjectType } from '@nestjs/graphql';

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
}
