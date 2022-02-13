import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class AssignPersonsToOfficeInput {
  @IsUUID()
  @Field((type) => ID)
  officeId: string;

  @IsUUID('4', { each: true })
  @Field((type) => [ID])
  personIds: string[];
}
