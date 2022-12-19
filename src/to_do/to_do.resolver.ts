import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ToDoService } from './to_do.service';
import { ToDo } from './entities/to_do.entity';
import { CreateToDoInput } from './dto/create-to_do.input';
import { UpdateToDoInput } from './dto/update-to_do.input';

@Resolver(() => ToDo)
export class ToDoResolver {
  constructor(private readonly toDoService: ToDoService) {}

  @Mutation((returns) => ToDo)
  createToDo(@Args('createToDoInput') createToDoInput: CreateToDoInput) {
    return this.toDoService.create(createToDoInput);
  }

  @Query((returns) => [ToDo])
  todos() {
    return this.toDoService.findAll();
  }

  @Query((returns) => ToDo)
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.toDoService.findOne(id);
  }

  @Mutation(() => ToDo)
  updateToDo(@Args('updateToDoInput') updateToDoInput: UpdateToDoInput) {
    return this.toDoService.update(updateToDoInput.id, updateToDoInput);
  }

  @Mutation(() => ToDo)
  removeToDo(@Args('id', { type: () => Int }) id: number) {
    return this.toDoService.remove(id);
  }
}
