import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateToDoInput {
  @Field()
  title: string;

  @Field()
  content: string;
}
