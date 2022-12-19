import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ToDoService } from './to_do.service';
import {  To_doEntity, To_doInput } from './entities/to_do.entity';
import { CreateToDoInput } from './dto/create-to_do.input';
import { UpdateToDoInput } from './dto/update-to_do.input';

@Resolver(() => To_doEntity)
export class ToDoResolver {
  constructor(private readonly toDoService: ToDoService) {}

  @Mutation(() => String, { name: 'createToDo' })
  async createToDo(@Args('data') input: To_doInput): Promise<string>  {
    return this.toDoService.insert(input);
  }

  @Query(() => [To_doEntity], { name: 'ToDos', nullable: false })
  async todos() {
    return await this.toDoService.findAll();
  }

  // @Query((returns) => ToDo)
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.toDoService.findOne(id);
  // }

  // @Mutation(() => ToDo)
  // updateToDo(@Args('updateToDoInput') updateToDoInput: UpdateToDoInput) {
  //   return this.toDoService.update(updateToDoInput.id, updateToDoInput);
  // }

  // @Mutation(() => ToDo)
  // removeToDo(@Args('id', { type: () => Int }) id: number) {
  //   return this.toDoService.remove(id);
  // }
}
