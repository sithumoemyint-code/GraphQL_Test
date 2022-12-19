import { CreateToDoInput } from './create-to_do.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateToDoInput extends PartialType(CreateToDoInput) {
  @Field(() => Int)
  id: number;
}
