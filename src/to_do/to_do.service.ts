import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateToDoInput } from './dto/create-to_do.input';
import { UpdateToDoInput } from './dto/update-to_do.input';
import {  To_doEntity, To_doInput } from './entities/to_do.entity';

@Injectable()
export class ToDoService {
  constructor(
    @InjectRepository(To_doEntity) private todosRepository: Repository<To_doEntity>
  ) {}

  // create(todo: CreateToDoInput): Promise<ToDo> {
  //   const newPost = this.todosRepository.create(todo);
  //   return this.todosRepository.save(newPost);
  // }

  insert(to_do: To_doInput): string {
    console.log(`good to go with`, to_do);
    
    const q = "exec [dbo].[To_DO_List_Insert] @To_Name='"+to_do.To_Do_Name + "', @Date='"+to_do.To_Do_Date +  "', @Time='"+to_do.To_Do_Time +"', @Remark='" + to_do.Remark+ "'";
    console.log(q);
    this.todosRepository.query(q);
    return 'success';
  }

  async findAll(): Promise<To_doEntity[]> {
    const res = await this.todosRepository.query(
      'exec [dbo].[To_DO_List_Get]',
    );
    console.log(res, 'hello');
    
    return res;
  }

  // findOne(id: number): Promise<ToDo> {
  //   return this.todosRepository.findOne({
  //     where: {
  //       id,
  //     },
  //   });
  // }

  // update(id: number, updateToDoInput: UpdateToDoInput) {
  //   return `This action updates a #${id} toDo`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} toDo`;
  // }
}
