import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, MinLength } from 'class-validator';

@InputType()
export class CreatePersonInput {
  @MinLength(5)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  birthDate: string;
}
