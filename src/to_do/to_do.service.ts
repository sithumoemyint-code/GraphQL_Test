import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateToDoInput } from './dto/create-to_do.input';
import { UpdateToDoInput } from './dto/update-to_do.input';
import { ToDo } from './entities/to_do.entity';

@Injectable()
export class ToDoService {
  constructor(
    @InjectRepository(ToDo) private todosRepository: Repository<ToDo>
  ) {}

  create(todo: CreateToDoInput): Promise<ToDo> {
    const newPost = this.todosRepository.create(todo);
    return this.todosRepository.save(newPost);
  }

  async findAll(): Promise<ToDo[]> {
    return this.todosRepository.find();
  }

  findOne(id: number): Promise<ToDo> {
    return this.todosRepository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateToDoInput: UpdateToDoInput) {
    return `This action updates a #${id} toDo`;
  }

  remove(id: number) {
    return `This action removes a #${id} toDo`;
  }
}
