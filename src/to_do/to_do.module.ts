import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ToDoService } from './to_do.service';
import { ToDoResolver } from './to_do.resolver';
import { ToDo } from './entities/to_do.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ToDo])],
  providers: [ToDoResolver, ToDoService],
})
export class ToDoModule {}
